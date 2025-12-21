### 平均変化率    
$$\dfrac{f(b) - f(a)}{b - a}$$
<br>

### 微分係数  
$$f'(a) = \lim_{h \rightarrow 0}\dfrac{f(a + h) - f(a)}{h} = \lim_{b \rightarrow a}\dfrac{f(b) - f(a)}{b - a}$$
$$f'(x) = \lim_{h \rightarrow 0}\dfrac{f(x + h) - f(x)}{h}$$
<br>

### 導関数
$$\left( x^{n} \right)' = nx^{n - 1}$$
$$\left\{ kf(x) + lg(x) \right\}' = kf'(x) + lg'(x)$$
<br>


### 定義に従って微分係数をもとめる  

* $f(x) = 4x^{2}$

$$\begin{aligned}
f'(2) = \lim_{h \rightarrow 0}\dfrac{f(2 + h) - f(2)}{h} 
& = \lim_{h \rightarrow 0}\dfrac{4(2 + h)^{2} - 4 \cdot 2^{2}}{h} \\[.8em]
& = \lim_{h \rightarrow 0}\dfrac{4\left( 4 + 4h + h^{2} \right) - 16}{h} \\[.8em]
& = \lim_{h \rightarrow 0}\dfrac{16h + 4h^{2}}{h} \\[.8em]
& = \lim_{h \rightarrow 0}(16 + 4h) = 16
\end{aligned}$$

* $f(x) = 5x^{2}$

$$\begin{aligned}
f'(x) = \lim_{h \rightarrow 0}\dfrac{f(x + h) - f(x)}{h} 
& = \lim_{h \rightarrow 0}\dfrac{5(x + h)^{2} - 5x^{2}}{h} \\[.8em]
& = \lim_{h \rightarrow 0}\dfrac{5\left( x^{2} + 2xh + h^{2} \right) - 5x^{2}}{h} \\[.8em]
& = \lim_{h \rightarrow 0}\dfrac{10xh + 5h^{2}}{h}  \\[.8em]
& = \lim_{h \rightarrow 0}(10x + 5h) = 10x
\end{aligned}$$
<br>

### 計算式の例

$$y = 2x^{4} - 6x^{3} + 3x - 1$$
$$y' = 2\left( x^{4} \right)' - 6\left( x^{3} \right)' + 3(x)' - (1)'$$
$$y' = 2 \cdot 4x^{3} - 6 \cdot 3x^{2} + 3 \cdot 1 - 0 = 8x^{3} - 18x^{2} + 3$$
