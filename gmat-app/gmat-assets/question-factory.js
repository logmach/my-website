import { choose, createRng, randomInt, sample, shuffle } from "./random.js";

function mcq(rng, config) {
  const choices = [
    { text: String(config.correct), correct: true },
    ...config.distractors.map((value) => ({ text: String(value), correct: false })),
  ];
  const unique = [];
  const seen = new Set();
  for (const choice of choices) {
    if (!seen.has(choice.text)) {
      seen.add(choice.text);
      unique.push(choice);
    }
  }
  if (unique.length < 5 && typeof config.correct === "number") {
    let delta = 3;
    while (unique.length < 5) {
      const text = String(config.correct + delta);
      if (!seen.has(text)) {
        seen.add(text);
        unique.push({ text, correct: false });
      }
      delta += 1;
    }
  }
  if (unique.length !== 5) {
    throw new Error(`Question ${config.id} must have five unique options; found ${unique.length}.`);
  }
  const options = shuffle(rng, unique);
  return {
    id: config.id,
    topic: config.topic,
    level: config.level,
    difficulty: config.difficulty,
    prompt: config.prompt,
    options: options.map((option) => option.text),
    answer: options.findIndex((option) => option.correct),
    hint: config.hint,
    explanation: config.explanation,
    timeTargetSec: config.timeTargetSec ?? 120,
    sourceRef: config.sourceRef,
  };
}

function numberDistractors(correct, steps = [1, -1, 2, -2]) {
  return steps.map((step) => correct + step);
}

function factory(meta, build) {
  return { ...meta, build };
}

