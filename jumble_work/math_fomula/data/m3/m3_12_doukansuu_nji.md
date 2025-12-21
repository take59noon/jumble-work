### 第 $n$ 次導関数 
$y'$，$y{''}$，$y{'''}$，$y^{(n)}$
<br>

### 媒介変数表示の導関数
$$\dfrac{dy}{dx} = \dfrac{\dfrac{dy}{dt}}{\dfrac{dx}{dt}} = \dfrac{g'(t)}{f'(t)}$$
$$\dfrac{d^{2}y}{dx^{2}} = \dfrac{d}{dx}\left( \dfrac{dy}{dx} \right) = \dfrac{d}{dt}\left( \dfrac{dy}{dx} \right) \cdot \dfrac{dt}{dx} = \dfrac{d}{dt}\left( \dfrac{dy}{dx} \right) \cdot \dfrac{1}{\dfrac{dx}{dt}}$$
<br>

### 計算式の例

$$x = 2\cos t$$

$$y = 3\sin t$$
<br>

$$\dfrac{dx}{dt} = - 2\sin t$$

$$\dfrac{dy}{dt} = 3\cos t$$

<br>

$$\dfrac{dy}{dx} = - \dfrac{3\cos t}{2\sin t}$$
<br>

$$\begin{aligned}
\dfrac{d^{2}y}{dx^{2}} 
&= \dfrac{d}{dx}\left( \dfrac{dy}{dx} \right) = \dfrac{d}{dx}\left( - \dfrac{3\cos t}{2\sin t} \right) = \dfrac{d}{dt}\left( - \dfrac{3\cos t}{2\sin t} \right) \cdot \dfrac{dt}{dx} \\[.8em]
& = - \dfrac{3}{2} \cdot \dfrac{d}{dt}\left( \dfrac{1}{\tan t} \right) \cdot \dfrac{1}{\dfrac{dx}{dt}} = \dfrac{3}{2\sin^{2}t} \cdot \left( - \dfrac{1}{2\sin t} \right) = - \dfrac{3}{4\sin^{3}t}
\end{aligned}$$
<br>

$$(x - 1)f{''}(x) + (2x - 3)f'(x) - 8f(x) = 0$$
<br>

$$\dfrac{d^{n}}{dx^{n}}\cos x = \cos\left( x + \dfrac{n\pi}{2} \right)$$
