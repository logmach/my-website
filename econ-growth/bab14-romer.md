# Bab 14 — R&D I (Romer)

Bab 14 membuka kotak hitam teknologi: pertumbuhan tidak lagi eksogen, melainkan hasil investasi R&D yang disengaja — model *lab equipment* Rivera-Batiz & Romer (1991). Perangkat matematisnya sama dengan Bab 12 (Hamiltonian, Euler, BGP); yang baru adalah struktur ekonominya: kompetisi monopolistik, knowledge nonrivalry, dan alasan First Welfare Theorem gagal di sini.

```{note}
Sebagian notasi matematis pada bab ini direkonstruksi dari konteks, karena berkas sumber tidak menyimpan lapisan teks untuk formula-formulanya. Persamaan kunci telah dipulihkan; beberapa detail turunan disajikan secara naratif.
```

## Konsep 1 — Tiga Insight Romer (Nobel 2018)

*Fondasi filosofis mengapa firm menghasilkan ide baru.*

**1. Non-rival** — Ide dipakai berkali-kali tanpa berkurang, tapi partially excludable (paten) — beda dari public good murni.

**2. IRS Agregat** — CRS pada input privat, tapi increasing returns agregat karena penciptaan ide.

**3. Market power** — Butuh monopoli rent untuk menutup fixed cost R&D.

R&D. Tidak bisa perfect competition.

**Dua jenis efek R&D**

Expanding variety — lebih banyak jenis produk.

**Horizontal (bab 14)** — Romer 1990.

Quality ladder — produk lebih baik.

**Vertical (bab 15)** — Schumpeterian.

## Konsep 2 — Lima Micro Building Blocks

*Mikroekonomi inovasi — fondasi sebelum model GE.*

**BB1 — Markup Pricing**

```{admonition} 💡 Insight
:class: tip

Pertanyaan yang sering muncul: mungkinkah markup negatif?

Benar! Markup negatif = situasi tidak valid. Monopoli tidak pernah beroperasi di region inelastis karena di sana marginal revenue negatif ($MR<0$). Monopoli selalu di region elastis, di mana bisa sama dengan.
```
**Hubungan MR-elasticity**

**Step 1 — MR dari TR = pq (product rule)**

**Step 2 — Substitusi elasticity**

**Step 3 — Set MR = MC → markup**

Lerner index. CES: selalu → markup valid.

**BB2 — Appropriability Effect**

Social surplus inovasi (planner price at MC):

```{admonition} 💡 Insight
:class: tip

Pertanyaan yang sering muncul: jika biaya masuk lebih besar dari profit, mengapa firm enggan berinovasi — bukankah tetap untung?

Firm tidak malas — tetap untung dan tetap inovasi. Tapi karena firm hanya capture sebagian nilai (profit < social value), ada zona abu-abu: inovasi dengan tidak terjadi padahal bernilai sosial. Inilah under- investment (bukan no investment).
```
```{admonition} 💡 Insight
:class: tip

Pertanyaan yang sering muncul: bukankah berarti firm tidak punya profit?

adalah valuation planner (hipotetis), bukan deskripsi firm operate. Pricing at MC → margin firm = 0, tapi surplus berpindah ke konsumen (tidak hilang). "Cost reduction" di = penghematan resource sosial, bukan profit firm. Di dunia riil, kalau firm dipaksa price at MC, firm rugi → tidak inovasi. Inilah dilema: efisiensi statis vs insentif inovasi.
```
**BB3 — Surplus Ordering**

**$p=MC$ (planner)** — no deadweight loss, surplus maksimal.

**$p$ rendah (drastic)** — DWL kecil.

**(limit)** — Price tinggi, DWL besar Dua sumber gap: deadweight loss (pricing) + consumer surplus bocor (appropriability). Dua sumber ini → dua margin inefisiensi → dua instrumen kebijakan.

**BB4 — Replacement Effect (Arrow)**

Incumbent kurang incentive (kanibal profit lama). Inovasi cenderung dari entrant.

```{admonition} Catatan
:class: note

Romer (Bab 14) TIDAK punya replacement effect — varietas baru tidak gantikan lama (horizontal). Baru relevan Bab 15 (vertical/ quality ladder).
```
**BB5 — Business-Stealing Effect**

Bisa over-investment: entrant ignore loss incumbent (profit transfer bukan nilai baru).

**Appropriability** — Under-investment (CS bocor)

**Business-stealing** — Over-investment (ignore loss incumbent)

Net effect ambiguous. Di Romer (horizontal), appropriability dominan → under- investment.

## Konsep 3 — Struktur Lab Equipment Model

*Tiga lapis: household, final good, intermediate. Tanpa modal fisik.*

**Tiga lapis (contoh HP)**

