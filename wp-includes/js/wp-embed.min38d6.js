/*! This file is auto-generated */
!(function (d, l) {
	"use strict";
	var e = !1,
		n = !1;
	if (l.querySelector) if (d.addEventListener) e = !0;
	if (((d.wp = d.wp || {}), !d.wp.receiveEmbedMessage))
		if (
			((d.wp.receiveEmbedMessage = function (e) {
				var t = e.data;
				if (t)
					if (t.secret || t.message || t.value)
						if (!/[^a-zA-Z0-9]/.test(t.secret)) {
							for (
								var r,
									i,
									a,
									s = l.querySelectorAll(
										'iframe[data-secret="' + t.secret + '"]'
									),
									n = l.querySelectorAll(
										'blockquote[data-secret="' + t.secret + '"]'
									),
									o = new RegExp("^https?:$", "i"),
									c = 0;
								c < n.length;
								c++
							)
								n[c].style.display = "none";
							for (c = 0; c < s.length; c++)
								if (((r = s[c]), e.source === r.contentWindow)) {
									if ((r.removeAttribute("style"), "height" === t.message)) {
										if (1e3 < (a = parseInt(t.value, 10))) a = 1e3;
										else if (~~a < 200) a = 200;
										r.height = a;
									}
									if ("link" === t.message)
										if (
											((i = l.createElement("a")),
											(a = l.createElement("a")),
											(i.href = r.getAttribute("src")),
											(a.href = t.value),
											o.test(a.protocol))
										)
											if (a.host === i.host)
												if (l.activeElement === r)
													d.top.location.href = t.value;
								}
						}
			}),
			e)
		)
			d.addEventListener("message", d.wp.receiveEmbedMessage, !1),
				l.addEventListener("DOMContentLoaded", t, !1),
				d.addEventListener("load", t, !1);
	function t() {
		if (!n) {
			n = !0;
			for (
				var e,
					t,
					r = -1 !== navigator.appVersion.indexOf("MSIE 10"),
					i = !!navigator.userAgent.match(/Trident.*rv:11\./),
					a = l.querySelectorAll("iframe.wp-embedded-content"),
					s = 0;
				s < a.length;
				s++
			) {
				if (!(e = a[s]).getAttribute("data-secret"))
					(t = Math.random().toString(36).substr(2, 10)),
						(e.src += "#?secret=" + t),
						e.setAttribute("data-secret", t);
				if (r || i)
					(t = e.cloneNode(!0)).removeAttribute("security"),
						e.parentNode.replaceChild(t, e);
			}
		}
	}
})(window, document);
