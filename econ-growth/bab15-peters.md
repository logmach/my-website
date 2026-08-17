# Bab 15 — R&D II (Peters)

Bab terkompleks secara konseptual: model Schumpeterian Peters (2020, *Econometrica*) yang menyatukan endogenous growth vertikal, misallocation akibat markup heterogen, dan growth accounting generasi baru. Catatan ini ditulis untuk pembaca yang baru pertama bertemu materinya: setiap konsep mendapat penjelasan formal (definisi presisi dan derivasi penuh) sekaligus penjelasan intuitif (analogi dan "mengapa masuk akal"), dan setiap notasi dijelaskan sebelum dipakai.

```{note}
Sebagian notasi matematis pada bab ini direkonstruksi dari konteks, karena berkas sumber tidak menyimpan lapisan teks untuk formula-formulanya. Persamaan kunci telah dipulihkan; beberapa detail turunan disajikan secara naratif.
```

**Glosarium**

## Kamus Notasi Lengkap

Setiap simbol yang dipakai di Bab 15, dengan maknanya. Rujuk kembali ke sini kapan pun bingung.

`I NDEKS & HIMPUNAN`

Indeks produk/market (varietas), (continuum)

Indeks firm

Waktu

Himpunan firm yang berkompetisi di market pada waktu

Himpunan produk yang firm produksi

Jumlah produk firm 

`K UANTITAS & HARGA`

Output final good agregat (numeraire)

Konsumsi composite good

Kuantitas produk dari firm

Produktivitas/kualitas firm untuk produk

Produktivitas firm paling efisien (pemenang) di market

Produktivitas firm terefisien kedua (Follower) di market

Harga (limit price) di market

Labor yang dipekerjakan

Upah riil (real wage)

`M ARKUP, GAP & PROFIT`

Markup di market 

Markup firm (harmonic mean dari)

Quality gap di market 

Anak tangga (rung) pada quality ladder

Faktor lompatan kualitas tiap inovasi 

Profit di market

`A GREGAT & DISTRIBUSI`

Total labor di sektor produksi

Total labor di sektor riset/R&D

CDF (distribusi) markup across produk

CDF distribusi produktivitas across produk

Indeks produktivitas agregat:

Wedge misallocation 

Labor share of income

Measure produk dengan quality gap

`D INAMIS (PILIHAN & RATE)`

Rate own-innovation firm di market

Rate expansion ke market baru

Rate entry firm baru

Rate creative destruction total 

Churning intensity Shape parameter Pareto 

Value function firm

Cost function inovasi (dalam unit labor)

`P ARAMETER`

Discount rate (subjective time preference)

Cost shifter own-innovation

Cost shifter expansion

Produktivitas teknologi entry

Eksponen cost convex 

`1 5. 1`

## Latar Belakang: Misteri TFP

Mengapa standar hidup antar negara berbeda jauh? Hsieh-Klenow punya jawaban mengejutkan.

### Pertanyaan lama dari Solow

Ingat dari growth accounting Solow (Bab 10): sebagian besar ketimpangan standar hidup antar negara dijelaskan oleh perbedaan TFP (Total Factor Productivity), bukan modal atau labor.

**Penjelasanintuitif**

TFP itu seperti "resep" — seberapa banyak output yang bisa dihasilkan dari input yang sama. Negara kaya seolah punya resep lebih baik. Tapi mengapa resepnya berbeda? Itu pertanyaan yang lama tak terjawab.

### Jawaban tradisional vs Hsieh-Klenow

TFP beda karena friksi difusi teknologi — `Tradisional` negara miskin lambat mengadopsi teknologi baru.

TFP beda karena misallocation — penggunaan `Hsieh-Klenow (2009)` teknologi yang tidak efisien (BUMN, market power/markup, red-tape).

### Bagaimana mengukur misallocation: TFPR

**Penjelasanformal**

TFPR = Total Factor Revenue Productivity = TFP firm × harga produknya. Di pasar kompetitif sempurna, firm yang lebih produktif menetapkan harga proporsional lebih rendah, sehingga TFPR konstan antar firm — meski TFP fisik bervariasi.

Dengan distorsi (misallocation), TFPR menjadi terdispersi antar firm. Maka dispersi TFPR = ukuran misallocation.

**Penjelasanintuitif**

Bayangkan dua pabrik. Pabrik A sangat produktif, pabrik B biasa saja. Di pasar sehat, A menjual murah (karena efisien) dan B menjual mahal — pendapatan per unit input (TFPR) mereka sama. Tapi kalau ada distorsi (misal B dapat subsidi, A kena pajak), TFPR mereka melenceng. Semakin lebar selisihnya, semakin "salah alokasi" sumber daya ekonomi itu.

### Temuan empiris

Hsieh-Klenow menunjukkan dispersi TFPR di China dan India jauh lebih besar dari US. Misallocation ini menjelaskan sekitar setengah perbedaan TFP agregat. Mereka memperlakukan wedge (distorsi) sebagai eksogen.

**Gambaranbesar**

Pertanyaan yang ditinggalkan Hsieh-Klenow, dan yang dijawab Peters: dari mana wedge ini berasal? Apa kaitan kausal antara kompetisi industri, dinamika entry-exit firm, distribusi markup, dengan growth dan TFP? Inilah misi Bab 15.

