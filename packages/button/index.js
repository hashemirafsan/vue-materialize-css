import _button from './template/button';
// import 'materialize-css/dist/css/materialize.min.css'

_button.install = function(Vue){
	Vue.component(_button.name, _button);
};

export default _button;