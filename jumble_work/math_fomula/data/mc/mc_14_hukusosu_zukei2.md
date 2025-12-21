### 基本式  
点 $\beta$ を，点 $\alpha$ を中心として角 $\theta$ だけ回転した点 $\gamma$ とする．  
$$\gamma - \alpha = ( \cos\theta + i\sin\theta )(\beta - \alpha)$$
<br>

異なる $3$ 点 $\mathrm{A}(\alpha)$，$\mathrm{B}(\beta)$，$\mathrm{C}(\gamma)$  
$$\angle\beta\alpha\gamma = \arg\dfrac{\gamma - \alpha}{\beta - \alpha}$$
<br>

$3$ 点 ${\rm A}$，${\rm B}$，${\rm C}$ が一直線上にある  
$\Longleftrightarrow$ $\ \dfrac{\gamma - \alpha}{\beta - \alpha}$ が実数（偏角が $0$ または $\pi$ ）  

$2$ 直線 ${\rm AB}$，${\rm AC}$ が垂直に交わる  
$\Longleftrightarrow$ $\ \dfrac{\gamma - \alpha}{\beta - \alpha}$ が純虚数 $\left( \textrm{偏角が} \pm \dfrac{\pi}{2} \right)$  
<br>

### 計算式の例

$\alpha = 2 - \sqrt{3}i$，$\beta = 6 + \sqrt{3}i$  

$$\begin{aligned}
\gamma 
&= \left( \cos\dfrac{\pi}{3} + i\sin\dfrac{\pi}{3} \right)\left\{ \big( 6 + \sqrt{3}i \big) - \big( 2 - \sqrt{3}i \big) \right\} + 2 - \sqrt{3}i \\
&= \bigg( \dfrac{1}{2} + \dfrac{\sqrt{3}}{2}i \bigg)\big( 4 + 2\sqrt{3}i \big) + 2 - \sqrt{3}i = 1 + 2\sqrt{3}i
\end{aligned}$$
<br>

${\rm A}\big( \sqrt{3} + i \big)$，${\rm B}(6i)$，${\rm C}\big( 3\sqrt{3} + 5i \big)$  

$$\begin{aligned}
\dfrac{\gamma - \alpha}{\beta - \alpha} 
&= \dfrac{\big( 3\sqrt{3} + 5i \big) - \big( \sqrt{3} + i \big)}{6i - \big( \sqrt{3} + i \big)} = \dfrac{2\sqrt{3} + 4i}{{-\sqrt{3}} + 5i} = \dfrac{\big( 2\sqrt{3} + 4i \big)\big( {-\sqrt{3}} - 5i \big)}{\big( {-\sqrt{3}} + 5i \big)\big( {-\sqrt{3}} - 5i \big)} \\
&= \dfrac{14 - 14\sqrt{3}i}{28} = \dfrac{1 - \sqrt{3}i}{2} = \cos{\dfrac{5}{3}\pi} + i\sin{\dfrac{5}{3}\pi}
\end{aligned}$$
<br>

$$\angle{\rm BAC} = \arg\dfrac{\gamma - \alpha}{\beta - \alpha} = \arg\left( \cos{\dfrac{5}{3}\pi} + i\sin{\dfrac{5}{3}\pi} \right) = \dfrac{\pi}{3}$$
$$\triangle{\rm ABC} = \dfrac{1}{2} \times {\rm AB} \times {\rm AC} \times \sin\dfrac{\pi}{3} = \dfrac{1}{2} \times \big( \sqrt{28} \big)^{2} \times \dfrac{\sqrt{3}}{2} = 7\sqrt{3}$$
