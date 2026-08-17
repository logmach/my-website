# Bab 8 — Analisis Kualitatif

Bab paling visual di Tools I: menerjemahkan hasil analisis eigenvalue menjadi gambar *phase diagram*. Yang paling penting di sini bukan teori baru (itu sudah ada di Bab 5 dan 7), melainkan prosedur menggambar — plus konsep *nullcline* yang akan dipakai berulang dari Bab 9 sampai akhir.

## Konsep 1 — Filosofi Qualitative Approach

### Mengapa kita gambar phase diagram daripada solve ODE?

## Tiga pendekatan untuk analisis ODE

Solve secara eksplisit. Hanya bekerja untuk ODE linear atau kasus

`ANALYTICAL (BAB 6-7)`

khusus nonlinear.

Eigenvalue analysis di steady state. Memberi klasifikasi (stable, unstable,

`STABILITY (BAB 5)`

saddle) dan rate of convergence.

Visualisasi geometris dinamika di phase plane. Bekerja untuk ODE

`QUALITATIVE (BAB 8)`

nonlinear apapun — bahkan yang tidak bisa di-solve.

**Ringkasan Besar**

*Untuk model growth (Solow, RCK, Romer) yang nonlinear dan tidak bisa di-solve eksplisit, qualitative approach adalah alat utama untuk dapat insight visual.*

*Pertanyaan yang sama muncul lagi: "Mengapa tidak bisa solve ODE eksplisit?" Jawabannya melibatkan Picard-Lindelöf vs ekspresibilitas. Sekarang di Bab 8, kita pakai tools tanpa butuh formula eksplisit.*

## Konsep 2 — Phase Diagram 1D (Section 8.1)

*Versi paling sederhana — untuk ODE skalar.*

## Setup

Untuk ODE skalar $\dot{x}=g(x)$:

Sumbu horizontal: (state variable) $x$ Sumbu vertikal: $\dot{x}=g(x)$ Plot kurva $y= g(x)$

## Cara baca

Di mana $g(x) > 0$: $\dot{x}>0$, jadi naik $x$ Di mana $g(x) < 0$: $\dot{x}<0$, jadi turun $x$ Di mana $g(x) = 0$: $\dot{x}=0$, jadi steady (steady state) $x$

## Gambar tipikal

### ẋ = g(x)

### g(x)

### x

x̄₂x̄₁ = 0

x naikx naikx turunx turunx naikx naikx turunx turun

Phase line untuk ODE skalar $\dot{x}=g(x)$ dengan dua steady state. Panah di sumbu menunjukkan $x$ arah dinamika.

## Stabilitas 1D dari grafik

$g () <^{'}\bar{x}0$ (slope negatif): stable — lintasan dari kedua sisi menuju $\bar{x}$ $g () >^{'}\bar{x}0$ (slope positif): unstable — lintasan dari kedua sisi menjauh dari $\bar{x}$

## Konsep 3 — Phase Diagram 2D — Vector Field

*Generalisasi ke sistem 2D. Konsep dasar: di tiap titik, ada "arah" dinamika.*

## Setup

Untuk sistem 2D $\dot{x}=G(x)$:

Sumbu horizontal: $x_{1}$ (beberapa referensi menomori dari $x_{0}$). Sumbu vertikal: $x_{2}$. Phase plane = $R^{2}$, semua kemungkinan $(x_{1}, x_{2})$.

## Vector field

Di tiap titik $(x_{1}, x_{2})$ di phase plane, ODE memberi vektor:

$$ \dot{x}=(\dot{x}^{1}\dot{x}_{2}^{)}=G((^{x}x_{2}^{))1} $$

Vektor ini punya:

Arah: kemana sistem bergerak dari titik itu

Magnitude: seberapa cepat

Kumpulan semua vektor di seluruh phase plane = vector field.

## Stream lines (solution curves)

Lintasan yang mengikuti vector field = stream line = solusi ODE yang diproyeksikan ke state space (tanpa waktu eksplisit).

**Hasil Kunci**

*Konsekuensi Picard-Lindelöf: stream lines tidak pernah berpotongan.*

*Mengapa? Karena di tiap titik, arah aliran unik (dari ODE). Kalau dua lintasan berpotongan di satu titik, mereka harus pergi ke arah berbeda dari titik itu — mustahil.*

