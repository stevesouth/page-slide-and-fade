
(function() {

		var Slide = function(element) {
			this.pages = element.getElementsByClassName("page");
			this.selected = 0;
			this._position();
		};

		Slide.prototype.next = function() {
			this.selected = this.selected + 1;
			this._position();
		}

		Slide.prototype.previous = function() {
			this.selected = this.selected - 1;
			this._position();
		}

		Slide.prototype._position = function() {
			for (var i = 0, l = this.pages.length; i < l; i++) {
				if (i > this.selected) {
					this._hideToRight(this.pages[i]);
				} else if (i === this.selected) {
					this._show(this.pages[i]);
				} else {
					this._fadeOut(this.pages[i]);
				}
			}
		}

		Slide.prototype._fadeOut = function(page) {
			page.style.webkitTransform = "translate(0,0) scale(0.9,0.9)";
			page.style.opacity = "0.7";
		};

		Slide.prototype._show = function(page) {
			page.style.webkitTransform = "translate(0,0) scale(1,1)";
			page.style.opacity = "1";
		};

		Slide.prototype._hideToRight = function(page) {
			page.style.webkitTransform = "translate(100%,0) scale(1,1)";
			page.style.opacity = "1";
		};

		window.Slide = Slide;
})();