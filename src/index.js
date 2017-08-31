
/* Vue-Materialize */
import _ from 'lodash';
/**
 * Css
 */
import 'materialize-css/dist/css/materialize.min.css';
import '../lib/css/font.css';
import '../lib/css/style.css';
import 'materialize-css/dist/js/materialize.min.js';

/**
 * Package
 */
import Button from '../packages/button/index.js';
import Badges from '../packages/badges/index.js';
import Breadcrumbs from '../packages/breadcrumbs/index.js';

const components = [
	Button,
	Badges,
	Breadcrumbs
];

const materialize = {
	install(Vue, options = {}) {
		_.map(components, (component) => {
			Vue.component(component.name, component)
		});
	}
};


export default materialize;