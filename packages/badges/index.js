import _badges from './template/badges';

_badges.install = function(Vue){
	Vue.component(_badges.name, _badges);
};

export default _badges;