# Bab 10 — Teori & Pengukuran

Bab ini mempertemukan model dengan data: growth accounting, persamaan konvergensi, dan studi empiris Mankiw-Romer-Weil. Fokusnya pada konsep-konsep yang paling sering membingungkan: perbedaan variabel per effective worker vs per pekerja fisik, derivasi linearisasi persamaan konvergensi, sumber data human capital, serta ketegangan sehat antara teori dan data yang mendorong lahirnya model-model berikutnya.

## Konsep 1 — Posisi Bab 10 dalam Kursus

*Bab 10 adalah jembatan teori-data untuk Solow-Swan.*

**Sifat Bab 10 vs Bab 9** — Teori murni. Setup, ODE, steady state, comparative statics, Uzawa BGP.

**Bab 9** — Pertanyaan: "Bagaimana model bekerja?"

**Bab 10** — Empirics: growth accounting, regresi convergence, MRW. Pertanyaannya: "Apa yang data katakan tentang model?"

*Lima section dan apa yang masing-masing pelajari.*

**10.1 Growth Accounting** — Dekomposisi $g_{Y}$ ke kontribusi modal, labor, dan tech. Solow residual.

**10.2 Convergence Regression** — Linearisasi Solow-Swan untuk menguji apakah negara miskin tumbuh lebih cepat (beta-konvergensi).

**10.3 Human Capital Extension** — Sistem ODE 2D dengan modal fisik dan human capital. Nullcline analysis.

**10.4 Cross-Country MRW** — Aplikasi cross-country dari Section 10.3 ke data. Mankiw-Romer-Weil.

**10.5 Discussion** — Diskusi terbuka tentang batas MRW dan transisi ke endogenous growth.

**Ringkasan Besar**

*Bab 10 menjawab dua pertanyaan besar.*

*1. Apa yang menjelaskan ketimpangan income antar negara? 2. Apakah Solow-Swan menjelaskan dinamika growth dengan baik?*

*Plus, Bab 10 membuka research program growth empirics modern.*

## Konsep 2 — Section 10.1 — Growth Accounting

*Solow (1957): seberapa banyak growth bisa dijelaskan oleh modal dan labor, dan seberapa banyak oleh tech?*

**Pertanyaan motivasi** — Data menunjukkan output tumbuh lebih cepat dari yang bisa dijelaskan oleh akumulasi modal dan labor saja. Sisanya — yang disebut "tech progress" atau TFP — dari mana?

**Derivation formula growth accounting** — Production function umum: $Y (t) = F [A(t), K(t), L(t)]$.

**Step 1.** Turunkan $Y$ terhadap pakai chain rule $t$

$Y$ tergantung pada lewat tiga channel ($tA, K, L$). Chain rule memberi:

$$ \dot{Y}=F_{A} \cdot \dot{A}+F_{K} \cdot \dot{K}+F_{L}^{\dot{L}} \cdot $$

**Step 2.** Bagi kedua sisi dengan $Y$

$$
\frac{\dot{Y}}{Y}=\frac{F_{A}\dot{A}}{Y}+\frac{F_{K}\dot{K}}{Y}+\frac{F_{L}\dot{L}}{Y}
$$

**Step 3.** Manipulasi tiap suku (kali dan bagi dengan input)

Suku $K$: kali dan bagi dengan $K$:

$$
\frac{F_{K}\dot{K}}{Y}=\frac{F_{K}K}{Y}\cdot\frac{\dot{K}}{K}
$$

Sama untuk $L$ dan $A$.

**Step 4.** Definisikan notasi ringkas

$\alpha _{K}(t):=F_{K}(t)K(t)/Y (t)$ — capital share of income $\alpha _{L}(t):=F_{L}(t)L(t)/Y (t)$ — labor share of income $x(t):= F_{A}(t)A(t)/Y (t) \cdot \dot{A}(t)/A(t)$ — TFP contribution Hasil:

$$
\frac{\dot{Y}}{Y}=\alpha_{K}(t)\,\frac{\dot{K}}{K}+x(t)+\alpha_{L}(t)\,\frac{\dot{L}}{L}
$$

Inilah persamaan (10.1).

**Mengapa $\alpha _{K}, \alpha _{L}$ disebut "income shares"?** Di competitive equilibrium: $R= F_{K}, W=F_{L}$. Maka:

$F_{K}^{K=R\cdotK=} \cdot$ total capital income $F_{L}^{L=W\cdotL=} \cdot$ total labor income

Fraksi dari $Y$ yang ke modal = $\alpha _{K}$. Inilah interpretation "income share".

```{admonition} Catatan
:class: note

*Interpretasi income share hanya valid di competitive equilibrium. Di pasar dengan markup atau distortion, $R= \ne F_{K}$, dan formula bisa misleading. Plus dengan Euler's Theorem (Exercise 9.2): $\alpha _{K} +\alpha _{L} =1$.*
```
**Solow residual — TFP measurement** — Rearrange untuk solve $x(t)$:

$$ x(t) = g(t) -\alpha _{K}(t)g_{K}(t) -\alpha _{L}(t)g_{L}(t) $$

Inilah persamaan (10.2) — Solow's growth accounting formula.

Semua sisi kanan observable. Maka $x(t)$ — kontribusi TFP terhadap output growth — bisa di-back-out dari data.

```{admonition} 💡 Insight
:class: tip

Catatan Moses Abramovitz: Solow residual adalah "measure of our ignorance". Yang kita sebut "tech" sebenarnya bisa apa saja yang tidak masuk hitungan modal dan labor: innovation real, efficiency gains, mismeasurement, externalities, institutional change.
```
**Exercise 10.1 — TFP growth untuk Cobb-Douglas**

Setup: $Y= K(AL)^{\alpha1-\alpha }$.

**Step 1.** Ambil log kedua sisi

$$ ln Y= \alpha ln K + (1 -\alpha)(ln A + ln L) $$

**Step 2.** Turunkan terhadap $t$

$$
\frac{\dot{Y}}{Y}=\alpha\,\frac{\dot{K}}{K}+(1-\alpha)\,\frac{\dot{A}}{A}+(1-\alpha)\,\frac{\dot{L}}{L}
$$

