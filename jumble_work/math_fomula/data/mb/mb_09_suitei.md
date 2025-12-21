### 基本式  
母平均 $m$，母標準偏差 $\sigma$ の母集団から大きさ $n$ の無作為標本を抽出  

#### 標本平均 $\overline{X}$ の期待値と標準偏差

$$E(\overline{X}) = m$$
$$\sigma(\overline{X}) = \dfrac{\sigma}{\sqrt{n}}$$
<br>

#### 標本平均 $\overline{X}$ の分布

母集団が正規分布 $N(m,\enspace \sigma^{2})$ に従うときは，$\overline{X}$ も正規分布に従う．  
どのような母集団でも，$n$ が大きいときは，正規分布 $N\left( m,\enspace \dfrac{\sigma^{2}}{n} \right)$ に従う．
<br>

#### 母平均 $m$ の推定

標本の大きさを $n$ とし，標本平均 $\overline{X}$，母標準偏差 $\sigma$ とすると，  
母平均 $m$ に対する信頼度 $95$％ の信頼区間  

$$\left\lbrack \overline{X} - 1.96 \cdot \dfrac{\sigma}{\sqrt{n}},\enspace \overline{X} + 1.96 \cdot \dfrac{\sigma}{\sqrt{n}}\ \right\rbrack$$
<br>

#### 母比率 $p$ の推定

標本のある性質を満たすものの比率(標本比率)を $R$ とすると，  
母比率 $p$ に対する信頼度 $95$％ の信頼区間  

$$\left\lbrack R - 1.96\sqrt{\dfrac{R(1 - R)}{n}},\enspace R + 1.96\sqrt{\dfrac{R(1 - R)}{n}}\ \right\rbrack$$