`1 5. 2 & 1 5. 2. 1`

## Bird's-Eye View: Dua Kekuatan

Survei helikopter atas logika Peters sebelum menyelam ke detail.

### Garis keturunan model

`Aghion-Grossman-` Creative destruction, quality ladder (inovasi `HowittHelpman` vertikal stokastik)

`(1992)(1991)`

`Klette-Kortum (2004)` Multi-product firm, expansion + entry

Tambah Bertrand pricing + own-innovation

`Peters (2020) ← BAB 15`

→ markup heterogen endogen

### Twist baru Peters: dua kekuatan berlawanan

**Penjelasanformal**

1. Creative destruction: entry firm baru + limit pricing berarti incumbent (awalnya) tidak bisa menetapkan markup tinggi. Firm baru berkualitas lebih tinggi menggantikan incumbent lama. Efek: mengkompres distribusi markup.
2. Own-innovation: dengan investasi mahal menurunkan marginal cost, incumbent bisa menahan masuknya pesaing dan memperlebar gap. Efek: menebalkan ekor (tail) distribusi markup. **Penjelasanintuitif**

Bayangkan persaingan lari maraton yang tak pernah selesai. Creative destruction = pelari baru yang lebih cepat terus bermunculan, menyalip yang di depan — menjaga agar tak ada yang terlalu jauh memimpin. Own-innovation = pelari yang di depan berlatih keras untuk memperlebar jarak. Bentuk akhir "sebaran jarak antar pelari" ditentukan oleh tarik-menarik kedua gaya ini.

### Mengapa model ini tractable: block-recursive

**Penjelasanformal**

Model block-recursive: bisa dipecah jadi blok yang diselesaikan berurutan.

Bagian statis: diberikan jumlah firm dan distribusi produktivitas pada satu waktu, kita turunkan limit-pricing, lalu employment, markup, profit tiap produk. Diberikan distribusi marginal, kita konstruksi agregat dan identifikasi wedge.

Bagian dinamis: pilihan dinamis firm (rate dan) tidak bergantung eksplisit pada distribusi agregat — hanya pada jumlah produk yang dimiliki dan daftar quality gap. HJB punya solusi closed-form. Rate creative destruction bergantung pada entry dan total expansion.

### Hasil utama yang akan dicapai

- Distribusi markup Pareto unik dengan tail endogen
- Aggregate TFP
- Churning intensity: tinggi → misallocation rendah, TFP tinggi, labor share tinggi
- Life-cycle: markup naik dengan umur firm (own-innovation dominan)
- Kalibrasi Indonesia: 15% dispersi TFPR dari markup → kerugian 1% TFP agregat

`1 5. 3. 1`

## Preferences (Household)

Konsumen homogen, log utility. Sederhana — tidak ada trade-off dinamis di sisi household.

### Lifetime utility (15.1)

`N OTASI PERSAMAAN INI`

Lifetime utility household

Discount rate (impatience)

Konsumsi composite good pada waktu

**Penjelasanformal**

Log utility adalah kasus khusus CRRA dengan $\sigma=1$. Ini menjamin BGP exist (preferensi homothetic dengan elastisitas substitusi intertemporal konstan = 1).

### Final good demand (15.2)

`N OTASI PERSAMAAN INI`

Total final good (numeraire)

Set firm di market

Kuantitas produk dari firm

Exercise 15.1 — Labor supply

`EXERCISE 15.1 — Easy as, mate`

Soal: Berapa labor yang disupply household secara optimal?

Jawab: (seluruh endowment).

Household tidak menghargai leisure (tidak ada disutility labor), dan wage di equilibrium. Maka tidak ada alasan menahan labor — supply seluruh endowment = 1.

Exercise 15.2 — Substitusi dalam vs antar market

`EXERCISE 15.2 — Substitutability`

Soal: Pecah (15.2) jadi dua komponen. Mengapa varietas imperfect substitutes? Mengapa firm di market sama perfect substitutes?

Dekomposisi (15.2):

**Penjelasanformal**

Antar market (imperfect): agregasi Cobb-Douglas (lewat). Sifat Cobb-Douglas: tidak bisa (karena → utility ). Konsumen butuh konsumsi positif dari setiap market. Elastisitas substitusi = 1 (terbatas) → imperfect substitutes.

Dalam market (perfect): penjumlahan linear. Output firm berbeda di market sama bersifat identik bagi konsumen. Elastisitas substitusi = → perfect substitutes.

**Penjelasanintuitif**

Antar market: roti dan obat tidak bisa saling gantikan — kamu butuh keduanya. Itu sebabnya Cobb-Douglas "memaksa" kamu beli sedikit dari semua kategori.

Dalam market: dua merek paku yang identik — kamu beli dari yang termurah, tak peduli mereknya. Karena itu firm berkompetisi habis-habisan pada harga (Bertrand).

**Koneksi**

Dua sifat ini bukan kebetulan: perfect substitution dalam market → Bertrand → limit pricing (15.3.3.1). Cobb-Douglas antar market → expenditure share konstan → sales tiap market sama (Exercise 15.5).

`1 5. 3. 2`

## Production

Firm bisa produksi banyak varietas. Teknologi linear dalam labor.

