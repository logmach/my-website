# Bab 15 — R&D II (Peters)

Bab terkompleks secara konseptual: model Schumpeterian Peters (2020, *Econometrica*) yang menyatukan endogenous growth vertikal, misallocation akibat markup heterogen, dan growth accounting generasi baru. Catatan ini ditulis untuk pembaca yang baru pertama bertemu materinya: setiap konsep mendapat penjelasan formal (definisi presisi dan derivasi penuh) sekaligus penjelasan intuitif (analogi dan "mengapa masuk akal"), dan setiap notasi dijelaskan sebelum dipakai.

```{note}
Sebagian notasi matematis pada bab ini direkonstruksi dari konteks, karena berkas sumber tidak menyimpan lapisan teks untuk formula-formulanya. Persamaan kunci telah dipulihkan; beberapa detail turunan disajikan secara naratif.
```

## Kamus Notasi Lengkap

*Setiap simbol yang dipakai di bab ini, dengan maknanya. Rujuk kembali ke sini kapan pun bingung.*

**Indeks & himpunan**

| Simbol | Arti |
|---|---|
| $j \in [0,1]$ | Indeks produk/market (varietas), continuum |
| $f$ | Indeks firm |
| $t$ | Waktu |
| $\mathcal{F}_{j}$ | Himpunan firm yang berkompetisi di market $j$ |
| $\mathcal{J}_{f}$ | Himpunan produk yang firm $f$ produksi |
| $n_{f}$ | Jumlah produk firm $f$ |

**Kuantitas & harga**

| Simbol | Arti |
|---|---|
| $Y$ | Output final good agregat (numeraire) |
| $C$ | Konsumsi composite good |
| $y_{j}$ | Kuantitas produk $j$ |
| $q_{fj}$ | Produktivitas/kualitas firm $f$ untuk produk $j$ |
| $q_{j}$ | Kualitas firm paling efisien (pemenang) di market $j$ |
| $q_{j}^{F}$ | Kualitas follower (terbaik kedua) |
| $p_{j}$ | Harga produk $j$ (limit pricing: $p_{j}=w/q_{j}^{F}$) |
| $w$ | Upah |
| $l_{j}$ | Labor produksi di market $j$; $L_{P}=\int_{0}^{1} l_{j}\,dj$ |
| $\pi_{j}$ | Profit di market $j$ |

**Agregat & distribusi**

| Simbol | Arti |
|---|---|
| $\Delta_{j}$ | Quality gap pemenang vs follower (jumlah anak tangga) |
| $\lambda > 1$ | Ukuran satu anak tangga kualitas |
| $\mu_{j} = \lambda^{\Delta_{j}}$ | Markup di market $j$ |
| $m(\Delta)$ | Measure produk dengan gap $\Delta$ (distribusinya Pareto) |
| $Q$ | Indeks kualitas/produktivitas agregat |
| $\mathcal{M}$ | Efisiensi alokasi dari distribusi markup; TFP $= Q\times\mathcal{M}$ |

**Dinamis (pilihan & rate)**

| Simbol | Arti |
|---|---|
| $I$ | Intensitas own-innovation (memperlebar gap sendiri) |
| $x$ | Intensitas expansion (merebut produk firm lain) |
| $z$ | Rate entry (firm baru) |
| $\tau$ | Rate creative destruction total yang dihadapi tiap produk |
| $V$ | Nilai firm (present value profit) |
| $r$ | Discount rate pasar |

**Parameter**

| Simbol | Arti |
|---|---|
| $\rho$ | Discount rate household |
| $\sigma = 1$ | Log utility (menjamin BGP) |
| $\bar{L}$ | Total tenaga kerja |
| $\chi_{I}, \chi_{x}$ | Cost shifter own-innovation / expansion |
| $\chi_{z}$ | Produktivitas teknologi entry |
| $\psi > 1$ | Eksponen cost convex — biaya naik tajam dengan intensitas inovasi |

## 15.1 · Latar Belakang: Misteri TFP

Mengapa standar hidup antar negara berbeda jauh? Hsieh-Klenow punya jawaban mengejutkan.

**Pertanyaan lama dari Solow** — Ingat dari growth accounting Solow (Bab 10): sebagian besar ketimpangan standar hidup antar negara dijelaskan oleh perbedaan TFP (Total Factor Productivity), bukan modal atau labor.

```{admonition} Penjelasan intuitif
:class: tip

TFP itu seperti "resep" — seberapa banyak output yang bisa dihasilkan dari input yang sama. Negara kaya seolah punya resep lebih baik. Tapi mengapa resepnya berbeda? Itu pertanyaan yang lama tak terjawab.
```
**Jawaban tradisional vs Hsieh-Klenow**

**Tradisional** — TFP beda karena friksi difusi teknologi — negara miskin lambat mengadopsi teknologi baru.

**Hsieh-Klenow (2009)** — TFP beda karena misallocation — penggunaan teknologi yang tidak efisien (BUMN, market power/markup, red-tape).

**Bagaimana mengukur misallocation: TFPR**

```{admonition} Penjelasan formal
:class: note

TFPR = Total Factor Revenue Productivity = TFP firm × harga produknya. Di pasar kompetitif sempurna, firm yang lebih produktif menetapkan harga proporsional lebih rendah, sehingga TFPR konstan antar firm — meski TFP fisik bervariasi.

Dengan distorsi (misallocation), TFPR menjadi terdispersi antar firm. Maka dispersi TFPR = ukuran misallocation.
```
```{admonition} Penjelasan intuitif
:class: tip

Bayangkan dua pabrik. Pabrik A sangat produktif, pabrik B biasa saja. Di pasar sehat, A menjual murah (karena efisien) dan B menjual mahal — pendapatan per unit input (TFPR) mereka sama. Tapi kalau ada distorsi (misal B dapat subsidi, A kena pajak), TFPR mereka melenceng. Semakin lebar selisihnya, semakin "salah alokasi" sumber daya ekonomi itu.
```
**Temuan empiris** — Hsieh-Klenow menunjukkan dispersi TFPR di China dan India jauh lebih besar dari US. Misallocation ini menjelaskan sekitar setengah perbedaan TFP agregat. Mereka memperlakukan wedge (distorsi) sebagai eksogen.