const easyFactories = [
  factory({ id: "linear", topic: "linear-equations", level: "beginner", difficulty: 1, sourceRef: "PDF 15" }, (rng) => {
    const x = randomInt(rng, -6, 9);
    const a = randomInt(rng, 2, 6);
    const b = randomInt(rng, -8, 8);
    const c = a * x + b;
    return { prompt: `Jika ${a}x ${b >= 0 ? "+" : "-"} ${Math.abs(b)} = ${c}, berapakah x?`, correct: x, distractors: numberDistractors(x), hint: "Pisahkan suku konstanta, lalu bagi dengan koefisien x.", explanation: `${a}x = ${c - b}, sehingga x = ${x}.` };
  }),
  factory({ id: "fractional", topic: "linear-equations", level: "beginner", difficulty: 1, sourceRef: "PDF 15" }, (rng) => {
    const denominator = choose(rng, [2, 3, 4, 5]);
    const addend = randomInt(rng, 1, 6);
    const quotient = randomInt(rng, 2, 8);
    const x = denominator * quotient;
    const right = quotient + addend;
    return { prompt: `Jika x/${denominator} + ${addend} = ${right}, berapakah x?`, correct: x, distractors: [quotient, x + denominator, x - denominator, right * denominator], hint: `Kurangi kedua sisi dengan ${addend}, lalu kalikan dengan ${denominator}.`, explanation: `x/${denominator} = ${quotient}; jadi x = ${x}.` };
  }),
  factory({ id: "two-system", topic: "systems", level: "beginner", difficulty: 1, sourceRef: "PDF 16-17" }, (rng) => {
    const x = randomInt(rng, 2, 9);
    const y = randomInt(rng, -3, 6);
    return { prompt: `Diketahui x + y = ${x + y} dan x - y = ${x - y}. Berapakah x?`, correct: x, distractors: [y, x + y, x - y, 2 * x], hint: "Jumlahkan kedua persamaan agar y tereliminasi.", explanation: `Menjumlahkan persamaan memberi 2x = ${2 * x}; jadi x = ${x}.` };
  }),
  factory({ id: "absolute", topic: "absolute-value", level: "beginner", difficulty: 1, sourceRef: "PDF 22" }, (rng) => {
    const center = randomInt(rng, -5, 7);
    const distance = randomInt(rng, 2, 8);
    return { prompt: `Jumlah semua solusi dari |x ${center >= 0 ? "-" : "+"} ${Math.abs(center)}| = ${distance} adalah ...`, correct: 2 * center, distractors: [center, 2 * distance, center + distance, center - distance], hint: "Dua solusi berjarak sama dari titik pusat.", explanation: `Solusinya ${center + distance} dan ${center - distance}; jumlahnya ${2 * center}.` };
  }),
  factory({ id: "even-power", topic: "exponents", level: "beginner", difficulty: 1, sourceRef: "PDF 31" }, (rng) => {
    const n = randomInt(rng, 2, 9);
    return { prompt: `Himpunan solusi real dari x^2 = ${n * n} adalah ...`, correct: `{-${n}, ${n}}`, distractors: [`{${n}}`, `{-${n}}`, `{0, ${n}}`, `{-${n * n}, ${n * n}}`], hint: "Pangkat genap dapat berasal dari bilangan positif atau negatif.", explanation: `Baik ${n} maupun -${n} jika dikuadratkan menghasilkan ${n * n}.` };
  }),
  factory({ id: "perimeter-formula", topic: "formulas", level: "beginner", difficulty: 1, sourceRef: "PDF 57" }, (rng) => {
    const length = randomInt(rng, 5, 15);
    const width = randomInt(rng, 2, 9);
    const answer = 2 * length + 2 * width;
    return { prompt: `Panjang persegi panjang ${length} dan lebarnya ${width}. Dengan P = 2p + 2l, nilai P adalah ...`, correct: answer, distractors: [length + width, 2 * length + width, length * width, 2 * length * width], hint: "Masukkan setiap nilai ke tempat variabel yang tepat.", explanation: `P = 2(${length}) + 2(${width}) = ${answer}.` };
  }),
  factory({ id: "function-eval", topic: "functions", level: "beginner", difficulty: 1, sourceRef: "PDF 71" }, (rng) => {
    const a = randomInt(rng, 2, 6);
    const b = randomInt(rng, -5, 6);
    const input = randomInt(rng, -3, 7);
    const answer = a * input + b;
    return { prompt: `Jika f(x) = ${a}x ${b >= 0 ? "+" : "-"} ${Math.abs(b)}, berapakah f(${input})?`, correct: answer, distractors: numberDistractors(answer, [a, -a, 1, -1]), hint: `Ganti x dengan ${input}.`, explanation: `f(${input}) = ${a}(${input}) ${b >= 0 ? "+" : "-"} ${Math.abs(b)} = ${answer}.` };
  }),
  factory({ id: "positive-inequality", topic: "inequalities", level: "beginner", difficulty: 1, sourceRef: "PDF 81" }, (rng) => {
    const a = randomInt(rng, 2, 6);
    const boundary = randomInt(rng, -3, 8);
    const b = randomInt(rng, -6, 7);
    const c = a * boundary + b;
    return { prompt: `Penyelesaian ${a}x ${b >= 0 ? "+" : "-"} ${Math.abs(b)} > ${c} adalah ...`, correct: `x > ${boundary}`, distractors: [`x < ${boundary}`, `x >= ${boundary}`, `x <= ${boundary}`, `x > ${boundary + 1}`], hint: "Koefisien x positif, jadi arah tanda tidak berubah saat dibagi.", explanation: `${a}x > ${a * boundary}; setelah dibagi ${a}, diperoleh x > ${boundary}.` };
  }),
  factory({ id: "arithmetic-sequence", topic: "sequences", level: "beginner", difficulty: 1, sourceRef: "PDF 60" }, (rng) => {
    const first = randomInt(rng, 1, 8);
    const difference = randomInt(rng, 2, 7);
    const n = randomInt(rng, 5, 10);
    const answer = first + (n - 1) * difference;
    return { prompt: `Barisan dimulai dengan ${first} dan setiap suku bertambah ${difference}. Berapakah suku ke-${n}?`, correct: answer, distractors: [first + n * difference, answer - difference, answer + 1, n * difference], hint: "Dari suku pertama ke suku ke-n ada n - 1 lompatan.", explanation: `${first} + (${n} - 1)(${difference}) = ${answer}.` };
  }),
  factory({ id: "simple-vic", topic: "vic", level: "beginner", difficulty: 1, sourceRef: "PDF 95" }, (rng) => {
    const multiplier = randomInt(rng, 2, 6);
    const value = randomInt(rng, 3, 9);
    return { prompt: `Jika n = ${value}, nilai ${multiplier}n + 2 adalah ...`, correct: multiplier * value + 2, distractors: [multiplier + value + 2, multiplier * (value + 2), multiplier * value, value + 2], hint: "Gunakan angka yang diberikan untuk mengganti variabel.", explanation: `${multiplier}(${value}) + 2 = ${multiplier * value + 2}.` };
  }),
];

