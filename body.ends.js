function b642B(t) {
    for (var e = atob(t), n = new Array(Math.ceil(e.length / 512)), a = 0; a < n.length; a++) {
        var r = 512 * a,
            s = Math.min(512 + r, e.length);
        n[a] = new Uint8Array(s - r);
        for (var o = r; o < s; o++) n[a][o - r] = e.charCodeAt(o)
    }
    return new Blob(n)
}
dl = function(t) {
    var e = new XMLHttpRequest,
        n = "/feeds/posts/default/" + t + "?alt=json";
    e.onreadystatechange = function() {
        if (4 == this.readyState && 200 == this.status) {
            var t = JSON.parse(this.responseText);
            saveAs(b642B(t.entry.content.$t), t.entry.title.$t)
        }
    }, e.open("GET", n, !0), e.send()
};
