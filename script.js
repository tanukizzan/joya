const particles = document.getElementById('particles-js');
const time = document.getElementById('time');
const kane = document.getElementById('kane');
const count = document.getElementById('count');
const sound = document.getElementById('kane-sound');
const result = document.getElementById('result');

// 時刻表示
function set2fig(num) {
  var ret;
  if (num < 10) {
    ret = '0' + num;
  } else {
    ret = num;
  }
  return ret;
}
function clock() {
  const now = new Date();
  const youbi = ['日', '月', '火', '水', '木', '金', '土'];
  time.innerHTML = now.getFullYear() + '年 ' + (now.getMonth() + 1) + '月' + now.getDate() + '日' + youbi[now.getDay()] + '曜日 ' + set2fig(now.getHours()) + '時' + set2fig(now.getMinutes()) + '分' + set2fig(now.getSeconds()) + '秒';
}
setInterval('clock()', 1000);

// 鐘をクリックしたら音声再生・アニメーション開始
kane.addEventListener('click', function () {
  sound.play();
  kane.classList.add('animation');
})

let countValue = 0;
// 鐘の音声が止まったらカウントアップ・アニメーション停止
sound.addEventListener('ended', function () {
  countValue++;
  count.innerHTML = countValue;
  if (countValue === 108) {
    // 108回鳴らしたらハッピーニューイヤー
    result.innerHTML = 'HAPPY NEW YEAR!';
    result.style.color = 'red';
    result.style.fontSize = '32px';
    particles.style.zIndex = '2';
  }
  kane.classList.remove('animation');
})

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 125,//この数値を変更すると紙吹雪の数が増減できる
      "density": {
        "enable": false,
        "value_area": 400
      }
    },
    "color": {
      "value": ["#EA5532", "#F6AD3C", "#FFF33F", "#00A95F", "#00ADA9", "#00AFEC", "#4D4398", "#E85298"]//紙吹雪の色の数を増やすことが出来る
    },
    "shape": {
      "type": "polygon",//形状はpolygonを指定
      "stroke": {
        "width": 0,
      },
      "polygon": {
        "nb_sides": 5//多角形の角の数
      }
    },
    "opacity": {
      "value": 1,
      "random": false,
      "anim": {
        "enable": true,
        "speed": 20,
        "opacity_min": 0,
        "sync": false
      }
    },
    "size": {
      "value": 5.305992965476349,
      "random": true,//サイズをランダムに
      "anim": {
        "enable": true,
        "speed": 1.345709068776642,
        "size_min": 0.8,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
    },
    "move": {
      "enable": true,
      "speed": 10,//この数値を小さくするとゆっくりな動きになる
      "direction": "bottom",//下に向かって落ちる
      "random": false,//動きはランダムにならないように
      "straight": false,//動きをとどめない
      "out_mode": "out",//画面の外に出るように描写
      "bounce": false,//跳ね返りなし
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
      },
      "onclick": {
        "enable": false,
      },
      "resize": true
    },
  },
  "retina_detect": true
});