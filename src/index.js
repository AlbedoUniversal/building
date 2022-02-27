import _ from 'lodash';
import css from './styles/main.scss';
import { setActivePage } from './getActiveMenuItem';

document.onbeforeunload = function() {
  alert('s');
};