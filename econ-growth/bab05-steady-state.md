# Bab 5 — Steady-State Equilibria

Bab ini memformalkan dua konsep yang menjadi bahasa sehari-hari seluruh teori pertumbuhan: *steady state* (titik di mana sistem berhenti berubah) dan *stabilitas* (apakah sistem kembali ke sana setelah diganggu). Bab 5 adalah jembatan dari teori abstrak ODE (Bab 3–4) ke aplikasi konkret: di ujungnya, kestabilan Solow-Swan diturunkan langsung dari alat-alat ini.

**Konsep1**

## Apa Itu Steady State?

### Konsep yang intuisinya sudah muncul di akhir Bab 4 — sekarang diformalkan.

## Definisi 5.1

Steady state (atau equilibrium) untuk ODE autonomous $\dot{x}=G(x)$ adalah titik yang memenuhi: $\bar{x}$

$$ 0 = G()\bar{x} $$

Yaitu, titik di mana sistem tidak berubah: sekali berada di $\bar{x}$, sistem tinggal di sana selamanya.

**💡 Insight**

Intuisinya sudah muncul di akhir Bab 4: untuk ODE $\dot{x}=x-x^{2}$, $x = 0$ adalah solusi karena $G(0) = 0$, dan kemudian ditemukan $x =

Catatan terminologi: di matematika "equilibrium", di ekonomi "steady state" — keduanya lazim dipakai bergantian, sebuah "happy halfway house".

**Konsep2**

## Hierarki Stabilitas

### Empat jenis stabilitas, masing-masing lebih kuat dari sebelumnya. Hierarki yang harus jelas di kepala.

## Analogi "bola di permukaan"

Sebelum definisi formal, pakai analogi klasik: bola pingpong

Bola di dasar mangkuk dangkal. Dorong sedikit, tetap di sekitar `STABLE` dasar tapi mungkin tidak persis kembali. Tetap dekat, tapi mungkin orbit.

Bola di dasar mangkuk dalam. Dorong sedikit, akhirnya kembali

`ASYMPTOTIC STABLE`

persis ke dasar. Tetap dekat DAN konvergen.

Bola di mangkuk tanpa pinggiran. Tidak peduli seberapa keras `GLOBAL ASYMP STABLE` goyangkan, akhirnya bola kembali ke dasar. Konvergen dari MANAPUN.

Bola di puncak bukit. Dorong sedikit, bola menggelinding jauh.

`UNSTABLE`

Tidak tetap dekat — terbang keluar.

## Definisi formal dan visualisasinya

Definisi 5.2 (Stable / Lyapunov Stable):

Untuk setiap $\varepsilon > 0$, ada $\delta > 0$ sehingga kalau $∥x_{0} -\bar{x}∥<\delta$, maka $∥\varphi (t) -\bar{x}∥<\varepsilon$ untuk semua $t\ge t_{0}$.

Visualisasi: dua lingkaran konsentrik di sekitar — lingkaran (kecil, starting points) di dalam lingkaran (besar, $\bar{x}\delta \varepsilon$ batas yang tidak boleh dilewati). Lintasan boleh orbit, tapi harus tetap di dalam. $\varepsilon$

Definisi 5.3 (Asymptotic Stable):

Stable DAN $lim\varphi (t) =\bar{x}$.

$$ t\to \infty $$

Visualisasi: lintasan spiral inward menuju — radius putaran mengecil seiring waktu. $\bar{x}$

**Jebakanumum**

Awas notasi pada Definisi 5.3: yang benar adalah limit menuju $\bar{x}$ (dengan bar), bukan $x$ polos. Konteks ekonomi dan konsistensi dengan definisi lain menegaskannya.

Kebiasaan yang baik: baca persis apa yang tertulis, lalu cek konsistensi dengan definisi lain. Kalau ada inkonsistensi, kemungkinan typo.

Definisi 5.4 (Global Asymptotic Stable):

Asymptotic stable DAN konvergensi dari manapun di $R^{k}$.

**💡 Insight**

