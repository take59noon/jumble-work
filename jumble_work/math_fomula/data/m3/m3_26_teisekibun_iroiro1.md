### 基本式
$$\dfrac{d}{dx}\int_{a}^{x}{f(t)dt} = f(x)$$
$$\dfrac{d}{dx}\int_{h(x)}^{g(x)}{f(t)dt} = f\left( g(x) \right)g'(x) - f\left( h(x) \right)h'(x)$$
<br>

### 計算式の例

次の関数を $x$ について微分せよ．

$x > 0$ とする．

$$\int_{1}^{x}{(t - 1)\log tdt}$$
$$\dfrac{d}{dx}\int_{1}^{x}{(t - 1)\log tdt} = (x - 1)\log x$$
<br>

$$\int_{0}^{x}{\left( x^{2} + xt \right)dt}$$
$$\begin{aligned}
\dfrac{d}{dx}\int_{0}^{x}{\left( x^{2} + xt \right)dt} 
&= \dfrac{d}{dx}\bigg\{ x^{2}\int_{0}^{x}{dt} + x\int_{0}^{x}{tdt} \bigg\} \\[.8em]
&= \left( 2x\int_{0}^{x}{dt} + x^{2} \cdot 1 \right) + \left( 1 \cdot \int_{0}^{x}{tdt} + x \cdot x \right) \\[.8em]
&= 2x^{2} + x^{2} + \dfrac{1}{2}x^{2} + x^{2} = \dfrac{9}{2}x^{2}
\end{aligned}$$

#### 積分方程式の例

$$\int_{0}^{x}{f(t)dt} = e^{x} + 2x - 1$$
$$f(x) = x + \int_{0}^{1}{f(t)e^{x + t}dt}$$
