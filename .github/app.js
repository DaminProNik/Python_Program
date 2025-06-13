const messages = [
  { text: "بانک ملی ایران:\nحساب شما مسدود شده. برای رفع وارد شوید:\nhttps://bmi-ir24.info/verify", phish: true },
  { text: "سامانه ثنا:\nابلاغ جدید دارید. برای مشاهده وارد سامانه رسمی شوید.", phish: false },
  { text: "Google Security:\nLogin from unknown device! Secure now: https://google-verify-alert.com/login", phish: true },
  { text: "ارگان رسمی مالیاتی:\nاطلاعات مالی شما بررسی شده است. جهت دریافت فرم رسمی وارد شوید:", phish: true },
  { text: "نهاد خیالی امنیت سایبری:\nاطلاعات هویتی شما ناقص است. لطفاً اطلاعات را تکمیل نمایید.", phish: false }
];

let score = 0;
const start = document.getElementById('start');
const quiz = document.getElementById('quiz');
const msgBox = document.getElementById('messageBox');
const realBtn = document.getElementById('real');
const phishBtn = document.getElementById('phish');
const feedback = document.getElementById('feedback');
const scoreSpan = document.getElementById('score');
let current;

function nextMessage() {
  feedback.textContent = '';
  const idx = Math.floor(Math.random() * messages.length);
  current = messages[idx];
  msgBox.textContent = current.text;
}

start.addEventListener('click', () => {
  start.classList.add('hidden');
  quiz.classList.remove('hidden');
  nextMessage();
});

function handleAnswer(isPhish) {
  if ((isPhish && current.phish) || (!isPhish && !current.phish)) {
    feedback.textContent = '✅ درست پاسخ دادی!';
    score++;
  } else {
    feedback.textContent = '❌ اشتباه بود!';
    score--;
  }
  scoreSpan.textContent = score;
  setTimeout(nextMessage, 1500);
}

realBtn.addEventListener('click', () => handleAnswer(false));
phishBtn.addEventListener('click', () => handleAnswer(true));