### 計算式の例

#### 部分分数分解

$$\dfrac{1}{2 \cdot 4},\enspace \dfrac{1}{4 \cdot 6},\enspace \dfrac{1}{6 \cdot 8},\enspace \dfrac{1}{8 \cdot 10},\enspace \cdots$$
<br>

$$\dfrac{1}{2k(2k + 2)} = \dfrac{1}{4}\left( \dfrac{1}{k} - \dfrac{1}{k + 1} \right)$$
<br>

$$\begin{aligned}
S_{n} 
&= \dfrac{1}{4}\left\{ \left( 1 - \dfrac{1}{2} \right) + \left( \dfrac{1}{2} - \dfrac{1}{3} \right) + \left( \dfrac{1}{3} - \dfrac{1}{4} \right) + \cdots + \left( \dfrac{1}{n} - \dfrac{1}{n + 1} \right) \right\} \\[.8em]
&= \dfrac{1}{4}\left( 1 - \dfrac{1}{n + 1} \right) = \dfrac{n}{4(n + 1)}
\end{aligned}$$

### (等差) $\times$ (等比) の和

$$3，5 \cdot 2，7 \cdot 2^{2}，9 \cdot 2^{3}，\cdots$$
<br>

$$(2k - 1) \cdot 2^{k - 1}$$
<br>

$$\begin{aligned}
S_{n} &= 3 + 5 \cdot 2 + 7 \cdot 2^{2} + \cdots + (2n + 1) \cdot 2^{n - 1} \\[.3em]
2S_{n} &= 3 \cdot 2 + 5 \cdot 2^{2} + \cdots + (2n - 1) \cdot 2^{n - 1} + (2n + 1) \cdot 2^{n}
\end{aligned}$$

$$\begin{aligned}
-S_{n} 
&= 3 + 2 \cdot 2 + 2 \cdot 2^{2} + \cdots + 2 \cdot 2^{n - 1} - (2n + 1) \cdot 2^{n} \\[.3em]
&= 1 + \dfrac{2\left( 2^{n} - 1 \right)}{2 - 1} - (2n + 1) \cdot 2^{n} = - 1 - (2n - 1) \cdot 2^{n}
\end{aligned}$$

$$S_{n} = (2n - 1) \cdot 2^{n} + 1$$

#### 分母の有理化を利用する  

$$\begin{aligned}
\sum_{k = 1}^{n}\dfrac{1}{\sqrt{k + 2} + \sqrt{k + 3}} 
&= \sum_{k = 1}^{n}\dfrac{\sqrt{k + 3} - \sqrt{k + 2}}{\left( \sqrt{k + 3} + \sqrt{k + 2} \right)\left( \sqrt{k + 3} - \sqrt{k + 2} \right)} \\
&= \sum_{k = 1}^{n}\left( \sqrt{k + 3} - \sqrt{k + 2} \right) \\
&= \left( \sqrt{4} - \sqrt{3} \right) + \left( \sqrt{5} - \sqrt{4} \right) + \cdots + \left( \sqrt{n + 3} - \sqrt{n + 2} \right) \\[.5em]
&= \sqrt{n + 3} - \sqrt{3}
\end{aligned}$$