Rumusan yang tepat: yang membedakan 5.4 dari 5.3 adalah titik awalnya — 5.3 mengharuskan mulai dari neighborhood, sedangkan 5.4 boleh mulai dari mana saja.

Tepat. Bedanya hanya pada scope starting points — neighborhood kecil $N$ (5.3) vs seluruh $R^{k}$ (5.4).

Definisi 5.5 (Unstable):

Bukan stable. Yaitu: untuk kecil apapun, ada $\delta x_{0}$ di dalam lingkaran yang lintasannya keluar dari lingkaran $\delta \varepsilon$ apapun.

Visualisasi: lintasan spiral outward, atau garis lurus menjauh dari. $\bar{x}$

## Hierarki yang ketat

**Hasilkunci**

### Hierarki dari paling lemah ke paling kuat:

### $Stable \subset Asymptotic Stable \subset Global Asymp Stable$

### Setiap level menambah syarat:

### Stable: tetap dekat + Konvergen → Asymptotic Stable + Konvergen dari manapun → Global Asymptotic Stable

**Konsep3**

## Mengapa Cek Stabilitas?

### Pertanyaan tajam — dan jawabannya menjelaskan inti mengapa Bab 5 penting untuk ekonomi.

## Steady state ≠ otomatis stable

Pertanyaan yang sering muncul: kalau sudah berada di steady state, mengapa masih perlu cek stabilitas?

Jawaban: steady state hanya berarti "kalau tepat di sini, tidak bergerak". Tapi dunia nyata penuh gangguan. Pertanyaan yang penting:

**Ringkasan Besar**

### "Kalau ekonomi sedikit tergeser dari, apakah dia kembali (stable) atau terbang jauh $\bar{x}$ (unstable)?"

## Kontras: bola di mangkuk vs bola di puncak

Dasar mangkuk: bola "diam" di sana. Dorong sedikit → kembali. Stable steady state.

Puncak bukit: bola juga "diam" di sana. Tapi dorong sedikit → menggelinding jauh. Unstable steady state.

Kedua-duanya adalah steady state — tapi perilakunya sangat berbeda saat ada gangguan.

## Mengapa ini penting untuk ekonomi

Ekonomi tidak pernah persis di steady state. Selalu ada gangguan: krisis finansial, perang, pandemi, perubahan teknologi, bencana alam.

**Koneksi**

### Pertanyaan kebijakan: kalau ekonomi tergeser, apakah dia akan pulih sendiri?

### Stable: tidak perlu intervensi besar — ekonomi pulih sendiri. Contoh: Solow-Swan untuk negara pasca-perang. Unstable: butuh kebijakan untuk mengembalikan ke trajectory yang benar. Saddle: hanya satu trajectory yang konvergen — butuh "memilih" konsumsi awal yang tepat. Inilah RCK.

**Konsep4**

## Teorema 5.1 — Linear Stability via Eigenvalues

### Alat utama untuk mengecek stabilitas sistem linear. Mengubah pertanyaan dinamika menjadi pertanyaan aljabar.

## Statement

Untuk sistem linear $\dot{x}=Ax + b$ dengan steady state $\bar{x}=-A^{-1}b$:

**Hasilkunci**

### Jika semua eigenvalue $A$ memiliki real part negatif, maka adalah globally $\bar{x}$ asymptotically stable.

## Mengapa eigenvalues?

Solusi sistem linear bisa ditulis sebagai kombinasi "mode":

$$ x(t) = C_{1}e^{\lambda1t}v_{1} +C_{2}e^{\lambda2t}v_{2} +⋯ $$

Setiap mode $e^{\lambda }i^{t}$:

Mengecil ke 0 kalau $Re(\lambda _{i}) <0$ Membesar tak hingga kalau $Re(\lambda _{i}) >0$

Untuk konvergensi: semua mode harus mengecil → semua eigenvalue real part negatif.

**💡 Insight**

Mengapa "real part"? Karena eigenvalues bisa kompleks: $\lambda = a + bi$. Maka:

$$ e\lambda t=eat[cos(bt) + i sin(bt)]\cdot $$