### Production function (15.3)

`N OTASI PERSAMAAN INI`

Output produk dari firm

Produktivitas firm untuk produk

Labor yang dipekerjakan

Linear dalam labor — konstan returns to scale (CRS) di level firm.

Exercise 15.3 — Demand structure

`EXERCISE 15.3 — Demand structure`

Soal: Mengapa Peters asumsi demand antar firm (di market sama) perfect substitutes? Kenyamanan modelling apa yang diberikan?

Jawab: Perfect substitution → konsumen beli dari termurah → firm MC terendah captures seluruh pasar → strategi harga jelas (limit pricing). Ini memberi closed-form pricing equilibrium dan memungkinkan analisis markup heterogen (markup = gap kualitas dengan pesaing terdekat). Tanpa asumsi ini, tiap firm punya market share positif dan pricing jadi rumit (tidak ada closed- form).

Exercise 15.4 — Marginal cost

`EXERCISE 15.4 — Micro 101`

Soal: Jelaskan dengan kata-kata mengapa MC firm di market $j$ adalah $w/q_{j}$.

**Penjelasanformal**

Untuk produksi unit, dari (15.3) butuh labor. Cost labor. Marginal cost (turunan total cost terhadap).

**Penjelasanintuitif**

$w$ = harga sejam tenaga kerja; $1/q$ = berapa jam kerja untuk membuat satu unit (kebalikan produktivitas). Kalikan: biaya membuat satu unit $=w/q$ =. Firm yang lebih produktif (tinggi) punya biaya per unit lebih rendah — bisa "membanting harga" pesaing.

`1 5. 3. 3. 1`

## Bertrand Pricing Equilibrium

Twist baru Peters. Limit pricing menghasilkan markup = gap kualitas.

### Setup: pemenang dan follower

`N OTASI BARU`

Produktivitas firm paling efisien (pemenang) di market

Produktivitas firm terefisien kedua (Follower) di market

Karena MC, firm dengan tertinggi punya MC terendah. Firm ini akan memenangkan kompetisi Bertrand.

### Proposition 15.1 — Bertrand Pricing Equilibrium

**Penjelasanformal**

Firm paling efisien (MC terendah) melayani seluruh market dan menetapkan limit price sama dengan MC firm terefisien kedua.

**Penjelasanintuitif**

Si juara tidak perlu menetapkan harga setinggi-tingginya. Ia cukup menetapkan harga sedikit di bawah biaya pesaing terdekat (follower). Pada harga itu, follower tak bisa untung kalau ikut bermain, jadi mundur — dan si juara mengambil seluruh pasar. Menetapkan harga lebih tinggi berisiko follower masuk; lebih rendah membuang profit percuma.

Limit price (15.4)

Harga = MC follower. Perhatikan ini lebih tinggi dari MC pemenang, karena. Selisih inilah sumber markup.

Markup (15.5)

**Hasilkunci**

#### Markup = rasio kualitas pemenang terhadap follower. Hanya

bergantung pada seberapa jauh pemenang unggul, bukan kualitas absolut. Gap besar → markup besar (monopoli kuat). Gap kecil → markup kecil (kompetisi ketat).

### Exercise 15.5 — Sales, Employment, Profit

`EXERCISE 15.5`

Tunjukkan untuk tiap market: (1) sales; (2) employment (15.6); (3) profit (15.7).

**Catatannuansa**

Ini masalah STATIS. Bagian 1 pakai Lagrangian statis (household pilih di satu titik waktu). Bagian 2-3 hanya aljabar substitusi. Tidak ada Hamiltonian — itu hanya untuk masalah dinamis (HJB muncul nanti di 15.3.4).

Bagian 1 — Sales equalized

#### `STEP 1` Household pilih untuk max s.t. budget `STEP 2` Lagrangian statis (multiplier = shadow price budget)

#### `STEP 3` FOC terhadap

#### `STEP 4` Pin down dari budget

(karena numeraire,)

#### `STEP 5` Hasil

**Penjelasanintuitif**

Cobb-Douglas membuat konsumen membelanjakan porsi yang sama di tiap kategori. Karena ada kontinum kategori dan total belanja, tiap market menerima pendapatan total yang sama, yaitu — terlepas dari kualitas atau markup market itu.

Bagian 2 — Employment (15.6)

#### `STEP 1` Dari production

#### `STEP 2` Substitusi (sales) dan (limit price) `STEP 3` Kenali

**Penjelasanintuitif**

adalah labor yang dibutuhkan kalau pasar kompetitif (markup = 1). Faktor adalah "rem": markup tinggi → harga tinggi → konsumen beli lebih sedikit → lebih sedikit tenaga kerja dipakai. Monopoli menekan employment.

Bagian 3 — Profit (15.7)

#### `STEP 1` Profit = revenue − cost

#### `STEP 2` Substitusi dan

**Hasilkunci**

Profit margin. Cek ekstrem: (kompetitif) → profit 0; (monopoli) → profit. Markup tinggi → profit tinggi.

`1 5. 3. 3. 2`

## Firm -level Allocations

Satu firm bisa punya banyak produk. Agregasi dari market ke firm.

`N OTASI BARU`

Set produk firm

Jumlah produk firm 

Markup firm (harmonic mean)

