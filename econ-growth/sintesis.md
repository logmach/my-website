# Sintesis Lintas Bab

Bagaimana satu pertanyaan tumbuh menjadi seluruh teori pertumbuhan

### Mengapa halaman ini ada

Review per-bab menjawab "apa isi tiap bab". Dokumen ini menjawab pertanyaan yang lebih besar: bagaimana bab-bab saling terhubung dan berkembang.

Kursus ini bukan kumpulan topik terpisah. Ia adalah satu argumen panjang — satu pertanyaan yang dijawab makin dalam, bab demi bab. Tiap model baru lahir dari keterbatasan model sebelumnya.

Karena itu dokumen ini disusun bukan per-bab, tapi per-benang merah (through-line). Tiap benang dilacak perkembangannya: Solow → RCK → Romer → Peters. Tujuannya agar kamu melihat arsitektur-nya, bukan sekadar potongan-potongan.

Struktur: (1) Busur utama — alur besar kursus; (2) Ketegangan sentral — diminishing returns vs sustained growth; (3) Delapan benang merah; (4) Tabel perbandingan besar; (5) Jembatan konseptual; (6) Tangga tools matematis; (7) Lingkaran yang tertutup.

**Bagian1**

## Busur Utama Kursus

Satu pertanyaan, dijawab makin dalam. Inilah tulang punggung naratif.

**Gambaranbesar**

Pertanyaan induk: Mengapa sebagian negara jauh lebih kaya dari yang lain, dan apa yang membuat pertumbuhan standar hidup bisa berkelanjutan?

Seluruh kursus adalah upaya menjawab ini dengan presisi yang terus bertambah. Tiap tahap menambahkan satu lapis jawaban.

### Tujuh tahap perkembangan

`BAB 1-2 · MOTIVATION`

#### Menetapkan fakta & pertanyaan

Ketimpangan pendapatan antar negara sangat besar. Fakta Kaldor (rate pertumbuhan & rasio modal-output kira-kira stabil). Menambahkan: pertanyaan yang harus dijawab.

↓

`BAB 3-8 · TOOLS I (ODE)`

#### Membangun bahasa dinamika

Pertumbuhan = bagaimana sesuatu berubah terhadap waktu → persamaan diferensial. Steady state, stabilitas, eigenvalue, phase diagram. Menambahkan: tata bahasa sebelum kalimat.

↓

`BAB 9-10 · SOLOW-SWAN`

#### Model pertama: akumulasi modal

Modal dengan diminishing returns. Temuan kunci: modal saja tak bisa menopang pertumbuhan (diminishing returns → konvergensi). Pertumbuhan harus dari teknologi yang eksogen. Growth accounting: TFP adalah residual besar penjelas perbedaan antar negara — tapi adalah kotak hitam.

↓

`BAB 11 · TOOLS II (OPTIMAL CONTROL)`

#### Alat baru: pilihan antarwaktu

Solow mengasumsikan saving konstan. Tapi saving adalah pilihan. Untuk memodelkan pilihan sepanjang waktu, butuh optimal control (Hamiltonian, Pontryagin, adjoint, TVC). Menambahkan: tata bahasa untuk model berikutnya.

↓

`BAB 12-13 · RCK`

#### Endogenkan saving

Saving dari optimisasi household (Euler equation). First Welfare Theorem berlaku → kompetitif = planner. Tapi pertumbuhan masih eksogen (masih kotak hitam). Dinamika saddle path. Menambahkan: fondasi mikro untuk saving, tapi belum membuka kotak hitam.

↓

`BAB 14 · ROMER / LAB EQUIPMENT`

#### Membuka kotak hitam

Teknologi = variety, diproduksi lewat R&D yang disengaja. Kunci: ide non-rival → aggregate IRS → butuh monopoli untuk mendanai R&D → First Welfare gagal. Pertumbuhan jadi endogen. Kebijakan matters. Menambahkan: asal-usul pertumbuhan itu sendiri.

↓

