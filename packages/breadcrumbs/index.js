import _breadcrumbs from './template/breadcrumbs';

_breadcrumbs.install = function(Vue){
	Vue.component(_breadcrumbs.name, _breadcrumbs);
};

export default _breadcrumbs;