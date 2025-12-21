### 曲線の長さ

曲線 $x = f(t)$，$y = g(t)$ $(\alpha \leqq t \leqq \beta)$ の長さ $L$

$$L = \int_{\alpha}^{\beta}{\sqrt{\left( \dfrac{dx}{dt} \right)^{2} + \left( \dfrac{dy}{dt} \right)^{2}}dt} = \int_{\alpha}^{\beta}{\sqrt{\left\{ f'(t) \right\}^{2} + \left\{ g'(t) \right\}^{2}}dt}$$
<br>

曲線 $y = f(x)$ $(a \leqq x \leqq b)$ の長さ $L$

$$L = \int_{a}^{b}{\sqrt{1 + \left( \dfrac{dy}{dx} \right)^{2}}dx} = \int_{a}^{b}{\sqrt{1 + \left\{ f'(x) \right\}^{2}}dx}$$
<br>

### 速度と道のり
#### 数直線上の道のり

数直線上を運動する点 $\mathrm{P}$ の速度を $v = f(t)$ とし，$t = a$ のときの $\mathrm{P}$ の座標を $k$ とする．

$t = b$ における $\mathrm{P}$ の座標 $x$ は，  

$$x = k + \int_{a}^{b}{f(t)dt}$$

$t = a$ から $t = b$ までの $\mathrm{P}$ の位置の変化量 $s$ は，  

$$s = \int_{a}^{b}{f(t)dt}$$

$t = a$ から $t = b$ までの $\mathrm{P}$ の道のり $l$ は，

$$l = \int_{a}^{b}{\left| f(t) \right|dt}$$

#### 平面上の道のり

座標平面上を運動する点 $\mathrm{P}$ の時刻 $t$ における座標を $(x,\enspace y)$，速度を $\overrightarrow{v}$ とする．

$t = \alpha$ から $t = \beta$ までの道のり $l$ は，

$$l = \int_{\alpha}^{\beta}{\left| \overrightarrow{v} \right|dt} = \int_{\alpha}^{\beta}{\sqrt{\left( \dfrac{dx}{dt} \right)^{2} + \left( \dfrac{dy}{dt} \right)^{2}}dt}$$
