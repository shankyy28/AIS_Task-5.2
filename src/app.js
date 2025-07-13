const cInput = document.getElementById('celsius');
const fInput = document.getElementById('fahrenheit');
const kInput = document.getElementById('kelvin');
 
// Helpers
function toCelsius(f, k) {
  if (f !== '') return (parseFloat(f) - 32) * 5 / 9;
  if (k !== '') return parseFloat(k) - 273.15;
  return null;
}
 
// Main sync function
function syncTemps(source) {
  const c = source === 'c' ? parseFloat(cInput.value) : toCelsius(fInput.value, kInput.value);
  if (c == null || isNaN(c)) return;
  cInput.value = c.toFixed(2);
  fInput.value = (c * 9/5 + 32).toFixed(2);
  kInput.value = (c + 273.15).toFixed(2);
}
 
// Add listeners
[cInput, fInput, kInput].forEach((el, idx) => {
  const unit = ['c', 'f', 'k'][idx];
  el.addEventListener('input', () => syncTemps(unit));
});
