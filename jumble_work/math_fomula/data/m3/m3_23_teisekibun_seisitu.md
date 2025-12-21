### 基本式

$$\int_{a}^{b}{f(x)dx} = \left\lbrack \begin{matrix}
\  \\
\ 
\end{matrix}F(x)\begin{matrix}
\  \\
\ 
\end{matrix} \right\rbrack_{a}^{b} = F(b) - F(a)$$

定積分の公式は数Ⅱの定積分参照

<br>

### 計算式の例

$$\int_{e}^{e^{2}}\dfrac{dx}{x} = \left\lbrack \begin{matrix}
\  \\
\ 
\end{matrix}\log|x|\begin{matrix}
\  \\
\ 
\end{matrix} \right\rbrack_{e}^{e^{2}} = \log e^{2} - \log e = 1$$
$$\int_{- \pi}^{\pi}{\cos\theta d\theta} = \left\lbrack \begin{matrix}
\  \\
\ 
\end{matrix}\sin\theta\begin{matrix}
\  \\
\ 
\end{matrix} \right\rbrack_{- \pi}^{\pi} = 0$$
$$\int_{0}^{1}{e^{3x}dx} = \left\lbrack\ \dfrac{1}{3}e^{3x}\ \right\rbrack_{0}^{1} = \dfrac{1}{3}e^{3} - \dfrac{1}{3}$$
<br>

$$\begin{aligned}
\int_{0}^{1}{\dfrac{(x + 3)^{2}}{x + 1}dx} 
&= \int_{0}^{1}{\dfrac{\left\{ (x + 1) + 2 \right\}^{2}}{x + 1}dx} = \int_{0}^{1}{\left\{ (x + 1) + 4 + \dfrac{4}{x + 1} \right\} dx} \\
&= \left\lbrack \ \dfrac{1}{2}(x + 1)^{2} + 4(x + 1) + 4\log|x + 1|\ \right\rbrack_{0}^{1} \\
&= \left( 2 + 8 + 4\log 2 \right) - \left( \dfrac{1}{2} + 4 + 0 \right) = \dfrac{11}{2} + 4\log 2
\end{aligned}$$
<br>

$$\begin{aligned}
\int_{- 1}^{1}\dfrac{dx}{x^{2} - 5x + 6} 
&= \int_{- 1}^{1}\dfrac{dx}{(x - 2)(x - 3)} = \int_{- 1}^{1}{\left( \dfrac{1}{x - 3} - \dfrac{1}{x - 2} \right)dx} \\
&= \left\lbrack \ \log|x - 3| - \log|x - 2|\begin{matrix}
\  \\
\ 
\end{matrix} \right\rbrack_{- 1}^{1} = \left\lbrack \ \log\left| \dfrac{x - 3}{x - 2} \right|\ \right\rbrack_{- 1}^{1} \\
&= \log 2 - \log\dfrac{4}{3} = \log\dfrac{3}{2}
\end{aligned}$$
<br>

$$\int_{0}^{9}{\left| \sqrt{x} - 2 \right|dx} = \int_{0}^{4}{\left( 2 - \sqrt{x} \right)dx} + \int_{4}^{9}{\left( \sqrt{x} - 2 \right)dx}$$