## Konsep 4 — Nullcline — Alat Visual Paling Powerful

*Konsep yang dipakai berulang dari Bab 9 sampai akhir.*

## Definisi

**Hasil Kunci**

*Nullcline = kurva di phase plane di mana salah satu $\dot{x}_{i} =0$.*

*$\dot{x}_{1}$ -nullcline = kurva di mana $\dot{x}_{1} =0$ $\dot{x}_{2}$ -nullcline = kurva di mana $\dot{x}_{2} =0$*

## Apa artinya geometris

Di $\dot{x}_{1}$ -nullcline: $x_{1}$ tidak berubah, tapi $x_{2}$ masih bergerak → lintasan vertikal Di $\dot{x}_{2}$ -nullcline: $x_{2}$ tidak berubah, tapi $x_{1}$ bergerak → lintasan horizontal

## Steady state = perpotongan KEDUA nullcline

Steady state adalah titik di mana kedua $\dot{x}_{1} =0$ dan $\dot{x}_{2} =0$. Yaitu, titik yang simultaneously ada di kedua nullcline.

**💡 Insight**

Pertanyaan tajam: bagaimana kalau sebuah titik hanya berada di salah satu nullcline?

Itu bukan steady state. Sistem masih bergerak — hanya salah satu komponen yang "diam". Lintasan akan punya bentuk khusus (vertikal di $\dot{x}_{1}$ -nullcline, horizontal di $\dot{x}_{2}$ -nullcline).

Pelajaran: "perpotongan" di sini berarti titik yang simultaneously di kedua kurva. Bukan dua kurva yang melintas tanpa berbagi titik.

## Empat alasan nullcline berguna

1. Mencari steady state secara visual: gambar dua nullcline, lihat titik perpotongan
2. Membagi phase plane jadi region: di tiap region, tanda $\dot{x}_{1}$ dan $\dot{x}_{2}$ konstan → cara cepat sketsa vector field
3. Lintasan menyeberang nullcline secara orthogonal: vertikal di $\dot{x}_{1}$ -nullcline, horizontal di $\dot{x}_{2}$ -nullcline
4. Inti analisis qualitative untuk nonlinear: bisa pakai bahkan kalau eigenvalue sulit dihitung

## Contoh sederhana

Sistem:

$$ \dot{x}_{1} =x_{1} -x_{2},\dot{x}_{2} =x_{1} +x_{2} -2 $$

Nullcline:

$\dot{x}_{1}$ -nullcline: $x_{2} =x_{1}$ (garis 45°) $\dot{x}_{2}$ -nullcline: $x_{2} =2 -x_{1}$ (slope -1, intercept 2)

Perpotongan: solve $x_{1} =2 -x_{1}$ → $x_{1} =1x$, $_{2} =1$. Steady state $(1, 1)$.

## x₂

### ẋ₂ = 0 nullclineẋ₁ = 0 nullcline

### (1, 1)

### steady state

## x₁

Dua nullcline berpotongan di steady state $(1,1)$.

## Konsep 5 — Lima Klasifikasi Phase Diagram 2D

*Visualisasi tiap kasus eigenvalue. Pelajari gambarnya — itulah yang dipakai berulang.*

## Klasifikasi 1 — Stable Node (Sink)

Eigenvalues: kedua real, kedua negatif, distinct ($\lambda _{1} <\lambda _{2} <0$).

Cara baca: semua lintasan konvergen ke origin. Dekat origin, lintasan tangensial dengan eigenvektor lambat ($\lambda _{2}$, magnitude lebih kecil).

## x₂

## x₁

Stable node: semua lintasan menuju origin.

## Klasifikasi 2 — Unstable Node (Source)

Eigenvalues: kedua real, kedua positif, distinct ($0 < \lambda _{1} <\lambda _{2}$).

Cara baca: semua lintasan menjauh dari origin. Lintasan keluar tangensial dengan eigenvektor lambat, lalu sejajar eigenvektor cepat.

## x₂

## x₁

Unstable node: semua lintasan menjauh dari origin.

## Klasifikasi 3 — Saddle Point (paling penting untuk RCK)

Eigenvalues: kedua real, tanda berlawanan ($\lambda _{1} <0 < \lambda _{2}$).

