function updateClock() {
    const now = new Date();

    // 端末のタイムゾーン設定に依存せず、強制的に日本時間（JST）の要素を取得
    const jstHour = (now.getUTCHours() + 9) % 24;
    const jstMin = now.getUTCMinutes();
    const jstSec = now.getUTCSeconds();
    const jstMs = now.getUTCMilliseconds();

    // ----------------------------------------
    // 1. 通常時刻(JST)のフォーマット
    // ----------------------------------------
    const normalTimeStr = 
        String(jstHour).padStart(2, '0') + ':' +
        String(jstMin).padStart(2, '0') + ':' +
        String(jstSec).padStart(2, '0');

    // ----------------------------------------
    // 2. 32時間時計の計算
    // ----------------------------------------
    // 直近の5:00:00からの経過時間を計算
    let elapsedHour = jstHour >= 5 ? jstHour - 5 : (jstHour + 24) - 5;
    
    // 秒単位だけでなくミリ秒まで含めて経過時間を計算する
    // （表示の切り捨て処理で 31:59:59 がスキップされないようにするため）
    let elapsedMs = (elapsedHour * 3600000) + (jstMin * 60000) + (jstSec * 1000) + jstMs;

    // 32時間時計の経過秒数 (通常秒数 × 4/3) を求め、小数切り捨て
    let specialTotalSec = Math.floor((elapsedMs / 1000) * (4 / 3));

    // 翌5:00:00ぴったりになった瞬間に 00:00:00 に戻るよう保護
    if (specialTotalSec >= 115200) { // 32時間 = 115200秒
        specialTotalSec = 0;
    }

    // 時・分・秒に分解
    let specialHour = Math.floor(specialTotalSec / 3600);
    let specialMin = Math.floor((specialTotalSec % 3600) / 60);
    let specialSecRemaining = specialTotalSec % 60;

    const specialTimeStr = 
        String(specialHour).padStart(2, '0') + ':' +
        String(specialMin).padStart(2, '0') + ':' +
        String(specialSecRemaining).padStart(2, '0');

    // ----------------------------------------
    // 3. 画面の更新
    // ----------------------------------------
    document.getElementById('main-special-clock').textContent = specialTimeStr;
    document.getElementById('sub-normal-clock').textContent = normalTimeStr;
    document.getElementById('sub-special-clock').textContent = specialTimeStr;
}

// 読み込み時に即時実行
updateClock();

// 32時間時計は通常時計の1.33倍の速さで進むため、
// 100ミリ秒間隔で更新することで、秒数の飛びや描画遅延を防ぎ滑らかに表示します。
setInterval(updateClock, 100);