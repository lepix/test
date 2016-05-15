function test (selector) {
    var el = $(selector);
    return function (name) {
        el.text("Hi " + name + "!");
    }
}

function ready() {
	return
}