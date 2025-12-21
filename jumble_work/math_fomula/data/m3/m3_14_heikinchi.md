関数 $f(x)$ が閉区間 $\lbrack a,\enspace b\rbrack$ で連続で，開区間 $(a,\enspace b)$ で微分可能ならば，  

$$\dfrac{f(b) - f(a)}{b - a} = f'(c),\enspace a < c < b$$

を満たす実数 $c$ が存在する

<br>

## 問題例

平均値の定理を用いて，極限 $\displaystyle\lim_{x \rightarrow 0}{\log\dfrac{e^{x} - 1}{x}}$ を求めよ．  

関数 $f(t) = e^{t}$ はすべての実数 $t$ で微分可能で，$f'(t) = e^{t}$  

$- 1 < x < 1,\enspace x \neq 0$ として，区間 $\lbrack 0,\enspace x\rbrack$ または $\lbrack x,\enspace 0\rbrack$ において，平均値の定理を用いると，  

$$\dfrac{e^{x} - 1}{x - 0} = e^{c},\qquad \textrm{$0 < c < x$  または $x < c < 0$}$$

を満たす実数 $c$ が存在する．  

$x \longrightarrow 0$ のとき $c \longrightarrow 0$ であり，$e^{c} \longrightarrow 1$  

$$\lim_{x \rightarrow 0}{\log\dfrac{e^{x} - 1}{x}} = \lim_{c \rightarrow 0}{\log e^{c}} = \log 1 = 0$$

<br>

平均値の定理を用いて，極限 $\displaystyle\lim_{x \rightarrow 0}\dfrac{\sin x - \sin x^{2}}{x - x^{2}}$ を求めよ．  

関数 $f(t) = \sin t$ はすべての実数 $t$ で微分可能で，$f'(t) = \cos t$  

$- 1 < x < 1,\enspace x \neq 0$ として，区間 $\lbrack x^{2},\enspace x\rbrack$ または $\lbrack x,\enspace x^{2}\rbrack$ において，平均値の定理を用いると，  

$$\dfrac{\sin x - \sin x^{2}}{x - x^{2}} = e^{c},\qquad \textrm{$x^{2} < c < x$ または $x < c < x^{2}$}$$

を満たす実数 $c$ が存在する．  

$x \longrightarrow 0$ のとき $x^{2} \longrightarrow 0$，$c \longrightarrow 0$ であり，$\cos c \longrightarrow 1$  

$$\lim_{x \rightarrow 0}\dfrac{\sin x - \sin x^{2}}{x - x^{2}} = \lim_{c \rightarrow 0}{\cos c} = 1$$