### Exercise 15.6 — Total employment firm

`EXERCISE 15.6`

Tunjukkan total employment firm adalah (15.8), dengan harmonic mean.

#### `STEP 1` Total labor = jumlah labor tiap produk

#### `STEP 2` Faktorkan dan rata-rata

#### `STEP 3` Definisi (harmonic mean) → hasil (15.8)

**Penjelasanformal**

adalah harmonic mean dari markup produk. Sifat. Karena (employment inversely proportional ke markup), agregasi yang natural lewat.

**Penjelasanintuitif**

Markup firm "condong" ke produk dengan markup rendah, karena produk markup rendah menyerap lebih banyak tenaga kerja (lebih banyak diproduksi). Produk yang mendominasi employment-lah yang paling menentukan markup rata-rata firm — itulah yang ditangkap harmonic mean.

### Exercise 15.7 — Variety, markups, firm size

`EXERCISE 15.7`

Firm size bergantung dua faktor: (1) jumlah produk — bagaimana? (2) markup (conditional) — bagaimana?

Linear positif.

`Efek`

Lebih banyak produk → firm lebih besar.

Inversely proportional: `Efek`. Markup tinggi → firm lebih kecil (per produk).

**Penjelasanintuitif**

Firm bisa besar karena dua alasan berbeda: (Tipe 1) punya banyak produk meski tiap produk kompetitif (markup rendah); atau (Tipe 2) punya sedikit produk tapi dengan monopoli kuat (markup tinggi). Firm besar tidak selalu bermarkup tinggi — tergantung strukturnya.

**Koneksi**

Life-cycle: firm muda (kecil, markup rendah, baru entry) → firm tua (besar via expansion, markup tinggi via own-innovation). Firm tua lebih besar dari dua kanal: extensive (naik) + intensive (naik). Sales firm selalu naik dengan.

`1 5. 3. 3. 3`

## Aggregate Allocations & Misallocation

Naik ke level ekonomi. Inti bab: dari mana wedge misallocation berasal.

`N OTASI BARU`

CDF distribusi markup across produk

CDF distribusi produktivitas across produk

Indeks produktivitas agregat:

Wedge misallocation

Labor share of income

Total labor di produksi

### Total labor produksi (15.9)

#### `STEP 1` Integrate across firm

`STEP 2` Tiap produk dimiliki tepat satu firm → integrate across produk: $L_{P}=\int_{0}^{1} l_{j}\,dj$

#### distribusi

### Exercise 15.8 — Equilibrium wage (15.10)

`EXERCISE 15.8`

Tunjukkan equilibrium wage adalah (15.10): upah berbanding lurus dengan output agregat dan berbanding terbalik dengan markup agregat.

`STEP 1` Mulai dari (15.2), Bertrand:

#### `STEP 2` Suku pertama = (definisi)

#### `STEP 3` Suku kedua: substitusi (15.6)

#### `STEP 4` Gabung — suku CANCEL di kedua sisi

#### `STEP 5` Eksponen → hasil (15.10)

**Penjelasanintuitif**

Upah = produktivitas dikali "wedge markup". Kalau markup tinggi di mana-mana, sebagian nilai yang seharusnya jadi upah malah "diambil" sebagai profit firm — sehingga upah turun.

### Output ekonomi (15.11)

#### `STEP 1` Substitusi (15.10) ke (15.9), solve

#### `STEP 2` Hasil (15.11)

**Gambaranbesar**

Aggregate TFP $=Q\times\mathcal{A}$. Dua komponen: $Q$ (produktivitas teknis) dan $\mathcal{A}$ (efisiensi alokasi). Cross-country TFP differences bisa dari $Q$ (teknologi) atau (misallocation). Hsieh-Klenow: sebagian besar dari.

### Exercise 15.9 — Mengapa

`EXERCISE 15.9`

Mengapa? Apa arti vs?

**Penjelasanformal**

Bukti via AM-GM inequality. Untuk variabel random positif: (geometric mean ≤ arithmetic mean), dengan equality iff konstan. Set:

Markup homogen (sama semua). Tidak ada misallocation. (efisien).

Markup heterogen. Ada misallocation. (di bawah frontier).

**Penjelasanintuitif**

Di pasar sehat, semua produk dihargai dekat biaya marginal → sumber daya mengalir ke tempat paling produktif. Kalau markup heterogen, produk bermarkup tinggi "terlalu mahal" → konsumen beli sedikit → tenaga kerja kurang di sana, tapi terlalu banyak di sektor markup rendah. Sumber daya salah tempat — itulah misallocation. Kuncinya bukan markup tinggi, tapi markup heterogen.

### Labor share (15.12)

**Hasilkunci**

Macro takeaway: markup tinggi → labor share rendah. Markup menaikkan profit firm (15.7) dan menekan upah (15.10). Konsisten dengan tren empiris global: labor share menurun seiring konsentrasi pasar naik.

**Catatannuansa**

Karena aggregator final good di sini Cobb-Douglas, hanya bergantung pada distribusi markup — bukan joint distribution. Dengan CES umum, bisa bergantung joint distribution (lebih rumit; Section 2.7 Peters).

`1 5. 3. 4`

## Dynamic Parts: Pengantar

Transisi besar: dari snapshot statis ke evolusi distribusi. Akhirnya HJB muncul.