```{admonition} Gambaran besar
:class: important

Pertanyaan yang ditinggalkan Hsieh-Klenow, dan yang dijawab Peters: dari mana wedge ini berasal? Apa kaitan kausal antara kompetisi industri, dinamika entry-exit firm, distribusi markup, dengan growth dan TFP? Inilah misi Bab 15.

**15.2 & 15.2.1**

**Bird's-Eye View: Dua Kekuatan**

Survei helikopter atas logika Peters sebelum menyelam ke detail.

**Garis keturunan model**

**Aghion-Howitt (1992) / Grossman-Helpman (1991)** — Creative destruction, quality ladder (inovasi vertikal stokastik).

**Klette-Kortum (2004)** — Multi-product firm: expansion + entry.

**Peters (2020) — Bab ini** — Tambah Bertrand pricing + own-innovation → markup heterogen endogen.

**Twist baru Peters: dua kekuatan berlawanan**
```

```{admonition} Penjelasan formal
:class: note

1. Creative destruction: entry firm baru + limit pricing berarti incumbent (awalnya) tidak bisa menetapkan markup tinggi. Firm baru berkualitas lebih tinggi menggantikan incumbent lama. Efek: mengkompres distribusi markup.
2. Own-innovation: dengan investasi mahal menurunkan marginal cost, incumbent bisa menahan masuknya pesaing dan memperlebar gap. Efek: menebalkan ekor (tail) distribusi markup. **Penjelasan Intuitif**

Bayangkan persaingan lari maraton yang tak pernah selesai. Creative destruction = pelari baru yang lebih cepat terus bermunculan, menyalip yang di depan — menjaga agar tak ada yang terlalu jauh memimpin. Own-innovation = pelari yang di depan berlatih keras untuk memperlebar jarak. Bentuk akhir "sebaran jarak antar pelari" ditentukan oleh tarik-menarik kedua gaya ini.
```
*Mengapa model ini tractable: block-recursive.*

```{admonition} Penjelasan formal
:class: note

Model block-recursive: bisa dipecah jadi blok yang diselesaikan berurutan.

Bagian statis: diberikan jumlah firm dan distribusi produktivitas pada satu waktu, kita turunkan limit-pricing, lalu employment, markup, profit tiap produk. Diberikan distribusi marginal, kita konstruksi agregat dan identifikasi wedge.

Bagian dinamis: pilihan dinamis firm (rate dan) tidak bergantung eksplisit pada distribusi agregat — hanya pada jumlah produk yang dimiliki dan daftar quality gap. HJB punya solusi closed-form. Rate creative destruction bergantung pada entry dan total expansion.
```
**Hasil utama yang akan dicapai**

- Distribusi markup Pareto unik dengan tail endogen
- Aggregate TFP
- Churning intensity: tinggi → misallocation rendah, TFP tinggi, labor share tinggi
- Life-cycle: markup naik dengan umur firm (own-innovation dominan)
- Kalibrasi Indonesia: 15% dispersi TFPR dari markup → kerugian 1% TFP agregat

## 15.3.1 · Preferences (Household)

Konsumen homogen, log utility. Sederhana — tidak ada trade-off dinamis di sisi household.

**Lifetime utility (15.1)**

```{admonition} Notasi Persamaan Ini
:class: note

Lifetime utility household

Discount rate (impatience)

Konsumsi composite good pada waktu
```
```{admonition} Penjelasan formal
:class: note

Log utility adalah kasus khusus CRRA dengan $\sigma=1$. Ini menjamin BGP exist (preferensi homothetic dengan elastisitas substitusi intertemporal konstan = 1).
```
**Final good demand (15.2)**

```{admonition} Notasi Persamaan Ini
:class: note

Total final good (numeraire)

Set firm di market

Kuantitas produk dari firm

Exercise 15.1 — Labor supply

Soal: Berapa labor yang disupply household secara optimal?

Jawab: (seluruh endowment).

Household tidak menghargai leisure (tidak ada disutility labor), dan wage di equilibrium. Maka tidak ada alasan menahan labor — supply seluruh endowment = 1.
```

Exercise 15.2 — Substitusi dalam vs antar market

Soal: Pecah (15.2) jadi dua komponen. Mengapa varietas imperfect substitutes? Mengapa firm di market sama perfect substitutes?

Dekomposisi (15.2):

```{admonition} Penjelasan formal
:class: note

Antar market (imperfect): agregasi Cobb-Douglas (lewat). Sifat Cobb-Douglas: tidak bisa (karena → utility ). Konsumen butuh konsumsi positif dari setiap market. Elastisitas substitusi = 1 (terbatas) → imperfect substitutes.

Dalam market (perfect): penjumlahan linear. Output firm berbeda di market sama bersifat identik bagi konsumen. Elastisitas substitusi = → perfect substitutes.
```
```{admonition} Penjelasan intuitif
:class: tip

Antar market: roti dan obat tidak bisa saling gantikan — kamu butuh keduanya. Itu sebabnya Cobb-Douglas "memaksa" kamu beli sedikit dari semua kategori.

Dalam market: dua merek paku yang identik — kamu beli dari yang termurah, tak peduli mereknya. Karena itu firm berkompetisi habis-habisan pada harga (Bertrand).
```
```{admonition} Koneksi
:class: important

Dua sifat ini bukan kebetulan: perfect substitution dalam market → Bertrand → limit pricing (15.3.3.1). Cobb-Douglas antar market → expenditure share konstan → sales tiap market sama (Exercise 15.5).
```
## 15.3.2 · Production

