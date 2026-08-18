export function hashSeed(value) {
  const text = String(value);
  let hash = 2166136261;
  for (let index = 0; index < text.length; index += 1) {
    hash ^= text.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

export function mulberry32(seed) {
  let state = seed >>> 0;
  return function random() {
    state += 0x6d2b79f5;
    let value = state;
    value = Math.imul(value ^ (value >>> 15), value | 1);
    value ^= value + Math.imul(value ^ (value >>> 7), value | 61);
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
  };
}

export function createRng(seed) {
  return mulberry32(hashSeed(seed));
}

export function randomInt(rng, minimum, maximum) {
  return Math.floor(rng() * (maximum - minimum + 1)) + minimum;
}

export function choose(rng, values) {
  return values[Math.floor(rng() * values.length)];
}

export function shuffle(rng, values) {
  const result = [...values];
  for (let index = result.length - 1; index > 0; index -= 1) {
    const other = Math.floor(rng() * (index + 1));
    [result[index], result[other]] = [result[other], result[index]];
  }
  return result;
}

export function sample(rng, values, count) {
  if (count > values.length) {
    throw new RangeError(`Cannot sample ${count} items from ${values.length}.`);
  }
  return shuffle(rng, values).slice(0, count);
}

export function createAttemptSeed(prefix = "attempt") {
  const entropy = globalThis.crypto?.getRandomValues
    ? globalThis.crypto.getRandomValues(new Uint32Array(1))[0]
    : Math.floor(Math.random() * 0xffffffff);
  return `${prefix}-${Date.now()}-${entropy}`;
}