**Penjelasanformal**

Sebelumnya (15.3.3) kita ambil distribusi sebagai given — snapshot pada satu waktu. Tugas sekarang: jelaskan bagaimana distribusi itu terbentuk dari pilihan dinamis firm. Karena limit pricing sudah ditentukan per-periode, firm dynamic problem hanya soal investasi (pricing otomatis dari Bertrand).

### Dua pilihan dinamis firm

`N OTASI PILIHAN DINAMIS`

Rate own-innovation di market (Poisson)

Rate expansion ke market baru (Poisson)

Rate entry firm baru

Rate creative destruction total

**Penjelasanintuitif**

"Flow rate" Poisson = seberapa sering keberhasilan muncul per satuan waktu. Tiap percobaan inovasi acak (kadang berhasil, kadang tidak), tapi dengan banyak percobaan, rate rata-ratanya pasti (law of large numbers).

### Catatan: Cannibalism (dua arah)

**Penjelasanformal**

Total rate creative destruction adalah jumlah dari rate entrant baru dan total rate expansion semua firm existing. Firm yang sedang memimpin harus memperhitungkan ancaman ini dalam optimal control-nya.

**Penjelasanintuitif**

"Kanibalisme" = saling memakan sesama. Firm existing yang memperluas wilayah memakan incumbent di market tujuan. Entrant baru juga memakan incumbent. Jadi ancaman datang dari dua arah: pendatang baru dan ekspansi firm lama. Setiap firm hidup di bawah bayang-bayang bahwa suatu saat ia bisa dikanibal — dan ia memasukkan risiko itu ke dalam perhitungannya.

`1 5. 3. 4. 1`

## Firm HJB Equation

Jantung bagian dinamis. Asset pricing dengan banyak Poisson jumps.

### Quality ladder (15.13)

`N OTASI TANGGA KUALITAS`

Anak tangga (rung) — level kualitas

Faktor lompatan tiap inovasi 

Quality gap di market 

Kualitas membentuk barisan geometrik. Naik anak tangga → kualitas.

### Exercise 15.10 — Markup agregat

`EXERCISE 15.10 — Markup and quality gap`

Verifikasi konsistensinya dengan definisi markup agregat.

#### `STEP 1` Markup dari Bertrand (15.5)

`STEP 2` Tulis kualitas dalam anak tangga,

#### `STEP 3` Definisi gap

#### `STEP 4` karena pemenang strictly ahead

Markup minimum.

**Penjelasanformal**

One-to-one mapping antara gap dan markup. Profit (15.7): — hanya bergantung. Karena itu adalah payoff-relevant statistic.

**Penjelasanintuitif**

Markup sepenuhnya ditentukan oleh "berapa anak tangga si juara unggul dari pesaing terdekat". Tidak peduli nilai kualitas absolutnya — hanya jaraknya yang penting. Ini menyederhanakan segalanya: kita cukup melacak gap (bilangan bulat), bukan kualitas absolut.

### Exercise 15.11 — Mengapa tanpa indeks

`EXERCISE 15.11 — Think`

Mengapa kita tidak pakai indeks di? Apakah identitas firm penting?

Jawab: Identitas firm tidak relevan untuk outcome market. Markup hanya bergantung pada gap antara pemenang dan follower di market — bukan siapa pemenangnya. Analogi: margin kemenangan lomba lari ditentukan selisih waktu, bukan nama pelari. Identitas firm baru relevan di level firm dynamics (, portofolio).

### Catatan: Birth-Death Process

**Penjelasanformal**

Tiga kanal pertumbuhan, semua menaikkan satu langkah ke, tapi efek berbeda pada markup:

Gap naik. Markup naik faktor

`Own-innovation `. Contra-competition.

`Expansion) / Entry` Gap reset ke 1. Markup turun ke.

`)`

`((` Pro-competition (creative destruction).

**Penjelasanintuitif**

Mengapa creative destruction mereset gap ke 1? Karena entrant masuk dengan kualitas tepat satu anak tangga di atas incumbent lama. Incumbent lama (yang tadinya jauh memimpin) kini jadi follower, dan gap pemenang-baru ke follower hanya 1 langkah. Markup "kembali ke nol" (baseline).

### Catatan: Dynamic Trade-off

**Penjelasanintuitif**

Firm menghadapi dilema. Own-innovation: investasi memperlebar gap di market yang sudah dikuasai → markup naik, "stay ahead". Expansion: masuk market baru → tapi mulai dari markup rendah, dengan harapan profit masa depan kalau bertahan. Tarik- menarik: perdalam kekuasaan di kandang sendiri, atau perluas wilayah baru?

### Exercise 15.12 — Payoff-relevant states

`EXERCISE 15.12`

Verifikasi vektor state yang cukup untuk firm: (jumlah produk) dan (daftar quality gap).

**Penjelasanformal**

Payoff: total profit — hanya bergantung (dan implisit). Dynamics: own-innovation, creative destruction (kehilangan produk), expansion (, tambah) — semua hanya butuh. Tidak butuh kualitas absolut, identitas, atau distribusi agregat (hanya given).

**Penjelasanintuitif**

