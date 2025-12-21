### 区分求積法

$$\lim_{n \rightarrow \infty}{\dfrac{1}{n}\sum_{k = 0}^{n - 1}{f\bigg( \dfrac{k}{n} \bigg)}} = \lim_{n \rightarrow \infty}{\dfrac{1}{n}\sum_{k = 1}^{n}{f\bigg( \dfrac{k}{n} \bigg)}} = \int_{0}^{1}{f(x)dx}$$
<br>

#### 区分求積法の原理

$$\int_{a}^{b}{f(x)dx} = \lim_{n \rightarrow \infty}{\sum_{k = 0}^{n - 1}{f( x_{k})\Delta x}} = \lim_{n \rightarrow \infty}{\sum_{k = 1}^{n}{f(x_{k})\Delta x}}$$
$$\Delta x = \dfrac{b - a}{n}$$
$$x_{k} = a + k\Delta x$$
<br>

### 計算式の例

$$\begin{aligned}
\lim_{n \rightarrow \infty}{\dfrac{1}{n}\left( \dfrac{n + 2}{n} + \dfrac{n + 4}{n} + \cdots + \dfrac{3n}{n} \right)} 
&= \lim_{n \rightarrow \infty}{\dfrac{1}{n}\sum_{k = 1}^{n}\dfrac{n + 2k}{n}} = \lim_{n \rightarrow \infty}{\dfrac{1}{n}\sum_{k = 1}^{n}\left( 1 + 2\dfrac{k}{n} \right)} \\[.8em]
&= \int_{0}^{1}{(1 + 2x)dx} = \left\lbrack \begin{matrix}
\  \\
\ 
\end{matrix} x + x^{2}\begin{matrix}
\  \\
\ 
\end{matrix} \right\rbrack_{0}^{1} = 2
\end{aligned}$$
<br>

$$\begin{aligned}
\lim_{n \rightarrow \infty}{\dfrac{1}{n}\sum_{k = 0}^{n - 1}\dfrac{n}{n + 2k}} 
&= \lim_{n \rightarrow \infty}{\dfrac{1}{n}\sum_{k = 0}^{n - 1}\dfrac{1}{1 + 2\dfrac{k}{n}}} \\[.8em]
&= \int_{0}^{1}\dfrac{dx}{1 + 2x} = \left\lbrack \dfrac{1}{2}\log|1 + 2x|\begin{matrix}
\  \\
\ 
\end{matrix} \right\rbrack_{0}^{1} = \dfrac{1}{2}\log 3
\end{aligned}$$
<br>

#### シュワルツの不等式

$a < b$ とする．

$$\left\{ \int_{a}^{b}{f(x)g(x)dx} \right\}^{2} \leqq \left( \int_{a}^{b}{\left\{ f(x) \right\}^{2}dx} \right)\left( \int_{a}^{b}{\left\{ g(x) \right\}^{2}dx} \right)$$
