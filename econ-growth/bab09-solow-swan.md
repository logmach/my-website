# Bab 9 — Solow-Swan

Bab 9 adalah pertunjukan perdana Tools I: seluruh matematika abstrak Bab 3–8 bertemu di sini untuk menjawab pertanyaan ekonomi sungguhan lewat model Solow-Swan. Catatan bab ini disusun ekstra lengkap: derivasi langkah demi langkah tanpa lompatan notasi, latihan-latihan kunci (termasuk teorema Uzawa dan BGP), mekanika *rate of convergence*, serta analisis nullcline.

## Konsep 1 — Filosofi Solow-Swan

*Mengapa Solow-Swan, dan bagaimana fits ke kursus.*

## Posisi Bab 9 dalam kursus

**Level 1: Tools (Bab 3–8)** — ODE, eigenvalue, phase diagram, Picard-Lindelöf. Murni matematika.

**Level 2: Aplikasi (Bab 9–10)** — Solow-Swan: aplikasi pertama tools ke pertanyaan ekonomi. Single ODE, exogenous parameters.

**Level 3: Lanjut (Bab 11–15)** — RCK, Romer: model 2D+, optimisasi, endogenous tech. Dibangun di atas Solow-Swan.

**Karakter "Keynesian" Solow-Swan** — Solow dan Swan punya pendekatan Keynesian: perilaku agen di-"hardwired" (tidak ada optimisasi). Yang fundamental:

Production function untuk barang akhir: $Y= F (A, K, L)$ Capital accumulation technology: $\dot{K}=I-\delta K$ Saving rate konstan: $s \in (0, 1)$

```{admonition} Ringkasan besar
:class: important

*Konsekuensi: model tidak menjelaskan mengapa households save fraction tertentu — diasumsikan. RCK (Bab 12) akan memperbaiki ini dengan optimisasi household.*
```
## Konsep 2 — Production Function dan Property-Property

*Foundation ekonomi Solow-Swan.*

**Tiga properti yang harus dipegang** — Property 9.1 — Linear homogeneity (CRS):

$$ F (A, \lambda K, \lambda L) = \lambda F (A, K, L)untuk semua \lambda > 0 $$

Interpretasi: gandakan semua input → output digandakan. Constant Returns to Scale.

Property 9.2 — Sifat tambahan:

Twice continuously differentiable Increasing: $F_{K}, F_{L} >0$ (marginal products positif) Strictly concave: $F_{KK}, F_{LL} <0$ (diminishing returns)

Property 9.3 — Inada conditions:

$$
\lim_{K\to 0}F_{K}=\infty, \qquad \lim_{K\to\infty}F_{K}=0
$$

(sama untuk $L$)

Inada menjamin interior solutions — modal selalu berguna, tapi diminishing returns cukup kuat untuk menghentikan akumulasi.

**Cobb-Douglas sebagai contoh utama**

$$ F (A, K, L) = K(AL)^{\alpha1-\alpha },0 <\alpha < 1 $$

Bentuk "labor-augmenting" (Harrod-neutral) — $A$ menggandakan $L$.

```{admonition} Hasil kunci
:class: important

**Mengapa $0 < \alpha < 1$ wajib**

$\alpha > 1$: $F_{KK} >0$ (increasing returns dalam $K$) → modal meledak, tidak ada steady

*state $\alpha = 1$: linear dalam $K$ (AK model) → growth eksponensial, capital share = 100% (tidak realistis) $\alpha < 0$: $F_{K} <0$ (modal mengurangi output) → tidak masuk akal ekonomi*

*Hanya $\alpha \in (0, 1)$ yang menghasilkan dinamika Solow-Swan realistik.*
```
## Konsep 3 — Exercise 9.1 dan 9.2 — Properti Teknis Production

*Bukti formal yang mendukung Property 9.1.*

**Exercise 9.1 — Linear homogeneity menyiratkan weak concavity**

Klaim: kalau $F$ linear homogeneous dan strictly concave dalam tiap input secara terpisah, maka $F$ weakly concave dalam $(K, L)$ secara gabungan.

*Bukti langkah demi langkah:*

**Step 1.** Setup: tujuan

Tunjukkan: untuk $\lambda \in [0, 1]$ dan dua titik $(K_{1}, L_{1}), (K_{2}, L_{2})$:

$$ F (\lambda K_{1} +(1 -\lambda)K_{2}, \lambda L_{1} +(1 -\lambda)L_{2}) \ge \lambda F (K_{1}, L_{1}) +(1 -\lambda)F (K_{2}, L_{2}) $$

**Step 2.** Reduksi ke per-worker form

Linear homogeneity dengan $\lambda = 1/LF (K, L) = L \cdot f(K/L)$: dengan $f(k):= F (k, 1)$.

**Step 3.** $f$ concave dalam $k$

Karena $F$ concave dalam $Kf(k) = F (k, 1)$, juga concave dalam. $k$

**Step 4.** Definisikan berat efektif $\mu$

Misalkan $K_{\lambda } =\lambda K_{1} +(1 -\lambda)K_{2}$, $L_{\lambda } =\lambda L_{1} +(1 -\lambda)L_{2}$.

Definisikan $\mu = \lambda L_{1}/L_{\lambda }$. Cek: $K_{\lambda }/L_{\lambda } =\mu (K_{1}/L_{1}) +(1 -\mu)(K_{2}/L_{2})$.

**Step 5.** Aplikasi concavity $f$

$$ f(K/L_{\lambda\lambda }) \ge \mu f(K_{1}/L_{1}) +(1 -\mu)f(K_{2}/L_{2}) $$

**Step 6.** Kalikan $L_{\lambda }$ dan substitusi

Setelah aljabar (kalikan, substitusi $\mu = \lambda L_{1}/L_{\lambda }$):

$$ L_{\lambda }f(K_{\lambda }/L_{\lambda }) \ge \lambda L_{1}f(K_{1}/L_{1}) +(1 -\lambda)L_{2}f(K_{2}/L_{2}) $$

**Step 7.** Terjemahkan kembali ke $F$

Pakai $F (K, L) = Lf(K/L)$ untuk tiap suku:

$$ F (K_{\lambda }, L_{\lambda }) \ge \lambda F (K_{1}, L_{1}) +(1 -\lambda)F (K_{2}, L_{2}) $$

Inilah definisi weak concavity. QED.

```{admonition} Catatan
:class: note

**Mengapa hanya "weakly" concave?** Karena sepanjang ray dari origin ($K_{2}=cK_{1},\ L_{2}=cL_{1}$), linear homogeneity menghasilkan *persamaan* (bukan strict inequality) — jadi hanya "weak".

**Exercise 9.2 — Euler's Theorem**

Statement: kalau homogeneous of degree $gm$ dalam $x, y$:

$$ m \cdot g(x, y) = g_{x}^{x+g} \cdot _{y}^{y} \cdot $$

**Bukti**

**Step 1.** Mulai dari definisi homogeneity

$$ g(\lambda x, \lambda y) = \lambda g(x, y)^{m} $$
```