`BAB 15 · PETERS / SCHUMPETERIAN`

#### Firm heterogen & misallocation

Teknologi = kualitas, tapi firm heterogen. Markup bervariasi → wedge misallocation. Aggregate TFP. Ini menghubungkan kembali ke residual TFP Bab 10: sebagian perbedaan TFP adalah misallocation, yang endogen terhadap dinamika kompetisi. Menambahkan: menutup lingkaran — menjawab residual TFP dari Bab 10.

**Gambaranbesar**

Bentuk besarnya adalah lingkaran yang tertutup: residual TFP (Bab 10) → kotak hitam → dibuka sebagai variety/quality endogen (Bab 14-15) → dengan misallocation sebagai komponen endogen (Bab 15) yang menjelaskan sebagian perbedaan TFP awal. Kursus berakhir dengan menjawab pertanyaan yang ia angkat di tengah.

HTMLEOF echo "done"

**Bagian2**

## Ketegangan Sentral

Satu ide menyatukan seluruh kursus: diminishing returns adalah musuh pertumbuhan berkelanjutan.

Kalau kamu hanya boleh membawa satu ide dari kursus ini, bawalah ini. Hampir setiap model bergulat dengan satu masalah sama: bagaimana lolos dari

#### diminishing returns?

Solow:f(k)cekung

→pertumbuhanberhenti

output(y)

Endogen:linear(AK/AN)

→pertumbuhanlanggeng

modal/akumulasiinput(k)

Inti seluruh kursus dalam satu gambar: kurva cekung (diminishing returns) memaksa pertumbuhan berhenti; garis lurus (linearitas dari ide non-rival) membuat pertumbuhan berkelanjutan.

### Bagaimana tiap model menghadapinya

`Solow / RCKRomerPeters`

`TAK BISA LOLOSLOLOS via VARIETYLOLOS via QUALITY`

Diminishing returns keMarginal product Kualitas naik tanpa modal. Marginaltidak ke nol karena batas lewat quality product turun saat tumbuh lewat varietasladder (tiap naik → akumulasi modalbaru (naik), bukaninovasi). Ide non-rival mentok. Pertumbuhanmenumpuk varietas→ tiap perbaikan jangka panjang haruslama. Tiap varietas =kualitas dipakai "diimpor" dari eksogen.dimensi baru. Linearitasselamanya. Linearitas ..

`M E N G A P A (F O R M A L)`

Diminishing returns berasal dari konkavitas fungsi produksi terhadap faktor yang dapat diakumulasi. Jika, maka saat → tidak ada insentif akumulasi lebih → steady state. Endogenous growth menghindari ini dengan membuat agregat linear dalam faktor yang tumbuh (efektif), bersumber dari non-rivalry ide.

`M E N G A P A (I N T U I T I F)`

Bayangkan menambah pupuk ke sebidang tanah. Sendok pupuk ke-100 hampir tak menambah panen — itu diminishing returns (Solow). Tapi kalau alih-alih menumpuk pupuk, kamu menemukan jenis tanaman baru yang lebih produktif, dan resep itu bisa dipakai semua petani selamanya tanpa habis — itulah ide non-rival yang membuat pertumbuhan tak pernah mentok (endogenous growth).

**Bagian3**

## Delapan Benang Merah

Tiap benang adalah satu konsep yang dilacak perkembangannya melintasi keempat model.

### Benang 1 — Perlakuan terhadap Teknologi

"Apa itu teknologi, dan dari mana asalnya?" — pertanyaan ini berpindah dari asumsi ke penjelasan.

`SolowRCKRomerPeters`

`EKSOGENEKSOGENENDOGEN (variety)ENDOGEN (quality)`

tumbuh rate tetap.. (diasumsikan). eksogen,.dari quality Kotak hitam.sama. RCKPertumbuhan dariladder, dari mengubahekspansi varietas.dispersi markup. saving, bukan teknologi.

`M E N G A P A (I N T U I T I F)`

