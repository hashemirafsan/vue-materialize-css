
/* Vue-Materialize */
import _ from 'lodash';
import Button from '../packages/button/index.js';
import 'materialize-css/dist/css/materialize.min.css';
import '../lib/css/font.css';
import 'materialize-css/dist/js/materialize.min.js';

const components = [
	Button
];

const materialize = {
	install(Vue, options = {}) {
		_.map(components, (component) => {
			Vue.component(component.name, component)
		});
	}
};


export default materialize;