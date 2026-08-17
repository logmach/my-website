# Bab 11 — Optimal Control

Bab 11 adalah Tools II — teori *optimal control*, fondasi teknis untuk RCK dan seluruh endogenous growth. Dua pendekatan besar dibahas tuntas: HJB (dynamic programming, kondisi cukup) dan PMP (Pontryagin, kondisi perlu), berikut hubungan keduanya, interpretasi ekonomi tiap suku, dan transversality condition. Format catatan: langkah demi langkah, derivasi lengkap, tanpa lompatan notasi.

## Konsep 1 — Posisi Bab 11 dalam Kursus

*Bab 11 adalah Tools II — analog dengan Tools I (Bab 3-8 untuk ODE), tapi untuk optimisasi dinamis.*

### Sifat Bab 11 vs Bab sebelumnya

Tools I (ODE). Setup ODE, solusi, steady state,

**Bab 3-8** — qualitative analysis.

**Bab 9-10** — Aplikasi Solow-Swan. Model deskriptif tanpa optimisasi household. s konstan.

**Bab 11** — Tools II (Optimal Control). Tools matematis untuk optimisasi atas path. Foundation untuk RCK.

**Bab 12-15** — Model dengan optimisasi. RCK, endogenous growth — semua pakai PMP/HJB dari Bab 11.

### Tiga pertanyaan utama Bab 11

1. Bagaimana memformulasikan OCP (Optimal Control Problem)?
2. Bagaimana karakterisasi solusi optimal?
3. Bagaimana kondisi yang harus dipenuhi?

### Dua pendekatan utama

```{admonition} Ringkasan besar
:class: important

Bab 11 menyajikan dua pendekatan untuk solve OCP:

1. HJB approach (BPO + sufficient): solve PDE untuk value function V
2. PMP approach (necessary): solve ODE system dengan Hamiltonian

Mereka adalah dual — analog dengan Welfare Theorems di general equilibrium. Kapan keduanya equivalen ditentukan oleh Mangasarian Sufficiency.
```
### Konteks sejarah

- Calculus of variations (Euler, Lagrange, abad 18): asal mula, motivasi fluid mechanics
- Ramsey (1928): aplikasi pertama di ekonomi — paper original optimal saving
- Pontryagin et al. (1962): PMP, generalisasi calculus of variations, motivasi rocket science (Russia)
- Bellman (1957): BPO dan dynamic programming (Amerika)

Keduanya adalah produk era Perang Dingin — lahir independen, awalnya untuk aplikasi militer, akhirnya menjadi tulang punggung ekonomi dinamis.

## Konsep 2 — Section 11.1 — Setup Optimal Control Problem

*Setup formal masalah optimisasi dinamis.*

### Komponen OCP

### Persamaan (11.1) — Controllable dynamical system

ẋ(t) = f(t, x(t), u(t)),x(0) = x0,x(T) = xT

- x(t) — state variable
- u(t) — control variable
- f — transition map
- x0, xT — boundary values

### Persamaan (11.2) — Total payoff

J(u) =t0Th(t, x(t), u(t)) dt∫

J adalah functional — fungsi dari fungsi u. Inilah yang membuat masalah infinite- dimensional.

### Persamaan (11.3) — Optimal Control Problem

$$
V(t_{0},x_{0})=\max_{u\in\mathcal{U}}\;J(u)\quad\text{s.t. kendala ODE}
$$

V (t0, x0) — value function, indirect utility dari OCP.

### State vs Control — Distinction Fundamental

```{admonition} 💡 Insight
:class: tip

Pertanyaan yang sering muncul: "apa beda state dan control secara konkret di model ekonomi?"

**STATEX** — Distinction yang krusial untuk paham semua model dinamis. Punya ODE sendiri (ẋ = f), tidak dipilih langsung, history-dependent, encapsulate masa lalu. Contoh: modal, wealth, stok ikan.
```
**Control $u$** — Dipilih bebas tiap saat, tidak punya ODE, bisa berubah seketika. Contoh: konsumsi, investasi, harga.

### Tes diagnostik untuk identifikasi

- Ada ODE (⋅˙)? → state
- Dipilih bebas? → control
- Punya history? → state
- Tidak ada constraint sebelumnya? → control

### Contoh konkret di RCK

**State $k$** — Modal per pekerja. ODE: $\dot{k} = f(k) - \delta k - c$. Tidak bisa lompat — harus akumulasi seiring waktu.

**Control $c$** — Konsumsi. Dipilih bebas tiap saat. Tidak ada ODE untuk $c$ sendiri.

### Mengapa OCP sulit

Satu peringatan penting:

"This is an infinite-dimensional problem... there are uncountably and infinitely many such conditions."

Tidak bisa pakai Lagrangian biasa. Butuh trick matematis baru — itulah BPO, HJB, PMP.

## Konsep 3 — Section 11.2 — Bellman's Principle of Optimality

*Filosofi pemandu: optimal plan self-consistent di setiap titik.*

### Pernyataan BPO

```{admonition} Ringkasan besar
:class: important

BPO: Optimal plan punya properti bahwa continuation dari plan itu (sisa setelah titik manapun) juga plan optimal dari titik tersebut.

Atau lebih pendek: optimal plan tetap optimal di setiap titik sepanjang path.
```
### Tiga analogi untuk grasp BPO

### Analogi 1 — Perjalanan

Kalau sudah berada di KL, rute optimal dari sana

### Analogi 2 — Lips and Hips

Optimal diet: jangan makan kue. Setelah 10 hari berhasil, optimal plan untuk 20 hari sisa tetap: jangan makan kue.

### Analogi 3 — Catur

Optimal strategy menang dalam T move. Setelah 5 move, continuation tetap optimal strategy dari posisi sekarang.

### Bukti BPO via kontradiksi

