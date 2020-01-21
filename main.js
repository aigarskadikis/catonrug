var $ = function(e) {
        return document.getElementById(e)
    },
    r = "/feeds/posts/default/",
    b = "data:application/octet-stream;base64,",
    v = "<a href='",
    a2 = "' onclick=dl('",
    a3 = "')>",
    j = v + "javascript:void(0);' onClick='javascript:window.navigator.msSaveBlob(s(",
    x = "' download='",
    z = "?alt=json",
    l = "<source src='",
    k = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    m = "</a>",
    h = "</textarea>",
    hs = "<small class='r'>curl -s \"https://catonrug.blogspot.com" + r,
    hm = z + '" | jq -r \'.entry|.content|."$t"\' | base64 --decode > ',
    he = "</small><br /><textarea>",
    isIE = !1;

function d(e) {
    var t, n, o, r, a = "",
        i = "",
        c = "",
        l = 0;
    for (/[^A-Za-z0-9+/=]/g.exec(e) && alert("1"), e = e.replace(/[^A-Za-z0-9+/=]/g, ""); t = k.indexOf(e.charAt(l++)) << 2 | (o = k.indexOf(e.charAt(l++))) >> 4, n = (15 & o) << 4 | (r = k.indexOf(e.charAt(l++))) >> 2, i = (3 & r) << 6 | (c = k.indexOf(e.charAt(l++))), a += String.fromCharCode(t), 64 != r && (a += String.fromCharCode(n)), 64 != c && (a += String.fromCharCode(i)), t = n = i = "", o = r = c = "", l < e.length;);
    return unescape(a)
}

function s(e) {
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
    if (!i(t)) return !1;
    var n = t.replace("#", ""),
        o = $(n);
    g(r + e + z, isIE ? function(e) {
        a(j + "&quot;" + b + e.entry.content.$t + "&quot;), &quot;" + e.entry.title.$t + "&quot;);'>" + e.entry.title.$t + m + hs + n + hm + e.entry.title.$t + he + d(e.entry.content.$t) + h, o)
    } : function(e) {
        a(v + b + e.entry.content.$t + x + e.entry.title.$t + "'>" + e.entry.title.$t + m + hs + n + hm + e.entry.title.$t + he + d(e.entry.content.$t) + h, o)
    })
}

function dl(e, t, n) {
    if (n = n || "application/octet-stream", !i(t)) return !1;
    var o = t.replace("#", ""),
        c = $(o);
    g(r + e + z, isIE ? function(e) {
        a(j + "&quot;data:" + n + ";base64," + e.entry.content.$t + "&quot;), &quot;" + e.entry.title.$t + "&quot;);'>" + e.entry.title.$t + m, c)
    } : function(e) {
        a(v + "data:" + n + ";base64," + e.entry.content.$t + x + e.entry.title.$t + "'>" + e.entry.title.$t + m, c)
    })
}

function dlc(e, t) {
    var n = t.replace("#", ""),
        o = $(n),
        i = e.match(/[0-9]+/gm).join("\n");
    g(r + e + z, function(e) {
        a(v + "#" + a2 + i + a3 + e.entry.title.$t + m, o)
    })
}

function mp4id(e, t) {
    if (!i(t)) return !1;
    var n = t.replace("#", ""),
        o = $(n);
    g(r + e + z, function(e) {
        a(l + e.entry.content.$t + "' type='video/mp4'>" + v + e.entry.content.$t + "'>" + e.entry.title.$t + m, o)
    })
}

function mp3id(e, t) {
    if (!i(t)) return !1;
    var n = t.replace("#", ""),
        o = $(n);
    g(r + e + z, function(e) {
        a(l + e.entry.content.$t + "' type='audio/mpeg'>", o)
    })
}

