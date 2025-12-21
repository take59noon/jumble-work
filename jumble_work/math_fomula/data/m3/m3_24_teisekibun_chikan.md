### 計算式の例

$$\begin{aligned}
\int_{0}^{2}{2x\left( x^{2} + 1 \right)^{3}dx} 
&= \int_{0}^{2}{\left( x^{2} + 1 \right)'\left( x^{2} + 1 \right)^{3}dx} \\
&= \left\lbrack \ \dfrac{1}{4}\left( x^{2} + 1 \right)^{4}\ \right\rbrack_{0}^{2} = \dfrac{625}{4} - \dfrac{1}{4} = 156
\end{aligned}$$
<br>

$$\begin{aligned}
\int_{1}^{2}{\dfrac{x^{2} - 2x}{x^{3} - 3x^{2} + 1}dx} 
&= \int_{1}^{2}{\dfrac{1}{3} \cdot \dfrac{\left( x^{3} - 3x^{2} + 1 \right)'}{x^{3} - 3x^{2} + 1}dx} \\
&= \left\lbrack \ \dfrac{1}{3}\log\left| x^{3} - 3x^{2} + 1 \right|\ \right\rbrack_{1}^{2} = \dfrac{1}{3}\log 3 - 0 = \dfrac{1}{3}\log 3
\end{aligned}$$
<br>


#### $\displaystyle\int_{0}^{3}{\sqrt{9 - x^{2}}dx}$  

$x = 3\sin\theta$ とする．

$\dfrac{dx}{d\theta} = 3\cos\theta$，　$x:0 \longrightarrow 3$，　$\theta: 0 \longrightarrow \dfrac{\pi}{2}$  

$$\begin{aligned}
\int_{0}^{3}{\sqrt{9 - x^{2}}dx} 
&= \int_{0}^{\frac{\pi}{2}}{\sqrt{9 - \left( 3\sin\theta \right)^{2}} \cdot 3\cos\theta d\theta} = \int_{0}^{\frac{\pi}{2}}{9\cos^{2}\theta d\theta} \\[.8em]
&= 9\int_{0}^{\frac{\pi}{2}}{\dfrac{1 + \cos{2\theta}}{2}d\theta} = 9\left\lbrack \ \dfrac{1}{2}\theta + \dfrac{1}{4}\sin{2\theta}\ \right\rbrack_{0}^{\frac{\pi}{2}} \\[.8em]
&= 9\left\{ \left( \dfrac{\pi}{4} + 0 \right) - (0 + 0) \right\} = \dfrac{9}{4}\pi
\end{aligned}$$
<br>

#### $\displaystyle\int_{0}^{2}\dfrac{dx}{x^{2} + 4}$  

$x = 2\tan\theta$ とする．

$\dfrac{dx}{d\theta} = \dfrac{2}{\cos^{2}\theta}$，　$x:0 \longrightarrow 2$，　$\theta: 0 \longrightarrow \dfrac{\pi}{4}$  

$$\begin{aligned}
\int_{0}^{2}\dfrac{dx}{x^{2} + 4} 
&= \int_{0}^{\frac{\pi}{4}}\dfrac{1}{\left( 2\tan\theta \right)^{2} + 4} \cdot \dfrac{2}{\cos^{2}\theta}d\theta \\[.8em]
&= \int_{0}^{\frac{\pi}{4}}{\dfrac{1}{2}d\theta} = \left\lbrack \ \dfrac{1}{2}\theta\ \right\rbrack_{0}^{\frac{\pi}{4}} = \dfrac{\pi}{8}
\end{aligned}$$
