import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

const makePromise = ({ delay, state }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });
};

form.addEventListener('submit', event => {
  event.preventDefault();

  const delay = form.elements.delay.value;
  const state = form.elements.state.value;

  console.log(`Delay: ${delay}, State: ${state}`);
  makePromise({ delay, state })
    .then(delay => {
      iziToast.success({
        title: '✅',
        message: `Fulfilled promise in ${delay}ms`,
      });
    })
    .catch(delay => {
      iziToast.error({
        title: '❌',
        message: `Rejected promise in ${delay}ms`,
      });
    });
});
