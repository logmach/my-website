# Bab 6 — Solusi Analitis I

Bab ini membahas dua teknik inti untuk menyelesaikan ODE linear secara eksplisit: *integrating factor* dan *principle of superposition*. Tema praktisnya: kebiasaan sanity check — bab inilah tempat jebakan *sign-flip* paling sering muncul, dan tempat kebiasaan "verify sebelum percaya" dibangun.

## Konsep 1 — 6.1.1 — Integrating Factor untuk ODE Konstan

*Trik aljabar yang mengubah ODE menjadi turunan dari sesuatu yang bisa diintegrasi.*

**ODE asli** — $\dot{x}+ax = b$ (Persamaan 6.1; $a, b$ konstan)

**Trik integrating factor** — Kalikan kedua sisi dengan $e^{at}$ — disebut integrating factor:

$[\dot{x}+ax]e^{at}=be^{at}$ (Persamaan 6.2)

Mengapa $e^{at}$? Karena sisi kiri sekarang adalah turunan dari $xe^{at}$:

$$ \frac{d(xe^{at})}{dt}=\dot{x}e^{at}+x \cdot ae^{at}=e^{at}[\dot{x}+ax]\;\checkmark $$

Persamaan 6.2 jadi:

$$
\frac{d\left(x e^{at}\right)}{dt}=b\,e^{at}
$$

Integrasi kedua sisi:

$$ xeat=beat+C $$

$a$

Bagi dengan $e^{at}$ — general solution (Equation 6.5):

$$ x(t) =*b + Ce-at $$

$a$

```{admonition} 💡 Insight
:class: tip

Titik yang sering membingungkan pada Equation 6.3:

$$ d(xe)^{at}bd(e)^{at} $$

$=$

$$ dtadt $$

Sekilas RHS terlihat berbeda dari $be^{at}$, padahal sama (karena $\frac{d(e^{at})}{dt}=ae^{at}$, jadi $\frac{b}{a} \cdot ae^{at}=be^{at}$).

Mengapa ditulis seperti itu? Strategi penulisan: agar
```
**Pertanyaan tajam: "Mengapa eksponensial?"** — Catatan kuliah menyatakan: kalau "instantaneous rate of change locally constant", maka anti-derivative-nya eksponensial. Mari bedah pelan-pelan.

```{admonition} Ringkasan besar
:class: important

*Inti penjelasan: Setelah geser variabel $y= x -b/a$, ODE asli berubah jadi $\dot{y} =-ay$ . Inilah "proporsionalitas murni" — turunan proporsional dengan fungsi itu sendiri.*

**Properti unik fungsi eksponensial**

$$
\frac{d\,e^{at}}{dt}=a\cdot e^{at}
$$

*Yaitu, turunan eksponensial proporsional dengan fungsi itu sendiri. Hanya fungsi eksponensial yang punya properti ini. Maka solusi $\dot{y} =-ay$ harus dalam bentuk eksponensial.*

**Penurunan eksplisit: dari $\dot{x}+ax = b$ ke $\dot{y} =-ay$**

Langkah demi langkah, tanpa lompatan:

**Step 1** Definisikan $y:= x -b/a$.

Geser variabel — adalah " relatif terhadap steady state". $yx$
```

**Step 2** Hitung. $\dot{y}$

Karena $b/a$ konstan: $\dot{y} =\dot{x}-0 = \dot{x}$.

**Step 3** Substitusi $\dot{x}=b -ax$ dari ODE asli.

$\dot{y} =b -ax$.

**Step 4** Ganti $x = y + b/a$.

$$ \dot{y} =b -a(y + b/a) = b -ay -b = -ay $$

**Step 5** Hasil: $\dot{y} =-ay$. ODE "bersih" — proporsionalitas murni. Solusinya $y(t) = Ce^{-at}$. Kembalikan: $x(t) = Ce^{-at}+$ $b/a$.

"Locally constant" = rasio $\dot{y}/y$ konstan (sama dengan $-a$), bukan sendiri konstan. $\dot{y}$

## Konsep 2 — Struktur Solusi: Anchor + Movement

*Insight kunci yang dipakai berulang di seluruh materi.*

General solution $x(t) = b/a + Ce^{-at}$ punya struktur dua bagian:

**$b/a$ — anchor** — Steady state: "tempat akhir" sistem (kalau stable). Ini particular solution dari ODE non-homogen.