Firm bisa produksi banyak varietas. Teknologi linear dalam labor.

**Production function (15.3)**

```{admonition} Notasi Persamaan Ini
:class: note

Output produk dari firm

Produktivitas firm untuk produk

Labor yang dipekerjakan

Linear dalam labor — konstan returns to scale (CRS) di level firm.

Exercise 15.3 — Demand structure

Soal: Mengapa Peters asumsi demand antar firm (di market sama) perfect substitutes? Kenyamanan modelling apa yang diberikan?

Jawab: Perfect substitution → konsumen beli dari termurah → firm MC terendah captures seluruh pasar → strategi harga jelas (limit pricing). Ini memberi closed-form pricing equilibrium dan memungkinkan analisis markup heterogen (markup = gap kualitas dengan pesaing terdekat). Tanpa asumsi ini, tiap firm punya market share positif dan pricing jadi rumit (tidak ada closed- form).
```

Exercise 15.4 — Marginal cost

Soal: Jelaskan dengan kata-kata mengapa MC firm di market $j$ adalah $w/q_{j}$.

```{admonition} Penjelasan formal
:class: note

Untuk produksi unit, dari (15.3) butuh labor. Cost labor. Marginal cost (turunan total cost terhadap).
```
```{admonition} Penjelasan intuitif
:class: tip

$w$ = harga sejam tenaga kerja; $1/q$ = berapa jam kerja untuk membuat satu unit (kebalikan produktivitas). Kalikan: biaya membuat satu unit $=w/q$ =. Firm yang lebih produktif (tinggi) punya biaya per unit lebih rendah — bisa "membanting harga" pesaing.
```
## 15.3.3.1 · Bertrand Pricing Equilibrium

Twist baru Peters. Limit pricing menghasilkan markup = gap kualitas.

**Setup: pemenang dan follower**

```{admonition} Notasi Baru
:class: note

Produktivitas firm paling efisien (pemenang) di market

Produktivitas firm terefisien kedua (Follower) di market

Karena MC, firm dengan tertinggi punya MC terendah. Firm ini akan memenangkan kompetisi Bertrand.
```
### Proposition 15.1 — Bertrand Pricing Equilibrium

```{admonition} Penjelasan formal
:class: note

Firm paling efisien (MC terendah) melayani seluruh market dan menetapkan limit price sama dengan MC firm terefisien kedua.
```
```{admonition} Penjelasan intuitif
:class: tip

Si juara tidak perlu menetapkan harga setinggi-tingginya. Ia cukup menetapkan harga sedikit di bawah biaya pesaing terdekat (follower). Pada harga itu, follower tak bisa untung kalau ikut bermain, jadi mundur — dan si juara mengambil seluruh pasar. Menetapkan harga lebih tinggi berisiko follower masuk; lebih rendah membuang profit percuma.

Limit price (15.4)

Harga = MC follower ($w/q^{F}$). Perhatikan ini lebih tinggi dari MC pemenang ($w/q^{L}$), karena $q^{L} > q^{F}$. Selisih inilah sumber markup.

Markup (15.5)
```
```{admonition} Hasil kunci
:class: important

**Markup = rasio kualitas pemenang terhadap follower.** Hanya bergantung pada seberapa jauh pemenang unggul, bukan kualitas absolut. Gap besar → markup besar (monopoli kuat). Gap kecil → markup kecil (kompetisi ketat).
```
### Exercise 15.5 — Sales, Employment, Profit

Tunjukkan untuk tiap market: (1) sales; (2) employment (15.6); (3) profit (15.7).

```{admonition} Catatan
:class: note

Ini masalah STATIS. Bagian 1 pakai Lagrangian statis (household pilih di satu titik waktu). Bagian 2-3 hanya aljabar substitusi. Tidak ada Hamiltonian — itu hanya untuk masalah dinamis (HJB muncul nanti di 15.3.4).

Bagian 1 — Sales equalized
```
**Step 1.** Household memilih $\{c_{j}\}$ untuk max utility s.t. budget.

**Step 2.** Lagrangian statis (multiplier = shadow price budget).

**Step 3.** FOC terhadap $c_{j}$.

**Step 4.** Pin down multiplier dari budget.

(karena numeraire: total belanja $=Y$).

**Step 5.** Hasil

```{admonition} Penjelasan intuitif
:class: tip

Cobb-Douglas membuat konsumen membelanjakan porsi yang sama di tiap kategori. Karena ada kontinum kategori dan total belanja, tiap market menerima pendapatan total yang sama, yaitu — terlepas dari kualitas atau markup market itu.

Bagian 2 — Employment (15.6)
```
**Step 1.** Dari production: $l_{j}=y_{j}/q_{j}$.

**Step 2.** Substitusi sales ($p_{j}y_{j}=Y$) dan limit price ($p_{j}=w/q_{j}^{F}$).

**Step 3.** Kenali

```{admonition} Penjelasan intuitif
:class: tip

adalah labor yang dibutuhkan kalau pasar kompetitif (markup = 1). Faktor adalah "rem": markup tinggi → harga tinggi → konsumen beli lebih sedikit → lebih sedikit tenaga kerja dipakai. Monopoli menekan employment.

Bagian 3 — Profit (15.7)
```
**Step 1.** Profit = revenue − cost

**Step 2.** Substitusi dan sederhanakan → (15.7)

```{admonition} Hasil kunci
:class: important

Profit margin. Cek ekstrem: (kompetitif) → profit 0; (monopoli) → profit. Markup tinggi → profit tinggi.
```
## 15.3.3.2 · Firm -level Allocations

