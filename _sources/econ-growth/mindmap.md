# Peta Konsep

*Bagaimana seluruh materi saling terhubung — dari ODE dasar sampai frontier riset modern.*

Materi Economic Growth punya struktur logis yang ketat: setiap bab dibangun di atas bab sebelumnya, dan memahami arsitekturnya sama pentingnya dengan memahami detail tiap bab. Halaman ini menyajikan peta itu dalam lima lapisan: **arsitektur enam pilar**, **logika sirkular** pertanyaan-jawaban, **benang konsep** yang menjalin banyak bab, **inventori alat matematis**, dan **lima frasa pegangan** untuk merekonstruksi semuanya saat detail terlupa.

```{admonition} Pertanyaan terbesar
:class: important
Mengapa beberapa negara kaya dan yang lain miskin? Mengapa beberapa negara tumbuh cepat dan yang lain stagnan?
```

```{admonition} Pendekatan
:class: tip
Bangun model matematis tentang ekonomi yang tumbuh, lalu konfrontasikan dengan data empiris. Setiap model menjawab sebagian pertanyaan; setiap kelemahannya membuka pintu ke model berikutnya.
```

**Alur intelektual:** Tools matematis (ODE, Optimal Control) → model paling sederhana (Solow-Swan) → dikonfrontasi dengan data → model yang lebih kaya (RCK) → endogenkan teknologi (Romer) → tambahkan heterogeneity (Peters).

---

## Arsitektur — Enam Pilar

Setiap pilar menjawab satu pertanyaan inti. Memahami pertanyaannya = memahami pilarnya.

### Pilar 1 · Motivasi (Bab 1–2)

*Apa yang ingin kita jelaskan?*

- **Bab 1 — Empirical Regularities.** Fakta-fakta stylized: Kaldor facts (capital-output ratio konstan, real interest stabil, factor shares konstan); pertumbuhan per kapita ±2% di negara maju.
- **Bab 2 — Questions.** Level differences (income antar negara), growth differences (kecepatan tumbuh), persistence (mengapa gap tidak selalu menyempit).

*↓ memerlukan alat matematis untuk dijawab*

### Pilar 2 · Tools I — ODE (Bab 3–8)

*Bahasa matematika untuk dinamika ekonomi.*

- **Bab 3–4 — Pengenalan ODE.** Apa itu solusi, existence & uniqueness, reduksi higher-order menjadi sistem orde satu.
- **Bab 5 — Steady States.** $\dot{x}=0$ → titik tetap; stabilitas lokal via linearisasi. Konsep paling sering dipakai di seluruh materi.
- **Bab 6 — Analytical I.** Separable ODE, integrating factor; solusi closed-form ODE skalar linear.
- **Bab 7 — Analytical II.** Sistem linear: eigenvalue & eigenvektor; saddle path muncul saat tanda eigenvalue berlawanan.
- **Bab 8 — Qualitative.** Phase diagram dan nullcline: memvisualisasi sistem nonlinear. Alat inti untuk RCK.

*↓ siap diaplikasikan ke model ekonomi*

### Pilar 3 · Exogenous Growth I (Bab 9–10)

*Model paling sederhana dan konfrontasinya dengan data.*

- **Bab 9 — Solow-Swan.** Template growth theory: saving rate eksogen, seluruh model tereduksi menjadi satu ODE skalar $\dot{k}=sf(k)-(n+g+\delta)k$ dengan konvergensi monoton ke steady state.
- **Bab 10 — Theory & Measurement.** Growth accounting dan Solow residual; augmentasi human capital ala Mankiw-Romer-Weil (1992) yang mencapai $R^{2}\approx 0{,}78$ untuk variasi income antar negara.

*↓ kelemahan: mengapa $s$ dan $g$ eksogen?*

### Pilar 4 · Tools II — Optimal Control (Bab 11)

*Membuka jalan bagi saving yang endogen.*

- **Bab 11 — Optimal Control Theory.** Mengoptimasi seluruh lintasan $c(t)$, bukan satu titik. Dua pendekatan: HJB (PDE, kondisi cukup) dan PMP (ODE, kondisi perlu), setara di bawah konkavitas (Mangasarian). Current-value Hamiltonian sebagai bentuk praktis. Inilah inti matematis seluruh materi.

*↓ aplikasi langsung ke model growth*

### Pilar 5 · Exogenous Growth II (Bab 12–13)

*Saving endogen — tulang punggung makro modern.*

- **Bab 12 — RCK.** Ramsey-Cass-Koopmans: saving endogen dari maksimisasi utility. Keynes-Ramsey rule $\dot{c}/c=(r-\rho)/\sigma$; Modified Golden Rule ($\bar{k}$ lebih kecil dari Golden Rule Solow karena impatience $\rho$); saddle path stability.
- **Bab 13 — RCK Numerical.** Shooting method: konversi BVP → IVP, tebak $c(0)$, integrasikan, koreksi dengan secant method.

