/*!OneAPM-v411.4.5 */ ! function () {
    var a = window.BWEUM.require;
    a = function b(c, d, e) {
        function f(h, i) {
            if (!d[h]) {
                if (!c[h]) {
                    var j = "function" == typeof a && a;
                    if (!i && j) return j(h, !0);
                    if (g) return g(h, !0);
                    var k = new Error("Cannot find module '" + h + "'");
                    throw k.code = "MODULE_NOT_FOUND", k
                }
                var l = d[h] = { exports: {} };
                c[h][0].call(l.exports, function (a) {
                    var b = c[h][1][a];
                    return f(b ? b : a)
                }, l, l.exports, b, c, d, e)
            }
            return d[h].exports
        }
        for (var g = "function" == typeof a && a, h = 0; h < e.length; h++) f(e[h]);
        return f
    }({
        2: [function (a) {
            a("feelTime"), a("sendIni"), a("errorsend"), a("xhrsend"), a("resourcessend")
        },
        { errorsend: 10, feelTime: 11, resourcessend: 12, sendIni: 24, xhrsend: 14 }
        ],
        24: [function (a) {
            function b(a) { a && a.tid && (p = a.tid), m.emit("rates", [a]) }

            function c() { n += 1, !l.info.beacon }

            function d(a) {
                var b = "s";
                if ("pagehide" === a.type && (b = "h"), g.navCookie && (document.cookie = "BWEUM=" + b + "=" + Number(new Date) + "&r=" + e(document.location.href) + "&p=" + e(document.referrer) + "; path=/"), p) {
                    var c = (new Date).getTime() + 1e3;
                    document.cookie = "BWAGENT=tk=" + p + "; max-age=1; path=/; expires=" + new Date(c).toGMTString()
                }
            } {
                var e = a("s-hash"),
                    f = a("add-e"),
                    g = a("start-time"),
                    h = a("aggregator"),
                    i = a("single"),
                    j = (a("fetch"), a("harvest")),
                    k = a("register-handler"),
                    l = a("loader"),
                    m = a("ee"),
                    n = 0,
                    o = "undefined" != typeof window.BWEUM.autorun ? window.BWEUM.autorun : !0;
                document.createElement("div")
            }
            window.BWEUM.setToken = b, window.BWEUM.inlineHit = c;
            var p, q = a("rand"),
                r = window.performance,
                s = i(d);
            f("beforeunload", s), f("pagehide", s), f("unload", function () {
                j.sendAll(l, !1)
            }), k("mark", h.mark), h.mark("done"), l.info.tNamePlain = unescape(window.location.pathname), l.info.tNamePlain.length > 200 && (l.info.tNamePlain = l.info.tNamePlain.slice(0, 200));
            var t = a("browserVersion");
            t(), l.info.sysUid = q(1e6) + "", l.info.sysHost = window.location.host, r ? r.timing && (l.info.mockbi = "1", r.getEntriesByType && (l.info.mockbi = "2")) : l.info.mockbi = "0", l.info.sysConType = window.navigator.connection ? window.navigator.connection.type + "" : "", o && setTimeout(function () { j.sendBeacon(l, h) }, 5)
        },
        { "add-e": 3, aggregator: 4, browserVersion: 15, ee: 31, fetch: 18, harvest: 19, loader: 34, rand: 21, "register-handler": 22, "s-hash": 23, single: 25, "start-time": 26 }
        ],
        21: [function (a, b) {
            function c(a) {
                return a = (9301 * a + 49297) % 233280, a / 233280
            }

            function d(a) {
                return today = new Date, seed = today.getTime(), Math.ceil(c(seed) * a)
            }
            b.exports = d
        },
        {}
        ],
        15: [function (a, b) {
            function c() {
                return "undefined" != typeof window.orientation || -1 !== navigator.userAgent.indexOf("IEMobile")
            }

            function d(a) {
                var b, c = navigator.userAgent,
                    d = c.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
                return ("wk" == a || "wb" == a) && (d = c.match(/(AppleWebKit(?=\/))\/?\s*(\d+)/i) || []), /trident/i.test(d[1]) ? (b = /\brv[ :]+(\d+)/g.exec(c) || [], b[1] || "") : "Chrome" === d[1] && (b = c.match(/\bOPR\/(\d+)/), null != b) ? b[1] : (d = d[2] ? [d[1], d[2]] : [navigator.appName, navigator.appVersion, "-?"], null != (b = c.match(/mqqbrowser\/(\d+)/i)) && "wx" == a ? d.splice(1, 1, b[1]) : null != (b = c.match(/micromessenger\/(\d+)/i)) && "wx" == a ? d.splice(1, 1, b[1]) : null != (b = c.match(/ucbrowser\/(\d+)/i)) && "uc" == a ? d.splice(1, 1, b[1]) : null != (b = c.match(/version\/(\d+)/i)) ? d.splice(1, 1, b[1]) : null != (b = c.match(/mobile\/(\d+)/i)) && d.splice(1, 1, b[1]), d.length > 1 ? d[1] : 0)
            }

            function e() {
                var a, b, e, f, g, h = c(),
                    i = navigator.userAgent,
                    j = i.toLowerCase(),
                    k = 0,
                    l = "";
                if (h) {
                    {
                        var m = i.match(/Chrome\/([\d.]+)/) || i.match(/CriOS\/([\d.]+)/),
                            n = !m && i.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/),
                            o = (i.match(/Web[kK]it[\/]{0,1}([\d.]+)/), n || i.match(/Version\/([\d.]+)([^S](Safari)|[^M]*(Mobile)[^S]*(Safari))/));
                        i.match(/Firefox\/([\d.]+)/)
                    }
                    l = j.indexOf("weibo") > 0 ? "wb" : j.indexOf("micromessenger") > 0 ? "wx" : j.indexOf("ucbrowser") > 0 ? "uc" : null != o ? "sa" : "wk"
                }
                return ("wk" == l || "" == l) && (a = !!window.ActiveXObject || "ActiveXObject" in window, b = !!window.opera || !!window.opr || i.indexOf(" OPR/") >= 0, e = !!window.chrome && !b || i.match(/Chrome\/([\d.]+)/) || i.match(/CriOS\/([\d.]+)/), f = "undefined" != typeof InstallTrigger, g = Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor") > 0, a ? l = "ie" : e ? l = "ch" : f ? l = "fi" : g ? l = "sa" : b && (l = "op")), a ? k = function () { for (var a = 3, b = document.createElement("b"), c = b.all || []; b.innerHTML = "<!--[if gt IE " + ++a + "]><i><![endif]-->", c[0];); return a > 4 ? a : document.documentMode }() : (k = d(l), k.length > 5 && (k = "")), { bT: l, bV: k + "", mm: h ? "1" : "0" }
            }
            b.exports = function () {
                var b = a("loader"),
                    c = e();
                c && (b.maxBytes = 6 == c.bV && "ie" == c.bT ? 2e3 : 3e4, b.tpmBrowerInfo = c)
            }
        },
        { loader: 34 }
        ],
        3: [function (a, b) {
            b.exports = function (a, b) {
                return "addEventListener" in window ? window.addEventListener(a, b, !1) : "attachEvent" in window ? window.attachEvent("on" + a, b) : void 0
            }
        },
        {}
        ],
        14: [function (a, b) {
            function c(a, b, c) { b.time = c - h.offset, a.cat ? d.store("xhr", g([a.status, a.cat]), a, b) : d.store("xhr", g([a.status, a.host, a.pathname]), a, b) }
            var d = a("aggregator"),
                e = a("register-handler"),
                f = a("harvest"),
                g = a("stringify"),
                h = a("loader");
            h.features.xhr && (f.on("error", function () {
                return { body: d.take(["xhr"]) }
            }), e("xhr", c), b.exports = c)
        },
        { aggregator: 4, harvest: 19, loader: 34, "register-handler": 22, stringify: 27 }
        ],
        12: [function (a, b) {
            function c(a) {
                return a += t.timing.navigationStart, a < t.timing.domContentLoadedEventStart ? 1 : a >= t.timing.domContentLoadedEventStart && a < t.timing.loadEventStart ? 2 : 3
            }

            function d(a) {
                return a += t.timing.navigationStart, a <= t.timing.domContentLoadedEventStart ? 1 : 0
            }

            function e(a) { return parseUrl(a.name) }

            function f(a) {
                A = 0, a.forEach(function (a, b) {
                    var f, h;
                    void 0 == w[b] && a.responseEnd > 0 && 51 > A && z >= y && (f = e(a), h = { n: a.initiatorType || "embed", s: 0 | a.fetchStart, e: 0 | a.responseEnd, o: f.pathname, t: a.entryType, j: { of: a.startTime } }, C.addPTPres(a, h.j), h.lt = c(h.j.of), h.ht = f.hostname, p.headUrl && p.headUrl[unescape(a.name)] && (h.hd = 1), h.h5 = d(a.responseEnd), h.ut = a.duration, h.lt < 3 && (y++, A++, w[b] = 1, g(h)))
                })
            }

            function g(a) {
                var b = v[a.n];
                b || (b = v[a.n] = []), b.push(a)
            }

            function h(a) { return function () { return a() } }

            function i() {
                f(t.getEntriesByType("resource"));
                var a = q(v, function (a, b) {
                    return a in u ? q(b.sort(j).reduce(smearEvtsByOrigin(a), {}), k).reduce(l, []) : b
                }).reduce(l, []);
                return 0 === a.length ? {} : (v = {}, { qs: { st: "" + p.offset, ptid: r }, body: { res: a } })
            }

            function j(a, b) { return a.s - b.s }

            function k(a, b) { return b }

            function l(a, b) { return a.concat(b) }

            function m() { }
            var n = a("register-handler"),
                o = a("harvest"),
                p = (a("aggregator"), a("loader")),
                q = a("map-own"),
                r = (a("lodash._slice"), a("clean-url"), ""),
                s = window,
                t = (s.document, s.performance),
                u = { typing: 1e3, scrolling: 1e3, mousing: 1e3 },
                v = {},
                w = {},
                x = 0,
                y = 0,
                z = 0,
                A = 0,
                B = a("ee"),
                C = a("nav-timing");
            if (b.exports = { _takeSTNs: i, _trace: v }, a("start-time"), parseUrl = a("parse-url"), p.features.stn) {
                var D = setTimeout(function () {
                    n("bst", m), n("bstResource", m), n("bstHist", m), n("bstAgg", m)
                }, 1e4);
                B.on("rates", function (a) {
                    if (a && a.stn) {
                        clearTimeout(D), 0 == z && (z = t.getEntriesByType("resource").length), r = p.info.sysUid, o.on("resources", h(i)); { o.sendX("resources", p, !0) }
                        setInterval(function () {
                            z > y && 3 > x && (o.sendX("resources", p, !0), x++)
                        }, 2e3)
                    }
                })
            }
        },
        { aggregator: 4, "clean-url": 17, ee: 31, harvest: 19, loader: 34, "lodash._slice": 36, "map-own": 37, "nav-timing": 20, "parse-url": 38, "register-handler": 22, "start-time": 26 }
        ],
        11: [function (a) {
            function b() {
                var a = 0,
                    b = 0,
                    f = 0;
                if (h && g.querySelectorAll && h.getEntriesByType) {
                    f = h.timing.domLoading, c = g.querySelectorAll("head>link"), d = g.querySelectorAll("head>script");
                    for (item in c) "" != c[item].href && void 0 != c[item].href && (j[unescape(c[item].href)] = 1);
                    for (item in d) "" != d[item].src && void 0 != d[item].src && 1 != d[item].async && (j[unescape(d[item].src)] = 1);
                    for (b += c.length, b += d.length, e = h.getEntriesByType("resource"), 2 * b > e.length ? b = e.length : b += b, a; b >= a; a++) e[a] && 1 == j[unescape(e[a].name)] && e[a].responseEnd > 0 && e[a].responseEnd + h.timing.navigationStart >= f && (f = e[a].responseEnd + h.timing.navigationStart);
                    f -= h.timing.navigationStart, i.feelTime = parseInt(f), i.headUrl = j
                }
            }
            var c, d, e, f = window,
                g = f.document,
                h = f.performance,
                i = a("loader"),
                j = {};
            try { b() } catch (k) { }
        },
        { loader: 34 }
        ],
        10: [function (a, b) {
            function c(a) {
                return i(a.exceptionClass) ^ a.stackHash
            }

            function d(a, b, d) {
                var m = h(a);
                b || (b = (new Date).getTime());
                for (var n = "", o = 0; o < m.frames.length; o++) {
                    var p = m.frames[o],
                        q = f(p.func);
                    n && (n += "\n"), q && (n += q + "@"), "string" == typeof p.url && (p.url = p.url.split("?")[0], p.url === j.origin && (p.url = "<inline>"), n += p.url), p.line && (n += ":" + p.line)
                }
                var r = { stackHash: i(n), exceptionClass: m.name, request_uri: window.location.pathname };
                if (m.message && (r.message = m.message), k[r.stackHash] ? r.browser_stack_hash = i(m.stackString) : (k[r.stackHash] = !0, r.stack_trace = m.stackString), document.referrer) {
                    var s = g(document.referrer);
                    s && (r.request_referer = s)
                }
                var t = c(r);
                l[t] || (r.pageview = 1, l[t] = !0), e.store(d ? "ierr" : "err", t, r, { time: b - j.offset })
            }
            var e = a("aggregator"),
                f = a("canonical-function-name"),
                g = a("clean-url"),
                h = a("compute-stack-trace"),
                i = a("string-hash-code"),
                j = a("loader"),
                k = {},
                l = {},
                m = a("register-handler"),
                n = a("harvest");
            a("start-time"), j.features.err && (n.on("error", function () {
                return { body: e.take(["err", "ierr"]) }
            }), n.pingErrors(j), setInterval(function () {
                n.sendX("error", j, !1)
            }, 4e4), m("err", d), m("ierr", d), b.exports = d)
        },
        { aggregator: 4, "canonical-function-name": 8, "clean-url": 17, "compute-stack-trace": 9, harvest: 19, loader: 34, "register-handler": 22, "start-time": 26, "string-hash-code": 13 }
        ],
        26: [function (a, b) {
            function c() {
                var a = d() || e();
                a && (g.mark("starttime", a), h.offset = a)
            }

            function d() {
                var a = navigator.userAgent.match(/Firefox[\/\s](\d+\.\d+)/);
                if (a) { var c = +a[1]; if (9 > c) return }
                return "undefined" != typeof window.performance && window.performance.timing && "undefined" != typeof window.performance.timing.navigationStart ? (b.exports.navCookie = !1, window.performance.timing.navigationStart) : void 0
            }

            function e() {
                for (var a = document.cookie.split(" "), b = 0; b < a.length; b++)
                    if (0 === a[b].indexOf("BWEUM=")) {
                        for (var c, d, e, h, i = a[b].substring("BWEUM=".length).split("&"), j = 0; j < i.length; j++) 0 === i[j].indexOf("s=") ? e = i[j].substring(2) : 0 === i[j].indexOf("h=") ? (e = i[j].substring(2), g.store("measures", "ph", { value: 1 })) : 0 === i[j].indexOf("p=") ? (d = i[j].substring(2), ";" === d.charAt(d.length - 1) && (d = d.substr(0, d.length - 1))) : 0 === i[j].indexOf("r=") && (c = i[j].substring(2), ";" === c.charAt(c.length - 1) && (c = c.substr(0, c.length - 1)));
                        if (c) {
                            var k = f(document.referrer);
                            h = k == c, h || (h = f(document.location.href) == c && k == d)
                        }
                        if (h && e) { var l = (new Date).getTime(); if (l - e > 6e4) return; return e }
                    }
            }
            var f = a("s-hash"),
                g = a("aggregator"),
                h = a("loader");
            b.exports = { navCookie: !0 }, c()
        },
        { aggregator: 4, loader: 34, "s-hash": 23 }
        ],
        23: [function (a, b) {
            function c(a) {
                var b, c = 0;
                for (b = 0; b < a.length; b++) c += (b + 1) * a.charCodeAt(b);
                return Math.abs(c)
            }
            b.exports = c
        },
        {}
        ],
        19: [function (a, b) {
            function c() {
                for (var a, b, c = document.cookie.split(" "), d = 0; d < c.length; d++)
                    if (0 === c[d].indexOf("BWAGENT=")) { a = c[d].substring("BWAGENT=".length).split("&"); for (var e = 0; e < a.length; e++) 0 === a[e].indexOf("tk=") && (b = a[e].substring(3), ";" === b.charAt(b.length - 1) && (b = b.substr(0, b.length - 1))) }
                return b
            }

            function d(a, b) {
                if (a.info.beacon || a.info.beaconUrl) {
                    a.info.queueTime && b.store("measures", "qt", { value: a.info.queueTime }), a.info.applicationTime && b.store("measures", "ap", { value: a.info.applicationTime });
                    var d = b.get("measures"),
                        f = p(d, function (a, b) { return "&" + a + "=" + b.params.value }).join("");
                    a.info.agentToken = c();
                    var g = [m(a)];
                    f && g.push(f), g.push(s("tt", a.info.ttGuid)), g.push(s("ptid", a.info.sysUid)), g.push(s("us", a.info.user)), g.push(s("ac", a.info.account)), g.push(s("pr", a.info.product)), g.push(s("tk", a.info.agentToken)), g.push(s("f", t(p(a.features, function (a) { return a }))));
                    var h = {},
                        i = !0,
                        j = {},
                        k = {},
                        l = 0;
                    window.performance && "undefined" != typeof window.performance.timing ? (k = window.performance.navigation, h.timing = q.addPT(window.performance.timing, j), window.performance.timing.loadEventEnd > 0 ? l = window.performance.timing.loadEventEnd - window.performance.timing.navigationStart : window.performance.timing.loadEventStart > 0 && (l = window.performance.timing.loadEventStart - window.performance.timing.navigationStart)) : (j.fetchStart = b.getMark("starttime"), j.responseEnd = b.getMark("firstbyte"), j.domLoading = b.getMark("firstbyte"), j.domContentLoadedEventStart = b.getMark("domContent"), j.domContentLoadedEventEnd = b.getMark("domContent"), j.loadEventStart = b.getMark("onload"), j.loadEventEnd = b.getMark("onload"), h.timing = q.addPTPres(j, { of: j.fetchStart }), l = j.loadEventEnd - j.fetchStart), g.push(s("mbi", a.info.mockbi)), h.navigation = q.addPN(k, {}), p(h.timing, function (a, b) { "of" != a && (0 > b || b > 36e5) && (i = !1) }), i && g.push(s("perf", t(h))), g.push(s("xx", a.info.extra)), g.push(s("ua", a.info.userAttributes)), g.push(s("at", a.info.atts)), g.push(s("allTime", l.toString())), a.feelTime && a.feelTime < 36e5 && g.push(s("feeltime", a.feelTime.toString())), l > 0 && i && u({ url: e(a, "rum") + r.fromArray(g, a.maxBytes), jsonp: w })
                }
            }

            function e(a, b) {
                var c, d = "browser" == a.info.agentType ? 2 : 1;
                return c = a.info.beacon ? a.proto + a.info.beacon.replace("beacon/rum", "beacon/" + b) : a.proto + a.info.beaconUrl + "/" + b + "/" + a.info.agentType, c += "/" + d + "/" + a.info.licenseKey + "/"
            }

            function f(a, b) {
                var c = !1;
                return p(y, function (d) {
                    if ("resources" != d) {
                        var e = g(d, a, b);
                        e && (c = !0)
                    }
                }), c
            }

            function g(a, b, c) { var d = h(a, c); return i(b, a, d.body, d.qs, c) }

            function h(a, b) {
                for (var c = n({}), d = n({}), e = y[a] || [], f = 0; f < e.length; f++) {
                    var g = e[f](b);
                    g.body && p(g.body, c), g.qs && p(g.qs, d)
                }
                return { body: c(), qs: d() }
            }

            function i(a, b, c, d, f) {
                if (!a.info.errorBeacon && !a.info.beaconUrl) return !1;
                if (!c) return !1;
                var g, h = e(a, b);
                return h += m(a), d && (h += r.obj(d, a.maxBytes)), f ? g = t(c) : h += r.obj(c, a.maxBytes), c.err && c.err.length && !x && (h += s("pve", "1"), x = !0), h += s("mbi", a.info.mockbi), -1 == window.navigator.userAgent.indexOf("MQQBrowser/5.0") && -1 == window.navigator.userAgent.indexOf("QQ-Manager") ? u({ url: h, body: g }) : void 0
            }

            function j() { }

            function k(a) {
                return a.info.transactionName ? s("to", a.info.transactionName) : a.info.tNamePlain ? s("t", a.info.tNamePlain || "Unnamed Transaction") : s("t", "")
            }

            function l(a, b) {
                var c = y[a] || (y[a] = []);
                c.push(b)
            }

            function m(a) {
                var b = ["?a=" + a.info.applicationID, s("sa", a.info.sa ? "" + a.info.sa : ""), s("pl", "" + a.offset), s("v", v), k(a)];
                return a.tpmBrowerInfo && a.tpmBrowerInfo.bT && a.tpmBrowerInfo.bV && (b.push(s("tbt", a.tpmBrowerInfo.bT)), b.push(s("tbv", a.tpmBrowerInfo.bV))), b.push(s("pnet", a.info.sysConType)), b.push(s("phost", a.info.sysHost)), b.join("")
            }

            function n(a) {
                var b = !1;
                return function (c, d) {
                    return d && d.length && (a[c] = d, b = !0), b ? a : void 0
                }
            }
            var o = a("single"),
                p = a("map-own"),
                q = a("nav-timing"),
                r = a("encode"),
                s = r.param,
                t = a("stringify"),
                u = a("fetch"),
                v = "411.4.5 ",
                w = window.self === window.parent ? "BWEUM.setToken" : !1,
                x = !1,
                y = {};
            b.exports = { sendBeacon: o(d), sendAll: f, pingErrors: j, sendX: g, on: l, _send: i, _emit: h }
        },
        { encode: 16, fetch: 18, "map-own": 37, "nav-timing": 20, single: 25, stringify: 27 }
        ],
        25: [function (a, b) {
            function c(a) {
                var b, c = !1;
                return function () {
                    return c ? b : (c = !0, b = a.apply(this, d(arguments)))
                }
            }
            var d = a("lodash._slice");
            b.exports = c
        },
        { "lodash._slice": 36 }
        ],
        20: [function (a, b) {
            function c(a, b) { var c = a.navigationStart; return b.of = c, d(a, b) }

            function d(a, b) {
                var c = b.of;
                return f(a.navigationStart, c, b, "n"), f(a.unloadEventStart, c, b, "u"), f(a.unloadEventEnd, c, b, "ue"), f(a.domLoading, c, b, "dl"), f(a.domInteractive, c, b, "di"), f(a.domContentLoadedEventStart, c, b, "ds"), f(a.domContentLoadedEventEnd, c, b, "de"), f(a.domComplete, c, b, "dc"), f(a.loadEventStart, c, b, "l"), f(a.loadEventEnd, c, b, "le"), f(a.redirectStart, c, b, "r"), f(a.redirectEnd, c, b, "re"), f(a.fetchStart, c, b, "f"), f(a.domainLookupStart, c, b, "dn"), f(a.domainLookupEnd, c, b, "dne"), f(a.connectStart, c, b, "c"), f(a.connectEnd, c, b, "ce"), f(a.secureConnectionStart, c, b, "s"), f(a.requestStart, c, b, "rq"), f(a.responseStart, c, b, "rp"), f(a.responseEnd, c, b, "rpe"), b
            }

            function e(a, b) {
                return f(a.type, 0, b, "ty"), f(a.redirectCount, 0, b, "rc"), b
            }

            function f(a, b, c, d) {
                "number" == typeof a && a > 0 && (c[d] = Math.round(a - b))
            }
            b.exports = { addPT: c, addPN: e, addPTPres: d }
        },
        {}
        ],
        18: [function (a, b) {
            function c(a) {
                return a && a.url ? a.jsonp ? c.jsonp(a.url, a.jsonp) : a.body || a.xhr ? c.xhr(a.url, a.body) : c.img(a.url) : !1
            }
            b.exports = c, c.jsonp = function (a, b) {
                var c = document.createElement("script");
                c.type = "text/javascript", c.src = a + "&jsonp=" + b;
                try { c.async = !0 } catch (d) { }
                return document.body.appendChild(c), c
            }, c.xhr = function (a, b) {
                var c = new window._ApmXMLHttpRequest;
                return c.open("POST", a), c.send(b), c
            }, c.img = function (a) { var b = new Image; return b.src = a, b }
        },
        {}
        ],
        16: [function (a, b) {
            function c(a) { return i[a] }

            function d(a) {
                return null === a || void 0 === a ? "null" : encodeURIComponent(a).replace(l, c)
            }

            function e(a, b) {
                for (var c = 0, d = 0; d < a.length; d++)
                    if (c += a[d].length, c > b) return a.slice(0, d).join("");
                return a.join("")
            }

            function f(a, b) {
                var c = 0,
                    e = "";
                return h(a, function (a, f) {
                    var g, h, i = [];
                    if ("string" == typeof f) g = "&" + a + "=" + d(f), c += g.length, e += g;
                    else if (f.length) {
                        for (c += 9, h = 0; h < f.length && (g = d(j(f[h])), c += g.length, !("undefined" != typeof b && c >= b)); h++) i.push(g);
                        e += "&" + a + "=%5B" + i.join(",") + "%5D"
                    }
                }), e
            }

            function g(a, b) { return b && "string" == typeof b ? "&" + a + "=" + d(b) : "" }
            var h = a("map-own"),
                i = { "%2C": ",", "%3A": ":", "%2F": "/", "%40": "@", "%24": "$", "%3B": ";" },
                j = a("stringify"),
                k = h(i, function (a) { return a }),
                l = new RegExp(k.join("|"), "g");
            b.exports = { obj: f, fromArray: e, qs: d, param: g }
        },
        { "map-own": 37, stringify: 27 }
        ],
        27: [function (a, b) {
            function c(a) {
                try {
                    return e("", { "": a })
                } catch (b) {
                    try {
                        g.emit("internal-error", [b])
                    } catch (c) { }
                }
            }

            function d(a) {
                return h.lastIndex = 0, h.test(a) ? '"' + a.replace(h, function (a) {
                    var b = i[a];
                    return "string" == typeof b ? b : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
                }) + '"' : '"' + a + '"'
            }

            function e(a, b) {
                var c = b[a];
                switch (typeof c) {
                    case "string":
                        return d(c);
                    case "number":
                        return isFinite(c) ? String(c) : "null";
                    case "boolean":
                        return String(c);
                    case "object":
                        if (!c) return "null";
                        var g = [];
                        if ("[object Array]" === Object.prototype.toString.apply(c)) {
                            for (var h = c.length, i = 0; h > i; i += 1) g[i] = e(i, c) || "null";
                            return 0 === g.length ? "[]" : "[" + g.join(",") + "]"
                        }
                        return f(c, function (a) {
                            var b = e(a, c);
                            b && g.push(d(a) + ":" + b)
                        }), 0 === g.length ? "{}" : "{" + g.join(",") + "}"
                }
            }
            var f = a("map-own"),
                g = a("ee"),
                h = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                i = { "\b": "\\b", "	": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\" };
            b.exports = c
        },
        { ee: 31, "map-own": 37 }
        ],
        17: [function (a, b) {
            function c(a) {
                var b = a.match(d);
                return b ? b[3] ? b[1] + b[3] : b[1] : null
            }
            b.exports = c;
            var d = /^([^?]+)(\?[^#]*)?(#.*)?$/
        },
        {}
        ],
        13: [function (a, b) {
            function c(a) {
                var b, c = 0;
                if (!a || !a.length) return c;
                for (var d = 0; d < a.length; d++) b = a.charCodeAt(d), c = (c << 5) - c + b, c = 0 | c;
                return c
            }
            b.exports = c
        },
        {}
        ],
        9: [function (a, b) {
            function c(a, b) { return Object.prototype.hasOwnProperty.call(a, b) }
            b.exports = function () {
                function a(a) {
                    var b = l.exec(String(a.constructor));
                    return b && b.length > 1 ? b[1] : "unknown"
                }

                function b(a) { return a && a.indexOf("nrWrapper") >= 0 }

                function d(a) { return a ? a.replace(m, "") : null }

                function e(c) {
                    if (!c.stack) return null;
                    for (var e, f, g = /^\s*at (?:((?:\[object object\])?(?:[^(]*\([^)]*\))*[^()]*(?: \[as \S+\])?) )?\(?((?:file|http|https|chrome-extension):.*?)?:(\d+)(?::(\d+))?\)?\s*$/i, h = /^\s*(?:(\S*)(?:\(.*?\))?@)?((?:file|http|https|chrome|safari-extension).*?):(\d+)(?::(\d+))?\s*$/i, i = /^\s*at .+ \(eval at \S+ \((?:(?:file|http|https):[^)]+)?\)(?:, [^:]*:\d+:\d+)?\)$/i, j = /^\s*at Function code \(Function code:\d+:\d+\)\s*/i, k = c.stack.split("\n"), l = [], m = [], n = !1, o = (/^(.*) is undefined$/.exec(c.message), 0), p = k.length; p > o; ++o) {
                        if (e = h.exec(k[o])) f = {
                            url: e[2],
                            func: e[1] || null,
                            line: +e[3],
                            column: e[4] ? +e[4] : null
                        };
                        else if (e = g.exec(k[o])) f = {
                            url: e[2],
                            func: e[1] || null,
                            line: +e[3],
                            column: e[4] ? +e[4] : null
                        }, "Anonymous function" === f.func && (f.func = null);
                        else {
                            if (!i.exec(k[o]) && !j.exec(k[o]) && "anonymous" !== k[o]) { m.push(k[o]); continue }
                            f = { func: "evaluated code" }
                        }
                        b(f.func) ? n = !0 : m.push(k[o]), n || l.push(f)
                    }
                    return l.length ? { mode: "stack", name: c.name || a(c), message: c.message, stackString: d(m.join("\n")), frames: l } : null
                }

                function f(c) {
                    for (var e, f = c.stacktrace, g = / line (\d+), column (\d+) in (?:<anonymous function: ([^>]+)>|([^\)]+))\(.*\) in (.*):\s*$/i, h = f.split("\n"), i = [], j = [], k = !1, l = 0, m = h.length; m > l; l += 2)
                        if (e = g.exec(h[l])) {
                            var n = { line: +e[1], column: +e[2], func: e[3] || e[4], url: e[5] };
                            b(n.func) ? k = !0 : j.push(h[l]), k || i.push(n)
                        } else j.push(h[l]);
                    return i.length ? { mode: "stacktrace", name: c.name || a(c), message: c.message, stackString: d(j.join("\n")), frames: i } : null
                }

                function g(e) {
                    var f = e.message.split("\n");
                    if (f.length < 4) return null;
                    var g, h, i, j = /^\s*Line (\d+) of linked script ((?:file|http|https)\S+)(?:: in function (\S+))?\s*$/i,
                        k = /^\s*Line (\d+) of inline#(\d+) script in ((?:file|http|https)\S+)(?:: in function (\S+))?\s*$/i,
                        l = /^\s*Line (\d+) of function script\s*$/i,
                        m = [],
                        n = [],
                        o = document.getElementsByTagName("script"),
                        p = [],
                        q = !1;
                    for (h in o) c(o, h) && !o[h].src && p.push(o[h]);
                    for (h = 2, i = f.length; i > h; h += 2) {
                        var r = null;
                        if (g = j.exec(f[h])) r = { url: g[2], func: g[3], line: +g[1] };
                        else if (g = k.exec(f[h])) r = { url: g[3], func: g[4] };
                        else if (g = l.exec(f[h])) {
                            var s = window.location.href.replace(/#.*$/, ""),
                                t = g[1];
                            r = { url: s, line: t, func: "" }
                        }
                        r && (b(r.func) ? q = !0 : n.push(f[h]), q || m.push(r))
                    }
                    return m.length ? { mode: "multiline", name: e.name || a(e), message: f[0], stackString: d(n.join("\n")), frames: m } : null
                }

                function h(b) {
                    if (!("line" in b)) return null;
                    var c = b.name || a(b);
                    if (!b.sourceURL) return {
                        mode: "sourceline",
                        name: c,
                        message: b.message,
                        stackString: a(b) + ": " + b.message + "\n    in evaluated code",
                        frames: [{ func: "evaluated code" }]
                    };
                    var d = c + ": " + b.message + "\n    at " + b.sourceURL;
                    return b.line && (d += ":" + b.line, b.column && (d += ":" + b.column)), { mode: "sourceline", name: c, message: b.message, stackString: d, frames: [{ url: b.sourceURL, line: b.line, column: b.column }] }
                }

                function i(b) {
                    var c = b.name || a(b);
                    return c ? { mode: "nameonly", name: c, message: b.message, stackString: c + ": " + b.message, frames: [] } : null
                }

                function j(a) {
                    var b = null;
                    try { if (b = f(a)) return b } catch (c) { if (k) throw c }
                    try { if (b = e(a)) return b } catch (c) { if (k) throw c }
                    try { if (b = g(a)) return b } catch (c) { if (k) throw c }
                    try { if (b = h(a)) return b } catch (c) { if (k) throw c }
                    try { if (b = i(a)) return b } catch (c) { if (k) throw c }
                    return { mode: "failed", stackString: "", frames: [] }
                }
                var k = !1,
                    l = /function (.+)\(/,
                    m = /^\n+|\n+$/g;
                return j
            }()
        },
        {}
        ],
        8: [function (a, b) {
            function c(a) {
                if (a) {
                    var b = a.match(d);
                    return b ? b[1] : void 0
                }
            }
            var d = /([a-z0-9]+)$/i;
            b.exports = c
        },
        {}
        ],
        4: [function (a, b) {
            function c(a, b, c, e) {
                m("bstAgg", [a, b, c, e]), o[a] || (o[a] = {});
                var f = o[a][b];
                return f || (o[a][b] = f = { params: c || {} }), f.metrics = d(e, f.metrics), f
            }

            function d(a, b) {
                return b || (b = { count: 0 }), b.count += 1, l(a, function (a, c) { b[a] = e(c, b[a]) }), b
            }

            function e(a, b) {
                return b ? (b && !b.c && (b = { t: b.t, min: b.t, max: b.t, sos: b.t * b.t, c: 1 }), b.c += 1, b.t += a, b.sos += a * a, a > b.max && (b.max = a), a < b.min && (b.min = a), b) : { t: a }
            }

            function f(a, b) {
                return b ? o[a] && o[a][b] : o[a]
            }

            function g(a) {
                for (var b, c = {}, d = "", e = 0; e < a.length; e++) d = a[e], c[d] = h(o[d]), c[d].length && (b = !0), delete o[d];
                return b ? c : null
            }

            function h(a) {
                return "object" != typeof a ? [] : l(a, function (a, b) { return b })
            }

            function i(a, b) {
                "undefined" == typeof b && (b = (new Date).getTime()), p[a] = b
            }

            function j(a) { return p[a] }

            function k(a, b, d) {
                var e = p[b],
                    f = p[d];
                "undefined" != typeof e && "undefined" != typeof f && c("measures", a, { value: f - e })
            }
            var l = a("map-own"),
                m = a("handle"),
                n = a("register-handler"),
                o = {},
                p = {};
            b.exports = { store: c, take: g, get: f, mark: i, measure: k, getMark: j },
                setTimeout(function () { n("bstAgg", function () { }) }, 1e4)
        },
        { handle: 33, "map-own": 37, "register-handler": 22 }
        ],
        37: [function (a, b) {
            function c(a, b) {
                var c = [],
                    e = "",
                    f = 0;
                for (e in a) d.call(a, e) && (c[f] = b(e, a[e]), f += 1);
                return c
            }
            var d = Object.prototype.hasOwnProperty;
            b.exports = c
        },
        {}
        ],
        22: [function (a, b) {
            function c(a, b) {
                if (d.listeners(a).length) return !1;
                d.on(a, b);
                var c = d.q[a];
                if (c) {
                    for (var e = 0; e < c.length; e++) d.emit(a, c[e]);
                    delete d.q[a]
                }
                return !0
            }
            var d = a("handle").ee;
            b.exports = c
        },
        { handle: 33 }
        ]
    },
        {}, [2])
}();