Satu firm bisa punya banyak produk. Agregasi dari market ke firm.

```{admonition} Notasi Baru
:class: note

Set produk firm

Jumlah produk firm 

Markup firm (harmonic mean)
```
### Exercise 15.6 — Total employment firm

Tunjukkan total employment firm adalah (15.8), dengan harmonic mean.

**Step 1.** Total labor = jumlah labor tiap produk

**Step 2.** Faktorkan dan rata-rata

**Step 3.** Definisi (harmonic mean) → hasil (15.8)

```{admonition} Penjelasan formal
:class: note

adalah harmonic mean dari markup produk. Sifat. Karena (employment inversely proportional ke markup), agregasi yang natural lewat.
```
```{admonition} Penjelasan intuitif
:class: tip

Markup firm "condong" ke produk dengan markup rendah, karena produk markup rendah menyerap lebih banyak tenaga kerja (lebih banyak diproduksi). Produk yang mendominasi employment-lah yang paling menentukan markup rata-rata firm — itulah yang ditangkap harmonic mean.
```
### Exercise 15.7 — Variety, markups, firm size

Firm size bergantung dua faktor: (1) jumlah produk — bagaimana? (2) markup (conditional) — bagaimana?

Linear positif.

**Efek** — Lebih banyak produk → firm lebih besar.

**Efek** — Inversely proportional: $l_{j}\propto 1/\mu_{j}$. Markup tinggi → firm lebih kecil (per produk).

```{admonition} Penjelasan intuitif
:class: tip

Firm bisa besar karena dua alasan berbeda: (Tipe 1) punya banyak produk meski tiap produk kompetitif (markup rendah); atau (Tipe 2) punya sedikit produk tapi dengan monopoli kuat (markup tinggi). Firm besar tidak selalu bermarkup tinggi — tergantung strukturnya.
```
```{admonition} Koneksi
:class: important

Life-cycle: firm muda (kecil, markup rendah, baru entry) → firm tua (besar via expansion, markup tinggi via own-innovation). Firm tua lebih besar dari dua kanal: extensive (naik) + intensive (naik). Sales firm selalu naik dengan.
```
## 15.3.3.3 · Aggregate Allocations & Misallocation

Naik ke level ekonomi. Inti bab: dari mana wedge misallocation berasal.

```{admonition} Notasi Baru
:class: note

CDF distribusi markup across produk

CDF distribusi produktivitas across produk

Indeks produktivitas agregat:

Wedge misallocation

Labor share of income

Total labor di produksi
```
**Total labor produksi (15.9)**

**Step 1.** Integrate across firm

**Step 2** — Tiap produk dimiliki tepat satu firm → integrate across produk: $L_{P}=\int_{0}^{1} l_{j}\,dj$


### Exercise 15.8 — Equilibrium wage (15.10)

Tunjukkan equilibrium wage adalah (15.10): upah berbanding lurus dengan output agregat dan berbanding terbalik dengan markup agregat.

**Step 1** — Mulai dari (15.2), Bertrand:

**Step 2.** Suku pertama = (definisi)

**Step 3.** Suku kedua: substitusi (15.6)

**Step 4.** Gabung — suku CANCEL di kedua sisi

**Step 5.** Eksponen → hasil (15.10)

```{admonition} Penjelasan intuitif
:class: tip

Upah = produktivitas dikali "wedge markup". Kalau markup tinggi di mana-mana, sebagian nilai yang seharusnya jadi upah malah "diambil" sebagai profit firm — sehingga upah turun.
```
**Output ekonomi (15.11)**

**Step 1.** Substitusi (15.10) ke (15.9), solve

**Step 2.** Hasil (15.11)

```{admonition} Gambaran besar
:class: important

Aggregate TFP $=Q\times\mathcal{M}$. Dua komponen: $Q$ (produktivitas teknis) dan $\mathcal{M}$ (efisiensi alokasi). Cross-country TFP differences bisa dari $Q$ (teknologi) atau (misallocation). Hsieh-Klenow: sebagian besar dari.
```
### Exercise 15.9 — Mengapa

Mengapa? Apa arti vs?

```{admonition} Penjelasan formal
:class: note

Bukti via AM-GM inequality. Untuk variabel random positif: (geometric mean ≤ arithmetic mean), dengan equality iff konstan. Set:

Markup homogen (sama semua). Tidak ada misallocation. (efisien).

Markup heterogen. Ada misallocation. (di bawah frontier).
```
```{admonition} Penjelasan intuitif
:class: tip

Di pasar sehat, semua produk dihargai dekat biaya marginal → sumber daya mengalir ke tempat paling produktif. Kalau markup heterogen, produk bermarkup tinggi "terlalu mahal" → konsumen beli sedikit → tenaga kerja kurang di sana, tapi terlalu banyak di sektor markup rendah. Sumber daya salah tempat — itulah misallocation. Kuncinya bukan markup tinggi, tapi markup heterogen.
```
**Labor share (15.12)**

```{admonition} Hasil kunci
:class: important

Macro takeaway: markup tinggi → labor share rendah. Markup menaikkan profit firm (15.7) dan menekan upah (15.10). Konsisten dengan tren empiris global: labor share menurun seiring konsentrasi pasar naik.
```
```{admonition} Catatan
:class: note

Karena aggregator final good di sini Cobb-Douglas, hanya bergantung pada distribusi markup — bukan joint distribution. Dengan CES umum, bisa bergantung joint distribution (lebih rumit; Section 2.7 Peters).
```
## 15.3.4 · Dynamic Parts: Pengantar

Transisi besar: dari snapshot statis ke evolusi distribusi. Akhirnya HJB muncul.