Cara baca: dua "manifold" istimewa lewat origin. Stable manifold (sepanjang eigenvektor dengan $\lambda < 0$) → lintasan menuju origin. Unstable manifold (sepanjang eigenvektor dengan $\lambda > 0$) → lintasan menjauh.

Lintasan generik: datang dari arah stable manifold, curve dekat origin, terbang sepanjang unstable manifold.

## x₂

## unstable manifoldstable manifold

## x₁

Saddle point: stable manifold (hijau, menuju origin) dan unstable manifold (merah, menjauh). Lintasan biru: datang dari stable, terbang sepanjang unstable.

## Klasifikasi 4 — Stable Spiral (Focus)

Eigenvalues: complex conjugate dengan real part negatif ($\lambda = \alpha \pm i\beta \alpha < 0$,).

Cara baca: lintasan spiral inward ke origin.

## x₂

## x₁

Stable spiral: lintasan spiral inward ke origin.

## Klasifikasi 5 — Center

Eigenvalues: pure imaginary ($\lambda = \pm i\beta \alpha = 0$,).

Cara baca: lintasan adalah orbit periodik — tidak konvergen, tidak diverge. Marginal stable (Lyapunov stable tapi tidak asymptotic stable).

## x₂

## x₁

Center: lintasan adalah orbit konsentris di sekitar origin. Tidak konvergen, tidak diverge.

## Konsep 6 — Algoritma 7-Langkah Menggambar Phase Diagram

*Prosedur konkret yang dipakai berulang. Hafalkan urutannya.*

#### **Step 1** Hitung eigenvalues

Pakai formula 2D: $\lambda -^{2}tr(A)\lambda + det(A) = 0$. Hati-hati hitung trace (jumlah diagonal, bukan off- diagonal).

#### **Step 2** Klasifikasi dari eigenvalues

Trick cepat: kalau $det(A) < 0$ → otomatis saddle point. Untuk klasifikasi lain, lihat tanda kedua eigenvalue.

#### **Step 3** Cari eigenvektor (kalau real eigenvalues)

Solve $(A -\lambda I)v= 0$ untuk tiap eigenvalue. Identifikasi stable (eigenvalue negatif) dan unstable (eigenvalue positif) directions.

#### **Step 4** Plot sumbu dan steady state

Sumbu horizontal $x_{1}$, vertikal $x_{2}$. Tandai steady state (biasanya origin untuk sistem homogen) dengan titik.

#### **Step 5** Gambar eigenvektor sebagai garis lurus

Untuk node atau saddle: gambar garis lewat origin sepanjang tiap eigenvektor. Tambahkan panah:

Eigenvalue negatif: panah menuju origin

Eigenvalue positif: panah menjauh dari origin

Untuk spiral: skip langkah ini (eigenvektor kompleks).

#### **Step 6** Gambar lintasan tipikal

Pilih 4-8 kondisi awal yang tersebar di phase plane. Gambar lintasan sesuai klasifikasi:

Stable node: semua mendekat origin, sejajar eigenvektor lambat dekat origin

Unstable node: semua menjauh, keluar tangensial eigenvektor lambat Saddle: datang sepanjang stable, terbang sepanjang unstable

Stable spiral: spiral inward

#### **Step 7** Cek dengan vector field

Evaluasi $\dot{x}=Ax$ di beberapa titik untuk verifikasi:

Di $(1, 0)\dot{x}$: = kolom pertama $A$ Di $(0, 1)\dot{x}$: = kolom kedua $A$

Panah di tiap titik harus konsisten dengan klasifikasi.

## Tabel klasifikasi dari $det$ dan $tr$

Saddle point (tidak peduli trace) — langsung jelas, $det(A) =$

$$ DET<0 $$

$\lambda _{1}\lambda _{2} <0$ berarti tanda berlawanan

$DET>0, TR<0$ Stable (node atau spiral, tergantung diskriminan)

$DET>0, TR>0$ Unstable (node atau spiral)

$DET>0, TR=0$ Center (kalau diskriminan $< 0$)

$\Delta = tr-^{2}4 det\Delta > 0$. → node (real distinct), $\Delta < 0$ → spiral

`DISKRIMINAN`

atau center (complex), $\Delta = 0$ → repeated (improper node)

## Konsep 7 — Preview Aplikasi — RCK Saddle Path

*Inilah tempat semua tools Bab 8 bertemu di growth theory.*

## Setup RCK