**$Ce^{-at}$ — movement** — Transient: "bagaimana sistem sampai ke anchor". Ini general solution dari ODE homogen.

```{admonition} 💡 Insight
:class: tip

Parafrase yang tepat (saat membahas Corollary 6.1):

"Pergerakannya ditentukan dari solusi general homogen, solusi particular non-homogen hanya menentukan solusi punya posisi yang benar. Solusi particular non-homogen ini memberikan suatu guidance untuk mengarahkan state di posisi steady state yang benar tetapi kecepatan pergerakannya ditentukan oleh solusi general homogen yang varies dengan waktu."

Rumusan ini akan dipakai di Bab 9
```
**Stabilitas dari struktur** — Saat $t\to \infty$:

Kalau $a> 0$: $e^{-at}\to 0$ → movement menghilang → $x \to \bar{x}=b/a$ (stable) Kalau $a< 0$: $e^{-at}\to \infty$ → movement meledak → unstable

Inilah hasil Exercise 6.1 — koneksi langsung ke Teorema 5.1 dari Bab 5.

## Konsep 3 — 6.1.2 — Homogeneous Case

*Kasus khusus ketika $b = 0$. Lebih sederhana, tapi punya satu aplikasi penting.*

ODE: $\dot{x}+ax = 0$ (Equation 6.7)

Solusi langsung: $b/a= 0$, jadi anchor hilang. Tersisa movement saja:

$$ x(t) = Ce^{-at} $$

**Aplikasi: pertumbuhan/decay murni**

```{admonition} Koneksi
:class: important

**Persis bentuk yang muncul di growth theory**

*Population: $\dot{L}=nL$ → $L(t)= L_{0}^{nt}e$ Technology: $\dot{A}=gA$ → $A(t)= A_{0}^{gt}e$*

*Bentuk eksponensial untuk $L(t)$ dan $A(t)$ bukan asumsi sembarangan — sekarang jelas mengapa*
```
**Trik: $I(t) \cdot x(t) = C$**

```{admonition} 💡 Insight
:class: tip

Observasi tajam saat mengerjakan latihan: untuk ODE homogen, setelah multiply dengan integrating factor:

$d$

$$
\frac{d}{dt}\left[x(t)I(t)\right]=0 \;\Longrightarrow\; x(t)\,I(t)=C
$$

Maka langsung $x(t) = C/I(t)$ — tidak perlu separation of variables, tidak ada risiko sign error.

Inilah jalur paling cepat untuk ODE homogen linear orde-1 (skalar maupun time-varying).
```
## Konsep 4 — 6.1.3 — Time-Varying Parameters

*Generalisasi 6.1.1 — sekarang dan adalah fungsi waktu. $ab$.*

**ODE bentuk umum** — $\dot{x}+a(t)x = b(t)$ (Persamaan 6.8)

**Integrating factor (Exercise 6.3)**

$$ I(t) = e^{\int a(t)\,dt} $$

Verifikasi: multiply ODE

**General solution (Exercise 6.4)** — $x(t) = \dfrac{1}{I(t)}\left[\int I(t)\,b(t)\,dt +C\right]$ (Persamaan 6.9)

$$ I(t)I(t) $$

Derivasinya:

**Step 1** Multiply ODE dengan $I(t)$.

Sisi kiri jadi $\frac{d}{dt}[x \cdot I]$. Sisi kanan: $b(t)I(t)$.

**Step 2** Integrasi kedua sisi.

$$ x \cdot I=\int b(t)I(t)\, dt +C $$

**Step 3** Bagi dengan $I(t)$.

Hasil: Equation 6.9.

**6.1.1 sebagai kasus khusus** — Kalau $a(t) = a$ (konstan), maka $\int a dt=at$ dan $I(t) = e^{at}$ — sama dengan 6.1.1. Yaitu, 6.1.3 menggeneralisasi 6.1.1.

## Konsep 5 — 6.2 — Multiple-Variable Case

*Generalisasi ke sistem (multi-variabel). Konsep struktur "anchor + movement" tetap berlaku.*

**Setup**

Untuk sistem -dimensi: $k$