```{admonition} Penjelasan formal
:class: note

Sebelumnya (15.3.3) kita ambil distribusi sebagai given — snapshot pada satu waktu. Tugas sekarang: jelaskan bagaimana distribusi itu terbentuk dari pilihan dinamis firm. Karena limit pricing sudah ditentukan per-periode, firm dynamic problem hanya soal investasi (pricing otomatis dari Bertrand).
```
**Dua pilihan dinamis firm**

```{admonition} Notasi Pilihan Dinamis
:class: note

Rate own-innovation di market (Poisson)

Rate expansion ke market baru (Poisson)

Rate entry firm baru

Rate creative destruction total
```
```{admonition} Penjelasan intuitif
:class: tip

"Flow rate" Poisson = seberapa sering keberhasilan muncul per satuan waktu. Tiap percobaan inovasi acak (kadang berhasil, kadang tidak), tapi dengan banyak percobaan, rate rata-ratanya pasti (law of large numbers).
```
**Catatan: Cannibalism (dua arah)**

```{admonition} Penjelasan formal
:class: note

Total rate creative destruction adalah jumlah dari rate entrant baru dan total rate expansion semua firm existing. Firm yang sedang memimpin harus memperhitungkan ancaman ini dalam optimal control-nya.
```
```{admonition} Penjelasan intuitif
:class: tip

"Kanibalisme" = saling memakan sesama. Firm existing yang memperluas wilayah memakan incumbent di market tujuan. Entrant baru juga memakan incumbent. Jadi ancaman datang dari dua arah: pendatang baru dan ekspansi firm lama. Setiap firm hidup di bawah bayang-bayang bahwa suatu saat ia bisa dikanibal — dan ia memasukkan risiko itu ke dalam perhitungannya.
```
## 15.3.4.1 · Firm HJB Equation

Jantung bagian dinamis. Asset pricing dengan banyak Poisson jumps.

**Quality ladder (15.13)**

```{admonition} Notasi Tangga Kualitas
:class: note

Anak tangga (rung) — level kualitas

Faktor lompatan tiap inovasi 

Quality gap di market 

Kualitas membentuk barisan geometrik. Naik anak tangga → kualitas.
```
### Exercise 15.10 — Markup agregat

Verifikasi konsistensinya dengan definisi markup agregat.

**Step 1.** Markup dari Bertrand (15.5)

**Step 2** — Tulis kualitas dalam anak tangga,

**Step 3.** Definisi gap

**Step 4.** Karena pemenang strictly ahead

Markup minimum.

```{admonition} Penjelasan formal
:class: note

One-to-one mapping antara gap dan markup. Profit (15.7): — hanya bergantung. Karena itu adalah payoff-relevant statistic.
```
```{admonition} Penjelasan intuitif
:class: tip

Markup sepenuhnya ditentukan oleh "berapa anak tangga si juara unggul dari pesaing terdekat". Tidak peduli nilai kualitas absolutnya — hanya jaraknya yang penting. Ini menyederhanakan segalanya: kita cukup melacak gap (bilangan bulat), bukan kualitas absolut.
```
### Exercise 15.11 — Mengapa tanpa indeks

Mengapa kita tidak pakai indeks di? Apakah identitas firm penting?

Jawab: Identitas firm tidak relevan untuk outcome market. Markup hanya bergantung pada gap antara pemenang dan follower di market — bukan siapa pemenangnya. Analogi: margin kemenangan lomba lari ditentukan selisih waktu, bukan nama pelari. Identitas firm baru relevan di level firm dynamics (, portofolio).

**Catatan: Birth-Death Process**

```{admonition} Penjelasan formal
:class: note

Tiga kanal pertumbuhan — semua menaikkan kualitas satu anak tangga, tapi efeknya pada markup berbeda:

**Own-innovation** — Gap naik; markup naik faktor $\lambda$. Contra-competition.

**Expansion / Entry** — Gap reset ke 1; markup turun ke $\lambda$. Pro-competition (creative destruction).
```
```{admonition} Penjelasan intuitif
:class: tip

Mengapa creative destruction mereset gap ke 1? Karena entrant masuk dengan kualitas tepat satu anak tangga di atas incumbent lama. Incumbent lama (yang tadinya jauh memimpin) kini jadi follower, dan gap pemenang-baru ke follower hanya 1 langkah. Markup "kembali ke nol" (baseline).
```
**Catatan: Dynamic Trade-off**

```{admonition} Penjelasan intuitif
:class: tip

Firm menghadapi dilema. Own-innovation: investasi memperlebar gap di market yang sudah dikuasai → markup naik, "stay ahead". Expansion: masuk market baru → tapi mulai dari markup rendah, dengan harapan profit masa depan kalau bertahan. Tarik- menarik: perdalam kekuasaan di kandang sendiri, atau perluas wilayah baru?
```
### Exercise 15.12 — Payoff-relevant states

Verifikasi vektor state yang cukup untuk firm: $n_{f}$ (jumlah produk) dan $\{\Delta_{j}\}$ (daftar quality gap).

```{admonition} Penjelasan formal
:class: note

Payoff: total profit — hanya bergantung $n_{f}$ dan $\{\Delta_{j}\}$ ($t$ implisit). Dynamics: own-innovation, creative destruction (kehilangan produk), expansion (, tambah) — semua hanya butuh. Tidak butuh kualitas absolut, identitas, atau distribusi agregat (hanya given).
```
```{admonition} Penjelasan intuitif
:class: tip

Untuk tahu nilai sebuah firm, kamu hanya perlu tahu: berapa banyak produk yang ia kuasai, dan seberapa jauh ia memimpin di tiap produk. Tidak perlu tahu nama firm, tidak perlu tahu kualitas absolut, tidak perlu tahu seluruh peta ekonomi. Itu sebabnya masalahnya bisa diselesaikan closed-form.
```
**HJB Equation (15.14)** — Inti Section 15.3.4.1. Ruas kiri $rV$ = required return; ruas kanan terdiri dari enam term:

1. **Flow profits** — total profit semua produk (dividend).
2. **Capital gain** — perubahan nilai firm seiring waktu.
3. **Creative destruction** — expected loss (negatif): tiap produk hilang dengan rate $\tau$. Inilah risk-nya.
4. **Own innovation** — gain dari gap yang naik (rate $I$, variabel pilihan).
5. **Expansion** — gain dari produk baru ber-gap 1 (rate $x$, variabel pilihan).
6. **Cost** — biaya inovasi (diukur dalam labor) × wage $w$.

```{admonition} Koneksi
:class: important

Bandingkan Bab 14: di Romer HJB hanya $rV=\pi+\dot{V}$ (asset pricing sederhana). Di Peters jauh lebih kaya: ada creative destruction (risk), own-innovation & expansion (option value), multi- product. Tetap asset pricing, tapi dengan banyak Poisson jumps.
```
### Exercise 15.13 — Cost units

True/False: Cost function mengembalikan cost dalam unit numeraire good?

Jawab: FALSE. Cost function diukur dalam unit labor. Baru setelah dikali $w$ (lihat term 6) ia menjadi unit numeraire; fungsi cost sendiri = jumlah labor untuk inovasi.

**Convex innovation cost (15.15)**

**Notasi Parameter Cost**

```{admonition} Penjelasan formal
:class: note
Cost shifter own-innovation Cost shifter expansion Eksponen convex membuat cost convex dalam rate → marginal cost naik → firm tak pilih rate tak terbatas → solusi interior unik. Karena payoff (gain) linear dalam dan cost convex, max (linear − convex) → FOC interior unik → closed-form.
```

Faktor: firm dengan gap lebih besar menghadapi cost own- innovation lebih rendah.

```{admonition} Penjelasan intuitif
:class: tip

Faktor menangkap "success breeds success" — pemimpin teknologi (gap besar) lebih mudah berinovasi lagi karena sudah punya know-how dan infrastruktur riset. Akibatnya pemimpin terus menjauh → ekor distribusi markup menebal (ini kanal own- innovation yang menebalkan tail).
```
## 15.3.4.2 · Free Entry

Menentukan rate entry firm baru secara endogen.

```{admonition} Notasi Baru
:class: note

Produktivitas teknologi entry (labor → ide)

Nilai firm entrant baru 
```
**State entrant & teknologi**

```{admonition} Penjelasan formal
:class: note

State entrant baru: (satu produk), (gap satu langkah, karena masuk dengan kualitas incumbent lama). Teknologi entry linear: 1 unit labor → ide. Untuk 1 unit rate entry butuh labor; cost (numeraire).
```
**Free entry condition (15.16)**

```{admonition} Penjelasan formal
:class: note

Complementary slackness: jika → tidak ada entry; jika → benefit = cost. Asumsi kasus menarik → binding.
```
```{admonition} Penjelasan intuitif
:class: tip

Orang akan terus membuka firm baru selama nilai firm melebihi biaya membukanya. Entry berlanjut sampai keuntungan habis — nilai = biaya. Ini "zero excess profit" dari pintu masuk.
```
**Creative destruction rate (15.17)**

```{admonition} Penjelasan formal
:class: note

Total rate incumbent kehilangan market = entry baru + total expansion firm existing. Kedua sumber menggusur incumbent. Catatan: muncul di HJB tiap firm, tapi sendiri terdiri dari keputusan agregat — ini fixed point yang konsisten di BGP.
```
### Exercise 15.14 — Labor market clearing

Jelaskan dengan kata-kata accounting condition labor market clearing.

```{admonition} Penjelasan formal
:class: note

Sisi kiri: total supply labor = 1 (Exercise 15.1, measure-one household). Sisi kanan: demand = produksi + riset. tiga komponen: entry (linear), expansion (convex), own-innovation (convex + diskon leader).
```
```{admonition} Penjelasan intuitif
:class: tip

Seluruh tenaga kerja ekonomi (= 1) dibagi dua: membuat barang hari ini atau berinovasi untuk masa depan. Lebih banyak ke riset → growth lebih cepat, tapi output sekarang lebih sedikit. Ini trade-off konsumsi-vs-pertumbuhan di level seluruh ekonomi.
```
## 15.3.5 · Balanced-Growth Equilibrium

Merangkai semua. Proposition 15.2: equilibrium stasioner unik dengan closed-form.

**Apa itu stationary equilibrium**

```{admonition} Penjelasan formal
:class: note

Di BGP: rate inovasi konstan, distribusi markup stasioner, wedge konstan, semua variabel agregat tumbuh rate sama.
```
### Proposition 15.2 — Unique Stationary Equilibrium

```{admonition} Penjelasan formal
:class: note

Asumsi parameter.

Asumsi ini (cukup besar) menjamin nilai firm finite — kalau terlalu kecil, firm bisa expand tanpa batas dengan return tinggi sehingga nilai meledak. Analog syarat di RCK.

Properti 1 — Value function (15.18)
```
```{admonition} Penjelasan formal
:class: note

Additive separable: nilai firm = kali nilai baseline per produk + jumlah premium markup tiap produk. Inilah yang membuat closed-form.
```
### Exercise 15.16 — Interpretasi dan

Interpretasikan $A$ dan $B$ — dua komponen nilai.

**$A$ (product value)** — Nilai "memiliki satu produk" baseline (gap 1): profit baseline + bonus opsi expansion, terdiskon.

**$B$ (markup value)** — Nilai tambahan dari gap: extra profit + bonus opsi own-innovation. Naik seiring lebar gap.