```{admonition} 💡 Insight
:class: tip

Klarifikasi: HP adalah final good, bukan intermediate. Komponen HP (chip, layar, sensor) adalah intermediate goods yang bervariasi.

**Final good** — Barang jadi (dikonsumsi) — analogi: HP utuh. Diproduksi firm kompetitif dari labor + basket intermediate.

**Intermediate** — Komponen (chip, layar). Tiap jenis monopoli (paten). R&D horizontal = jenis komponen baru.

**R&D** — Pakai final good untuk ciptakan blueprint baru → $N$ naik.
```
**Mengapa tidak ada modal fisik**

Untuk isolasi efek R&D. Growth murni dari penambahan varietas, bukan akumulasi modal.

**Final good sebagai numeraire, tiga penggunaan**

Final good serbaguna (numeraire): konsumsi, input intermediate, input R&D (lab equipment).

## 14.3.1.1 · Representative Household

*OCP identik dengan RCK — Euler equation sama.*

**Portfolio dan OCP**

Household own saham intermediate firms. Balanced portfolio → return non-stochastic.

```{admonition} 💡 Insight
:class: tip

Pengingat: CRRA punya Arrow-Pratt konstan (dipakai agar BGP exist). Stochastic = acak; balanced portfolio → diversifikasi → return non-stochastic → deterministic optimal control cukup.
```
### Exercise 14.1-14.2 — Hamiltonian & Euler

**Step 1** — Maximality:

**Step 2 — Log + turunkan, substitusi adjoint**

**Step 3 — Euler (14.3)**

```{admonition} 💡 Insight
:class: tip

Pertanyaan yang sering muncul: bagaimana membuktikan TVC (14.2) terpenuhi?

TVC bukan diturunkan dari nol — ia necessary condition PMP infinite- horizon. Dari adjoint, substitusi ke TVC umum → (14.2). Di BGP: integrand jika.
```
## 14.3.1.2 · Final Good Firm

*Kompetitif, dua tahap (two-stage budgeting).*

**Production & CES basket**

```{admonition} 💡 Insight
:class: tip

Pertanyaan yang sering muncul tentang CES, dan cost minimization:

CES = Constant Elasticity of Substitution,. Dipakai untuk love-of- variety + markup konstan. = normalisasi aljabar bersih. Cost minimization (tahap 2): firm pilih komposisi termurah untuk target → menghasilkan demand curve.
```
### Exercise 14.3 — FOC (income shares)

**Step 1 — FOC terhadap M**

**Step 2 — FOC terhadap L**

Income shares = output elasticities (Cobb-Douglas). Share berjumlah 1 → zero profit (kompetitif). Itulah mengapa household tidak own final good firm.

### Exercise 14.4 — Demand curve & price index

**Step 1** — Lagrangian cost min; multiplier = shadow price (= marginal cost basket).

**Step 2 — FOC + chain rule lewat price index**

**Step 3 — Demand curve (14.10)**

**Step 4 — Price index (14.11), substitusi demand ke**

Dengan konstan: — turun saat naik (kunci Exercise 14.10).

**Tools**

**Menurunkan Terhadap Integral**

*Tiga situasi penting di Bab 14 — functional derivative terhadap integral.*

