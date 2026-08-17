# Bab 7 — Solusi Analitis II

Bab ini menggeneralisasi teknik Bab 6 dari persamaan skalar ke *sistem* ODE multi-variabel, dengan eigenvalue, eigenvektor, dan diagonalisasi sebagai alat utamanya. Inilah jembatan kunci antara perangkat matematis (Bab 3–6) dan aplikasi teori pertumbuhan (Bab 9 dan setelahnya): kestabilan sistem 2D seperti RCK ditentukan oleh tanda bagian riil eigenvalue-nya.

## Konsep 1 — Mengapa Bab 7 Diperlukan

*Generalisasi tools Bab 6 dari skalar ke sistem multi-variabel.*

## Masalah baru di multi-D

Untuk sistem $\dot{x}=Ax$ dengan $A$ matriks $k \times k$:

Kalau $A$ diagonal: persamaan terpisah, solve sebagai ODE skalar independen. Tools Bab 6 langsung berlaku. $k$ Kalau $A$ tidak diagonal: persamaan interdependent — $\dot{x}_{1}$ tergantung $x_{2}$ dan sebaliknya. Tools Bab 6 tidak cukup.

## Contoh interdependensi

Sistem 2D:

`A = [ 2 2 ]` `[ 1 3 ]`

Expand:

$$
\begin{aligned}
\dot{x}_{1} &=2x_{1} +2x_{2} \\
\dot{x}_{2} &=x_{1} +3x_{2}
\end{aligned}
$$

$\dot{x}_{1}$ tergantung $x_{2}$, $\dot{x}_{2}$ tergantung $x_{1}$. Tidak bisa solve satu tanpa yang lain.

## Strategi Bab 7 — decoupling lewat diagonalisasi

**Ringkasan Besar**

*Idenya: ubah ke koordinat di mana sistem menjadi diagonal (independent). Solve di koordinat baru, lalu kembalikan ke koordinat asli.*

*Tools yang membuat ini bekerja: eigenvalue dan eigenvektor.*

## Konsep 2 — Eigenvalue dan Eigenvektor

*Refresher konsep yang sudah muncul di Bab 5, sekarang dipakai untuk solve.*

## Definisi

Untuk matriks $A$ ukuran $k \times k$:

Eigenvektor: vektor non-zero yang memenuhi $vAv= \lambda v$

Eigenvalue: skalar yang membuat persamaan di atas berlaku $\lambda$

Intuisi geometris: $A$ "memetakan" ke kelipatannya sendiri — yaitu, tidak rotasi, hanya stretch. $v$

## Cara mencari eigenvalue

Dari $Av= \lambda v$, rearrange: $(A -\lambda I)v= 0$.

Untuk solusi non-trivial ($v=0$), matriks $(A -\lambda I)$ harus singular:

$$ det(A -\lambda I) = 0 $$

Ini disebut persamaan karakteristik.

## Formula 2D yang sering dipakai

**Hasil Kunci**

### Untuk matriks $2 \times 2$:

$$ \lambda -^{2}tr(A) \cdot \lambda + det(A)= 0 $$

### di mana:

### $tr(A)= a_{11} +a_{22}$ (jumlah diagonal)

$$ det(A)= a_{11}a_{22} -a_{12}a_{21} $$

**⚠️ Jebakan umum**

Jebakan umum: salah menghitung trace untuk matriks:

Trace = $-1 + (-1) = -2$, bukan. Kesalahan ini menyebar ke seluruh perhitungan dan menghasilkan $0$ klasifikasi "center" padahal seharusnya "stable spiral".

Habit yang harus dibangun: sebelum lanjut, double-check entri diagonal. Trace = $a + d$ (kiri atas + kanan bawah), bukan $b + c$.

## Mengapa "real part" penting

Pertanyaan yang menggantung sejak Bab 5: mengapa stability tergantung

Untuk $\lambda = \alpha + i\beta$ (kompleks):

$$ e\lambda t=e\alpha t[cos(\beta t) + i sin(\beta t)]\cdot $$

$e^{\alpha t}$: magnitude — eksponensial growth/decay $cos(\beta t) + i sin(\beta t)$: rotation — osilasi periodik dengan amplitudo 1

**💡 Insight**

Hanya $\alpha$ yang menentukan apakah magnitude tumbuh atau mengecil. hanya memberi oscillation. Maka $\beta$ stability tergantung tanda $\alpha$ (real part), bukan eigenvalue penuh.

## Konsep 3 — Multiplicity — Per Eigenvalue, Bukan Total

