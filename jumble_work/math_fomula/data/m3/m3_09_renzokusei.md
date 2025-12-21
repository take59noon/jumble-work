### 連続性  
$$\textrm{関数 $f(x)$ が $x = a$ で連続 \ $\Longleftrightarrow$ \ $\displaystyle\lim_{x \rightarrow a}{f(x)}$ が存在し，かつ $\displaystyle\lim_{x \rightarrow a}{f(x)} = f(a)$}$$
<br>

### 関数の例

$$f(x) = \begin{cases}
    \dfrac{x^{2} + 3x}{|x|} & (x \neq 0) \\[.8em]
    0 & (x = 0)
\end{cases}$$

$$f(x) = \begin{cases}
    ax + 1 & (x > 2) \\[.3em]
    x^{2} & (x \leqq 2)
\end{cases}$$
<br>

### 計算式の例

$$y = \lim_{n \rightarrow \infty}\dfrac{x^{2}\left( 1 - x^{n} \right)}{1 + |x|^{n}}$$

$- 1 < x < 1$ のとき，$\displaystyle\lim_{n \rightarrow \infty}x^{n} = 0$ であるから，$y = x^{2}$  

$x = 1$のとき，$y = 0$  

$1 < x$ のとき，  

$$y = \lim_{n \rightarrow \infty}\dfrac{x^{2}\left( 1 - x^{n} \right)}{1 + x^{n}} = \lim_{n \rightarrow \infty}\dfrac{x^{2}\left\{ \left( \dfrac{1}{x} \right)^{n} - 1 \right\}}{\left( \dfrac{1}{x} \right)^{n} + 1} = - x^{2}$$

$x = - 1$ のとき，$y = \displaystyle\lim_{n \rightarrow \infty}\dfrac{1 - ( - 1)^{n}}{2}$ から極限はない  

$x < - 1$ のとき，

$$y = \lim_{n \rightarrow \infty}\dfrac{x^{2}\left( 1 - x^{n} \right)}{1 + ( - x)^{n}} = \lim_{n \rightarrow \infty}\dfrac{x^{2}\left\{ \dfrac{1}{( - x)^{n}} - ( - 1)^{n} \right\}}{\dfrac{1}{( - x)^{n}} + 1}$$

から極限はない
