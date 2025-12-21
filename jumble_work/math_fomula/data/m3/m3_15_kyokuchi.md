### 計算式の例　　

$$y = x\sqrt{4 - x^{2}}$$

$$\begin{aligned}
y' 
&= (x)'\sqrt{4 - x^{2}} + x\big( \sqrt{4 - x^{2}} \big)' \\
&= 1 \cdot \sqrt{4 - x^{2}} + x \cdot \dfrac{- 2x}{2\sqrt{4 - x^{2}}} = \dfrac{( 4 - x^{2}) - x^{2}}{\sqrt{4 - x^{2}}} = \dfrac{- 2( x^{2} - 2)}{\sqrt{4 - x^{2}}}
\end{aligned}$$

よって，$- \sqrt{2} \leqq x \leqq \sqrt{2}$ で単調増加  

<br>

$$y = \dfrac{2x}{x^{2} + 1}$$

$$\begin{aligned}
y' 
&= \dfrac{(2x)'(x^{2} + 1) - 2x( x^{2} + 1)'}{( x^{2} + 1)^{2}} = \dfrac{2( x^{2} + 1) - 4x^{2}}{(x^{2} + 1)^{2}} \\[.8em]
&= \dfrac{- 2(x^{2} - 1)}{(x^{2} + 1)^{2}} = - \dfrac{2(x + 1)(x - 1)}{( x^{2} + 1)^{2}}
\end{aligned}$$

よって，$- 1 \leqq x \leqq 1$ で単調増加  

<br>

$$y = 3^{x} - \left( \dfrac{1}{3} \right)^{x} = 3^{x} - 3^{- x}$$

$$y' = \log 3 \cdot 3^{x} + \log 3 \cdot 3^{- x} = \left\{ 3^{x} + \left( \dfrac{1}{3} \right)^{x} \right\}\log 3 > 0$$

<br>

$$y = \left( 1 + \cos x \right)\sin x \quad (0 \leqq x \leqq 2\pi)$$

$$\begin{aligned}
y' 
&= \left( 1 + \cos x \right)'\sin x + \left( 1 + \cos x \right)\left( \sin x \right)' \\
&= \left( - \sin x \right)\sin x + \left( 1 + \cos x \right)\cos x \\
&= - \sin^{2}x + \cos x + \cos^{2}x = 2\cos^{2}x + \cos x - 1 \\
&= ( 2\cos x - 1 )(\cos x + 1)
\end{aligned}$$

$\cos x + 1 \geqq 0$ で $2\cos x - 1 \geqq 0$ となるのは，$0 \leqq \theta \leqq \dfrac{\pi}{3},\enspace \dfrac{5}{3}\pi \leqq \theta \leqq 2\pi$  

よって，$0 \leqq \theta \leqq \dfrac{\pi}{3},\enspace \dfrac{5}{3}\pi \leqq \theta \leqq 2\pi$ で単調増加  