Ini benang paling penting. Solow & RCK berkata "teknologi maju entah bagaimana, mari hitung konsekuensinya". Romer & Peters berkata "mari jelaskan mengapa teknologi maju" — dengan memodelkan keputusan R&D yang disengaja. Dari deskripsi ke penjelasan.

### Benang 2 — Perlakuan terhadap Saving / Investasi

Dari aturan mekanis → pilihan optimal antarwaktu → pilihan R&D.

`SolowRCKRomer / Peters`

`KONSTANOPTIMAL (konsumsi)OPTIMAL (R&D)`

Saving rate Household pilih viaPilih investasi R&D (, eksogen, tetap.OCP. Euler equation atau). Free entry Mekanis — tidak ada. Savingcondition menentukan yang "memilih".endogen.rate inovasi.

**Koneksi**

Perhatikan: Bab 11 (Optimal Control) ada justru karena benang ini. Untuk pindah dari "saving konstan" (Solow) ke "saving optimal" (RCK), kita butuh tools baru untuk optimisasi sepanjang waktu. Tools mendahului model.

### Benang 3 — Returns to Scale

Dari CRS neoklasik murni → private CRS tapi aggregate IRS (sumber: ide non-rival).

`Solow / RCKRomerPeters`

`CRS neoklasikCRS privat, IRS agregatCRS privat, IRS agregat`

CRS dalam.Firm: CRS dalam.Struktur SAMA. Firm: Diminishing returns ke Ekonomi: IRS dalam linear dalam labor (CRS). saja. Konveksitas karena non-Ekonomi: IRS dalam terjaga.rival. Sumber: variety.. Sumber: quality.

`M E N G A P A (F O R M A L)`

Pergeseran ini adalah poros teknis yang menyebabkan dua konsekuensi besar (lihat Benang 5): aggregate IRS melanggar konveksitas → First Welfare Theorem gagal; dan linearitas agregat → pertumbuhan berkelanjutan tanpa transition dynamics (Benang 4). Satu perubahan struktural, banyak akibat.

`M E N G A P A (I N T U I T I F)`

Kunci pemahamannya: ini bukan "satu varietas vs semua varietas", tapi (atau) given (sudut pandang firm) vs endogen (sudut pandang ekonomi). Firm berperilaku biasa (CRS); tapi ketika ekonomi tumbuh, stok ide ikut tumbuh dan dipakai semua orang — itulah bonus non-rival yang menghasilkan IRS agregat.

### Benang 4 — Transition Dynamics

Dari konvergensi bertahap → saddle path → tak ada transisi (langsung BGP).

`SolowRCKRomer / Peters`

`KONVERGENSISADDLE PATHTANPA TRANSISI`

Dari, konvergenDari, ekonomi konstan dari → bertahap ke.bergerak sepanjanglangsung di BGP. Struktur Digerakkanstable arm ke.linear (AK-style), tak ada diminishing returns.Jump ke saddle path.konvergensi.

**Koneksi**

Benang ini adalah akibat langsung dari Benang 3. Diminishing returns (Solow/RCK) menciptakan transisi (konvergensi bertahap saat marginal product berubah). Linearitas (endogenous) menghapus transisi — tidak ada "tempat istirahat" yang didekati, ekonomi langsung tumbuh seimbang. Kelemahannya: model endogen tak menangkap konvergensi empiris (negara miskin catch- up).

### Benang 5 — Welfare & Peran Kebijakan

Dari deskriptif (tanpa welfare) → First Welfare berlaku → First Welfare gagal → ruang kebijakan.

`SolowRCKRomerPeters`

`DESKRIPTIFEFISIENGAGAL → 2 instrumenMISALLOCATION`

Tidak adaFirst Welfare First Welfare gagalWedge optimisasi.berlaku.(aggregate IRS +dari markup MurniKompetitif =monopoli +heterogen. deskriptif. Takplanner. Takappropriability). DuaInefisiensi adaada ruangdistorsi (intensive/alokasi. pernyataankebijakanextensive) → duaKebijakan bisa welfare.(pada growth).subsidi (Tinbergen).kurangi dispersi markup.