*↓ $s$ sudah endogen, tapi $g$ masih eksogen*

### Pilar 6 · Endogenous Growth (Bab 14–15)

*Membongkar kotak hitam teknologi.*

- **Bab 14 — R&D I (Romer).** Lab equipment model: $A$ endogen, diciptakan sektor R&D yang memaksimalkan profit. Kompetisi monopolistik di intermediate goods; knowledge spillovers menghasilkan growth tanpa diminishing returns.
- **Bab 15 — R&D II (Peters).** Frontier modern: markup heterogen dari kompetisi Bertrand, misallocation endogen, quality ladder $\mu=\lambda^{\Delta}$, distribusi markup Pareto, $Y=Q\,\mathcal{M}\,L_{P}$. Empirik dengan data Indonesia: markup menjelaskan ±15% dispersi TFPR.

*↑ menjawab kembali pertanyaan asli Bab 1–2*

---

## Logika Sirkular: Pertanyaan → Jawaban → Pertanyaan Baru

Materi ini bukan garis lurus — ia melingkar. Setiap model menjawab pertanyaan sebelumnya dan memunculkan pertanyaan baru.

1. **Pertanyaan asli:** mengapa beberapa negara lebih kaya?
2. **Solow-Swan (Bab 9):** karena perbedaan saving rate, pertumbuhan populasi, dan depresiasi. *Tapi model ini hanya menjelaskan ±25% variasi income. Sisanya?*
3. **MRW (Bab 10):** tambahkan human capital → ±78% terjelaskan. Sisa ±22% adalah "Solow residual" — teknologi. *Tapi mengapa saving rate berbeda antar negara?*
4. **RCK (Bab 12):** saving rate adalah hasil endogen maksimisasi utility — bergantung pada $\rho$ (impatience) dan $\sigma$ (risk aversion). *Tapi mengapa $g$ (pertumbuhan teknologi) berbeda antar negara?*
5. **Romer (Bab 14):** $g$ adalah hasil endogen kompetisi R&D — lebih banyak peneliti, pasar lebih besar, rente monopoli → lebih banyak inovasi. *Tapi Solow residual masih besar. Apa lagi?*
6. **Hsieh-Klenow (motivasi Bab 15):** misallocation — bukan teknologi murni. Negara ber-TFP rendah mengalokasikan sumber daya antar-firma secara tidak efisien. *Tapi dari mana misallocation berasal?*
7. **Peters (Bab 15):** misallocation endogen dari heterogenitas markup; kompetisi R&D antar firma menentukan distribusi markup, dan distribusi markup menentukan misallocation.
8. **Pertanyaan terbuka berikutnya:** bagaimana institusi, geografi, dan politik mempengaruhi parameter struktural? Bagaimana perubahan iklim, AI, dan penurunan demografi mengubah dinamika growth? Inilah agenda riset growth modern.

---

## Benang Konsep yang Menjalin Seluruh Materi

### Benang 1 — Saving: dari eksogen ke endogen

| Bab | Peran |
|---|---|
| Bab 9 (Solow) | $s$ eksogen, parameter hard-coded |
| Bab 11 (Optimal Control) | alat maksimisasi infinite-dimensional |
| Bab 12 (RCK) | $s=1-c/y$, dengan $c$ hasil Keynes-Ramsey |
| Bab 14 (Romer) | household problem identik RCK, $s$ endogen |
| Bab 15 (Peters) | log utility yang sederhana; fokus pindah ke sisi firm |

*Insight: tiap kemajuan menambah satu lapisan — Solow konstan demi kesederhanaan, RCK endogen demi analisis welfare.*

### Benang 2 — Teknologi: dari kotak hitam ke inovasi endogen

| Bab | Peran |
|---|---|
| Bab 9 (Solow) | $A$ konstan — tanpa growth per kapita jangka panjang |
| Bab 9 (Harrod-neutral) | $A(t)=e^{gt}$ eksogen — growth permanen mungkin |
| Bab 10 (Empirics) | "TFP residual" = *ledger of ignorance*, bukan teori |
| Bab 14 (Romer) | $A$ endogen dari R&D; rente monopoli jadi insentif |
| Bab 15 (Peters) | quality ladder: $Q$ tumbuh lewat inovasi masuk, ekspansi, dan perbaikan sendiri |

*Insight: endogenisasi $A$ adalah revolusi 1980-an (Romer 1986, Aghion-Howitt 1992) — dari "pemberian langit" menjadi mekanisme struktural.*

### Benang 3 — Welfare: kapan pasar bebas optimal?

