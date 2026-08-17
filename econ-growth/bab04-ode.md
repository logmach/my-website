# Bab 4 — ODE: Apa itu Solusi

Bab ini meletakkan fondasi paling dasar dari seluruh perangkat matematis teori pertumbuhan: apa sebenarnya arti *solusi* sebuah ODE (persamaan diferensial biasa). Pendekatannya *verification-based* — sebuah fungsi disebut solusi bukan karena bisa diturunkan dari rumus, melainkan karena terbukti memenuhi persamaannya. Dari bab ini pula dua kebiasaan kerja terpenting mulai dibangun: menuliskan goal sebelum menurunkan, dan sanity check setelahnya.

## Konsep 1 — Apa Itu "Solusi" ODE?

*Pertanyaan yang kelihatannya remeh, tapi punya konsekuensi besar untuk seluruh kursus.*

## Definisi formal

Sebuah solusi $y^{*}$ untuk ODE adalah satu fungsi $y:^{*}T\to R^{k}$ yang memenuhi dua syarat:

1. $y^{*}$ differentiable cukup (sampai orde $m$)
2. Ketika kita substitusi $y^{*}$ dan turunan-turunannya ke ODE, persamaannya benar untuk semua $t\in T$

**💡 Insight**

Jebakan umum: mengira solusi adalah "set fungsi" karena notasi $C^{m}$. Yang tepat:

$C^{m}$ adalah set dari semua fungsi differentiable $y^{*}$ adalah satu fungsi yang anggota dari set itu — ditulis $y\in ^{*}C^{m}$

Plus: parameter adalah dimensi output, bukan jumlah fungsi. Misal $kk = 2$ artinya satu fungsi vektor dengan dua komponen — seperti $(k(t), c(t))$ di RCK nanti.

## Verify vs Solve — perbedaan yang menyelamatkan waktu

Saat ditanya "apakah $y(t) = t^{2}$ adalah solusi dari $\dot{y} =2t$?", ada dua cara mengecek:

**Solve (lebih Lambat)** — Integrasikan $\dot{y} =2t$ → dapat $y(t) = t^{2}+C$ → pakai initial condition → konfirmasi cocok.

**Verify (lebih Cepat)** — Turunkan $y = t^{2}$ → dapat $\dot{y} =2t$ → cocokkan dengan sisi kanan ODE. Selesai dalam 3 langkah.

**💡 Insight**

Definisi solusi verification-based, bukan derivation-based. Kamu tidak perlu menurunkan solusi dari awal — cukup tunjukkan kandidat memenuhi ODE.

Ini akan dipakai berulang di kursus: di Bellman equation (guess and verify value function), di optimal control (verify policy memenuhi FOC), di equilibrium (verify market clearing). Saat lihat kandidat solusi, verify dulu — jangan langsung mode "solve".

## Konsep 2 — General Solution vs Particular Solution

*Kerangka untuk memahami "keluarga solusi" dan bagaimana kondisi tambahan memilih satu solusi spesifik.*

## Aturan jumlah konstanta

**Hasil Kunci**

### Untuk ODE orde- $m$ dalam variabel: $k$

*General solution memiliki $m \times k$ konstanta arbitrer Particular solution didapat dengan memberi $m \times k$ kondisi (initial atau boundary)*

*Asal-usul: setiap integrasi memunculkan satu konstanta. ODE orde- $m$ butuh $m$ integrasi → $m$ konstanta per variabel.*

## Contoh konkret

Sistem dua variabel ($K, A$) masing-masing orde-2:

$$ K^{¨}=-K,A^{¨}=-4A $$

Total konstanta: $m \times k = 2 \times 2 = 4$.

General solution:

$$
\begin{aligned}
K(t) &= C_{1} cos(t) +C_{2} sin(t) \\
A(t) &= C_{3} cos(2t) +C_{4} sin(2t)
\end{aligned}
$$

Butuh 4 initial conditions untuk pin down semuanya.

**💡 Insight**

Pola general solution bisa ditemukan tanpa diajari rumusnya: untuk $\dot{y}=2t$, langsung integrasikan → $y(t) = t^{2}+C$. Lalu pakai $y(0) = 0$ →

Inilah pola dasar: general → tambah kondisi → particular.

## Konsep 3 — IVP vs BVP — Beda yang Penting untuk RCK

*Dua cara memberi kondisi untuk pin down solusi. Bedanya halus tapi konsekuensinya besar.*

