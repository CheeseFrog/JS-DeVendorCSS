// Usage:
//  DeVendorCSS('css_property') --> returns an array: ['vendor_prefix', 'js_property_name', 'css_property_name']

// Example #1:
//  DeVendorCSS('transform') --> returns ['webkit', 'webkitTransform','-webkit-transform'] in webkit browsers that support '-webkit-transform', but not 'transform'

// Example #2:
//  var transform = DeVendorCSS('transform');
//  e.style[transform[1]]="translateY(5px)";

function DeVendorCSS(n) {
  function Up(a) {return a.charAt(0).toUpperCase()+a.slice(1);}
  function Q(a) {if (a in document.body.style) return js=a;}
  var n=n.toLowerCase(), js=n.split("-");
  for (var i=1; i<js.length; i++) js[i]=Up(js[i]);
  js=(js+'').replace(/,/g,'');
  var v=['','webkit','moz','o','ms','khtml'], i=0;
  if (!Q(js)) for (i=1; i<v.length; i++) {if (Q(v[i]+Up(js)) || Q(Up(v[i])+Up(js))) break;}
  return [v[i], js, ((i && i<v.length)?'-'+v[i]+'-':'')+n];
}
