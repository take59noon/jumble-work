### $\dfrac{\sin{x}}{x}$ の極限  

$$\lim_{x \rightarrow 0}\dfrac{\sin x}{x} = 1$$
$$\lim_{x \rightarrow 0}\dfrac{x}{\sin x} = 1$$
<br>

### 計算式の例

$$\lim_{x \rightarrow 0}\dfrac{\sin{5x}}{x} = \lim_{x \rightarrow 0}{5 \cdot \dfrac{\sin{5x}}{5x}} = 5$$
<br>

$$\lim_{x \rightarrow 0}\dfrac{\sin{2x}}{\sin{4x}} = \lim_{x \rightarrow 0}{\dfrac{\sin{2x}}{2x} \cdot \dfrac{4x}{\sin{4x}} \cdot \dfrac{2}{4}} = \dfrac{1}{2}$$
<br>

$$\lim_{x \rightarrow 0}\dfrac{\sin{2x}}{\tan x} = \lim_{x \rightarrow 0}\dfrac{\sin{2x}\cos x}{\sin x} = {\lim_{x \rightarrow 0}{\dfrac{\sin{2x}}{2x} \cdot \dfrac{x}{\sin x} \cdot 2\cos x}} = 2$$
<br>

$$\begin{aligned}
\lim_{x \rightarrow 0}\dfrac{1 - \cos x}{\sin x} 
&= \lim_{x \rightarrow 0}\dfrac{\left( 1 - \cos x \right)\left( 1 + \cos x \right)} {\sin x\left( 1 + \cos x \right)} \\[1em]
&= \lim_{x \rightarrow 0}\dfrac{1 - \cos^{2}x}{\sin x\left( 1 + \cos x \right)} = \lim_{x \rightarrow 0}\dfrac{\sin^{2}x}{\sin x\left( 1 + \cos x \right)} \\[1em]
&= \lim_{x \rightarrow 0}\dfrac{\sin x}{1 + \cos x} = 0
\end{aligned}$$
<br>

#### 極限 $\displaystyle\lim_{x \rightarrow \infty}\dfrac{\sin{4x}}{x}$

$$0 \leqq \left| \sin{4x} \right| \leqq 1$$

$$0 \leqq \left| \dfrac{\sin{4x}}{x} \right| \leqq \dfrac{1}{|x|}$$

$\displaystyle\lim_{x \rightarrow \infty}\dfrac{1}{|x|} = 0$ より，$\displaystyle\lim_{x \rightarrow \infty}\left| \dfrac{\sin{4x}}{x} \right| = 0$  

$$\lim_{x \rightarrow \infty}\dfrac{\sin{4x}}{x} = 0$$