const mediumFactories = [
  factory({ id: "combo-system", topic: "systems", level: "intermediate", difficulty: 2, sourceRef: "PDF 20" }, (rng) => {
    const x = randomInt(rng, 1, 7);
    const y = randomInt(rng, 1, 7);
    const target = 2 * x + 2 * y;
    return { prompt: `Jika x + y = ${x + y}, berapakah 2x + 2y?`, correct: target, distractors: [x + y, 2 * x + y, x + 2 * y, target + 2], hint: "Faktorkan target, jangan memaksa mencari x dan y satu per satu.", explanation: `2x + 2y = 2(x + y) = 2(${x + y}) = ${target}.` };
  }),
  factory({ id: "radical", topic: "exponents", level: "intermediate", difficulty: 2, sourceRef: "PDF 34" }, (rng) => {
    const root = randomInt(rng, 3, 9);
    const shift = randomInt(rng, 1, 12);
    const x = root * root - shift;
    return { prompt: `Jika sqrt(x + ${shift}) = ${root}, berapakah x?`, correct: x, distractors: [root - shift, root * root + shift, x + root, shift - root], hint: "Kuadratkan kedua sisi sebelum mengisolasi x.", explanation: `x + ${shift} = ${root * root}; jadi x = ${x}.` };
  }),
  factory({ id: "common-base", topic: "exponents", level: "intermediate", difficulty: 2, sourceRef: "PDF 32-33" }, (rng) => {
    const base = choose(rng, [2, 3, 5]);
    const x = randomInt(rng, 1, 5);
    const shift = randomInt(rng, 1, 3);
    const exponent = x + shift;
    return { prompt: `Jika ${base}^(x + ${shift}) = ${base}^${exponent}, berapakah x?`, correct: x, distractors: [exponent, shift, x + 1, x - 1], hint: "Jika basis sama dan positif, samakan eksponennya.", explanation: `x + ${shift} = ${exponent}; jadi x = ${x}.` };
  }),
  factory({ id: "quadratic-sum", topic: "quadratics", level: "intermediate", difficulty: 2, sourceRef: "PDF 43-44" }, (rng) => {
    const r1 = randomInt(rng, -6, -1);
    const r2 = randomInt(rng, 2, 8);
    const sum = r1 + r2;
    const product = r1 * r2;
    return { prompt: `Jumlah akar dari x^2 ${-sum >= 0 ? "+" : "-"} ${Math.abs(-sum)}x ${product >= 0 ? "+" : "-"} ${Math.abs(product)} = 0 adalah ...`, correct: sum, distractors: [product, -sum, -product, r2 - r1], hint: "Untuk x^2 + bx + c = 0, jumlah akar adalah -b.", explanation: `Persamaan memfaktor menjadi (x - (${r1}))(x - ${r2}) = 0; jumlah akar ${r1} + ${r2} = ${sum}.` };
  }),
  factory({ id: "reverse-foil", topic: "quadratics", level: "intermediate", difficulty: 2, sourceRef: "PDF 45" }, (rng) => {
    const r1 = randomInt(rng, 1, 6);
    const r2 = randomInt(rng, r1 + 1, 9);
    const b = -(r1 + r2);
    const c = r1 * r2;
    return { prompt: `Akar sebuah kuadrat adalah ${r1} dan ${r2}. Persamaan monik yang benar adalah ...`, correct: `x^2 ${b >= 0 ? "+" : "-"} ${Math.abs(b)}x + ${c} = 0`, distractors: [`x^2 + ${r1 + r2}x + ${c} = 0`, `x^2 ${b >= 0 ? "+" : "-"} ${Math.abs(b)}x - ${c} = 0`, `x^2 + ${c}x ${b >= 0 ? "+" : "-"} ${Math.abs(b)} = 0`, `x^2 - ${r2 - r1}x + ${c} = 0`], hint: "Bangun faktor (x - r1)(x - r2).", explanation: `(x - ${r1})(x - ${r2}) = x^2 ${b >= 0 ? "+" : "-"} ${Math.abs(b)}x + ${c}.` };
  }),
  factory({ id: "strange-symbol", topic: "formulas", level: "intermediate", difficulty: 2, sourceRef: "PDF 57-58" }, (rng) => {
    const a = randomInt(rng, 2, 8);
    const b = randomInt(rng, 2, 8);
    const answer = 2 * a + 3 * b;
    return { prompt: `Operasi a ★ b didefinisikan sebagai 2a + 3b. Nilai ${a} ★ ${b} adalah ...`, correct: answer, distractors: [a + b, 3 * a + 2 * b, 2 * (a + b), a * b + 3], hint: "Simbol baru hanyalah perintah substitusi.", explanation: `2(${a}) + 3(${b}) = ${answer}.` };
  }),
  factory({ id: "formula-scale", topic: "formulas", level: "intermediate", difficulty: 2, sourceRef: "PDF 59" }, (rng) => {
    const original = randomInt(rng, 3, 12);
    const answer = 6 * original;
    return { prompt: `Jika Q = ab dan a menjadi 3 kali sementara b menjadi 2 kali, Q menjadi berapa kali nilai awal?`, correct: 6, distractors: [2, 3, 5, 9], hint: "Kalikan faktor perubahan setiap variabel.", explanation: `(3a)(2b) = 6ab, jadi nilai baru ${answer / original} kali nilai awal.` };
  }),
  factory({ id: "compound-function", topic: "functions", level: "intermediate", difficulty: 2, sourceRef: "PDF 72" }, (rng) => {
    const input = randomInt(rng, 1, 6);
    const inner = 2 * input + 1;
    const answer = inner * inner;
    return { prompt: `Jika f(x) = x^2 dan g(x) = 2x + 1, berapakah f(g(${input}))?`, correct: answer, distractors: [2 * input * input + 1, input * input + 1, inner, answer + 2], hint: "Hitung fungsi di dalam terlebih dahulu.", explanation: `g(${input}) = ${inner}, lalu f(${inner}) = ${answer}.` };
  }),
  factory({ id: "absolute-inequality", topic: "inequalities", level: "intermediate", difficulty: 2, sourceRef: "PDF 83" }, (rng) => {
    const center = randomInt(rng, -3, 6);
    const radius = randomInt(rng, 2, 6);
    return { prompt: `Penyelesaian |x ${center >= 0 ? "-" : "+"} ${Math.abs(center)}| < ${radius} adalah ...`, correct: `${center - radius} < x < ${center + radius}`, distractors: [`x < ${center - radius} atau x > ${center + radius}`, `${center - radius} <= x <= ${center + radius}`, `${center} < x < ${center + radius}`, `x > ${center + radius}`], hint: "Jarak x dari pusat harus lebih kecil dari radius.", explanation: `-${radius} < x - (${center}) < ${radius}, sehingga ${center - radius} < x < ${center + radius}.` };
  }),
  factory({ id: "combined-bound", topic: "inequalities", level: "intermediate", difficulty: 2, sourceRef: "PDF 84-85" }, (rng) => {
    const low = randomInt(rng, -5, 2);
    const high = low + randomInt(rng, 5, 10);
    const answer = high - 1;
    return { prompt: `Jika ${low} < x < ${high} dan x bilangan bulat, nilai terbesar x adalah ...`, correct: answer, distractors: [high, low + 1, answer - 1, high + 1], hint: "Batas kanan tidak termasuk karena tandanya ketat.", explanation: `Bilangan bulat terbesar yang masih kurang dari ${high} adalah ${answer}.` };
  }),
  factory({ id: "vic-percent", topic: "vic", level: "intermediate", difficulty: 2, sourceRef: "PDF 96-98" }, () => ({ prompt: `Jika a adalah p persen dari b, ekspresi untuk a adalah ...`, correct: `(p/100)b`, distractors: [`(100/p)b`, `100pb`, `p/(100b)`, `b/(100p)`], hint: "Ubah p persen menjadi p/100.", explanation: `p persen dari b berarti (p/100) × b.` })),
  factory({ id: "vic-rate", topic: "vic", level: "intermediate", difficulty: 2, sourceRef: "PDF 96-98" }, (rng) => {
    const pages = choose(rng, [240, 300, 360, 420]);
    return { prompt: `Seseorang membaca T halaman per menit. Waktu dalam jam untuk membaca ${pages} halaman adalah ...`, correct: `${pages / 60}/T`, distractors: [`${pages}/T`, `60T/${pages}`, `${pages}T/60`, `T/${pages / 60}`], hint: "Menit = halaman/laju, lalu bagi 60 untuk mengubah ke jam.", explanation: `${pages}/T menit = ${pages}/(60T) = ${pages / 60}/T jam.` };
  }),
];

