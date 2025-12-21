### 基本式

確率変数 $X$ のとりうる値 $x_{k}$ に対して，それが起こる確率 $P\left( X = x_{k} \right)$  
$$p_{k} = P\left( X = x_{k} \right)$$
<br>

$$p_{1} + p_{2} + \cdots + p_{n} = 1$$
<br>

#### 期待値 $m$

$$\begin{aligned}
m 
&= E(X) \\
&= x_{1}p_{1} + x_{2}p_{2} + \cdots + x_{n}p_{n} \\
&= \sum_{k = 1}^{n}{x_{k}p_{k}} 
\end{aligned}$$
<br>

#### 分散 $V(X)$

$$\begin{aligned}
V(X) 
&= E\left( (X - m)^{2} \right) \\
&= \left( x_{1} - m \right)^{2}p_{1} + \left( x_{2} - m \right)^{2}p_{2} + \cdots + \left( x_{n} - m \right)^{2}p_{n} \\
&= \sum_{k = 1}^{n}{\left( x_{k} - m \right)^{2}p_{k}} \\
&= E(X^{2}) - \{ E(X) \}^{2} 
\end{aligned}$$
<br>

#### 標準偏差 $\sigma(X)$

$$\begin{aligned}
\sigma(X) 
&= \sqrt{V(X)} \\[.2em]
&= \sqrt{E(X^{2}) - \{ E(X) \}^{2}}
\end{aligned}$$
<br>

### 計算式の例   

$$E(X) = 1 \cdot \dfrac{1}{3} + 2 \cdot \dfrac{1}{4} + 3 \cdot \dfrac{1}{3} + 4 \cdot \dfrac{1}{12} = \dfrac{4 + 6 + 12 + 4}{12} = \dfrac{26}{12} = \dfrac{13}{6}$$
<br>

$$E(X^{2}) = 1^{2} \cdot \dfrac{1}{3} + 2^{2} \cdot \dfrac{1}{4} + 3^{2} \cdot \dfrac{1}{3} + 4^{2} \cdot \dfrac{1}{12} = \dfrac{1}{3} + 1 + 3 + \dfrac{4}{3} = \dfrac{17}{3}$$
<br>

$$V(X) = E(X^{2}) - \{ E(X) \}^{2} = \dfrac{17}{3} - \left( \dfrac{13}{6} \right)^{2} = \dfrac{35}{36}$$
