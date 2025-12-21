### 基本式  

$\displaystyle\lim_{x \rightarrow a}{f(x)} = \alpha$，$\displaystyle\lim_{x \rightarrow a}{g(x)} = \beta$ とし，$k$，$l$ は定数とする．  
<br>

$$\lim_{x \rightarrow a}\left\{ kf(x) + lg(x) \right\} = k\alpha + l\beta$$
$$\lim_{x \rightarrow a}{f(x)g(x)} = \alpha\beta$$
$$\lim_{x \rightarrow a}\dfrac{f(x)}{g(x)} = \dfrac{\alpha}{\beta}$$
<br>

$$\lim_{x \rightarrow a + 0}{f(x)} = \lim_{x \rightarrow a - 0}{f(x)} = \alpha\ \ \  \Longleftrightarrow \ \ \ \lim_{x \rightarrow a}{f(x)} = \alpha$$
<br>

### 計算式の例  
$$\lim_{x \rightarrow 1}\dfrac{x^{2} + x - 2}{x^{2} - 4x + 3} = \lim_{x \rightarrow 1}\dfrac{(x + 2)(x - 1)}{(x - 1)(x - 3)} = \lim_{x \rightarrow 1}\dfrac{x + 2}{x - 3} = - \dfrac{3}{2}$$
<br>

$$\lim_{x \rightarrow - \infty}\dfrac{3x^{2} - 5x - 2}{x^{2} - 3x + 2} = \lim_{x \rightarrow - \infty}\dfrac{3 - \dfrac{5}{x} - \dfrac{2}{x^{2}}}{1 - \dfrac{3}{x} + \dfrac{2}{x^{2}}} = 3$$
<br>

$$\begin{aligned}
\lim_{x \rightarrow - \infty}\left( \sqrt{x^{2} + 4x} + x \right) 
&= \lim_{t \rightarrow \infty}\left( \sqrt{t^{2} - 4t} - t \right) \\[.8em]
&= \lim_{t \rightarrow \infty}\dfrac{\left( \sqrt{t^{2} - 4t} - t \right)\left( \sqrt{t^{2} - 4t} + t \right)}{\sqrt{t^{2} - 4t} + t} \\[.8em]
&= \lim_{t \rightarrow \infty}\dfrac{- 4t}{\sqrt{t^{2} - 4t} + t} = \lim_{t \rightarrow \infty}\dfrac{- 4}{\sqrt{1 - \dfrac{4}{t}} + 1} = - 2 
\end{aligned}$$