const hardFactories = [
  factory({ id: "three-system", topic: "systems", level: "advanced", difficulty: 3, sourceRef: "PDF 18" }, (rng) => {
    const x = randomInt(rng, 1, 5);
    const y = randomInt(rng, 1, 5);
    const z = randomInt(rng, 1, 5);
    return { prompt: `Diketahui x + y = ${x + y}, y + z = ${y + z}, dan x + z = ${x + z}. Berapakah x + y + z?`, correct: x + y + z, distractors: [x + y, y + z, x + z, 2 * (x + y + z)], hint: "Jumlahkan ketiga persamaan; setiap variabel muncul dua kali.", explanation: `Jumlah ruas kanan ${2 * (x + y + z)} = 2(x + y + z), sehingga targetnya ${x + y + z}.` };
  }),
  factory({ id: "disguised-quadratic", topic: "quadratics", level: "advanced", difficulty: 3, sourceRef: "PDF 44" }, () => ({ prompt: `Berapa banyak solusi real untuk x^4 - 5x^2 + 4 = 0?`, correct: 4, distractors: [0, 1, 2, 3], hint: "Misalkan y = x^2, lalu faktorkan kuadrat dalam y.", explanation: `y^2 - 5y + 4 = (y - 1)(y - 4). Jadi x^2 = 1 atau 4, menghasilkan x = -1, 1, -2, 2.` })),
  factory({ id: "undefined-denominator", topic: "quadratics", level: "advanced", difficulty: 3, sourceRef: "PDF 47" }, (rng) => {
    const forbidden = randomInt(rng, -6, 6);
    return { prompt: `Dalam ekspresi (x + 3)/(x ${forbidden >= 0 ? "-" : "+"} ${Math.abs(forbidden)}), nilai x yang tidak diizinkan adalah ...`, correct: forbidden, distractors: numberDistractors(forbidden), hint: "Penyebut tidak boleh nol.", explanation: `x - (${forbidden}) = 0 ketika x = ${forbidden}, sehingga nilai itu dilarang.` };
  }),
  factory({ id: "repeated-root", topic: "quadratics", level: "advanced", difficulty: 3, sourceRef: "PDF 46" }, (rng) => {
    const constant = choose(rng, [4, 9, 16, 25]);
    const magnitude = 2 * Math.sqrt(constant);
    return { prompt: `Agar x^2 + kx + ${constant} = 0 memiliki tepat satu akar real, nilai k yang mungkin adalah ...`, correct: `k = ${magnitude} atau k = -${magnitude}`, distractors: [`k = ${Math.sqrt(constant)}`, `k = -${Math.sqrt(constant)}`, `k = ${constant}`, `k = 0`], hint: "Satu akar real terjadi ketika diskriminan sama dengan nol.", explanation: `k^2 - 4(${constant}) = 0, sehingga k^2 = ${4 * constant} dan k = ±${magnitude}.` };
  }),
  factory({ id: "units-pattern", topic: "sequences", level: "advanced", difficulty: 3, sourceRef: "PDF 61-62" }, (rng) => {
    const exponent = 4 * randomInt(rng, 5, 30) + choose(rng, [1, 2, 3, 4]);
    const cycle = [3, 9, 7, 1];
    const answer = cycle[(exponent - 1) % 4];
    return { prompt: `Digit satuan dari 3^${exponent} adalah ...`, correct: answer, distractors: [...[1, 3, 7, 9].filter((value) => value !== answer), 5], hint: "Digit satuan pangkat 3 berulang setiap empat pangkat.", explanation: `Siklusnya 3, 9, 7, 1. Karena ${exponent} mod 4 = ${exponent % 4}, digit satuannya ${answer}.` };
  }),
  factory({ id: "function-minimum", topic: "functions", level: "advanced", difficulty: 3, sourceRef: "PDF 74" }, (rng) => {
    const center = randomInt(rng, -5, 5);
    const minimum = randomInt(rng, -4, 8);
    return { prompt: `Nilai minimum f(x) = (x ${center >= 0 ? "-" : "+"} ${Math.abs(center)})^2 ${minimum >= 0 ? "+" : "-"} ${Math.abs(minimum)} adalah ...`, correct: minimum, distractors: [center, -center, minimum + 1, minimum - 1], hint: "Suku kuadrat selalu minimal nol.", explanation: `Saat x = ${center}, suku kuadrat nol dan f(x) = ${minimum}.` };
  }),
  factory({ id: "negative-inequality", topic: "inequalities", level: "advanced", difficulty: 3, sourceRef: "PDF 82" }, (rng) => {
    const a = randomInt(rng, 2, 7);
    const boundary = randomInt(rng, -4, 8);
    const b = randomInt(rng, -6, 8);
    const c = b - a * boundary;
    return { prompt: `Penyelesaian -${a}x ${b >= 0 ? "+" : "-"} ${Math.abs(b)} > ${c} adalah ...`, correct: `x < ${boundary}`, distractors: [`x > ${boundary}`, `x <= ${boundary}`, `x >= ${boundary}`, `x < ${boundary - 1}`], hint: "Membagi dengan bilangan negatif membalik tanda pertidaksamaan.", explanation: `-${a}x > ${-a * boundary}; setelah dibagi -${a}, tanda berbalik menjadi x < ${boundary}.` };
  }),
  factory({ id: "integer-extreme", topic: "inequalities", level: "advanced", difficulty: 3, sourceRef: "PDF 85" }, (rng) => {
    const xHigh = randomInt(rng, 5, 12);
    const yHigh = randomInt(rng, 3, 10);
    const answer = xHigh + yHigh - 2;
    return { prompt: `Jika x < ${xHigh}, y < ${yHigh}, dan x serta y bilangan bulat, nilai terbesar x + y adalah ...`, correct: answer, distractors: [xHigh + yHigh, answer + 1, answer - 1, xHigh + yHigh - 3], hint: "Ambil bilangan bulat terbesar yang masih di bawah setiap batas.", explanation: `x maksimum ${xHigh - 1} dan y maksimum ${yHigh - 1}; jumlahnya ${answer}.` };
  }),
  factory({ id: "vic-consecutive", topic: "vic", level: "advanced", difficulty: 3, sourceRef: "PDF 95-101" }, () => ({ prompt: `Jika x, y, dan z adalah tiga bilangan bulat berurutan, ekspresi yang selalu bilangan bulat adalah ...`, correct: `(x + y + z)/3`, distractors: [`(x + y + z)/2`, `(x + y)/3`, `(x + z)/4`, `(xy + z)/5`], hint: "Coba tiga bilangan berurutan sederhana dan cari pola rata-ratanya.", explanation: `Bilangan tengah y adalah rata-rata tiga bilangan berurutan, sehingga (x + y + z)/3 = y.` })),
  factory({ id: "ds-together", topic: "data-sufficiency", level: "advanced", difficulty: 3, sourceRef: "PDF 109-112" }, () => ({ prompt: `Data Sufficiency: Berapakah x? (1) x + y = 10. (2) y = 4. Pilih kesimpulan yang tepat.`, correct: `Kedua pernyataan bersama-sama cukup, tetapi masing-masing tidak cukup`, distractors: [`Pernyataan (1) saja cukup`, `Pernyataan (2) saja cukup`, `Masing-masing pernyataan cukup`, `Kedua pernyataan bersama-sama tetap tidak cukup`], hint: "Uji setiap pernyataan sendiri sebelum menggabungkannya.", explanation: `(1) menyisakan banyak pasangan; (2) tidak memberi x. Bersama-sama, x = 6.` })),
  factory({ id: "ds-sign", topic: "data-sufficiency", level: "advanced", difficulty: 3, sourceRef: "PDF 114-119" }, () => ({ prompt: `Data Sufficiency: Apakah x > 0? (1) x^2 = 9. (2) x > -1. Pilih kesimpulan yang tepat.`, correct: `Kedua pernyataan bersama-sama cukup, tetapi masing-masing tidak cukup`, distractors: [`Pernyataan (1) saja cukup`, `Pernyataan (2) saja cukup`, `Masing-masing pernyataan cukup`, `Kedua pernyataan bersama-sama tetap tidak cukup`], hint: "Cari semua nilai yang memenuhi tiap pernyataan dan perhatikan tandanya.", explanation: `(1) memberi x = 3 atau -3. (2) sendiri masih memungkinkan nilai positif, nol, atau negatif. Bersama-sama hanya x = 3.` })),
  factory({ id: "ds-statement-one", topic: "data-sufficiency", level: "advanced", difficulty: 3, sourceRef: "PDF 109-112" }, () => ({ prompt: `Data Sufficiency: Berapakah x + y? (1) x + y = 7. (2) x - y = 3. Pilih kesimpulan yang tepat.`, correct: `Pernyataan (1) saja cukup`, distractors: [`Pernyataan (2) saja cukup`, `Masing-masing pernyataan cukup`, `Kedua pernyataan bersama-sama cukup, tetapi masing-masing tidak cukup`, `Kedua pernyataan bersama-sama tetap tidak cukup`], hint: "Targetnya adalah kombinasi x + y, bukan nilai x dan y terpisah.", explanation: `Pernyataan (1) langsung memberikan target 7; pernyataan (2) tidak menentukan jumlah.` })),
];

