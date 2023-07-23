import scrolling from './modules/pageup.js';
import accordion from './modules/accordion.js';
import tabs from './modules/tabs.js';

window.addEventListener('DOMContentLoaded', () => {

	scrolling('.pageup');
	accordion('.edu22-box', '.edu22-container-inner');
	tabs('.specialities-block__tabs', '.tabs-nav__item', '.tabs-content__item', 'current');
});

