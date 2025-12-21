### 基本式
$$\sum_{k = 1}^{\infty}a_{n}$$
<br>

### 無限等比級数
$$a + ar + ar^{2} + \cdots + \ ar^{n - 1} + \cdots$$
<br>

$$\begin{array}{ll}
\textrm{$a \neq 0$ のとき} & \textrm{$|r| < 1$ ならば収束し，その和は $\dfrac{a}{1 - r}$} \\[.8em]
& \textrm{$|r| \geqq 1$ ならば発散する} \\[.8em]
\textrm{$a = 0$ のとき} & \textrm{収束し，その和は $0$}
\end{array}$$
<br>

無限等比数列 $\left\{ ar^{n - 1} \right\}$ の級数が収束する必要十分条件は， 
$$\textrm{$a = 0$ \ または\ $-1 < r < 1$}$$
<br>

### 計算式の例  

$$\begin{aligned}
& \dfrac{1}{2 \cdot 4} + \dfrac{1}{3 \cdot 5} + \dfrac{1}{4 \cdot 6} + \cdots + \dfrac{1}{(n + 1)(n + 3)} + \cdots \\[.5em]
=&\ \sum_{k = 1}^{\infty}\dfrac{1}{(n + 1)(n + 3)} = \sum_{k = 1}^{\infty}{\dfrac{1}{2}\left( \dfrac{1}{n + 1} - \dfrac{1}{n + 3} \right)} \\[.5em]
=& \lim_{n \rightarrow \infty}{\sum_{k = 1}^{n}{\dfrac{1}{2}\left( \dfrac{1}{k + 1} - \dfrac{1}{k + 3} \right)}} \\[.5em]
=& \lim_{n \rightarrow \infty}{\dfrac{1}{2}\left( \dfrac{1}{2} + \dfrac{1}{3} - \dfrac{1}{n + 2} - \dfrac{1}{n + 3} \right)} = \dfrac{5}{12}
\end{aligned}$$
<br>

$$\begin{aligned}
&\dfrac{1}{1 + \sqrt{3}} + \dfrac{1}{\sqrt{2} + 2} + \dfrac{1}{\sqrt{3} + \sqrt{5}} + \cdots + \dfrac{1}{\sqrt{n} + \sqrt{n + 2}} + \cdots \\[.5em]
=&\ \sum_{k = 1}^{\infty}\dfrac{1}{\sqrt{n} + \sqrt{n + 2}} = \sum_{k = 1}^{\infty}\dfrac{\sqrt{n + 2} - \sqrt{n}}{\left( \sqrt{n + 2} + \sqrt{n} \right)\left( \sqrt{n + 2} - \sqrt{n} \right)} \\[.5em]
=&\ \sum_{k = 1}^{\infty}{\dfrac{1}{2}\left( \sqrt{n + 2} - \sqrt{n} \right)} = \lim_{n \rightarrow \infty}{\sum_{k = 1}^{n} {\dfrac{1}{2}\left( \sqrt{k + 2} - \sqrt{k} \right)}} \\[.5em]
=&\ \lim_{n \rightarrow \infty}{\dfrac{1}{2}\left( \sqrt{n + 2} + \sqrt{n + 1} - \sqrt{2} - 1 \right)} = \infty
\end{aligned}$$
