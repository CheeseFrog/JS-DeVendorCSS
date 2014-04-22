// Usage:
//  DeVendorCSS('css_property') --> returns an array: ['vendor_prefix', 'js_property_name', 'css_property_name']

// Example #1:
//  DeVendorCSS('transform') --> returns ['webkit', 'webkitTransform','-webkit-transform'] in webkit browsers that support '-webkit-transform', but not 'transform'

// Example #2:
//  var transform = DeVendorCSS('transform');
//  eval('e.style.'+transform[1]+'="translateY(5px)"')

function DeVendorCSS(n) {
  function Up(a) {return a.charAt(0).toUpperCase()+a.slice(1);}
  function Q(a) {if (a in document.body.style) return js=a;}
  n=n.toLowerCase(); var js=n.split("-");
  for (var i=1; i<js.length; i++) js[i]=Up(js[i]); js=(js+'').replace(',','');
  var v=['','webkit','moz','o','ms','khtml'], i=0;
  if (!Q(js)) for (i=1; i<v.length; i++) {if (Q(v[i]+Up(js)) || Q(Up(v[i])+Up(js))) break;}
  return ['', js, ((i && i<v.length)?'-'+v[i]+'-':'')+n];
}
