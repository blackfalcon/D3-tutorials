#D3 - tutorials

If you are new to D3, I can't recommend more reading [D3 Tutorials](http://alignedleft.com/tutorials/d3/) by Scott Murry.

To run the code, simply clone the repo and run `python -m SimpleHTTPServer 3000 &` to start a local python server.

##Styling SVG Elements

SVG’s default style is a black fill with no stroke. If you want anything else, you’ll have to apply styles to your elements. Common SVG properties are:

* fill — A color value. Just as with CSS, colors can be specified as
	* named colors — orange
	* hex values — #3388aa or #38a
	* RGB values — rgb(10, 150, 20)
	* RGB with alpha transparency — rgba(10, 150, 20, 0.5)
* stroke — A color value.
* stroke-width — A numeric measurement (typically in pixels).
* opacity — A numeric value between 0.0 (completely transparent) and 1.0 (completely opaque).

With text, you can also use these properties, which work just like in CSS:

* font-family
* font-size

#### DANGER!!
Most of the CSS attributes are not valid CSS attributes and vice-versa, not all CSS attributes work in SGVs. So it is good practice to namepsace your SVG styles.

`.svg-pumpkin { … }`