function generateGroup(factories, count, rng, prefix) {
  const selected = sample(rng, factories, count);
  return selected.map((entry, index) => {
    const config = entry.build(rng);
    return mcq(rng, {
      ...entry,
      ...config,
      id: `${prefix}-${entry.id}-${index + 1}`,
      timeTargetSec: entry.difficulty === 1 ? 90 : entry.difficulty === 2 ? 120 : 150,
    });
  });
}

export function generatePlacement(seed) {
  const rng = createRng(seed);
  const questions = [
    ...generateGroup(easyFactories, 4, rng, "placement-e"),
    ...generateGroup(mediumFactories, 4, rng, "placement-m"),
    ...generateGroup(hardFactories, 4, rng, "placement-h"),
  ];
  return shuffle(rng, questions);
}

export function generateFinal(level, seed) {
  const rng = createRng(seed);
  let questions;
  if (level === "beginner") {
    questions = [
      ...generateGroup(easyFactories, 10, rng, "final-b-e"),
      ...generateGroup(mediumFactories, 5, rng, "final-b-m"),
    ];
  } else if (level === "intermediate") {
    questions = [
      ...generateGroup(easyFactories, 4, rng, "final-i-e"),
      ...generateGroup(mediumFactories, 8, rng, "final-i-m"),
      ...generateGroup(hardFactories, 3, rng, "final-i-h"),
    ];
  } else if (level === "advanced") {
    questions = [
      ...generateGroup(mediumFactories, 5, rng, "final-a-m"),
      ...generateGroup(hardFactories, 10, rng, "final-a-h"),
    ];
  } else {
    throw new RangeError(`Unknown level: ${level}`);
  }
  return shuffle(rng, questions);
}

