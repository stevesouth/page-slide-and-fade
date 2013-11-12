var slide, pages;

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

		slide = new Slide(document.body);
		pages = $('.fixture').find('.page');
	},
	teardown: function() {
		$('.fixture').remove();
		slide = null;
		pages = null;
	}
});

test('Can create a slide object', function() {
	ok(slide);
});	

test('Pages initialised correctly', function() {
	assertPageState([
		STATE.visible,
		STATE.outright,
		STATE.outright,
		STATE.outright,
		STATE.outright
	], pages);
});	

test('Move to the second slide', function() {
	slide.next();

	assertPageState([
		STATE.faded,
		STATE.visible,
		STATE.outright,
		STATE.outright,
		STATE.outright
	], pages);
});	

test('Move to the fourth slide', function() {
	slide.next();
	slide.next();
	slide.next();

	assertPageState([
		STATE.faded,
		STATE.faded,
		STATE.faded,
		STATE.visible,
		STATE.outright
	], pages);
});	

test('Move to the final slide and ensure you can go no further', function() {
	slide.next();
	slide.next();
	slide.next();
	slide.next();

	assertPageState([
		STATE.faded,
		STATE.faded,
		STATE.faded,
		STATE.faded,
		STATE.visible
	], pages);

	slide.next();
	slide.next();
	slide.next();

	assertPageState([
		STATE.faded,
		STATE.faded,
		STATE.faded,
		STATE.faded,
		STATE.visible
	], pages, "We shouldn't have been able to move past the final slide.");
});	

test('Move to the end then back one', function() {
	slide.next();
	slide.next();
	slide.next();
	slide.next();

	assertPageState([
		STATE.faded,
		STATE.faded,
		STATE.faded,
		STATE.faded,
		STATE.visible
	], pages, "We should now be on the final page.");

	slide.previous();

	assertPageState([
		STATE.faded,
		STATE.faded,
		STATE.faded,
		STATE.visible,
		STATE.outright
	], pages, "We should now be on the fourth pag. Failed to move back from fifth.");
});

test('Ensure you cannot move back past the first page', function() {
	slide.next();
	slide.next();
	slide.next();
	slide.next();

	assertPageState([
		STATE.faded,
		STATE.faded,
		STATE.faded,
		STATE.faded,
		STATE.visible
	], pages, "We should now be on the final page.");

	slide.previous();
	slide.previous();
	slide.previous();
	slide.previous();

	assertPageState([
		STATE.visible,
		STATE.outright,
		STATE.outright,
		STATE.outright,
		STATE.outright
	], pages, "We should now be on the first page.");

	slide.previous();
	slide.previous();
	slide.previous();
	slide.previous();

	assertPageState([
		STATE.visible,
		STATE.outright,
		STATE.outright,
		STATE.outright,
		STATE.outright
	], pages, "We should still be on the first page after trying to move past it.");
});		

test('Next and previous buttons', function() {
	assertPageState([
		STATE.visible,
		STATE.outright,
		STATE.outright,
		STATE.outright,
		STATE.outright
	], pages, "First page should be visible.");

	$('.next').trigger("click");

	assertPageState([
		STATE.faded,
		STATE.visible,
		STATE.outright,
		STATE.outright,
		STATE.outright
	], pages, "Second page should be visible.");

	$('.previous').trigger("click");

	assertPageState([
		STATE.visible,
		STATE.outright,
		STATE.outright,
		STATE.outright,
		STATE.outright
	], pages, "Second page should be visible.");
});	

/**
 * Utility Functions
 */

STATE = {
	visible: "translate3d(0px, 0px, 0px) scale(1, 1)",
	faded: "translate3d(0px, 0px, 0px) scale(0.95, 0.95)",
	outright: "translate3d(100%, 0px, 0px) scale(1, 1)"
};

function assertPageState(states, pages, extra) {
	equal(pages.length, states.length, "Incorrect number of pages found");
	extra = extra === undefined ? "" : extra;
	pages.each(function(index, page) {
		equal(states[index], page.style[Modernizr.prefixed('transform')], "Incorrect page state at page index " + index + ". " + extra);
	});
}