`M E N G A P A (F O R M A L)`

First Welfare Theorem butuh: pasar lengkap, kompetitif, konveksitas. RCK memenuhi semua → efisien. Romer melanggar konveksitas (aggregate IRS) DAN kompetitif (monopoli) → gagal. Inilah mengapa kebijakan tiba-tiba "matters" mulai Bab 14 — bukan karena selera, tapi karena teorema fundamental tak lagi berlaku.

`M E N G A P A (I N T U I T I F)`

Di RCK, "tangan tak terlihat" bekerja sempurna — pasar sudah optimal, pemerintah tak bisa memperbaiki. Mulai Romer, tangan tak terlihat pincang: inovator tak menangkap seluruh manfaat sosial inovasinya (appropriability), dan monopoli menetapkan harga terlalu tinggi. Maka ada pekerjaan untuk kebijakan — subsidi R&D dan subsidi input.

### Benang 6 — Struktur Pasar

Dari kompetisi sempurna → kompetisi monopolistik (markup konstan) → Bertrand (markup heterogen).

`Solow / RCKRomerPeters`

`KOMPETISI SEMPURNAMONOPOLISTIKBERTRAND / limit pricing`

Harga = MC.Tiap firm intermediateMarkup heterogen Zero profit. Takmonopoli atas varietasnya.(gap kualitas). Distribusi ada marketMarkup konstan (darimarkup (Pareto). power.CES).

**Koneksi**

Mengapa struktur pasar harus berubah? Karena Benang 1 menuntutnya. Untuk mendanai fixed cost R&D (Benang 1: teknologi endogen), firm butuh profit — mustahil di kompetisi sempurna (zero profit). Maka market power (monopoli/Bertrand) bukan tambahan kosmetik, melainkan syarat logis agar inovasi berbayar. Insight Romer ke-3.

### Benang 7 — Tools Matematis

Tiga lapis alat, masing-masing untuk jenis pertanyaan berbeda.

`Bab 14-15 (HJB / Asset` `Bab 3-8 (ODE)Bab 11 (Optimal Control)` `Pricing)`

`BAHASA DINAMIKAPILIHAN ANTARWAKTUVALUASI`

Persamaan diferensial.Hamiltonian, (asset Steady state, stabilitas,Pontryagin, adjoint,pricing). Nilai firm eigenvalue, phase diagram.TVC. Untuk memilihsebagai PV aliran Mendeskripsikan bagaimanajalur optimalprofit. Peters: HJB sistem bergerak.sepanjang waktudengan banyak (household).Poisson jumps.

`M E N G A P A (I N T U I T I F)`

Pola yang berulang: tools selalu mendahului model yang membutuhkannya. ODE (Bab 3-8) sebelum Solow. Optimal control (Bab 11) sebelum RCK. Ini bukan kebetulan kurikulum — tiap model baru menuntut alat baru, jadi alat diajarkan tepat sebelum dipakai.

### Benang 8 — Tiga "Objek Nilai" (yang sering membingungkan)

Lagrangian statis vs Hamiltonian dinamis vs HJB — kapan pakai yang mana.

`Lagrangian (statis)Hamiltonian (dinamis)HJB / Asset Pricing`

`ALOKASI SATU PERIODEOCP HOUSEHOLDVALUASI FIRM`

Konsumen pilih; firmHousehold pilih.Nilai firm. Discount cost-min. Multiplier =Adjoint = shadow price(pasar). Tak ada shadow price dalamstate (assets). Discount adjoint — value periode. Tak ada state(subjektif). Statelangsung. berevolusi.berevolusi:.. Contoh: Romer 14.4,Contoh: RCK 12.4,Contoh: Romer 14.7, Peters 15.5 (sales).Romer 14.1.Peters 15.14 (HJB).

