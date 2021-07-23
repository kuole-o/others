"use strict";
function getbbdata() {
    var bbsurl = "https://626c-blogpkly-13278c-1258453354.tcb.qcloud.la/json/bber.json"
      , httpRequest = new XMLHttpRequest;
    httpRequest.open("GET", bbsurl, !0),
    httpRequest.send(),
    httpRequest.onreadystatechange = function() {
        var json, obj, bbArray, data;
        4 == httpRequest.readyState && 200 == httpRequest.status && (json = httpRequest.responseText,
        obj = eval("(" + json + ")"),
        bbArray = obj.data.map(function(e) {
            return {
                date: e.date,
                content: e.content,
                from: e.from
            }
        }),
        saveToLocal.set("bb", JSON.stringify(bbArray), 5 / 1440),
        data = saveToLocal.get("bb"),
        generateBBHtml(JSON.parse(data)))
    }
}
var generateBBHtml = function(e) {
    var t = "";
    if (e.length) {
        var a = e.length;
        10 < a && (a = 10);
        for (var n = 0; n < a; n++) {
            var s = new Date(e[n].date)
              , r = btf.diffDate(s, !0) + ": ";
            t += "<div class='li-style swiper-slide'><span class='datatime'>".concat(r, "</span>").concat(urlToLink(e[n].content), "</div>")
        }
    } else
        t = "<div class='li-style swiper-slide'>好像没有哔哔内容( •̀ ω •́ )y</div>";
    document.querySelector("#bber-talk").innerHTML = t
}
  , bbInit = function() {
    var e = document.querySelector("#bber-talk");
    if (document.querySelector("#bber-talk")) {
        var t = saveToLocal.get("bb");
        if (t) {
            var a = t.length;
            10 < a && (a = 10);
            for (var n = "", s = 0; s < a; s++)
                n += "<div class='swiper-slide li-style'><i class='fa fa-spinner fa-spin'></i></div>";
            e.innerHTML = n,
            generateBBHtml(JSON.parse(t))
        } else
            getbbdata();
        var r = new Swiper(".bbTimeList-swiper",{
            passiveListeners: !0,
            direction: "vertical",
            loop: !0,
            autoplay: {
                delay: 3e3,
                disableOnInteraction: !0
            }
        })
          , i = document.getElementById("bber-talk");
        i.onmouseenter = function() {
            r.autoplay.stop()
        }
        ,
        i.onmouseleave = function() {
            r.autoplay.start()
        }
    }
};
function urlToLink(e) {
    return e = (e = e.replace(/\bhttps?:[^:<>"]*\/([^:<>"]*)(\.(jpeg)|(png)|(jpg)|(webp)|(JPG)|(PNG))/g, function(e) {
        return '<i class="fa fa-picture-o" title="' + e + '"></i>'
    })).replace(/\bhttps?:\/\/(?!\S+(?:jpe?g|png|bmp|gif|webp|JPG|PNG))\S+/g, function(e) {
        return '<i class="fa fa-link" title="' + e + '"></i>'
    })
}
bbInit();
