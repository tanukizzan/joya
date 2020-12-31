const time = document.getElementById('time');
const kane = document.getElementById('kane');
const count = document.getElementById('count');
const sound = document.getElementById('kane-sound');
const result = document.getElementById('result');

// 時刻表示
function set2fig(num) {
  var ret;
  if(num < 10) {
    ret = '0' + num;
  } else {
    ret = num;
  }
  return ret;
}
function clock() {
  const now = new Date();
  const youbi = ['日', '月', '火', '水', '木', '金', '土'];
  time.innerHTML = now.getFullYear() + '年 ' + (now.getMonth() + 1) + '月' + set2fig(now.getDate()) + '日' + youbi[now.getDay()] + '曜日 ' + set2fig(now.getHours()) + '時' + set2fig(now.getMinutes()) + '分' + set2fig(now.getSeconds()) + '秒';
}
setInterval('clock()',1000);

// 鐘をクリックしたら音声再生・アニメーション開始
kane.addEventListener('click', function() {
  sound.play();
  kane.classList.add('animation');
})

let countValue = 0;
// 鐘の音声が止まったらカウントアップ・アニメーション停止
sound.addEventListener('ended', function() {
  countValue++;
  count.innerHTML = countValue;
  if(countValue === 108) {
    // 108回鳴らしたらハッピーニューイヤー
    result.innerHTML = 'HAPPY NEW YEAR!';
    result.style.color = 'red';
    result.style.fontSize = '32px';
  }
  kane.classList.remove('animation');
})
