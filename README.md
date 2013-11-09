page-slide-and-fade
===================

Tiny utility to enable a nice slide, fade, scaling page animation a found in flipboard and other apps.

## To Use

Structure you html like so..

```
<div class="navigation">
    <button class="previous">&lt;</button>
    <button class="next">&gt;</button>
</div>

<div class="application">
    <div class="page">1</div>
    <div class="page">2</div>
    <div class="page">3</div>
</div>
```

Then create the Slide object passing in an element that holds the html above. e.g.

```
var slider = new Slide(document.body);
```

The previous and next buttons should be clickable and proide a rather delightful transition.
