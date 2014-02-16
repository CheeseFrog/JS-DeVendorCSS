// Usage:
//  DeVendorCSS('css_property') --> returns an array: ['vendor_prefix', 'js_property_name', 'css_property_name']

// Example #1:
//  DeVendorCSS('transform') --> returns ['webkit', 'webkitTransform','-webkit-transform'] in webkit browsers that support '-webkit-transform', but not 'transform'

// Example #2:
//  var transform = DeVendorCSS('transform');
//  eval('e.style.'+transform[1]+'="translateY(5px)"')

function DeVendorCSS(n) {
    var v = ['', 'webkit', 'moz', 'ms', 'o', 'khtml'];
    for (var i=0; i<v.length; i++)
    if (((i)? '-'+v[i]+'-'+n : n) in document.body.style) return [v[i], v[i] + ((i)? n.charAt(0).toUpperCase()+n.slice(1) : n), ((i)? '-'+v[i]+'-' : '')+n];
    return ['', n, n]; // Fallback for no support
}
