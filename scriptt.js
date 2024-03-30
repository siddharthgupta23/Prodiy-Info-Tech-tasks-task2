let sT;
let eT = 0;
let ti;

const d = document.querySelector('.display_time');
const sBtn = document.querySelector('.start-btn_timer');
const pBtn = document.querySelector('.pause-btn_timer');
const rBtn = document.querySelector('.reset-btn_time');
const ln = document.querySelector('.lap-btn_timer');
const LT = document.querySelector('.lap-times_time');

function str() {
  sT = Date.now() - eT;
  ti = setInterval(function printTime() {
    eT= Date.now() - sT;
    d.textContent = formatTime(eT);
  }, 10);
  sBtn.disabled = true;
  pBtn.disabled = false;
}

function pTime() {
  clearInterval(ti);
  sBtn.disabled = false;
  pBtn.disabled = true;
}

function re() {
  clearInterval(ti);
  sBtn.disabled = false;
  pBtn.disabled = true;
  eT = 0;
  d.textContent = '00:00:00';
  LT.innerHTML = '';
}

function lTm() {
  const lapTime = formatTime(eT);
    const lapItem = document.createElement('li');
  lapItem.textContent = lapTime;
        LT.appendChild(lapItem);
}

function formatTime(time) {
     const dt= new Date(time);
  const m = dt.getMinutes().toString().padStart(2, '0');
     const s = dt.getSeconds().toString().padStart(2, '0');
  const ms = Math.floor(dt.getMilliseconds() / 10).toString().padStart(2, '0');
     return `${m}:${s}:${ms}`;
}

sBtn.addEventListener('click', str);
  pBtn.addEventListener('click', pTime);
rBtn.addEventListener('click', re);
  ln.addEventListener('click', lTm);

  