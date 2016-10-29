JS-DeVendorCSS
==============

A simple javascript function that provides cross-browser CSS property compatability by 'removing' vendor prefixes.

Usage:
DeVendorCSS('css_property') --> returns an array: ['vendor_prefix', 'js_property_name', 'css_property_name']

Example #1:
DeVendorCSS('transform') --> returns ['webkit', 'webkitTransform','-webkit-transform'] in webkit browsers that support '-webkit-transform', but not 'transform'

Example #2:
var transform = DeVendorCSS('transform');
e.style[transform[1]]="translateY(5px)";
