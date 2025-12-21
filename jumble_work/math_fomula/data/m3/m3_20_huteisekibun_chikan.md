### 基本式  
$$F'(x) = f(x)$$
$$\int_{}^{}{f(ax + b)dx} = \dfrac{1}{a}F(ax + b) + C$$
<br>

$$x = g(t)$$
$$\int_{}^{}{f(x)dx} = \int_{}^{}{f\left( g(t) \right)g'(t)dt}$$
<br>

$$g(x) = u$$
$$\int_{}^{}{f\left( g(x) \right)g'(x)dx} = \int_{}^{}{f(u)du}$$
<br>

$$\int_{}^{}{\dfrac{g'(x)}{g(x)}dx} = \log\left| g(x) \right| + C$$
<br>

### 計算式の例

$$\int_{}^{}{(3x - 1)^{3}dx} = \dfrac{1}{4}(3x - 1)^{4} \cdot \dfrac{1}{3} + C = \dfrac{1}{12}(3x - 1)^{4} + C$$
<br>

$$\int_{}^{}{\sin(2x - 3)dx} = - \cos(2x - 3) \cdot \dfrac{1}{2} + C = - \dfrac{1}{2}\cos(2x - 3) + C$$
<br>

$\sqrt{x + 2} = t$ とするとき $x + 2 = t^{2}$ より，$\dfrac{dx}{dt} = 2t$  

$$\begin{aligned}
\int_{}^{}{x\sqrt{x + 2}dx} 
&= \int_{}^{}{\left( t^{2} - 2 \right)t \cdot 2tdt} = \int_{}^{}{\left( 2t^{4} - 4t^{2} \right)dt} \\[.8em]
&= \dfrac{2}{5}t^{5} - \dfrac{4}{3}t^{3} + C = \left\{ \dfrac{2}{5}(x + 2) - \dfrac{4}{3} \right\}(x + 2)\sqrt{x + 2} + C \\[.8em]
&= \dfrac{2}{15}(3x - 4)(x + 2)\sqrt{x + 2} + C
\end{aligned}$$
