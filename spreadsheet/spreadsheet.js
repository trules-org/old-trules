for (let i=0; i<6; i++) { /* build the table */
	let row = document.querySelector("table").insertRow()
	for (let j=0; j<6; j++) {
		let letter = String.fromCharCode("A".charCodeAt(0)+j-1)
		row.insertCell().innerHTML = i&&j ? `<input id=${letter}${i} />` : i||letter
	}
}
let keys = Array.from(document.querySelectorAll("input")).map(i => i.id) // spread not in Edge

function valueOf(key) { /* recursively compute a value */
	let val = localStorage[key] || ""
	if (val[0] == "=") {
		let f = new Function(...keys, `return eval("${val.substr(1)}")`)
		return f(...keys.map(key => ({valueOf: _ => valueOf(key)}))).valueOf()
	} else {
		return isNaN(parseFloat(val)) ? val : parseFloat(val)
	}
}

(window.update = _ => keys.forEach(key => { /* update all fields */
	try { document.getElementById(key).value = valueOf(key) } catch (e) {}
}))()

window.addEventListener("focus", e => e.target.value = localStorage[e.target.id] || "", true)
window.addEventListener("blur", e => (localStorage[e.target.id] = e.target.value, update()), true)