*Konsep yang sering disalahpahami — mari luruskan. Sangat penting untuk Bab 7.*

## Dua jenis multiplicity

**ALGEBRAIC MULT (AM)** — Berapa kali eigenvalue tertentu muncul sebagai akar persamaan karakteristik. Yaitu, pangkat faktor $(\lambda -\lambda _{i})$ di persamaan karakteristik.

Jumlah eigenvektor independent untuk eigenvalue tertentu. Sama

`GEOMETRIC MULT (GM)`

dengan dimensi eigenspace.

**⚠️ Jebakan umum**

Jebakan umum: mengira multiplicity dihitung secara total:

"AM matriks = jumlah eigenvalue"

"GM matriks = total eigenvektor"

Ini salah. Multiplicity adalah per eigenvalue. Setiap eigenvalue punya AM dan GM sendiri-sendiri.

Yang benar: multiplicity dihitung *per eigenvalue*. Reflex yang harus terbangun: cek tiap eigenvalue secara terpisah.

## Aturan diagonalisasi-able

**Hasil Kunci**

### $A$ diagonalisasi-able jika dan hanya jika:

*Untuk SETIAP eigenvalue, AM = GM.*

*Kalau ada satu saja eigenvalue dengan GM < AM, matriks tidak diagonalisasi-able.*

## Empat kasus utama

Kasus 1 — Distinct eigenvalues: `A = [ -2 1 ]` `[ 0 -3 ]`

Eigenvalues: $-2, -3$. AM = GM = 1 untuk masing-masing. Diagonalisasi-able.

Kasus 2 — Repeated dengan eigenvektor cukup:

`A = [ 3 0 ]` `[ 0 3 ]`

Eigenvalue: (AM = 2). $3(A -3I)$ adalah matriks nol → semua vektor adalah eigenvektor → GM = 2. Diagonalisasi-able.

**💡 Insight**

Jebakan umum untuk matriks ini: menyimpulkan "tidak ada eigenvektor". Yang benar: matriks nol

Reflex yang harus dibangun: selalu solve $(A -\lambda I)v= 0$ eksplisit. Jangan tebak dari bentuk matriks.

Kasus 3 — Repeated dengan eigenvektor kurang (Jordan block):

`A = [ 2 1 ]` `[ 0 2 ]`

Eigenvalue: (AM = 2). $2(A -2I)$ punya rank 1 → eigenspace dimensi 1 → GM = 1.

GM (1) < AM (2) → tidak diagonalisasi-able.

Kasus 4 — Contoh soal $3 \times 3$:

`A = [ 4 1 0 ]` `[ 0 4 0 ]` `[ 0 0 2 ]`

Hasil:

$\lambda = 4$: AM = 2, GM = 1 (karena entri 1 di posisi (1,2)) $\lambda = 2$: AM = 1, GM = 1

Karena untuk $\lambda = 4$, AM ≠ GM → tidak diagonalisasi-able.

## Konsep 4 — Tiga Kasus Solusi ODE Sistem

*Berdasarkan jenis eigenvalues, ada tiga "wajah" yang berbeda untuk sistem 2D.*

## Cara membedakan

Diskriminan persamaan karakteristik 2D:

$$ \Delta = tr(A)-^{2}4 det(A) $$

Distinct real eigenvalues (Section 7.1.2). Solusi: kombinasi linear

$$ \Delta >0 $$

"straight-line solutions".

Complex conjugate eigenvalues (Section 7.1.3). Solusi: spiral (atau

$$ \Delta <0 $$

center).

Repeated real eigenvalue (Section 7.1.4). Solusi: improper node

$$ \Delta =0 $$

dengan suku $te^{\lambda t}$.

## Kasus 1 — Distinct real (Section 7.1.2)

Untuk eigenvalues $\lambda _{1}, \lambda _{2}$ dengan eigenvektor $v_{1}, v_{2}$:

**Hasil Kunci**

### General solution (Equation 7.11):

$$ x(t)= c_{1}e^{\lambda1t}v_{1} +c_{2}e^{\lambda2t}v_{2} $$

Interpretasi: kombinasi linear dari "straight-line solutions". Setiap suku $c_{i}^{\lambda }ei^{t}v_{i}$ adalah lintasan sepanjang arah eigenvektor $v_{i}$ dengan magnitude tumbuh/decay secara eksponensial.

## Kasus 2 — Complex (Section 7.1.3)

Untuk eigenvalues $\lambda = \alpha \pm i\beta$:

**Hasil Kunci**

