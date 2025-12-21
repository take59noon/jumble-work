### 基本式

#### 漸化式（等差数列）
$$a_{n + 1} - a_{n} = 2,\enspace a_{1} = 3$$
$$a_{n} = 3 + 2(n - 1) = 2n + 1$$
<br>

#### 漸化式（等比数列）
$$a_{n + 1} = - 5a_{n},\enspace a_{1} = 1$$
$$a_{n} = 1 \cdot ( - 5)^{n - 1} = ( - 5)^{n - 1}$$
<br>

#### 漸化式（階差数列）
$$a_{n + 1} - a_{n} = 4n,\enspace a_{1} = 1$$
$$\begin{aligned}
a_{n} 
&= 1 + \sum_{k = 1}^{n - 1}{4k} \quad  (n \geqq 2)   \\
&= 1 + 4 \cdot \dfrac{1}{2}(n - 1)n = 2n^{2} - 2n + 1
\end{aligned}$$
<br>

$$a_{n + 1} - a_{n} = 4^{n},\enspace a_{1} = 1$$
$$\begin{aligned}
a_{n} 
&= 1 + \sum_{k = 1}^{n - 1}4^{k} \quad (n \geqq 2) \\
&= 1 + \dfrac{4\left( 4^{n - 1} - 1 \right)}{4 - 1} = 1 + \dfrac{4^{n} - 4}{3} = \dfrac{4^{n} - 1}{3}
\end{aligned}$$
<br>

#### 漸化式（特性方程式）
$$a_{n + 1} = 2a_{n} - 3,\enspace a_{1} = 3$$
$$a_{n + 1} - 3 = 2\left( a_{n} - 3 \right)$$
<br>

数列 $\{ a_{n} - 3 \}$ は初項 $a_{1} - 3 = - 2$，公比 $2$ の等比数列  

$$a_{n} - 3 = - 2 \cdot 2^{n - 1}$$
$$a_{n} = - 2^{n} + 3$$
