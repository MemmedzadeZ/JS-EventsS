// Автоматическая прокрутка слайдов- Создайте слайд-шоу на веб-странице,
//  который автоматически прокручивает слайды с картинками через определенные
//  промежутки времени, используя `setInterval`

// let slideIndex = 0;
// showSlides();

// function showSlides() {
//   let slides = document.getElementsByClassName("slide");
//   for (let i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {
//     slideIndex = 1;
//   }
//   slides[slideIndex - 1].style.display = "block";
//   setTimeout(showSlides, 3000); // Смена слайда каждые 3 секунды
// }

// Показ случайных цитат- Напишитепрограмму, которая показывает случайную
//  цитату через определенные интервалы времени, используя setInterval. Также добавьте
//  смены стилей при смене цитаты ( цвет заднего фона,текста и тд )

// const Proverbs = [
//   "Не мечтай о своей жизни, живи своей мечтой.",
//   "Birlik harada, dirilik orada.",
//   "Каждое мгновение - новый шанс.",
//   "Çox qarışqa bir şiri öldürər.",
//   "Будь собой, остальные роли уже заняты.",
//   "Dağ yeri - duman yeri, Yurd yeri - guman yeri.",
// ];

// function showRandomproverbs() {
//   const randomIndex = Math.floor(Math.random() * Proverbs.length);
//   const proverbsText = document.getElementById("proverbs-text");
//   const proverbsContainer = document.getElementById("proverbs-container");
//   const body = document.body;

//   proverbsText.textContent = Proverbs[randomIndex];

//   proverbsContainer.style.backgroundColor = background;

//   body.style.backgroundColor = background;
// }

// setInterval(showRandomproverbs, 3000);

// window.onload = showRandomproverbs;

//  Таймер обратного отсчета-Создайтетаймеробратногоотсчета, который
//  отображает сколько времени осталось до определенного события. Также добавьте
//  поля ввода времени для начала отсчет

document
  .getElementById("start_button")
  .addEventListener("click", startCountdown);

let countdownInterval;

function startCountdown() {
  clearInterval(countdownInterval);

  const secondsInput = parseInt(document.getElementById("seconds").value) || 0;

  let totalTimeInSeconds = secondsInput;

  countdownInterval = setInterval(() => {
    if (totalTimeInSeconds <= 0) {
      clearInterval(countdownInterval);
      alert("Emeliyyat ugurlu oldu!");
      return;
    }

    totalTimeInSeconds--;

    const displaySeconds = totalTimeInSeconds % 60;

    document.getElementById("countdown-display").textContent = `${Zero(
      displaySeconds
    )}`;
  }, 1000);
}

function Zero(num) {
  return num < 10 ? "0" + num : num;
}
