export const advancedSessions = [
  {
    id: "a1",
    level: "advanced",
    title: "Fungsi, Grafik, Domain, dan Range",
    subtitle: "Baca struktur fungsi sebelum menghitung titik demi titik.",
    minutes: 35,
    pdfPages: "PDF 69-78",
    objectives: [
      "Menentukan domain dari pembatas akar dan penyebut.",
      "Menentukan range dari bentuk kuadrat, nilai mutlak, dan transformasi grafik.",
      "Menghubungkan aturan fungsi, pasangan input-output, dan ciri grafik."
    ],
    concepts: [
      {
        title: "Input, output, dan grafik",
        body: "Sebuah fungsi memasangkan setiap input yang sah dengan tepat satu output. Pada grafik, domain adalah kumpulan koordinat x yang muncul dan range adalah kumpulan koordinat y yang muncul. Titik (a, f(a)) selalu berada pada grafik f.",
        formula: "input x -> aturan f -> output f(x)",
        tip: "Mulai dari bentuk fungsi, lalu gunakan beberapa titik jangkar hanya untuk mengonfirmasi bentuk grafik."
      },
      {
        title: "Pembatas domain",
        body: "Untuk bilangan real, penyebut tidak boleh nol dan isi akar berpangkat genap tidak boleh negatif. Terapkan semua pembatas sekaligus, lalu ambil irisan hasilnya.",
        formula: "sqrt(A(x))/B(x): A(x) >= 0 dan B(x) != 0",
        tip: "Nilai yang membuat isi akar nol boleh dipakai selama tidak sekaligus membuat penyebut nol."
      },
      {
        title: "Range dari struktur",
        body: "Gunakan fakta bahwa kuadrat dan nilai mutlak selalu tidak negatif. Pada y = a(x-h)^2+k, titik (h,k) adalah puncak. Jika a positif, k adalah nilai minimum; jika a negatif, k adalah nilai maksimum.",
        formula: "a > 0: y >= k; a < 0: y <= k",
        tip: "Jangan mencari range hanya dari beberapa input karena sampel titik tidak membuktikan seluruh keluaran."
      },
      {
        title: "Transformasi dan komposisi",
        body: "Pergeseran di dalam kurung bergerak berlawanan arah pada sumbu x, sedangkan konstanta di luar menggeser grafik pada sumbu y. Pada komposisi g(f(x)), output f harus termasuk domain g.",
        formula: "(g o f)(x) = g(f(x))",
        tip: "Untuk komposisi, periksa domain fungsi dalam dan syarat input fungsi luar."
      }
    ],
    workedExamples: [
      {
        prompt: "Tentukan domain h(x) = sqrt(9-x^2)/(x-1).",
        steps: [
          "Syarat akar: 9-x^2 >= 0, sehingga x^2 <= 9 dan -3 <= x <= 3.",
          "Syarat penyebut: x-1 != 0, sehingga x != 1.",
          "Ambil irisan kedua syarat dan keluarkan 1 dari interval yang sudah diperoleh."
        ],
        answer: "[-3, 1) U (1, 3]"
      },
      {
        prompt: "Tentukan puncak dan range g(x) = -(x+2)^2+5.",
        steps: [
          "Bentuk puncaknya adalah a(x-h)^2+k dengan h = -2 dan k = 5.",
          "Koefisien kuadrat negatif, jadi parabola membuka ke bawah.",
          "Nilai terbesar terjadi ketika (x+2)^2 = 0, yaitu pada x = -2."
        ],
        answer: "Puncak (-2, 5) dan range y <= 5."
      }
    ],
    traps: [
      "Mengizinkan nilai yang membuat penyebut nol.",
      "Menulis x >= h untuk range, padahal range dinyatakan dengan nilai y atau f(x).",
      "Menggeser grafik y = f(x+3) tiga satuan ke kanan, bukan ke kiri.",
      "Menganggap g(f(x)) dan f(g(x)) selalu sama."
    ],
    recap: [
      "Domain menjawab input mana yang sah; range menjawab output mana yang mungkin.",
      "Gabungkan seluruh pembatas domain dengan irisan.",
      "Gunakan bentuk kuadrat atau nilai mutlak untuk menemukan ekstrem dengan cepat.",
      "Pada komposisi, output fungsi dalam menjadi input fungsi luar."
    ]
  },
  {
    id: "a2",
    level: "advanced",
    title: "Kasus Tanda dan Nilai Ekstrem",
    subtitle: "Kendalikan pertidaksamaan tanpa membagi oleh tanda yang belum diketahui.",
    minutes: 35,
    pdfPages: "PDF 79-92",
    objectives: [
      "Menyelesaikan pertidaksamaan dengan tabel tanda.",
      "Memisahkan kasus untuk pangkat genap dan nilai mutlak.",
      "Menilai batas hasil operasi dengan memperhatikan tanda dan titik ujung."
    ],
    concepts: [
      {
        title: "Jangan bagi oleh tanda misterius",
        body: "Tanda pertidaksamaan berbalik saat dikali atau dibagi bilangan negatif. Jika tanda suatu variabel belum diketahui, memakainya sebagai pembagi dapat menghasilkan arah yang salah. Pindahkan semua suku ke satu sisi dan faktorkan.",
        formula: "y(x-3) < 0 -> kedua faktor berlainan tanda",
        tip: "Jika harus membagi oleh variabel, pecah menjadi kasus variabel positif dan negatif."
      },
      {
        title: "Tabel tanda",
        body: "Untuk hasil kali atau pecahan, tentukan titik kritis dari pembilang dan penyebut. Titik itu membagi garis bilangan menjadi interval. Uji satu nilai pada setiap interval, lalu sertakan atau keluarkan titik ujung sesuai simbol dan domain.",
        formula: "(x-a)(x-b) < 0 -> periksa interval di sekitar a dan b",
        tip: "Nol penyebut tidak pernah boleh dimasukkan."
      },
      {
        title: "Pangkat genap dan nilai mutlak",
        body: "Bentuk x^2 < k memberi interval di antara dua akar jika k positif, sedangkan x^2 > k memberi dua ekor di luar akar. Bentuk |A| < k berarti -k < A < k; bentuk |A| > k berarti A < -k atau A > k.",
        formula: "|A| < k -> -k < A < k, untuk k > 0",
        tip: "Kata dan cocok untuk bagian dalam interval; kata atau cocok untuk dua bagian luar."
      },
      {
        title: "Ekstrem dengan tanda",
        body: "Saat mencari batas jumlah atau hasil kali, jangan otomatis memasangkan angka terbesar. Tanda menentukan pasangan ekstrem. Periksa juga apakah setiap titik ujung terbuka atau tertutup.",
        formula: "batas terbuka tidak dapat menghasilkan nilai ujung",
        tip: "Buat daftar kandidat sudut interval, lalu uji kombinasi yang sah."
      }
    ],
    workedExamples: [
      {
        prompt: "Selesaikan (x-2)(x+5) < 0.",
        steps: [
          "Titik kritisnya x = -5 dan x = 2.",
          "Pada interval x < -5 kedua faktor negatif dan hasil kali positif.",
          "Pada -5 < x < 2 kedua faktor berlainan tanda dan hasil kali negatif.",
          "Pada x > 2 kedua faktor positif dan hasil kali positif. Karena simbol ketat, titik kritis tidak ikut."
        ],
        answer: "-5 < x < 2"
      },
      {
        prompt: "Jika 2 <= p < 5 dan -3 < q <= -1, tentukan range pq.",
        steps: [
          "p selalu positif dan q selalu negatif, jadi pq selalu negatif.",
          "Nilai paling negatif mendekati 5*(-3) = -15, tetapi kedua batas itu terbuka sehingga -15 tidak tercapai.",
          "Nilai terbesar diperoleh dari 2*(-1) = -2 dan kedua titik ujung tersebut tertutup."
        ],
        answer: "-15 < pq <= -2"
      }
    ],
    traps: [
      "Membagi pertidaksamaan dengan variabel tanpa mengetahui tandanya.",
      "Mengambil akar kuadrat dan hanya mempertahankan kasus positif.",
      "Memasukkan titik yang membuat penyebut nol.",
      "Menganggap batas terbuka dapat menghasilkan nilai ekstrem yang tepat."
    ],
    recap: [
      "Balik tanda hanya saat mengali atau membagi dengan nilai negatif.",
      "Tabel tanda menangani produk dan pecahan tanpa menebak tanda variabel.",
      "Pangkat genap dan nilai mutlak hampir selalu memerlukan dua sisi garis bilangan.",
      "Ekstrem bergantung pada tanda sekaligus status titik ujung."
    ]
  },
  {
    id: "a3",
    level: "advanced",
    title: "VIC: Pilih Angka dan Lacak Variabel",
    subtitle: "Ubah ekspresi abstrak menjadi kasus numerik yang mudah diaudit.",
    minutes: 32,
    pdfPages: "PDF 93-106",
    objectives: [
      "Mengenali soal dengan ekspresi variabel pada pilihan jawaban.",
      "Memilih angka yang sah, berbeda, dan mudah dihitung.",
      "Membangun tracking chart dan target numerik tanpa kehilangan arti variabel."
    ],
    concepts: [
      {
        title: "Kenali bentuk VIC",
        body: "VIC adalah soal dengan ekspresi variabel pada pilihan jawaban. Alih-alih menerjemahkan seluruh cerita langsung ke aljabar, Anda dapat memilih angka yang memenuhi semua syarat lalu menyelesaikan cerita dengan angka nyata.",
        formula: "variabel -> angka sah -> target numerik",
        tip: "Strategi ini paling berguna ketika pilihan jawaban tampak mirip dan aljabarnya rawan salah."
      },
      {
        title: "Pilih angka yang informatif",
        body: "Gunakan angka kecil, berbeda, dan sesuai batas soal. Hindari 0 atau 1 jika angka itu menghapus operasi penting. Untuk persen, pilih kelipatan 100; untuk rasio, pilih angka yang menjaga hasil bulat.",
        tip: "Jangan memilih angka hanya karena mudah jika angka tersebut melanggar hubungan seperti urutan, paritas, atau nonzero."
      },
      {
        title: "Tracking chart",
        body: "Catat simbol, angka, dan makna dalam tiga kolom. Chart mencegah tertukarnya laju dengan waktu, harga dengan jumlah, atau nilai awal dengan nilai akhir.",
        formula: "simbol | angka | arti",
        tip: "Salin chart ke setiap pilihan, bukan mengandalkan ingatan."
      },
      {
        title: "Bangun target",
        body: "Setelah angka dipilih, jawab pertanyaan pada stem secara langsung. Hasil numerik itulah target. Baru setelah target jelas, substitusikan angka ke pilihan jawaban.",
        tip: "Jika dua pilihan memberi target yang sama, gunakan set angka kedua yang tetap sah."
      }
    ],
    workedExamples: [
      {
        prompt: "Harga awal P mendapat diskon pecahan d, lalu pajak pecahan t dikenakan pada harga setelah diskon. Bentuk harga akhirnya.",
        steps: [
          "Pilih P = 80, d = 0.25, dan t = 0.10; semua angka memiliki peran berbeda.",
          "Setelah diskon, harga menjadi 80*(1-0.25) = 60.",
          "Setelah pajak, target menjadi 60*(1+0.10) = 66.",
          "Ekspresi P(1-d)(1+t) menghasilkan 66 dan mempertahankan urutan operasi."
        ],
        answer: "P(1-d)(1+t)"
      },
      {
        prompt: "Tangki berisi v liter. Tangki kehilangan r liter per jam selama h jam, lalu ditambah a liter. Bentuk volume akhir.",
        steps: [
          "Buat chart: v = 50, r = 4, h = 6, dan a = 7.",
          "Kehilangan total adalah 4*6 = 24 liter.",
          "Target volume akhir adalah 50-24+7 = 33 liter.",
          "Ekspresi v-rh+a menghasilkan target 33."
        ],
        answer: "v-rh+a"
      }
    ],
    traps: [
      "Memilih angka yang melanggar syarat soal.",
      "Memakai 0 atau 1 sehingga beberapa pilihan berbeda tampak sama.",
      "Menghitung pilihan sebelum menetapkan target dari stem.",
      "Menukar satuan, misalnya menit dengan jam."
    ],
    recap: [
      "VIC dikenali dari ekspresi variabel pada pilihan jawaban.",
      "Angka harus mudah sekaligus informatif dan sah.",
      "Tracking chart menjaga simbol tetap terhubung dengan maknanya.",
      "Target berasal dari cerita, bukan dari salah satu pilihan."
    ]
  },
  {
    id: "a4",
    level: "advanced",
    title: "VIC: TEACH dan Uji Semua Pilihan",
    subtitle: "Gunakan target untuk menguji pilihan dan pecahkan tabrakan hasil secara sistematis.",
    minutes: 34,
    pdfPages: "PDF 93-106",
    objectives: [
      "Menerapkan TEACH dengan menguji setiap pilihan jawaban.",
      "Mendeteksi collision dan memilih set angka kedua.",
      "Menggunakan VIC pada persamaan tanpa memilih variabel secara tidak konsisten."
    ],
    concepts: [
      {
        title: "TEACH",
        body: "TEACH berarti Test Each Answer Choice. Substitusikan angka tracking chart ke kelima pilihan, tandai hasilnya, dan pilih satu-satunya ekspresi yang sama dengan target.",
        formula: "target == nilai pilihan yang benar",
        tip: "Tetap uji semua pilihan meskipun satu pilihan awal sudah cocok."
      },
      {
        title: "Collision dan set kedua",
        body: "Collision terjadi ketika lebih dari satu pilihan menghasilkan target untuk angka yang dipilih. Itu bukan bukti bahwa soal ambigu. Pilih angka sah kedua dan uji hanya kandidat yang masih hidup.",
        tip: "Set kedua sebaiknya tidak simetris dan tidak memakai 0 atau 1."
      },
      {
        title: "VIC berbasis persamaan",
        body: "Jika variabel terikat oleh persamaan, pilih angka bebas hanya pada satu sisi atau untuk sebagian variabel, lalu selesaikan variabel sisanya dari persamaan. Jangan menetapkan semua angka secara bebas karena persamaan dapat dilanggar.",
        formula: "pilih variabel bebas -> gunakan persamaan -> temukan variabel terikat",
        tip: "Periksa kembali bahwa set angka memenuhi persamaan asli sebelum menguji pilihan."
      },
      {
        title: "Pilih VIC atau aljabar",
        body: "VIC unggul ketika pilihan berupa ekspresi dan substitusi cepat. Aljabar unggul ketika isolasi variabel hanya membutuhkan satu atau dua langkah. Gunakan metode yang paling mudah diperiksa dalam waktu terbatas.",
        tip: "Anda boleh memakai VIC untuk verifikasi setelah memperoleh jawaban secara aljabar."
      }
    ],
    workedExamples: [
      {
        prompt: "Jika u+v = wt, ekspresi mana yang setara dengan v?",
        steps: [
          "Pilih u = 4, w = 3, dan t = 6, lalu gunakan persamaan untuk memperoleh v = 14.",
          "Targetnya 14. Uji kandidat seperti wt+u, wt-u, w(t-u), dan wt/u.",
          "Hanya wt-u yang memberi 3*6-4 = 14.",
          "Konfirmasi aljabar: kurangi u dari kedua sisi sehingga v = wt-u."
        ],
        answer: "wt-u"
      },
      {
        prompt: "Bedakan kandidat x^2+4x+4 dan 4x+8 untuk bentuk (x+2)^2.",
        steps: [
          "Dengan x = 2, target (2+2)^2 = 16 dan kedua kandidat sama-sama menghasilkan 16.",
          "Collision berarti set pertama belum menentukan jawaban.",
          "Pilih x = 3. Target menjadi 25; kandidat pertama memberi 25 dan kandidat kedua memberi 20.",
          "Set kedua menyisakan x^2+4x+4, sesuai hasil ekspansi."
        ],
        answer: "x^2+4x+4"
      }
    ],
    traps: [
      "Berhenti setelah pilihan pertama yang cocok.",
      "Menganggap dua pilihan yang collision pasti keduanya benar.",
      "Menetapkan semua variabel bebas pada VIC berbasis persamaan.",
      "Memilih angka kedua yang menghasilkan collision yang sama."
    ],
    recap: [
      "TEACH menuntut pengujian setiap pilihan.",
      "Collision diselesaikan dengan set angka sah kedua.",
      "Persamaan menentukan sebagian variabel dalam tracking chart.",
      "Metode terbaik adalah metode yang cepat sekaligus dapat diaudit."
    ]
  },
  {
    id: "a5",
    level: "advanced",
    title: "Data Sufficiency: Rephrasing dan Counterexample",
    subtitle: "Nilai kecukupan informasi, bukan sekadar kemampuan menghitung satu contoh.",
    minutes: 38,
    pdfPages: "PDF 107-120",
    objectives: [
      "Menghafal logika lima jawaban Data Sufficiency.",
      "Menyederhanakan pertanyaan dan pernyataan sebelum menilai kecukupan.",
      "Membuktikan ketidakcukupan dengan dua contoh yang menghasilkan jawaban berbeda."
    ],
    concepts: [
      {
        title: "Apa yang harus diketahui?",
        body: "Rephrase pertanyaan menjadi target paling sederhana sebelum membaca pernyataan. Untuk pertanyaan nilai, Anda memerlukan satu nilai unik. Untuk pertanyaan ya atau tidak, jawaban yang selalu ya atau selalu tidak sama-sama cukup.",
        tip: "Jangan menghitung lebih banyak daripada yang diminta."
      },
      {
        title: "Uji pernyataan secara independen",
        body: "Nilai pernyataan (1) tanpa membawa informasi pernyataan (2), lalu nilai pernyataan (2) dari awal tanpa membawa informasi pernyataan (1). Gabungkan hanya jika keduanya sendiri tidak cukup.",
        formula: "uji (1) -> uji (2) -> jika perlu, gabungkan",
        tip: "Menyalin hasil pernyataan pertama ke pernyataan kedua adalah kesalahan prosedur."
      },
      {
        title: "Rephrasing dengan manipulasi",
        body: "Gunakan perkalian atau pembagian, kuadrat atau akar, distribusi atau faktorisasi, serta kombinasi atau substitusi untuk menyingkap informasi tersembunyi. Setiap manipulasi harus mempertahankan seluruh solusi yang sah.",
        tip: "Saat mengakar kuadrat, pertahankan kemungkinan positif dan negatif kecuali tanda sudah diketahui."
      },
      {
        title: "Counterexample",
        body: "Satu contoh hanya menunjukkan bahwa sebuah hasil mungkin. Untuk membuktikan pernyataan tidak cukup, cari dua set nilai yang sama-sama memenuhi informasi tetapi memberi jawaban berbeda pada pertanyaan.",
        formula: "set sah A -> YA, set sah B -> TIDAK = tidak cukup",
        tip: "Gunakan angka sederhana dari kategori berbeda: positif-negatif, genap-ganjil, atau lebih kecil-lebih besar."
      }
    ],
    workedExamples: [
      {
        prompt: "Apakah m < n? (1) 5m+7 < 5n+7. (2) n-m > 0.",
        steps: [
          "Pernyataan (1): kurangi 7 dan bagi 5 yang positif untuk memperoleh m < n. Pernyataan (1) cukup.",
          "Mulai ulang untuk pernyataan (2): n-m > 0 setara dengan n > m. Pernyataan (2) juga cukup.",
          "Karena masing-masing pernyataan sendiri memberi jawaban ya yang pasti, pilih kategori D."
        ],
        answer: "D - Masing-masing pernyataan sendiri cukup."
      },
      {
        prompt: "Diketahui xy = 18. Apakah x > y? (1) x dan y positif. (2) x-y = 3.",
        steps: [
          "Pernyataan (1) tidak cukup: (x,y) = (6,3) memberi ya, sedangkan (3,6) memberi tidak.",
          "Mulai ulang untuk pernyataan (2). Persamaan x-y = 3 langsung menyatakan x > y.",
          "Pernyataan (2) sendiri cukup dan pernyataan (1) sendiri tidak cukup."
        ],
        answer: "B - Pernyataan (2) saja cukup."
      }
    ],
    traps: [
      "Mencari nilai lengkap ketika pertanyaan hanya meminta ya atau tidak.",
      "Menggabungkan pernyataan sebelum menguji masing-masing secara mandiri.",
      "Menganggap satu contoh yang berhasil membuktikan kecukupan.",
      "Melupakan solusi negatif setelah mengakar persamaan kuadrat."
    ],
    recap: [
      "Rephrase target sebelum menilai informasi.",
      "Jawaban ya yang pasti dan tidak yang pasti sama-sama cukup.",
      "Uji kedua pernyataan secara independen.",
      "Dua contoh berlawanan membuktikan ketidakcukupan."
    ]
  },
  {
    id: "a6",
    level: "advanced",
    title: "Strategi Campuran Bertempo dan Analisis Kesalahan",
    subtitle: "Satukan konsep, strategi, dan keputusan waktu dalam satu siklus latihan.",
    minutes: 40,
    pdfPages: "PDF 69-120",
    objectives: [
      "Memilih strategi tercepat berdasarkan struktur soal.",
      "Menggunakan checkpoint waktu untuk mencegah satu soal menghabiskan sesi.",
      "Mencatat akar kesalahan dan merancang latihan perbaikan yang spesifik."
    ],
    concepts: [
      {
        title: "Siklus keputusan cepat",
        body: "Baca pertanyaan, tandai syarat, lalu pilih jalur: struktur fungsi, tabel tanda, VIC, atau uji kecukupan. Jangan mulai manipulasi panjang sebelum mengetahui apa yang dicari.",
        formula: "target -> batas -> metode -> eksekusi -> verifikasi",
        tip: "Jika struktur langsung memberi jawaban, jangan membangun tabel panjang."
      },
      {
        title: "Checkpoint waktu",
        body: "Dalam latihan bertempo, gunakan checkpoint sekitar 45 detik untuk memastikan ada jalur, 90 detik untuk menilai kemajuan, dan 120 detik untuk mengambil keputusan akhir. Checkpoint bukan alarm panik, melainkan batas investasi.",
        tip: "Jika belum ada model soal pada checkpoint pertama, berhenti menghitung dan klasifikasikan ulang."
      },
      {
        title: "Log kesalahan",
        body: "Klasifikasikan kesalahan sebagai konsep, setup, proses, perhitungan, atau pacing. Catat bukti salah, prosedur benar, dan pemicu yang harus dikenali pada soal berikutnya.",
        formula: "gejala -> akar masalah -> aturan perbaikan -> soal ulang",
        tip: "Label seperti ceroboh terlalu umum; tulis tindakan yang benar-benar dapat diubah."
      },
      {
        title: "Siklus perbaikan",
        body: "Setelah membaca pembahasan, tutup solusi dan kerjakan ulang dari awal. Ulangi lagi setelah jeda, lalu campurkan topik agar Anda berlatih memilih metode, bukan hanya mengulang pola yang baru diingat.",
        tip: "Keberhasilan ulang langsung belum membuktikan penguasaan; gunakan pengulangan tertunda."
      }
    ],
    workedExamples: [
      {
        prompt: "Apakah mungkin f(x) > 4 jika f(x) = 4-(x-2)^2?",
        steps: [
          "Kenali struktur kuadrat sebelum mengembangkan ekspresi.",
          "Karena (x-2)^2 >= 0, maka -(x-2)^2 <= 0.",
          "Akibatnya f(x) selalu <= 4. Tidak perlu mencoba banyak nilai x.",
          "Catat strategi: gunakan batas struktural ketika kuadrat muncul sebagai pengurang."
        ],
        answer: "Tidak mungkin. Nilai maksimum f(x) adalah 4."
      },
      {
        prompt: "Tinjau kesalahan DS: untuk pertanyaan 'Apakah t > 0?', pernyataan (1) t^2 = 9 diuji hanya dengan t = 3 dan dinilai cukup; pernyataan (2) t = 3.",
        steps: [
          "Pernyataan (1) memiliki dua solusi, t = 3 dan t = -3, yang memberi jawaban berbeda. Jadi tidak cukup.",
          "Pernyataan (2) memberi t positif secara unik, jadi cukup.",
          "Jawaban DS adalah B.",
          "Akar kesalahan adalah proses pembuktian: satu contoh dipakai untuk menyatakan cukup. Aturan perbaikan adalah mencari counterexample sebelum memutuskan."
        ],
        answer: "B, dengan kategori kesalahan proses."
      }
    ],
    traps: [
      "Memulai aljabar sebelum mengidentifikasi target dan batas.",
      "Bertahan pada metode yang tidak maju hanya karena sudah menghabiskan waktu.",
      "Menulis ceroboh tanpa mencatat tindakan penyebabnya.",
      "Menganggap soal dikuasai setelah melihat pembahasan sekali."
    ],
    recap: [
      "Pilih metode dari struktur, bukan dari kebiasaan.",
      "Checkpoint menjaga alokasi waktu tetap rasional.",
      "Log kesalahan harus menghasilkan aturan perbaikan yang dapat dilakukan.",
      "Kerjakan ulang sekarang, setelah jeda, lalu dalam set campuran."
    ]
  }
];

