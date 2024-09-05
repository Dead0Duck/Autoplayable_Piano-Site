const timeouts = [];
const originalTimeoutFn = window.setTimeout;

window.setTimeout = function(fun, delay) {
	const t = originalTimeoutFn(fun, delay);
	timeouts.push(t);
}

function clearAllTimeout(){
	while(timeouts.length){
		clearTimeout(timeouts.pop());
	}
}