**Step 2.** Turunkan kedua sisi terhadap $\lambda$

Sebelah kiri (chain rule): $g_{x}(\lambda x, \lambda y) \cdot x + g_{y}(\lambda x, \lambda y) \cdot y$.

Sebelah kanan: $m\lambda ^{m-1}g(x, y)$.

Set sama:

$$ g_{x}(\lambda x, \lambda y) \cdot x + g_{y}(\lambda x, \lambda y) \cdot y= m\lambda ^{m-1}g(x, y) $$

**Step 3** Set $\lambda = 1$

$$ g_{x}(x, y) \cdot x + g_{y}(x, y) \cdot y= mg(x, y) $$

QED.

**Aplikasi Cobb-Douglas** — Verifikasi untuk $F= K(AL)^{\alpha1-\alpha }$ dengan $m= 1$:

$F_{K} =\alpha K^{\alpha-1}(AL)^{1-\alpha }$, jadi $F_{K}^{K=\alpha K(AL)} \cdot ^{\alpha1-\alpha }=\alpha F$. $F_{L} =(1 -\alpha)KA^{\alpha1-\alpha }L^{-\alpha }$, jadi $F_{L}^{L= (1 -\alpha)K(AL)} \cdot ^{\alpha1-\alpha }=(1 -\alpha)F$.

Jumlah: $F_{K}K +F_{L}L =\alpha F+ (1 -\alpha)F= F$ ✓

```{admonition} Koneksi
:class: important

*Implikasi ekonomi: total output sama dengan jumlah pembayaran ke faktor produksi. Tidak ada "extra profit" — perfect competition dengan CRS membuat firms zero economic profit.*

*Inilah mengapa ownership structure tidak penting di Solow-Swan: tidak ada surplus untuk dibagi.*
```
## Konsep 4 — Competitive Equilibrium dan Market Clearing

*Definition 9.2, Exercise 9.5, dan mengapa market clearing penting.*

**Definition 9.2 — Competitive equilibrium** — Lintasan $(K, L)(t)$ dan $(w, R)(t)$ yang memenuhi:

1. Capital market clear: $K(t) =\bar{K}(t)$ (Eq 9.7)
2. Labor market clear: $L(t) =\bar{L}(t)$ (Eq 9.8)
3. Harga = marginal product: $R=F_{K}$, $w=F_{L}$ (Eq 9.5-9.6)
4. Akumulasi: $K^{ˉ˙}=I-\delta \bar{K}$ (Eq 9.2)

**Mengapa market clearing penting?**

```{admonition} 💡 Insight
:class: tip

Pertanyaan kritismu: "Mengapa memang kalau market tidak clear, apa dampaknya di Solow-Swan?"

Tiga skenario disequilibrium yang akan merusak model:

Excess supply modal: modal menganggur — $Y$ lebih kecil dari kapasitas. Equation $Y= F (A, K, L)$ tidak valid karena $K$ harus mengacu pada modal aktif.

Excess demand modal: firm tidak bisa produksi sebanyak yang diinginkan. Output dibatasi oleh modal tersedia, bukan production function.

Pengangguran (excess supply labor): labor produktif tidak dipakai. Output di bawah kapasitas.

Solow-Swan asumsi market clearing sebagai bagian definisi equilibrium. Kita tidak mempelajari disequilibrium — model hanya bicara tentang equilibrium path.

**Walras' Law — pasar barang akhir clear "for free"**

Setelah modal dan labor clear, pasar barang akhir otomatis clear:

$$ Y= C+ I= (1 -s)Y+ sY= Y ✓ $$
```

Inilah Walras' Law: kalau $n -1$ pasar clear, pasar terakhir otomatis clear.

**Exercise 9.5 — Reduksi ke ODE tunggal**

Goal: tunjukkan competitive equilibrium bisa dijelaskan oleh dua persamaan saja.

**Step 1.** Mulai dari capital accumulation

$$ K^{ˉ˙}=I-\delta \bar{K} $$

**Step 2.** Substitusi $I= sY$ (saving = investment)

$$ K^{ˉ˙}=sY-\delta \bar{K} $$

**Step 3** Substitusi $Y= F (A, K, L)$

$$ K^{ˉ˙}=sF (A, K, L) -\delta \bar{K} $$

**Step 4.** Pakai capital market clearing $K= \bar{K}$

$$ \dot{K}=sF (A, K, L) -\delta K $$

Plus labor market clearing $L = \bar{L}$ (Eq 9.8). Selesai.

```{admonition} Hasil kunci
:class: important

*Mengapa "sufficient"? Karena semua variabel lain bisa diturunkan dari $(K, L)$:*

*$Y= F(A, K, L)$ — substitusi langsung $w= F_{L}, R=F_{K}$ — substitusi langsung $C= (1 -s)YI= sY$, — dari savings rule*

*Dimensionalitas efektif Solow-Swan: 1. Inilah kenapa tractable.*
```
## Konsep 5 — Exercise 9.6 — Derivation ODE Per-Worker

*Dari ODE level ke ODE per-worker dengan population growth.*

**Setup**

Population growth: $\bar{L}(t) =eL^{nt}_{0}$, jadi $\dot{L}/L =n$ Tech konstan: $A(t) = A$

$F$ linear homogeneous

Goal: derive $\dot{k}=sf(k) -(n + \delta)k$ dengan $k = K/L$.

*Derivation langkah demi langkah:*

**Step 1.** Pakai linear homogeneity untuk simplify $F$

$F (A, K, L) = L \cdot F (A, K/L, 1) = L \cdot f(k, A)$ dengan $k = K/L$.

**Step 2.** Substitusi ke ODE level

$$
\frac{\dot{K}}{L}=\frac{sLf(k)-\delta K}{L}=sf(k)-\delta k
$$

**Step 3** Turunkan dari $\dot{k}k = K/L$

Pakai quotient rule:

$$
\dot{k}=\frac{\dot{K}L-K\dot{L}}{L^{2}}=\frac{\dot{K}}{L}-k\,\frac{\dot{L}}{L}
$$

Yaitu: $\dot{k}=\dot{K}/L -\dot{k}(/L)\dot{L}$.

**Step 4** Substitusi $\dot{L}/L =n$

$$ \dot{k}=\dot{K} -nk $$

$L$

**Step 5.** Substitusi $\dot{K}$ dari Step 2

$$
\frac{\dot{K}}{L}=\frac{sLf(k)-\delta K}{L}=sf(k)-\delta k
$$