`M E N G A P A (F O R M A L)`

Aturan praktis memilih: Ada state yang berevolusi sepanjang waktu DAN trade-off antarwaktu? → Hamiltonian/HJB (dinamis). Hanya alokasi pada satu titik waktu (antar barang/input)? → Lagrangian statis. Firm yang dinilai sebagai aset (problem pricing- nya statis per-periode)? → HJB asset pricing dengan discount pasar , bukan.

`M E N G A P A (I N T U I T I F)`

Kebingungan umum: ketiganya pakai "multiplier" dan FOC, jadi terlihat mirip. Bedanya: Lagrangian menjawab "bagaimana membagi anggaran sekarang"; Hamiltonian menjawab "bagaimana menyeimbangkan sekarang vs nanti"; HJB menjawab "berapa nilai aset yang menghasilkan aliran kas". Household menabung lintas waktu (Hamiltonian, pakai); firm dihargai pasar (HJB, pakai).

**Bagian4**

## Tabel Perbandingan Besar

Keempat model berdampingan di banyak dimensi. Lembar rujukan cepat.

`DimensiSolowRCKRomerPeters`

`Bab` 9-1012-131415

`Saving` Konstan OptimalOptimal R&DOptimal R&D (Euler)

`Teknologi` Eksogen Eksogen Endogen Endogen

`Growth` Eksogen Eksogen EndogenEndogen

`Returns` CRSCRSPrivat CRS,Privat CRS, agregat IRSagregat IRS

`Pasar` Komp.Komp.MonopolistikBertrand sempurnasempurna

`Markup` 1 (=MC)1 (=MC) konstan heterogen

`Transisi` KonvergensiSaddle pathTak adaTak ada

`First Welfare` —BerlakuGagalGagal

`Policy →` TidakTidakYaYa

`growth`

`Misallocation` ——Tidak ada

`Tools utama` ODEHamiltonianHJB assetHJB multi-jump pricing

`Growth rate` (given) (given)

`M E N G A P A (I N T U I T I F)`

Baca tabel ini secara kolom (satu model) untuk mengingat profil tiap model; baca secara baris (satu dimensi) untuk melihat perkembangan suatu konsep — itulah benang merah. Kemampuan membaca baris adalah yang diuji soal sintesis.

**Bagian5**

## Jembatan Konseptual

Momen-momen perkembangan: bagaimana keterbatasan satu model melahirkan model berikutnya.

Tiap model baru bukan muncul sembarangan — ia lahir untuk mengatasi keterbatasan pendahulunya. Inilah lima jembatan yang menggerakkan kursus.

**Jembatankonseptual**

Dari Solow:

"Modal saja tak cukup." Solow menunjukkan diminishing returns ke modal → pertumbuhan jangka panjang harus dari. Tapi eksogen — tak dijelaskan. Ini menanam dua benih: (a) saving sebaiknya pilihan, bukan konstan → RCK; (b) sebaiknya dijelaskan → endogenous growth.

**Jembatankonseptual**

Solow → RCK:

"Saving adalah pilihan, bukan parameter." Solow mengasumsikan konstan secara ad-hoc. Tapi rumah tangga sungguhan memilih berapa menabung dengan menimbang konsumsi sekarang vs nanti. Untuk memodelkan ini, butuh optimal control (Bab 11) → RCK dengan Euler equation. Hasil mengejutkan: meski saving kini optimal, pertumbuhan jangka panjang tetap eksogen.

**Jembatankonseptual**

RCK → Romer:

"Buka kotak hitam." RCK menyempurnakan saving tapi masih misterius. Romer bertanya: dari mana teknologi? Jawab: dari R&D yang disengaja, menghasilkan ide non-rival. Ini memaksa tiga perubahan terkait — IRS agregat, market power, kegagalan First Welfare. Pertumbuhan akhirnya endogen.

**Jembatankonseptual**

Romer → Peters:

