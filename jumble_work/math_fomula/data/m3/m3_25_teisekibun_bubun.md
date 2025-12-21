### 基本式
$$\int_{a}^{b}{f(x)g'(x)dx} = \left\lbrack \begin{matrix}
\  \\
\ 
\end{matrix}f(x)g(x)\begin{matrix}
\  \\
\ 
\end{matrix} \right\rbrack_{a}^{b} - \int_{a}^{b}{f'(x)g(x)dx}$$
$$\int_{a}^{b}{f(x)dx} = \left\lbrack \begin{matrix}
\  \\
\ 
\end{matrix}xf(x)\begin{matrix}
\  \\
\ 
\end{matrix} \right\rbrack_{a}^{b} - \int_{a}^{b}{xf'(x)dx}$$
<br>

### 定積分の重要公式

$$\int_{\alpha}^{\beta}{(x - \alpha)(x - \beta)dx} = - \dfrac{1}{6}(\beta - \alpha)^{3}$$
$$\int_{\alpha}^{\beta}{(x - \alpha)^{2}(x - \beta)dx} = - \dfrac{1}{12}(\beta - \alpha)^{4}$$
$$\int_{\alpha}^{\beta}{(x - \alpha)^{3}(x - \beta)dx} = - \dfrac{1}{20}(\beta - \alpha)^{5}$$
<br>

### 計算式の例

$$\begin{aligned}
\int_{0}^{1}{\log\big( x + \sqrt{1 + x^{2}} \big)dx} 
&= \int_{0}^{1}{(x)'\log\big( x + \sqrt{1 + x^{2}} \big)dx} \\[.8em]
&= \left\lbrack \ x\log\big( x + \sqrt{1 + x^{2}} \big)\begin{matrix}
\  \\
\ 
\end{matrix} \right\rbrack_{0}^{1} - \int_{0}^{1}{\dfrac{x}{\sqrt{1 + x^{2}}}dx} \\[.8em]
&= \log\left( 1 + \sqrt{2} \right) - \int_{0}^{1}{\dfrac{x}{\sqrt{1 + x^{2}}}dx}
\end{aligned}$$

$1 + x^{2} = t$ とおく．

$2xdx = dt$， $x:0 \longrightarrow 1$，　$t: 1 \longrightarrow 2$  

$$\int_{0}^{1}{\dfrac{x}{\sqrt{1 + x^{2}}}dx} = \int_{1}^{2}\dfrac{dt}{2\sqrt{t}} = \left\lbrack\begin{matrix}
\  \\
\ 
\end{matrix} t^{\frac{1}{2}}\begin{matrix}
\  \\
\ 
\end{matrix} \right\rbrack_{1}^{2} = \sqrt{2} - 1$$

以上より  

$$\int_{0}^{1}{\log\big( x + \sqrt{1 + x^{2}} \big)dx} = \log\big( 1 + \sqrt{2} \big) - \sqrt{2} + 1$$
