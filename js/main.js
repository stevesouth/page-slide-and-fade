
(function() {

		var Slide = function(element) {
			this.pages = element.getElementsByClassName("page");
			this.selected = 0;
			this._position();
			this._initControls(element);
		};

		Slide.prototype.next = function() {
			if (this.selected + 1 < this.pages.length) {
				this.selected = this.selected + 1;
				this._position();
			}
		}

		Slide.prototype.previous = function() {
			if (this.selected - 1 >= 0) {
				this.selected = this.selected - 1;
				this._position();
			}
		}

		Slide.prototype._position = function() {
			for (var i = 0, l = this.pages.length; i < l; i++) {
				if (i > this.selected) {
					this._hideRight(this.pages[i]);
				} else if (i === this.selected) {
					this._show(this.pages[i]);
				} else {
					this._fadeOut(this.pages[i]);
				}
			}
		}

		Slide.prototype._fadeOut = function(page) {
			page.style.webkitTransform = "translate(0,0) scale(0.9,0.95) rotate(-3deg)";
			page.style.opacity = "0.7";
		};

		Slide.prototype._show = function(page) {
			page.style.webkitTransform = "translate(0,0) scale(1,1) rotate(0deg)";
			page.style.opacity = "1";
		};

		Slide.prototype._hideRight = function(page) {
			page.style.webkitTransform = "translate(100%,0) scale(1,1) rotate(0deg)";
			page.style.opacity = "0.9";
		};

		Slide.prototype._initControls = function(element) {
			$(element).find('.previous').on("touchstart", function() {
				this.previous();
			}.bind(this));

			$(element).find('.next').on("touchstart", function() {
				this.next();
			}.bind(this));
		};

		window.Slide = Slide;
})();