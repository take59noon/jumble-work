### 基本式  

$$P_{A}(B) = \dfrac{n(A \cap B)}{n(A)} = \dfrac{P(A \cap B)}{P(A)}$$
$$P(A \cap B) = P(A)P_{A}(B)$$
<br>

### ベイズの定理

事象 $B$ が起こった原因が事象 $A$ である確率 $P_{B}(A)$ は  

$$\begin{aligned}
P_{B}(A) 
&= \dfrac{P(A \cap B)}{P(B)} = \dfrac{P(A)P_{A}(B)}{P(A \cap B) + P\left( \overline{A} \cap B \right)} \\[.8em]
&= \dfrac{P(A)P_{A}(B)}{P(A)P_{A}(B) + P\left( \overline{A} \right)P_{\overline{A}}(B)}
\end{aligned}$$
<br>

$\mathrm{A}$ が当たり，$\mathrm{B}$ がはずれる確率  

$$P\left( A \cap \overline{B} \right) = P(A)P_{A}\left( \overline{B} \right) = \dfrac{2}{10} \cdot \dfrac{8}{9} = \dfrac{8}{45}$$

$\mathrm{B}$ がはずれる確率  

$$\begin{aligned}
P\left( \overline{B} \right) 
&= P\left( A \cap \overline{B} \right) + P\left( \overline{A} \cap \overline{B} \right) 
= P(A)P_{A}\left( \overline{B} \right) + P\left( \overline{A} \right)P_{\overline{A}}\left( \overline{B} \right) \\[.5em]
&= \dfrac{2}{10} \cdot \dfrac{8}{9} + \dfrac{8}{10} \cdot \dfrac{7}{9}
= \dfrac{4}{5}
\end{aligned}$$

以上より  

$$P_{\overline{B}}(A) = \dfrac{P\left( A \cap \overline{B} \right)}{P\left( \overline{B} \right)} = \dfrac{8}{45} \div \dfrac{4}{5} = \dfrac{2}{9}$$
<br>

### 期待値

$$E = x_{1}p_{1} + x_{2}p_{2} + \cdots + x_{n}p_{n}$$

$$E = 10 \times \dfrac{1}{6} + 20 \times \dfrac{1}{6} + 30 \times \dfrac{1}{6} + 40 \times \dfrac{1}{6} + 50 \times \dfrac{1}{6} + 60 \times \dfrac{1}{6} = 35$$
<br>


### 計算式の例
$$\dfrac{P_{k + 1}}{P_{k}}$$
<br>

$$P_{0} < P_{1} < P_{2} < P_{3} > P_{4} > \cdots > P_{20} > P_{21}$$
