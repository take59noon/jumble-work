### 計算式の例

#### $\displaystyle\int{\dfrac{f'(x)}{f(x)}dx}=\log|f(x)|+C$  

$$\int_{}^{}{\dfrac{2x + 1}{x(x + 1)}dx} = \int_{}^{}{\dfrac{\left( x^{2} + x \right)'}{x^{2} + x}dx} = \log\left| x^{2} + x \right| + C$$
<br>

#### 部分分数分解  
$$\begin{aligned}
\int_{}^{}\dfrac{dx}{x^{2} - 3x + 2} 
&= \int_{}^{}\dfrac{dx}{(x - 1)(x - 2)} = \int_{}^{}{\left( \dfrac{1}{x - 2} - \dfrac{1}{x - 1} \right)dx} \\[.8em]
&= \log|x - 2| - \log|x - 1| + C = \log\left| \dfrac{x - 2}{x - 1} \right| + C
\end{aligned}$$
<br>

#### 三角関数  

$$\int_{}^{}{\sin^{2}{2x}dx} = \int_{}^{}{\dfrac{1 - \cos{4x}}{2}dx} = \dfrac{1}{2}x - \dfrac{1}{8}\sin{4x} + C$$
$$\begin{aligned}
\int_{}^{}{\sin x\cos{4x}dx} 
&= \int_{}^{}{\cos{4x}\sin xdx} = \int_{}^{}{\dfrac{1}{2}(\sin{5x} - \sin{3x}) dx} \\[.8em]
&= - \dfrac{1}{10}\cos{5x} + \dfrac{1}{6}\cos{3x} + C
\end{aligned}$$
$$\begin{aligned}
\int_{}^{}{\sin^{5}xdx} 
&= \int_{}^{}{\sin x\left( 1 - \cos^{2}x \right)^{2}dx} = \int_{}^{}{\sin x\left( 1 - 2\cos^{2}x + \cos^{4}x \right)dx} \\[.8em]
&= \int_{}^{}{\left( \sin x - 2\sin x\cos^{2}x + \sin x\cos^{4}x \right)dx} = - \cos x + \dfrac{2}{3}\cos^{3}x - \dfrac{1}{5}\cos^{5}x + C
\end{aligned}$$
<br>

#### $I = \int_{}^{}{e^{x}\sin xdx}$ とおく．  

$$\begin{aligned}
I &= \int_{}^{}{\left( e^{x} \right)'\sin xdx} = e^{x}\sin x - \int_{}^{}{e^{x}\cos xdx} \\[.8em]
&= e^{x}\sin x - \int_{}^{}{\left( e^{x} \right)'\cos xdx} \\[.8em]
&= e^{x}\sin x - \left\{ e^{x}\cos x - \int_{}^{}{e^{x}\left( - \sin x \right)dx} \right\} \\[.8em]
&= e^{x}\sin x - e^{x}\cos x - \int_{}^{}{e^{x}\sin xdx} \\[.8em]
&= e^{x}\left( \sin x - \cos x \right) - I
\end{aligned}$$

よって，  
$$\int_{}^{}{e^{x}\sin xdx} = \dfrac{1}{2}e^{x}\left( \sin x - \cos x \right) + C$$
