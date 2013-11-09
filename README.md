page-slide-and-fade
===================

Tiny utility to enable a nice slide, fade, scaling page animation a found in flipboard and other apps.

## Instant Demo

http://htmlpreview.github.io/?https://github.com/stevesouth/page-slide-and-fade/blob/master/index.html

## To Use

Simply clone the repo, index.html should work.

## Detailed setup instructions...

Include modernizr, jquery and the pagefx files. I can easily remove the jquery and modernizr dependencies if this turns in to more than a demo.

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
