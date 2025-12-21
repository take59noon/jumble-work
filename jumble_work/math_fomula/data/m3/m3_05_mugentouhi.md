### 無限等比数列 $\left\{ r^{n} \right\}$ の極限

$r > 1$ のとき　$\displaystyle\lim_{n \rightarrow \infty}r^{n} = \infty$  

$r = 1$ のとき　$\displaystyle\lim_{n \rightarrow \infty}r^{n} = 1$  

$|r| < 1$ のとき　$\displaystyle\lim_{n \rightarrow \infty}r^{n} = 0$  

$r \leqq - 1$ のとき　振動する

等比数列 $\left\{ r^{n} \right\}$ が収束するための必要十分条件　$- 1 < r \leqq 1$  

<br>

### 計算式の例  
$$\lim_{n \rightarrow \infty}\dfrac{3^{n} - 2^{n}}{2^{n} + 3^{n}} = \lim_{n \rightarrow \infty}\dfrac{1 - \left( \dfrac{2}{3} \right)^{n}}{\left( \dfrac{2}{3} \right)^{n} + 1} = 1$$
$$\lim_{n \rightarrow \infty}\left( 8^{n} - 9^{n} \right) = \lim_{n \rightarrow \infty}\left\lbrack 9^{n} \cdot \left\{ \left( \dfrac{8}{9} \right)^{n} - 1 \right\} \right\rbrack = - \infty$$
<br>

### 隣接 $3$ 項間漸化式と極限  

$$a_{1} = 1,\enspace a_{2} = 2,\enspace 3a_{n + 2} = 2a_{n + 1} + a_{n}$$
$$a_{n + 2} - a_{n + 1} = - \dfrac{1}{3}\left( a_{n + 1} - a_{n} \right)$$

数列 $\left\{ a_{n} \right\}$ の階差数列 $\left\{ a_{n + 1} - a_{n} \right\}$ は初項 $a_{2} - a_{1} = 1$，公比 $- \dfrac{1}{3}$ の等比数列

$n \geqq 2$ のとき，  

$$a_{n} = a_{1} + \sum_{k = 1}^{n - 1}\left( - \dfrac{1}{3} \right)^{k - 1} 
= 1 + \dfrac{3}{4}\left\{ 1 - \left( - \dfrac{1}{3} \right)^{n - 1} \right\}$$

よって，数列 $\left\{ a_{n} \right\}$ の極限は，

$$\lim_{n \rightarrow \infty}a_{n} = 1 + \dfrac{3}{4}(1 - 0) = \dfrac{7}{4}$$