Solusi melibatkan $e^{\alpha t}$ (magnitude) dan $cos(\beta t), sin(\beta t)$ (rotation). Hasilnya:

*$\alpha < 0, \beta =0$: stable spiral (focus) $\alpha > 0, \beta =0$: unstable spiral $\alpha = 0, \beta =0$: center (orbit periodic)*

Visualisasi: lintasan spiral di phase plane — bukan garis lurus.

## Kasus 3 — Repeated (Section 7.1.4)

Untuk eigenvalue dengan AM = 2 tapi GM = 1: $\lambda$

**Hasil Kunci**

### General solution (Equation 7.14):

$$ x(t)= e(c^{\lambda t}_{1}v +c_{2}w) +te(c^{\lambda t}_{2}v) $$

*dengan eigenvektor, $vw$ generalized eigenvector ($w$ memenuhi $(A -\lambda I)w = v$).*

Yang baru: suku $te^{\lambda t}$ — polynomial growth karena kekurangan eigenvektor independent.

**💡 Insight**

Mengapa muncul faktor? Karena sistem dalam koordinat baru adalah recursive: $t\dot{y}_{1} =\lambda y_{1} +y_{2}$ dengan $y_{2} =c_{2}^{\lambda t}e$. Forcing-nya resonan dengan solusi homogen → particular solution berbentuk $te^{\lambda t}$.

Stabilitas tetap dari tanda: untuk $\lambda \lambda < 0$, exponensial decay menang atas polynomial growth ($te^{\lambda t}\to 0$).

## Kasus Konkret 1 — Example 7.4 — Distinct Real Eigenvalues

*Aplikasi penuh formula Equation 7.11 ke contoh nyata.*

## Setup

`A = [ 2 2 ]` `[ 1 3 ]`

## Step-by-step

#### **Step 1** Eigenvalues

$tr(A) = 5, det(A) = 4$. Persamaan: $\lambda -^{2}5\lambda + 4 = 0$ → $(\lambda -4)(\lambda -1) = 0$.

$\lambda _{1} =4, \lambda _{2} =1$. Distinct dan real ✓

**Step 2** Eigenvektor untuk $\lambda _{1} =4$

$(A -4I)v_{1} =0$ menghasilkan $v_{2} =v_{1}$. Pilih $v_{1} =(1, 1)$.

**Step 3** Eigenvektor untuk $\lambda _{2} =1$

$(A -I)v_{2} =0$ menghasilkan $v_{1} =-2v_{2}$. Pilih $v_{2} =(-2, 1)$.

#### **Step 4** General solution

$$ x(t) = c1e^{4t} (^{1}1^{)}+c2e^{t} (^{-2}1^{)} $$

**Step 5** Apply kondisi awal $x_{0} =(0.1, 0.1)$

Sistem: $c_{1} -2c_{2} =0.1$ dan $c_{1} +c_{2} =0.1$. Solve: $c_{2} =0, c_{1} =0.1$.

Particular solution: $x(t) = 0.1e(1, 1)^{4t}$. Sepanjang arah $v_{1}$ — straight-line solution.

## Insight

**Koneksi**

*Kondisi awal $(0.1, 0.1)$ kebetulan sejajar dengan eigenvektor $v_{1}$. Maka lintasannya straight-line — hanya mode pertama yang aktif.*

*Untuk kondisi awal lain (misal $(1, 0)$), kedua mode akan aktif dan lintasan bukan garis lurus.*

## Kasus Konkret 2 — Stable Spiral — Complex Eigenvalues

### Contoh kasus: matriks dengan trace

## Setup

`A = [ -1 2 ]` `[ -2 -1 ]`

## Step-by-step

#### **Step 1** Trace dan determinant

$tr(A) = -1 + (-1) = -2$ (hati-hati: bukan) $0$

$$ det(A) = (-1)(-1) -(2)(-2) = 1 + 4 = 5 $$

#### **Step 2** Diskriminan

$\Delta = 4 -20 = -16 < 0$ → complex eigenvalues ✓

#### **Step 3** Eigenvalues

$$
\lambda=\frac{-(-2)\pm\sqrt{-16}}{2}=\frac{2\pm 4i}{2}=1\pm 2i
$$

Tunggu — periksa lagi. Persamaan karakteristik $\lambda -^{2}tr(A)\lambda + det(A) = 0$ menjadi $\lambda +^{2}2\lambda +$ $5 = 0$.

$$
\lambda=\frac{-2\pm\sqrt{4-20}}{2}=\frac{-2\pm 4i}{2}=-1\pm 2i
$$