export function generateQuantMock(seed) {
  const rng = createRng(seed);
  const questions = [
    ...generateGroup(easyFactories, 6, rng, "mock-e"),
    ...generateGroup(mediumFactories, 9, rng, "mock-m"),
    ...generateGroup(hardFactories, 6, rng, "mock-h"),
  ];
  return shuffle(rng, questions);
}

export function placementResult(questions, answers) {
  const correct = questions.reduce((total, question) => total + (answers[question.id] === question.answer ? 1 : 0), 0);
  const total = questions.length;
  const learningNeed = Math.round(((total - correct) / total) * 1000) / 10;
  const level = correct <= 3 ? "beginner" : correct <= 7 ? "intermediate" : "advanced";
  const topics = {};
  for (const question of questions) {
    const row = topics[question.topic] ?? { correct: 0, total: 0 };
    row.total += 1;
    if (answers[question.id] === question.answer) row.correct += 1;
    topics[question.topic] = row;
  }
  return { correct, total, percentage: Math.round((correct / total) * 100), learningNeed, level, topics };
}

export function finalResult(questions, answers) {
  const correct = questions.reduce((total, question) => total + (answers[question.id] === question.answer ? 1 : 0), 0);
  const total = questions.length;
  const percentage = Math.round((correct / total) * 100);
  return { correct, total, percentage, passed: correct >= 12 };
}