**IVP — INITIAL VALUE** — Semua kondisi diberikan di satu titik waktu yang sama $t_{0}$. Untuk ODE orde- $my(t$: $_{0}),\dot{y}(t_{0}),y¨(t_{0}),\dots$ semua di $t_{0}$. Mudah diselesaikan dengan integrasi forward.

**BVP — BOUNDARY VALUE** — Kondisi diberikan di titik-titik waktu yang berbeda. Contoh: $y(0) = 1y(2) = 5$,. Lebih sulit — butuh metode khusus seperti shooting.

**Jebakan Umum**

Hati-hati: BVP bukan sekadar "kondisi pada interval waktu" — IVP dan BVP sama-sama bekerja di interval. Yang membedakan adalah *di mana* kondisi diberikan dalam

Cara mudah membedakan: hitung jumlah titik waktu yang disebut. Satu titik = IVP. Lebih dari satu = BVP.

**Koneksi**

### Di RCK (Bab 12) akan muncul BVP yang tidak biasa:

*Capital: initial condition di $kt = 0$ — $k(0)= k_{0}$ Consumption: transversality condition di $ct \to \infty$*

*Kondisi di dua titik waktu berbeda → BVP. Inilah mengapa Bab 13 mengajarkan shooting method — algoritma khusus untuk mengubah BVP menjadi IVP yang bisa diselesaikan komputer.*

## Konsep 4 — Existence and Uniqueness (Picard-Lindelöf)

*Inti Bab 4. Tidak semua ODE punya solusi unik — teorema ini memberi syarat kapan kita dijamin.*

## Statement Teorema 4.1 (versi intuitif)

**Hasil Kunci**

### Untuk IVP $\dot{x}=G(x, t)$ dengan $x(t_{0})=x_{0}$:

Jika (1) $G$ kontinu di compact cube $D$ yang memuat $(x_{0}, t_{0})$, dan (2) $G$ Lipschitz

### dalam (bisa dijamin lewat continuously differentiable), $x$

maka ada $\varepsilon > 0$ sehingga IVP punya solusi unik di interval $[t_{0} -\varepsilon, t_{0} +\varepsilon ]$.

**💡 Insight**

Pemahamanmu sendiri (dari catatan): "Kalau $G$ dan turunannya kontinu di $D$, plus kondisi awal di $D$, ada solusi unik untuk $G$. Karena kontinu maka solusi terdefinisi dengan baik di semua titik, dan unik karena prinsip kontinuitas."

Intuisi yang tepat. Yang harus diluruskan: bukan "IVP/BVP ada di D" tapi titik kondisi awal $(x_{0}, t_{0})$ ada di dalam $D$.

## Mengapa kondisi-kondisi ini tepat

Bukan asumsi sembarangan — setiap kondisi punya peran spesifik dalam bukti formal:

$G$ kontinu: memastikan integral terdefinisi, memberi bound $∥G∥\le K$ via Extreme Value Theorem

$G$ Lipschitz dalam: kritis untuk membuat operator integrasi menjadi contraction, sehingga ada fixed point unik $x$ (Banach)

$D$ kompak: tertutup dan terbatas, sehingga max/min tercapai

**Catatan Nuansa**

## Konsep 5 — Saat Picard-Lindelöf Gagal — Eksplorasi Mendalam

### Bagian ini yang paling dalam menggali pemahaman — di sinilah terlihat

## Dua kasus untuk dibandingkan

Kasus A: $\dot{x}=x$ dengan $x(0) = 0$ — well-behaved

Kasus B: $\dot{x}=x$ dengan $x(0) = 0$ — problematic

**Properti** — Kasus A () vs Kasus B ($xx$)

$G(0)=0$ `?` Ya (di keduanya) → $x(t) = 0$ trivial solution

$G_{X}$ `DI` $X=0$ A: $G_{x} =1$, kontinu ✓ | B: $G_{x} =_{2}^{1}_{x}$, meledak ✗

**Lipschitz?** — A: Ya | B: Tidak (di sekitar $x = 0$)

**Picard-lindelöf** — A: Berlaku | B: Gagal

**Waktu Kabur Dari 0** — A: $\infty$ (tidak bisa kabur) | B: $2\varepsilon$ (kabur dalam waktu hingga)

**Jumlah Solusi** — A: 1 (unik: $x \equiv 0$) | B: tak hingga

## Trik "potong-tempel" untuk konstruksi solusi non-unik

Untuk Kasus B, kamu bisa konstruksi tak hingga solusi parametrized oleh $\tau \ge 0$ ("kapan kabur dari nol"):