Equation 6.10: $\dot{x}=Ax + b$ (non-homogen, autonomous) Equation 6.11: $\dot{x}=Ax$ (homogen, autonomous) Equation 6.12: $\dot{x}=A(t)x + b(t)$ (non-homogen, non-autonomous) Equation 6.13: $\dot{x}=A(t)x$ (homogen, non-autonomous)

**Proposition 6.1 — Principle of Superposition**

```{admonition} Hasil kunci
:class: important

Jika $x^{*}_{1}(t)$ dan $x^{*}_{2}(t)$ keduanya solusi 6.11, maka $c_{1}x^{*}_{1} +c_{2}x^{*}_{2}$ juga solusi 6.11, untuk

*sembarang $c_{1}, c_{2} \in R$.*

Bukti (Exercise 6.5):

$$ \frac{d}{dt}\bigl[c_{1}x^{*}_{1}+c_{2}x^{*}_{2}\bigr] = c_{1}\dot{x}^{*}_{1}+c_{2}\dot{x}^{*}_{2} = c_{1}Ax^{*}_{1}+c_{2}Ax^{*}_{2} = A\bigl(c_{1}x^{*}_{1}+c_{2}x^{*}_{2}\bigr)\;\checkmark $$
```
**Corollary 6.1 — Kunci strategi solving** — Jika $x^{*}_{1}(t)$ solusi 6.10 (non-homog) dan $x^{*}_{2}(t)$ solusi 6.11 (homog), maka $x^{*}_{1} +x^{*}_{2}$ juga solusi 6.10.

Konsekuensi praktis: kita fokus solve sistem homogen saja, lalu "tambah kembali" particular solution.

**Exercise 6.6 — Mengapa "general homog + particular = general non- homog"**

Pertanyaan: kalau $x^{*}(t)$ general solution dari 6.11 dan $\bar{x}$ particular solution dari 6.10, mengapa $x^{*}(t)+\bar{x}$ adalah general solution dari 6.10? Bukti intuitif: substitusi ke 6.10:

$$
\frac{d}{dt}\left[x^{*}+\bar{x}\right]=\dot{x}^{*} \qquad A(x^{*}+\bar{x})+b=Ax^{*}+\underbrace{A\bar{x}+b}_{=0}=Ax^{*}
$$

Cocok. Plus, free constants di $x^{*}$ (k buah untuk sistem k-dim) memberikan derajat kebebasan untuk match sembarang kondisi awal.

```{admonition} 💡 Insight
:class: tip

Parafrase yang menangkap inti algebra: " menyerap konstanta. Sisanya bisa diserahkan ke homogen." $\bar{x}b$

Pembagian kerja yang elegan: particular handle forcing term $b$; homogen handle perpindahan dari kondisi awal.
```
## Konsep 6 — Theorem 6.1 — Superposition Reloaded

*Versi paling kuat untuk kasus non-autonomous. Tiga poin yang harus dipahami.*

Untuk sistem non-autonomous (6.12 dan 6.13), Theorem 6.1 menyatakan tiga hal:

**Point 1** — Kalau $x^{*}_{1},x^{*}_{2}$ keduanya solusi 6.13 (homog), maka $c_{1}x^{*}_{1} +c_{2}x^{*}_{2}$ juga solusi 6.13. Superposition standar.

**Point 3** — Setiap solusi 6.12 bisa dikonstruksi sebagai: satu particular solusi 6.12 + solusi homogen 6.13. Inilah strategi standar solving.

**Point 2 — arah logika yang sering terbalik** — Pertanyaan yang wajar: jika $x_{1}$ menyelesaikan 6.11 dan $x_{2}$ menyelesaikan 6.10, bagaimana?

Perhatikan baik-baik: Theorem 6.1 Point 2 justru mengatakan arah sebaliknya:

```{admonition} Hasil kunci
:class: important

*Kalau keduanya solusi 6.10 (non-homog), maka SELISIH mereka solusi 6.11 (homog).*

Bukti cepat: ambil $x_{1}, x_{2}$ keduanya solusi 6.10:

$$
\begin{aligned}
\dot{x}_{1} &=Ax_{1} +b \\
\dot{x}_{2} &=Ax_{2} +b
\end{aligned}
$$

Kurangkan:

$$
\dot{x}_{1}-\dot{x}_{2}=A(x_{1}-x_{2})+\underbrace{b-b}_{=0}=A(x_{1}-x_{2})
$$
```
Yaitu $x_{1} -x_{2}$ memenuhi 6.11 (homog). ✓