| Bab | Verdict |
|---|---|
| Bab 9 (Solow) | tanpa utility → tak ada analisis welfare |
| Bab 12 (RCK) | **First Welfare Theorem berlaku**: CE = Planner |
| Bab 14 (Romer) | **gagal** — rente monopoli + knowledge spillovers |
| Bab 15 (Peters) | **gagal** — heterogenitas markup → misallocation |

*Insight: welfare theorem adalah "lampu hijau" pasar bebas. Ketika ia gagal, terbuka peran kebijakan: subsidi R&D, antitrust.*

### Benang 4 — Saddle path: pola dinamis yang terus berulang

| Bab | Peran |
|---|---|
| Bab 7 | eigenvalue berlawanan tanda → saddle point |
| Bab 8 | visualisasi saddle path di phase diagram |
| Bab 12 (RCK) | sistem $(k,c)$; $c$ jumping variable, TVC penyeleksi |
| Bab 13 | shooting method mengeksploitasi struktur saddle |
| Bab 14 (Romer) | saddle path lagi via household Cass-Koopmans |

*Insight: setiap sistem 2D dengan optimasi forward-looking hampir pasti saddle-path stable; TVC mengeliminasi lintasan non-saddle.*

### Benang 5 — Misallocation: membedah Solow residual

| Tonggak | Kontribusi |
|---|---|
| Solow 1957 | residual ±75% — sumber tak diketahui |
| MRW 1992 (Bab 10) | + human capital → residual turun ke ±25% |
| Hsieh-Klenow 2009 | ±50% residual = misallocation (eksogen) |
| Peters 2020 (Bab 15) | misallocation endogen dari markup heterogen |

*Insight: dekade demi dekade "kotak hitam" teknologi menyusut — kemajuan utama growth economics adalah membongkar Solow residual lewat model struktural.*

---

## Inventori Alat Matematis

| Alat | Inti | Dipakai di |
|---|---|---|
| Steady state (Bab 5) | set $\dot{x}=0$, cek stabilitas via linearisasi | 9, 10, 12, 14, 15 |
| Eigenvalue analysis (Bab 7) | Jacobian di steady state; $\det(J-\lambda I)=0$; saddle bila tanda berlawanan | 12, 14 |
| Phase diagram (Bab 8) | nullcline → empat region → vector field → saddle arm | 9, 10, 12, 14 |
| Current-value Hamiltonian (Bab 11) | $H=u(c)+\psi f(k,c)$; FOC $H_{c}=0$; adjoint $\dot{\psi}=\rho\psi-H_{k}$ | 12, 14, 15 |
| Keynes-Ramsey rule (Bab 11–12) | $\dot{c}/c=\tfrac{1}{\sigma}\left[f'(k)-\delta-\rho\right]$ | 12, 14, 15 |
| Detrending (Bab 9, 12) | efficiency units $k=K/(AL)$: ubah ODE $\dot{K}$ menjadi $\dot{k}$ | 9, 10, 12, 14, 15 |
| Shooting method (Bab 13) | BVP → IVP dengan menebak $c(0)$, iterasi secant | 13 |

---

## Lima Frasa Pegangan

Kalau semua detail terlupa, lima kerangka berpikir ini cukup untuk merekonstruksinya.

1. **"Growth theory adalah dialog antara teori dan data."** Setiap model dievaluasi terhadap stylized facts; setiap puzzle empiris memotivasi model baru. Solow → MRW → Hsieh-Klenow → Peters bukan kebetulan, melainkan evolusi yang dipandu konfrontasi terus-menerus dengan data.
2. **"Diminishing returns memaksa konvergensi."** Tanpa diminishing returns, akumulasi kapital saja cukup untuk growth abadi (model AK). Dengan diminishing returns, growth permanen butuh sumber lain: teknologi. Inilah benang yang menghubungkan Solow ke Romer.
3. **"Saving, depresiasi, dan pertumbuhan populasi = level effects; pertumbuhan teknologi = growth effect."** Distingsi terpenting di growth theory: kebijakan yang menaikkan $s$ membuat negara lebih kaya, tapi tidak membuatnya tumbuh lebih cepat dalam jangka panjang — hanya teknologi yang menggeser growth rate.
4. **"Optimasi forward-looking → saddle path."** Setiap kali agen rasional berhorizon panjang, dinamikanya saddle-path stable: $c(0)$ adalah jumping variable dan TVC adalah filter penyeleksi. Berlaku di RCK, household Romer, dan HJB firm Peters.
5. **"Welfare theorem berlaku tanpa friction; gagal bila ada market power atau eksternalitas."** RCK: optimal. Romer: gagal (rente monopoli, spillover). Peters: gagal (markup heterogen). Setiap kegagalan welfare = ruang untuk kebijakan.
