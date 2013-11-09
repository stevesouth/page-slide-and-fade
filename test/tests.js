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
		"visible",
		"outright",
		"outright",
		"outright",
		"outright"
	], pages);
});	

function assertPageState(states, pages) {
	equal(pages.length, states.length, "Incorrect number of pages found");

	//for (var i = )
}