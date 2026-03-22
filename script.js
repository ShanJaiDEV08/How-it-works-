
// ── INTERSECTION OBSERVER for fade-in ──
const sections = document.querySelectorAll('.section');
const obs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.08 });
sections.forEach(s => obs.observe(s));

// ── BINARY DEMO ──
function toggleBit(el) {
  if (el.classList.contains('on')) {
    el.classList.remove('on');
    el.classList.add('off');
    el.textContent = '0';
  } else {
    el.classList.remove('off');
    el.classList.add('on');
    el.textContent = '1';
  }
  updateBinary();
}

function updateBinary() {
  const bits = document.querySelectorAll('#bit-row .bit');
  let val = 0;
  bits.forEach((b, i) => {
    if (b.classList.contains('on')) val += Math.pow(2, 7 - i);
  });
  document.getElementById('dec-val').textContent = val;
  document.getElementById('hex-val').textContent = '0x' + val.toString(16).toUpperCase().padStart(2, '0');
  const ch = String.fromCharCode(val);
  document.getElementById('char-val').textContent =
  (val >= 32 && val <= 126) ? '"' + ch + '"' : 'non-printable';
}

updateBinary();
