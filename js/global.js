/*!
 * HTML5 Mobile Boilerplate helper.js (2 functions from). https://github.com/h5bp/mobile-boilerplate hash: b54217ca708f75aa1298c3f5f01fc926969b1fb3
 * Contains scaleFix to correct a bug on iPhone rotation, and hideUrlBar() which scrolls past the url bar on android and ios.
 * Compressed using YUI compressor 7/13/12
 */
(function (a) {
	window.MBP = window.MBP || {};
	MBP.viewportmeta = a.querySelector && a.querySelector('meta[name="viewport"]');
	MBP.ua = navigator.userAgent;
	MBP.scaleFix = function () {
		if (MBP.viewportmeta && /iPhone|iPad|iPod/.test(MBP.ua) && !/Opera Mini/.test(MBP.ua)) {
			MBP.viewportmeta.content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
			a.addEventListener("gesturestart", MBP.gestureStart, false)
		}
	};
	MBP.gestureStart = function () {
		MBP.viewportmeta.content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6"
	};
	MBP.BODY_SCROLL_TOP = false;
	MBP.getScrollTop = function () {
		var c = window, b = a;
		return c.pageYOffset || b.compatMode === "CSS1Compat" && b.documentElement.scrollTop || b.body.scrollTop || 0
	};
	MBP.hideUrlBar = function () {
		var b = window;
		if (!location.hash && MBP.BODY_SCROLL_TOP !== false) {
			b.scrollTo(0, MBP.BODY_SCROLL_TOP === 1 ? 0 : 1)
		}
	};
	MBP.hideUrlBarOnLoad = function () {
		var d = window, c = d.document, b;
		if (!location.hash && d.addEventListener) {
			window.scrollTo(0, 1);
			MBP.BODY_SCROLL_TOP = 1;
			b = setInterval(function () {
				if (c.body) {
					clearInterval(b);
					MBP.BODY_SCROLL_TOP = MBP.getScrollTop();
					MBP.hideUrlBar()
				}
			}, 15);
			d.addEventListener("load", function () {
				setTimeout(function () {
					if (MBP.getScrollTop() < 20) {
						MBP.hideUrlBar()
					}
				}, 0)
			})
		}
	}
})(document);
MBP.scaleFix();
MBP.hideUrlBar();

/*!
 * ColorBox v1.3.19.3 - jQuery lightbox plugin
 * Copyright (c) 2011 Jack Moore - jacklmoore.com | License: http://www.opensource.org/licenses/mit-license.php (GPL Compatible)
 * Compressed using YUI Compressor 7/13/12
 */
