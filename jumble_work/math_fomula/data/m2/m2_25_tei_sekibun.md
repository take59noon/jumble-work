### 基本式  
$$\int_{a}^{b}{f(x)dx} = \left\lbrack \begin{matrix}
\  \\
\ 
\end{matrix}F(x)\begin{matrix}
\  \\
\ 
\end{matrix} \right\rbrack_{a}^{b} = F(b) - F(a)$$
$$\int_{a}^{b}{\left\{ kf(x) + lg(x) \right\} dx} = k\int_{a}^{b}{f(x)dx} + l\int_{a}^{b}{f(x)dx}$$
<br>

$$\int_{a}^{b}{f(x)dx} = \int_{a}^{b}{f(t)dt}$$
$$\int_{a}^{a}{f(x)dx} = 0$$
$$\int_{a}^{b}{f(x)dx} = - \int_{b}^{a}{f(x)dx}$$
$$\int_{a}^{b}{f(x)dx} = \int_{a}^{c}{f(x)dx} + \int_{c}^{b}{f(x)dx}$$
<br>


### 偶関数・奇関数と定積分

$$\int_{- a}^{a}{x^{2n}dx} = 2\int_{0}^{a}{x^{2n}dx}$$
$$\int_{- a}^{a}{x^{2n + 1}dx} = 0$$
<br>


### 定積分の重要公式

$$\int_{\alpha}^{\beta}{(x - \alpha)(x - \beta)dx} = - \dfrac{1}{6}(\beta - \alpha)^{3}$$
<br>

#### 計算式の例  

$$\begin{aligned}\int_{2}^{4}{(x - 1)(x - 2)dx} 
& = \int_{2}^{4}{\left( x^{2} - 3x + 2 \right)dx} \\[.8em]
& = \left\lbrack \dfrac{1}{3}x^{3} - \dfrac{3}{2}x^{2} + 2x \right\rbrack_{a}^{b} \\[.8em]
& = \left( \dfrac{1}{3} \cdot 4^{3} - \dfrac{3}{2} \cdot 4^{2} + 2 \cdot 4 \right) - \left( \dfrac{1}{3} \cdot 2^{3} - \dfrac{3}{2} \cdot 2^{2} + 2 \cdot 2 \right) \\[.8em]
& = \dfrac{56}{3} - 14 = \dfrac{14}{3}
\end{aligned}$$
<br>

$$\begin{aligned}
\int_{- 1 - \sqrt{2}}^{- 1 + \sqrt{2}}{\left\{ (1 - x) - \left( x^{2} + x \right) \right\} dx} 
& = \int_{- 1 - \sqrt{2}}^{- 1 + \sqrt{2}}{\left( - x^{2} - 2x + 1 \right)dx} \\[.8em]
& = - \int_{- 1 - \sqrt{2}}^{- 1 + \sqrt{2}}{\left( x^{2} + 2x - 1 \right)dx} \\[.8em]
& = \dfrac{\left\{ \left( - 1 + \sqrt{2} \right) - \left( - 1 - \sqrt{2} \right) \right\}^{3}}{6} = \dfrac{\left( 2\sqrt{2} \right)^{3}}{6} \\[.8em]
& = \dfrac{8\sqrt{2}}{3}
\end{aligned}$$

