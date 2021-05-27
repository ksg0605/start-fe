import { render } from './html-render';
import formInput from './form-input';

import './todos.css';

const $result = document.querySelector('#result');

const todos = [];

formInput.init(todos);
render(todos);
