/* Código de verificación de la constancia de entrega.
   Resume en 15 caracteres lo que el estudiante hizo en un nivel: nivel, fecha, actividades
   resueltas, textos registrados con su número de palabras y una huella del nombre.
   Incluye una suma de control: si se cambia un carácter o se edita la constancia, el código
   deja de coincidir. Es una protección razonable para el aula, no un sistema criptográfico.
   La guía docente usa este mismo archivo para verificar los códigos. */
window.DG_EVIDENCIA = (() => {
  const SALT = 'diglosia·ldl·2026·hs';
  const ABC = '0123456789ABCDEFGHJKMNPQRSTVWXYZ'; // base 32 sin letras confusas (I, L, O, U)
  const EPOCH = Date.UTC(2026, 0, 1);
  const B = BigInt;

  function fnv(text) { let h = 0x811c9dc5; for (const c of text) { h ^= c.codePointAt(0); h = Math.imul(h, 0x01000193) >>> 0; } return h >>> 0; }
  const normName = s => String(s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-zñ ]/g, '').replace(/\s+/g, ' ').trim();
  function keystream(seed, bits) { let k = 0n, h = fnv(seed); for (let i = 0; i < bits; i += 32) { h = fnv(seed + ':' + h + ':' + i); k = (k << 32n) | B(h); } return k & ((1n << B(bits)) - 1n); }
  const dayToday = () => { const d = new Date(); return Math.max(0, Math.min(8191, Math.floor((Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) - EPOCH) / 864e5))); };
  const dayToDate = n => new Date(EPOCH + n * 864e5);

  // Campos: nivel 2 · día 13 · actividades 12 · textos 2 · palabras 8 + 8 · nombre 10  = 55 bits; control 16 bits.
  const FIELDS = [['level', 2], ['day', 13], ['mask', 12], ['writes', 2], ['w1', 8], ['w2', 8], ['name', 10]];
  const PAYLOAD_BITS = FIELDS.reduce((n, f) => n + f[1], 0);

  function encode(info) {
    let payload = 0n;
    const v = { ...info, name: fnv(normName(info.name)) & 1023 };
    for (const [k, bits] of FIELDS) payload = (payload << B(bits)) | (B(Math.max(0, Math.min((1 << bits) - 1, v[k] | 0))));
    const check = fnv(SALT + payload.toString(36)) & 0xffff;
    const obf = payload ^ keystream(SALT + check, PAYLOAD_BITS);
    let n = (obf << 16n) | B(check), out = '';
    for (let i = 0; i < 15; i++) { out = ABC[Number(n & 31n)] + out; n >>= 5n; }
    return out.slice(0, 5) + '-' + out.slice(5, 10) + '-' + out.slice(10);
  }
  function decode(code) {
    const clean = String(code || '').toUpperCase().replace(/[\s-]/g, '').replace(/O/g, '0').replace(/[IL]/g, '1');
    if (clean.length !== 15 || [...clean].some(c => !ABC.includes(c))) return { ok: false, error: 'El código debe tener 15 caracteres (tres grupos de cinco).' };
    let n = 0n; for (const c of clean) n = (n << 5n) | B(ABC.indexOf(c));
    if (n >> B(PAYLOAD_BITS + 16)) return { ok: false, error: 'El código no es válido: tiene un error de escritura o fue modificado.' };
    const check = Number(n & 0xffffn), obf = (n >> 16n) & ((1n << B(PAYLOAD_BITS)) - 1n);
    const payload = obf ^ keystream(SALT + check, PAYLOAD_BITS);
    if ((fnv(SALT + payload.toString(36)) & 0xffff) !== check) return { ok: false, error: 'El código no es válido: tiene un error de escritura o fue modificado.' };
    const out = {}; let p = payload;
    for (const [k, bits] of [...FIELDS].reverse()) { out[k] = Number(p & ((1n << B(bits)) - 1n)); p >>= B(bits); }
    out.date = dayToDate(out.day);
    return { ok: true, ...out };
  }
  const nameMatches = (name, hash) => (fnv(normName(name)) & 1023) === hash;

  return { encode, decode, nameMatches, dayToday };
})();
