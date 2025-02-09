import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

let userSelectedDate = null;
let buttonStart = document.querySelector('#js-button-start');
let inputDate = document.querySelector('#datetime-picker');
let intervalId = null;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (new Date() > selectedDates[0]) {
      userSelectedDate = selectedDates[0];
      iziToast.error({
        title: 'Error',
        position: 'topRight',
        backgroundColor: '#EF4040',
        messageColor: '#fff',
        titleColor: '#fff',
        iconColor: '#fff',
        message: 'Please choose a date in the future',
      });
      //   window.alert('Please choose a date in the future');
      buttonStart.disabled = true;
    } else {
      buttonStart.disabled = false;
    }
  },
};

buttonStart.addEventListener('click', () => {
  buttonStart.disabled = true;
  inputDate.disabled = true;
  intervalId = setInterval(() => {
    let timeDiffMs = userSelectedDate - new Date();
    if (timeDiffMs <= 0) {
      clearInterval(intervalId);
      timeDiffMs = 0;
      inputDate.disabled = false;
    }
    let timeDiff = convertMs(timeDiffMs);
    document.querySelector('#js-days').textContent = addLeadingZero(
      timeDiff.days
    );
    document.querySelector('#js-hours').textContent = addLeadingZero(
      timeDiff.hours
    );
    document.querySelector('#js-minutes').textContent = addLeadingZero(
      timeDiff.minutes
    );
    document.querySelector('#js-seconds').textContent = addLeadingZero(
      timeDiff.seconds
    );
    console.log(timeDiffMs);
  }, 1000);
});

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

flatpickr('#datetime-picker', options);
