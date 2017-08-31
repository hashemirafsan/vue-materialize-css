import _button from './template/button';

_button.install = function(Vue){
	Vue.component(_button.name, _button);
};

export default _button;