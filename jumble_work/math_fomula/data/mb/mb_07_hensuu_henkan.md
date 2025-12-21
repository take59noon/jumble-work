### 変数変換

#### 基本式  

$$E(Y) = E(aX + b) = aE(X) + b$$
$$V(Y) = V(aX + b) = a^{2}V(X)$$
$$\sigma(Y) = \sigma(aX + b) = |a|\sigma(X)$$
<br>

#### 変数変換の例  

確率変数 $X$ の期待値を $m$，標準偏差を $\sigma$ とするとき  
$m = E(X)$，$\sigma = A(X)$ とおくと  

$$Y = \dfrac{X - m}{\sigma}$$
$$E(Y) = E\left( \dfrac{X - m}{\sigma} \right) = \dfrac{E(X) - m}{\sigma} = 0$$
$$A(Y) = A\left( \dfrac{X - m}{\sigma} \right) = \dfrac{A(X)}{\sigma} = \dfrac{\sigma}{\sigma} = 1$$
<br>


$$Y = \dfrac{10(X - m)}{\sigma} + 50$$
$$E(Y) = E\left( \dfrac{10(X - m)}{\sigma} + 50 \right) = \dfrac{E(X) - m}{\sigma} + 50 = 50$$
$$A(Y) = A\left( \dfrac{10(X - m)}{\sigma} + 50 \right) = \dfrac{10}{\sigma}A(X) = \dfrac{10}{\sigma} \cdot \sigma = 10$$
<br>

### 確率変数の和，積

#### 和

$$p_{ij} = P\left( X = x_{i},\ \ \ Y = x_{j} \right)$$
$$E(X + Y) = E(X) + E(Y)$$
$$E(aX + bY) = aE(X) + bE(Y)$$
<br>

#### 積
$X$，$Y$ は互いに独立な確率変数  

$$E(XY) = E(X)E(Y)$$
$$V(XY) = V(X) + V(Y)$$
$$V(aX + bY) = a^{2}V(X) + b^{2}V(Y)$$
