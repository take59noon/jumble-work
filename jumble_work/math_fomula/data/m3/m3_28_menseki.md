### 基本式  
$$S = \int_{a}^{b}{f(x)dx}$$
$$S = \int_{a}^{b}{\left\{ f(x) - g(x) \right\} dx}$$
$$S = \int_{c}^{d}{g(y)dy}$$
<br>

### 計算式の例

##### 曲線 $2x^{2} + 2xy + y^{2} = 1$ で囲まれた部分の面積 $S$  

$$y^{2} + 2xy + 2x^{2} - 1 = 0$$

$$y = - x \pm \sqrt{x^{2} - \left( 2x^{2} - 1 \right)} = - x \pm \sqrt{1 - x^{2}}$$

$1 - x^{2} \geqq 0$ から，曲線は $- 1 \leqq x \leqq 1$ の範囲にある．

$f(x) = - x \pm \sqrt{1 - x^{2}}$，$g(x) = - x - \sqrt{1 - x^{2}}$ とすると，定義域内で $f(x) \geqq g(x)$  

$$S = \int_{- 1}^{1}{\left\{ f(x) - g(x) \right\} dx} = 2\int_{- 1}^{1}{\sqrt{1 - x^{2}}dx}$$

$\int_{- 1}^{1}{\sqrt{1 - x^{2}}dx}$ は，半径 $1$ の半円の面積を表すから，  

$$S = 2 \cdot \dfrac{1}{2} \cdot \pi \cdot 1^{2} = \pi$$

<br>

##### 曲線 $x = \cos^{4}\theta$，$y = \sin^{4}\theta$ $\enspace\Big(0 \leqq \theta \leqq \dfrac{\pi}{2}\Big)$ と $x$ 軸および $y$ 軸で囲まれた部分の面積 $S$  

$$\dfrac{dx}{d\theta} = 4\cos^{3}\theta\left( - \sin\theta \right) = - 4\sin\theta\cos^{3}\theta,\enspace \dfrac{dy}{d\theta} = 4\sin^{3}\theta\cos\theta$$

$$\dfrac{dy}{dx} = \dfrac{4\sin^{3}\theta\cos\theta}{- 4\sin\theta\cos^{3}\theta} = - \dfrac{\sin^{2}\theta}{\cos^{2}\theta}$$

$\theta = 0$ のとき，$x = 1,\enspace y = 0$　　$\theta = \dfrac{\pi}{2}$ のとき，$x = 0,\enspace y = 1$  

$$\begin{aligned}
S 
&= \int_{0}^{1}{ydx} = \int_{\frac{\pi}{2}}^{0}{\sin^{4}\theta\left( - 4\sin\theta\cos^{3}\theta \right)d\theta} = - 4\int_{\frac{\pi}{2}}^{0}{\sin^{5}\theta\cos^{3}\theta d\theta} \\[.8em]
&= 4\int_{0}^{\frac{\pi}{2}}{\sin^{5}\theta\left( 1 - \sin^{2}\theta \right)\cos\theta d\theta} = 4\int_{0}^{\frac{\pi}{2}}{\left( \sin^{5}\theta\cos\theta - \sin^{7}\theta\cos\theta \right)d\theta} \\[.8em]
&= 4\left\lbrack \dfrac{1}{6}\sin^{6}\theta - \dfrac{1}{8}\sin^{8}\theta\ \right\rbrack_{0}^{\frac{\pi}{2}} = 4\left\{ \left( \dfrac{1}{6} - \dfrac{1}{8} \right) - 0 \right\} = \dfrac{1}{6}
\end{aligned}$$
