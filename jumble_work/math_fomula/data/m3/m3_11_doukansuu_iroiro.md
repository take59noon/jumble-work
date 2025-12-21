### 基本式 
$$\left( \sin x \right)' = \cos x$$
$$\left( \cos x \right)' = - \sin x$$
$$\left( \tan x \right)' = \dfrac{1}{\cos^{2}x}$$
<br>

$$e = \lim_{k \rightarrow 0}(1 + k)^{\frac{1}{k}} = 2.71828\cdots$$
<br>

$$\left( \log|x| \right)' = \dfrac{1}{x}$$
$$\left( \log_{a}|x| \right)' = \dfrac{1}{x\log a}$$
$$\left\{ \log\left| f(x) \right| \right\}' = \dfrac{f'(x)}{f(x)}$$
<br>

$$\left( e^{x} \right)' = e^{x}$$
$$\left( a^{x} \right)' = a^{x}\log a$$


### 対数微分法

$$y = \dfrac{(x + 1)^{2}}{(x + 2)^{3}(x + 3)^{4}}$$

$$\begin{aligned}
\log y 
&= \log\dfrac{(x + 1)^{2}}{(x + 2)^{3}(x + 3)^{4}} \\[.8em]
&= 2\log(x + 1) - 3\log(x + 2) - 4\log(x + 3)
\end{aligned}$$

$$\begin{aligned}
\dfrac{y'}{y} 
&= \dfrac{2}{x + 1} - \dfrac{3}{x + 2} - \dfrac{4}{x + 3} \\[.8em]
&= \dfrac{2(x + 2)(x + 3) - 3(x + 1)(x + 3) - 4(x + 1)(x + 2)}{(x + 1)(x + 2)(x + 3)} \\[.8em]
&= \dfrac{- 5x^{2} - 14x - 5}{(x + 1)(x + 2)(x + 3)}
\end{aligned}$$

$$\begin{aligned}
y' 
&= \dfrac{- 5x^{2} - 14x - 5}{(x + 1)(x + 2)(x + 3)} \cdot \dfrac{(x + 1)^{2}}{(x + 2)^{3}(x + 3)^{4}} \\[.8em]
&= - \dfrac{\left( 5x^{2} + 14x + 5 \right)(x + 1)}{(x + 2)^{4}(x + 3)^{5}}
\end{aligned}$$