(function (J, l, W) {
	var K = {transition:"elastic", speed:300, width:false, initialWidth:"600", innerWidth:false, maxWidth:false, height:false, initialHeight:"450", innerHeight:false, maxHeight:false, scalePhotos:true, scrolling:true, inline:false, html:false, iframe:false, fastIframe:true, photo:false, href:false, title:false, rel:false, opacity:0.9, preloading:true, current:"image {current} of {total}", previous:"previous", next:"next", close:"close", xhrError:"This content failed to load.", imgError:"This image failed to load.", open:false, returnFocus:true, reposition:true, loop:true, slideshow:false, slideshowAuto:true, slideshowSpeed:2500, slideshowStart:"start slideshow", slideshowStop:"stop slideshow", onOpen:false, onLoad:false, onComplete:false, onCleanup:false, onClosed:false, overlayClose:true, escKey:true, arrowKey:true, top:false, bottom:false, left:false, right:false, fixed:false, data:undefined}, x = "colorbox", S = "cbox", r = S + "Element", V = S + "_open", e = S + "_load", U = S + "_complete", u = S + "_cleanup", ac = S + "_closed", i = S + "_purge", v = !J.support.opacity && !J.support.style, af = v && !W.XMLHttpRequest, aa = S + "_IE6", Q, ag, ah, d, H, p, b, P, c, Z, N, k, h, o, t, X, s, R, z, B, ae, ai, m, g, a, w, I, n, D, Y, M, A, L, ad = "div", ab;

	function G(aj, am, al) {
		var ak = l.createElement(aj);
		if (am) {
			ak.id = S + am
		}
		if (al) {
			ak.style.cssText = al
		}
		return J(ak)
	}

	function E(ak) {
		var aj = c.length, al = (I + ak) % aj;
		return(al < 0) ? aj + al : al
	}

	function O(aj, ak) {
		return Math.round((/%/.test(aj) ? ((ak === "x" ? Z.width() : Z.height()) / 100) : 1) * parseInt(aj, 10))
	}

	function C(aj) {
		return ae.photo || /\.(gif|png|jpe?g|bmp|ico)((#|\?).*)?$/i.test(aj)
	}

	function T() {
		var aj, ak = J.data(w, x);
		if (ak == null) {
			ae = J.extend({}, K);
			if (console && console.log) {
				console.log("Error: cboxElement missing settings object")
			}
		} else {
			ae = J.extend({}, ak)
		}
		for (aj in ae) {
			if (J.isFunction(ae[aj]) && aj.slice(0, 2) !== "on") {
				ae[aj] = ae[aj].call(w)
			}
		}
		ae.rel = ae.rel || w.rel || "nofollow";
		ae.href = ae.href || J(w).attr("href");
		ae.title = ae.title || w.title;
		if (typeof ae.href === "string") {
			ae.href = J.trim(ae.href)
		}
	}

	function F(aj, ak) {
		J.event.trigger(aj);
		if (ak) {
			ak.call(w)
		}
	}

	function y() {
		var ak, am = S + "Slideshow_", an = "click." + S, ao, al, aj;
		if (ae.slideshow && c[1]) {
			ao = function () {
				X.text(ae.slideshowStop).unbind(an).bind(U,function () {
					if (ae.loop || c[I + 1]) {
						ak = setTimeout(L.next, ae.slideshowSpeed)
					}
				}).bind(e,function () {
					clearTimeout(ak)
				}).one(an + " " + u, al);
				ag.removeClass(am + "off").addClass(am + "on");
				ak = setTimeout(L.next, ae.slideshowSpeed)
			};
			al = function () {
				clearTimeout(ak);
				X.text(ae.slideshowStart).unbind([U, e, u, an].join(" ")).one(an, function () {
					L.next();
					ao()
				});
				ag.removeClass(am + "on").addClass(am + "off")
			};
			if (ae.slideshowAuto) {
				ao()
			} else {
				al()
			}
		} else {
			ag.removeClass(am + "off " + am + "on")
		}
	}

	function f(aj) {
		if (!M) {
			w = aj;
			T();
			c = J(w);
			I = 0;
			if (ae.rel !== "nofollow") {
				c = J("." + r).filter(function () {
					var al = J.data(this, x), ak;
					if (al) {
						ak = al.rel || this.rel
					}
					return(ak === ae.rel)
				});
				I = c.index(w);
				if (I === -1) {
					c = c.add(w);
					I = c.length - 1
				}
			}
			if (!D) {
				D = Y = true;
				ag.show();
				if (ae.returnFocus) {
					J(w).blur().one(ac, function () {
						J(this).focus()
					})
				}
				Q.css({opacity:+ae.opacity, cursor:ae.overlayClose ? "pointer" : "auto"}).show();
				ae.w = O(ae.initialWidth, "x");
				ae.h = O(ae.initialHeight, "y");
				L.position();
				if (af) {
					Z.bind("resize." + aa + " scroll." + aa,function () {
						Q.css({width:Z.width(), height:Z.height(), top:Z.scrollTop(), left:Z.scrollLeft()})
					}).trigger("resize." + aa)
				}
				F(V, ae.onOpen);
				B.add(o).hide();
				z.html(ae.close).show()
			}
			L.load(true)
		}
	}

	function q() {
		if (!ag && l.body) {
			ab = false;
			Z = J(W);
			ag = G(ad).attr({id:x, "class":v ? S + (af ? "IE6" : "IE") : ""}).hide();
			Q = G(ad, "Overlay", af ? "position:absolute" : "").hide();
			ah = G(ad, "Wrapper");
			d = G(ad, "Content").append(N = G(ad, "LoadedContent", "width:0; height:0; overflow:hidden"), h = G(ad, "LoadingOverlay").add(G(ad, "LoadingGraphic")), o = G(ad, "Title"), t = G(ad, "Current"), s = G(ad, "Next"), R = G(ad, "Previous"), X = G(ad, "Slideshow").bind(V, y), z = G(ad, "Close"));
			ah.append(G(ad).append(G(ad, "TopLeft"), H = G(ad, "TopCenter"), G(ad, "TopRight")), G(ad, false, "clear:left").append(p = G(ad, "MiddleLeft"), d, b = G(ad, "MiddleRight")), G(ad, false, "clear:left").append(G(ad, "BottomLeft"), P = G(ad, "BottomCenter"), G(ad, "BottomRight"))).find("div div").css({"float":"left"});
			k = G(ad, false, "position:absolute; width:9999px; visibility:hidden; display:none");
			B = s.add(R).add(t).add(X);
			J(l.body).append(Q, ag.append(ah, k))
		}
	}

	function j() {
		if (ag) {
			if (!ab) {
				ab = true;
				ai = H.height() + P.height() + d.outerHeight(true) - d.height();
				m = p.width() + b.width() + d.outerWidth(true) - d.width();
				g = N.outerHeight(true);
				a = N.outerWidth(true);
				ag.css({"padding-bottom":ai, "padding-right":m});
				s.click(function () {
					L.next()
				});
				R.click(function () {
					L.prev()
				});
				z.click(function () {
					L.close()
				});
				Q.click(function () {
					if (ae.overlayClose) {
						L.close()
					}
				});
				J(l).bind("keydown." + S, function (ak) {
					var aj = ak.keyCode;
					if (D && ae.escKey && aj === 27) {
						ak.preventDefault();
						L.close()
					}
					if (D && ae.arrowKey && c[1]) {
						if (aj === 37) {
							ak.preventDefault();
							R.click()
						} else {
							if (aj === 39) {
								ak.preventDefault();
								s.click()
							}
						}
					}
				});
				J("." + r, l).live("click", function (aj) {
					if (!(aj.which > 1 || aj.shiftKey || aj.altKey || aj.metaKey)) {
						aj.preventDefault();
						f(this)
					}
				})
			}
			return true
		}
		return false
	}

	if (J.colorbox) {
		return
	}
	J(q);
	L = J.fn[x] = J[x] = function (aj, al) {
		var ak = this;
		aj = aj || {};
		q();
		if (j()) {
			if (!ak[0]) {
				if (ak.selector) {
					return ak
				}
				ak = J("<a/>");
				aj.open = true
			}
			if (al) {
				aj.onComplete = al
			}
			ak.each(function () {
				J.data(this, x, J.extend({}, J.data(this, x) || K, aj))
			}).addClass(r);
			if ((J.isFunction(aj.open) && aj.open.call(ak)) || aj.open) {
				f(ak[0])
			}
		}
		return ak
	};
	L.position = function (ak, aj) {
		var an = 0, am = 0, ap = ag.offset(), al, ao;
		Z.unbind("resize." + S);
		ag.css({top:-90000, left:-90000});
		al = Z.scrollTop();
		ao = Z.scrollLeft();
		if (ae.fixed && !af) {
			ap.top -= al;
			ap.left -= ao;
			ag.css({position:"fixed"})
		} else {
			an = al;
			am = ao;
			ag.css({position:"absolute"})
		}
		if (ae.right !== false) {
			am += Math.max(Z.width() - ae.w - a - m - O(ae.right, "x"), 0)
		} else {
			if (ae.left !== false) {
				am += O(ae.left, "x")
			} else {
				am += Math.round(Math.max(Z.width() - ae.w - a - m, 0) / 2)
			}
		}
		if (ae.bottom !== false) {
			an += Math.max(Z.height() - ae.h - g - ai - O(ae.bottom, "y"), 0)
		} else {
			if (ae.top !== false) {
				an += O(ae.top, "y")
			} else {
				an += Math.round(Math.max(Z.height() - ae.h - g - ai, 0) / 2)
			}
		}
		ag.css({top:ap.top, left:ap.left});
		ak = (ag.width() === ae.w + a && ag.height() === ae.h + g) ? 0 : ak || 0;
		ah[0].style.width = ah[0].style.height = "9999px";
		function aq(ar) {
			H[0].style.width = P[0].style.width = d[0].style.width = ar.style.width;
			d[0].style.height = p[0].style.height = b[0].style.height = ar.style.height
		}

		ag.dequeue().animate({width:ae.w + a, height:ae.h + g, top:an, left:am}, {duration:ak, complete:function () {
			aq(this);
			Y = false;
			ah[0].style.width = (ae.w + a + m) + "px";
			ah[0].style.height = (ae.h + g + ai) + "px";
			if (ae.reposition) {
				setTimeout(function () {
					Z.bind("resize." + S, L.position)
				}, 1)
			}
			if (aj) {
				aj()
			}
		}, step                                                                           :function () {
			aq(this)
		}})
	};
	L.resize = function (aj) {
		if (D) {
			aj = aj || {};
			if (aj.width) {
				ae.w = O(aj.width, "x") - a - m
			}
			if (aj.innerWidth) {
				ae.w = O(aj.innerWidth, "x")
			}
			N.css({width:ae.w});
			if (aj.height) {
				ae.h = O(aj.height, "y") - g - ai
			}
			if (aj.innerHeight) {
				ae.h = O(aj.innerHeight, "y")
			}
			if (!aj.innerHeight && !aj.height) {
				N.css({height:"auto"});
				ae.h = N.height()
			}
			N.css({height:ae.h});
			L.position(ae.transition === "none" ? 0 : ae.speed)
		}
	};
	L.prep = function (ak) {
		if (!D) {
			return
		}
		var an, al = ae.transition === "none" ? 0 : ae.speed;
		N.remove();
		N = G(ad, "LoadedContent").append(ak);
		function aj() {
			ae.w = ae.w || N.width();
			ae.w = ae.mw && ae.mw < ae.w ? ae.mw : ae.w;
			return ae.w
		}

		function am() {
			ae.h = ae.h || N.height();
			ae.h = ae.mh && ae.mh < ae.h ? ae.mh : ae.h;
			return ae.h
		}

		N.hide().appendTo(k.show()).css({width:aj(), overflow:ae.scrolling ? "auto" : "hidden"}).css({height:am()}).prependTo(d);
		k.hide();
		J(n).css({"float":"none"});
		if (af) {
			J("select").not(ag.find("select")).filter(function () {
				return this.style.visibility !== "hidden"
			}).css({visibility:"hidden"}).one(u, function () {
				this.style.visibility = "inherit"
			})
		}
		an = function () {
			var az, aw, ax = c.length, at, ay = "frameBorder", ar = "allowTransparency", ap, ao, av, au;
			if (!D) {
				return
			}
			function aq() {
				if (v) {
					ag[0].style.removeAttribute("filter")
				}
			}

			ap = function () {
				clearTimeout(A);
				h.hide();
				F(U, ae.onComplete)
			};
			if (v) {
				if (n) {
					N.fadeIn(100)
				}
			}
			o.html(ae.title).add(N).show();
			if (ax > 1) {
				if (typeof ae.current === "string") {
					t.html(ae.current.replace("{current}", I + 1).replace("{total}", ax)).show()
				}
				s[(ae.loop || I < ax - 1) ? "show" : "hide"]().html(ae.next);
				R[(ae.loop || I) ? "show" : "hide"]().html(ae.previous);
				if (ae.slideshow) {
					X.show()
				}
				if (ae.preloading) {
					az = [E(-1), E(1)];
					while (aw = c[az.pop()]) {
						au = J.data(aw, x);
						if (au && au.href) {
							ao = au.href;
							if (J.isFunction(ao)) {
								ao = ao.call(aw)
							}
						} else {
							ao = aw.href
						}
						if (C(ao)) {
							av = new Image();
							av.src = ao
						}
					}
				}
			} else {
				B.hide()
			}
			if (ae.iframe) {
				at = G("iframe")[0];
				if (ay in at) {
					at[ay] = 0
				}
				if (ar in at) {
					at[ar] = "true"
				}
				at.name = S + (+new Date());
				if (ae.fastIframe) {
					ap()
				} else {
					J(at).one("load", ap)
				}
				at.src = ae.href;
				if (!ae.scrolling) {
					at.scrolling = "no"
				}
				J(at).addClass(S + "Iframe").appendTo(N).one(i, function () {
					at.src = "//about:blank"
				})
			} else {
				ap()
			}
			if (ae.transition === "fade") {
				ag.fadeTo(al, 1, aq)
			} else {
				aq()
			}
		};
		if (ae.transition === "fade") {
			ag.fadeTo(al, 0, function () {
				L.position(0, an)
			})
		} else {
			L.position(al, an)
		}
	};
	L.load = function (al) {
		var ak, am, aj = L.prep;
		Y = true;
		n = false;
		w = c[I];
		if (!al) {
			T()
		}
		F(i);
		F(e, ae.onLoad);
		ae.h = ae.height ? O(ae.height, "y") - g - ai : ae.innerHeight && O(ae.innerHeight, "y");
		ae.w = ae.width ? O(ae.width, "x") - a - m : ae.innerWidth && O(ae.innerWidth, "x");
		ae.mw = ae.w;
		ae.mh = ae.h;
		if (ae.maxWidth) {
			ae.mw = O(ae.maxWidth, "x") - a - m;
			ae.mw = ae.w && ae.w < ae.mw ? ae.w : ae.mw
		}
		if (ae.maxHeight) {
			ae.mh = O(ae.maxHeight, "y") - g - ai;
			ae.mh = ae.h && ae.h < ae.mh ? ae.h : ae.mh
		}
		ak = ae.href;
		A = setTimeout(function () {
			h.show()
		}, 100);
		if (ae.inline) {
			G(ad).hide().insertBefore(J(ak)[0]).one(i, function () {
				J(this).replaceWith(N.children())
			});
			aj(J(ak))
		} else {
			if (ae.iframe) {
				aj(" ")
			} else {
				if (ae.html) {
					aj(ae.html)
				} else {
					if (C(ak)) {
						J(n = new Image()).addClass(S + "Photo").error(function () {
							ae.title = false;
							aj(G(ad, "Error").html(ae.imgError))
						}).load(function () {
							var an;
							n.onload = null;
							if (ae.scalePhotos) {
								am = function () {
									n.height -= n.height * an;
									n.width -= n.width * an
								};
								if (ae.mw && n.width > ae.mw) {
									an = (n.width - ae.mw) / n.width;
									am()
								}
								if (ae.mh && n.height > ae.mh) {
									an = (n.height - ae.mh) / n.height;
									am()
								}
							}
							if (ae.h) {
								n.style.marginTop = Math.max(ae.h - n.height, 0) / 2 + "px"
							}
							if (c[1] && (ae.loop || c[I + 1])) {
								n.style.cursor = "pointer";
								n.onclick = function () {
									L.next()
								}
							}
							if (v) {
								n.style.msInterpolationMode = "bicubic"
							}
							setTimeout(function () {
								aj(n)
							}, 1)
						});
						setTimeout(function () {
							n.src = ak
						}, 1)
					} else {
						if (ak) {
							k.load(ak, ae.data, function (ao, an, ap) {
								aj(an === "error" ? G(ad, "Error").html(ae.xhrError) : J(this).contents())
							})
						}
					}
				}
			}
		}
	};
	L.next = function () {
		if (!Y && c[1] && (ae.loop || c[I + 1])) {
			I = E(1);
			L.load()
		}
	};
	L.prev = function () {
		if (!Y && c[1] && (ae.loop || I)) {
			I = E(-1);
			L.load()
		}
	};
	L.close = function () {
		if (D && !M) {
			M = true;
			D = false;
			F(u, ae.onCleanup);
			Z.unbind("." + S + " ." + aa);
			Q.fadeTo(200, 0);
			ag.stop().fadeTo(300, 0, function () {
				ag.add(Q).css({opacity:1, cursor:"auto"}).hide();
				F(i);
				N.remove();
				setTimeout(function () {
					M = false;
					F(ac, ae.onClosed)
				}, 1)
			})
		}
	};
	L.remove = function () {
		J([]).add(ag).add(Q).remove();
		ag = null;
		J("." + r).removeData(x).removeClass(r).die()
	};
	L.element = function () {
		return J(w)
	};
	L.settings = K
}(jQuery, document, this));



/*!
 * Custom, global javascript.
 * Anything not used globally from the footer should be relegated to their own file and conditionally included.
 */
jQuery(document).ready(function ($) {

	// Bind colorbox to galleries and captioned images
	$('.gallery a:has(img)').colorbox({ rel:'.attachment-thumbnail', scalePhotos:true, maxWidth:'80%', maxHeight:'80%' });
	$('.wp-caption a:has(img)').colorbox({ scalePhotos:true, maxWidth:'80%', maxHeight:'80%' });
	//TODO: bind to single images that are inside a link that links to an image. Or, just bind to anchors that link to images...

});