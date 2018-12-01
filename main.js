var $ = function(id) {
    return document.getElementById(id);
};
var r = "/feeds/posts/default/";

function d(e) {
    var t, n, o, r, a = "",
        i = "",
        d = "",
        c = 0;
    for (/[^A-Za-z0-9\+\/\=]/g.exec(e) && alert("1"), e = e.replace(/[^A-Za-z0-9\+\/\=]/g, ""); t = keyStr.indexOf(e.charAt(c++)) << 2 | (o = keyStr.indexOf(e.charAt(c++))) >> 4, n = (15 & o) << 4 | (r = keyStr.indexOf(e.charAt(c++))) >> 2, i = (3 & r) << 6 | (d = keyStr.indexOf(e.charAt(c++))), a += String.fromCharCode(t), 64 != r && (a += String.fromCharCode(n)), 64 != d && (a += String.fromCharCode(i)), t = n = i = "", o = r = d = "", c < e.length;);
    return unescape(a)
}

function u(e) {
    for (var t = atob(e.split(",")[1]), n = e.split(",")[0].split(":")[1].split(";")[0], o = new ArrayBuffer(t.length), r = new Uint8Array(o), a = 0; a < t.length; a++) r[a] = t.charCodeAt(a);
    return new Blob([o], {
        type: n
    })
}

function g(e, t, n) {
    var o = new XMLHttpRequest;
    o.onreadystatechange = function() {
        o.readyState === XMLHttpRequest.DONE && (200 === o.status ? "function" == typeof t && t(JSON.parse(o.responseText)) : "function" == typeof n && n(o))
    }, o.open("GET", e, !0), o.send()
}

function o(e) {
    return "object" == typeof Node ? e instanceof Node : e && "object" == typeof e && "number" == typeof e.nodeType && "string" == typeof e.nodeName
}

function a(e, t) {
    if (o(e)) return t.appendChild(e);
    t.innerHTML += e
}

function i(e) {
    return 0 === (e = e.trim()).indexOf("#") && -1 === e.indexOf(".") && -1 === e.indexOf(">") && -1 === e.indexOf(" ")
}

function ac(e, t) {
    if (!i(t)) return console.error("2"), !1;
    var n = t.replace("#", ""),
        o = $(n);
    g(r + e + "?alt=json", isIE ? function(e) {
        a("<a href='javascript:void(0);' onClick='javascript:window.navigator.msSaveBlob(u(&quot;data:application/octet-stream;base64," + e.entry.content.$t + "&quot;), &quot;" + e.entry.title.$t + "&quot;);'>" + e.entry.title.$t + "</a><br /><textarea>" + d(e.entry.content.$t) + "</textarea>", o)
    } : function(e) {
        a("<a href='data:application/octet-stream;base64," + e.entry.content.$t + "' download='" + e.entry.title.$t + "'>" + e.entry.title.$t + "</a><br /><textarea>" + d(e.entry.content.$t) + "</textarea>", o)
    })
}

function anchor(e, t) {
    if (!i(t)) return console.error("2"), !1;
    var n = t.replace("#", ""),
        o = $(n);
    g(r + e + "?alt=json", isIE ? function(e) {
        a("<a href='javascript:void(0);' onClick='javascript:window.navigator.msSaveBlob(u(&quot;" + e.entry.content.$t + "&quot;), &quot;" + e.entry.title.$t + "&quot;);'>" + e.entry.title.$t + "</a>", o)
    } : function(e) {
        a("<a href='" + e.entry.content.$t + "' download='" + e.entry.title.$t + "'>" + e.entry.title.$t + "</a>", o)
    })
}

function mp4id(e, t) {
    if (!i(t)) return console.error("2"), !1;
    var n = t.replace("#", ""),
        o = $(n);
    g(r + e + "?alt=json", function(e) {
        a("<source src='" + e.entry.content.$t + "' type='video/mp4'><a href='" + e.entry.content.$t + "'>" + e.entry.title.$t + "</a>", o)
    })
}

function mp3id(e, t) {
    if (!i(t)) return console.error("2"), !1;
    var n = t.replace("#", ""),
        o = $(n);
    g(r + e + "?alt=json", function(e) {
        a("<source src='" + e.entry.content.$t + "' type='audio/mpeg'>", o)
    })
}

function out(e, t) {
    if (!i(t)) return console.error("2"), !1;
    var n = t.replace("#", ""),
        o = $(n);
    g(r + e + "?alt=json", function(e) {
        a("<textarea>" + d(e.entry.content.$t) + "</textarea>", o)
    })
}
var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    isIE = !1;
(-1 !== navigator.userAgent.indexOf("MSIE") || 0 < navigator.appVersion.indexOf("Trident/") || -1 < window.navigator.userAgent.indexOf("Edge")) && (isIE = !0), "function" != typeof document.getElementsByClassName && (document.getElementsByClassName = function(e) {
    if (!e) return [];
    for (var t = [], n = document.getElementsByTagName("*"), o = new RegExp("(^| )" + e + "( |$)"), r = 0; r < n.length; r++) o.test(n[r].className) && t.push(n[r]);
    return t
});