Misalkan plan u∗ optimal dari (t0, x0). Andaikan continuation dari (t′, x(t′))bukan optimal — ada u′ lebih baik.

Maka plan baru "u∗ sampai t′, lalu u′ setelah t′" memberi total payoff lebih besar dari u∗. Kontradiksi dengan u∗ optimal.

Kesimpulan: continuation harus optimal. QED.

### Persamaan Bellman

Untuk sembarang t′∈[t, T]:

$$
V(t,x)=\max_{u}\left\{\int_{t}^{t'}h\,d\tau+V\bigl(t',x(t')\bigr)\right\}
$$

**V(t, X)** — Total value optimal dari (t, x)

**Integral Pertama** — Payoff dari segmen [t, t′]

**V(t′, X(t′))** — Value optimal sisa dari t′ (BPO menjamin ini optimal)

### Tiga pelajaran BPO

### Pelajaran 1 — Backward induction

OCP bisa di-solve dari akhir ke awal:

1. V (T, x) = 0
2. Mundur ke T−Δt, hitung V
3. Lanjut mundur sampai V (t0, x0)

Inilah dynamic programming.

### Pelajaran 2 — Markov property

Decision optimal di t hanya tergantung pada (t, x(t)) — bukan history. State x(t) sudah encapsulate semua info relevan.

### Pelajaran 3 — State feedback rule

Optimal control adalah fungsi dari state: u∗(t) = μ(t, x(t)). Bukan fungsi waktu saja.

### Limit infinitesimal → HJB

Ambil t′= t + dt:

$$
V(t,x)\approx\max_{u}\bigl\{h\cdot dt+V(t+dt,\;x+dx)\bigr\}
$$

dengan dx = f⋅dt.

Setelah manipulasi → HJB equation. Inilah continuous-time version BPO.

## Konsep 4 — Section 11.3 — HJB Equation (Sufficient)

*Bagian paling teknis Bab 11. Derive HJB equation dari intuisi cost- benefit.*

### Intuisi cost-benefit

Analogi yang membantu — "lips and hips":

- Optimal plan: jangan makan kue
- Marginal benefit deviasi: h (kepuasan instant)
- Marginal cost deviasi: −V ˙ (rate value hilang)

Kondisi tidak ada incentive deviasi:

$$
h(t,x,u)\;\le\;-\dot{V}(t,x)\qquad(11.4)
$$

```{admonition} 💡 Insight
:class: tip

Pertanyaan yang sering muncul: "mengapa h ≤−V ˙? Jika V ˙ positif itu berarti h negatif?"

Jawaban: pada optimal path, V menurun karena horizon mengecil. Maka V ˙ ≤0, dan −V ˙ ≥0. Inequality konsisten dengan h ≥0. Untuk kontrol sub- optimal, inequality mungkin dilanggar — itu justru tanda kontrol bukan optimal.
```
### Chain rule untuk V ˙

#### `Step 1` V (t, x(t)) tergantung pada t lewat dua channel

- Langsung lewat t
- Lewat x(t)

#### `Step 2` Chain rule multivariate

dtdV= Vt + Vx ⋅ẋ

#### `Step 3` Substitusi ODE constraint ẋ = f

V ˙ = Vt + Vx ⋅f(t, x, u)

### Dari (11.4) ke (11.5) ke (11.8)

### Step 1 — Substitusi chain rule ke (11.4)

h ≤−V ˙ = −Vt −Vxf. Pindahkan:

h + Vt + ⟨Vx, f⟩≤0(11.5)

### Step 2 — Pada optimal, inequality binding

Tidak ada deviasi yang menguntungkan → inequality binding sebagai equality:

h(t, x, u∗) + Vt + ⟨Vx, f(t, x, u∗)⟩= 0

### Step 3 — Optimal u∗ adalah maximizer

Karena (11.5) berlaku untuk semua u dan binding di u∗:

$$
-V_{t}=\max_{u}\bigl\{h(t,x,u)+\langle V_{x},\,f(t,x,u)\rangle\bigr\}\qquad(11.8)
$$

Inilah HJB equation.

### Step 4 — Optimal control rule

$$
\mu(t,x)\in\arg\max_{u}\bigl\{h+\langle V_{x},f\rangle\bigr\}\qquad(11.9)
$$

### Tanda Vt, Vx, Vxf

```{admonition} 💡 Insight
:class: tip

Pertanyaan yang sering muncul: "apakah Vt dan Vxf semuanya negatif?"

**VT** — **VX** — Positif biasanya. Marginal value state. Lebih banyak modal = welfare lebih.

**F** — Bervariasi. Bisa positif (state tumbuh) atau negatif (state menurun). Tergantung u.

Tidak punya tanda universal. Bisa + atau −

**VX F** — tergantung tanda f.

**V̇** — Negatif pada optimal path. Vt negatif mendominasi Vxf.
```
### Interpretasi persamaan (11.7)

$$
-V_{t}\ \ge\ h(t,x,u)+V_{x}f(t,x,u)
$$

**$-V_{t}$** — Rate value hilang karena waktu berlalu. Independen dari $u$.

**$h$** — Direct effect kontrol $u$ pada payoff.

**VX F** — Indirect effect kontrol u via state transition. Bukan inherent "marginal benefit" — bisa + atau −.

```{admonition} Catatan
:class: note

Istilah untuk $V_{x}f$: "marginal lifetime benefit"

Lebih akurat: "indirect effect via state transition".
```
### HJB sebagai PDE

HJB equation adalah PDE (partial differential equation) karena V (t, x) punya dua argumen:

- Vt: turunan parsial terhadap t
- Vx: turunan parsial terhadap x

Sifat PDE umumnya sulit di-solve. Closed-form hanya untuk kasus khusus (LQR).

### Theorem 11.1 — HJB Sufficiency

```{admonition} Hasil kunci
:class: important

Statement: kalau V memenuhi HJB equation dengan boundary V (T, x) = 0, maka μ(t, x) = arg max di kanan HJB adalah optimal

control.

Implikasi: solve HJB → optimal control gratis.

**Jebakan Umum**

Common mistake: lupa boundary V (T, x) = 0. Tanpa boundary, HJB punya banyak solusi. Boundary mem-pin-down solusi unique.
```
## Konsep 5 — Section 11.4 — Necessary Conditions

*Mengapa kita butuh necessary conditions selain HJB? Karena PDE sulit.*

### Sufficient vs Necessary

```{admonition} 💡 Insight
:class: tip

Sintesisnya: "Kalau sufficient, kita tahu V solve HJB lalu tentukan kontrol optimal. Kalau necessary, kita cari μ yang memenuhi 11.12 dan 11.13."

Sebagian tepat, tapi perlu klarifikasi.

**Sufficient** — V memenuhi HJB di semua (t, x) → optimal control. Strategy: solve PDE global.

**NECESSARY** — Vtetap memenuhi HJB, tapi tidak perlu solve PDE global. Cukup kondisi lokal sepanjang optimal path.
```
### Mengapa butuh necessary conditions

1. PDE sulit — closed-form jarang ada
2. Komputasi mahal — perlu V untuk semua (t, x), mahal untuk state multi-dimensi
3. Local analysis cukup — kadang hanya butuh karakterisasi optimal path, bukan global V

### Envelope Theorem sebagai trick

Statement informal: kalau V (x) = maxk F(x, k) dengan k∗(x) = arg max, maka:

dxdV= Fx(x, k∗(x))

Tidak perlu memperhitungkan dk∗/dx. Hanya turunan parsial F terhadap x. Mengapa: karena Fk(x, k∗) = 0 (FOC), suku Fk⋅dk∗/dx = 0 — hilang.

### Derivation persamaan (11.12)

#### `Step 1` Turunkan HJB terhadap x

Sisi kanan: maxk{h + Vxf}. Pakai Envelope Theorem.

#### `Step 2` Hasilnya

0 = hx + Vtx + Vxxf+ Vxfx

#### `Step 3` Pakai chain rule untuk V ˙x

V ˙x= Vtx + Vxxẋ = Vtx + Vxxf

#### `Step 4` Substitusi → persamaan (11.12)

0 = hx + V ˙x + Vxfx

### Persamaan (11.13) — analog untuk waktu

Sama tapi turunkan terhadap t:

$$
0=h_{t}+\dot{V}_{t}+V_{x}f_{t}\qquad(11.13)
$$

### Tabel suku-suku necessary conditions

```{admonition} 💡 Insight
:class: tip

Interpretasi tiap suku — satu per satu.

**HT** — Direct effect of time on momentary payoff. Bagaimana payoff berubah saat waktu maju, holding x, u konstan. Direct effect of state on momentary payoff. `HX` Bagaimana payoff berubah saat state naik, holding t, u konstan.

Rate of marginal value change over time. `V̇X` Bagaimana Vx (shadow price state) berubah sepanjang optimal path.
```
#### Rate at which time-effects accumulate along

**$\dot{V}_{t}$** — Bagaimana $V_{t}$ (rate value hilang) berubah sepanjang optimal path.

#### Continuation marginal value through

**VX FX** — transition law of state. Efek tidak langsung state pada future value lewat dinamika.

#### Indirect effect through time-variation in

**VX FT** — transition law, valued by Vx. Efek tidak langsung waktu pada future value lewat dinamika.

### Tabel cost-benefit framework

**Tweakx** — Persamaan (11.12): 0 = hx + V ˙x + Vxfx

**Tweakt** — Persamaan (11.13): 0 = ht + V ˙t + Vxft

**Direct Effect Padah** — hx (state) atau ht (waktu)

**Effect Via Dinamika** — Vxfx (state) atau Vxft (waktu)

**Akumulasi Rate** — V ˙x (state) atau V ˙t (waktu)

**Balance Optimal** — Semua suku berjumlah nol

### Hubungan BPO ↔ HJB ↔ Necessary conditions

```{admonition} 💡 Insight
:class: tip

Pertanyaan yang sering muncul: "apa hubungan BPO dengan necessary conditions?"
```
```{admonition} Ringkasan besar
:class: important

Rantai logika:

1. BPO: optimal self-consistent di setiap titik
2. → HJB binding sebagai equality sepanjang optimal path
3. → Bisa turunkan HJB terhadap x atau t
4. → Necessary conditions (11.12) dan (11.13)

BPO adalah filosofi. Necessary conditions adalah konsekuensi matematis local dari BPO.
```
### Kasus autonomous

Untuk growth models, h dan f biasanya tidak tergantung pada t explisit. Maka:

- ht= 0
- ft= 0
- Vxft= 0
- V ˙t= 0 (sebagai konsekuensi)

Persamaan (11.13) trivial terpenuhi. Hanya (11.12) relevan.

```{admonition} Hasil kunci
:class: important

Inilah mengapa di RCK kita hanya pakai satu adjoint equation (yang akan jadi ψ˙ = −Hk di PMP).
```
### Visualisasi mental — kapten kapal

- (11.12): kalau kapal didorong ke kanan sedikit, apa optimal masih tunjuk arah yang sama?
- (11.13): kalau kita tunggu sebentar, apa optimal masih tunjuk arah yang sama?
- Balance ke nol: kalau iya, kita sedang di optimal path

**Jebakan Umum**

Jangan paham tiap suku terpisah — itu sumber kebingungan. Paham sebagai paket cost-benefit: tweak variabel → tiga efek muncul → optimal saat balance ke nol.

## Konsep 6 — Section 11.5 — Pontryagin Maximum Principle

*Reformulasi necessary conditions sebagai Hamiltonian system. Workhorse ekonomi makro dinamis.*

### Adjoint variables

Diperkenalkan dua adjoint variables:

ψ(t):= Vx(t, x∗(t)) — shadow price dari state x.

**$\psi(T)$**

Biasa dipakai.

ψ0(t):= Vt(t, x∗(t)) — shadow price dari waktu.

**$\psi_{0}(T)$**

Jarang dibahas eksplisit.

```{admonition} 💡 Insight
:class: tip

Pertanyaan yang sering muncul: "ψ0(t) ini apa?"

ψ0 adalah notasi untuk Vt sepanjang optimal path. Untuk autonomous problems (kasus RCK), ψ0 tidak berperan aktif karena (11.13) trivial. Kebanyakan textbook hanya menulis ψ.
```
### Hamiltonian

Definisi (11.14):

$$
H(t,x,u,\psi):=h(t,x,u)+\langle\psi,\;f(t,x,u)\rangle\qquad(11.14)
$$

**$h$** — Direct payoff dari $u$.

**$\psi \cdot f$** — Indirect value lewat state evolution: shadow price × transition rate.

### Empat kondisi PMP

### Kondisi 1 — Adjoint equation (11.15)

ψ˙ = −Hx= −[hx + ψfx]

Konsekuensi dari (11.12) dengan substitusi Vx= ψ dan V ˙x= ψ˙.

### Kondisi 2 — Transversality (11.16)

ψ(T) = 0

Boundary HJB V (T, x) = 0 → Vx(T, x) = 0 → ψ(T) = 0.

### Kondisi 3 — Maximality (11.17)

u∗(t) ∈arg umax H(t, x∗, u, ψ)

Konsekuensi dari (11.9) — optimal control rule.

### Kondisi 4 — Maximized Hamiltonian (11.18) dan envelope (11.19)

```{admonition} 💡 Insight
:class: tip

Pertanyaan yang sering muncul: "darimana (11.18) dan (11.19)?"

Persamaan (11.18): H∗= −Vt. Diturunkan dari HJB equation langsung dengan substitusi Vx= ψ.
```
#### `Step 1` Mulai dari HJB

−Vt= kmax{h + Vxf}

#### `Step 2` Substitusi Vx= ψ sepanjang optimal path

−Vt= kmax{h + ψf} = kmax H

#### `Step 3` Pada u∗ (maximizer)

$$
H^{*}(t):=H(t,x^{*},u^{*},\psi)=-V_{t}\qquad(11.18)
$$

Persamaan (11.19): $$
\dot{H}^{*}=H_{t}\qquad(11.19)
$$. Diturunkan dari (11.18) + (11.13).

#### `Step 1` Turunkan (11.18) terhadap t

$\dot{H}^{*}=-\dot{V}_{t}$

#### `Step 2` Pakai (11.13) untuk solve V ˙t

$\dot{V}_{t}=-h_{t}-V_{x}f_{t}$

#### `Step 3` Substitusi → $\dot{H}^{*}=h_{t}+V_{x}f_{t}$

#### `Step 4` Kenali sebagai Ht (turunan parsial Hamiltonian)

Ḣ∗= Ht

### Lagrangian vs Hamiltonian — tabel paralel

**Statis** — L = f+ λg (Lagrangian)

**Dinamis** — H= h + ψf (Hamiltonian)

**Multiplier Statis** — λ (konstanta)

**Multiplier Dinamis** — ψ(t) (fungsi waktu, "shadow price")

**FOC Statis** — Lx= 0

**FOC Dinamis** — Hu= 0 (maximality)

**Kkt/complementary** — ### Adjoint sebagai shadow price

```{admonition} Hasil kunci
:class: important

ψ(t) = nilai marginal punya satu unit state ekstra pada waktu t.

Untuk RCK: ψ= marginal utility of capital.

Untuk resource: ψ= marginal value of resource stock.

Untuk pollution: ψ< 0 = marginal cost of pollution.
```
### PMP sebagai ODE system

Dari Kondisi 1 dan 2:

ẋ = f(state)ψ˙ = −Hx(adjoint)

Dua ODE coupled. Plus maximality untuk eliminate u. Dengan boundary x(0) = x0 dan ψ(T) = 0.

Inilah Hamiltonian system — workhorse ekonomi makro dinamis.

### Mengapa lebih mudah dari HJB

**HJB** — PDE untuk V (t, x) — fungsi 2 argumen

**PMP** — 2 ODE untuk x(t) dan ψ(t) — fungsi 1 argumen

ODE jauh lebih mudah dari PDE. Inilah keuntungan PMP.

## Konsep 7 — Section 11.6 — Duality dan Mangasarian Sufficiency

*Hubungan PMP ↔ HJB sebagai analogi Welfare Theorems.*

### Walrasian Pricing Mechanism

```{admonition} 💡 Insight
:class: tip

Pertanyaan yang sering muncul: "apa yang dimaksud Walrasian pricing mechanism?"

Walrasian pricing mechanism = mekanisme di mana harga menyeimbangkan supply dan demand di semua pasar secara simultan.

Diberi nama dari Léon Walras — pendiri general equilibrium theory.
```
### Komponen

- Banyak agen optimisasi sendiri
- Banyak pasar, masing-masing dengan harga sendiri
- Harga sebagai signal
- Market clearing simultan

### Kontras dengan social planner

**Walrasian** — Decentralized. Banyak agen, koordinasi lewat harga.

Centralized. Satu pengambil keputusan,

**Planner** — optimisasi langsung.

### Welfare Theorems

**First Welfare** — **Second Welfare** — Pareto optimum → bisa diraih sebagai competitive equilibrium (butuh convexity)

### Analogi PMP/HJB ↔ Welfare Theorems

```{admonition} Ringkasan besar
:class: important

**HJB Approach** — Insight kuncinya: PMP dan HJB adalah dual ≈ Social planner / Pareto. Centralized optimisasi.

**PMP Approach** — ≈ Competitive equilibrium. Decentralized via shadow prices.

**$\psi(t)$ di PMP** — ≈ Harga pasar (interest rate, asset price)

**HJB → PMP Otomatis** — ≈ First Welfare: Pareto otomatis equilibrium dengan harga yang tepat

**PMP → HJB butuh convexity** — ≈ Second Welfare: equilibrium → Pareto hanya dengan convexity
```
### Mangasarian Sufficiency Theorem

```{admonition} Hasil kunci
:class: important

Statement: Jika H(t, x, u, ψ)concave dalam (x, u), dan PMP

conditions terpenuhi (adjoint, TVC, maximality), maka path (x(t), u(t)) adalah optimal state-control path.

Strictly concave → path unique.

Implikasi praktis: kalau h dan f concave dalam (x, u), H otomatis concave. Maka PMP saja cukup untuk optimal.
```
### Aplikasi ke Economic Growth

- RCK (Bab 12): utility concave, technology concave → Mangasarian terpenuhi → PMP = HJB
- Endogenous growth (Bab 14-15): ada increasing returns → Mangasarian gagal → equilibrium tidak optimal → ada room untuk policy

```{admonition} Koneksi
:class: important

Pesan filosofis: equilibrium pasar tidak otomatis optimal. Convexity adalah jembatan. Kalau convexity gagal, intervensi kebijakan bisa improve welfare.
```
## Konsep 8 — Section 11.7 — Infinite Horizon

*Generalisasi ke T→∞. Pondasi untuk RCK dan endogenous growth.*

### Mengapa infinite horizon

Justifikasinya:

"Taking T→∞ is our modeller's metaphor for ongoing concern. It is not literally that one lives forever."

Finite horizon menghasilkan end-of-horizon effect aneh — misalnya: optimal fishing menghabiskan semua stok ikan di T. Tidak realistis.

### Persamaan (11.24) — IH-OCP

V (x0) = umax {J(u)ẋ = f(x, u),x(0) = x0,u ∈Γ}

dengan J(u) =0∞e−rth(x, u) dt.∫

```{admonition} 💡 Insight
:class: tip

Pertanyaan yang sering muncul: "darimana (11.24) diturunkan?"

Bukan derivation matematis — ini definisi IH-OCP, generalisasi dari finite (11.3).
```
### Bedanya dengan finite horizon

**Horizon** — Finite: T tertentu. Infinite: T→∞.

**Boundary Terminal** — Finite: x(T) = xT. Infinite: tidak ada.

**Discount** — Finite: tidak eksplisit. Infinite: e−rt.

**Dependencevpadat** — ### Mengapa V jadi V (x) saja

Untuk finite horizon: V (t, x) berbeda di tiap t karena horizon tersisa T−t berbeda.

Untuk infinite horizon: horizon tersisa selalu infinite. V identik di tiap t — hanya tergantung x.

### Derivation persamaan (11.25)

```{admonition} 💡 Insight
:class: tip

Pertanyaan yang sering muncul: "darimana (11.25) diturunkan?"
```
#### `Step 1` Mulai dari HJB finite (11.8) dengan discount

$$
-V_{t}=\max_{u}\bigl\{e^{-rt}h+V_{x}f\bigr\}
$$

#### `Step 2` Konversi ke current-value

Definisikan $\tilde{V}:=e^{rt}V$. Maka:

$$
V_{t}=e^{-rt}\bigl(-r\tilde{V}+\tilde{V}_{t}\bigr),\qquad V_{x}=e^{-rt}\tilde{V}_{x}
$$

#### `Step 3` Substitusi dan bagi dengan e−rt

$$
r\tilde{V}-\tilde{V}_{t}=\max_{u}\bigl\{h+\tilde{V}_{x}f\bigr\}
$$

#### `Step 4` Ambil limit T→∞ → V ~ time-invariant

$\tilde{V}_{t}=0$

#### `Step 5` Drop tilda → persamaan (11.25)

$$
rV(x)=\max_{u}\bigl\{h(x,u)+V_{x}f(x,u)\bigr\}\qquad(11.25)
$$

### Interpretasi (11.25) — Asset pricing

```{admonition} Ringkasan besar
:class: important

Persamaan (11.25) adalah asset pricing equation:

Required return (rV) = Dividend (h) + Capital gain (Vxf)

Inilah mengapa HJB infinite-horizon sering disebut "Bellman equation as asset pricing".
```
### Transversality Condition (TVC)

Dua varian utama:

### Varian 1 — Natural TVC (11.26)

T→∞lim ψ(T) = 0

Shadow price state menuju nol di masa jauh.

### Varian 2 — Value TVC (11.27)

T→∞lim ψ(T) ⋅x(T) = 0

Value of state menuju nol di masa jauh.

```{admonition} 💡 Insight
:class: tip

Sintesisnya: "shadow price akan mendekati 0 di masa jauh, ga ada harganya lagi". Tepat untuk (11.26).

Untuk (11.27): yang mendekati nol adalah produk, bukan hanya x. Bisa terjadi via tiga skenario.
```
### Tiga skenario ψx →0

**Skenario A skenario b** — ψ(T) →0 dan x(T) terbatas → produk nol ψ(T) terbatas tapi x(T) →0 → produk nol

Keduanya tumbuh, tapi ψ turun lebih cepat →

**Skenario C** — produk nol. Paling penting di RCK.

### Bedanya finite vs infinite TVC

```{admonition} 💡 Insight
:class: tip

Pertanyaan yang sering muncul: "bukankah saat T finite juga ψ(T) = 0?"

**Finite TVC** — ψ(T) = 0tepat di titik akhir T. Plan berakhir.

$$
\lim_{T\to\infty}\psi(T)=0 \quad\text{atau}\quad \lim_{T\to\infty}\psi(T)\,x(T)=0
$$

**Infinite TVC** — sebagai limit. Plan tidak pernah berakhir.
```
### Tidak ada "definitive" TVC

```{admonition} 💡 Insight
:class: tip

Pertanyaan yang sering muncul: "adakah definitive TVC?"

Prinsipnya: "approach with brains on".

TVC tergantung problem:

- Steady state stabil: Varian 1 cukup
- Sustained growth (RCK, Romer): pakai Varian 2 atau 3
- Resource exhaustion (Hotelling): bentuk berbeda

Pikirkan struktur problem, lalu pilih TVC yang tepat.
```
```{admonition} Koneksi
:class: important

Untuk RCK (Bab 12), TVC standar: $\lim_{t\to\infty}e^{-\rho t}\hat{\psi}(t)\,k(t)=0$

dengan ψ^ current-value adjoint.
```
## Konsep 9 — Exercise 11.1 — Linear Quadratic Regulator

*Contoh closed-form OCP. State dynamics linear, payoff quadratic.*

### Setup

Linear controllable system:

ẋ = αx + βu,x(t0) = x0,α < 0,β= 0

Discounted objective:

e−rt0J(u) =t0Te−rt[−Rx2 −Su2]dt∫

dengan R > 0 dan S> R(β/α)2.

### Strategi solve

Linear-Quadratic structure → tebak quadratic value function → HJB jadi tractable.

### Game plan

1. Current-value HJB
2. Quadratic guess V (t, x) = −Q(t)x2
3. FOC → optimal control u∗= −(β/S)Q(t)x
4. Substitusi balik → Riccati ODE untuk Q(t)
5. Linearisasi pakai Q = Z/Y → linear system
6. Eigenvalues → solve Q(t)

### Part 1 — Current-value HJB

Konversi present-value ke current-value (dijelaskan di Section 11.7):

rV−Vt= ymax{−Rx2 −Sy2 + Vx(αx + βy)}

### Part 1 — Quadratic guess

Tebak V (t, x) = −Q(t)x2 dengan Q(t) ≥0.

Boundary V (T, x) = 0 → Q(T) = 0.

Turunan parsial:

Vt= −Q̇(t)x2,Vx= −2Q(t)x

### Part 3 — FOC (sebelum Part 2)

Turunkan sisi kanan HJB terhadap y:

∂y∂{−Sy2 + Vxβy} = −2Sy + Vxβ= 0

Substitusi Vx= −2Qx:

−2Sy −2Q(t)βx = 0 ⇒y∗= −SβQ(t)x

```{admonition} Hasil kunci
:class: important

Optimal control linear dalam state: u∗= −K(t)x dengan gain

K(t) = (β/S)Q(t).

Inilah state feedback rule klasik di engineering control.
```
### Part 2 — Riccati ODE

Substitusi y∗ balik ke HJB, semua suku proporsional dengan x2:

Q̇ + 2aQ + bQ2= −R,Q(T) = 0

dengan:

- a:= α −r/2 < 0
- b:= β2/S> 0

Ini nonlinear ODE (karena suku bQ2).

### Part 2 — Linearisasi via Q = Z/Y

```{admonition} 💡 Insight
:class: tip

Bagian ini paling sering membuat macet. Triknya:
```
### Mengapa trick Q = Z/Y bekerja

Riccati nonlinear sulit. Ganti satu variabel dengan rasio dua variabel — dapat kebebasan ekstra untuk pilih bagaimana Z dan Y berevolusi.

#### `Step 1` Substitusi Q = Z/Y

Q̇ = Y Ż −Y 2ZY ˙

#### `Step 2` Substitusi ke Riccati

Y Ż −Y 2ZY ˙ + 2a ⋅Y Z + b ⋅Y 2Z2= −R

#### `Step 3` Kalikan dengan Y

Ż −Y ZY ˙ + 2aZ + Y bZ2= −RY

#### `Step 4` Pilih Y ˙ = aY+ bZ untuk cancel nonlinear terms

Suku −Y ZY ˙ + Y bZ2= −aZ −Y bZ2 + Y bZ2= −aZ — nonlinear terms

hilang!

#### `Step 5` Sisa sistem linear

Y ˙ = aY+ bZŻ = −RY−aZ

### Sistem matriks

(Y ˙Ż) = (a−Rb−a) (Y Z)

dengan boundary Y (T) = 1, Z(T) = 0 (sehingga Q(T) = Z/Y= 0).

### Eigenvalue analysis

Characteristic equation: det(A −λI) = 0.

λ2 −(a2 −Rb) = 0

Solusi: λ1,2= ±a2 −Rb

Kondisi S> R(β/α)2 menjamin a2 −Rb > 0 (real eigenvalues).

Tulis λ:=a2 −Rb

### Part 4 — Optimal state trajectory

Substitusi u∗= −(β/S)Q(t)x∗ ke ODE:

ẋ∗= αx∗+ β ⋅[−(β/S)Q(t)x∗] = [α −(β2/S)Q(t)]x∗

Definisikan a^(t):= α −(β2/S)Q(t) (time-varying coefficient).

ODE linear time-varying ẋ∗= a^(t)x∗ punya solusi:

x∗(t) = x0 exp {t0t a^(τ) dτ}x∗(t) = x0 exp {α(t −t0) −Sβ2t0t Q(τ) dτ}∫∫

### Part 5 — Optimal control path

u∗(t) = −SβQ(t) ⋅x∗(t)

### Contoh numerik — Kontrol inflasi

Parameter: a = 0.5, b = −1, q= 1, r= 1, qT= 5, T= 10, x0= 3. Steady state Riccati: P∗= (1 +5

2 ≈1.618 (golden ratio!).

Gain K= (b/r)P⋅.

### Sensitivitas parameter

**Besar (control** — P∗ besar tapi ∣K∣= ∣b∣P/r kecil → control hemat →

**$r$**

**Mahal)** — konvergensi lambat

**Q Besar (penalty** — P∗ besar dan ∣K∣ besar → control agresif → `INFLASI)` konvergensi cepat

**Abesar (inflasi** — P∗ besar → harus control sangat aktif

**Persistent)** — **Hasil Kunci**

Insight kunci: bukan P yang menentukan magnitude control, tapi gain K= (b/r)P.

### Summary logika

HJB + quadratic guess →FOC →linear feedback rule →Riccati ODE →Q = Z/Y→linear ODE →eigenvalues →Q(t) →x∗, u∗

```{admonition} Koneksi
:class: important

LQR adalah workhorse macroeconomic policy:

- Inflation targeting
- Lucas-Stokey optimal taxation
- Linear-quadratic approximation di DSGE
- RCK lokal (linearisasi sekitar steady state)
```
## Konsep 10 — Exercise 11.3 — Finite-Horizon Ramsey

*Bridge ke Bab 12. Latihan paling penting di Bab 11.*

### Setup

Capital evolves:

k̇ = φ(k) −d ⋅k −c

Objective dengan discount:

J(c) =0Te−ρth(c) dt∫

Asumsi: hc> 0, hcc< 0, φ′> 0, φ′′< 0, φ(0) = 0.

Inada conditions: limk→∞φ′(k) < ρ + d < limk→0 φ′(k).

### "f time-invariant"

```{admonition} 💡 Insight
:class: tip

Pertanyaan yang sering muncul: "mengapa di soal disebutkan f a time-invariant function?"

f(k, c) = φ(k) −dk −c — secara formal punya argumen t, tapi sebenarnya tidak tergantung pada t explisit. Hanya tergantung pada k dan c.

Konsekuensi: ft= 0. Maka persamaan (11.13) trivial terpenuhi.

Ini petunjuk simplifikasi
```
### Part 1 — OCP

V (0, k0) = c≥0max {0Te−ρth(c(t))dtk̇ = φ(k) −dk −c,k(0) = k0}∫

### Part 2 — HJB-R (current-value)

ρV (t, k) −Vt(t, k) = c≥0max{h(c) + Vk[φ(k) −dk −c]}

### Part 3 — Necessary Conditions (HJB approach)

### FOC

Turunkan kanan terhadap c:

hc(c) −Vk= 0 ⇒hc(c) = Vk

```{admonition} Hasil kunci
:class: important

Marginal utility consumption = marginal value of capital.
```
### Envelope condition

```{admonition} 💡 Insight
:class: tip

Pertanyaan yang sering muncul: "bagaimana derive envelope condition?"
```
#### `Step 1` Turunkan HJB-R terhadap k

ρVk−Vtk= ∂k∂[cmax{h(c) + Vk(φ(k) −dk −c)}]

**Step 2** — Pakai Envelope Theorem — suku ∂G/∂c ⋅dc∗/dk= 0 karena FOC.

ρVk−Vtk= Vkk[φ(k) −dk −c] + Vk[φ′(k) −d]

#### `Step 3` Pakai chain rule untuk V ˙k

V ˙k= Vtk+ Vkk⋅k̇ = Vtk+ Vkk[φ(k) −dk −c]

#### `Step 4` Substitusi

ρVk= V ˙k+ Vk[φ′(k) −d]

#### `Step 5` Solve untuk V ˙k — envelope condition

V ˙k= −Vk[φ′(k) −d −ρ]

### Euler equation

#### `Step 1` Turunkan FOC terhadap t

hcc(c)ċ = V ˙k

#### `Step 2` Substitusi envelope condition

hcc(c)ċ = −Vk[φ′(k) −d −ρ]

#### `Step 3` Substitusi Vk= hc

hcc(c)ċ = −hc[φ′(k) −d −ρ]

#### `Step 4` Bagi dengan hc ⋅c dan rearrange

cċ = σ(c)1[φ′(k) −d −ρ]

dengan σ(c):= −hcc(c) ⋅c/hc(c) > 0 (Arrow-Pratt).

### Part 4 — PMP approach

### Hamiltonian (present-value)

H(c, k, ψ, t) = e−ρth(c) + ψ[φ(k) −dk −c]

### PMP conditions

1. Maximality (Hc= 0): e−ρthc(c) = ψ
2. Adjoint (ψ˙ = −Hk): ψ˙ = −ψ[φ′(k) −d]
3. State: k̇ = φ(k) −dk −c
4. TVC: ψ(T) = 0 (karena kT freely chosen)

### From PMP to Euler equation

#### `Step 1` Turunkan Maximality terhadap t

ψ˙ = e−ρt[−ρhc(c) + hcc(c)ċ]

#### `Step 2` Bagi dengan ψ= e−ρthc(c)

ψψ˙ = −ρ + hc(c)hcc(c)ċ

#### `Step 3` Dari Adjoint: ψ˙/ψ= −[φ′(k) −d]

#### `Step 4` Set kedua sama

−[φ′(k) −d] = −ρ + hc(c)hcc(c)ċ

#### `Step 5` Solve untuk ċ/c — sama dengan HJB approach

cċ = σ(c)1[φ′(k) −d −ρ]

### Part 5 — HJB = PMP via Mangasarian

H jointly concave dalam (c, k) karena hcc< 0 dan φ′′< 0. Mangasarian Sufficiency → PMP = HJB.

```{admonition} Koneksi
:class: important

Inilah mengapa di Exercise 11.3, kedua approach (HJB dan PMP) memberi Euler equation yang sama. Bukan kebetulan — konsekuensi convexity.
```
### Bedakan envelope condition (HJB) vs turunan FOC (PMP)

```{admonition} 💡 Insight
:class: tip

Pertanyaan yang sering muncul: "mengapa untuk envelope condition di PMP, persamaan ψ= e−ρth′ didiferensiasikan dengan t?"

**HJB APPROACH** — Pakai envelope condition: turunkan HJB-R terhadap k. Envelope Theorem cancel suku dc∗/ dk.

**PMP Approach** — Pakai turunan FOC terhadap t + adjoint equation. Tidak ada envelope theorem di sini.

Keduanya berbeda tapi memberi hasil sama. Envelope condition di PMP (Ḣ∗= Ht) adalah persamaan lain, tidak dipakai untuk derive Euler.
```
### Arrow-Pratt, EIS, Euler — Tabel sintesis

**Arrow-pratt** — σ(c) = −hcc(c) ⋅c/hc(c). Curvature utility. Risk aversion / aversi substitution.

1/σ(c). Kebalikan Arrow-Pratt. Sensitivitas

**EIS** — substitution antarwaktu.

**Euler Equation** — ċ/c = (1/σ)[r −ρ]. Growth rate konsumsi optimal.

### Komponen Euler equation

**Ċ/c**

Growth rate konsumsi (persen perubahan per waktu)

**$r(k)=f'(k)-\delta$** — Net marginal product of capital (return)

**$\rho$** — Discount rate (impatience)

**$r-\rho$** — Gap return vs impatience

**$1/\sigma$** — EIS sebagai sensitivitas

### Part 6 — Interpretasi Keynes-Ramsey

```{admonition} Ringkasan besar
:class: important

Keynes-Ramsey rule: pertumbuhan konsumsi = (return - impatience) × EIS

Planner menyeimbangkan benefit defer konsumsi (earn return r) dengan impatience (ρ), di-scale oleh willingness to substitute (1/σ).
```
### Cases

**R>ρ** — Return exceed impatience → ċ > 0 (konsumsi tumbuh)

**$r<\rho$** — Impatience dominates → ċ < 0 (konsumsi turun)

**R=ρ** — Konsumsi konstan (steady state, modified golden rule)

**EIS Tinggi** — Konsumsi lebih responsif terhadap gap r −ρ

### CRRA utility special case

h(c) = (c1−σ−1)/(1 −σ) → σ konstan.

cċ = σ1[φ′(k) −d −ρ]

Log utility (σ= 1): ċ/c = φ′(k) −d −ρ.

```{admonition} Koneksi
:class: important

Inilah persamaan kunci RCK. Bab 12 akan analisis lengkap dengan phase plane.

**Checklist**
```
## Self-Assessment Bab 11

*Cek pemahaman.*

### Konsep dasar

- ☐ Bedakan state x vs control u — tes diagnostik
- ☐ Setup OCP (persamaan 11.1, 11.2, 11.3)
- ☐ Mengapa OCP infinite-dimensional
- ☐ Mengapa Lagrangian tidak cukup

### BPO

- ☐ Statement BPO: continuation optimal di setiap titik
- ☐ Bukti via kontradiksi
- ☐ Backward induction sebagai konsekuensi
- ☐ Markov property
- ☐ State feedback rule

### HJB Sufficiency

- ☐ Intuisi cost-benefit (11.4)
- ☐ Chain rule untuk V ˙
- ☐ Derivation (11.5) → (11.8)
- ☐ Theorem 11.1 dan boundary V (T, x) = 0
- ☐ HJB sebagai PDE

### Necessary Conditions

- ☐ Bedakan sufficient vs necessary
- ☐ Envelope Theorem
- ☐ Persamaan (11.12) dan (11.13)
- ☐ Tabel 6 suku
- ☐ Autonomous problems: (11.13) trivial

### PMP

- ☐ Hamiltonian definition (11.14)
- ☐ Adjoint variable ψ= Vx
- ☐ Empat kondisi PMP
- ☐ Derivation (11.18) dari HJB
- ☐ Derivation (11.19) dari (11.18) + (11.13)
- ☐ PMP sebagai ODE system

### Duality dan Mangasarian

- ☐ Walrasian pricing mechanism
- ☐ Welfare Theorems analogi
- ☐ Mangasarian Sufficiency Theorem
- ☐ Convexity sebagai jembatan

### Infinite Horizon

- ☐ Setup IH-OCP (11.24)
- ☐ Derivation (11.25) via current-value
- ☐ Asset pricing interpretation
- ☐ Dua varian TVC (11.26) dan (11.27)
- ☐ Bedanya finite vs infinite TVC

### Exercise 11.1 (LQR)

- ☐ Quadratic guess V= −Q(t)x2
- ☐ Optimal control linear (Part 3)
- ☐ Riccati ODE (Part 2)
- ☐ Trick Q = Z/Y
- ☐ Linear system dengan eigenvalues
- ☐ Optimal state trajectory (Part 4)

### Exercise 11.3 (Finite Ramsey)

- ☐ Setup OCP
- ☐ HJB-R current-value
- ☐ FOC: hc= Vk
- ☐ Envelope condition derivation
- ☐ Hamiltonian PMP
- ☐ Euler equation via HJB dan PMP
- ☐ Arrow-Pratt σ dan EIS
- ☐ Keynes-Ramsey interpretation

✦ ✦ ✦

#### Review Bab 11 — Optimal Control Theory

Economic Growth Personal Study Notes · Tools II Foundation

Bridge ke RCK (Bab 12) dan Endogenous Growth (Bab 14-15)