**Step 3.** Pakai income share Cobb-Douglas

$\alpha _{K} =\alpha, \alpha _{L} =1 -\alpha$. Maka:

$$
\frac{\dot{Y}}{Y}=\alpha_{K}\,\frac{\dot{K}}{K}+\alpha_{L}\,\frac{\dot{A}}{A}+\alpha_{L}\,\frac{\dot{L}}{L}
$$

**Step 4** Solve untuk $\dot{A}/A$

$$
\frac{\dot{A}}{A}=\frac{1}{\alpha_{L}}\left[g_{Y}-\alpha_{K}\,g_{K}-\alpha_{L}\,g_{L}\right]
$$

```{admonition} Hasil kunci
:class: important

*Untuk Cobb-Douglas labor-augmenting, TFP growth $\dot{A}/A$ adalah Solow residual dibagi*

$\alpha _{L}$. Implikasi: kalau $\alpha _{L} =0.65$, TFP growth $= x(t)/0.65 \approx 1.54 \cdot x(t)$. Lebih

*besar dari Solow residual.*
```
**Exercise 10.2 — Measurement issues**

**Issue 1.** Time aggregation

Formula adalah continuous-time, tapi data discrete-time (annual). Tiga workaround:

Asumsi Cobb-Douglas: $\alpha _{K}$ konstan, masalah time-varying share hilang Tornqvist index: pakai rata-rata income share $[\alpha _{K}(t) +\alpha _{K}(t +1)]/2$ Log approximation: $ln X_{t+1} -ln X_{t} \approx g_{X} \cdot \Delta t$

```{admonition} Catatan
:class: note

Tornqvist tidak pakai dari Cobb-Douglas. Income share dihitung dari data observasi: $\alpha$ capital income / GDP. Untuk tiap tahun, hitung $\alpha _{K}(t)$ baru. Lebih fleksibel dari Cobb-
```
*Douglas yang asumsi konstan. $\alpha$.*

**Issue 2.** Mismeasurement input

Labor bisa underestimated karena:

Quality (pendidikan, skill) tidak terhitung

Informal sector tidak tercatat

Jam kerja vs head count

Capital bisa underestimated karena:

Quality (intangibles: software, R&D, brand value)

Estimasi salah $\delta$

Capital utilization fluktuasi

**Arah bias mismeasurement**

```{admonition} 💡 Insight
:class: tip

Pertanyaan yang sering muncul: "bagaimana mismeasurement bias estimasi TFP?"

Logika dengan persamaan: kalau $g_{L}^{measured} <g_{L}^{true}$, maka $\alpha _{LL}g^{measured} <\alpha _{LL}g^{true}$. Karena kita kurangkan dari $g_{Y}$ untuk dapat residual, hasil $x^{measured}>x^{true}$.

Numerical example: $g_{Y} =3\%, g_{K} =4\%, \alpha _{K} =0.3, \alpha _{L} =0.7$. Kalau $g_{L}^{true} =2\%$ tapi $g_{L}^{measured} =1\%$:

$$ x^{true}=3 -0.3(4) -0.7(2) = 0.4\% $$

$x^{measured}=3 -0.3(4) -0.7(1) = 1.1\%$

Solow residual overestimate $∼0.7$ percentage points.

Implikasi: tech "dapat credit" untuk labor quality improvement yang tersembunyi. Ini motivasi MRW (Section 10.4) — pisahkan human capital dari TFP.
```
## Konsep 3 — Section 10.2 — Convergence Regression

*Linearisasi ODE Solow-Swan untuk uji empiris konvergensi.*

**Pertanyaan motivasi** — Solow-Swan memprediksi negara di bawah steady state tumbuh lebih cepat. Apakah ini terlihat di data?

**Variabel kunci: vs $y\tilde{y}$** — Distinction yang harus jelas dulu:

**$y$ (per effective worker)** — $y:=Y/(AL)=f(k)$. Konstan di BGP. Tidak observable langsung karena butuh $A$.

**$\tilde{y}$ (per physical worker)** — $\tilde{y}:=Y /L = A \cdot f(k) = A \cdot y$. Per physical worker. Tumbuh dengan rate di BGP. Observable (GDP per capita). $g$

```{admonition} Catatan
:class: note

Notasi: tanda tilda untuk variabel per physical worker (data). Tanpa tilda, per effective $\cdot ^{~}$

*worker (model). Bedanya: $\tilde{y} =A \cdot y$. Saat $A$ tumbuh, tumbuh meskipun konstan. $\tilde{y}y$*
```
**Step 1.** Hubungkan growth ke growth $\tilde{y}k$

**Step 1** Mulai dari $\tilde{y} =Af(k)$

Ambil log:

$$ ln\tilde{y} =ln A + ln f(k) $$

**Step 2.** Turunkan terhadap $t$

$$
\frac{\dot{\tilde{y}}}{\tilde{y}}=\frac{\dot{A}}{A}+\frac{d}{dt}\ln f(k(t))
$$

**Step 3.** Chain rule untuk suku kedua