Sistem 2D dengan $(k, c)$:

$$
\begin{aligned}\dot{k}&=f(k)-(n+\delta)k-c \\ \dot{c}&=\frac{c\left[f\'(k)-\rho-n\right]}{\sigma}\end{aligned}
$$

## Nullcline RCK

$\dot{k}=0$ nullcline: $c = f(k) -(n + \delta)k$ — kurva concav (karena concav) $f$ $\dot{c}=0$ nullcline: $f(k) =^{'}\rho + n$ — garis vertikal di $k = \bar{k}$ (independent dari) $c$

## Phase diagram RCK c

### ċ = 0

### (k̄, c̄)

### k̇ = 0

### saddle path

trajectories terbang

## k

Phase diagram RCK. Saddle path (biru) = stable manifold. Lintasan lain (merah putus-putus) terbang menjauh.

## Implikasi ekonomi

**Ringkasan Besar**

*Modal adalah state predetermined ($kk_{0}$ diberikan). Konsumsi adalah control $c$ (pilihan).*

Untuk tiap $k_{0}$, ada satu nilai $c_{0}$ yang benar — yang persis di saddle path. Pilihan lain

*menyebabkan trajectory meledak.*

transversality condition (dibahas di Bab 11)

## Mengapa eigenvalue dan eigenvektor penting

Eigenvalue negatif → arah konvergen → saddle path

Eigenvektor untuk eigenvalue negatif → arah saddle path dekat steady state Slope eigenvektor → slope policy function $c = c(k)$ dekat steady state

Magnitude eigenvalue → rate of convergence sepanjang saddle path

Tanpa eigenvalue analysis, kita tidak bisa karakterisasi saddle path. Inilah inti analisis RCK.

**SELF-CHECK**

## Checklist Pemahaman Bab 8

## Konsep

1. ☐ Paham filosofi qualitative vs analytical approach
2. ☐ Bisa baca phase diagram 1D dari grafik $g(x)$
3. ☐ Paham vector field di phase plane 2D
4. ☐ Paham stream lines tidak pernah berpotongan (Picard-Lindelöf)
5. ☐ Paham definisi nullcline dan apa artinya geometris
6. ☐ Paham steady state = perpotongan KEDUA nullcline

## Klasifikasi (lima jenis)

1. ☐ Bisa identifikasi stable node dari eigenvalue
2. ☐ Bisa identifikasi unstable node
3. ☐ Bisa identifikasi saddle point (paling penting!)
4. ☐ Bisa identifikasi stable spiral
5. ☐ Bisa identifikasi center
6. ☐ Bisa gunakan trick $det < 0$ → saddle untuk klasifikasi cepat

## Skill menggambar

1. ☐ Bisa gambar sumbu dan steady state
2. ☐ Bisa gambar eigenvektor sebagai garis lurus dengan panah yang benar
3. ☐ Bisa gambar lintasan tipikal untuk tiap klasifikasi
4. ☐ Bisa cek konsistensi dengan vector field di beberapa titik

## Aplikasi

1. ☐ Paham nullcline RCK ($\dot{k}=0$ kurva, $\dot{c}=0$ vertikal)
2. ☐ Paham saddle path = stable manifold di RCK
3. ☐ Paham mengapa hanya satu trajectory yang konvergen di RCK ✦✦✦

**Penutup**

## Tools I Selesai Sepenuhnya

Kini lengkap sudah lima alat utama

**Ringkasan Besar**

*Bab 3: ODE notation dan struktur Bab 4: Picard-Lindelöf — eksistensi dan keunikan solusi Bab 5: Steady state dan klasifikasi stabilitas Bab 6: Integrating factor untuk linear ODE Bab 7: Eigenvalue analysis untuk sistem linear Bab 8: Phase diagram visualisasi qualitative*

## Yang menanti

Bab 9 — Solow-Swan: aplikasi pertama growth theory dengan tools yang sudah dikuasai

Bab 10 — Theory and Measurement: empirics Solow-Swan

Bab 11 — Optimal Control: dynamic optimization, transversality condition

Bab 12 — RCK: tempat saddle path benar-benar penting

Bab 14-15 — Endogenous Growth: Romer dan misallocation

Fondasi matematisnya kini solid. Semua bab selanjutnya akan terasa lebih intuitif karena tools sudah lengkap.