```{admonition} 💡 Insight
:class: tip

Implikasi struktural: set solusi 6.10 adalah affine space (translasi dari subspace).

Set solusi 6.11 (homog) = subspace vektor dimensi $k$

Set solusi 6.10 (non-homog) = subspace + 1 titik anchor = affine space

Selisih dua titik di affine space = vektor di subspace. Itulah Point 2.

**Pelajaran Penting**
```
**Sign-Flip — Jebakan Berulang**

*Jebakan yang paling sering terjadi. Diagnosis dan solusi.*

```{admonition} ⚠️ Jebakan umum
:class: warning

Tiga contoh klasik sign-flip error:

1. $\dot{x}=3x$ — tergoda menulis $Ce^{-3t}$, padahal seharusnya $Ce^{+3t}$.
2. $\dot{x}=0.05x$ — tergoda menulis $100e^{-0.05t}$, padahal seharusnya $100e^{+0.05t}$.
3. $\dot{x}+x/t=0$ — tergoda menulis $x=5t$, padahal seharusnya $x=5/t$.

Polanya: auto-apply formula $Ce^{-at}$ tanpa memeriksa tanda ketika ODE tidak dalam bentuk standar.
```
**Diagnosis** — Formula $Ce^{-at}$ berlaku untuk ODE bentuk $\dot{x}+ax = b$. Tapi kalau ODE-nya $\dot{x}=kx$ (yaitu $\dot{x}-kx = 0$), maka $a= -k$, dan solusi $Ce^{-(-k)t}=Ce^{+kt}$.

Trap: melihat angka di ODE dan langsung menempatkannya

**Aturan praktis baru — lebih mudah**

```{admonition} Hasil kunci
:class: important

*Untuk ODE $\dot{x}=kx$ (bentuk yang langsung): solusinya $x(t)= Ce^{kt}$ — eksponen punya tanda yang sama dengan koefisien di ODE.*

*$\dot{x}=+3x$ → $x(t)= Ce^{+3t}$ (growth, unstable) $\dot{x}=-3x$ → $x(t)= Ce^{-3t}$ (decay, stable) $\dot{x}=+0.05x$ → $x(t)= Ce^{+0.05t}$ (growth)*
```
**Toolkit Sanity Check**

**Sanity Check Toolkit** — Metode utama — substitusi ke ODE asli:

Setelah dapat solusi $x(t)$, substitusi ke kedua sisi ODE. Kalau cocok, konsisten. Kalau tidak, salah.

Untuk $\dot{x}=0.05x$ dengan solusi salah $x(t) = 100e^{-0.05t}$:

LHS: $\dot{x}=-5e^{-0.05t}$ RHS: $0.05 \cdot 100e^{-0.05t}=5e^{-0.05t}$

LHS ≠ RHS → salah ✗

Untuk solusi benar $x(t) = 100e^{+0.05t}$:

LHS: $\dot{x}=5e^{+0.05t}$ RHS: $0.05 \cdot 100e^{+0.05t}=5e^{+0.05t}$ LHS = RHS → benar ✓

```{admonition} 💡 Insight
:class: tip

Prinsip sanity check: konfirmasi bahwa solusi yang dihasilkan benar-benar memenuhi persamaan aslinya ketika disubstitusikan kembali.

Ini koneksi langsung ke verify-based thinking dari Bab 4: dulu untuk mengecek validitas kandidat solusi, sekarang untuk menangkap kesalahan tanda.
```
**Metakognitif insight**

```{admonition} Ringkasan besar
:class: important

*Pelajaran pentingnya: biasakan sanity check — tertukar tanda adalah bahaya yang nyata.*

*Sign-flip adalah kesalahan paling umum di matematika ekonomi — dari S1 sampai PhD. Yang membedakan adalah kebiasaan menangkapnya*

*Sepuluh detik sanity check per soal adalah investasi kecil yang menyelamatkan banyak kesalahan.*

**Latihan**
```
## Latihan-Latihan Bab Ini

*Daftar latihan inti Bab 6.*

**Exercise 6.1** — Steady state & stability untuk $\dot{x}+ax = b$. Tidak dikerjakan formal, tapi konsepnya sudah masuk lewat Bab 5.

**Exercise 6.2** — Verify general solution homog. Konsep "kelipatan solusi juga solusi" sudah dibahas.

