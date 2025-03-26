function createStar() {
    const star = document.createElement("div");
    star.className = "star";

    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    star.style.left = `${x}px`;
    star.style.top = `${y}px`;

    const size = Math.random() * 3 + 2;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;

    const duration = Math.random() * 2 + 1;
    star.style.animationDuration = `${duration}s`;

    document.body.appendChild(star);
}

for (let i = 0; i < 100; i++) {
    createStar();
}

function typeWriter(element, text, delay) {
    let i = 0;

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, delay);
        } else {
            setTimeout(() => {
                element.innerHTML = '';
                i = 0;
                type();
            }, 1000);
        }
    }
    type();
}

document.addEventListener("DOMContentLoaded", function() {
    let txt1 = document.getElementById('txt4');
    let txt2 = document.getElementById('txt5');

    typeWriter(txt1, '코딩을 하고싶은 남자.', 90);
    typeWriter(txt2, '끝날 때까지 끝난 게 아니다.', 90);
});

let slider = document.querySelector(".outbox");
let imgboxs = document.querySelectorAll(".imgbox");
let leftB = document.querySelector(".leftB");
let rightB = document.querySelector(".rightB");

let count = 0;
let stop = "";
function play(index){
    slider.style.transform = `translateX(-${index * 100 / 4}%)`;
}

function slid(){
    stop = setInterval( () => {
        count++;
        if( count == imgboxs.length ){
            slider.style.transition = `none`;
            count = 0;
            slider.style.transform = 'translateX(0)';
            setTimeout( () => {
                slider.style.transition = `0.5s`;
            }, 50);
        } else {
            play(count);
        } 
    }, 3000);
}

function stopimg(){
    clearInterval( stop );
}

function leftmove(){
    stopimg();
    if( count == 0 ){
        slider.style.transition = `none`;
        count = 3;
        play(count);
        setTimeout( () => {
            slider.style.transition = `0.5s`;
            count--;
            play(count);
        }, 50);
    } else {
        count--;
        play(count);
    }
    slid();
}

function rightmove(){
    stopimg();
    if( count == 3 ){
        slider.style.transition = `none`;
        count = 0;
        play(count);
        setTimeout( () => {
            slider.style.transition = `0.5s`;
            count = 1;
            play(count);
        }, 50);
    } else {
        count++;
        play(count);
    }
    slid();
}

// 1) Scroll Navigation
var aTags = document.querySelectorAll("ul li a");

for (var i = 0; i < aTags.length; i++) {
  aTags[i].onclick = function (e) {
    e.preventDefault();
    var target = document.querySelector(this.getAttribute('href'));

    window.scrollTo({
      behavior: 'smooth',
      top: target.offsetTop,
    });
  };
}
// 탑 버튼 제어
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 3000) { 
        topBtn.style.display = "block"; // 300px 이상 스크롤하면 버튼 표시
    } else {
        topBtn.style.display = "block"; // 300px 이하에서는 버튼 숨기기
    }
});

topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0, // 최상단 이동
        behavior: "smooth" // 부드러운 애니메이션
    });
});


