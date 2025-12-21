### 基本式
$a \leqq x \leqq b$ において，$x$ 軸に垂直な平面で切ったときの断面積が $S(x)$ である立体の体積 $V$  

$$V = \int_{a}^{b}{S(x)dx}$$
<br>

### 回転体の体積

$$V = \pi\int_{a}^{b}{\left\{ f(x) \right\}^{2}dx} = \pi\int_{a}^{b}{y^{2}dx}$$
$$V = \pi\int_{c}^{d}{\left\{ g(y) \right\}^{2}dy} = \pi\int_{a}^{b}{x^{2}dy}$$
<br>

### 計算式の例

#### 媒介変数で表された曲線と体積

曲線 $x = \cos^{3}\theta$，$y = \cos^{2}\theta\sin\theta$　$\Big( 0 \leqq \theta \leqq \dfrac{\pi}{2} \Big)$

と $x$ 軸で囲まれた部分を，$x$ 軸の周りに $1$ 回転させてできる立体の体積 $V$

$y = 0$ とすると，$\cos^{2}\theta\sin\theta = 0$  

よって，$\theta = 0,\enspace \dfrac{\pi}{2}$  

$\theta = 0$ のとき　$x = 1$，　$\theta = \dfrac{\pi}{2}$ のとき　$x = 0$  

また，$0 \leqq \theta \leqq \dfrac{\pi}{2}$ のとき　$0 \leqq x \leqq 1$，$y \geqq 0$

$dx = - 3\cos^{2}\theta\sin\theta d\theta$ であるから，

$$\begin{aligned}
V &= \pi\int_{0}^{1}{y^{2}dx} = \pi\int_{\frac{\pi}{2}}^{0}{\cos^{4}\theta\sin^{2}\theta\left( - 3\cos^{2}\theta\sin\theta \right)d\theta} \\[.8em]
&= 3\pi\int_{0}^{\frac{\pi}{2}}{\cos^{6}\theta\sin^{3}\theta d\theta} = 3\pi\int_{0}^{\frac{\pi}{2}}{\cos^{6}\theta\left( 1 - \cos^{2}\theta \right)\sin\theta d\theta} \\[.8em]
&= - 3\pi\int_{0}^{\frac{\pi}{2}}{\left( \cos^{6}\theta - \cos^{8}\theta \right)\left( \cos\theta \right)'d\theta} \\[.8em]
&= - 3\pi\left\lbrack \dfrac{\cos^{7}\theta}{7} - \dfrac{\cos^{9}\theta}{9}\ \right\rbrack_{0}^{\frac{\pi}{2}} = \dfrac{2}{21}\pi
\end{aligned}$$
