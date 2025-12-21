### 基本式

$$\int_{}^{}{f(x)g'(x)dx} = f(x)g(x) - \int_{}^{}{f'(x)g(x)dx}$$
<br>

#### $g'(x)=1$ と考える変形
$$\int_{}^{}{f(x)dx} = xf(x) - \int_{}^{}{xf'(x)dx}$$
$$\int_{}^{}{\log xdx} = x\log x - \int_{}^{}{dx} = x\log x - x + C$$
<br>

### 計算式の例

$$\int_{}^{}{xe^{x}dx} = xe^{x} - \int_{}^{}{e^{x}dx} = xe^{x} - e^{x} + C = (1 + x\ )e^{x} + C$$
$$\begin{array}{ll}
f(x) = x,\enspace g'(x) = e^{x} \\[.5em]
f'(x) = 1,\enspace g(x) = e^{x}
\end{array}$$
<br>

$$\begin{aligned}
\int_{}^{}{x^{3}\log xdx} 
&= \dfrac{1}{4}x^{4}\log x - \int_{}^{}{\dfrac{1}{x} \cdot \dfrac{1}{4}x^{4}dx} \\[.8em]
&= \dfrac{1}{4}x^{4}\log x - \dfrac{1}{4}\int_{}^{}{x^{3}dx} = \dfrac{1}{4}x^{4}\log x - \dfrac{1}{16}x^{4} + C
\end{aligned}$$
$$\begin{array}{ll}
f(x) = \log x,\ \ \ g'(x) = x^{3} \\[.5em]
f'(x) = \dfrac{1}{x},\ \ \ g(x) = \dfrac{1}{4}x^{4}
\end{array}$$
<br>

$$\begin{aligned}
\int_{}^{}{x^{2}\sin xdx} 
&= - x^{2}\cos x - \int_{}^{}{2x \cdot \left( - \cos x \right)dx} = - x^{2}\cos x + \int_{}^{}{2x\cos xdx} \\[.8em]
&= - x^{2}\cos x + 2x\sin x - \int_{}^{}{2\sin xdx} = - x^{2}\cos x + 2x\sin x + 2\cos x + C
\end{aligned}$$
$$\begin{array}{ll}
f(x) = x^{2},\ \ \ g'(x) = \sin x \\[.5em]
f'(x) = 2x,\ \ \ g(x) = - \cos x
\end{array}$$
<br>

$$\int_{}^{}{2x\cos xdx} = 2x\sin x - \int_{}^{}{2\sin xdx} = 2x\sin x + 2\cos x + C$$
$$\begin{array}{ll}
f(x) = 2x,\ \ \ g'(x) = \cos x \\[.5em]
f'(x) = 2,\ \ \ g(x) = \sin x
\end{array}$$