Untuk tahu nilai sebuah firm, kamu hanya perlu tahu: berapa banyak produk yang ia kuasai, dan seberapa jauh ia memimpin di tiap produk. Tidak perlu tahu nama firm, tidak perlu tahu kualitas absolut, tidak perlu tahu seluruh peta ekonomi. Itu sebabnya masalahnya bisa diselesaikan closed-form.

### HJB Equation (15.14)

Inti Section 15.3.4.1. Enam term:

`Kiri:`

Total profit semua produk (dividend).

`(1) Flow profits`

`(2) Capital gain` Perubahan nilai firm seiring waktu

`(3) Creative` Expected loss (negatif): tiap produk hilang `destruction` dengan rate. Risk.

`(4) Own innovation` Gain dari gap naik (rate, pilihan)

`(5) Expansion` Gain dari produk baru gap 1 (rate, pilihan)

`(6) Cost` Cost inovasi (dalam labor) × wage

**Koneksi**

Bandingkan Bab 14: di Romer HJB hanya (asset pricing sederhana). Di Peters jauh lebih kaya: ada creative destruction (risk), own-innovation & expansion (option value), multi- product. Tetap asset pricing, tapi dengan banyak Poisson jumps.

### Exercise 15.13 — Cost units

`EXERCISE 15.13 — Trivia`

True/False: Cost function mengembalikan cost dalam unit numeraire good?

Jawab: FALSE. diukur dalam unit labor. Baru setelah dikali (lihat term (6):) ia menjadi unit numeraire. sendiri = jumlah labor untuk inovasi.

### Convex innovation cost (15.15)

`N OTASI PARAMETER COST`

Cost shifter own-innovation Cost shifter expansion

Eksponen convex 

**Penjelasanformal**

membuat cost convex dalam rate → marginal cost naik → firm tak pilih rate tak terbatas → solusi interior unik. Karena payoff (gain) linear dalam dan cost convex, max (linear − convex) → FOC interior unik → closed-form.

Faktor: firm dengan gap lebih besar menghadapi cost own- innovation lebih rendah.

**Penjelasanintuitif**

Faktor menangkap "success breeds success" — pemimpin teknologi (gap besar) lebih mudah berinovasi lagi karena sudah punya know-how dan infrastruktur riset. Akibatnya pemimpin terus menjauh → ekor distribusi markup menebal (ini kanal own- innovation yang menebalkan tail).

`1 5. 3. 4. 2`

## Free Entry

Menentukan rate entry firm baru secara endogen.

`N OTASI BARU`

Produktivitas teknologi entry (labor → ide)

Nilai firm entrant baru 

### State entrant & teknologi

**Penjelasanformal**

State entrant baru: (satu produk), (gap satu langkah, karena masuk dengan kualitas incumbent lama). Teknologi entry linear: 1 unit labor → ide. Untuk 1 unit rate entry butuh labor; cost (numeraire).

### Free entry condition (15.16)

**Penjelasanformal**

Complementary slackness: jika → tidak ada entry; jika → benefit = cost. Asumsi kasus menarik → binding.

**Penjelasanintuitif**

Orang akan terus membuka firm baru selama nilai firm melebihi biaya membukanya. Entry berlanjut sampai keuntungan habis — nilai = biaya. Ini "zero excess profit" dari pintu masuk.

### Creative destruction rate (15.17)

**Penjelasanformal**

Total rate incumbent kehilangan market = entry baru + total expansion firm existing. Kedua sumber menggusur incumbent. Catatan: muncul di HJB tiap firm, tapi sendiri terdiri dari keputusan agregat — ini fixed point yang konsisten di BGP.

### Exercise 15.14 — Labor market clearing

`EXERCISE 15.14`

Jelaskan dengan kata-kata accounting condition labor market clearing.

**Penjelasanformal**

Sisi kiri: total supply labor = 1 (Exercise 15.1, measure-one household). Sisi kanan: demand = produksi + riset. tiga komponen: entry (linear), expansion (convex), own-innovation (convex + diskon leader).

**Penjelasanintuitif**

Seluruh tenaga kerja ekonomi (= 1) dibagi dua: membuat barang hari ini atau berinovasi untuk masa depan. Lebih banyak ke riset → growth lebih cepat, tapi output sekarang lebih sedikit. Ini trade-off konsumsi-vs-pertumbuhan di level seluruh ekonomi.

`1 5. 3. 5`

## Balanced-Growth Equilibrium

Merangkai semua. Proposition 15.2: equilibrium stasioner unik dengan closed-form.

### Apa itu stationary equilibrium

**Penjelasanformal**

Di BGP: rate inovasi konstan, distribusi markup stasioner, wedge konstan, semua variabel agregat tumbuh rate sama.

### Proposition 15.2 — Unique Stationary Equilibrium

**Penjelasanformal**

Asumsi parameter.

Asumsi ini (cukup besar) menjamin nilai firm finite — kalau terlalu kecil, firm bisa expand tanpa batas dengan return tinggi sehingga nilai meledak. Analog syarat di RCK.

Properti 1 — Value function (15.18)

**Penjelasanformal**

Additive separable: nilai firm = kali nilai baseline per produk + jumlah premium markup tiap produk. Inilah yang membuat closed-form.

### Exercise 15.16 — Interpretasi dan

`EXERCISE 15.16`

Interpretasikan dan.

