// assets/main.js

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".chapter-btn");
  const container = document.getElementById("formula-container");
  const titleEl = document.getElementById("section-title");

  if (!buttons || !container) return;

  buttons.forEach((btn) => {
    btn.addEventListener("click", async () => {
      const mdPath = btn.getAttribute("data-md");
      const textTitle = btn.textContent.trim();

      // アクティブ切り替え
      buttons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      if (!mdPath) return;

      // 見出しと読み込み中表示
      if (titleEl) titleEl.textContent = textTitle;
      container.innerHTML = "<p>読み込み中...</p>";

      try {
        const res = await fetch(mdPath);
        if (!res.ok) throw new Error(`HTTP error: ${res.status}`);

        const mdText = await res.text();

        // ★ 数式中の \{, \}, \\ を保護する前処理
        const processedMdText = preprocessMathBracesInMarkdown(mdText);

        // Markdown → HTML
        const html = window.marked.parse(processedMdText);
        container.innerHTML = html;

        // KaTeX 自動レンダリング
        if (window.renderMathInElement) {
          window.renderMathInElement(container, {
            delimiters: [
              { left: "$$", right: "$$", display: true },
              { left: "$", right: "$", display: false },
              { left: "\\(", right: "\\)", display: false },
              { left: "\\[", right: "\\]", display: true },
            ],
            // // ★ 追加：HTMLだけ出力（MathMLを生成しない）
            // output: "html",
          });
        }

        // LaTeXコピー用ボタンを追加（ブロック数式のみ）
        attachLatexCopyButtons(container);

      } catch (err) {
        console.error(err);
        container.innerHTML =
          '<p class="error">読み込みに失敗しました。</p>';
      }
    });
  });
});

/**
 * ブロック数式（.katex-display）に
 * 「📋 LaTeXをコピー」ボタンを付与する
 */
function attachLatexCopyButtons(root) {
  if (!root) return;

  const displayBlocks = root.querySelectorAll(".katex-display");

  displayBlocks.forEach((displayEl) => {
    // すでに追加済みならスキップ
    if (
      displayEl.nextElementSibling &&
      displayEl.nextElementSibling.classList &&
      displayEl.nextElementSibling.classList.contains("copy-btn-wrapper")
    ) {
      return;
    }

    const katexEl = displayEl.querySelector(".katex");
    if (!katexEl) return;

    // LaTeXソースは annotation から取得
    const annotation = katexEl.querySelector(
      "annotation[encoding='application/x-tex']"
    );
    if (!annotation) return;

    const latexSource = annotation.textContent.trim();
    if (!latexSource) return;

    // ===== ボタン置き場（右下に寄せる） =====
    const wrapper = document.createElement("div");
    wrapper.className = "copy-btn-wrapper";

    // ===== LaTeXコピー用ボタン =====
    const btn = document.createElement("button");
    btn.className = "copy-latex-btn";
    btn.textContent = "📋 LaTeXをコピー";

    btn.addEventListener("click", async (ev) => {
      ev.stopPropagation();

      try {
        if (navigator.clipboard?.writeText) {
          await navigator.clipboard.writeText(latexSource);
        } else {
          // 古いブラウザ用フォールバック
          window.prompt("以下をコピーしてください：", latexSource);
        }

        temporarilyLabelButton(btn, "✅ コピーしました", 1500);
      } catch (err) {
        console.error(err);
        window.prompt(
          "コピーに失敗しました。以下をコピーしてください：",
          latexSource
        );
      }
    });

    wrapper.appendChild(btn);

    // ブロック数式の直後に配置
    displayEl.insertAdjacentElement("afterend", wrapper);
  });
}

/**
 * ボタンのラベルを一時変更するヘルパー
 */
function temporarilyLabelButton(btn, message, ms) {
  const original = btn.textContent;
  btn.textContent = message;
  setTimeout(() => (btn.textContent = original), ms);
}

/**
 * Markdown テキスト中の「数式部分」だけを取り出し、
 * その中の \{, \}, \\ を保護する。
 *
 * 対象の数式区間：
 *   $ ... $
 *   $$ ... $$
 *   \( ... \)
 *   \[ ... \]
 *
 * .md では：
 *   \{, \}, \left\{, \right\}, \\ と素直に書いてOK
 */
function preprocessMathBracesInMarkdown(mdText) {
  if (!mdText) return mdText;

  // $...$ および $$...$$
  mdText = mdText.replace(
    /(\${1,2})([\s\S]*?)(\1)/g,
    (match, delim, body, closing) => {
      const processedBody = escapeBracesInMath(body);
      return delim + processedBody + closing;
    }
  );

  // \( ... \)
  mdText = mdText.replace(
    /(\\\()([\s\S]*?)(\\\))/g,
    (match, open, body, close) => {
      const processedBody = escapeBracesInMath(body);
      return open + processedBody + close;
    }
  );

  // \[ ... \]
  mdText = mdText.replace(
    /(\\\[)([\s\S]*?)(\\\])/g,
    (match, open, body, close) => {
      const processedBody = escapeBracesInMath(body);
      return open + processedBody + close;
    }
  );

  return mdText;
}

/**
 * 1つの「数式文字列」中で
 *   - 改行 `\\` を `\\\\` に（2 → 4）
 *   - \{ を \\{ に
 *   - \} を \\} に
 * にして、Markdown によるバックスラッシュ潰れを防ぐ。
 *
 * 流れのイメージ：
 *   .md:     \{, \}, \left\{, \right\}, \\
 *   JS前処理: \\{, \\}, \left\\{, \right\\}, \\\\ （4つ）
 *   Markdown: \{,  \},  \left\{, \right\},  \\   （2つ）
 *   KaTeX:   {,  },  left{,  right},  改行 として解釈
 */
function escapeBracesInMath(mathText) {
  if (!mathText) return mathText;

  return (
    mathText
      // 1) 改行 `\\` をまず保護（ここが先！）
      .replace(/\\\\/g, "\\\\\\\\") // \\ → \\\\（2 → 4）

      // 2) \{ と \} を保護（\left\{ / \right\} も自動的に含まれる）
      .replace(/\\\{/g, "\\\\{") // \{ → \\{
      .replace(/\\\}/g, "\\\\}") // \} → \\}
  );
}