Maka:

$$ \dot{k}=sf(k) -\delta k -nk $$

**Step 6.** Faktorkan

$$ \dot{k}= sf(k) -(n + \delta)k $$

**Interpretasi tiap suku** — $SF (K)$ Saving per worker. Sumber pertumbuhan modal per worker.

$\Delta K$ Physical depreciation. Modal aus.

Dilution by population growth. Modal harus tumbuh secepat $L$ untuk

$$ NK $$

menjaga konstan. $k$

## Konsep 6 — Steady State dan Comparative Statics

### Exercise 9.8 dan 9.9 — eksistensi, keunikan, dan reaksi terhadap parameter. $\bar{k}$

**Exercise 9.8 — Steady state condition**

Set $\dot{k}=0$ di ODE:

$$ sf(, A) =\bar{k}(n + \delta)\bar{k} $$

Interpretasi: saving per worker = effective depreciation. Kekuatan akumulasi dan kekuatan pelarutan seimbang.

**Exercise 9.9 — Derive untuk Cobb-Douglas $\bar{k}$**

$f(k, A) = Ak^{\alpha }$ (Cobb-Douglas dengan $A$ scaling).

**Step 1.** Substitusi ke steady state condition

$$ sA\bar{k}^{\alpha }=(n + \delta)\bar{k} $$

**Step 2.** Bagi kedua sisi dengan $\bar{k}^{\alpha }$

$$ sA= (n + \delta)\bar{k}^{1-\alpha } $$

**Step 3** Solve untuk $\bar{k}^{1-\alpha }$

$$
\bar{k}^{1-\alpha}=\frac{sA}{n+\delta}
$$

**Step 4.** Solve untuk $\bar{k}$

$$
\bar{k}=\left(\frac{s}{n+g+\delta}\right)^{1/(1-\alpha)}
$$

**Comparative statics — empat partial derivatives** — Pakai rule untuk fungsi $\bar{k}(s, A, n, \delta) =(sA/(n + \delta))^{1/(1-\alpha)}$:

$\partial \bar{K}/\partial S> 0$. Saving naik → modal lebih banyak di steady state.

$\partial\bar{k}/\partial A > 0$. Tech lebih tinggi → modal lebih produktif → akumulasi lebih banyak.

$\partial\bar{k}/\partial n < 0$. Populasi tumbuh lebih cepat → dilusi lebih kuat → modal per worker turun.

$\partial\bar{k}/\partial\delta < 0$. Depreciation lebih cepat → modal lebih cepat hancur → steady state lebih rendah.

```{admonition} 💡 Insight
:class: tip

Latihan yang baik: derive keempat partial derivatives dan pastikan tandanya konsisten
```
## Konsep 7 — Transitional Dynamics dan Rate of Convergence

*Inti Section 9.4 — dengan mekanik rate of convergence step-by-step (sesuai permintaanmu).*

**Exercise 9.10 — Global asymptotic stability**

Klaim: $\bar{k}>0$ adalah globally asymptotic stable.

**Bukti via phase line** — ODE: $\dot{k}=G(k):= sf(k) -(n + \delta)k$.

$G(0)=0$ (titik trivial); $G(\bar{k})=0$ (steady state); $G$ konkav ($G''(k)=sf''(k)<0$); $G'(0)=\infty$ (dari Inada) → $G(k) > 0$ untuk kecil positif $k$

Dari bentuk $G$:

Untuk $0<k<\bar{k}$: $G(k)>0$, jadi $k$ naik ke $\bar{k}$. Untuk $k>\bar{k}$: $G(k)<0$, jadi $k$ turun ke $\bar{k}$.

Konvergen monoton dari kedua sisi. Globally asymptotic stable ✓

*Sketsa (PDF): phase line $\dot{k}=G(k)=sf(k)-(n+\delta)k$ — positif sebelum $\bar{k}$, nol di $\bar{k}$, negatif sesudahnya.*

*Phase line Solow-Swan dalam ruang $(k,\dot{k})$: kurva hijau $G(k)$; di kiri $\bar{k}$, $G>0$ → $k$ naik; di kanan, $G<0$ → $k$ turun. Steady state $\bar{k}$ globally asymptotically stable.

*Rate of convergence — mekanik step-by-step.*

```{admonition} Ringkasan besar
:class: important

*Pertanyaan utama: seberapa cepat konvergen ke? $k\bar{k}$ Strategi: linearisasi ODE di → ODE linear → solve eksplisit → half-life. $\bar{k}$*
```
**Linearisasi**

**Step 1** Taylor expansion $G(k)$ di $\bar{k}$

$$ G(k) \approx G(\bar{k}) + G'(\bar{k})\,(k-\bar{k}) $$

Karena $G(\bar{k})=0$:

$$ G(k) \approx G'(\bar{k})\,(k-\bar{k}) $$

**Step 2.** Substitusi ke ODE

$$ \dot{k} \approx G'(\bar{k})\,(k-\bar{k}) $$

**Step 3** Definisikan deviation $d(t):= k(t)-\bar{k}$. Karena $\bar{k}$ konstan: $\dot{d}=\dot{k}$.

ODE jadi:

$$ \dot{d} = G'(\bar{k})\,d $$

Ini ODE linear paling sederhana — bentuk $\dot{x}=ax$ dari Bab 6.

**Step 4.** Solve ODE linear