$$ x_{\tau }(t) ={^{0}_{(t-\tau)}^{2}_{4}kalau 0 \le t\le \tau kalau t> \tau $$

Mekanisme: "diam di nol" sah karena $\dot{x}=0 =0 =G(0)$. "Kabur kapan saja" sah karena kurva parabola yang digeser tetap memenuhi ODE.

**💡 Insight**

Intuisinya: menggeser kurva ($t \mapsto t-\tau$) menghasilkan solusi baru. Setiap pilihan $\tau$ memberi graf

## Mengapa $\dot{x}=x$ tidak bisa "potong-tempel"

Untuk Kasus A, solusi non-trivial $x(t) = Ae^{t}$. Dari $x(0) = 0A= 0$: → satu-satunya solusi adalah $x \equiv 0$.

Tidak ada cara kabur dari nol. Sekali stuck di nol, selamanya stuck.

## Generalisasi: $\dot{x}=x^{\alpha }$ dengan $x(0) = 0$

**Hasil Kunci**

*$\alpha \ge 1$ (linear, kuadratik,...): solusi unik ($x\equiv 0$) $0 < \alpha < 1$ (akar kuadrat, akar kubik,...): tak hingga solusi*

*Aturan praktis: pangkat $\ge 1$ adalah well-behaved di titik asal. Pangkat pecahan $< 1$ menghasilkan turunan yang meledak → non-uniqueness.*

**Jebakan Umum**

Jebakan umum: mengira Kasus B hanya punya dua solusi. Sebenarnya tak hingga banyak — setiap $\tau \ge 0$ memberi solusi berbeda.

Ini bukan dua solusi yang istimewa — ini keluarga solusi parametrized oleh "kapan mulai bergerak". Pemahaman ini membedakan "ada multiple solutions" dari "memahami struktur multiple solutions".

## Konsep 6 — Hubungan ke Growth Theory

### Setelah pemahaman teknis, pertanyaan yang paling penting

## Apakah model growth well-behaved?

**Hasil Kunci**

*Ya, semua model growth di kursus ini well-behaved di wilayah yang relevan.*

*Picard-Lindelöf berlaku, solusi unik dijamin. Tidak ada kasus seperti $x$ yang punya tak hingga solusi.*

## Mengapa

Tiga alasan struktural:

1. Fungsi produksi smooth. Cobb-Douglas $f(k) = k^{\alpha }$ continuously differentiable di $k > 0$. Inada conditions menjamin smoothness di wilayah ekonomi yang masuk akal.
2. Inada sebagai asuransi. Asumsi $f(0) =^{'}\infty$ dan $f(\infty) =^{'}0$ memastikan dinamika "tertahan" di wilayah hingga.
3. Ekonomi tidak mulai dari nol. $k_{0} >0$ selalu diasumsikan. Kita kerja di wilayah $k > 0$ di mana fungsi-fungsi well-behaved.

**💡 Insight**

Pemahamanmu sendiri: "dalam Solow model, kalau kita potong waktu, solusi tidak akan lompat tapi tetap pada trajectory."

Tepat. Ini adalah rumusan intuitif uniqueness. Trajektori deterministik: dari $k_{0}$ given, $k(t)$ untuk semua $t> 0$ adalah unik. Tidak ada "cabang" alternatif.

## Tapi memahami non-uniqueness tetap penting

Meskipun growth well-behaved, konsep ini tetap dibutuhkan

1. Saddle path di RCK: ODE well-behaved tapi kondisi awal partial ($k(0)$ given, $c(0)$ free). Ada keluarga trajektori — TVC memilih satu unik.
2. Memahami "mengapa teorema dibutuhkan": bukan asumsi sembarangan. Kondisi-kondisi punya peran spesifik.
3. Aplikasi advanced: poverty traps, multiple equilibria, indeterminacy — non-uniqueness sebagai feature, bukan bug.

**Koneksi**

### Untuk seluruh materi, kita bisa mengasumsikan well-behaved

*Tapi pemahaman mengapa well-behaved akan membuatmu lebih percaya diri saat mengaplikasikan teorema dan memahami subtleties seperti saddle path.*

## Tentang Teorema 4.2 (versi global)

Teorema 4.2 butuh kondisi lebih kuat (uniform Lipschitz di seluruh ruang). Tidak biasa diaplikasikan langsung di growth karena:

Teorema 4.1 lokal sudah cukup untuk wilayah ekonomi yang masuk akal

Ekonomi self-limiting (boundedness dari dinamika) → solusi lokal bisa dirangkai menjadi global

**Bonus**

## Kebiasaan Kerja yang Dibangun di Bab Ini

### Selain konsep matematis, bab ini membangun strategi kerja

**Tulis Goal di Awal** — Sebelum mulai derivasi, tulis "Saya cari: ____". Mencegah over-engineering seperti pakai $e^{lnc}$ alih-alih $1/c$.

**Verify Lebih Cepat Dari** — Saat ditanya "apakah ini solusi?", verify langsung. Saat ditanya "cari `SOLVE` solusi", baru solve. Dua aktivitas berbeda.

10-20 menit per topik. Stuck → berhenti, tanya. Tidak masuk mode

**Time-box** — "tenggelam dalam derivasi".

**Solusi Trivial Sering** — Cek $G(x_{0}) =0$ dulu — kalau ya, $x(t) = x_{0}$ konstan adalah `TERLEWAT` solusi. Tangkapan mudah yang banyak orang skip.

**Bukti Formal Bukan Prioritas** — Dalam praktik, fokuslah pada statement dan aplikasinya; bukti formal opsional.

**RENDERING CHECK** — Kalau formula terlihat aneh, minta format alternatif (subscript, plain text). Beberapa menit untuk reread lebih baik daripada salah pemahaman.

**SELF-CHECK**

## Checklist Pemahaman Bab 4

*Siap untuk Bab 5 jika semua pertanyaan ini bisa dijawab dengan yakin.*

## Konsep dasar

1. ☐ Bisa menjelaskan beda "menulis ODE" vs "menyelesaikan ODE"
2. ☐ Bisa menjelaskan beda "general solution" vs "particular solution"
3. ☐ Bisa menghitung jumlah konstanta arbitrer untuk ODE orde- $m$ dengan variabel $k$
4. ☐ Bisa membedakan IVP dari BVP berdasarkan letak kondisinya

## Verifikasi solusi

1. ☐ Bisa verify apakah kandidat fungsi adalah solusi ODE (dengan turunan + substitusi)
2. ☐ Tahu kapan menggunakan verify vs solve
3. ☐ Bisa identifikasi solusi trivial $x(t) = x_{0}$ kalau $G(x_{0}) =0$

## Picard-Lindelöf

1. ☐ Bisa menyatakan kondisi teorema (kontinuitas $G$ + Lipschitz dalam) $x$
2. ☐ Bisa cek apakah ODE konkret memenuhi kondisi
3. ☐ Bisa membuat counter-example seperti $\dot{x}=x$
4. ☐ Bisa konstruksi multiple solutions menggunakan trick "potong-tempel"

## Hubungan ke growth

1. ☐ Bisa menjelaskan mengapa model growth standar well-behaved
2. ☐ Tahu peran Inada conditions dalam well-behavedness
3. ☐ Tahu trajektori Solow-Swan adalah deterministik dari $k_{0}$
4. ☐ Punya intuisi tentang saddle path di RCK (preview Bab 12)

✦✦✦

**Penutup**

## Apa yang Menanti di Bab 5

Bab 5 (Steady States) akan terasa familiar karena fondasinya sudah diletakkan. Yang akan dipelajari:

Definisi formal steady state — yaitu titik $x^{*}$ di mana $G(x^{*})=0$. Intuisinya sudah muncul di Bab 4.

Klasifikasi stabilitas — stable, unstable, asymptotic stable. Dengan tools dari Bab 7 (eigenvalues).

Linearisasi — cara cek stabilitas tanpa solve ODE.

Phase line analysis — visualisasi dinamika di 1D.

Bekal yang sudah di tangan:

Tahu cari steady state = cari $G = 0$

Tahu solusi unik exists untuk kondisi awal di wilayah well-behaved

Punya intuisi geometris (trajektori, "kabur dari nol", dll)

...Bab 5 hanya menambahkan satu pertanyaan baru: kalau kita mulai di sekitar steady state, ke mana kita pergi?

**Ringkasan Besar**

*Bab 5 akan jadi jembatan antara tools matematis (Bab 3-4) dan model ekonomi (Bab 9 dan setelahnya). Setiap konsep di Bab 5 akan dipakai berulang di:*

*Solow-Swan: konvergensi monoton ke $k^{*}$ RCK: saddle path dynamics di sekitar steady state Romer R&D: balanced growth path sebagai steady state efficiency units*

*Selamat melanjutkan.*

