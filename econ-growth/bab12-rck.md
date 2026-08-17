# Bab 12 — Neoclassical Growth (RCK)

Bab 12 adalah aplikasi langsung Bab 11. Kalau Solow-Swan mengasumsikan saving rate $s$ konstan, model Ramsey-Cass-Koopmans meng-endogenkan $s$ lewat optimisasi rumah tangga. Isi utamanya: setup planner's problem (HJB dan PMP), aturan Keynes-Ramsey, phase plane $(k, c)$ dengan saddle path, modified golden rule, dan comparative dynamics.

## Konsep 1 — Posisi dan Pengantar RCK

*RCK mengendogenkan saving — perbedaan fundamental dari Solow.*

### Bedanya dari Solow-Swan

\dot{k} = sf(k) −δk dengan s konstan (eksogen,

**Solow-swan** — arbitrer). Tidak ada optimisasi household.

**RCK** — \dot{k} = f(k) −δk −c dengan c dipilih optimal. Saving endogen dari maksimisasi utility.

### Tiga pendekatan Bab 12

```{admonition} Ringkasan besar
:class: important

Bab 12 punya tiga representasi:

1. Planner's problem (12.2): Pareto optimum, centralized
2. Competitive equilibrium (12.3): market solution, decentralized
3. Welfare theorems (12.4): planner = competitive equilibrium
```
### Switch notasi dari Bab 11

**$h \to u$** — Momentary payoff jadi utility

**$f \to$ production** — f direpurpose jadi production function

**control $\to c$** — Control variable jadi konsumsi

**$\psi \to \lambda$** — Adjoint jadi λ

### Sejarah

- Ramsey (1928): paper original, pakai calculus of variations
- Cass & Koopmans (1965): popularize untuk growth
- Ramsey meninggal usia 26 — kerugian besar bagi ekonomi

## Konsep 2 — Section 12.1 — Model Primitives

*Building blocks: utility, technology, resource constraint.*

### Objective function (12.1)

$$
J(c)=\int_{0}^{\infty}e^{-\rho t}\,u\bigl(c(t)\bigr)\,dt
$$

dengan ρ > 0 subjective rate of time preference.

### Asumsi pada u

- uc> 0 (strictly increasing)
- ucc< 0 (strictly concave)
- Inada: limc→0 uc= ∞ dan limc→∞uc= 0

### Resource constraint (12.2)

\dot{k} = f(k) −δk −c,k(0) = k0

### Identifikasi state vs control

**State $k$** — Modal per pekerja. Punya ODE, tidak bisa lompat.

**Control $c$** — Konsumsi. Dipilih bebas tiap saat, jump variable.

```{admonition} Catatan
:class: note

Setup minimal: hanya empat objek menentukan model — u(c), f(k),

ρ, δ. Itulah keindahan RCK.
```
## Konsep 3 — Section 12.2 — Planner's Problem

*Benevolent planner sebagai benchmark Pareto optimum.*

### HJB equation Planner

$$
\rho V(k)=\max_{c}\bigl\{u(c)+V_{k}\bigl[f(k)-\delta k-c\bigr]\bigr\}
$$

```{admonition} Ringkasan besar
:class: important

Interpretasi asset pricing: required return (ρV) = dividend (u(c)) +

capital gain (Vk\dot{k}).
```
### Present-value Hamiltonian (12.4)

$$
H=e^{-\rho t}u(c)+\lambda\bigl[f(k)-c-\delta k\bigr]
$$

### PMP conditions

**Adjoint (12.5)** — −λ˙ = λ[f′(k) −δ]

**Maximality C (12.6)** — e−ρtuc(c) = λ

**State (12.7)** — \dot{k} = f(k) −c −δk

**TVC (12.8)** — limT→∞λ(T)k(T) = 0

### Derivation envelope condition (12.9)

#### `Step 1` Turunkan maximality (12.6) terhadap t