$$ d(t) = d_{0}\,e^{G'(\bar{k})\,t} $$

Kembali ke $k$:

$$ k(t)-\bar{k} = (k_{0}-\bar{k})\,e^{G'(\bar{k})\,t} $$

**Hitung $G'(\bar{k})$ untuk Cobb-Douglas**

**Step 1.** Turunkan $G$

$G(k) = sk^{\alpha} - (n+\delta)k$, maka:

$$ G'(k) = \alpha s k^{\alpha-1} - (n+\delta) $$

**Step 2.** Evaluasi di $\bar{k}$

$$ G'(\bar{k}) =\alpha s\bar{k}^{\alpha-1}-(n + \delta) $$

**Step 3** Pakai persamaan steady state $s\bar{k}^{\alpha}=(n+\delta)\bar{k}$. Bagi kedua sisi dengan $\bar{k}$:

$$ s\bar{k}^{\alpha-1}=(n + \delta) $$

**Step 4** Substitusi ke $G'(\bar{k})$

$$ G'(\bar{k}) = \alpha(n+\delta) - (n+\delta) = (\alpha-1)(n+\delta) $$

Karena $\alpha < 1$:

$$ G'(\bar{k}) = -(1-\alpha)(n+\delta) < 0 $$

**Half-life — berapa lama deviation separuh berkurang?**

**Step 1.** Setup persamaan

$$
\frac{k(t)-\bar{k}}{k_{0}-\bar{k}}=\frac{1}{2}
$$

Substitusi solusi:

$$ e^{G'(\bar{k})\,t} = \tfrac{1}{2} $$

**Step 2.** Take log natural

$$ G'(\bar{k})\,t = \ln(0.5) = -\ln 2 $$

**Step 3.** Solve untuk $t$

$$
t_{1/2}=\frac{\ln 2}{\left|G\'(\bar{k})\right|}=\frac{\ln 2}{(1-\alpha)(n+\delta)}
$$

**Numerical example** — Untuk $\alpha = 1/3, n + \delta = 0.08$:

$$ |G'(\bar{k})| = (2/3)(0.08) \approx 0.053 $$

$t_{1/2} =0.693/0.053 \approx 13$ tahun

```{admonition} Hasil kunci
:class: important

*Interpretasi: deviation dari steady state berkurang separuh setiap ~13 tahun. Untuk OECD parameter ($\alpha = 0.33, n + g + \delta = 0.06$): half-life ~17 tahun. Konsisten dengan pemulihan pasca-perang Jerman/Jepang.*
```
**Insight metakognitif**

```{admonition} 💡 Insight
:class: tip

Titik bingung yang umum: perhitungan rate of convergence. Kuncinya: $\tilde{k}$ (tilde) adalah nama variabel baru untuk deviasi dari steady state, bukan $k$ yang lama.
```
## Konsep 8 — Perpetual Growth — Section 9.5

**Bagaimana mendapat pertumbuhan permanen?**

**Masalah** — Solow-Swan dasar menunjukkan ekonomi konvergen ke $\bar{k}$ — yaitu, tidak ada long-run growth per kapita. Kontradiksi dengan data: negara seperti AS sudah tumbuh per kapita selama 150+ tahun.

**Exercise 9.11 — AK model**

Set $\alpha = 1$ di Cobb-Douglas:

$$ F (K, L, A) = \dot{K}(AL)=^{0}K $$

Output hanya tergantung modal. ODE per worker:

$$ \dot{k}=sAk -(n + \delta)k = [sA -(n + \delta)]k $$

**Karakteristik AK model** — ODE linear — solusi: $k(t) = k_{0}^{[sA-(n+\delta)]t}e$ Tidak ada steady state interior Kalau $sA> n + \delta$: perpetual growth dengan rate $sA -(n + \delta)$

Capital share = 100% (counterfactual!)

```{admonition} ⚠️ Jebakan umum
:class: warning

AK model menghasilkan perpetual growth, tapi:

Tidak ada diminishing returns ($\alpha = 1$ → $F_{KK} =0$) Labor tidak relevan untuk output

Capital share = 100% — data menunjukkan ~30-40%

AK model bertentangan dengan Kaldor facts. Kita butuh solusi yang lebih baik.
```
## Konsep 9 — Uzawa BGP — Bukti Step-by-Step

*Proposition 9.2 dan Exercise 9.13. Aturan baru: tidak lompat notasi.*

**Setup**

Production function umum:

$$ Y= A_{H} \cdot F [A_{K}K, A_{L}L] $$

Asumsi BGP: semua growth rate konstan (yaitu $g_{K}, g_{Y}, g_{C}$ tidak berubah seiring waktu).

**Fakta matematis kunci**

```{admonition} Hasil kunci
:class: important

*Fakta: kalau $X/Y$ konstan, maka $g_{X} =g_{Y}$.*
```
*Bukti langkah demi langkah:*

*1. Asumsi: $X/Y= c$ (konstan). Tulis: $X= cY$. 2. Turunkan: $\dot{X}=c\dot{Y}$. 3. Bagi dengan $X$: $\dot{X}/X=c\dot{Y}/X$. 4. Substitusi $X= cY$: $\dot{X}/X=c\dot{Y}/(cY)=\dot{Y}/Y$. 5. Yaitu $g_{X} =g_{Y}$. QED.*

*Aturan praktis: " $X/Y$ konstan"⟹" $g_{X} =g_{Y}$ ".*

*Bukti Uzawa langkah demi langkah:*

**Step 1.** Resource constraint

$$ \dot{K}=Y-C-\delta K $$

Bagi kedua sisi dengan $K$:

$$
\frac{\dot{K}}{K}=\frac{Y}{K}-\frac{C}{K}-\delta
$$

Yaitu: $g_{K} =Y /K -C/K -\delta$.

**Step 2.** BGP berarti semua growth rate konstan

$g_{K}$ konstan di sebelah kiri → sebelah kanan juga konstan.

Karena konstan, $\delta Y /K -C/K$ harus konstan. Dengan asumsi BGP yang lebih ketat: $Y /K$ dan $C/K$ masing-masing konstan.

**Step 3.** Aplikasi fakta matematis

$Y /K$ konstan → $g_{Y} =g_{K}$.

$C/K$ konstan → $g_{C} =g_{K}$.

Maka: $g_{Y} =g_{K} =g_{C}$. (Klaim 1 Uzawa).

**Step 4.** Bagi production function dengan $Y$

Karena $F$ linear homogeneous, kita pakai property dengan $\lambda = 1/Y$:

$$
1=A_{H}\,F(A_{K}K,\;A_{L}L)
$$

$Y$

Atau pakai bentuk yang lebih terurai (untuk argumen):

$$ 1 = F[\tilde{A},KY,YL ] $$

**Step 5.** Cek apakah $K/Y$ konstan

Dari Step 3: $g_{Y} =g_{K}$. Pakai fakta matematis (arah balik): $g_{X} =g_{Y}$ ⟹ $X/Y$ konstan. Maka $K/Y$ konstan dalam BGP ✓

**Step 6.** Cek apakah $L/Y$ konstan

Pakai fakta matematis: $L/Y$ konstan ⟺ $g_{L} =g_{Y}$.

Tapi $g_{L} =n$ (population growth) dan $g_{Y} >n$ dalam BGP per capita growth.

Maka $g_{L}^{ \ne g} =_{Y}$ → $L/Y$ TIDAK konstan. Lebih spesifik, $L/Y$ menurun dengan rate $g_{L} -g_{Y} =$ $n -g_{Y} <0$.

**Step 7.** Konsekuensi: tech harus menyentuh sisi $L$

Persamaan $1 = F [, K/Y, L/Y ]\tilde{A}$ harus tetap berlaku. $K/Y$ konstan (oke), tapi $L/Y$ berubah (masalah). Tech $\tilde{A}$ harus berubah sehingga mengkompensasi perubahan $L/Y$.

Solusi: tech labor-augmenting $A_{L}$ yang menggandakan $L$. Tulis:

$$ Y= F [K, A_{L}L] $$

**Step 8.** Tentukan rate growth $A_{L}$

Untuk BGP, $(A_{L}L)/Y$ harus konstan.

Pakai fakta matematis: $(A_{L}L)/Y$ konstan ⟺ $g_{ALL} =g_{Y}$.

Rule untuk produk: $g_{ALL} =g_{AL}+g_{L} =g_{AL} +n$.

Set sama dengan $g_{Y}$:

$$ g_{AL} +n = g_{Y}⟹g_{AL} =g_{Y} -n $$

Tech labor-augmenting tumbuh dengan rate $g_{Y} -n$. (Klaim 2-3 Uzawa).

**Mengapa hanya $A_{L}$?**

```{admonition} Ringkasan besar
:class: important

*Argumen inti: $K/Y$ sudah konstan dalam BGP (dari resource constraint). Yang bermasalah adalah $L/Y$ — karena $L$ tumbuh dengan tapi $nY$ tumbuh dengan $g_{Y} >$ $n$.*

*Tech harus memperbaiki sisi yang bermasalah, yaitu sisi $L$. Itulah mengapa hanya labor-augmenting (Harrod-neutral) yang bekerja.*

*Asimetri ekonomi: $K$ adalah variabel endogenous (menyesuaikan lewat investment), $L$ adalah variabel exogenous (tetap di rate). Tech harus menyentuh sisi yang tidak bisa $n$ menyesuaikan.*
```
## Konsep 10 — Exercise 9.14 — Verifikasi CES

*Cek tiga jenis tech untuk CES production function.*

**Setup CES**

$$ Y= A_{H}^{[}\gamma (A_{K}K)+ (1 -\gamma)(A^{\sigma }_{L}L)^{\sigma }]^{1/\sigma } $$

Dengan $\sigma \in (-\infty, 1), \sigma = \ne 0$. Elasticity of substitution $= 1/(1 -\sigma)$. Untuk $\sigma \to 0$ (Cobb-Douglas), elasticity = 1.

**Skenario 1 — Hicks-neutral** — $A_{K} =A_{L} =1$, hanya $A_{H}$ tumbuh.

**Hitung capital share**

**Step 1** Hitung $F_{K}$

Misal $u:= \gamma K+^{\sigma }(1 -\gamma)L^{\sigma }$. Chain rule:

$$
F_{K}=A_{H}\,\gamma\,K^{\sigma-1}\,u^{(1-\sigma)/\sigma}
$$

**Step 2** Hitung $F_{K}^{K/Y} \cdot$

$$
\frac{F_{K}K}{Y}=\frac{A_{H}\gamma K^{\sigma}u^{(1-\sigma)/\sigma}}{A_{H}u^{1/\sigma}}=\frac{\gamma K^{\sigma}}{u}
$$

Yaitu:

$$ \gamma K^{\sigma } $$

$Capital share =_{\sigma\sigma }$

$$ \gamma K+ (1 -\gamma)L $$

**Step 3.** Cek konstansi

Bagi pembilang dan penyebut dengan $K^{\sigma }$:

$$ \gamma $$

$Capital share =$

$$ \gamma + (1 -\gamma)(L/K)^{\sigma } $$

Capital share konstan ⟺ $L/K$ konstan ⟺ $g_{L} =g_{K}$.

Tapi $g_{L} =n, g_{K} =g_{Y} >n$ → $L/K$ tidak konstan → capital share berubah.

Hicks-neutral gagal Kaldor fact 3.

**Skenario 2 — Solow-neutral** — $A_{H} =A_{L} =1$, hanya $A_{K}$ tumbuh.

**Step 1.** Pakai linear homogeneity

$$ YL=[(\gamma A^{K}LK)^{\sigma }+ (1 -\gamma)]^{1/\sigma } $$

**Step 2.** Argumen BGP

Untuk $Y /L$ tumbuh dengan rate konstan, sebelah kanan harus tumbuh dengan rate konstan. Karena suku $(1 -\gamma)$ konstan, suku $\gamma (A_{K}K/L)^{\sigma }$ harus konstan (bukan tumbuh).

Maka $A_{K}K/L$ konstan.

**Step 3.** Pakai fakta matematis

$A_{K}K/L$ konstan → $g_{AKK} =g_{L} =n$.

$g_{AKK} =g_{AK} +g_{K}$, jadi $g_{AK} +g_{K} =n$.

**Step 4** Substitusi $g_{K} =g_{Y}$

$$ g_{AK} =n -g_{Y} <0 $$

Tech harus mundur — tidak realistis. Solow-neutral gagal.

**Skenario 3 — Harrod-neutral** — $A_{H} =A_{K} =1$, hanya $A_{L}$ tumbuh.

**Step 1.** Setup

$$ Y=\gamma K+ (1 -\gamma)(A[^{\sigma }_{L}L)^{\sigma }]^{1/\sigma } $$

Bagi dengan $K$:

$$
\frac{K}{Y}=\left[\gamma+(1-\gamma)\left(\frac{A_{L}L}{K}\right)^{\sigma}\right]^{-1/\sigma}
$$

**Step 2.** Argumen BGP

Untuk $Y /K$ konstan (dari Kaldor fact 1), sebelah kanan harus konstan. Maka $A_{L}L/K$ konstan.

**Step 3.** Pakai fakta matematis

$A_{L}L/K$ konstan → $g_{ALL} =g_{K} =g_{Y}$.

$g_{AL} +n = g_{Y}$, jadi:

$$ g_{AL} =g_{Y} -n > 0 $$

Tech maju. Realistis. ✓

**Step 4.** Cek capital share

Capital share = $\gamma /[\gamma + (1 -\gamma)(A_{L}L/K)]^{\sigma }$. Karena $A_{L}L/K$ konstan, capital share konstan ✓

```{admonition} Hasil kunci
:class: important

**Untuk CES non-Cobb-Douglas**

*Hicks-neutral: gagal (capital share non-konstan) Solow-neutral: gagal (butuh negative tech growth) Harrod-neutral: berhasil✓*

*Uzawa BGP terverifikasi untuk CES.*
```
## Konsep 11 — Exercise 9.15 — Cobb-Douglas Equivalence

*Mengapa Cobb-Douglas "menyembunyikan" distinction antara Hicks/Solow/Harrod.*

**Tiga versi Cobb-Douglas dengan tech** — Hicks-neutral: $Y= A_{H} \cdot KL^{\alpha1-\alpha }$ Solow-neutral: $Y= (A_{K}K)L^{\alpha1-\alpha }$ Harrod-neutral: $Y= K(A^{\alpha }_{L}L)^{1-\alpha }$

**Tunjukkan equivalence Versi A ≡ Versi B**

**Step 1.** Expand Solow-neutral

$$ (A_{K}K)=^{\alpha }A^{\alpha }_{K} \cdot K^{\alpha } $$

Maka:

$$ Y_{B} =AKL^{\alpha }_{K}^{\alpha1-\alpha } $$

**Step 2.** Bandingkan dengan Hicks

$Y_{A} =A_{H}KL^{\alpha1-\alpha }$. Identik jika:

$$ A_{H} =A^{\alpha }_{K}\Leftrightarrow A_{K} =A^{1/\alpha }_{H} $$

**Tunjukkan equivalence Versi A ≡ Versi C**

**Step 1.** Expand Harrod-neutral

$$ (A_{L}L)^{1-\alpha }=A^{1-\alpha }_{L}L^{1-\alpha } $$

Maka:

$$ Y_{C} =A^{1-\alpha }_{L}KL^{\alpha1-\alpha } $$

**Step 2.** Identifikasi

$Y_{A} =A_{H}KL^{\alpha1-\alpha }$. Identik jika:

$$ A_{H} =A^{1-\alpha }_{L}\Leftrightarrow A_{L} =A^{1/(1-\alpha)}_{H} $$

**Mengapa equivalence?** Aljabra: Cobb-Douglas multiplicatively separable. Tech apa pun yang masuk hanya menambah faktor konstan yang bisa "diabsorpsi" lewat aturan eksponen.

Elasticity: Cobb-Douglas punya elasticity of substitution = 1 (unit elasticity). Tidak ada bias terhadap input mana yang "diperkuat". Maka ketiga tech equivalent.

```{admonition} Catatan
:class: note

*Cobb-Douglas adalah kasus knife-edge di antara semua CES. Untuk $\sigma = \ne 0$ generic, ketiga jenis tech tidak equivalent.*
```
## Konsep 12 — Tension: Uzawa vs Cobb-Douglas vs Data

*Pertanyaan kritismu — mengapa Uzawa tetap penting meski data konsisten dengan Cobb-Douglas.*

```{admonition} 💡 Insight
:class: tip

Pertanyaanmu: "Tapi data yang ada menunjukkan hubungan fungsi produksi Cobb-Douglas kan?"

Iya, data kompatibel dengan Cobb-Douglas (capital share ~30-40% relatif konstan, elasticity $\approx 1$). Tapi ini tidak membuat Uzawa BGP irrelevant.
```
**Tiga resolusi tension**

**Resolusi 1.** Cobb-Douglas adalah idealisasi knife-edge

Cobb-Douglas adalah satu titik khusus di CES family ($\sigma = 0$). Empirically, elasticity of substitution biasanya estimasi dekat 1 tapi tidak persis 1 (range $0.4$ hingga $1.2$).

Untuk $\sigma _{KL}$ sedikit berbeda dari 1, Uzawa BGP tetap mengikat. Hanya labor-augmenting yang konsisten.

**Resolusi 2.** Cobb-Douglas mengubur identifikasi

Untuk Cobb-Douglas, ketiga tech equivalent secara matematis. Tapi tidak berarti ekonomi melakukan tiga jenis tech simultaneous tanpa peduli.

Yang terjadi: ekonomi sebenarnya labor-augmenting (sesuai Uzawa), tapi dengan Cobb-Douglas kita tidak bisa lihat itu dari data.

**Resolusi 3.** Data bukan persis Cobb-Douglas

Bukti empiris bahwa data menyimpang dari Cobb-Douglas:

Capital share bervariasi (~25-40%) antar negara dan waktu

Elasticity of substitution bervariasi tergantung metode

Manufacturing sector lebih dekat ke Leontief, service sector lebih dekat ke perfect substitute

Cobb-Douglas adalah aproksimasi, bukan deskripsi persis.

**Mengapa kita pakai Cobb-Douglas di kursus?** Tractability: formula closed-form untuk steady state

Aproksimasi yang cukup baik untuk pelajaran dasar

Memudahkan pemahaman konsep tanpa kompleksitas functional form

```{admonition} Ringkasan besar
:class: important

*Pelajaran metodologis: model adalah simplifikasi yang berguna, bukan deskripsi reality.*

*Cobb-Douglas berguna tapi bukan final answer. Ekonom yang baik selalu sadar batas model.*
```
**Implikasi praktis** — Pertanyaan yang mungkin muncul:

"Mengapa Cobb-Douglas spesial?" → jawab dengan Exercise 9.15 (multiplicatively separable, unit elasticity)

"Mengapa Uzawa tetap penting?" → jawab dengan Resolusi 1 (knife-edge) atau Resolusi 2 (mengubur mekanisme)

## Konsep 13 — Exercise 9.16 — ODE Solow-Swan dengan Tech

*Derivation step-by-step dari production function ke ODE per-effective-worker.*

**Setup**

Production: $Y= F [K, A(t)L(t)]$ (labor-augmenting) Population: $L(t) = eL^{nt}_{0}$, jadi $g_{L} =n$ Tech: $A(t) = eA^{gt}_{0}$, jadi $g_{A} =g$ Saving: $\dot{K}=sY-\delta K$

Goal: derive $\dot{k}=sf(k) -(n + g + \delta)k$ dengan $k = K/(AL)$.

*Derivation langkah demi langkah:*

**Step 1.** Pakai linear homogeneity

$F (K, AL)$ linear homogeneous. Pakai dengan $\lambda = 1/(AL)$:

$$ F (K, AL) = AL \cdot F (K/(AL), 1) = AL \cdot f(k) $$

Substitusi ke capital accumulation:

$$ \dot{K}=sALf(k) -\delta K $$

**Step 2.** Hitung via log-differentiation $\dot{k}$

Definisi: $k = K/(AL)$. Ambil log:

$$ ln k = ln K -ln A -ln L $$

Turunkan terhadap (chain rule untuk tiap log): $t$

$$
\frac{\dot{k}}{k}=\frac{\dot{K}}{K}-\frac{\dot{A}}{A}-\frac{\dot{L}}{L}
$$

**Step 3.** Substitusi growth rates

$\dot{A}/A=g$ dan $\dot{L}/L =n$:

$$
\frac{\dot{k}}{k}=\frac{\dot{K}}{K}-g-n
$$

**Step 4.** Kalikan kedua sisi dengan $k$

$$ \dot{k}=k \cdot \dot{K} -(n + g)k $$

$K$

**Step 5.** Substitusi $\dot{K}$ dari Step 1

$$ \dot{k}=k \cdot sALf(k) -\delta K -(n + g)k $$

$K$

Distribusi pembilang:

$$
\dot{k}=k\cdot\frac{sALf(k)}{K}-\delta k-(n+g)k
$$

**Step 6.** Sederhanakan tiap suku

Suku kedua: $k\delta K/K= \delta k$.

Suku pertama: pakai $K= AL \cdot k$. Substitusi ke penyebut:

$$
\frac{k\;sALf(k)}{K}=\frac{k\;sALf(k)}{AL\cdot k}=s f(k)
$$

Hasil:

$$ \dot{k}=sf(k) -\delta k -(n + g)k $$

**Step 7.** Faktorkan

$$ \dot{k}= sf(k) -(n + g + \delta)k $$

*Interpretasi: tiga komponen "effective depreciation".*

$\Delta K$ Physical depreciation — modal aus $NK$ Dilution by population growth — modal harus tumbuh secepat $L$

$GK$ Dilution by technology growth — modal harus tumbuh secepat $A$

**Steady state baru**

$$
\bar{k}=\left(\frac{s}{n+g+\delta}\right)^{1/(1-\alpha)}
$$

Strukturnya sama, hanya $n + \delta$ jadi $n + g + \delta$.

**Per capita income di BGP** — $Y /L = Af(k)$. Di BGP, $f(\bar{k})$ konstan, jadi $Y/L$ tumbuh dengan rate $g$.

```{admonition} Hasil kunci
:class: important

*Inilah sumber perpetual growth di Solow-Swan modern: per capita income tumbuh dengan rate tech progress. Tanpa tech, ekonomi stuck di steady state level. $g$*
```
## Konsep 14 — Exercise 9.17 — Comparative Dynamics

*Exercise paling penting di Bab 9. Pijakan untuk memahami phase plot dan dampak parameter shock.*

## Bagian 1 — Phase plot dalam $(k,/k)\dot{k}$ -space

ODE Solow-Swan dengan tech: $\dot{k}=sf(k) -(n + g + \delta)k$.

Bagi kedua sisi dengan: $k$

$$
\frac{\dot{k}}{k}=\frac{sf(k)}{k}-(n+g+\delta)
$$

**Mengapa $(k,/k)\dot{k}$ lebih informatif**

```{admonition} Ringkasan besar
:class: important

$\dot{k}/k$ adalah growth rate modal per effective worker — lebih intuitif secara ekonomi.

**Phase plot ini menunjukkan dua kekuatan secara terpisah**

*$sf(k)/k$: kekuatan akumulasi (kurva menurun, dari Inada) $(n + g + \delta)$: kekuatan pelarutan (garis horizontal konstan)*
```
**Bentuk $sf(k)/k$ untuk Cobb-Douglas** — $f(k) = k^{\alpha }$, jadi $sf(k)/k = sk^{\alpha-1}$.

Saat $k \to 0s$: $k^{\alpha-1}\to \infty$ (dari Inada, $\alpha -1 < 0$) Saat $k \to \infty s$: $k^{\alpha-1}\to 0$

Fungsi menurun monoton

**Sketsa phase plot k̇/k**

*Sketsa (pada PDF): phase plot Solow-Swan dalam ruang $(k, \dot{k}/k)$ — kurva $sf(k)/k$ menurun memotong garis datar $n+g+\delta$ tepat di $\bar{k}$; di kiri $\bar{k}$: $\dot{k}/k>0$ ($k$ naik), di kanan: $\dot{k}/k<0$ ($k$ turun).*

**Cara membaca phase plot** — Untuk $k < \bar{k}$: kurva di atas garis, jadi $sf(k)/k > n + g + \delta$, jadi $\dot{k}/k >0$. Modal tumbuh. Untuk $k > \bar{k}$: kurva di bawah garis, $\dot{k}/k <0$. Modal menurun. Di: kurva tepat di garis, $\bar{k}\dot{k}/k =0$. Steady state.

## Bagian 2 — Comparative dynamics untuk tiga shock

**Shock 1.** Meningkat permanen $g$

**Step 1.** Efek pada $\bar{k}$

$\bar{k}=(s/(n + g + \delta))^{1/(1-\alpha)}g$. naik → $(n + g + \delta)$ naik → turun. $\bar{k}$

**Step 2.** Efek pada phase plot

Garis horizontal $(n + g + \delta)$ naik. Perpotongan baru di $\bar{k}^{'}<\bar{k}$.

**Step 3.** Dinamika transisi

Pada $k = \bar{k}$ (lama): $sf(\bar{k})/\bar{k} < n+g+\delta$ → $\dot{k}/k <0$. Modal mulai turun ke $\bar{k}^{'}$.

**Step 4.** Efek pada per capita income $\tilde{y}$

$\tilde{y} =Af(k)$. Selama transisi: $f(k)$ turun (karena turun), tapi $kA$ tumbuh dengan rate $g^{'}$ baru (lebih cepat).

Di BGP baru: per capita income tumbuh dengan rate $g^{'}$ — lebih cepat dari sebelumnya.

k̇/k

n+g'+δ (baru)

n+g+δ (lama)

k k̄'k̄

Shock naik: garis horizontal naik dari $gn + g + \delta$ ke $n + g+^{'}\delta$. Steady state bergeser dari ke $\bar{k}$ $\bar{k}^{'}<\bar{k}$.

```{admonition} Catatan
:class: note

Hasil paradoksal Shock 1: $g$ naik → $\bar{k}$ turun, tapi growth rate per capita income naik. Pelajaran: $\bar{k}$ rendah bukan berarti ekonomi buruk. Yang penting adalah growth rate, $\bar{k}\tilde{y}$
```

**Shock 2.** Menurun permanen $n$

**Step 1.** Efek pada $\bar{k}$

$n$ turun → $(n + g + \delta)$ turun → naik. $\bar{k}$

**Step 2.** Efek pada phase plot

Garis horizontal $(n + g + \delta)$ turun. Perpotongan baru di $\bar{k}^{'}>\bar{k}$.

**Step 3.** Dinamika transisi

Pada $k = \bar{k}$ (lama): $sf(\bar{k})/\bar{k} > n+g+\delta$ → $\dot{k}/k >0$. Modal mulai naik ke $\bar{k}^{'}$.

**Step 4.** Efek pada per capita income

Selama transisi: $f(k)$ naik, $A$ tumbuh dengan rate sama. $g$

Per capita income tumbuh lebih cepat dari selama transisi. $g$

Di BGP baru: growth rate kembali ke $g$, tapi level lebih tinggi.

k̇/k

n+g+δ (lama)

n'+g+δ (baru)

k k̄k̄'

Shock turun: garis horizontal turun. Steady state bergeser dari ke $n\bar{k}\bar{k}^{'}>\bar{k}$.

**Shock 3.** Meningkat permanen $\delta$

**Step 1.** Efek pada $\bar{k}$

$\delta$ naik → $(n + g + \delta)$ naik → turun. Sama secara visual dengan Shock 1. $\bar{k}$

**Step 2.** Efek pada phase plot

Garis horizontal naik. Perpotongan baru di $\bar{k}^{'}<\bar{k}$.

**Step 3.** Dinamika transisi

Modal turun dari ke $\bar{k}\bar{k}^{'}$.

**Step 4.** Efek pada per capita income

Selama transisi: $f(k)$ turun, $A$ tumbuh dengan rate sama. $g$ Per capita income tumbuh lebih lambat dari selama transisi. $g$

Di BGP baru: growth rate kembali ke $g$, tapi level lebih rendah.

**Ringkasan tiga shock**

| Shock | $\bar{k}$ | Level $\tilde{y}$ di BGP | Growth rate per kapita di BGP |
|---|---|---|---|
| $g$ naik | turun | kompleks (selama transisi turun, lalu tumbuh lebih cepat) | **naik** |
| $n$ turun | naik | naik | tetap ($=g$) |
| $\delta$ naik | turun | turun | tetap ($=g$) |

```{admonition} Ringkasan besar — level vs growth effects
:class: important
*Perubahan $s, n, \delta$: hanya level effects — level steady state berubah, growth rate jangka panjang tidak Perubahan $g$: growth effects — growth rate jangka panjang berubah $g$*

*Hanya tech progress ($g$) yang bisa mengubah long-run growth rate.*
```

**Implikasi kebijakan** — Kalau pemerintah ingin growth jangka panjang lebih cepat:

Tidak cukup menaikkan saving rate

Tidak cukup menurunkan population growth

Harus dorong tech progress — R&D, education, innovation

Inilah mengapa Solow menyebut tech progress sebagai "manna from heaven" — di model nya, exogenous, tidak $g$ ada penjelasan. Bab 14-15 (endogenous growth) akan buka black box ini.

## Konsep 15 — Takeaways dan Deficiencies

*Refleksi metakognitif — apa yang dipelajari dan apa yang masih jadi pertanyaan terbuka.*

**Tiga hasil paling penting**

```{admonition} Hasil kunci
:class: important

*Hasil 1 — Solow-Swan konvergen: dari sembarang $k_{0} >0$, ekonomi konvergen secara monoton ke $\bar{k}>0$. Half-life ~13-17 tahun untuk parameter realistik.*

*Hasil 2 — Hanya tech yang mempertahankan long-run growth: per capita income tumbuh dengan rate di BGP. Tanpa tech ($gg= 0$), tidak ada long-run growth.*

*Hasil 3 — Uzawa BGP restriction: untuk konsisten dengan Kaldor facts, tech harus labor-augmenting (Harrod-neutral).*
```
**Tiga deficiency Solow-Swan**

**Tech exogenous** — $g$ "manna from heaven": model tidak menjelaskan dari mana tech progress datang.

**Saving exogenous** — $s$ assumed constant: tidak ada optimisasi household; model tidak bisa menjawab pertanyaan welfare.

**Cross-country** — Mengapa beberapa negara konvergen dan yang lain tidak? Mengapa $A$ dan $s$ berbeda antar negara?

## Roadmap ke depan

Bab 10: empirics Solow-Swan + perluasan dengan human capital (Mankiw-Romer-Weil)

Bab 11: optimal control theory — tools untuk optimisasi dinamis

Bab 12: RCK — Solow-Swan dengan optimisasi household, saddle path

Bab 14-15: endogenous growth (Romer, Schumpeterian) — buka black box tech


## Checklist Pemahaman Bab 9

**Derivasi yang harus kuasai**
- ☐ Derivation ODE per-worker dengan population growth (Exercise 9.6) — quotient rule
- ☐ Steady state untuk Cobb-Douglas (Exercise 9.9) — formula $\bar{k}$
- ☐ Comparative statics — 4 partial derivatives tanda
- ☐ Global asymptotic stability via phase line (Exercise 9.10)
- ☐Rate of convergence step-by-step — linearisasi, half-life
- ☐ Uzawa BGP proof — fakta matematis " $X/Y$ konstan ⟹ $g_{X} =g_{Y}$ "
- ☐ ODE Solow-Swan dengan tech (Exercise 9.16) — log-differentiation

**Konsep yang harus paham**
- ☐ Property 9.1-9.3 dan peran masing-masing
- ☐ Mengapa $0 < \alpha < 1$ wajib di Cobb-Douglas
- ☐ Mengapa market clearing penting
- ☐ Walras' Law — pasar barang clear "for free"
- ☐ Detrending: $k = K/(AL)$ membuat sistem stationary
- ☐ Tiga komponen "effective depreciation" ($\delta, n, g$)
- ☐ Level effects vs growth effects (Exercise 9.17)

**Uzawa BGP — paling sulit**
- ☐ Statement Proposition 9.2 ($g_{Y} =g_{K} =g_{C}$, tech labor-augmenting)
- ☐ Fakta matematis kunci ($X/Y$ konstan ⟹ $g_{X} =g_{Y}$)
- ☐ Mengapa hanya $A_{L}$ yang bekerja (asimetri $K$ endogenous vs $L$ exogenous)
- ☐ Exercise 9.14: CES verification (3 skenario, mengapa Hicks dan Solow gagal)
- ☐ Exercise 9.15: Cobb-Douglas equivalence dan implikasinya
- ☐ Tension Uzawa vs Cobb-Douglas vs data — resolusi knife-edge dan identifikasi

**Phase plot Exercise 9.17**
- ☐ Sketsa phase plot dalam $(k,/k)\dot{k}$ space
- ☐ Identifikasi steady state sebagai perpotongan dua kurva
- ☐ Dampak naik: shift garis horizontal naik, turun, tapi growth naik $g\bar{k}\tilde{y}$
- ☐ Dampak turun: shift garis turun, naik, level naik $n\bar{k}\tilde{y}$
- ☐ Dampak naik: shift garis naik, turun, level turun $\delta \bar{k}\tilde{y}$

✦✦✦

```{admonition} Penutup
:class: important

Bab 9 adalah foundation untuk seluruh sisa kursus. Hampir setiap bab setelah ini (10, 12, 14, 15) build di atas Solow- Swan.
```
```{admonition} Ringkasan besar
:class: important

*1. Derivation step-by-step: bisa derive ODE per-worker dengan population growth dan dengan tech 2. Steady state analysis: hitung, comparative statics $\bar{k}$ 3. Phase plot dan transitional dynamics: gambar dan jelaskan dampak shock parameter 4. Uzawa BGP intuition: mengapa labor-augmenting, asimetri $K$ vs $L$ 5. Connection ke empirics: rate of convergence ~13-17 tahun, half-life*

Aturan yang sudah ditetapkan: derivation matematis selalu step-by-step, tidak lompat notasi. Ini akan dipakai konsisten untuk seterusnya.
```