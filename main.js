const targeDay = new Date("Dec 31,2024 23:59:59").getTime();

function updateDay() {
  const myDay = new Date().getTime();
  const countDown = targeDay - myDay;

  const day = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);
  document.getElementById("day").textContent = day;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minute").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;

  if (countDown < 0) {
    clearInterval(time);
    document.querySelector(".timer").innerHTML = "2024 is over Happy New year";
  }
}
let time = setInterval(updateDay, 1000);