Bagian $cos +i sin$ memberi oscillation (spiral). Bagian $e^{at}$ memberi magnitude growth/decay. Hanya real part yang menentukan apakah lintasan mengecil atau membesar. $a$

## Peran $b$

Pertanyaan yang sering muncul: "Apakah $b$ matriks $k \times 1$?"

Ya, $b$ adalah vektor kolom $k \times 1$. Perannya: Menentukan lokasi steady state: $\bar{x}=-A^{-1}b$ Tidak mempengaruhi stabilitas — stabilitas hanya tergantung eigenvalues $A$

Kalau $b= 0$, steady state di origin. Kalau $b=0$, steady state pindah, tapi sifat stabilitasnya sama.

**Konsep5**

## Teorema 5.2 — Nonlinear Stability via Linearisasi

### Generalisasi Teorema 5.1 untuk sistem nonlinear — yang paling sering dipakai di seluruh materi.

## Apa itu "nonlinear"?

Pertanyaan yang sering muncul: "Apakah nonlinear berarti pangkat ≠ 1?"

Tidak cukup spesifik. Nonlinear berarti apa saja yang bukan bentuk $Ax + b$:

Pangkat ≠ 1: $x^{2}$, $xx^{\alpha }$, Fungsi transendental: $e^{x}ln(x)sin(x)$,, Perkalian variabel: $xyx$, $_{1}x_{2}$ Kombinasi yang di atas

**Koneksi**

### Hampir semua fungsi di growth theory adalah nonlinear:

### Cobb-Douglas $f(k)= k^{\alpha }$ — nonlinear (pangkat $\alpha =1$) CRRA $u(c)= c^{1-\sigma }/(1 -\sigma)$ — nonlinear Solow-Swan ODE $\dot{k}=sk-^{\alpha }(n + \delta)k$ — nonlinear karena $k^{\alpha }$

### Itulah mengapa Teorema 5.2 yang paling sering dipakai

## Statement

Untuk sistem $\dot{x}=G(x)$ dengan steady state, definisikan Jacobian di: $\bar{x}\bar{x}$

$$
J(\bar{x}) = \begin{pmatrix} \dfrac{\partial G_{1}(\bar{x})}{\partial x_{1}} & \cdots & \dfrac{\partial G_{1}(\bar{x})}{\partial x_{k}} \\ \vdots & \ddots & \vdots \\ \dfrac{\partial G_{k}(\bar{x})}{\partial x_{1}} & \cdots & \dfrac{\partial G_{k}(\bar{x})}{\partial x_{k}} \end{pmatrix}
$$

**Hasilkunci**

### Jika semua eigenvalue $J()\bar{x}$ memiliki real part negatif, maka adalah locally $\bar{x}$ asymptotically stable.

## Idenya: linearisasi

Dekat, sistem nonlinear berperilaku kira-kira seperti sistem linear dengan matriks $\bar{x}J()\bar{x}$.

Generalisasi Taylor expansion (di 1D):

$$
G(x) \approx \underbrace{G(\bar{x})}_{=0} + G\'(\bar{x})\,(x-\bar{x})
$$

Untuk multivariate, $G ()^{'}\bar{x}$ digantikan oleh matriks Jacobian.

**💡 Insight**

Analogi yang pas: "dalam optimisasi kita lihat SOC". Sangat tepat. Pola yang sama:

Optimisasi: FOC ($∇f= 0$) → Hessian negative definite (max) Stabilitas: $G() =\bar{x}0$ → Jacobian eigenvalues negative real part (stable)

Di multi-dimensi, "tanda turunan kedua" digantikan oleh "eigenvalues matriks turunan". Hessian untuk optimisasi, Jacobian untuk dinamika.

## Mengapa hanya "local"?

Linearisasi adalah aproksimasi yang baik hanya di sekitar. Untuk titik yang jauh, dinamika nonlinear bisa sangat $\bar{x}$ berbeda dari linear.

Konsekuensi:

Teorema 5.1 (linear): global asymptotic stable

Teorema 5.2 (nonlinear via linearisasi): local asymptotic stable

## Hartman-Grobman: justifikasi formal

**Catatannuansa**

### Hartman-Grobman Theorem: Kalau steady state hyperbolic (semua eigenvalue real part

$=0$), maka dinamika nonlinear di sekitar secara topologis equivalen dengan dinamika $\bar{x}$

