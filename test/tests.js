module( "Slide FX Tests", {
	setup: function() {
		var html = 
		"<div class='fixture'>" + 
			"<div class='navigation'>" +
				"<div class='previous'></div>" +
				"<div class='next'></div>" +
			"</div>" +
			"<div class='application'>" +
				"<div class='page'></div>" +
				"<div class='page'></div>" +
				"<div class='page'></div>" +
				"<div class='page'></div>" +
				"<div class='page'></div>" +
			"</div>" +
		"</div>";

	document.body.innerHTML = html; 
	},
	teardown: function() {
	// clean up after each test
	}
});

test('Can create a slide object', function() {
	var slide = new Slide(document.body);
	ok(slide);
});	

test('Pages initialised correctly', function() {
	var slide = new Slide(document.body);
	var pages = $('.fixture').find('.page');
	assertPageState([
		STATE.visible,
		STATE.outright,
		STATE.outright,
		STATE.outright,
		STATE.outright
	], pages);
});	

STATE = {
	visible: "translate(0px, 0px) scale(1, 1)",
	faded: "translate(0px, 0px) scale(0.95, 0.95)",
	outright: "translate(100%, 0px) scale(1, 1)"
};

function assertPageState(states, pages) {
	equal(pages.length, states.length, "Incorrect number of pages found");
	pages.each(function(index, page) {
		equal(states[index], page.style[Modernizr.prefixed('transform')], "Incorrect page state at page index " + index);
	});
}