Nilai "memiliki satu produk" baseline (gap 1). `(Product value)` Profit baseline + bonus opsi expansion. Discount.

Nilai tambahan dari gap. Extra profit `(Markup value)` + bonus opsi own-innovation. Naik seiring lebar gap kualitas.

**Penjelasanformal**

Discount efektif: firm mendiskon future dengan impatience PLUS hazard kanibalisme. Seperti asset pricing dengan default risk: discount = rate + hazard.

**Penjelasanintuitif**

= "harga dasar" punya satu produk (di level pemula, gap 1). = "premium" karena unggul jauh — semakin besar lead, semakin besar premium. Total nilai firm = (banyaknya produk × harga dasar) + (jumlah premium dari tiap lead). Persis dua dimensi firm size: extensive (berapa produk) + intensive (seberapa unggul).

### Exercise 15.15 — Derive value function (guess-and- verify)

`EXERCISE 15.15 — For the keen student`

Derive value function lewat guess-and-verify.

#### `STEP 1` Tebak additive separable

Masuk akal: profit additive, creative destruction hit tiap produk independen, keputusan per-produk.

#### `STEP 2` Hitung selisih nilai tiap jump

Creative destruction (kehilangan produk).

Own-innovation. Expansion.

#### `STEP 3` Substitusi ke HJB, pisahkan per-komponen

Karena semua additive, HJB terpecah jadi persamaan untuk (baseline) dan (premium) secara terpisah.

#### `STEP 4` Solve & verify

Menghasilkan formula (15.18). Substitusi balik konfirmasi memenuhi HJB. Bekerja karena struktur HJB linear dalam komponen value (cocok dengan additive profit + independent jumps).

Properti 2 — Optimal investments (15.19, 15.20)

Expansion rate (15.19):

#### `STEP 1` FOC expansion: marginal value = marginal cost

#### `STEP 2` Free entry: produk baru (gap 1) = nilai entrant

#### `STEP 3` Samakan, solve

**Hasilkunci**

konstan, ditentukan parameter saja! Karena expand ke market baru memberi produk gap 1 — persis sama dengan yang didapat entrant — free entry menyamakan nilainya ke, membuat FOC expansion independen dari kondisi agregat.

Own-innovation rate (15.20):

**Penjelasanformal**

Implicit (di kedua sisi). Tergantung (kondisi agregat) — beda dari. Faktor = incremental gain naik satu gap.

### Exercise 15.17 — Interpretasi, dan

`EXERCISE 15.17`

Interpretasikan behavior dan. Apa artinya untuk?

Konstan, parameter saja. Tergantung rasio `(expansion)`: expand vs entry. Stabil, tak terpengaruh agregat.

Tergantung agregat dan. Profit

`(own-innovation)`

tinggi → naik; impatient/risky → turun.

TIDAK masuk (own-innovation tidak gusur firm lain). Hanya dan.

**Koneksi**

Churning intensity menangkap dua kekuatan: creative destruction (, kompres) vs own-innovation (, fatten). Rasio ini menentukan bentuk distribusi markup (Proposition 15.3).

Properti 4 — Growth rate (15.21)

**Penjelasanintuitif**

Produktivitas agregat naik setiap kali ada inovasi dari salah satu dari tiga kanal. Tiap inovasi mengalikan kualitas dengan faktor $\lambda>1$ → menyumbang ke pertumbuhan. Total rate inovasi =. Maka growth = (total inovasi).

`1 5. 3. 5. 1 ★ P E N T I N G U N T U K F I N A L`

## Distribusi Markup Pareto

Klimaks bab. Dari flow accounting ke Pareto. Tipe soal ini sering muncul di final.

`N OTASI BARU`

Measure produk dengan quality gap

Churning intensity

Shape parameter Pareto

### Sistem ODE distribusi gap

### Exercise 15.18 — Flow accounting

`EXERCISE 15.18 — Expliquez`

Jelaskan accounting process yang menghasilkan sistem ODE.

**Penjelasanintuitif**

Bayangkan tiap gap sebagai "kotak". Produk mengalir masuk dan keluar. Laju perubahan isi kotak = inflow − outflow. Dua gerakan: own-innovation menaikkan gap satu tingkat; creative destruction mereset gap ke 1.

**Penjelasanformal**

Gap: Inflow = semua produk di gap yang dikanibal (reset ke 1). Outflow = produk gap 1 yang naik via own-innovation. (Creative destruction pada gap-1 tetap di gap 1, bukan flow.)

Gap: Inflow = produk gap naik via own- innovation. Outflow = naik via own-innovation ATAU reset via creative destruction.

### Derivasi distribusi stasioner (langkah Exercise 15.20)

`STEP 1` Impose stationarity:

#### `STEP 2` Solve

#### `STEP 3` Solve recursively

Definisi. Maka.

#### `STEP 4` Distribusi geometrik

(Cek: ✓)

#### `STEP 5` CDF atas gap

`STEP 6` Change of variable ke markup,

`STEP 7` Sederhanakan,


#### `STEP 8` Distribusi Pareto

**Penjelasanintuitif**

Mengapa geometrik menjadi Pareto? Karena markup adalah transformasi eksponensial dari gap. Distribusi geometrik (exponential decay dalam) + transformasi log = Pareto (power law dalam). Hubungan matematis fundamental: exponential of geometric = power law.