$$
\dot{\lambda}=e^{-\rho t}\bigl[-\rho\,u_{c}+u_{cc}\,\dot{c}\bigr]
$$

#### `Step 2` Bagi dengan λ = e−ρtuc

$$
\frac{\dot{\lambda}}{\lambda}=-\rho+\frac{u_{cc}}{u_{c}}\,\dot{c}
$$

#### `Step 3` Substitusi Arrow-Pratt σ= −uccc/uc

$$
\frac{\dot{\lambda}}{\lambda}=-\rho-\sigma(c)\,\frac{\dot{c}}{c}
$$

### Derivation Keynes-Ramsey (12.10)

#### `Step 1` Dari adjoint (12.5)

λλ˙ = −[f′(k) −δ]

#### `Step 2` Set sama dengan envelope (12.9)

$$
-\rho-\sigma\,\frac{\dot{c}}{c}=-\bigl[f\'(k)-\delta\bigr]
$$

#### `Step 3` Solve → Keynes-Ramsey rule

$$
\rho+\sigma(c)\,\frac{\dot{c}}{c}=r,\qquad r=f\'(k)-\delta
$$

### Keynes-Ramsey = Euler-Lagrange

```{admonition} 💡 Insight
:class: tip

Dua observasi lanjutan yang layak dielaborasi:

Keynes-Ramsey rule secara matematis adalah Euler-Lagrange equation dari calculus of variations (Euler-Lagrange abad 18, bukan "Bab 18"). Ramsey 1928 pakai ini sebelum PMP/HJB ada.
```
### Sisi kiri = MRS antarwaktu

ρ + σ\dot{c}/c adalah marginal rate of substitution konsumsi antarwaktu (discounted).

### Sisi kanan = opportunity cost

r= f′(k) −δ adalah net return on capital — opportunity cost konsumsi sekarang.

```{admonition} Hasil kunci
:class: important

Keynes-Ramsey: pertumbuhan konsumsi = (return - impatience) × EIS. Planner balance benefit defer vs impatience, di-scale oleh 1/σ.
```
### Cases (Proposition 12.1)

**$r>\rho$** — Patience pays — \dot{c} > 0, konsumsi tumbuh

**$r<\rho$** — Impatience dominates — \dot{c} < 0, konsumsi turun

**R=ρ** — Smoothing — \dot{c} = 0, konsumsi konstan (steady state)

```{admonition} Catatan
:class: note

Ada pepatah yang pas: "先苦後甜" — pahit sesaat, manis sehayat ("#YOLO, not"). Keynes-Ramsey adalah formalisasi disiplin intertemporal itu.
```
### c sebagai jump variable

Hanya k punya dua boundary (k(0) dan TVC). c tidak punya boundary explicit. c(0) harus disesuaikan (jump) ke saddle path: c∗(0) = g(k0).

## Konsep 4 — Exercise 12.2 — Phase Plane (Paling Penting)

*Inti analisis RCK.*

### Part 1 — Nullclines

### \dot{c} = 0 nullcline

Dari Keynes-Ramsey, \dot{c} = 0 butuh f′(k̄) = δ + ρ. Karena f′′< 0, solusi unique.

Garis vertikal k= k̄.

### \dot{k} = 0 nullcline

Dari resource constraint: c = f(k) −δk.

Kurva hump-shape, puncak di kGR where f′(kGR) = δ.

### Bukti modified golden rule k̄ < kGR

#### `Step 1` Bandingkan FOC

f′(k̄) = δ + ρ > δ= f′(kGR)

#### `Step 2` f′ strictly decreasing (dari f′′< 0)

**Step 3** — Kontrapositif: f′(k̄) > f′(kGR) dan f′ decreasing → k̄ < kGR

### Cobb-Douglas verifikasi

$$
\frac{\bar{k}}{k_{GR}}=\left(\frac{\delta}{\delta+\rho}\right)^{1/(1-\alpha)}<1
$$

```{admonition} 💡 Insight
:class: tip

Mengapa planner tidak pilih golden rule: planner impatient (ρ > 0). Tidak mau accumulate sampai max consumption steady state — korban konsumsi short- run tidak worth it. Limit ρ →0: k̄ →kGR.
```
### Part 2 — Steady State

$$
f'(\bar{k})=\delta+\rho,\qquad \bar{c}=f(\bar{k})-\delta\bar{k}
$$

Untuk Cobb-Douglas: k̄ = (α/(δ + ρ))1/(1−α).

### Part 3 — Vector Field

```{admonition} 💡 Insight
:class: tip

Pertanyaan yang sering muncul: mengapa arah vektornya demikian?
```
### Arah \dot{k} (bukti)

Dari ∂\dot{k}/∂c = −1 < 0: \dot{k} menurun dalam c.

c < f(k) −δk → \dot{k} > 0 → k tumbuh (kanan). `BAWAHK ˙=0` Konsumsi kurang dari output bersih → modal akumulasi.

c > f(k) −δk → \dot{k} < 0 → k menurun (kiri).

**Atas $\dot{k}=0$**

Konsumsi melebihi output bersih.

### Arah \dot{c} (bukti)

Dari Keynes-Ramsey, sign(\dot{c}) = sign[f′(k) −δ −ρ]. Karena f′′< 0:

k< k̄ → f′(k) > δ + ρ → \dot{c} > 0 → c tumbuh (atas).

**Kiri $\dot{c}=0$**

Return > impatience → defer.

**Kanan $\dot{c}=0$**

### Empat region

**I Kiri-bawah** — \dot{k} > 0, \dot{c} > 0 → panah ↗

**II Kanan-bawah** — \dot{k} > 0, \dot{c} < 0 → panah ↘

**Iii Kiri-atas** — \dot{k} < 0, \dot{c} > 0 → panah ↖

**IV Kanan-atas** — \dot{k} < 0, \dot{c} < 0 → panah ↙

### Bukti saddle point (Jacobian)

Linearisasi di (k̄, c̄):

$$
J=\begin{pmatrix}\rho & -1\\ \bar{c}\,f''(\bar{k})/\sigma & 0\end{pmatrix}
$$

#### `Step 1` Entry ∂\dot{k}/∂k= f′(k̄) −δ= ρ (karena f′(k̄) = δ + ρ)

**Step 2** — Entry ∂\dot{c}/∂c = 0 (bracket Keynes-Ramsey = 0 di steady state)

#### `Step 3` Determinant

det J= σc̄f′′(k̄) < 0

(karena f′′< 0, c̄, σ> 0)

**Step 4** — det J< 0 → eigenvalues berlawanan tanda → saddle point

### Part 4 — Stable Arm (Kualitatif)

```{admonition} 💡 Insight
:class: tip

Pertanyaan yang sering muncul: bagaimana menjawab analisis kualitatif *tanpa* eigenvalue (Part 4)?

Dari vector field saja (tanpa eigenvalue), pakai argumen kontinuitas:

**C0 Terlalu Tinggi** — Mulai region III, \dot{k} < 0 → k crash ke 0. Tidak feasible.

**C0 Terlalu Rendah** — Mulai region I → menyeberang ke region II → k explode ke ∞. Melanggar TVC.

**C0 Tepat** — Threshold c0∗= g(k0) → konvergen ke steady state. Stable arm.
```
```{admonition} Hasil kunci
:class: important

Argumen kontinuitas: outcome berubah kontinu dari "crash" (high c0) ke "explode" (low c0). Pasti ada threshold c0∗ yang konvergen.

Unik karena trajektori ODE tidak berpotongan (Picard-Lindelöf). TVC mem-pin-down stable arm sebagai unique optimal path.

Stable arm adalah kurva 1D → ditulis c = g(k), state feedback rule. Sifat: g(k̄) = c̄, g increasing, slope = ρ −λ2> 0.

**Jebakan Umum**

Untuk soal yang minta kualitatif: cukup vector field + kontinuitas. Eigenvalue memberi slope eksak (bonus), tapi tidak perlu untuk deduce eksistensi stable arm.
```
### Numerik (parameter konkret)

Dengan α = 0.3, δ= 0.05, ρ = 0.04, σ= 2: k̄ = 5.58, kGR= 12.93 (ratio 0.43), c̄ = 1.40, eigenvalues +0.111/ −0.071 (saddle confirmed). Shooting method: k0= 2 →c0∗≈0.901.

## Konsep 5 — Exercise 12.3 — Comparative Dynamics (ρ ↑)

*Shock permanen: household jadi lebih impatient.*

### Part 1 — Perubahan nullclines

**$\dot{c}=0$** — f′(k̄) = δ + ρ. ρ ↑ → k̄ ↓ → nullcline geser KIRI.

**$\dot{k}=0$** — c = f(k) −δk. Tidak tergantung ρ → TETAP.

Steady state baru (k̄′, c̄′) di kiri-bawah dari lama.

### Part 2-3 — Transitional dynamics & time profile

- k tidak bisa lompat → tetap k̄ saat shock
- c jump variable → jump naik (lebih impatient, konsumsi sekarang)
- Setelah jump: c, k turun gradual ke steady state baru

### Part 4 — Marginal propensity to save

```{admonition} 💡 Insight
:class: tip

Soal time path $s$ vs $\theta$: parameter $\theta$ adalah notasi alternatif untuk $\sigma$ (Acemoglu/Barro memakai $\theta$).

Saving rate steady state (Cobb-Douglas):

$$
\bar{s}=\frac{\delta\bar{k}}{f(\bar{k})}=\frac{\alpha\,\delta}{\delta+\rho}
$$

Efek shock:

$$
\frac{\partial\bar{s}}{\partial\rho}=-\frac{\alpha\,\delta}{(\delta+\rho)^{2}}<0
$$
```
```{admonition} Hasil kunci
:class: important

s̄ TURUN saat ρ naik. Verifikasi: ρ 0.04→0.06 memberi s̄ 16.7%→13.6%. Magnitude/kecepatan adjustment tergantung EIS 1/σ

(atau 1/θ).
```
### Part 5 — Endogenisasi saving

**Solow** — s konstan, arbitrer, mekanis

**RCK** — s(k) endogen dari optimisasi, adjust optimal terhadap shock

## Konsep 6 — Section 12.3 — Competitive Equilibrium

*Decentralized economy: household + firm + market clearing.*

### Ownership structure

Household own assets a, sewakan modal ke firm. Modigliani-Miller: tiga struktur ownership ekuivalen di pasar frictionless.

### Exercise 12.4 — Household OCP

### Present-value Hamiltonian

$$
H=e^{-\rho t}u(c)+\mu\bigl[r(t)\,a+w(t)-c\bigr]
$$

### PMP conditions

**Maximality** — e−ρtuc(c) = μ

**Adjoint** — μ˙/μ = −r(t)

**Budget (12.16)** — \dot{a} = ra + w −c

### Euler equation (12.15)

#### `Step 1` Turunkan maximality terhadap t, bagi dengan μ

$$
\frac{\dot{\mu}}{\mu}=-\rho+\frac{u_{cc}}{u_{c}}\,\dot{c}
$$

#### `Step 2` Substitusi adjoint μ˙/μ = −r dan Arrow-Pratt

$$
\frac{\dot{c}}{c}=\frac{1}{\sigma}\bigl[r(t)-\rho\bigr]
$$

### No-Ponzi-Game

```{admonition} 💡 Insight
:class: tip

Tentang NPG dan notasi $\dot{p}/p$:

NPG mencegah household pinjam tanpa batas (Ponzi strategy). No-arbitrage: harga konsumsi p(t) = e−0t rdτ, sehingga:∫

p\dot{p} = −r(t)

(\dot{p}/p = growth rate harga = turunan logaritma). NPG (12.14): limT→∞p(T)a(T) ≥0 — present value assets tidak boleh negatif tak terbatas.
```
### Firm FOC

r= f′(k) −δ(12.17),w= f(k) −kf′(k)(12.18)

### Market clearing

a = k,f(k) = c + \dot{k} + δk

## Konsep 7 — Section 12.4 — First Welfare Theorem

*Planner = competitive equilibrium.*

### Equivalence (Exercise 12.5)

Substitusi firm FOC r= f′(k) −δ ke household Euler:

$$
\frac{\dot{c}}{c}=\frac{1}{\sigma}\bigl[r-\rho\bigr]=\frac{1}{\sigma}\bigl[f'(k)-\delta-\rho\bigr]
$$

#### Sama dengan planner Keynes-Ramsey!

```{admonition} Ringkasan besar
:class: important

Plus resource constraint (market clearing) dan TVC/NPG sama. Maka competitive equilibrium = planner's allocation. First Welfare Theorem.
```
### Mengapa berlaku

Convexity terpenuhi: u concave, f concave → Mangasarian Sufficiency → PMP = HJB.

```{admonition} Koneksi
:class: important

Implikasi: di RCK (pasar sempurna, convex), tidak ada room untuk policy. Di Bab 14-15 (increasing returns dari R&D), convexity gagal → First Welfare gagal → policy matters.
```
## Konsep 8 — Section 12.5 — TFP & Population Growth

*Extension ke Balanced Growth Path (BGP).*

### Redefinisi per efficient unit

L(t) = ent, A(t) = egt. Variabel per efficient unit: c = C/(AL), k= K/(AL).

### Exercise 12.6 — Resource constraint

#### `Step 1` Aggregate: \dot{K} = F(K, AL) −δK −C

#### `Step 2` Log-differentiate k= K/(AL)

k\dot{k} = K\dot{K} −g −n

#### `Step 3` CRS: F(K, AL)/(AL) = f(k) (pilih λ = 1/(AL))

#### `Step 4` Substitusi dan kumpulkan → hasil

$$
\dot{k} = f(k) - (n+g+\delta)k - c
$$

```{admonition} 💡 Insight
:class: tip

Titik buntu yang umum ada di Hint 4 — kuncinya
```
### Exercise 12.7 — Hamiltonian dengan growth

$$
H=e^{-(\rho-n)t}\,u(Ac)+\lambda\bigl[f(k)-(n+g+\delta)k-c\bigr]
$$

```{admonition} 💡 Insight
:class: tip

Pertanyaan yang sering muncul: kenapa discount rate menjadi $(\rho - n)$?

Objective punya L(t) = ent (planner peduli total welfare). e−ρt ⋅ent= e−(ρ−n)t. Effective discount = impatience minus population growth. Asumsi ρ > n untuk konvergensi. Argumen utility Ac = konsumsi per pekerja.
```
### Exercise 12.8 — Euler dengan growth

#### `Step 1` Log maximality, turunkan

$$
\frac{\dot{\lambda}}{\lambda}=-(\rho-n)+g+\frac{d}{dt}\ln u'(Ac)
$$

**Step 2** — Kunci: $\frac{d}{dt}\ln u'(Ac) = -\sigma\,(g+\dot{c}/c)$, karena growth rate $Ac$ adalah $g+\dot{c}/c$.

#### g + ċ/c

#### `Step 3` Set sama adjoint, cancel n, g, solve

$$
\frac{\dot{c}}{c}=\frac{1}{\sigma}\bigl[f'(k)-(\delta+\rho+\sigma g)\bigr]
$$

```{admonition} Hasil kunci
:class: important

Suku baru σg = effective impatience tambahan karena konsumsi per pekerja tumbuh g. BGP: f′(k̄) = δ + ρ + σg. Verifikasi: dengan

growth k̄ lebih rendah; limit g= 0 kembali ke no-growth.
```
### Exercise 12.9 — BGP preference restriction

Euler umum (tanpa asumsi σ konstan):

$$
\frac{\dot{c}}{c}=\frac{f'(k)-\delta-\rho-g}{\sigma(Ac)}
$$

Di BGP (ċ/c = 0):

$$
\sigma(cA)=\frac{f'(\bar{k})-\delta-\rho}{g}=\text{konstanta}
$$

```{admonition} Hasil kunci
:class: important

Karena cA = c̄ ⋅egt→∞, σ harus asymptotically constant. Sufficiency: jika σ→σ∗, maka f′(k̄) = δ + ρ + σ∗g punya solusi

unique → BGP exists.
```
### Exercise 12.10 — CRRA patience restriction

#### `Step 1` CRRA + BGP: integrand objective

∼e[−ρ+(1−σ)g+n]t

#### `Step 2` Konvergen iff eksponen < 0

ρ > n + (1 −σ)g

(1 −σ)g< 0 → restriction lebih longgar dari ρ > n.

**$\sigma>1$**

Utility bounded.

**$\sigma=1$** — Restriction sama dengan ρ > n (log utility).

**Σ<1** — (1 −σ)g> 0 → restriction lebih ketat. Utility unbounded, butuh discount besar.

**Jebakan Umum**

Jebakan aljabar eksponen: (a/b)p= apb−p. Eksponen penyebut jadi −p, bukan eksponen lain. Contoh: (δ/α)1/(α−1)= δ1/(α−1)α−1/(α−1), bukan α(α−1). Bentuk bersih: kGR= (α/δ)1/(1−α).

**Checklist**

## Self-Assessment Bab 12

*Cek pemahaman.*

### Setup dan Planner

- ☐ Bedanya RCK vs Solow (saving endogen)
- ☐ Setup u(c), f(k), ρ, δ; state k vs control c
- ☐ HJB equation planner (asset pricing)
- ☐ PMP conditions (12.5)-(12.8)
- ☐ Derivation envelope (12.9) dan Keynes-Ramsey (12.10)
- ☐ Keynes-Ramsey = Euler-Lagrange equation
- ☐ Cases: patience/impatience/smoothing
- ☐ c jump variable

### Phase Plane (Exercise 12.2)

- ☐ Nullclines: ċ = 0 vertikal, k̇ = 0 hump
- ☐ Bukti k̄ < kGR
- ☐ Steady state (k̄, c̄)
- ☐ Vector field 4 region (bukti arah)
- ☐ Jacobian, det J< 0, saddle point
- ☐ Stable arm kualitatif (argumen kontinuitas)
- ☐ State feedback rule c = g(k)

### Comparative Dynamics (Exercise 12.3)

- ☐ Shock ρ ↑: nullcline geser
- ☐ c jump naik, lalu turun
- ☐ Saving rate s̄ = αδ/(δ + ρ) turun
- ☐ Endogenisasi saving vs Solow

### Competitive Equilibrium

- ☐ Household OCP (Exercise 12.4)
- ☐ Euler household (12.15)
- ☐ NPG dan ṗ/p = −r
- ☐ Firm FOC (12.17)-(12.18)
- ☐ Market clearing
- ☐ First Welfare Theorem (planner = CE)

### Growth Case

- ☐ Resource constraint efficiency units (Exercise 12.6)
- ☐ Hamiltonian (ρ −n) (Exercise 12.7)
- ☐ Euler dengan σg (Exercise 12.8)
- ☐ BGP σ asymptotically constant (Exercise 12.9)
- ☐ Patience restriction ρ > n + (1 −σ)g (Exercise 12.10)

✦ ✦ ✦

#### Review Bab 12 — Ramsey-Cass-Koopmans

Economic Growth Personal Study Notes · Neoclassical Growth

Aplikasi PMP/HJB · Jembatan ke Endogenous Growth (Bab 14-15)
