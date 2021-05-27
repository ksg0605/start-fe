import { render } from './html-render';
import todoModel from './todo-model';

const $inputForm = document.querySelector('#input-form');
const $input = document.querySelector('#input');

function init(data) {
  $inputForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const text = $input.value;
    $input.value = '';
    if (!text) return;

    data.push({
      ...todoModel,
      text,
      isDone: false,
    });

    render(data);
  });
}

export default {
  init,
};