$$
\frac{d}{dt}\ln f(k(t))=\frac{f\'(k)}{f(k)}\cdot\dot{k}
$$

**Step 4** Substitusi $\dot{A}/A=g$ dan manipulasi

Kali dan bagi suku kedua dengan: $k$

$$
\frac{f\'(k)}{f(k)}\cdot\dot{k}=\frac{f\'(k)\,k}{f(k)}\cdot\frac{\dot{k}}{k}=\varepsilon_{f}(k)\cdot\frac{\dot{k}}{k}
$$

Definisikan elastisitas: $\varepsilon _{f}(k):=f(k)k/f(k)^{'}$.

Hasil:

$$
\frac{\dot{\tilde{y}}}{\tilde{y}}=g+\varepsilon_{f}(k)\cdot\frac{\dot{k}}{k}
$$

Inilah persamaan (10.6).

**Exercise 10.4 — Verifikasi $\varepsilon _{f} =\alpha$ untuk Cobb-Douglas**

$f(k) = k^{\alpha }$. Hitung:

$$
\varepsilon_{f}(k)=\frac{f\'(k)\,k}{f(k)}=\frac{\alpha k^{\alpha-1}\cdot k}{k^{\alpha}}=\alpha
$$

Konstan, sama dengan capital share.

**Step 2.** Tools matematis (Exercise 10.5 dan 10.6)

### Exercise 10.5 — Turunan $f(k)/k$

Tunjukkan $\frac{d}{dk}\left[\frac{f(k)}{k}\right]=\frac{f(k)}{k^{2}}\left[\varepsilon_{f}(k)-1\right]$.

**Step 1.** Quotient rule

$$ dkd[f(k)]k=f(k)k -f(k)^{'}k^{2} $$

**Step 2.** Faktorkan $f(k)$ di pembilang

$$ f(k)k -^{'}f(k) = f(k)[f(k)f(k)k^{'} -1]=f(k)[\varepsilon _{f}(k) -1] $$

**Step 3.** Substitusi

$$ dkd[f(k)]k=f(k)[\varepsilon ^{f}k^{2}(k) -1] $$

### Exercise 10.6 — Differentiation trick

Tunjukkan $\frac{dy}{d\ln x}=x \cdot \frac{dy}{dx}$. Bukti via chain rule: misalkan $u = ln x$, jadi $x = e^{u}$. Maka $dx/du = e=^{u}x$. Pakai chain rule:

$$ dy=dy \cdot dx=x \cdot dy $$

$dudxdudx$

**Step 3.** Linearisasi ODE di steady state

Definisikan $G(k):=\dot{k}/k =sf(k)/k -(\delta + g + n)$.

Di $k^{*}$: $G(k^{*})=0$.

Taylor expansion dalam $ln k$:

$$
G(\ln k)\approx G(\ln k^{*})+\left.\frac{\partial G}{\partial \ln k}\right|_{k^{*}}\left(\ln k-\ln k^{*}\right)
$$

**Step 1** Hitung $\partial G/\partial ln k$ pakai Exercise 10.6

$$
\frac{\partial G}{\partial \ln k}=k\cdot\frac{dG}{dk}
$$

**Step 2.** Hitung $dG/dk$ pakai Exercise 10.5

$$
\frac{dG}{dk}=s\cdot\frac{f(k)}{k^{2}}\left[\varepsilon_{f}(k)-1\right]
$$

**Step 3.** Kombinasikan

$$
\frac{\partial G}{\partial \ln k}=s\cdot\frac{f(k)}{k}\left[\varepsilon_{f}(k)-1\right]
$$

**Step 4.** Evaluasi di $k^{*}$ pakai steady state

$sf(k^{*})/k^{*}=\delta + g + n$. Substitusi:

$$
\left.\frac{\partial G}{\partial \ln k}\right|_{k^{*}}=(\delta+g+n)\left(\varepsilon_{f}(k^{*})-1\right)
$$

**Step 5.** Linearisasi

$$ \dot{k}\approx (\varepsilon _{f}(k) -_{*}1)(\delta + g + n)(ln k -ln k)_{*} $$

**Step 4.** Convergence equation (bentuk akhir)

Substitusi (10.6) dan konversi ke $ln\tilde{y}$: Pakai Exercise 10.6 untuk hubungkan $ln k -ln k^{*}$ ke $ln\tilde{y}-lny^{~*}$:

$$ ln\tilde{y} -lny^{~*}\approx \varepsilon _{f}(k)(ln k -^{*}ln k)^{*} $$

Substitusi balik dan sederhanakan:

$$ y^{~˙}\tilde{y}\approx g -(1 -\varepsilon _{f}(k))(\delta + g + n)(ln^{*}\tilde{y}-lny^{~*}) $$

Inilah persamaan (10.8) — convergence equation.

**Exercise 10.7 — Rate of convergence dengan persamaan**

Definisikan deviation $D(t):= ln\tilde{y} -lny^{~*}$. Turunkan $D$: $\dot{D}=y^{~˙}\tilde{y}/ -g$. Substitusi (10.8):

$$ \dot{D}=-\beta D $$

dengan $\beta = (1 -\varepsilon _{f}(k))(\delta +^{*}g + n)$.

Solusi: $D(t) = D(0)e^{-\beta t}$. Convergence rate. $\beta$

**Partial derivatives** — $\partial \beta /\partial (\delta + g + n) = (1 -\varepsilon _{f}) >0$: kalau $\delta + g + n$ naik, konvergensi cepat $\partial \beta /\partial \varepsilon _{f} =-(\delta + g + n) < 0$: kalau $\varepsilon _{f}$ naik, konvergensi lambat

**Limit cases**

**$\varepsilon_{f} \to 1$ (kasus AK)** — $\beta \to 0$: tidak konvergen. Konsisten dengan Exercise 9.11.

**$\varepsilon_{f} \to 0$** — $\beta \to (\delta+g+n)$: konvergensi paling cepat.

$\Delta + G+ N\to 0\beta \to 0$. Tidak konvergen.

**Intuisi konvergensi**

```{admonition} 💡 Insight
:class: tip

Pertanyaan yang sering muncul: bagaimana mungkin depresiasi yang lebih cepat justru mempercepat konvergensi, dan capital share yang lebih besar justru memperlambatnya?

Lebih dalam: "Jepang vs Amerika vs Zimbabwe — kenapa Jepang tumbuh cepat kalau Jepang tidak tinggi?" $\delta$
```
**Pesan kunci — distinction $D(0)$ vs $\beta$** — Yang membuat Jepang tumbuh cepat pasca-perang BUKAN tinggi. Yang membuat Jepang tumbuh cepat adalah: $\beta$

$D(0)$ besar negatif — Jepang jauh di bawah steady state-nya $\beta$ positive — ada force konvergensi (terlepas dari magnitude) Numerical example: kalau $D(0) = -1.4$ (Jepang 25% dari $y^{~*}g= 0.02, \beta = 0.04$),:

$$ Growth = g -\beta D(0) = 0.02 -0.04(-1.4) = 0.076 = 7.6\% $$

Konsisten dengan growth Jepang ~7-10% per tahun selama 1950-1970.

*Steady state level berbeda antar negara.*

**Amerika** — $D\approx 0$ (sudah di steady state), $\tilde{y}^{*}$ tinggi → growth $\approx g$ (slow).

**Jepang pasca-1945** — $D(0)$ besar negatif, $\tilde{y}^{*}$ tinggi (institusi baik) → growth $\gg g$ (cepat).

**Zimbabwe** — $D\approx 0$ atau positif, $\tilde{y}^{*}$ rendah (institusi buruk) → growth $\approx g$ (stuck).

```{admonition} Ringkasan besar
:class: important

**$\delta$ memainkan dua peran sekaligus**

*1. Menentukan steady state level: tinggi → $\delta k^{*}$ rendah 2. Menentukan convergence rate: tinggi → tinggi → konvergensi cepat $\delta \beta$*

Untuk menjelaskan variasi cross-country growth, peran 1 ($\tilde{y}^{*}$) dan posisi $D(0)$ lebih dominan daripada peran 2 ($\beta$).
```

**Reduced-form regression** — Dari (10.8), motivasi regresi:

$$ g_{i,t,t-1} =b+^{0}bln^{1}\tilde{y}_{i,t-1} +\varepsilon _{i,t} $$

Prediksi: $b<^{1}0$ (convergence).

**Hasil empiris** — OECD: $b^{1}$ negatif signifikan. Konvergensi terbukti. Seluruh dunia: $b^{1}$ tidak signifikan. Karena negara berbeda steady state.

**Conditional convergence** — Solusi: bebaskan intercept antar negara:

$$ g_{i,t,t-1} =b^{0}_{i} +bln^{1}\tilde{y}_{i,t-1} +\varepsilon _{i,t} $$

dengan $b^{0}_{i} =X^{'}_{i,t}\beta$ — country-specific characteristics. Setelah controlling: $b^{1}$ negatif untuk seluruh dunia juga.

**Issues regresi (Exercise 10.9, 10.10)** — Endogeneity: $X$ correlate dengan growth lewat reverse causality Omitted variable bias: institusi, geografi tidak terobservasi

Measurement error: lihat Exercise 10.2 Dynamic panel bias (Nickell): kalau ada $\tilde{y}_{t-1}$ di kanan

Solusi advanced: instrumental variables (Arellano-Bond, GMM).

## Konsep 4 — Section 10.3 — Solow dengan Human Capital

*Perluasan model dengan input ketiga: human capital. Sistem ODE 2D dan nullcline.*

**Motivasi** — Section 10.2 menunjukkan empirical issues:

Convergence rate empiris ($\beta \approx 0.02$) lebih lambat dari prediksi Solow ($\beta \approx 0.04$) Cross-country variation tidak bisa dijelaskan hanya oleh $s, n$

Solusi MRW: tambah human capital sebagai input ketiga.

**Setup model** — Production function diperluas:

$$ Y= F (K, H, AL) $$

Saving rules dua jenis:

$$
\begin{aligned}
\dot{K}&=s_{k}Y-\delta _{k}K \\
\dot{H}&=s_{h}Y-\delta _{h}H
\end{aligned}
$$

**Exercise 10.11 — Derive sistem ODE 2D**

Tunjukkan competitive equilibrium adalah:

$$
\begin{aligned}
\dot{k}&=s_{k}f(k, h) -(\delta _{k} +g + n)k \\
\dot{h}&=s_{h}f(k, h) -(\delta _{h} +g + n)h
\end{aligned}
$$

**Step 1.** Pakai linear homogeneity

$F (K, H, AL) = AL \cdot f(k, h)$ dengan $k = K/(AL), h = H/(AL)$. Substitusi ke capital accumulation: $\dot{K}=s_{k}ALf(k, h) -\delta _{k}K$.

**Step 2.** Log-differentiation untuk $\dot{k}$

$k = K/(AL)$, ambil log: $ln k = ln K -ln A -ln L$. Turunkan: $\dot{k}/k =\dot{K}/K -g -n$.

**Step 3** — Kalikan dengan $k$, substitusi $\dot{K}$, dan sederhanakan

Pakai $K= AL \cdot k$ untuk cancel:

$$ \dot{k}=s_{k}f(k, h) -(\delta _{k} +g + n)k $$

Analog untuk $\dot{h}$.

```{admonition} Catatan
:class: note

*Awas: persamaan (10.11) di sebagian catatan mengandung typo — $k$ dan $h$ hilang di suku terakhir. Versi yang benar (konsisten secara dimensi) harus memuat keduanya.*
```
**Exercise 10.13 — Steady state Cobb-Douglas**

Production function spesifik:

$$ Y= K[H(AL)^{ba1-a1-b}] $$

dengan $a, b \in (0, 1)$. Setelah expansion:

$$ f(k, h) = kh^{\beta\alpha } $$

dengan $\beta = b, \alpha = a(1 -b), 1 -\alpha -\beta = (1 -a)(1 -b)$.

**Solve sistem $\dot{k}=\dot{h}=0$**

**Step 1.** Steady state conditions

$$
\begin{aligned}
s_{k}(k^{*})^{\alpha}(h^{*})^{\beta}&=(\delta_{k}+g+n)\,k^{*} \\
s_{h}(k^{*})^{\alpha}(h^{*})^{\beta}&=(\delta_{h}+g+n)\,h^{*}
\end{aligned}
$$

**Step 2.** Bagi dua persamaan

$$
\frac{s_{h}}{s_{k}}=\frac{(\delta_{h}+g+n)\,h^{*}}{(\delta_{k}+g+n)\,k^{*}}
$$

Definisikan $\Lambda _{k} =s_{k}/(\delta _{k} +g + n), \Lambda _{h} =s_{h}/(\delta _{h} +g + n)$. Solve: $h=^{*}(\Lambda _{h}/\Lambda _{k})k^{*}$.

**Step 3** Substitusi $h^{*}$ ke persamaan pertama dan solve $k^{*}$

Hasil:

$$
k^{*}=\left[\Lambda_{k}^{1-\beta}\Lambda_{h}^{\beta}\right]^{1/(1-\alpha-\beta)},\qquad h^{*}=\left[\Lambda_{k}^{\alpha}\Lambda_{h}^{1-\alpha}\right]^{1/(1-\alpha-\beta)}
$$

**Step 4** Hitung $y=^{*}(k)(h)^{*\beta*\alpha }$

Setelah aljabar eksponen:

$$ y= \Lambda ^{*\alpha/(1-\alpha-\beta)}_{h} \cdot \Lambda ^{\beta/(1-\alpha-\beta)}_{k} $$

**Comparative statics**

- **$s_{h}$ naik** — $y^{*}$ naik: lebih banyak akumulasi human capital.
- **$s_{k}$ naik** — $y^{*}$ naik: lebih banyak akumulasi physical capital.
- **$g$ naik** — $\tilde{y}^{*}$ turun (per effective worker), tapi growth rate per kapita naik (analog Exercise 9.17).
- **$\delta_{k}$ naik** — $y^{*}$ turun: physical capital cepat aus.

- **$\delta_{h}$ naik** — $y^{*}$ turun: human capital cepat memudar.

## Konsep 5 — Exercise 10.14 — Nullcline Analysis Lengkap

*Exercise paling penting Bab 10. Foundation untuk semua analisis phase plane 2D ke depan (RCK, Romer, Schumpeterian).*

**Mengapa Exercise 10.14 sangat penting**

```{admonition} Ringkasan besar
:class: important

**Exercise 10.14 adalah template untuk semua analisis sistem 2D di kursus**

*Bab 12 (RCK): sistem $(k, c)$ Bab 14 (Romer): sistem $(k, A)$ Bab 15 (Schumpeterian): sistem $(k, n)$*

Master nullcline analysis sekarang = master phase plane analysis untuk seluruh sisa kursus.
```
**Setup — ODE map $T= (T_{k}, T_{h})$** — Sistem ODE dengan Cobb-Douglas $f(k, h) = kh^{\beta\alpha }$:

$$
\begin{aligned}
\dot{k}&=s_{k}k^{\alpha}h^{\beta}-(\delta_{k}+g+n)k=:T_{k}(k,h) \\
\dot{h}&=s_{h}k^{\alpha}h^{\beta}-(\delta_{h}+g+n)h=:T_{h}(k,h)
\end{aligned}
$$

Notasi vector: $x = (k, h), T (x) =^{T}(T_{k}, T_{h}^{T})$, sistem $\dot{x}=T (x)$.

**Definisi nullcline**

**$\dot{k}$-nullcline $N_{k}$** — Set titik $(k,h)$ di mana $\dot{k}=0$ (modal per effective worker tidak berubah). $N_{k} ={(k,h): T_{k}(k,h) =0}$.

Set titik $(k,h)$ di mana $\dot{h}=0$ (human capital per effective worker ($h = H/AL$) ($\dot{h}$-nullcline $N_{h}$) tidak berubah). $N_{h} ={(k,h): T_{h}(k,h) =0}$.

**Steady State** — Perpotongan dua nullcline. Di mana $\dot{k}=\dot{h}=0$ simultan.

*Cara derive $N_{k}$ — step-by-step.*

**Step 1** Mulai dari $T_{k} =0$

$$ s_{k}kh-^{\beta\alpha }(\delta _{k} +g + n)k = 0 $$

**Step 2.** Pindahkan suku

$$ s_{k}kh=^{\beta\alpha }(\delta _{k} +g + n)k $$

**Step 3.** Bagi kedua sisi dengan (asumsi $kk > 0$)

Sebelah kiri: $s_{k}kh/k =^{\beta\alpha }s_{k}k^{\beta-1}h^{\alpha }$.

Sebelah kanan: $(\delta _{k} +g + n)$.

$$ s_{k}k^{\beta-1}h=^{\alpha }\delta _{k} +g + n $$

**Step 4.** Solve untuk $h^{\alpha }$

$$ h=^{\alpha }\delta ^{k} + g + ns_{k}k_{\beta-1}=\delta ^{k} + g + ns_{k} \cdot k^{1-\beta } $$

**Step 5** Pangkat $1/\alpha$

$$ h_{Nk}(k) =(\delta ^{k} + g + ns_{k})^{1/\alpha }\cdot k^{(1-\beta)/\alpha } $$

*Cara derive $N_{h}$ — step-by-step.*

**Step 1** Mulai dari $T_{h} =0$

$$ s_{h}kh-^{\beta\alpha }(\delta _{h} +g + n)h = 0 $$

**Step 2.** Pindahkan dan bagi dengan $h$

$$ s_{h}kh^{\beta\alpha-1}=\delta _{h} +g + n $$

**Step 3** Solve untuk $h^{\alpha-1}$

Catatan: $\alpha -1 < 0$, jadi $h^{\alpha-1}$ menurun dalam. $h$

$$ h^{\alpha-1}=\delta ^{h} + g + ns_{h}k_{\beta } $$

**Step 4** Pangkat $1/(\alpha -1)$, balik fraksi

$$ h_{Nh}(k) =(\delta _{h} + g + ns^{h})^{1/(1-\alpha)}\cdot k^{\beta/(1-\alpha)} $$

**Karakteristik kedua nullcline**

**Slope $N_{k}$** — $(1-\beta)/\alpha$: fungsi meningkat dalam $k$, lewat origin.

**Slope $N_{h}$** — $\beta/(1-\alpha)$: fungsi meningkat dalam $k$, lewat origin.

**Perbandingan** — $(1-\beta)/\alpha > \beta/(1-\alpha)$ karena $1-\alpha-\beta>0$: $N_{k}$ lebih curam dari $N_{h}$.

**Bukti $N_{k}$ lebih curam**

**Step 1.** Bandingkan dua slope

$$
\text{slope }\dot{k}=0:\ \frac{1-\alpha}{\beta}\qquad\text{vs}\qquad\text{slope }\dot{h}=0:\ \frac{\alpha}{1-\beta}
$$

**Step 2** Kali kedua sisi dengan $\alpha (1 -\alpha)$

$$ (1 -\beta)(1 -\alpha) vs \alpha \beta $$

**Step 3.** Expand kiri

$$ (1 -\beta)(1 -\alpha) = 1 -\alpha -\beta + \alpha \beta $$

**Step 4.** Beda kedua

$$ 1 -\alpha -\beta + \alpha \beta -\alpha \beta = 1 -\alpha -\beta > 0 $$

Maka $(1 -\beta)/\alpha > \beta /(1 -\alpha)$. QED.

**Cara gambar phase plane**

h

N_k (k̇=0)

IVPcuram

**Region I** — atas N_k, atas N_hRegion III

k̇ > 0, ḣ < 0bawah N_k, atas N_h k̇ < 0, ḣ < 0

N_h (ḣ=0)

landai

(k*, h*)

steady state

**Region II Region IV** — atas N_k, bawah N_h k̇ > 0, ḣ > 0bawah N_k, bawah N_h k̇ < 0, ḣ > 0

k

Phase plane Solow-Swan dengan human capital. $N_{k}$ (biru, curam) dan $N_{h}$ (coklat, landai) berpotongan di $(k,h)^{**}$. Empat region dengan arah vector berbeda; semua mengarah ke steady state.

**Analisis tanda di tiap region**

**Tanda $\dot{k}$** — $T_{k}$ adalah fungsi naik dalam (turunan $h\partial T_{k}/\partial h =s_{k}k\alpha h^{\beta\alpha-1}>0$):

Di atas $N_{k}$: $T_{k} >0,\dot{k}>0, k$ naik Di bawah $N_{k}$: $T_{k} <0,\dot{k}<0, k$ turun

**Tanda $\dot{h}$** — Pada $N_{h}\partial $: $T_{h}/\partial h =(\alpha -1)(\delta _{h} +g + n) < 0$ (karena $\alpha < 1$). Di atas $N_{h}$: $T_{h} <0,\dot{h}<0, h$ turun Di bawah $N_{h}$: $T_{h} >0,\dot{h}>0, h$ naik

**Tabel empat region**

**Region I** — Atas $N_{k}$ dan atas $N_{h}$: $\dot{k}>0,\dot{h}<0$. Vector kanan-bawah.

**Region II** — Atas $N_{k}$ tapi bawah $N_{h}$: $\dot{k}>0,\dot{h}>0$. Vector kanan-atas.

**Region Iii** — Bawah $N_{k}$ tapi atas $N_{h}$: $\dot{k}<0,\dot{h}<0$. Vector kiri-bawah.

**Region IV** — Bawah $N_{k}$ dan bawah $N_{h}$: $\dot{k}<0,\dot{h}>0$. Vector kiri-atas.

**Vector field di nullcline**

**Vector di nullcline** — Di $N_{k}$ ($\dot{k}=0$): vector vertikal, arahnya mengikuti tanda $\dot{h}$. Di $N_{h}$ ($\dot{h}=0$): vector horizontal, arahnya mengikuti tanda $\dot{k}$.

**Lintasan solusi (IVP)** — Slope lintasan di titik $(k, h)$:

$$
\frac{dh}{dk}=\frac{\dot{h}}{\dot{k}}=\frac{T_{h}(k,h)}{T_{k}(k,h)}
$$

Lintasan tidak pernah memotong nullcline kecuali di steady state.

**Prosedur: menggambar phase plot**

```{admonition} Hasil kunci
:class: important

**Tugas tipikal: "draw the phase plot for Solow-Swan with human capital"**

*1. Tulis sistem ODE $\dot{k}\dot{h},$ 2. Derive nullcline $N_{k}$ dan $N_{h}$ secara eksplisit 3. Tentukan slope masing-masing dan verifikasi $N_{k}$ lebih curam 4. Gambar kedua nullcline mulai dari origin, berpotongan di $(k, h)^{**}$ 5. Tentukan tanda $\dot{k}\dot{h},$ di setiap dari 4 region 6. Gambar arrow di setiap region 7. Tunjukkan lintasan IVP dari initial condition konvergen ke steady state*
```
**Proposition 10.2 — Global stability** — Untuk sembarang $(k_{0}, h_{0}) \in R^{2}_{++}$, lintasan konvergen ke $(k, h)^{**}$. Dari analisis empat region, semua vector mengarah ke steady state.

## Konsep 6 — Section 10.4 — Mankiw-Romer-Weil Cross-country

*Aplikasi cross-country Solow dengan human capital ke data 100+ negara.*

**Pertanyaan motivasi** — Setelah MRW (1992):

1. Apa yang menjelaskan ketimpangan income antar negara?
2. Apakah Solow-Swan dengan human capital konsisten dengan data?

**Setup cross-country** — Setiap negara punya production function: $j$

$$ Y_{j} =K_{j}^{\beta }H_{j}^{\alpha }(A_{j}L_{j})^{1-\alpha-\beta } $$

Negara berbeda dalam: $s_{k,j}, s_{h,j}, n_{j}, g_{j}, A_{j}$.

**Asumsi tambahan** — Negara tidak berdagang (autarky)

Data konsisten dengan negara di atau dekat steady state

**Exercise 10.15 — Derive $\tilde{y}_{j}^{*}(t)$**

**Step 1** Mulai dari $\tilde{y}_{j} =A_{j}y_{j}$

$y_{j} =(k_{j}^{*\beta })(h^{*\alpha }_{j})$ di steady state.

**Step 2** Substitusi formula $k_{j}^{*}$ dan $h_{j}^{*}$

Dari Exercise 10.13.

Setelah aljabar eksponen (cek: eksponen $\Lambda _{k,j}$ jadi $\beta /(1 -\alpha -\beta)$, eksponen $\Lambda _{h,j}$ jadi $\alpha /(1 -\alpha -$ $\beta)$):

$$ y=_{j}^{*}\Lambda ^{\beta/(1-\alpha-\beta)}\Lambda _{k,j} \cdot ^{\alpha/(1-\alpha-\beta)}_{h,j} $$

**Step 3.** Kembali ke per-capita income

$$
\tilde{y}_{j}^{*}(t)=A_{j}(t)\left(\frac{s_{j}^{k}}{n_{j}+g+\delta_{k}}\right)^{\alpha/(1-\alpha-\beta)}\left(\frac{s_{j}^{h}}{n_{j}+g+\delta_{h}}\right)^{\beta/(1-\alpha-\beta)}
$$

**Section 10.4.3 — Testable empirical model**

**Asumsi tech growth seragam** — MRW asumsikan $A_{j}(t) =\bar{A}_{j} \cdot e^{gt}$ — rate sama untuk semua negara, level $g\bar{A}_{j}$ berbeda.

**Take log**

$$ ln\tilde{y}_{j}^{*}(t) =ln\bar{A}_{j} +gt +1 -\alpha -\beta \beta ln(n_{j} + g + \delta s^{k,j}_{k})+1 -\alpha -\beta \alpha ln(n_{j} + g + \delta s^{h,j}_{h}) $$

**Sumber data untuk regresi MRW**

```{admonition} 💡 Insight
:class: tip

Pertanyaan yang sering muncul: dari mana data human capital — termasuk saving dan depresiasinya — bisa diperoleh?

$\tilde{y}_{j}$ Penn World Tables (PWT) — GDP per worker

$S_{K,J}$ Investment-to-GDP ratio rata-rata (dari PWT atau national accounts)

$S_{H,J}$ Secondary school enrollment rate (UNESCO atau World Bank WDI)

$N_{J}$ Population growth rate (World Bank, PWT)

$\Delta _{K}, \Delta _{H}, G$ Asumsi konstan: $\delta _{k} =\delta _{h} =3\%g= 2\%$, untuk semua negara
```
**Modern human capital index** — PWT 10.0 punya human capital index $hc$ dikonstruksi dari years of schooling lewat Mincerian return:

$$ hc = e^{\phi(s)} $$

dengan piecewise linear return (13.4% per year pertama 4 tahun, 10.1% berikutnya 4 tahun, 6.8% selanjutnya).

**Endogeneity problem** — $ln\bar{A}_{j}$ tidak observable dan kemungkinan correlate dengan $s_{k,j}, s_{h,j}, n_{j}$. Sumber korelasi:

Institusi: negara dengan institusi baik punya $A$ tinggi dan tinggi $s$

Health: $A$ tinggi correlate dengan rendah (demographic transition) $n$

Geography: akses laut correlate dengan keduanya

MRW asumsi: $\bar{A}_{j} =A \cdot \varepsilon _{j}$ dengan $\varepsilon _{j}$ orthogonal. Asumsi kuat dan kontroversial.

**Hasil estimasi MRW**

**Adjusted $R^{2} = 0{,}78$** — 78\% variasi income antar negara dijelaskan oleh $s_{k}, s_{h}, n$.

**Implied $\beta \approx 0{,}30$** — capital share di income, konsisten dengan data.

**Implied $\alpha_{h} \approx 0{,}28$** — human capital share di income.

```{admonition} Hasil kunci
:class: important

Tanpa human capital (Solow standar): $R\approx ^{2}0.59$. Dengan human capital: $R=^{2}0.78$.

*Penambahan human capital menambah ~20 percentage points explanatory power.*

*Implikasi: TFP residual yang sebelumnya 41% berkurang ke 22%. Banyak "tech" sebelumnya ternyata adalah human capital tersembunyi.*
```
## Konsep 7 — Hubungan ke Model-Model Lain

*Bagaimana MRW, RCK, dan Peters memecahkan deficiency Solow secara berbeda.*

**Dua deficiency Solow**

**Deficiency 1** — $s$ exogenous — saving rate diasumsikan konstan, tidak ada optimisasi

**Deficiency 2** — $A$ black box: tech "manna from heaven", tidak ada penjelasan asal-usulnya.

**Bagaimana setiap model memecahkan**

**MRW (bab 10.4)** — Tambah faktor baru (human capital) ke production function. Pecahkan deficiency 2 partial (residu turun ke 22%). Keep exogenous. $s$

**RCK (Bab 12)** — Optimisasi household: pecahkan deficiency 1 ($s$ jadi endogenous). $A$ tetap black box; tidak pakai human capital.

**Romer (bab 14)** — R&D investment sebagai engine. Pecahkan deficiency 2 full: $A$ jadi endogenous. Keep relatif simple. $s$

**Peters (Bab 15)** — Heterogeneous firms, markup variation. Pecahkan deficiency 2 dari angle berbeda: gap TFP dari misallocation, bukan tech rendah. Tidak fokus human capital.

**Insight metakognitif**

```{admonition} 💡 Insight
:class: tip

Pertanyaan yang sering muncul: apakah RCK dan Peters memakai human capital?

Jawaban: tidak. RCK fokus optimisasi saving, Peters fokus misallocation. Mereka memecahkan deficiency berbeda dari MRW.

Lucas (1988) menggabungkan RCK + human capital, tapi ini di luar kurikulum Economic Growth. Setiap model adalah aspek parsial dari research program besar — membongkar black box $A$ dari berbagai angle.
```
**Pelajaran filosofis untuk research**

```{admonition} Ringkasan besar
:class: important

*Pertanyaan lanjutan yang wajar: untuk analisis atau penelitian, apakah kita harus mencari data yang tidak bias?*

**Jawaban: tidak mungkin. Semua data ekonomi punya bias. Yang penting**

*Tahu sumber bias (mismeasurement, selection, time aggregation) Tahu arah bias (overstate atau understate) Sensitivity analysis: estimasi dengan multiple proxy Triangulation: pakai multiple methods untuk cross-check Transparency: eksplisit sebutkan limitations di paper*

*Model dan data saling memperbaiki, tapi tidak ada yang sempurna. Inilah iterative research program.*
```
## Konsep 8 — Section 10.5 — Discussion (Exercise 10.17)

*Pertanyaan terbuka tentang batas MRW dan transisi ke endogenous growth.*

**Issues measurement MRW (8 issues)**

**1. Proxy human capital** — Enrollment rate tidak menghitung quality, tertiary education, on-the-job training.

**2. Asumsi $\delta, g$ konstan** — Variasi real antar negara diserap ke variasi $A_{j}$.

**3. Orthogonality $\bar{A}_{j}$** — Asumsi paling kontroversial: institusi, geografi, dan history berkorelasi dengan $s, n$.

**4. Steady State** — China, Africa SS, post-war Japan tidak di steady state

**5. Constant Returns** — Endogenous growth models argue increasing returns

**6. Reverse Causality** — Income tinggi → saving tinggi, bukan sebaliknya

**7. Aggregation** — Cross-country agregat menyembunyikan variasi internal

**8. Autarky** — Trade, FDI, migration tidak dipertimbangkan

**Cara relax asumsi**

1. Tambah faktor: health (Weil), institusi (Acemoglu-Robinson), geografi (Sachs)
2. Endogenize tech: Romer (R&D), Schumpeterian (creative destruction), Hsieh-Klenow (misallocation)
3. Endogenize saving: RCK approach
4. Heterogenitas dalam negara: firm-level (Peters), spatial (Krugman)
5. Identifikasi kausal yang lebih baik: IV, natural experiments, fixed effects
6. Better data: PWT 10.0, firm-level census, harmonized national accounts

## Roadmap ke depan

Bab 11: Optimal Control Theory — tools matematis untuk optimisasi dinamis Bab 12: RCK — endogenize saving rate

Bab 14-15: Endogenous growth — buka black box tech


## Checklist Pemahaman Bab 10

**Section 10.1 — Growth accounting**

1. ☐ Derivation persamaan (10.1) dari chain rule
2. ☐ Income shares $\alpha _{K}, \alpha _{L}$ dari competitive equilibrium
3. ☐ Solow residual (10.2) dan back-out TFP
4. ☐ Exercise 10.1: derive formula TFP untuk Cobb-Douglas
5. ☐ Exercise 10.2: 8 measurement issues (time aggregation, mismeasurement)
6. ☐ Arah bias mismeasurement dengan persamaan

**Section 10.2 — Convergence regression**

1. ☐ Distinction (per effective worker) vs (per physical worker) $y\tilde{y}$
2. ☐ Derivation persamaan (10.6): $y^{~˙}\tilde{y}/ =g + \varepsilon _{f}^{\dot{k}}/k$
3. ☐ Exercise 10.4: $\varepsilon _{f} =\alpha$ untuk Cobb-Douglas
4. ☐ Exercise 10.5 dan 10.6: building block tools
5. ☐ Linearisasi ODE di steady state
6. ☐ Convergence equation (10.8) dengan derivasi lengkap
7. ☐Rate of convergence $\beta = (1 -\varepsilon _{f})(\delta +g + n)$
8. ☐ Distinction $D(0)$ vs untuk Jepang/Amerika/Zimbabwe $\beta$
9. ☐ Limit cases: $\varepsilon _{f} \to 1$ (AK), $\varepsilon _{f} \to 0$
10. ☐ Unconditional vs conditional convergence regression

**Section 10.3 — Human capital extension**

1. ☐ Derivation sistem ODE 2D dengan log-differentiation
3. ☐ Exercise 10.13: derive $k^{*}, h^{*}, y^{*}$ step-by-step
4. ☐ Comparative statics 5 parameter

**Exercise 10.14 — Nullcline (TERPENTING)**

1. ☐ Identifikasi sistem sebagai ODE map $T= (T_{k}, T_{h})$
2. ☐ Derive $N_{k}$ secara eksplisit (5 step)
3. ☐ Derive $N_{h}$ secara eksplisit (5 step)
4. ☐ Slope $N_{k} =(1 -\beta)/\alpha$, slope $N_{h} =\beta /(1 -\alpha)$
5. ☐ Bukti $N_{k}$ lebih curam dari $N_{h}$
6. ☐ Tanda di atas/bawah $\dot{k}N_{k}$ (naik dalam) $h$
7. ☐ Tanda di atas/bawah $\dot{h}N_{h}$ (turun dalam pada $hN_{h}$)
8. ☐ Tabel 4 region dengan arah vector
9. ☐ Vector field di nullcline (vertikal di $N_{k}$, horizontal di $N_{h}$)
10. ☐ Cara gambar phase plane step-by-step
11. ☐ Lintasan IVP dan slope $dh/dk = T_{h}/T_{k}$

**Section 10.4 — MRW**

1. ☐ Exercise 10.15: derive $\tilde{y}_{j}^{*}(t)$ formula
2. ☐ Sumber data tiap variabel (PWT, UNESCO, World Bank)
3. ☐ Asumsi tech growth seragam ($A_{j} =\bar{A}_{j}^{gt}e$)
4. ☐ Endogeneity problem dan asumsi $\bar{A}_{j} =A\varepsilon _{j}$
5. ☐ Hasil estimasi: $R=^{2}0.78\beta = 0.30, \alpha = 0.28$,
6. ☐ Interpretasi: human capital reduce TFP residual dari 41% ke 22%

**Section 10.5 + big picture**

1. ☐ 8 issues measurement MRW
2. ☐ 6 cara relax asumsi
3. ☐ Hubungan MRW vs RCK vs Peters (dua deficiency Solow)
4. ☐ Hubungan ke Bab 11-15 (optimal control, RCK, endogenous growth)

✦✦✦

```{admonition} Penutup
:class: important

Bab 10 memperkenalkan empat tools kunci yang akan dipakai sepanjang sisa kursus:

1. Growth accounting (Solow residual) — dekomposisi growth
2. Linearisasi di steady state — convergence equation
3. Nullcline analysis — phase plane 2D (template untuk RCK, Romer, Schumpeterian)
4. Cross-country regression — empirics framework
```
```{admonition} Ringkasan besar
:class: important

*1. Derivation: konvergensi (10.8), nullcline (Exercise 10.14), MRW formula (Exercise 10.15) 2. Gambar phase plane: template 7-step di atas (Exercise 10.14) 3. Intuisi rate of convergence: distinction $D(0)$ vs $\beta$ 4. Empirics: sumber data MRW dan issues measurement 5. Diskusi konseptual: 8 issues + 6 cara relax (Exercise 10.17)*

Aturan yang sudah ditetapkan: derivasi matematis selalu step-by-step, tidak lompat notasi. Ini akan dipakai konsisten untuk seterusnya.
```