function out(e, t) {
    if (!i(t)) return !1;
    var n = t.replace("#", ""),
        o = $(n);
    g(r + e + z, function(e) {
        a("<textarea>" + d(e.entry.content.$t) + h, o)
    })
}(-1 !== navigator.userAgent.indexOf("MSIE") || 0 < navigator.appVersion.indexOf("Trident/") || -1 < window.navigator.userAgent.indexOf("Edge")) && (isIE = !0), "function" != typeof document.getElementsByClassName && (document.getElementsByClassName = function(e) {
        if (!e) return [];
        for (var t = [], n = document.getElementsByTagName("*"), o = new RegExp("(^| )" + e + "( |$)"), r = 0; r < n.length; r++) o.test(n[r].className) && t.push(n[r]);
        return t
    }),
    function(e, t) {
        "function" == typeof define && define.amd ? define([], t) : "undefined" != typeof exports ? t() : (t(), e.FileSaver = {})
    }(this, function() {
        "use strict";

        function f(e, t, n) {
            var o = new xhrRequest;
            o.open("GET", e), o.responseType = "blob", o.onload = function() {
                r(o.response, t, n)
            }, o.onerror = function() {
                console.error("could not download file")
            }, o.send()
        }

        function i(e) {
            var t = new xhrRequest;
            t.open("HEAD", e, !1);
            try {
                t.send()
            } catch (e) {}
            return 200 <= t.status && t.status <= 299
        }

        function c(t) {
            try {
                t.dispatchEvent(new MouseEvent("click"))
            } catch (e) {
                var n = document.createEvent("MouseEvents");
                n.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), t.dispatchEvent(n)
            }
        }
        var u = "object" == typeof window && window.window === window ? window : "object" == typeof self && self.self === self ? self : "object" == typeof global && global.global === global ? global : void 0,
            r = u.saveAs || ("object" != typeof window || window !== u ? function() {} : "download" in HTMLAnchorElement.prototype ? function(e, t, n) {
                var o = u.URL || u.webkitURL,
                    r = document.createElement("a");
                t = t || e.name || "download", r.download = t, r.rel = "noopener", "string" == typeof e ? (r.href = e, r.origin === location.origin ? c(r) : i(r.href) ? f(e, t, n) : c(r, r.target = "_blank")) : (r.href = o.createObjectURL(e), setTimeout(function() {
                    o.revokeObjectURL(r.href)
                }, 4e4), setTimeout(function() {
                    c(r)
                }, 0))
            } : "msSaveOrOpenBlob" in navigator ? function(e, t, n) {
                if (t = t || e.name || "download", "string" != typeof e) navigator.msSaveOrOpenBlob((r = e, void 0 === (a = n) ? a = {
                    autoBom: !1
                } : "object" != typeof a && (console.warn("Deprecated: Expected third argument to be a object"), a = {
                    autoBom: !a
                }), a.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(r.type) ? new Blob(["\ufeff", r], {
                    type: r.type
                }) : r), t);
                else if (i(e)) f(e, t, n);
                else {
                    var o = document.createElement("a");
                    o.href = e, o.target = "_blank", setTimeout(function() {
                        c(o)
                    })
                }
                var r, a
            } : function(e, t, n, o) {
                if ((o = o || open("", "_blank")) && (o.document.title = o.document.body.innerText = "downloading..."), "string" == typeof e) return f(e, t, n);
                var r = "application/octet-stream" === e.type,
                    a = /constructor/i.test(u.HTMLElement) || u.safari,
                    i = /CriOS\/[\d]+/.test(navigator.userAgent);
                if ((i || r && a) && "undefined" != typeof FileReader) {
                    var c = new FileReader;
                    c.onloadend = function() {
                        var e = c.result;
                        e = i ? e : e.replace(/^data:[^;]*;/, "data:attachment/file;"), o ? o.location.href = e : location = e, o = null
                    }, c.readAsDataURL(e)
                } else {
                    var l = u.URL || u.webkitURL,
                        s = l.createObjectURL(e);
                    o ? o.location = s : location.href = s, o = null, setTimeout(function() {
                        l.revokeObjectURL(s)
                    }, 4e4)
                }
            });
        u.saveAs = r.saveAs = r, "undefined" != typeof module && (module.exports = r)
    });
    
