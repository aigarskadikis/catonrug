


var _ = function (t) {
    return document.getElementById(t)
  },
  x = '</a>',
  z = x + '<br /><textarea>',
  r = '/feeds/posts/default/',
  l = "<source src='",
  k = "' download='",
  j = '?alt=json',
  h = '&quot;), &quot;',
  f = "&quot;);'>",
  m = '</textarea>',
  v = "<a href='",
  p = v + "javascript:void(0);' onClick='javascript:window.navigator.msSaveBlob(u(&quot;",
  b = 'data:application/octet-stream;base64,',
  keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
  isIE = !1;

  
  
  
(navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') > 0 || window.navigator.userAgent.indexOf('Edge') > -1) && (isIE = !0), typeof document.getElementsByClassName !== 'function' && (document.getElementsByClassName = function (t) {
  if (!t) return []
  for (var e = [], n = document.getElementsByTagName('*'), r = new RegExp('(^| )' + t + '( |$)'), o = 0; o < n.length; o++) r.test(n[o].className) && e.push(n[o])
  return e
})

function d (t) {
  var e, n, r, o, a, i, c = '',
    u = 0
  for (/[^A-Za-z0-9\+\/\=]/g.exec(t) && alert('1'), t = t.replace(/[^A-Za-z0-9\+\/\=]/g, ''); e = keyStr.indexOf(t.charAt(u++)) << 2 | (r = keyStr.indexOf(t.charAt(u++))) >> 4, n = (15 & r) << 4 | (o = keyStr.indexOf(t.charAt(u++))) >> 2, i = (3 & o) << 6 | (c = keyStr.indexOf(t.charAt(u++))), a += String.fromCharCode(e), o !== 64 && (a += String.fromCharCode(n)), c !== 64 && (a += String.fromCharCode(i)), e = n = i = '', r = o = c = '', u < t.length;);
  return unescape(a)
}

function u (t) {
  for (var e = atob(t.split(',')[1]), n = t.split(',')[0].split(':')[1].split(';')[0], r = new ArrayBuffer(e.length), o = new Uint8Array(r), a = 0; a < e.length; a++) o[a] = e.charCodeAt(a)
  return new Blob([r], {
    type: n
  })
}

function g (t, e, n) {
  var r = new XMLHttpRequest()
  r.onreadystatechange = function () {
    r.readyState === XMLHttpRequest.DONE && (r.status === 200 ? typeof e === 'function' && e(JSON.parse(r.responseText)) : typeof n === 'function' && n(r))
  }, r.open('GET', t, !0), r.send()
}

function o (t) {
  return typeof Node === 'object' ? t instanceof Node : t && typeof t === 'object' && typeof t.nodeType === 'number' && typeof t.nodeName === 'string'
}

function a (t, e) {
  if (o(t)) return e.appendChild(t)
  e.innerHTML += t
}

function i (t) {
  return (t = t.trim()).indexOf('#') === 0 && t.indexOf('.') === -1 && t.indexOf('>') === -1 && t.indexOf(' ') === -1
}

function ac (t, e) {
  if (!i(e)) return console.error('2'), !1
  var n = e.replace('#', ''),
    o = _(n)
  g(r + t + j, isIE ? function (t) {
    a(p + b + t.entry.content.$t + h + t.entry.title.$t + f + t.entry.title.$t + z + d(t.entry.content.$t) + m, o)
  } : function (t) {
    a(v + b + t.entry.content.$t + k + t.entry.title.$t + "'>" + t.entry.title.$t + z + d(t.entry.content.$t) + m, o)
  })
}

function anchor (t, e) {
  if (!i(e)) return console.error('2'), !1
  var n = e.replace('#', ''),
    o = _(n)
  g(r + t + j, isIE ? function (t) {
    a(p + t.entry.content.$t + h + t.entry.title.$t + f + t.entry.title.$t + x, o)
  } : function (t) {
    a(v + t.entry.content.$t + k + t.entry.title.$t + "'>" + t.entry.title.$t + x, o)
  })
}

function mp4id (t, e) {
  if (!i(e)) return console.error('2'), !1
  var n = e.replace('#', ''),
    o = _(n)
  g(r + t + j, function (t) {
    a(l + t.entry.content.$t + "' type='video/mp4'>" + v + t.entry.content.$t + "'>" + t.entry.title.$t + x, o)
  })
}

function mp3id (t, e) {
  if (!i(e)) return console.error('2'), !1
  var n = e.replace('#', ''),
    o = _(n)
  g(r + t + j, function (t) {
    a(l + t.entry.content.$t + "' type='audio/mpeg'>", o)
  })
}

function out (t, e) {
  if (!i(e)) return console.error('2'), !1
  var n = e.replace('#', ''),
    o = _(n)
  g(r + t + j, function (t) {
    a('<textarea>' + d(t.entry.content.$t) + m, o)
  })
}
