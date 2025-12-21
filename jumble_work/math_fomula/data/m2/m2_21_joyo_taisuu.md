### 計算式の例  

$$x = a \times 10^{n}\ \  \Longleftrightarrow \ \ \log_{10}x = n + \log_{10}a$$
<br>

$$\log_{10}2 = 0.3010$$
$$\log_{10}3 = 0.4771$$
<br>

$$\log_{10}5 = \log_{10}\dfrac{10}{2} = \log_{10}10 - \log_{10}2 = 1 - 0.3010 = 0.6990$$
$$\log_{10}200 = \log_{10}\left( 2 \times 10^{2} \right) = \log_{10}2 + \log_{10}10^{2} = \log_{10}2 + 2$$
$$\log_{10}24 = \log_{10}\left( 2^{3} \times 3 \right) = \log_{10}2^{3} + \log_{10}3 = 3\log_{10}2 + \log_{10}3$$
$$\log_{10}15 = \log_{10}\dfrac{30}{2} = \log_{10}\dfrac{3 \times 10}{2} = \log_{10}3 + \log_{10}10 - \log_{10}2$$
$$\log_{4}9 = \dfrac{\log_{10}9}{\log_{10}4} = \dfrac{\log_{10}3^{2}}{\log_{10}2^{2}} = \dfrac{\log_{10}3}{\log_{10}2}$$
<br>

#### $2^{35}$ は何桁の整数か  

$$\log_{10}2^{35} = 35\log_{10}2 = 10.5350$$
$$10 < \log_{10}2^{35} < 11$$
$$10^{10} < 2^{35} < 10^{11}$$
<br>

#### $\left( \dfrac{3}{5} \right)^{10}$ は小数第何位に初めて $0$ でない数字が現れるか  

$$\begin{aligned}
\log_{10}\left( \dfrac{3}{5} \right)^{10} 
& = 10\log_{10}\dfrac{3}{5} = 10\log_{10}\dfrac{6}{10} \\[.8em]
& = 10\log_{10}\dfrac{2 \times 3}{10} \\[.8em]
& = 10\left( \log_{10}2 + \log_{10}3 - \log_{10}10 \right)\\[.5em]
& = 10 \times (0.3010 + 0.4771 - 1) = - 2.219
\end{aligned}$$
<br>

$$- 3 < \log_{10}\left( \dfrac{3}{5} \right)^{10} < 2$$
$$10^{- 3} < \left( \dfrac{3}{5} \right)^{10} < 10^{- 2}$$
