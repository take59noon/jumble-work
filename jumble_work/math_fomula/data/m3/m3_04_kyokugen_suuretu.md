### 基本式

$$\lim_{n \rightarrow \infty}a_{n} = \infty$$
<br>

数列 $\left\{ a_{n} \right\}$，$\left\{ b_{n} \right\}$ が収束して，$\displaystyle\lim_{n \rightarrow \infty}a_{n} = \alpha$，$\displaystyle\lim_{n \rightarrow \infty}b_{n} = \beta$ とする．  
<br>
$$\lim_{n \rightarrow \infty}\left( ka_{n} + lb_{n} \right) = k\alpha + l\beta$$
$$\lim_{n \rightarrow \infty}{a_{n}b_{n}} = \alpha\beta$$
$$\lim_{n \rightarrow \infty}\dfrac{a_{n}}{b_{n}} = \dfrac{\alpha}{\beta}$$
<br>

すべての $n$ について $a_{n} \leqq c_{n} \leqq b_{n}$ かつ $\alpha = \beta$ ならば数列$\left\{ c_{n} \right\}$ は収束し，  
<br>
$$\lim_{n \rightarrow \infty}c_{n} = \alpha$$
<br>

### 計算式の例

$$\displaystyle\lim_{n \rightarrow \infty}{f(n)}$$
<br>

$$\lim_{n \rightarrow \infty}\dfrac{\sqrt{4n}}{\sqrt{n + 1} + \sqrt{9n}} = \lim_{n \rightarrow \infty}\dfrac{\sqrt{4}}{\sqrt{1 + \dfrac{1}{n}} + \sqrt{9}} = \lim_{n \rightarrow \infty}\dfrac{2}{\sqrt{1 + \dfrac{1}{n}} + 3} = \dfrac{2}{1 + 3} = \dfrac{1}{2}$$
<br>

$$\begin{aligned}
\lim_{n \rightarrow \infty}\left( n - \sqrt{n^{2} + 3} \right) 
&= \lim_{n \rightarrow \infty}\dfrac{\left( n - \sqrt{n^{2} + 3} \right)\left( n + \sqrt{n^{2} + 3} \right)}{n + \sqrt{n^{2} + 3}} \\[1em]
&= \lim_{n \rightarrow \infty}\dfrac{n^{2} - \left( n^{2} + 3 \right)}{n + \sqrt{n^{2} + 3}} = \lim_{n \rightarrow \infty}\dfrac{- 3}{n + \sqrt{n^{2} + 3}} = 0
\end{aligned}$$
<br>

極限 $\displaystyle\lim_{n \rightarrow \infty}{\dfrac{1}{n}\cos n}$ を求めよ．  
$- 1 \leqq \cos{n} \leqq 1$ より，$\dfrac{1}{n} \leqq \dfrac{1}{n}\cos{n} \leqq \dfrac{1}{n}$

$\displaystyle\lim_{n \rightarrow \infty}\left( - \dfrac{1}{n} \right) = 0$，$\displaystyle\lim_{n \rightarrow \infty}\left( \dfrac{1}{n} \right) = 0$ であるから，$\displaystyle\lim_{n \rightarrow \infty}{\dfrac{1}{n}\cos{n}} = 0$