```{admonition} Penjelasan formal
:class: note

Discount efektif: firm mendiskon future dengan impatience PLUS hazard kanibalisme. Seperti asset pricing dengan default risk: discount = rate + hazard.
```
```{admonition} Penjelasan intuitif
:class: tip

= "harga dasar" punya satu produk (di level pemula, gap 1). = "premium" karena unggul jauh — semakin besar lead, semakin besar premium. Total nilai firm = (banyaknya produk × harga dasar) + (jumlah premium dari tiap lead). Persis dua dimensi firm size: extensive (berapa produk) + intensive (seberapa unggul).
```
### Exercise 15.15 — Derive value function (guess-and- verify)

Derive value function lewat guess-and-verify.

**Step 1.** Tebak additive separable

Masuk akal: profit additive, creative destruction hit tiap produk independen, keputusan per-produk.

**Step 2.** Hitung selisih nilai tiap jump

Creative destruction (kehilangan produk).

Own-innovation. Expansion.

**Step 3.** Substitusi ke HJB, pisahkan per-komponen

Karena semua additive, HJB terpecah jadi persamaan untuk (baseline) dan (premium) secara terpisah.

**Step 4.** Solve & verify

Menghasilkan formula (15.18). Substitusi balik konfirmasi memenuhi HJB. Bekerja karena struktur HJB linear dalam komponen value (cocok dengan additive profit + independent jumps).

Properti 2 — Optimal investments (15.19, 15.20)

Expansion rate (15.19):

**Step 1.** FOC expansion: marginal value = marginal cost

**Step 2.** Free entry: produk baru (gap 1) = nilai entrant

**Step 3.** Samakan, solve

```{admonition} Hasil kunci
:class: important

**$x^{*}$ konstan**, ditentukan parameter saja! Karena expand ke market baru memberi produk gap 1 — persis sama dengan yang didapat entrant — free entry menyamakan nilainya ke, membuat FOC expansion independen dari kondisi agregat.

Own-innovation rate (15.20):
```
```{admonition} Penjelasan formal
:class: note

**$I^{*}$ implicit** (muncul di kedua sisi): tergantung kondisi agregat — beda dari $x^{*}$. Faktor kuncinya: incremental gain dari naik satu gap.
```
### Exercise 15.17 — Interpretasi $I^{*}$ dan $x^{*}$

Interpretasikan behavior kebijakan optimal $I^{*}$ dan $x^{*}$. Apa artinya untuk dinamika firm?

**Expansion $x^{*}$** — Konstan, parameter saja: tergantung rasio biaya expand vs entry. Stabil, tak terpengaruh agregat.

**Own-innovation** — Tergantung kondisi agregat dan gap kualitas: profit tinggi → intensitas naik; impatient/risky → turun.

Own-innovation TIDAK menggusur firm lain — creative destruction $\tau$ hanya berasal dari $x$ dan $z$.

```{admonition} Koneksi
:class: important

Churning intensity menangkap dua kekuatan: creative destruction (, kompres) vs own-innovation (, fatten). Rasio ini menentukan bentuk distribusi markup (Proposition 15.3).

Properti 4 — Growth rate (15.21)
```
```{admonition} Penjelasan intuitif
:class: tip

Produktivitas agregat naik setiap kali ada inovasi dari salah satu dari tiga kanal. Tiap inovasi mengalikan kualitas dengan faktor $\lambda>1$ → menyumbang ke pertumbuhan. Total rate inovasi =. Maka growth = (total inovasi).

**15.3.5.1 — Hasil penting**
```
**Distribusi Markup Pareto** — Klimaks bab: dari flow accounting ke distribusi Pareto.

```{admonition} Notasi Baru
:class: note

$m(\Delta)$ — measure produk dengan quality gap $\Delta$

Churning intensity

Shape parameter Pareto
```
**Sistem ODE distribusi gap**

### Exercise 15.18 — Flow accounting

Jelaskan accounting process yang menghasilkan sistem ODE.

```{admonition} Penjelasan intuitif
:class: tip

Bayangkan tiap gap sebagai "kotak". Produk mengalir masuk dan keluar. Laju perubahan isi kotak = inflow − outflow. Dua gerakan: own-innovation menaikkan gap satu tingkat; creative destruction mereset gap ke 1.
```
```{admonition} Penjelasan formal
:class: note

Gap: Inflow = semua produk di gap yang dikanibal (reset ke 1). Outflow = produk gap 1 yang naik via own-innovation. (Creative destruction pada gap-1 tetap di gap 1, bukan flow.)

Gap: Inflow = produk gap naik via own- innovation. Outflow = naik via own-innovation ATAU reset via creative destruction.
```
**Derivasi distribusi stasioner (langkah Exercise 15.20)**

**Step 1** — Impose stationarity:

**Step 2.** Solve

**Step 3.** Solve recursively

Definisi. Maka.

**Step 4.** Distribusi geometrik

(Cek: ✓)

**Step 5.** CDF atas gap

**Step 6** — Change of variable ke markup,

**Step 7** — Sederhanakan,

**Step 8.** Distribusi Pareto

```{admonition} Penjelasan intuitif
:class: tip

Mengapa geometrik menjadi Pareto? Karena markup adalah transformasi eksponensial dari gap. Distribusi geometrik (exponential decay dalam) + transformasi log = Pareto (power law dalam). Hubungan matematis fundamental: exponential of geometric = power law.
```
### Proposition 15.3

```{admonition} Penjelasan formal
:class: note

Definisikan,. Maka:

1. Distribusi markup stasioner: (Pareto).
2. Misallocation & labor share.
```
**Derivasi $m(\Delta)$ dan tail Pareto** — Density-nya Pareto.

**Step 1.** Labor share

**Step 2.** Via substitusi

**Step 3.** Misallocation

### Exercise 15.19 — Comparative statics

Bagaimana lebih tinggi mempengaruhi (1) Pareto tail, (2) misallocation?

**Step 1.** Naik → naik

