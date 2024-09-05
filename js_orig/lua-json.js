const { format } = require('lua-json')
window.parse2lua = function(obj)
{
	let txt = format(obj, {eol: "", spaces: null})
		txt = txt.replaceAll(",}", "}").replace("return", "")
		
	return txt
}