#### **Step 4** Identifikasi

$\alpha = -1$ (real part), $\beta = 2$ (imaginary part)

#### **Step 5** Klasifikasi

$\alpha < 0$ dan $\beta =0$ → stable spiral

## Interpretasi qualitative

Lintasan spiral inward ke origin Magnitude decay dengan rate $∣\alpha ∣= 1$ Periode rotasi $T= 2\pi /\beta = \pi \approx 3.14$

Decay rate (1) vs rotation rate (2) → ~1-2 putaran sebelum mendekati origin

## Konsep 5 — Big Picture — Mengapa Eigenvalue Penting untuk Growth

*Pertanyaan yang membuka mata: mengapa kita belajar semua ini untuk Solow- Swan dan RCK?*

## Hubungan tools dengan pertanyaan ekonomi

`PERTANYAAN EKONOMI` Tool matematis

`STABLE ATAU TIDAK?` Tanda eigenvalue (real part untuk complex)

`SEBERAPA CEPAT` Magnitude eigenvalue → rate of convergence

`KONVERGEN?`

`ARAH KONVERGENSI?` Eigenvektor → saddle path direction

`BENTUK SOLUSI LOKAL?` Equation 7.11 — kombinasi linear eksponensial

`PILIHAN TRAJECTORY` Pilih komponen dengan eigenvalue negatif (transversality)

`OPTIMAL?`

## Aplikasi ke Solow-Swan

Sudah diturunkan di Bab 5:

Untuk parameter realistik ($\alpha = 0.33, n + g + \delta = 0.06$):