### linearisasinya. Yaitu, dekat, sistem nonlinear "kelihatan seperti" $\bar{x}\dot{y} =J()y\bar{x}$. Inilah justifikasi Teorema 5.2.

### Untuk steady state non-hyperbolic (ada eigenvalue real part = 0), linearisasi tidak konklusif — butuh metode lain.

**Konsep6**

## Aturan 1D dan Generalisasi ke Multi-D

### Loncatan logis yang wajar dipertanyakan: kenapa di 1D

## 1D sebagai kasus khusus dari Teorema 5.2

Untuk ODE skalar $\dot{x}=G(x)$ (yaitu $k = 1$):

1. Jacobian 1D: matriks $1 \times 1$ dengan satu entri:

$$ J() =\bar{x}(\partial x\partial G\bar{x})()=(G ())^{'}\bar{x} $$

2. Eigenvalue matriks $1 \times 1$: entri matriks itu sendiri:

$$ det((a) -\lambda) = a -\lambda = 0⟹\lambda = a $$

Maka eigenvalue Jacobian 1D = $G ()^{'}\bar{x}$.

3. Aturan stabilitas Teorema 5.2: semua eigenvalue real part negatif. Di 1D, hanya ada satu eigenvalue: $G ()^{'}\bar{x}$.

**Hasilkunci**

### Aturan praktis 1D:

### $G ()<^{'}\bar{x}0$ → stable (asymptotic stable) $G ()>^{'}\bar{x}0$ → unstable $G ()=^{'}\bar{x}0$ → tidak konklusif dari linearisasi

## Kasus borderline

Untuk ODE $\dot{x}=-x^{3}$ dengan steady state $\bar{x}=0$:

$$ G (x) =^{'}-3x^{2} $$

$G (0) =^{'}0$ — kasus borderline!

Linearisasi tidak konklusif. Tapi analisis sign langsung menunjukkan $\bar{x}=0$ stable:

$x > 0$: $\dot{x}=-x<^{3}0$ → turun $x$ $x < 0$: $\dot{x}=-x>^{3}0$ → naik $x$ Dari kedua sisi mengarah ke 0 → stable. Tapi konvergensi lambat (polynomial, bukan eksponensial) karena $G () =^{'}\bar{x}$ $0$.

**Jebakanumum**

Jebakan umum: menulis "$G'(\bar{x}) = -3x^{2} < 0$ untuk semua $x$" — padahal di steady state $\bar{x}=0$ nilainya $G'(0)=0$, bukan negatif.

Pelajaran: selalu evaluasi $G^{'}$ tepat di, bukan generalisasi untuk semua. Linearisasi mantra (" $\bar{x}xG<^{'}0$ → stable") berlaku kalau $G () =^{'}\bar{x}0$ — kalau $= 0$, butuh analisis lain.

## Generalisasi ke multi-D

Pola yang sama, tapi lebih kaya:

`SEMUA` $RE(\Lambda)<_{I}0$ Stable node/spiral. Lintasan konvergen ke dari semua arah lokal. $\bar{x}$

`SEMUA` $RE(\Lambda)>_{I}0$ Unstable node/spiral. Lintasan menjauh dari di semua arah. $\bar{x}$

Saddle point. Stable di arah eigenvector dengan eigenvalue negatif, `CAMPURAN TANDA` unstable di arah eigenvector dengan eigenvalue positif. Fenomena multi-D yang tidak ada di 1D.

`ADA` $RE(\Lambda _{I})=0$ Non-hyperbolic. Linearisasi tidak konklusif — butuh analisis lain.

**Konsep7**

## Aplikasi Langsung — Solow-Swan

### Derivasi yang menunjukkan mengapa Solow-Swan selalu stable.

## Setup

ODE Solow-Swan:

$$ \dot{k}=G(k) = sk-^{\alpha }(n + g + \delta)k $$

## Pengerjaanmu — step by step

**Step1** Cari steady state.

Solve $G() =\bar{k}0$:

$$
s\bar{k}^{\alpha}=(n+g+\delta)\bar{k} \quad\Longrightarrow\quad s\bar{k}^{\alpha-1}=n+g+\delta
$$

$s$

**Step2** Hitung $G (k)^{'}$.

$$ G (k) =^{'}\alpha sk^{\alpha-1}-(n + g + \delta) $$

#### **Step3** Substitusi cerdas di. $\bar{k}$

Daripada substitusi langsung (ekspresi rumit), gunakan $s\bar{k}^{\alpha-1}=n+g+\delta$ dari persamaan steady state:

$$ G () ='\bar{k}\alpha s \cdot n + g + \delta -(n + g + \delta) = \alpha (n + g + \delta) -(n + g + \delta) $$

$s$

**Step4** Faktorkan.

$$ G () = (\alpha -1)(n + g + \delta)^{'}\bar{k} $$

**Step5** Analisis tanda. $\alpha < 1$ (Cobb-Douglas standar) → $\alpha -1 < 0$ $(n + g + \delta) > 0$ (parameter ekonomi positif) Produk: negatif → $G () <^{'}\bar{k}0$ → stable

## Insight ekonomi

**Ringkasan Besar**

### Mengapa Solow-Swan selalu stable?

### Karena diminishing returns ($\alpha < 1$). Inilah satu-satunya asumsi yang membuat $G ()<^{'}\bar{k}0$. Tanpa diminishing returns, model tidak konvergen.

## Kontras dengan AK Model

AK model: $f(k) = Ak$ (pangkat 1, no diminishing returns):

$$ G(k) = sAk -(n + g + \delta)k = [sA -(n + g + \delta)]k $$

$G (k) =^{'}sA -(n + g + \delta)$ — konstan, tidak tergantung $k$ Kalau $sA> (n + g + \delta)$: pertumbuhan eksponensial, tidak konvergen

**Koneksi**

### Inilah mengapa AK disebut endogenous growth — tidak konvergen ke steady state, tumbuh selamanya. Akan dipelajari di Bab 14-15.

Sebaliknya, Solow-Swan disebut exogenous growth karena konvergensi ke adalah fitur $\bar{k}$

### kunci — pertumbuhan jangka panjang hanya datang dari pertumbuhan teknologi eksogen ( $g$).

**Konsep8**

## Saddle Point — Preview RCK

### Fenomena multi-D yang akan menjadi inti dari analisis RCK (Bab 12).

## Apa itu saddle point?

Steady state dengan eigenvalues yang tanda real part-nya berbeda. Contoh sederhana:

$$ J() =\bar{x}(^{-2}003^{)} $$

Eigenvalues $-2$ dan $+3$. Rumusanmu: "satu menuju, satu menjauh — satu stable satu unstable". Persis $\bar{x}$ menggambarkan saddle.

## Struktur saddle point

**Hasilkunci**

### Untuk saddle point dengan eigenvalues $\lambda _{1} <0 < \lambda _{2}$:

### Arah eigenvector $v_{1}$ (eigenvalue $-2$) → stable manifold. Lintasan di arah ini konvergen ke. $\bar{x}$ Arah eigenvector $v_{2}$ (eigenvalue $+3$) → unstable manifold. Lintasan di arah ini menjauh dari. $\bar{x}$

### Steady state bukan stable secara keseluruhan (karena ada arah unstable), tapi juga bukan unstable sempurna (karena ada arah stable).

## Mengapa saddle penting untuk RCK

**Koneksi**

### Di RCK, sistem 2D dengan state $(k, c)$:

$$
\begin{aligned}\dot{k}&=f(k)-(n+\delta)k-c \\ \dot{c}&=\frac{c\left[f\'(k)-\rho-n\right]}{\sigma}\end{aligned}
$$

### Steady state $(,)\bar{k}\bar{c}$ adalah saddle point.

### Implikasi ekonomi: dari modal awal $k_{0}$, ada hanya satu trajectory yang konvergen ke $(,)\bar{k}\bar{c}$. Trajectory ini disebut saddle path.

### Konsumsi terlalu tinggi → modal habis → ekonomi crash Konsumsi terlalu rendah → over-saving → tidak optimal Konsumsi tepat di saddle path → konvergen optimal

### Pertanyaan: bagaimana memilih $c_{0}$ yang tepat? Jawaban: transversality condition (TVC) — dibahas

## Empat klasifikasi steady state 2D

`KEDUA` $\Lambda$ `NEGATIF (REAL)` Stable node. Monotonic convergence. Contoh: Solow-Swan.

$\Lambda$ `COMPLEX DENGAN RE < 0` Stable spiral (focus). Spiral inward convergence.

Unstable node. Lintasan menjauh. Contoh: AK model (di luar steady

`KEDUA` $\Lambda$ `POSITIF (REAL)`

state).

$\Lambda$ `TANDA CAMPURAN` Saddle point. Stable di satu arah, unstable di arah lain. Contoh: RCK.

$\Lambda$ `PURE IMAGINARY` Center. Orbit periodic. Marginal stable.

**Self-Check**

## Checklist Pemahaman Bab 5

### Siap untuk Bab 6 dan setelahnya jika bisa menjawab

## Definisi

1. ☐ Bisa mendefinisikan steady state sebagai $G() =\bar{x}0$
2. ☐ Bisa membedakan stable, asymptotic stable, dan global asymptotic stable
3. ☐ Bisa menggambar phase plane illustration untuk masing-masing (Exercise 5.1-5.3)
4. ☐ Bisa mendefinisikan unstable

## Teorema

1. ☐ Bisa menyatakan Teorema 5.1 (linear, semua eigenvalue real part negatif → global asymptotic stable)
2. ☐ Bisa menyatakan Teorema 5.2 (nonlinear, Jacobian eigenvalue real part negatif → local asymptotic stable)
3. ☐ Bisa menjelaskan mengapa "real part" yang penting (bukan eigenvalue mentah)
4. ☐ Bisa menjelaskan mengapa Teorema 5.2 hanya "local"

## Aplikasi

1. ☐ Bisa menghitung Jacobian untuk sistem 2D
2. ☐ Bisa menemukan eigenvalues matriks $2 \times 2$ (lewat persamaan karakteristik)
3. ☐ Bisa mengklasifikasikan steady state: stable node, stable spiral, saddle, unstable
4. ☐ Bisa derive $G () =^{'}\bar{k}(\alpha -1)(n + g + \delta)$ untuk Solow-Swan

## Konsep konseptual

1. ☐ Bisa menjelaskan mengapa steady state $=$ otomatis stable
2. ☐ Bisa menjelaskan analogi "bola di permukaan"
3. ☐ Memahami kasus borderline ($G () =^{'}\bar{x}0$) dan apa yang harus dilakukan
4. ☐ Memahami saddle point dan signifikansinya untuk RCK

✦✦✦

**Penutup**

## Apa yang Menanti

Bab 5 adalah jembatan antara tools matematis (Bab 3-5) dan model ekonomi (Bab 9 dan setelahnya). Setiap konsep di Bab 5 akan dipakai berulang:

**Ringkasan Besar**

Di Solow-Swan (Bab 9): konvergensi monoton ke adalah aplikasi Teorema 5.2 dengan $\bar{k}$

.

### Di RCK (Bab 12): saddle path stability di sekitar steady state. Pemilihan trajectory unik lewat TVC.

### Di Romer R&D (Bab 14): balanced growth path sebagai steady state dalam "efficiency units" — bukan langsung tapi $k\tilde{k}=k/(AL)$.

### Di Peters (Bab 15): misallocation dan firm dynamics dengan analisis stabilitas yang lebih kompleks.

Sebelum masuk ke aplikasi ekonomi, masih ada dua bab

Bab 6-7: Solusi analitis ODE (cara menyelesaikan ODE, bukan hanya menganalisis stabilitas)

Bab 8: Phase diagram analysis (visualisasi dinamika di 2D)

Fondasi sudah kuat: tiga bab pertama tools (3, 4, 5) selesai. Selamat melanjutkan.