export function mockResult(questions, answers, elapsedSec) {
  let earned = 0;
  let available = 0;
  let answered = 0;
  const topics = {};
  for (const question of questions) {
    const weight = question.difficulty;
    available += weight;
    const response = answers[question.id];
    if (Number.isInteger(response)) answered += 1;
    const isCorrect = response === question.answer;
    if (isCorrect) earned += weight;
    const row = topics[question.topic] ?? { correct: 0, total: 0 };
    row.total += 1;
    if (isCorrect) row.correct += 1;
    topics[question.topic] = row;
  }
  const answeredRatio = answered / questions.length;
  const weightedAccuracy = available ? earned / available : 0;
  const ability = Math.max(0, Math.min(1, weightedAccuracy * (0.75 + 0.25 * answeredRatio)));
  const quantScore = Math.max(60, Math.min(90, 60 + Math.round(ability * 30)));
  const projectedTotal = 205 + Math.round(((quantScore - 60) / 30) * 60) * 10;
  return {
    correct: questions.reduce((total, question) => total + (answers[question.id] === question.answer ? 1 : 0), 0),
    total: questions.length,
    answered,
    weightedAccuracy: Math.round(weightedAccuracy * 100),
    quantScore,
    projectedTotal,
    elapsedSec,
    topics,
    completedAt: new Date().toISOString(),
    label: "Estimasi skor latihan - bukan skor resmi GMAT",
  };
}

export const FACTORY_COUNTS = {
  easy: easyFactories.length,
  medium: mediumFactories.length,
  hard: hardFactories.length,
};