**A — Elemen** — Seperti penjumlahan: hanya titik yang relevan (Exercise 14.4).as bawah. (HJB*

**B — Batas** — Turunan terhadap batas integral: turunan "masuk" ke integran (Exercise 14.7).

**C — Parameter** — Turunan terhadap parameter di dalam integran (HJB: faktor diskon).

## 14.3.1.3 · Intermediate Goods Firms

*Monopoli per varietas. Markup pricing.*

### Exercise 14.5 — Markup pricing

**Step 1 — Profit, substitusi demand**

**Step 2 — FOC terhadap $x_{j}$, solve harga optimal**

Markup konstan dari elastisitas CES: $p=\dfrac{1}{\alpha}$ — markup $1/\alpha$ di atas $MC=1$.

### Exercise 14.6 — Profit proporsional revenue

Karena $p=MC/\alpha$, profit per varietas $\pi=(1-\alpha)\,p\,x$ — proporsional terhadap revenue, dengan profit share $1-\alpha$.

### Exercise 14.7 — HJB firm value

```{admonition} 💡 Insight
:class: tip

Jebakan umum: tertukar antara CV (current value) dan PV (present value).

Firm value = present value aliran profit, didiskon dengan market rate (bukan subjective). Tidak ada Hamiltonian/adjoint/CV-PV untuk firm — masalahnya statis. HJB (14.16) adalah asset pricing (no-arbitrage), bukan HJB optimal control. CV/PV Hamiltonian hanya untuk household (OCP dinamis dengan).
```
**Step 1 — Turunkan nilai firm terhadap $t$: batas bawah (situasi B) memberi suku $-\pi$; faktor diskon (situasi C) memberi suku $rV$.**

**Step 2 — HJB (14.16)**

Asset pricing: required return = dividend + capital gain.

**14.3.1.4-5**

**R&D Investment & Free Entry**

*Mesin pertumbuhan — bagaimana N ditentukan.*

**R&D investment**

1 unit final good → blueprint dengan Poisson rate. Stochastic di mikro, tapi law of large numbers → agregat deterministic. Paten perpetual → monopoli.

**Free entry**

Cost entry $=1$ (dinormalisasi), benefit $=V$ (present value profit). Complementary slackness:

Entry positif → $V=1$ → firm value terpaku:

konstan, inversely proportional.

```{admonition} Koneksi
:class: important

Free entry memaksa private value. Tapi social value lebih tinggi (appropriability) → entry kurang dari optimal (extensive margin).
```
## 14.3.1.6 · Competitive Equilibrium

### Exercise 14.8-14.10. CRS privat, IRS agregat.

### Exercise 14.8-14.9 — Profit & output

Dengan normalisasi harga final good $=1$:

**Demand** — $x_{j}=x$: konstan, proporsional populasi.

**Profit (14.21)** — $\pi=(1-\alpha)\,p\,x$: konstan.

**Output & basket** — $Y$ linear dalam $N$ (AN-style); basket intermediate simetris.

**CRS privat vs IRS agregat**

```{admonition} 💡 Insight
:class: tip

Pemahaman yang tepat: bukan "satu vs semua varietas", tapi given (firm) vs endogen (ekonomi).

Private CRS: firm individual, given, CRS dalam — gandakan input firm → output ×2. Aggregate IRS: ekonomi, endogen, IRS dalam — gandakan keduanya → output ×4. Sumber IRS: non-rival, dimanfaatkan semua firm.
```
```{admonition} Hasil kunci
:class: important

"AN" bukan "AK": linearitas adalah hasil equilibrium (CRS privat + IRS agregat dari non-rival ideas), bukan asumsi primitif seperti AK. Aggregate IRS → convexity gagal → First Welfare gagal.
```
### Exercise 14.10 — Mekanisme menahan diminishing returns

```{admonition} 💡 Insight
:class: tip

Kritik tajam: pertanyaan yang tepat adalah "mengapa marginal product tidak menuju nol", dan analisis kurvanya saat $A$ tumbuh harus dituntaskan.
```
**Step 1**

Tiap varietas mendapat proporsi lebih kecil saat $N$ naik — TAPI $Y$ tetap naik: via varietas baru, bukan menumpuk varietas lama.

**Step 2 — Marginal product: downward-sloping**

Untuk $N$ fixed: kurva marginal product fungsi $x$ saja (tidak bergeser).

**Step 3 — $MP$ turun saat $x$ naik**

Marginal product dan harga turun dengan rate sama → FOC selalu match.

```{admonition} Hasil kunci
:class: important

Mengapa marginal product tidak ke nol: tumbuh lewat varietas baru (dimensi baru), bukan menumpuk varietas lama. Analogi: tambah jenis bumbu baru, bukan menumpuk garam. Net: naik linear → sustained growth. Variety expansion mengalahkan diminishing returns.
```
## 14.3.1.7 · Balanced-Growth Path

### Exercise 14.11-14.14. No transition dynamics.

### Exercise 14.11 — Interest rate

**Step 1 — Free entry: $V=1$ konstan → $\dot{V}=0$; profit konstan.**

**Step 2 — Substitusi ke HJB**

Interest rate konstan → growth konstan dari awal → no transition dynamics.

### Exercise 14.12-14.13 — ODE system & growth

Sistem partially-coupled: independen; tergantung.

```{admonition} Hasil kunci
:class: important

Hasil kuncinya: kebijakan berbentuk *state feedback linear*, dan semua variabel utama tumbuh dengan rate yang sama:

**Jebakan Umum**

Detail koefisien bergantung pada normalisasi spesifik yang dipakai; yang pasti benar adalah bentuk umum di atas.
```
### Exercise 14.14 — No entry case

Growth butuh. Jika: no entry, konstan, living standard stagnan:

Threshold. Policy bisa picu growth (naikkan, jaga).

## 14.3.1.8 · Model Implications

### Exercise 14.15. Scale effects & no transition.

**Scale effect**

tergantung. Negara besar tumbuh cepat (pasar besar → profit besar → R&D banyak).

### Exercise 14.15 — Didukung data?

```{admonition} Hasil kunci
:class: important

Strong scale effect TIDAK didukung data: negara kecil (Singapura, HK, Korea) tumbuh cepat; growth dunia tidak accelerating dengan populasi. Semi-endogenous (Jones 1995) mengaitkan growth ke population growth, bukan level — lebih realistis. Yang relevan mungkin ukuran pasar terintegrasi, bukan populasi mentah.
```
**No transition dynamics**

konstan dari → langsung BGP. Beda Solow/RCK. Tidak menangkap konvergensi empiris (kelemahan AK-style).

**14.3.1.9-10**

**Planner & Policy**

### Exercise 14.16. First Welfare gagal.

### Exercise 14.16 — Dua margin inefisiensi

**Intensive margin** — Monopoly pricing → $x_{j}$ per varietas terlalu rendah (BB1, BB3).

**Extensive margin** — Appropriability → jumlah varietas $N$ terlalu sedikit (BB2).

Planner: pakai intermediate lebih banyak (price at MC) + menilai R&D lebih tinggi (internalize CS) → tumbuh lebih cepat.

```{admonition} Ringkasan besar
:class: important

First Welfare gagal karena aggregate IRS + monopoli + appropriability. Beda RCK (convexity terpenuhi, First Welfare berlaku).
```
**Section 14.3.1.10 — Policy (Tinbergen)**

Dua distorsi → dua instrumen:

**Intensive** — Subsidi intermediate inputs → $x$ naik ke optimal.

**Extensive** — Subsidi R&D → $\dot{N}$ naik ke optimal.

Satu instrumen tidak cukup — butuh keduanya (prinsip Tinbergen).

## 14.3.2 · Knowledge Spillovers (Romer 1990)

*Ide diproduksi dengan human capital langka.*

**Lab Equipment** — R&D pakai final good (reproducible):

R&D pakai human capital langka + spillover:

**Romer 1990** — Spillover eksplisit (di RHS): stok ide membuat R&D lebih produktif ("standing on shoulders"). Trade-off alokasi. Scale effect tetap ada. Kesamaan: horizontal, monopoli, First Welfare gagal, appropriability.

```{admonition} Catatan
:class: note

Catatan untuk 14.3.2 memang ringkas — porsi utama bab ini adalah model Lab Equipment (dibahas lengkap enam belas exercise).

**Sintesis**
```
**Perbandingan BGP: Solow, RCK, Endogenous**

*Evolusi pemikiran growth.*

**Solow** — Growth eksogen, saving konstan, ada transition (konvergensi). Black box.

**RCK** — Growth eksogen, saving optimal, ada transition (saddle path). First Welfare berlaku.

Growth endogen, no transition (langsung BGP).

**Endogenous** — First Welfare gagal. Policy → growth rate.

```{admonition} Ringkasan besar
:class: important

Evolusi: Solow (growth dari akumulasi modal, mekanis) → RCK (saving optimal, growth eksogen) → Endogenous (buka black box, growth dari R&D, kebijakan matters). Endogenous tidak punya transition karena struktur linear (AN), tidak ada diminishing returns.

**Checklist**
```
## Self-Assessment Bab 14

*Cek pemahaman.*

**Building blocks**

- ☐ Tiga insight Romer (non-rival, IRS, market power)
- ☐ BB1 markup, MR-elasticity, markup negatif jika
- ☐ BB2 appropriability, under-investment, valuation planner
- ☐ BB3 surplus ordering, dua sumber gap (DWL + CS bocor)
- ☐ BB4 replacement (Arrow), tidak relevan Romer
- ☐ BB5 business-stealing, over-investment

**Struktur & household**

- ☐ Tiga lapis (final good vs intermediate, contoh HP)
- ☐ CRRA, stochastic, balanced portfolio
- ☐ Exercise 14.1-14.2 Hamiltonian, Euler, TVC

**Firms**

- ☐ Exercise 14.3 income shares, zero profit
- ☐ Exercise 14.4 demand curve, price index
- ☐ Turunan integral (A elemen, B batas, C parameter)
- ☐ Exercise 14.5 markup pricing
- ☐ Exercise 14.6 profit proporsional revenue
- ☐ Exercise 14.7 HJB asset pricing (CV/PV clarification)

**R&D & equilibrium**

- ☐ R&D, free entry
- ☐ Exercise 14.8-14.9 profit, output AN
- ☐ CRS privat vs IRS agregat (given vs endogen)
- ☐ Exercise 14.10 mekanisme menahan diminishing returns

**BGP & planner**

- ☐ Exercise 14.11
- ☐ Exercise 14.12-14.13 ODE,
- ☐ Exercise 14.14 no entry, stagnan
- ☐ Exercise 14.15 scale effect tidak didukung data
- ☐ Exercise 14.16 dua margin (intensive, extensive)
- ☐ Policy: dua instrumen (Tinbergen)
- ☐ Romer 1990 (human capital, spillover)
- ☐ Perbandingan BGP Solow/RCK/Endogenous

✦ ✦ ✦

**Review Bab 14 — R&D I: Horizontal Endogenous Growth**

Economic Growth Personal Study Notes · Lab Equipment Model

Membuka black box · Jembatan ke Schumpeterian (Bab 15)