### Proposition 15.3

**Penjelasanformal**

Definisikan,. Maka:

1. Distribusi markup stasioner: (Pareto).
2. Misallocation & labor share,.

### Derivasi dan (sering di final)

Density Pareto,.

#### `STEP 1` Labor share

#### `STEP 2` via substitusi

#### `STEP 3` Misallocation

### Exercise 15.19 — Comparative statics

`EXERCISE 15.19`

Bagaimana lebih tinggi mempengaruhi (1) Pareto tail, (2) misallocation?

#### `STEP 1` naik → naik

#### `STEP 2` naik → tail tipis

Tail turun lebih cepat → sedikit firm markup tinggi.

#### `STEP 3` naik → naik (less misallocation): (no misallocation). Juga naik.

**Hasilkunci**

#### Churning tinggi → misallocation rendah → TFP tinggi → labor

share tinggi. Banyak creative destruction relatif own-innovation → markup terkompres (homogen) → less heterogeneity → less misallocation.

**Penjelasanintuitif**

Ekonomi yang "churning" tinggi (banyak pendatang baru menggusur incumbent) menjaga agar tak ada firm yang terlalu lama menikmati monopoli besar. Markup tetap seragam dan rendah → sumber daya teralokasi efisien. Sebaliknya, ekonomi dengan incumbent yang mengakar (own-innovation dominan, sedikit gangguan) membiarkan markup tumbuh heterogen → misallocation besar.

### Exercise 15.20 — Langkah derivasi (flow → distribution)

`EXERCISE 15.20 — Deriving the markups distribution`

Jelaskan langkah logis dari flow accounting ke.

**Penjelasanformal**

Enam langkah: (1) flow accounting ODE untuk; (2) impose stationarity; (3) solve; (4) solve recursive → geometrik; (5) CDF gap; (6) change of variable + definisi → Pareto.

**Gambaranbesar**

Jawaban atas misteri Hsieh-Klenow: misallocation TIDAK perlu diasumsikan eksogen. Ia muncul endogen dari dinamika kompetisi — keseimbangan antara creative destruction dan own-innovation, diringkas oleh churning. Inilah kontribusi Peters.

✦ ✦ ✦

**Sintesis**

## Benang Merah Bab 15

Bagaimana semua bagian terhubung.

Bertrand → markup → sales, `Static (15.3.3)` employment, profit per market → agregat → wedge. Tools: Lagrangian statis + aljabar.

HJB firm (multi-jump asset pricing) → pilih. `Dynamic (15.3.4)` Free entry →. Tools: HJB + complementary slackness.

Closed-form value function, konstan `BGP (15.3.5)` (parameter), tergantung agregat. Growth.

Flow accounting → geometrik gap → Pareto `Distribution(15.3.5.1)` markup. Churning menentukan.

### Tiga rumus yang WAJIB hafal untuk final

**Hasilkunci**

### Peters vs Romer (Bab 14)

`Inovasi`

Romer: identik, markup konstan. Peters:

`Firm`

heterogen, markup Pareto.

KEDUANYA: private CRS, aggregate IRS.

`Returns to scale`

Sumber IRS: (Romer) vs (Peters).

`Replacement/business-` Romer: tidak relevan. Peters: AKTIF (creative `stealing` destruction).

Romer: tidak ada (markup homogen). Peters:

`Misallocation`

dari markup heterogen.

**Checklist**

## Self-Assessment Bab 15

Cek pemahaman sebelum final 6 Juni.

### Konteks & setup

- ☐ Hsieh-Klenow: TFP cross-country dari misallocation, diukur dispersi TFPR
- ☐ Dua kekuatan: creative destruction (kompres) vs own-innovation (fatten)
- ☐ Block-recursive → tractable closed-form
- ☐ Ex 15.1: labor supply = 1
- ☐ Ex 15.2: Cobb-Douglas antar market (imperfect), linear dalam market (perfect)
- ☐ Ex 15.3-15.4: perfect substitution → limit pricing; MC $=w/q$

### Static (Bertrand & agregat)

- ☐ Limit price (15.4); markup (15.5):
- ☐ Ex 15.5: sales (Lagrangian statis), employment (15.6), profit (15.7)
- ☐ Ex 15.6: harmonic mean; Ex 15.7: firm size dua kanal
- ☐ Ex 15.8: wage (15.10) derivasi log aggregation
- ☐ Output (15.11); Ex 15.9: via AM-GM
- ☐ Labor share (15.12):

### Dynamic (HJB & free entry)

- ☐ Quality ladder (15.13); Ex 15.10:
- ☐ Ex 15.11: identitas tidak relevan (hanya gap)
- ☐ Birth-death: own-innov (gap+1) vs creative destruction (reset 1)
- ☐ Ex 15.12: state cukup
- ☐ HJB (15.14) enam term; Ex 15.13: dalam labor (FALSE numeraire)
- ☐ Convex cost (15.15): closed-form, leader murah
- ☐ Free entry (15.16):
- ☐ Creative destruction (15.17):
- ☐ Ex 15.14: labor clearing

### BGP & distribusi (★ final)

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

✦ Selamat menempuh final 6 Juni ✦