export const advancedQuizQuestions = [
  {
    id: "a1-q1",
    sessionId: "a1",
    level: "advanced",
    topic: "function-domain",
    difficulty: 3,
    prompt: "Apakah domain D(x) = sqrt(10-2x)/(x+1)?",
    options: ["x <= 5", "x <= 5 dan x != -1", "x >= 5 dan x != -1", "-1 < x <= 5", "Semua bilangan real kecuali -1"],
    answer: 1,
    hint: "Gabungkan syarat isi akar dengan syarat penyebut.",
    explanation: "Isi akar mensyaratkan 10-2x >= 0, sehingga x <= 5. Penyebut mensyaratkan x != -1. Keduanya harus berlaku sekaligus.",
    timeTargetSec: 105
  },
  {
    id: "a1-q2",
    sessionId: "a1",
    level: "advanced",
    topic: "function-range",
    difficulty: 3,
    prompt: "Apakah range f(x) = (x-4)^2+7?",
    options: ["y <= 7", "y < 7", "y >= 7", "y > 7", "Semua bilangan real"],
    answer: 2,
    hint: "Nilai kuadrat tidak pernah negatif.",
    explanation: "Karena (x-4)^2 >= 0, nilai terkecil f adalah 7 saat x = 4. Semua nilai y >= 7 dapat dicapai.",
    timeTargetSec: 75
  },
  {
    id: "a1-q3",
    sessionId: "a1",
    level: "advanced",
    topic: "function-graphs",
    difficulty: 3,
    prompt: "Pernyataan mana yang benar untuk y = |x+3|-2?",
    options: ["Puncak (-3,-2) dan membuka ke atas", "Puncak (3,-2) dan membuka ke atas", "Puncak (-3,2) dan membuka ke bawah", "Puncak (3,2) dan membuka ke bawah", "Grafiknya garis lurus"],
    answer: 0,
    hint: "Samakan bagian dalam nilai mutlak dengan nol.",
    explanation: "|x+3| bernilai minimum 0 pada x = -3. Setelah dikurangi 2, puncaknya (-3,-2), dan grafik nilai mutlak membuka ke atas.",
    timeTargetSec: 80
  },
  {
    id: "a1-q4",
    sessionId: "a1",
    level: "advanced",
    topic: "function-composition",
    difficulty: 3,
    prompt: "Jika f(x) = 1/(x-2) dan g(t) = sqrt(t), apakah domain g(f(x))?",
    options: ["x != 2", "x < 2", "x >= 2", "x > 2", "Semua bilangan real"],
    answer: 3,
    hint: "Input g harus nonnegatif, dan f tidak pernah bernilai nol.",
    explanation: "Kita memerlukan 1/(x-2) >= 0. Pecahan itu positif hanya saat x-2 > 0, sehingga x > 2. Nilai x = 2 juga tidak terdefinisi.",
    timeTargetSec: 120
  },
  {
    id: "a1-q5",
    sessionId: "a1",
    level: "advanced",
    topic: "function-analysis",
    difficulty: 3,
    prompt: "Untuk h(x) = -2(x-1)^2+9, nilai x mana yang memenuhi h(x) = 1?",
    options: ["-3 dan 5", "-1 dan 3", "1 dan 9", "-2 dan 4", "Tidak ada solusi real"],
    answer: 1,
    hint: "Isolasi bentuk kuadrat terlebih dahulu.",
    explanation: "-2(x-1)^2+9 = 1 memberi (x-1)^2 = 4. Jadi x-1 = 2 atau -2, sehingga x = 3 atau x = -1.",
    timeTargetSec: 105
  },
  {
    id: "a2-q1",
    sessionId: "a2",
    level: "advanced",
    topic: "inequality-sign-chart",
    difficulty: 3,
    prompt: "Apakah himpunan solusi (x-6)(x+1) >= 0?",
    options: ["x <= -1 atau x >= 6", "-1 <= x <= 6", "x < -1 atau x > 6", "x >= -1", "x <= 6"],
    answer: 0,
    hint: "Produk dua faktor bernilai nonnegatif saat tandanya sama atau salah satunya nol.",
    explanation: "Titik kritisnya -1 dan 6. Produk positif di luar kedua titik dan nol pada kedua titik, sehingga x <= -1 atau x >= 6.",
    timeTargetSec: 105
  },
  {
    id: "a2-q2",
    sessionId: "a2",
    level: "advanced",
    topic: "inequality-sign-cases",
    difficulty: 3,
    prompt: "Jika a < 0 dan ab > ac, hubungan mana yang harus benar?",
    options: ["b > c", "b = c", "b < c", "b+c > 0", "Tidak ada hubungan yang dapat ditentukan"],
    answer: 2,
    hint: "Membagi dengan a berarti membagi dengan bilangan negatif.",
    explanation: "Karena a negatif, pembagian kedua sisi ab > ac dengan a membalik arah pertidaksamaan. Hasilnya b < c.",
    timeTargetSec: 75
  },
  {
    id: "a2-q3",
    sessionId: "a2",
    level: "advanced",
    topic: "absolute-value-inequalities",
    difficulty: 3,
    prompt: "Apakah solusi |2x-3| < 5?",
    options: ["x < -1 atau x > 4", "-1 < x < 4", "-4 < x < 1", "x <= -1 atau x >= 4", "-1 <= x <= 4"],
    answer: 1,
    hint: "Ubah menjadi pertidaksamaan rangkap -5 < 2x-3 < 5.",
    explanation: "Dari -5 < 2x-3 < 5, tambahkan 3 sehingga -2 < 2x < 8, lalu bagi 2 untuk memperoleh -1 < x < 4.",
    timeTargetSec: 90
  },
  {
    id: "a2-q4",
    sessionId: "a2",
    level: "advanced",
    topic: "inequality-extremes",
    difficulty: 3,
    prompt: "Jika 1 <= x < 4 dan -2 < y <= 3, nilai mana yang tidak mungkin sama dengan xy?",
    options: ["-7", "0", "3", "11", "12"],
    answer: 4,
    hint: "x positif. Cari batas bawah dan atas produk serta periksa titik ujung.",
    explanation: "Produk dapat mendekati -8 dan 12, tetapi tidak dapat mencapai keduanya karena x < 4 dan y > -2. Jadi range produk adalah -8 < xy < 12; nilai 12 tidak mungkin.",
    timeTargetSec: 135
  },
  {
    id: "a2-q5",
    sessionId: "a2",
    level: "advanced",
    topic: "even-power-inequalities",
    difficulty: 3,
    prompt: "Apakah solusi x^2 >= 16?",
    options: ["-4 <= x <= 4", "x >= 4", "x <= -4", "x <= -4 atau x >= 4", "-4 < x < 4"],
    answer: 3,
    hint: "Nilai absolut x harus setidaknya 4.",
    explanation: "x^2 >= 16 setara dengan |x| >= 4. Karena itu x berada di dua bagian luar: x <= -4 atau x >= 4.",
    timeTargetSec: 75
  },
  {
    id: "a3-q1",
    sessionId: "a3",
    level: "advanced",
    topic: "vic-cost",
    difficulty: 3,
    prompt: "Sebuah toko membeli n unit dengan biaya c per unit dan menjual s unit dengan harga p per unit. Ekspresi mana yang menyatakan biaya bersih setelah pendapatan penjualan?",
    options: ["nc+sp", "np-sc", "nc-sp", "(n-s)(c-p)", "ns-cp"],
    answer: 2,
    hint: "Biaya bersih adalah pengeluaran dikurangi pendapatan.",
    explanation: "Pengeluaran toko adalah nc dan pendapatannya sp. Jadi biaya bersih setelah pendapatan adalah nc-sp.",
    timeTargetSec: 90
  },
  {
    id: "a3-q2",
    sessionId: "a3",
    level: "advanced",
    topic: "vic-averages",
    difficulty: 3,
    prompt: "Seseorang menerima satu hadiah sebesar x dan lima hadiah yang masing-masing sebesar y. Berapakah rata-rata keenam hadiah?",
    options: ["(5x+y)/6", "(x+5y)/6", "(x+y)/6", "x+5y", "(x+y)/2"],
    answer: 1,
    hint: "Jumlahkan keenam nilai lalu bagi dengan banyak hadiah.",
    explanation: "Total hadiah adalah x+5y dan jumlah hadiahnya 6. Rata-ratanya (x+5y)/6.",
    timeTargetSec: 85
  },
  {
    id: "a3-q3",
    sessionId: "a3",
    level: "advanced",
    topic: "vic-rates",
    difficulty: 3,
    prompt: "Seorang pesepeda menempuh jarak d dengan kecepatan v, lalu berhenti selama h jam. Berapakah kecepatan rata-rata untuk seluruh waktu perjalanan dan istirahat?",
    options: ["d/(v+h)", "(d+h)/v", "d/(d/v+h)", "v/(d+h)", "dv/h"],
    answer: 2,
    hint: "Kecepatan rata-rata adalah total jarak dibagi total waktu.",
    explanation: "Waktu berkendara adalah d/v dan waktu total d/v+h. Dengan jarak total d, kecepatan rata-rata menjadi d/(d/v+h).",
    timeTargetSec: 120
  },
  {
    id: "a3-q4",
    sessionId: "a3",
    level: "advanced",
    topic: "vic-percent",
    difficulty: 3,
    prompt: "Harga p naik r persen, lalu harga baru didiskon s persen. Ekspresi mana yang menyatakan harga akhir?",
    options: ["p(1+(r-s)/100)", "p(1+r/100-s/100)", "p(r-s)/100", "p(1+r/100)(1-s/100)", "p(1-r/100)(1+s/100)"],
    answer: 3,
    hint: "Perubahan kedua bekerja pada harga yang sudah berubah.",
    explanation: "Kenaikan mengalikan harga dengan 1+r/100. Diskon berikutnya mengalikan hasil itu dengan 1-s/100, sehingga harga akhir p(1+r/100)(1-s/100).",
    timeTargetSec: 105
  },
  {
    id: "a3-q5",
    sessionId: "a3",
    level: "advanced",
    topic: "vic-ages",
    difficulty: 3,
    prompt: "Dalam k tahun, usia seorang ibu akan m kali usia anaknya. Jika usia anak sekarang c, berapakah usia ibu sekarang?",
    options: ["m(c+k)-k", "mc+k", "m(c-k)+k", "m(c+k)", "mc-k"],
    answer: 0,
    hint: "Tulis usia keduanya dalam k tahun, lalu kembalikan usia ibu ke saat ini.",
    explanation: "Dalam k tahun usia anak c+k, sehingga usia ibu saat itu m(c+k). Usia ibu sekarang adalah k tahun lebih muda, yaitu m(c+k)-k.",
    timeTargetSec: 115
  },
  {
    id: "a4-q1",
    sessionId: "a4",
    level: "advanced",
    topic: "vic-equations",
    difficulty: 3,
    prompt: "Jika pq = r(s+2) dan q != 0, ekspresi mana yang setara dengan p?",
    options: ["q/[r(s+2)]", "r(s+2)/q", "r(q+2)/s", "qs/(r+2)", "rq/(s+2)"],
    answer: 1,
    hint: "Pilih nilai untuk r, s, dan q, lalu gunakan persamaan untuk menentukan p.",
    explanation: "Membagi kedua sisi pq = r(s+2) dengan q memberi p = r(s+2)/q. Set angka VIC yang sah akan menghasilkan target yang sama.",
    timeTargetSec: 100
  },
  {
    id: "a4-q2",
    sessionId: "a4",
    level: "advanced",
    topic: "vic-equations",
    difficulty: 3,
    prompt: "Jika y = (x-3)/(x+2) dan y != 1, ekspresi mana yang setara dengan x?",
    options: ["(3+2y)/(1-y)", "(3-2y)/(1+y)", "(y+3)/(y-2)", "(2y-3)/(1-y)", "(3+2y)/(1+y)"],
    answer: 0,
    hint: "Kalikan silang, lalu kumpulkan semua suku yang memuat x.",
    explanation: "yx+2y = x-3, sehingga x(y-1) = -3-2y. Membagi dengan y-1 memberi x = (-3-2y)/(y-1) = (3+2y)/(1-y).",
    timeTargetSec: 135
  },
  {
    id: "a4-q3",
    sessionId: "a4",
    level: "advanced",
    topic: "vic-units",
    difficulty: 3,
    prompt: "Sebuah tim menyelesaikan j pekerjaan dalam h jam dengan laju konstan. Berapa pekerjaan yang diselesaikan dalam t menit?",
    options: ["60jt/h", "jh/(60t)", "jt/(60h)", "60jh/t", "j/(60ht)"],
    answer: 2,
    hint: "Ubah t menit menjadi t/60 jam.",
    explanation: "Lajunya j/h pekerjaan per jam. Dalam t/60 jam, jumlah pekerjaan adalah (j/h)(t/60) = jt/(60h).",
    timeTargetSec: 100
  },
  {
    id: "a4-q4",
    sessionId: "a4",
    level: "advanced",
    topic: "vic-equivalent-expressions",
    difficulty: 3,
    prompt: "Jika z != 3, ekspresi mana yang setara dengan (z^2-9)/(z-3)?",
    options: ["z-3", "z+3", "z^2+3", "1", "z+6"],
    answer: 1,
    hint: "Faktorkan selisih dua kuadrat atau uji z = 5.",
    explanation: "z^2-9 = (z-3)(z+3). Karena z != 3, faktor z-3 dapat dicoret dan hasilnya z+3.",
    timeTargetSec: 75
  },
  {
    id: "a4-q5",
    sessionId: "a4",
    level: "advanced",
    topic: "vic-averages",
    difficulty: 3,
    prompt: "Rata-rata a, b, dan c adalah m. Jika d ditambahkan sebagai nilai keempat, berapakah rata-rata baru?",
    options: ["(m+d)/4", "(a+b+c+d)/3", "(3m+d)/4", "m+d/4", "4m+d"],
    answer: 2,
    hint: "Ubah rata-rata awal menjadi jumlah tiga nilai.",
    explanation: "Dari (a+b+c)/3 = m, total tiga nilai adalah 3m. Setelah d ditambahkan, rata-rata empat nilai menjadi (3m+d)/4.",
    timeTargetSec: 90
  },
  {
    id: "a5-q1",
    sessionId: "a5",
    level: "advanced",
    topic: "data-sufficiency-values",
    difficulty: 3,
    prompt: "Berapakah x? (1) x^2 = 25. (2) x > 0.",
    options: ["Pernyataan (1) saja cukup, tetapi (2) saja tidak cukup.", "Pernyataan (2) saja cukup, tetapi (1) saja tidak cukup.", "Kedua pernyataan bersama cukup, tetapi masing-masing saja tidak cukup.", "Masing-masing pernyataan sendiri cukup.", "Kedua pernyataan bersama tetap tidak cukup."],
    answer: 2,
    hint: "Pernyataan (1) memberi dua kemungkinan tanda.",
    explanation: "Pernyataan (1) memberi x = 5 atau -5. Pernyataan (2) memberi banyak nilai positif. Bersama-sama, tanda positif memilih x = 5 secara unik, jadi jawabannya C.",
    timeTargetSec: 115
  },
  {
    id: "a5-q2",
    sessionId: "a5",
    level: "advanced",
    topic: "data-sufficiency-rephrasing",
    difficulty: 3,
    prompt: "Apakah p > q? (1) p-q = 4. (2) 6p > 6q.",
    options: ["Pernyataan (1) saja cukup, tetapi (2) saja tidak cukup.", "Pernyataan (2) saja cukup, tetapi (1) saja tidak cukup.", "Kedua pernyataan bersama cukup, tetapi masing-masing saja tidak cukup.", "Masing-masing pernyataan sendiri cukup.", "Kedua pernyataan bersama tetap tidak cukup."],
    answer: 3,
    hint: "Rephrase setiap pernyataan menjadi hubungan langsung antara p dan q.",
    explanation: "Pernyataan (1) berarti p empat lebih besar dari q. Pernyataan (2), setelah dibagi 6 positif, berarti p > q. Masing-masing sendiri cukup, jadi jawabannya D.",
    timeTargetSec: 90
  },
  {
    id: "a5-q3",
    sessionId: "a5",
    level: "advanced",
    topic: "data-sufficiency-systems",
    difficulty: 3,
    prompt: "Berapakah ab? (1) a+b = 10. (2) a-b = 2.",
    options: ["Pernyataan (1) saja cukup, tetapi (2) saja tidak cukup.", "Pernyataan (2) saja cukup, tetapi (1) saja tidak cukup.", "Kedua pernyataan bersama cukup, tetapi masing-masing saja tidak cukup.", "Masing-masing pernyataan sendiri cukup.", "Kedua pernyataan bersama tetap tidak cukup."],
    answer: 2,
    hint: "Masing-masing persamaan memiliki banyak pasangan, tetapi gabungannya dapat menentukan a dan b.",
    explanation: "Masing-masing pernyataan sendiri memungkinkan banyak produk. Bersama-sama, penjumlahan persamaan memberi 2a = 12, jadi a = 6 dan b = 4; ab = 24. Jawabannya C.",
    timeTargetSec: 120
  },
  {
    id: "a5-q4",
    sessionId: "a5",
    level: "advanced",
    topic: "data-sufficiency-counterexamples",
    difficulty: 3,
    prompt: "Apakah xy > 0? (1) x+y > 0. (2) x-y > 0.",
    options: ["Pernyataan (1) saja cukup, tetapi (2) saja tidak cukup.", "Pernyataan (2) saja cukup, tetapi (1) saja tidak cukup.", "Kedua pernyataan bersama cukup, tetapi masing-masing saja tidak cukup.", "Masing-masing pernyataan sendiri cukup.", "Kedua pernyataan bersama tetap tidak cukup."],
    answer: 4,
    hint: "Cari dua pasangan yang memenuhi kedua pertidaksamaan tetapi memberi tanda produk berbeda.",
    explanation: "Pasangan (3,1) memenuhi keduanya dan memberi produk positif. Pasangan (3,-1) juga memenuhi keduanya tetapi memberi produk negatif. Bahkan bersama-sama tidak cukup, jadi jawabannya E.",
    timeTargetSec: 135
  },
  {
    id: "a5-q5",
    sessionId: "a5",
    level: "advanced",
    topic: "data-sufficiency-signs",
    difficulty: 3,
    prompt: "Apakah x > 0? (1) x^3 > 0. (2) x^2 > 0.",
    options: ["Pernyataan (1) saja cukup, tetapi (2) saja tidak cukup.", "Pernyataan (2) saja cukup, tetapi (1) saja tidak cukup.", "Kedua pernyataan bersama cukup, tetapi masing-masing saja tidak cukup.", "Masing-masing pernyataan sendiri cukup.", "Kedua pernyataan bersama tetap tidak cukup."],
    answer: 0,
    hint: "Pangkat ganjil mempertahankan tanda; kuadrat hanya menunjukkan bahwa x bukan nol.",
    explanation: "x^3 > 0 mengharuskan x > 0, jadi pernyataan (1) cukup. x^2 > 0 hanya berarti x != 0 dan mengizinkan tanda positif atau negatif, jadi (2) tidak cukup. Jawabannya A.",
    timeTargetSec: 100
  },
  {
    id: "a6-q1",
    sessionId: "a6",
    level: "advanced",
    topic: "mixed-functions",
    difficulty: 3,
    prompt: "Tanpa membuat tabel titik, apakah range f(x) = 3-(x+1)^2?",
    options: ["y >= 3", "y <= 3", "y > 3", "y < 3", "Semua bilangan real"],
    answer: 1,
    hint: "Gunakan batas (x+1)^2 >= 0.",
    explanation: "Karena kuadrat nonnegatif, -(x+1)^2 <= 0. Jadi f(x) tidak pernah melebihi 3 dan mencapai 3 saat x = -1; range y <= 3.",
    timeTargetSec: 65
  },
  {
    id: "a6-q2",
    sessionId: "a6",
    level: "advanced",
    topic: "mixed-inequalities",
    difficulty: 3,
    prompt: "Apakah solusi (x-1)/(x+2) > 0?",
    options: ["x < -2 atau x > 1", "-2 < x < 1", "x <= -2 atau x >= 1", "x > -2", "x < 1"],
    answer: 0,
    hint: "Gunakan titik kritis -2 dan 1, lalu uji tanda tiap interval.",
    explanation: "Pembilang dan penyebut bertanda sama pada x < -2 dan x > 1. x = -2 tidak terdefinisi dan x = 1 menghasilkan nol, jadi keduanya tidak disertakan.",
    timeTargetSec: 115
  },
  {
    id: "a6-q3",
    sessionId: "a6",
    level: "advanced",
    topic: "mixed-vic",
    difficulty: 3,
    prompt: "Wadah berisi V liter, mengalirkan keluar r liter per menit selama n menit, lalu menerima tambahan a liter. Ekspresi mana yang menyatakan volume akhir?",
    options: ["V-r+n+a", "V-r(n+a)", "V+rn-a", "V-rn+a", "(V-r)n+a"],
    answer: 3,
    hint: "Laju kali waktu memberi volume yang keluar.",
    explanation: "Volume keluar adalah rn. Kurangi jumlah itu dari V, lalu tambahkan a, sehingga volume akhir V-rn+a.",
    timeTargetSec: 75
  },
  {
    id: "a6-q4",
    sessionId: "a6",
    level: "advanced",
    topic: "mixed-data-sufficiency",
    difficulty: 3,
    prompt: "Berapakah z? (1) z+u = 9. (2) u = 4.",
    options: ["Pernyataan (1) saja cukup, tetapi (2) saja tidak cukup.", "Pernyataan (2) saja cukup, tetapi (1) saja tidak cukup.", "Kedua pernyataan bersama cukup, tetapi masing-masing saja tidak cukup.", "Masing-masing pernyataan sendiri cukup.", "Kedua pernyataan bersama tetap tidak cukup."],
    answer: 2,
    hint: "Tanyakan apakah tiap pernyataan sendiri menentukan satu nilai z.",
    explanation: "Pernyataan (1) sendiri memiliki banyak pasangan z dan u; pernyataan (2) sendiri tidak memberi z. Bersama-sama, z+4 = 9 sehingga z = 5. Jawabannya C.",
    timeTargetSec: 90
  },
  {
    id: "a6-q5",
    sessionId: "a6",
    level: "advanced",
    topic: "error-analysis",
    difficulty: 3,
    prompt: "Seorang peserta mengubah xy > 3y menjadi x > 3 dengan membagi kedua sisi oleh y. Apakah akar kesalahannya?",
    options: ["Ia lupa mendistribusikan x.", "Ia membagi dengan variabel yang tandanya belum diketahui.", "Ia seharusnya menguadratkan kedua sisi.", "Suku 3y tidak boleh dipindahkan.", "Pertidaksamaan awal tidak memiliki solusi."],
    answer: 1,
    hint: "Arah pertidaksamaan bergantung pada tanda pembagi.",
    explanation: "Jika y positif, hasilnya x > 3; jika y negatif, tanda berbalik menjadi x < 3; jika y = 0, pertidaksamaan awal salah. Membagi tanpa mengetahui tanda y menghapus kasus penting.",
    timeTargetSec: 80
  }
];