**Exercise 6.3** — Show integrating factor $I(t) = e^{\int a(t)\,dt}$. ✓ Dikerjakan dengan verify-based approach.

**Exercise 6.4** — Derive general solution (6.9). ✓ Dikerjakan dengan multiply $I(t)$, integrasi, bagi.

**Exercise 6.5** — Prove Proposition 6.1. ✓ Dibahas konseptual lewat linearitas turunan dan multiplikasi matriks.

**Exercise 6.6** — General homog + particular = general non-homog. ✓ Dibahas dengan parafrase intuitif.

**Exercise 6.7** — Prove Theorem 6.1. Dibahas konseptual, bukti Point 2 didemonstrasikan.

## Latihan tambahan

$\dot{x}=3x$ — solusi $Ce^{3t}$ (unstable) $\dot{x}=-5x$ — solusi $Ce^{-5t}$ (stable) $\dot{x}=0.05x$, $x_{0} =100$ — solusi $100e^{0.05t}x(10) \approx 164.9$, $\dot{N}=nN$ — population growth (eksponensial) $\dot{x}=-2x + 6$, $x_{0} =5$ — solusi $3 + 2e^{-2t}$, konvergen ke $\bar{x}=3$ $\dot{x}+(1/t)x = 0x(1) = 5$, — solusi $5/t$ $\dot{x}=-5x + 10$, $x_{0} =3$ — solusi $e^{-5t}+2$ ✓ (kerja mandiri)


## Checklist Pemahaman Bab 6

*Siap untuk Bab 7 jika bisa menjawab.*

**Mekanik solving**
- ☐ Bisa menyelesaikan $\dot{x}+ax = b$ dengan integrating factor
- ☐ Bisa menyelesaikan $\dot{x}+a(t)x = b(t)$ dengan $I(t) = e^{\int a(t)\,dt}$
- ☐ Bisa mengaplikasikan kondisi awal untuk dapat $C$
- ☐ Bisa identifikasi steady state $\bar{x}=b/a$ dari ODE konstan
- ☐ Bisa pakai trik $I(t)x(t) = C$ untuk ODE homogen (jalur cepat)

**Konseptual**
- ☐ Bisa menjelaskan mengapa solusi $\dot{x}=kx$ adalah eksponensial
- ☐ Bisa menjelaskan arti "anchor + movement" dalam solusi
- ☐ Bisa membedakan general homog, particular non-homog, dan general non-homog
- ☐ Bisa menyatakan Principle of Superposition (Proposition 6.1)
- ☐ Bisa menjelaskan kenapa Theorem 6.1 Point 2 (selisih) memberi solusi homogen

**Habit metakognitif**
- ☐ Selalu sanity check tanda eksponen sebelum submit
- ☐ Pakai aturan "tanda eksponen = tanda koefisien" untuk $\dot{x}=kx$
- ☐ Verify solusi dengan substitusi ke ODE asli
- ☐ Hati-hati saat geser variabel — pastikan turunan benar

✦✦✦

```{admonition} Penutup
:class: important

**Apa yang Menanti**

Kebiasaan sanity check yang dibangun di sini akan dipakai di seluruh sisa materi.
```
```{admonition} Ringkasan besar
:class: important

*Bab 7 — Analytical Solutions II: aplikasi Principle of Superposition untuk sistem 2D dan beyond. Eigenvalue analysis akan jadi alat utama.*

*Inilah jembatan antara Bab 6 (mekanik skalar) dan Bab 5 (eigenvalue stability) — di Bab 7, eigenvalue muncul kembali sebagai cara untuk solve sistem.*
```
**Tools yang akan dipakai di Bab 7** — Eigenvalue dan eigenvektor (dari aljabar linear)

Principle of Superposition (Bab 6)

Klasifikasi stabilitas dari Bab 5

Semua tools sudah di tangan. Bab 7 hanya menggabungkannya.

**Yang harus diingat sebelum Bab 7**

1. Solusi $\dot{x}=kx$ adalah $Ce^{kt}$ (bukan $Ce^{-kt}$)

*2. General non-homog = general homog + particular.*

3. Sanity check selalu: substitusi solusi ke ODE asli
4. Strategy solving: focus on homog, add particular at end

Selamat — bab paling teknis di Tools I sudah terlewati.

