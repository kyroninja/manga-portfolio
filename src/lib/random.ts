// Seeded randomness so hand-drawn effects (focus lines, shout bubbles,
// SFX jitter) look organic but stay identical between builds.

export function hash(input: string): number {
  let h = 2166136261;
  for (const ch of input) {
    h ^= ch.codePointAt(0)!;
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

export function rng(seed: number) {
  let a = seed >>> 0 || 1;
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export const fx = (n: number) => Number(n.toFixed(2));
