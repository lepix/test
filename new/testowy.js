function test (selector) {
    var el = $(selector);
    return function (name) {
        el.text("Hey " + name + "!");
    }
}

function ready() {
	return
}