"Firm sungguhan heterogen." Romer mengasumsikan firm identik dengan markup konstan. Tapi data menunjukkan markup sangat bervariasi antar firm. Peters memodelkan heterogenitas ini lewat Bertrand + own-innovation → distribusi markup endogen → dan ini melahirkan konsep baru: misallocation.

**Jembatankonseptual**

Peters → kembali ke Bab 10:

"Misallocation menjelaskan residual TFP." Bab 10 menemukan TFP sebagai residual besar tapi tak terjelaskan. Peters menunjukkan sebagian residual itu adalah misallocation (), yang endogen terhadap dinamika kompetisi. Pertanyaan dari tengah kursus dijawab di akhir. Lingkaran tertutup.

**Bagian6**

## Lingkaran yang Tertutup

Bagaimana akhir kursus menjawab pertanyaan dari tengahnya.

Bab10:TFPresidual

besar,takterjelaskan

MisallocationMKotakhitamA

(Bab15)"entahbagaimana"

Bab14-15:endogen varietyN,qualityQ

Residual TFP (Bab 10) → diperlakukan sebagai kotak hitam → dibuka jadi pertumbuhan endogen (Bab 14-15) → yang mengungkap misallocation sebagai komponen TFP → menjelaskan kembali residual awal.

**Gambaranbesar**

Inilah keindahan arsitektur kursus. Ia tidak berakhir di sembarang tempat — ia kembali ke awal dengan jawaban. Pertanyaan "mengapa TFP berbeda?" yang diangkat saat growth accounting (Bab 10) akhirnya dijawab: sebagian karena teknologi (), sebagian karena seberapa efisien teknologi itu dialokasikan () — dan keduanya kini punya penjelasan endogen, bukan asumsi.

**Bagian7**

## Cara Memakai Peta Ini untuk Final

Soal sintesis menguji baris, bukan kolom.

### Tipe pertanyaan sintesis yang mungkin muncul

- Bandingkan BGP di Solow, RCK, endogenous → pakai Benang 2, 4 + tabel besar.
- Mengapa First Welfare gagal di Bab 14 tapi berlaku di Bab 12? → Benang 5 (konveksitas + monopoli).
- Mengapa endogenous growth butuh market power? → Benang 6 + jembatan RCK→Romer (fixed cost R&D butuh profit).
- Apa peran ide non-rival? → Benang 3 (sumber IRS agregat) + ketegangan sentral (lolos diminishing returns).
- Kapan pakai Hamiltonian vs Lagrangian vs HJB? → Benang 8.
- Bagaimana misallocation berhubungan dengan TFP? → Bagian 6 (lingkaran tertutup).

**Koneksi**

Strategi menjawab soal sintesis: (1) identifikasi benang merah mana yang ditanya; (2) lacak perkembangannya dari model awal ke akhir; (3) jelaskan mengapa ia berkembang demikian (keterbatasan apa yang diatasi — pakai jembatan konseptual). Jawaban yang bagus tidak hanya menyebut perbedaan, tapi menjelaskan logika perkembangannya.

### Tiga kalimat yang merangkum seluruh kursus

**Gambaranbesar**

1. Modal saja tak bisa menopang pertumbuhan karena diminishing returns (Solow); pertumbuhan berkelanjutan butuh sesuatu yang lolos dari konkavitas.
2. Ide bersifat non-rival → menghasilkan returns to scale meningkat di tingkat agregat → memungkinkan pertumbuhan endogen, tapi mengharuskan market power dan membuat pasar tak lagi efisien (Romer).
3. Ketika firm heterogen, dispersi markup menciptakan misallocation — sebuah komponen endogen dari TFP yang menjelaskan sebagian perbedaan kemakmuran antar negara (Peters), menjawab teka-teki yang diangkat growth accounting.

✦ ✦ ✦

#### Peta Sintesis Lintas Bab — Economic Growth Economic Growth

Dari pertanyaan, ke tools, ke model, ke jawaban yang menutup lingkaran

✦ Lihat hutan, bukan hanya pohon ✦
