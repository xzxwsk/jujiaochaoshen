!function(win) {
    var doc = win.document,
    t = doc.documentElement,
    i = 720,
    d = i / 100,
    o = "orientationchange" in win ? "orientationchange" : "resize",
    a = function(e) {
        var win = t.clientWidth || 320;
        win > 720 && (win = 720);
        t.style.fontSize = win / d + "px"
    };
    doc.addEventListener && (win.addEventListener(o, a, !1), doc.addEventListener("DOMContentLoaded", a, !1))
}(window);