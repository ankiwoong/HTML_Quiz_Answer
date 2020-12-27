function setNumPosition() {
  const nums = document.querySelectorAll(".number");
  for (let i = 0; i < nums.length; i++) {
    if (i + 1 === 3 || i + 1 === 6 || i + 1 === 9 || i + 1 === 12) continue;

    const angle = (i + 1) * (Math.PI / 6);
    // 가로 길이: 132(반지름 값, 테두리가 8px라서 140-8을 해줌) - 텍스트 길이/2 - 132*sin30
    // 1부터 12까지 각도는 30도씩 증가하기 때문에 angle이라는 변수에 각도 값 저장
    // 세로도 가로길이와 비슷함.
    // 원을 그리고 삼각함수를 이용하여 좌표 값을 구하는 방식으로 숫자의 위치를 설정하였음.
    const x =
      132 -
      nums[i].offsetWidth / 2 +
      132 * Math.abs(Math.sin(angle).toFixed(2));
    const y = 132 - 132 * Math.abs(Math.cos(angle).toFixed(2));
    if (i + 1 > 6) nums[i].style.right = `${x}px`;
    else nums[i].style.left = `${x}px`;

    if ((i + 1 >= 9 && i + 1 <= 12) || (i + 1 >= 1 && i + 1 <= 3))
      nums[i].style.top = `${y}px`;
    else nums[i].style.bottom = `${y}px`;
  }
}

function clock() {
  const digitalClock = document.querySelector(".digital-clock");
  const secondPointer = document.getElementById("second");
  const minutePointer = document.getElementById("minute");
  const hourPointer = document.getElementById("hour");

  const currentTime = new Date();

  let second = currentTime.getSeconds();
  let secondAngle = second * 6;
  let secondAngleValue = `rotate(${secondAngle}deg)`;

  let minute = currentTime.getMinutes();
  let minuteAngle = minute * 6;
  let minuteAngleValue = `rotate(${minuteAngle}deg)`;

  let hour = currentTime.getHours();
  let hourAngle =
    (hour > 12 ? (hour - 12) * 30 : hour * 30) + (minute / 60) * 30;
  let hourAngleValue = `rotate(${hourAngle}deg)`;

  secondPointer.style.transform = secondAngleValue;
  minutePointer.style.transform = minuteAngleValue;
  hourPointer.style.transform = hourAngleValue;
  digitalClock.innerText = `${
    hour < 10
      ? `오전 0${hour}`
      : `${hour > 12 ? `오후 0${hour - 12}` : `오전 ${hour}`}`
  }:${minute < 10 ? `0${minute}` : `${minute}`}:${
    second < 10 ? `0${second}` : `${second}`
  }`;
}

function handleLoad() {
  setInterval(clock, 1000);
}

function init() {
  setNumPosition();
  window.addEventListener("load", handleLoad);
}

init();