$∣G ()∣=^{'}\bar{k}0.67 \times 0.06 = 0.04$ per tahun Half-life: $ln 2/0.04 \approx 17$ tahun

**Koneksi**

Inilah prediksi konkrit: ekonomi yang tergeser dari steady state (misal pasca-perang) akan

*butuh ~17 tahun untuk setengah pulih. Konsisten dengan empirics Jerman/Jepang pasca- PD2. Tanpa eigenvalue analysis, kita tidak punya angka kuantitatif ini.*

## Aplikasi ke RCK

Sistem 2D nonlinear dengan $(k, c)$:

$$
\begin{aligned}\dot{k}&=f(k)-(n+\delta)k-c \\ \dot{c}&=\frac{c\left[f\'(k)-\rho-n\right]}{\sigma}\end{aligned}
$$

Jacobian di steady state menghasilkan saddle point — satu eigenvalue negatif, satu positif.

Implikasi mendalam:

Komponen $c_{2}^{\lambda }e^{2t}v_{2}$ dengan $\lambda _{2} >0$ meledak → harus pilih $c_{2} =0$ (transversality) Solusi efektif: hanya komponen sepanjang $v_{1}$ — saddle path Untuk tiap $k_{0}$, ada satu $c_{0}$ yang benar (di saddle path) Eigenvektor $v_{1}$ memberi slope policy function $c = c(k)$ dekat steady state

**Ringkasan Besar**

*Tanpa eigenvektor analysis, kita tidak bisa karakterisasi saddle path. Ekonomi tidak bisa di-solve dengan benar.*

*Eigenvalue + eigenvektor = inti analisis dinamika di growth theory.*

## Konsep 6 — Eksistensi vs Ekspresibilitas Solusi

*Pertanyaan tajam: mengapa tidak bisa solve ODE-nya secara eksplisit? Apakah karena $C$ tidak bisa ditemukan?*

## Jawaban: bukan karena C

**Hasil Kunci**

*Untuk ODE nonlinear seperti RCK, masalahnya bukan menemukan $C$. Masalahnya: tidak ada formula umum dalam fungsi elementer (eksponensial, polinomial, trigonometri, log) yang bisa mengekspresikan solusi.*

## Picard-Lindelöf menjamin eksistensi

Untuk Solow-Swan $\dot{k}=sk-^{\alpha }\delta k$ dengan $k > 0$:

$G(k) = sk-^{\alpha }\delta k$ kontinu untuk $k > 0$ ✓ $\partial G/\partial k = \alpha sk^{\alpha-1}-\delta$ kontinu untuk $k > 0$ ✓

Picard-Lindelöf menjamin: untuk sembarang $k_{0} >0$, ada solusi $k(t)$ yang eksis dan unik untuk $t\ge t_{0}$.

## Tapi solusi tidak bisa ditulis

Walaupun solusi eksis, untuk ODE nonlinear generic (RCK, Solow dengan tech progress, Romer), tidak ada formula closed-form dalam fungsi elementer.

## Tiga jenis "tidak bisa di-solve"

**SKENARIO 1** — Solusi eksis dan bisa ditulis dengan fungsi elementer. Contoh: $\dot{x}=$ $-2x$, solusi $Ce^{-2t}$.

**SKENARIO 2** — Solusi eksis tapi tidak bisa ditulis dengan fungsi elementer. Contoh: $\dot{x}=e^{-x2}$, RCK, Romer. Solusi eksis dan ditulis dengan formula sangat kompleks yang tidak

`SKENARIO 3`

memberi insight. Jarang, biasanya melibatkan fungsi spesial.

## Mengapa "linearisasi + eigenvalue" jadi alat utama

**Ringkasan Besar**

### Karena ODE growth theory tidak bisa di-solve eksplisit, kita pakai:

*1. Linearisasi di steady state (lewat Jacobian) — Bab 5 2. Eigenvalue + eigenvektor dari Jacobian — Bab 7 3. Hartman-Grobman membenarkan ini secara formal — Bab 5*

Hasilnya: insight kuantitatif lokal (rate of convergence, saddle path, klasifikasi) tanpa perlu

*formula eksplisit.*

## Insight metakognitif

**💡 Insight**

Pertanyaanmu menyentuh hal fundamental dalam matematika applied:

"Eksistensi solusi ≠ ekspresibilitas dalam fungsi elementer."

Picard-Lindelöf menjamin eksistensi. Ekspresibilitas adalah pertanyaan terpisah yang melibatkan struktur aljabar fungsi $G$. Inilah mengapa numerik, qualitative, dan linearisasi menjadi alat penting — bukan karena malas, tapi karena formula eksplisit memang sering tidak ada.

**SELF-CHECK**

## Checklist Pemahaman Bab 7

### Siap untuk Bab 8 dan setelahnya jika bisa menjawab

## Mekanik

1. ☐ Bisa hitung trace dan det matriks $2 \times 2$ dengan benar (hati-hati entri)
2. ☐ Bisa solve persamaan karakteristik $\lambda -^{2}tr(A)\lambda + det(A) = 0$
3. ☐ Bisa hitung eigenvektor dengan solve $(A -\lambda I)v= 0$ eksplisit
4. ☐ Bisa tulis general solution untuk distinct real eigenvalues (Equation 7.11)
5. ☐ Bisa identifikasi $\alpha, \beta$ untuk complex eigenvalues

## Konseptual

1. ☐ Paham mengapa diagonalisasi memudahkan solve sistem ODE
2. ☐ Paham bahwa eigenvektor = arah natural sistem
3. ☐ Paham multiplicity dihitung per eigenvalue, bukan total
4. ☐ Bisa membedakan tiga kasus eigenvalue (distinct, complex, repeated)
5. ☐ Bisa klasifikasi stable node, stable spiral, saddle, center, improper node

## Insight metakognitif

1. ☐ Paham mengapa "real part" yang menentukan stabilitas
2. ☐ Paham eksistensi solusi ≠ ekspresibilitas (Picard-Lindelöf vs formula elementer)
3. ☐ Paham mengapa linearisasi + eigenvalue adalah alat utama untuk growth theory
4. ☐ Paham peran Hartman-Grobman sebagai jembatan antara linear dan nonlinear
5. ☐ Habit sanity check eigenvalue: $Av$ harus $= \lambda v$

✦✦✦

**Penutup**

## Tools I Selesai

Bab 7 menyelesaikan Tools I (Bab 3-7). Foundation matematis lengkap.

**Ringkasan Besar**

### Yang sudah dikuasai dari bab ini:

*Bab 3: ODE notation dan struktur Bab 4: Eksistensi, keunikan, Picard-Lindelöf Bab 5: Steady state, Jacobian, klasifikasi stabilitas Bab 6: Integrating factor, Principle of Superposition, struktur anchor + movement Bab 7: Eigenvalue analysis untuk sistem linear, diagonalisasi, tiga kasus*

## Yang menanti

Bab 8 — Qualitative Analyses: phase diagrams, nullclines, klasifikasi geometris tanpa solve eksplisit

Bab 9 — Solow-Swan: aplikasi pertama growth theory

Bab 11-12 — Optimal Control dan RCK: tempat saddle path benar-benar penting

Bab 14-15 — Endogenous Growth: sistem lebih kompleks dengan teknologi endogen

Semua bab selanjutnya dibangun di atas fondasi Tools I. Selamat — bagian paling abstrak sudah terlewati.