**Step 2.** Naik → tail tipis

Tail turun lebih cepat → sedikit firm markup tinggi.

**Step 3.** Naik → naik (less misallocation): (no misallocation). Juga naik.

```{admonition} Hasil kunci
:class: important

**Churning tinggi → misallocation rendah → TFP tinggi → labor**

share tinggi. Banyak creative destruction relatif own-innovation → markup terkompres (homogen) → less heterogeneity → less misallocation.
```
```{admonition} Penjelasan intuitif
:class: tip

Ekonomi yang "churning" tinggi (banyak pendatang baru menggusur incumbent) menjaga agar tak ada firm yang terlalu lama menikmati monopoli besar. Markup tetap seragam dan rendah → sumber daya teralokasi efisien. Sebaliknya, ekonomi dengan incumbent yang mengakar (own-innovation dominan, sedikit gangguan) membiarkan markup tumbuh heterogen → misallocation besar.
```
### Exercise 15.20 — Langkah derivasi (flow → distribution)

Jelaskan langkah logis dari flow accounting menuju distribusi stasioner markup.

```{admonition} Penjelasan formal
:class: note

Enam langkah: (1) flow accounting ODE untuk; (2) impose stationarity; (3) solve; (4) solve recursive → geometrik; (5) CDF gap; (6) change of variable + definisi → Pareto.

**Gambaran Besar**

Jawaban atas misteri Hsieh-Klenow: misallocation TIDAK perlu diasumsikan eksogen. Ia muncul endogen dari dinamika kompetisi — keseimbangan antara creative destruction dan own-innovation, diringkas oleh churning. Inilah kontribusi Peters.

✦ ✦ ✦

**Sintesis**
```
**Benang Merah Bab 15** — Bagaimana semua bagian terhubung.

**Static (15.3.3)** — Bertrand → markup → sales, employment, profit per market → agregat → wedge. Tools: Lagrangian statis + aljabar..

**Dynamic (15.3.4)** — HJB firm (multi-jump asset pricing) → pilih intensitas inovasi optimal. Free entry → kondisi nilai masuk. Tools: HJB + complementary slackness.

**BGP (15.3.5)** — Closed-form value function; $x^{*}$ konstan (parameter), $I^{*}$ tergantung agregat. Growth $g$ dari agregasi inovasi.

**Distribution (15.3.5.1)** — Flow accounting → distribusi geometrik gap → Pareto markup. Churning menentukan misallocation.

**Tiga rumus yang wajib melekat**

```{admonition} Hasil kunci
:class: important

**Peters vs Romer (Bab 14)**

**Inovasi**

Romer: identik, markup konstan. Peters:

**Firm**

heterogen, markup Pareto.

KEDUANYA: private CRS, aggregate IRS.

**Returns to scale**

Sumber IRS: (Romer) vs (Peters).

**Replacement/business-** — Romer: tidak relevan. Peters: AKTIF (creative `stealing` destruction).
```

Romer: tidak ada (markup homogen). Peters:

**Misallocation** — dari markup heterogen.

**Checklist**

## Self-Assessment Bab 15

Cek pemahaman menyeluruh atas bab ini.

**Konteks & setup**

- ☐ Hsieh-Klenow: TFP cross-country dari misallocation, diukur dispersi TFPR
- ☐ Dua kekuatan: creative destruction (kompres) vs own-innovation (fatten)
- ☐ Block-recursive → tractable closed-form
- ☐ Ex 15.1: labor supply = 1
- ☐ Ex 15.2: Cobb-Douglas antar market (imperfect), linear dalam market (perfect)
- ☐ Ex 15.3-15.4: perfect substitution → limit pricing; MC $=w/q$

**Static (Bertrand & agregat)**

- ☐ Limit price (15.4); markup (15.5):
- ☐ Ex 15.5: sales (Lagrangian statis), employment (15.6), profit (15.7)
- ☐ Ex 15.6: harmonic mean; Ex 15.7: firm size dua kanal
- ☐ Ex 15.8: wage (15.10) derivasi log aggregation
- ☐ Output (15.11); Ex 15.9: via AM-GM
- ☐ Labor share (15.12):

**Dynamic (HJB & free entry)**

- ☐ Quality ladder (15.13); Ex 15.10:
- ☐ Ex 15.11: identitas tidak relevan (hanya gap)
- ☐ Birth-death: own-innov (gap+1) vs creative destruction (reset 1)
- ☐ Ex 15.12: state cukup
- ☐ HJB (15.14) enam term; Ex 15.13: dalam labor (FALSE numeraire)
- ☐ Convex cost (15.15): closed-form, leader murah
- ☐ Free entry (15.16):
- ☐ Creative destruction (15.17):
- ☐ Ex 15.14: labor clearing

**BGP & distribusi (★ inti)**

- ☐ Prop 15.2: value function (15.18) additive separable
- ☐ Ex 15.16: product value, markup premium
- ☐ Ex 15.15: guess-and-verify
- ☐ (15.19) konstan parameter; (15.20) tergantung agregat
- ☐ Ex 15.17: (tidak masuk); churning
- ☐ Growth (15.21):
- ☐ Ex 15.18: flow accounting ODE
- ☐ Derivasi: stationarity → geometrik → Pareto
- ☐ Prop 15.3,
- ☐ Ex 15.19: naik → naik → tail tipis → less misallocation
- ☐ Ex 15.20: enam langkah flow → distribution
- ☐ HAFAL: formulas

✦ ✦ ✦

Review Bab 15 — Endogenous Growth, Misallocation & Growth Accounting

Economic Growth Personal Study Notes · Peters (2020) · Schumpeterian R&D II

Bab terakhir kursus · Misallocation endogen dari dinamika kompetisi

✦ Selamat — seluruh materi kursus tuntas ✦
