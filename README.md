page-slide-and-fade
===================

Tiny utility to enable a nice slide, fade and scale page animation a found in flipboard and other apps. Only hardward accelerated transitions are used so it should all be nice and smooth even on mobile devices.

Tested and working well in chrome, firefox and IE11 on deskop, chrome, android browser (from 4.3), firefox mobile and safari on IOS7. For browsers that don't support 'transform' it should fall back to no transitions, this is a quick fix if anyone needs would like to use this in production.

## Instant Demo

https://rawgithub.com/stevesouth/page-slide-and-fade/master/index.html

## To Use

Simply clone the repo, index.html should work.

## Detailed setup instructions...

Include modernizr, jquery and the pagefx files. I can easily remove the jquery and modernizr dependencies if anyone asks.

```
<script src="thirdparty/modernizr-2.6.2.min.js"></script>
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<script src="dist/pagefx.js"></script>
```

Include the css

```
<link rel="stylesheet" href="css/normalize.css">
<link rel="stylesheet" href="css/main.css">
```

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

The previous and next buttons should be clickable and provide a rather delightful transition.
