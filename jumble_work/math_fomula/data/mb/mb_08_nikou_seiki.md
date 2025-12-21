### 基本式

#### 二項分布 $B(n,\enspace p)$

$$P(X = r) = { _{n}\mathrm{C} _{r}}p^{r}q^{n - r}$$
$$E(X) = np$$
$$V(X) = npq$$
$$\sigma(X) = \sqrt{npq}$$
<br>

#### 確率密度関数 $f(x)$

$$f(x) \geqq 0$$
$$P(a \leqq X \leqq b) = \int_{a}^{b}{f(x)dx}$$
$$\int_{\alpha}^{\beta}{f(x)dx} = 1 \quad (\alpha \leqq X \leqq \beta)$$
<br>

$$E(X) = m = \int_{\alpha}^{\beta}{xf(x)dx}$$
$$V(X) = \int_{\alpha}^{\beta}{(x - m)^{2}f(x)dx}$$
<br>

#### 正規分布 $N( m,\enspace \sigma^{2})$

$$E(X) = m$$
$$\sigma(X) = \sigma$$
<br>

$$Z = \dfrac{X - m}{\sigma}$$
<br>

#### 標準正規分布 $N(0,\enspace 1)$

$$E(X) = m$$
$$\sigma(X) = \sigma$$
<br>

二項分布 $B(n,\enspace p)$ に従う確率変数 $X$ は，$n$ が大きいとき，近似的に正規分布 $N(np,\enspace npq)$ に従う．
