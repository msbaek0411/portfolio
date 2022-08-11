_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
    [7], {
        "/0+H": function (e, t, s) {
            "use strict";
            t.__esModule = !0,
            t.isInAmpMode = n,
            t.useAmp = function () {
                return n(c.default.useContext(i.AmpStateContext))
            };
            var a,
                c = (a = s("q1tI")) && a.__esModule
                    ? a
                    : {
                        default: a
                    },
                i = s("lwAK");
            function n() {
                var e = arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    t = e.ampFirst,
                    s = void 0 !== t && t,
                    a = e.hybrid,
                    c = void 0 !== a && a,
                    i = e.hasQuery,
                    n = void 0 !== i && i;
                return s || c && n
            }
        },
        "/EDR": function (e, t, s) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                "/",
                function () {
                    return s("23aj")
                }
            ])
        },
        "23aj": function (e, t, s) {
            "use strict";
            s.r(t),
            s.d(t, "__N_SSG", (function () {
                return It
            }));
            var a = s("nKUr"),
                c = s("q1tI"),
                i = s.n(c),
                n = s("g4pe"),
                r = s.n(n),
                l = "#ffffff",
                o = "#cccccc",
                d = "#6c757d",
                j = "#000000";
            function m(e) {
                var t = document
                        .body
                        .getBoundingClientRect(),
                    s = e.getBoundingClientRect();
                return {
                    x: s.x - t.x,
                    y: s.y - t.y
                }
            }
            function u(e) {
                var t = document.getElementById(e),
                    s = "root" !== e
                        ? 72
                        : 0;
                t && window.scroll({
                    top: m(t).y - s,
                    left: 0,
                    behavior: "smooth"
                })
            }
            var b = s("rhhu"),
                p = s.n(b);
            function h() {
                var e = Object(c.useState)(!1),
                    t = e[0],
                    s = e[1],
                    i = Object(c.useState)(!1),
                    n = i[0],
                    r = i[1],
                    l = Object(c.useState)(!0),
                    o = l[0],
                    d = l[1];
                function j(e) {
                    d(!0),
                    u(e)
                }
                return Object(c.useEffect)((function () {
                    function e() {
                        (window.scrollY || window.pageYOffset) >= 100
                            ? s(!0)
                            : s(!1)
                    }
                    return e(),
                    window.addEventListener("scroll", e),
                    function () {
                        window.removeEventListener("scroll", e)
                    }
                }), []),
                Object(c.useEffect)((function () {
                    function e() {
                        window.innerWidth <= 992
                            ? r(!0)
                            : (r(!1), d(!0))
                    }
                    return e(),
                    window.addEventListener("resize", e),
                    function () {
                        window.removeEventListener("resize", e)
                    }
                }), []),
                Object(c.useEffect)((function () {
                    var e = function (e) {
                        var t = document.querySelector(".".concat(p.a.Header));
                        !t || e.target && t.contains(e.target) || d(!0)
                    };
                    return document.addEventListener("click", e),
                    function () {
                        document.removeEventListener("click", e)
                    }
                }), []),
                Object(a.jsxs)("header", {
                    className: ""
                        .concat(p.a.Header, " ")
                        .concat(
                            n || t
                                ? p.a["has-background-color"]
                                : ""
                        ),
                    children: [
                        Object(a.jsxs)("div", {
                            className: p.a.content,
                            children: [
                                Object(a.jsx)("div", {
                                    className: p.a.title,
                                    onClick: function () {
                                        return j("root")
                                    },
                                    children: "CDG's Portfolio"
                                }),
                                n
                                    ? Object(a.jsx)("div", {
                                        className: p.a["hamburger-wrapper"],
                                        onClick: function () {
                                            return d(!o)
                                        },
                                        children: Object(a.jsx)("img", {
                                            className: p.a.hamburger,
                                            src: "/images/hamburger.svg",
                                            alt: ""
                                        })
                                    })
                                    : Object(a.jsxs)("div", {
                                        className: p.a["navigation-menus"],
                                        children: [
                                            Object(a.jsx)("div", {
                                                className: p.a["navigation-menu"],
                                                onClick: function () {
                                                    return j("about-me")
                                                },
                                                children: "About me"
                                            }),
                                            Object(a.jsx)("div", {
                                                className: p.a["navigation-menu"],
                                                onClick: function () {
                                                    return j("skills")
                                                },
                                                children: "Skills"
                                            }),
                                            Object(a.jsx)("div", {
                                                className: p.a["navigation-menu"],
                                                onClick: function () {
                                                    return j("archiving")
                                                },
                                                children: "Archiving"
                                            }),
                                            Object(a.jsx)("div", {
                                                className: p.a["navigation-menu"],
                                                onClick: function () {
                                                    return j("projects")
                                                },
                                                children: "Projects"
                                            }),
                                            Object(a.jsx)("div", {
                                                className: p.a["navigation-menu"],
                                                onClick: function () {
                                                    return j("career")
                                                },
                                                children: "Career"
                                            })
                                        ]
                                    })
                            ]
                        }),
                        n && Object(a.jsxs)("div", {
                            className: ""
                                .concat(p.a["folded-navigation-menus"], " ")
                                .concat(
                                    o
                                        ? p.a["is-folded"]
                                        : ""
                                ),
                            children: [
                                Object(a.jsx)("div", {
                                    className: p.a["folded-navigation-menu"],
                                    onClick: function () {
                                        return j("about-me")
                                    },
                                    children: "About me"
                                }),
                                Object(a.jsx)("div", {
                                    className: p.a["folded-navigation-menu"],
                                    onClick: function () {
                                        return j("skills")
                                    },
                                    children: "Skills"
                                }),
                                Object(a.jsx)("div", {
                                    className: p.a["folded-navigation-menu"],
                                    onClick: function () {
                                        return j("archiving")
                                    },
                                    children: "Archiving"
                                }),
                                Object(a.jsx)("div", {
                                    className: p.a["folded-navigation-menu"],
                                    onClick: function () {
                                        return j("projects")
                                    },
                                    children: "Projects"
                                }),
                                Object(a.jsx)("div", {
                                    className: p.a["folded-navigation-menu"],
                                    onClick: function () {
                                        return j("career")
                                    },
                                    children: "Career"
                                })
                            ]
                        })
                    ]
                })
            }
            var x = i
                    .a
                    .memo(h, (function () {
                        return !0
                    })),
                g = s("gHJ/"),
                v = s.n(g);
            function f() {
                return Object(a.jsx)("div", {
                    className: v.a.Masthead,
                    children: Object(a.jsxs)("div", {
                        className: v.a.content,
                        children: [
                            Object(a.jsxs)("div", {
                                className: v.a.title,
                                children: [
                                    "- \ucd5c\ub355\uacbd -",
                                    Object(a.jsx)("br", {}),
                                    "\uc6f9 \uac1c\ubc1c\uc790 \ud3ec\ud2b8\ud3f4\ub9ac\uc624"
                                ]
                            }),
                            Object(a.jsx)("hr", {className: v.a.divider}),
                            Object(a.jsxs)("div", {
                                className: v.a.description,
                                children: [
                                    "\uc548\ub155\ud558\uc138\uc694.",
                                    Object(a.jsx)("br", {}),
                                    "\uacf5\ubd80\uac00 \ucde8\ubbf8\uc778 \uc6f9 \uac1c\ubc1c\uc790\uc785\ub2c8" +
                                            "\ub2e4.",
                                    Object(a.jsx)("br", {}),
                                    "\ub9e4\uc6b0 \uaf3c\uaf3c\ud55c \uc131\uaca9, \uadf8\ub9ac\uace0 \uacf5\ubd80" +
                                            "\ub97c \ubc25 \uba39\ub4ef\uc774 \ud558\ub294 \uc2b5\uad00\uc774 \uc800\uc758 " +
                                            "\uc7a5\uc810\uc785\ub2c8\ub2e4."
                                ]
                            }),
                            Object(a.jsx)("div", {
                                className: v.a["find-out-more"],
                                onClick: function () {
                                    return u("about-me")
                                },
                                children: "\ub354 \uc54c\uc544\ubcf4\uae30 \u2193"
                            })
                        ]
                    })
                })
            }
            var O = i
                    .a
                    .memo(f, (function () {
                        return !0
                    })),
                N = s("GDU/"),
                w = s.n(N);
            function _(e) {
                var t = e.text,
                    s = e.elementId,
                    c = e.color,
                    i = e.borderColor,
                    n = e.isWhiteLink;
                return Object(a.jsxs)("div", {
                    className: w.a.SectionTitle,
                    children: [
                        Object(a.jsx)("div", {
                            className: w.a.text,
                            style: {
                                color: c,
                                borderBottomColor: i
                            },
                            children: t
                        }),
                        Object(a.jsx)("div", {
                            className: w.a["link-wrapper"],
                            children: Object(a.jsx)("img", {
                                className: w.a.link,
                                src: n
                                    ? "/images/white-link.png"
                                    : "/images/black-link.png",
                                alt: "",
                                onClick: function () {
                                    return u(s)
                                }
                            })
                        })
                    ]
                })
            }
            var y = i
                    .a
                    .memo(_),
                k = s("aQ6o"),
                E = s.n(k);
            function C() {
                return Object(a.jsx)("article", {
                    className: E.a.AboutMe,
                    id: "about-me",
                    children: Object(a.jsxs)("div", {
                        className: E.a.content,
                        children: [
                            Object(a.jsx)(y, {
                                text: "ABOUT ME",
                                elementId: "about-me",
                                color: j,
                                borderColor: o,
                                isWhiteLink: !1
                            }),
                            Object(a.jsxs)("div", {
                                className: E.a["basic-infos"],
                                children: [
                                    Object(a.jsx)("div", {
                                        className: E.a["basic-info-wrapper"],
                                        children: Object(a.jsxs)("div", {
                                            className: E.a["basic-info"],
                                            children: [
                                                Object(a.jsx)("div", {
                                                    className: E.a["icon-img-wrapper"],
                                                    children: Object(a.jsx)("img", {
                                                        className: E.a["icon-img"],
                                                        src: "/images/about-me/person-fill.svg",
                                                        alt: ""
                                                    })
                                                }),
                                                Object(a.jsxs)("div", {
                                                    className: E.a.field,
                                                    children: [
                                                        Object(a.jsx)("div", {
                                                            className: E.a["field-label"],
                                                            children: "\uc774\ub984"
                                                        }),
                                                        Object(a.jsx)("div", {
                                                            className: E.a["field-value"],
                                                            children: "\ucd5c\ub355\uacbd"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    Object(a.jsx)("div", {
                                        className: E.a["basic-info-wrapper"],
                                        children: Object(a.jsxs)("div", {
                                            className: E.a["basic-info"],
                                            children: [
                                                Object(a.jsx)("div", {
                                                    className: E.a["icon-img-wrapper"],
                                                    children: Object(a.jsx)("img", {
                                                        className: E.a["icon-img"],
                                                        src: "/images/about-me/calendar-fill.svg",
                                                        alt: ""
                                                    })
                                                }),
                                                Object(a.jsxs)("div", {
                                                    className: E.a.field,
                                                    children: [
                                                        Object(a.jsx)("div", {
                                                            className: E.a["field-label"],
                                                            children: "\uc0dd\ub144\uc6d4\uc77c"
                                                        }),
                                                        Object(a.jsx)("div", {
                                                            className: E.a["field-value"],
                                                            children: "97.01.17"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    Object(a.jsx)("div", {
                                        className: E.a["basic-info-wrapper"],
                                        children: Object(a.jsxs)("div", {
                                            className: E.a["basic-info"],
                                            children: [
                                                Object(a.jsx)("div", {
                                                    className: E.a["icon-img-wrapper"],
                                                    children: Object(a.jsx)("img", {
                                                        className: E.a["icon-img"],
                                                        src: "/images/about-me/geo-alt-fill.svg",
                                                        alt: ""
                                                    })
                                                }),
                                                Object(a.jsxs)("div", {
                                                    className: E.a.field,
                                                    children: [
                                                        Object(a.jsx)("div", {
                                                            className: E.a["field-label"],
                                                            children: "\uc8fc\uc18c\uc9c0"
                                                        }),
                                                        Object(a.jsx)("div", {
                                                            className: E.a["field-value"],
                                                            children: "\uc11c\uc6b8\ud2b9\ubcc4\uc2dc \uc1a1\ud30c\uad6c"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    Object(a.jsx)("div", {
                                        className: E.a["basic-info-wrapper"],
                                        children: Object(a.jsxs)("div", {
                                            className: E.a["basic-info"],
                                            children: [
                                                Object(a.jsx)("div", {
                                                    className: E.a["icon-img-wrapper"],
                                                    children: Object(a.jsx)("img", {
                                                        className: E.a["icon-img"],
                                                        src: "/images/about-me/telephone-fill.svg",
                                                        alt: ""
                                                    })
                                                }),
                                                Object(a.jsxs)("div", {
                                                    className: E.a.field,
                                                    children: [
                                                        Object(a.jsx)("div", {
                                                            className: E.a["field-label"],
                                                            children: "\uc5f0\ub77d\ucc98"
                                                        }),
                                                        Object(a.jsx)("div", {
                                                            className: E.a["field-value"],
                                                            children: "010-4582-5037"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    Object(a.jsx)("div", {
                                        className: E.a["basic-info-wrapper"],
                                        children: Object(a.jsxs)("div", {
                                            className: E.a["basic-info"],
                                            children: [
                                                Object(a.jsx)("div", {
                                                    className: E.a["icon-img-wrapper"],
                                                    children: Object(a.jsx)("img", {
                                                        className: E.a["icon-img"],
                                                        src: "/images/about-me/envelope-fill.svg",
                                                        alt: ""
                                                    })
                                                }),
                                                Object(a.jsxs)("div", {
                                                    className: E.a.field,
                                                    children: [
                                                        Object(a.jsx)("div", {
                                                            className: E.a["field-label"],
                                                            children: "\uc774\uba54\uc77c"
                                                        }),
                                                        Object(a.jsx)("div", {
                                                            className: E.a["field-value"],
                                                            children: Object(a.jsx)("a", {
                                                                className: E.a.email,
                                                                href: "mailto:hjcdg197@gmail.com",
                                                                children: "hjcdg197@gmail.com"
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    Object(a.jsx)("div", {
                                        className: E.a["basic-info-wrapper"],
                                        children: Object(a.jsxs)("div", {
                                            className: E.a["basic-info"],
                                            children: [
                                                Object(a.jsx)("div", {
                                                    className: E.a["icon-img-wrapper"],
                                                    children: Object(a.jsx)("img", {
                                                        className: E.a["icon-img"],
                                                        src: "/images/about-me/pencil-fill.svg",
                                                        alt: ""
                                                    })
                                                }),
                                                Object(a.jsxs)("div", {
                                                    className: E.a.field,
                                                    children: [
                                                        Object(a.jsx)("div", {
                                                            className: E.a["field-label"],
                                                            children: "\ud559\ub825"
                                                        }),
                                                        Object(a.jsxs)("div", {
                                                            className: E.a["field-value"],
                                                            children: [
                                                                "\uc11c\uc6b8\ub300\ud559\uad50",
                                                                Object(a.jsx)("br", {}),
                                                                "(\ucef4\ud4e8\ud130\uacf5\ud559\ubd80)"
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                })
            }
            var S = i
                    .a
                    .memo(C, (function () {
                        return !0
                    })),
                R = s("AFPX"),
                P = s.n(R);
            function A() {
                return Object(a.jsx)("article", {
                    className: P.a.Skills,
                    id: "skills",
                    children: Object(a.jsxs)("div", {
                        className: P.a.content,
                        children: [
                            Object(a.jsx)(y, {
                                text: "SKILLS",
                                elementId: "skills",
                                color: j,
                                borderColor: j,
                                isWhiteLink: !1
                            }),
                            Object(a.jsxs)("div", {
                                className: P.a["tech-stacks-container"],
                                children: [
                                    Object(a.jsxs)("div", {
                                        className: P.a["tech-stacks"],
                                        children: [
                                            Object(a.jsx)("div", {
                                                className: P.a.title,
                                                children: "Frontend"
                                            }),
                                            Object(a.jsx)("img", {
                                                className: P.a.img,
                                                src: "/images/skills/frontend.png",
                                                alt: ""
                                            })
                                        ]
                                    }),
                                    Object(a.jsxs)("div", {
                                        className: P.a["tech-stacks"],
                                        children: [
                                            Object(a.jsx)("div", {
                                                className: P.a.title,
                                                children: "Backend"
                                            }),
                                            Object(a.jsx)("img", {
                                                className: P.a.img,
                                                src: "/images/skills/backend.png",
                                                alt: ""
                                            })
                                        ]
                                    }),
                                    Object(a.jsxs)("div", {
                                        className: P.a["tech-stacks"],
                                        children: [
                                            Object(a.jsx)("div", {
                                                className: P.a.title,
                                                children: "Mobile App"
                                            }),
                                            Object(a.jsx)("img", {
                                                className: P.a.img,
                                                src: "/images/skills/mobile-app.png",
                                                alt: ""
                                            })
                                        ]
                                    }),
                                    Object(a.jsxs)("div", {
                                        className: P.a["tech-stacks"],
                                        children: [
                                            Object(a.jsx)("div", {
                                                className: P.a.title,
                                                children: "Deployment"
                                            }),
                                            Object(a.jsx)("img", {
                                                className: P.a.img,
                                                src: "/images/skills/deployment.png",
                                                alt: ""
                                            })
                                        ]
                                    }),
                                    Object(a.jsxs)("div", {
                                        className: P.a["tech-stacks"],
                                        children: [
                                            Object(a.jsx)("div", {
                                                className: P.a.title,
                                                children: "Version Control"
                                            }),
                                            Object(a.jsx)("img", {
                                                className: P.a.img,
                                                src: "/images/skills/version-control.png",
                                                alt: ""
                                            })
                                        ]
                                    }),
                                    Object(a.jsxs)("div", {
                                        className: P.a["tech-stacks"],
                                        children: [
                                            Object(a.jsx)("div", {
                                                className: P.a.title,
                                                children: "Communication"
                                            }),
                                            Object(a.jsx)("img", {
                                                className: P.a.img,
                                                src: "/images/skills/communication.png",
                                                alt: ""
                                            })
                                        ]
                                    }),
                                    Object(a.jsxs)("div", {
                                        className: P.a["tech-stacks"],
                                        children: [
                                            Object(a.jsx)("div", {
                                                className: P.a.title,
                                                children: "Certificate"
                                            }),
                                            Object(a.jsx)("img", {
                                                className: P.a.img,
                                                src: "/images/skills/certificate.jpg",
                                                alt: ""
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                })
            }
            var M = i
                    .a
                    .memo(A, (function () {
                        return !0
                    })),
                L = s("u8OQ"),
                D = s.n(L);
            function T() {
                return Object(a.jsx)("article", {
                    className: D.a.Archiving,
                    id: "archiving",
                    children: Object(a.jsxs)("div", {
                        className: D.a.content,
                        children: [
                            Object(a.jsx)(y, {
                                text: "ARCHIVING",
                                elementId: "archiving",
                                color: l,
                                borderColor: d,
                                isWhiteLink: !0
                            }),
                            Object(a.jsxs)("div", {
                                className: D.a.container,
                                children: [
                                    Object(a.jsxs)("div", {
                                        className: D.a["git-hub"],
                                        onClick: function () {
                                            return window.open("https://github.com/hjcdg1")
                                        },
                                        children: [
                                            Object(a.jsx)("div", {
                                                className: D.a["img-wrapper"],
                                                children: Object(a.jsx)("img", {
                                                    className: D.a.img,
                                                    src: "/images/archiving/git-hub.png",
                                                    alt: ""
                                                })
                                            }),
                                            Object(a.jsx)("div", {
                                                className: D.a.url,
                                                children: "github.com/hjcdg1"
                                            }),
                                            Object(a.jsxs)("div", {
                                                className: D.a.description,
                                                children: [
                                                    Object(a.jsxs)("p", {
                                                        children: [
                                                            Object(a.jsx)("b", {children: "\uc18c\uc2a4 \ucf54\ub4dc \uc800\uc7a5\uc18c"}),
                                                            "\uc785\ub2c8\ub2e4."
                                                        ]
                                                    }),
                                                    Object(a.jsxs)("ul", {
                                                        children: [
                                                            Object(a.jsx)("li", {
                                                                children: "\uacfc\uac70 \ud504\ub85c\uc81d\ud2b8, \ud504\ub85c\uadf8\ub7a8, \uc571\uc758 " +
                                                                        "\uc18c\uc2a4 \ucf54\ub4dc"
                                                            }),
                                                            Object(a.jsx)("li", {
                                                                children: "\ud63c\uc790\uc11c \ucf54\ub529 \uc5f0\uc2b5\uc744 \uc704\ud574 \ub044\uc801" +
                                                                        "\uc774\ub358 \uc18c\uc2a4 \ucf54\ub4dc"
                                                            }),
                                                            Object(a.jsx)("li", {
                                                                children: "\ud559\ubd80 \uc2dc\uc808 \uc218\uac15\ud55c \uc218\uc5c5\ub4e4\uc758 \ucf54" +
                                                                        "\ub529 \uacfc\uc81c \uc18c\uc2a4 \ucf54\ub4dc"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    Object(a.jsxs)("div", {
                                        className: D.a.tistory,
                                        onClick: function () {
                                            return window.open("https://it-eldorado.tistory.com")
                                        },
                                        children: [
                                            Object(a.jsx)("div", {
                                                className: D.a["img-wrapper"],
                                                children: Object(a.jsx)("img", {
                                                    className: D.a.img,
                                                    src: "/images/archiving/tistory.png",
                                                    alt: ""
                                                })
                                            }),
                                            Object(a.jsx)("div", {
                                                className: D.a.url,
                                                children: "it-eldorado.tistory.com"
                                            }),
                                            Object(a.jsxs)("div", {
                                                className: D.a.description,
                                                children: [
                                                    Object(a.jsxs)("p", {
                                                        children: [
                                                            Object(a.jsx)("b", {
                                                                children: "\uacf5\ubd80 \ubc0f \uc9c0\uc2dd \uacf5\uc720 \ubaa9\uc801\uc758 \ube14\ub85c" +
                                                                        "\uadf8"
                                                            }),
                                                            "\uc785\ub2c8\ub2e4."
                                                        ]
                                                    }),
                                                    Object(a.jsxs)("ul", {
                                                        children: [
                                                            Object(a.jsx)("li", {
                                                                children: "\uacf5\ubd80\ud55c \uac83\uc744 \uc9c4\uc815\ud55c \ub098\uc758 \uac83\uc73c" +
                                                                        "\ub85c \ub9cc\ub4e4\uae30 \uc704\ud55c \uae30\ub85d"
                                                            }),
                                                            Object(a.jsx)("li", {
                                                                children: "\uc6f9 \uac1c\ubc1c\uc790\uc758 \uae38\uc744 \uac78\uc73c\uba70 \uacf5\ubd80" +
                                                                        "\ud55c \uc6f9 \uad00\ub828 \uc9c0\uc2dd \uc815\ub9ac"
                                                            }),
                                                            Object(a.jsx)("li", {
                                                                children: "\ud559\ubd80 \uc2dc\uc808 \ubc30\uc6b4 \uc804\uacf5 \uc218\uc5c5\ub4e4\uc758 " +
                                                                        "\ub0b4\uc6a9 \ubcf5\uc2b5 \uacb8 \uc815\ub9ac"
                                                            }),
                                                            Object(a.jsx)("li", {
                                                                children: "\uc9c0\uc2dd \uacf5\uc720\ub97c \ud1b5\ud55c \uc120\ud55c \uc601\ud5a5\ub825 " +
                                                                        "\ud589\uc0ac"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                })
            }
            var W = i
                    .a
                    .memo(T, (function () {
                        return !0
                    })),
                I = s("eC2I"),
                H = s.n(I),
                F = !(
                    "undefined" === typeof window || !window.document || !window.document.createElement
                ),
                B = !1,
                U = !1;
            try {
                var G = {
                    get passive() {
                        return B = !0
                    },
                    get once() {
                        return U = B = !0
                    }
                };
                F && (
                    window.addEventListener("test", G, G),
                    window.removeEventListener("test", G, !0)
                )
            } catch (Ht) {}
            var K = function (e, t, s, a) {
                if (a && "boolean" !== typeof a && !U) {
                    var c = a.once,
                        i = a.capture,
                        n = s;
                    !U && c && (n = s.__once || function e(a) {
                        this.removeEventListener(t, e, i),
                        s.call(this, a)
                    }, s.__once = n),
                    e.addEventListener(
                        t,
                        n,
                        B
                            ? a
                            : i
                    )
                }
                e.addEventListener(t, s, a)
            };
            function q(e) {
                return e && e.ownerDocument || document
            }
            var V,
                Y = function (e, t, s, a) {
                    var c = a && "boolean" !== typeof a
                        ? a.capture
                        : a;
                    e.removeEventListener(t, s, c),
                    s.__once && e.removeEventListener(t, s.__once, c)
                };
            function $(e) {
                if ((!V && 0 !== V || e) && F) {
                    var t = document.createElement("div");
                    t.style.position = "absolute",
                    t.style.top = "-9999px",
                    t.style.width = "50px",
                    t.style.height = "50px",
                    t.style.overflow = "scroll",
                    document
                        .body
                        .appendChild(t),
                    V = t.offsetWidth - t.clientWidth,
                    document
                        .body
                        .removeChild(t)
                }
                return V
            }
            var X = function (e) {
                var t = Object(c.useRef)(e);
                return Object(c.useEffect)((function () {
                    t.current = e
                }), [e]),
                t
            };
            function Q(e) {
                var t = X(e);
                return Object(c.useCallback)((function () {
                    return t.current && t
                        .current
                        .apply(t, arguments)
                }), [t])
            }
            var J = function (e) {
                return e && "function" !== typeof e
                    ? function (t) {
                        e.current = t
                    }
                    : e
            };
            var Z = function (e, t) {
                return Object(c.useMemo)((function () {
                    return function (e, t) {
                        var s = J(e),
                            a = J(t);
                        return function (e) {
                            s && s(e),
                            a && a(e)
                        }
                    }(e, t)
                }), [e, t])
            };
            function z(e) {
                var t = function (e) {
                    var t = Object(c.useRef)(e);
                    return t.current = e,
                    t
                }(e);
                Object(c.useEffect)((function () {
                    return function () {
                        return t.current()
                    }
                }), [])
            }
            function ee(e, t) {
                return function (e) {
                    var t = q(e);
                    return t && t.defaultView || window
                }(e).getComputedStyle(e, t)
            }
            var te = /([A-Z])/g;
            var se = /^ms-/;
            function ae(e) {
                return function (e) {
                    return e
                        .replace(te, "-$1")
                        .toLowerCase()
                }(e).replace(se, "-ms-")
            }
            var ce = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
            var ie = function (e, t) {
                var s = "",
                    a = "";
                if ("string" === typeof t) 
                    return e
                        .style
                        .getPropertyValue(ae(t)) || ee(e).getPropertyValue(ae(t));
                Object
                    .keys(t)
                    .forEach((function (c) {
                        var i = t[c];
                        i || 0 === i
                            ? !function (e) {
                                return !(!e || !ce.test(e))
                            }(c)
                                ? s += ae(c) + ": " + i + ";"
                                : a += c + "(" + i + ") "
                            : e
                                .style
                                .removeProperty(ae(c))
                    })),
                a && (s += "transform: " + a + ";"),
                e.style.cssText += ";" + s
            };
            var ne = function (e, t, s, a) {
                return K(e, t, s, a),
                function () {
                    Y(e, t, s, a)
                }
            };
            function re(e, t, s) {
                void 0 === s && (s = 5);
                var a = !1,
                    c = setTimeout((function () {
                        a || function (e, t, s, a) {
                            if (void 0 === s && (s = !1), void 0 === a && (a = !0), e) {
                                var c = document.createEvent("HTMLEvents");
                                c.initEvent(t, s, a),
                                e.dispatchEvent(c)
                            }
                        }(e, "transitionend", !0)
                    }), t + s),
                    i = ne(e, "transitionend", (function () {
                        a = !0
                    }), {
                        once: !0
                    });
                return function () {
                    clearTimeout(c),
                    i()
                }
            }
            function le(e, t, s, a) {
                null == s && (s = function (e) {
                    var t = ie(e, "transitionDuration") || "",
                        s = -1 === t.indexOf("ms")
                            ? 1e3
                            : 1;
                    return parseFloat(t) * s
                }(e) || 0);
                var c = re(e, s, a),
                    i = ne(e, "transitionend", t);
                return function () {
                    c(),
                    i()
                }
            }
            function oe(e) {
                void 0 === e && (e = q());
                try {
                    var t = e.activeElement;
                    return t && t.nodeName
                        ? t
                        : null
                } catch (Ht) {
                    return e.body
                }
            }
            function de(e, t) {
                return e.contains
                    ? e.contains(t)
                    : e.compareDocumentPosition
                        ? e === t || !!(16 & e.compareDocumentPosition(t))
                        : void 0
            }
            var je = s("i8i4"),
                me = s.n(je);
            const ue = `data-rr-ui-${ "modal-open"}`;
            var be = class {
                constructor({
                    ownerDocument: e,
                    handleContainerOverflow: t = !0,
                    isRTL: s = !1
                } = {}) {
                    this.handleContainerOverflow = t,
                    this.isRTL = s,
                    this.modals = [],
                    this.ownerDocument = e
                }
                getScrollbarWidth() {
                    return function (e = document) {
                        const t = e.defaultView;
                        return Math.abs(t.innerWidth - e.documentElement.clientWidth)
                    }(this.ownerDocument)
                }
                getElement() {
                    return (this.ownerDocument || document).body
                }
                setModalAttributes(e) {}
                removeModalAttributes(e) {}
                setContainerStyle(e) {
                    const t = {
                            overflow: "hidden"
                        },
                        s = this.isRTL
                            ? "paddingLeft"
                            : "paddingRight",
                        a = this.getElement();
                    e.style = {
                        overflow: a.style.overflow,
                        [s]: a.style[s]
                    },
                    e.scrollBarWidth && (
                        t[s] = `${parseInt(ie(a, s) || "0", 10) + e.scrollBarWidth}px`
                    ),
                    a.setAttribute(ue, ""),
                    ie(a, t)
                }
                reset() {
                    [...this.modals].forEach((e => this.remove(e)))
                }
                removeContainerStyle(e) {
                    const t = this.getElement();
                    t.removeAttribute(ue),
                    Object.assign(t.style, e.style)
                }
                add(e) {
                    let t = this
                        .modals
                        .indexOf(e);
                    return -1 !== t
                        ? t
                        : (
                            t = this.modals.length,
                            this.modals.push(e),
                            this.setModalAttributes(e),
                            0 !== t || (this.state = {
                                scrollBarWidth: this.getScrollbarWidth(),
                                style: {}
                            }, this.handleContainerOverflow && this.setContainerStyle(this.state)),
                            t
                        )
                }
                remove(e) {
                    const t = this
                        .modals
                        .indexOf(e);
                    -1 !== t && (
                        this.modals.splice(t, 1),
                        !this.modals.length && this.handleContainerOverflow && this.removeContainerStyle(this.state),
                        this.removeModalAttributes(e)
                    )
                }
                isTopModal(e) {
                    return !!this.modals.length && this.modals[this.modals.length - 1] === e
                }
            };
            const pe = Object(c.createContext)(
                F
                    ? window
                    : void 0
            );
            pe.Provider;
            function he() {
                return Object(c.useContext)(pe)
            }
            const xe = (e, t) => {
                var s;
                return F
                    ? null == e
                        ? (t || q()).body
                        : (
                            "function" === typeof e && (e = e()),
                            e && "current" in e && (e = e.current),
                            null != (s = e) && s.nodeType && e || null
                        )
                    : null
            };
            const ge = [
                "show",
                "role",
                "className",
                "style",
                "children",
                "backdrop",
                "keyboard",
                "onBackdropClick",
                "onEscapeKeyDown",
                "transition",
                "backdropTransition",
                "autoFocus",
                "enforceFocus",
                "restoreFocus",
                "restoreFocusOptions",
                "renderDialog",
                "renderBackdrop",
                "manager",
                "container",
                "onShow",
                "onHide",
                "onExit",
                "onExited",
                "onExiting",
                "onEnter",
                "onEntering",
                "onEntered"
            ];
            let ve;
            function fe(e) {
                const t = he(),
                    s = e || function (e) {
                        return ve || (ve = new be({
                            ownerDocument: null == e
                                ? void 0
                                : e.document
                        })),
                        ve
                    }(t),
                    a = Object(c.useRef)({dialog: null, backdrop: null});
                return Object.assign(a.current, {
                    add: () => s.add(a.current),
                    remove: () => s.remove(a.current),
                    isTopModal: () => s.isTopModal(a.current),
                    setDialogRef: Object(c.useCallback)((e => {
                        a.current.dialog = e
                    }), []),
                    setBackdropRef: Object(c.useCallback)((e => {
                        a.current.backdrop = e
                    }), [])
                })
            }
            const Oe = Object(c.forwardRef)(((e, t) => {
                let {
                        show: s = !1,
                        role: i = "dialog",
                        className: n,
                        style: r,
                        children: l,
                        backdrop: o = !0,
                        keyboard: d = !0,
                        onBackdropClick: j,
                        onEscapeKeyDown: m,
                        transition: u,
                        backdropTransition: b,
                        autoFocus: p = !0,
                        enforceFocus: h = !0,
                        restoreFocus: x = !0,
                        restoreFocusOptions: g,
                        renderDialog: v,
                        renderBackdrop: f = (e => Object(a.jsx)("div", Object.assign({}, e))),
                        manager: O,
                        container: N,
                        onShow: w,
                        onHide: _ = (() => {}),
                        onExit: y,
                        onExited: k,
                        onExiting: E,
                        onEnter: C,
                        onEntering: S,
                        onEntered: R
                    } = e,
                    P = function (e, t) {
                        if (null == e) 
                            return {};
                        var s,
                            a,
                            c = {},
                            i = Object.keys(e);
                        for (a = 0; a < i.length; a++) 
                            s = i[a],
                            t.indexOf(s) >= 0 || (c[s] = e[s]);
                        return c
                    }(e, ge);
                const A = function (e, t) {
                        const s = he(),
                            [a, i] = Object(c.useState)((() => xe(
                                e,
                                null == s
                                    ? void 0
                                    : s.document
                            )));
                        if (!a) {
                            const t = xe(e);
                            t && i(t)
                        }
                        return Object(c.useEffect)((() => {
                            t && a && t(a)
                        }), [t, a]),
                        Object(c.useEffect)((() => {
                            const t = xe(e);
                            t !== a && i(t)
                        }), [e, a]),
                        a
                    }(N),
                    M = fe(O),
                    L = function () {
                        var e = Object(c.useRef)(!0),
                            t = Object(c.useRef)((function () {
                                return e.current
                            }));
                        return Object(c.useEffect)((function () {
                            return function () {
                                e.current = !1
                            }
                        }), []),
                        t.current
                    }(),
                    D = function (e) {
                        var t = Object(c.useRef)(null);
                        return Object(c.useEffect)((function () {
                            t.current = e
                        })),
                        t.current
                    }(s),
                    [T, W] = Object(c.useState)(!s),
                    I = Object(c.useRef)(null);
                Object(c.useImperativeHandle)(t, (() => M), [M]),
                F && !D && s && (I.current = oe()),
                u || s || T
                    ? s && T && W(!1)
                    : W(!0);
                const H = Q((() => {
                        if (
                            M.add(),
                            V.current = ne(document, "keydown", K),
                            q.current = ne(document, "focus", (() => setTimeout(U)), !0),
                            w && w(),
                            p
                        ) {
                            const e = oe(document);
                            M.dialog && e && !de(M.dialog, e) && (I.current = e, M.dialog.focus())
                        }
                    })),
                    B = Q((() => {
                        var e;
                        (
                            M.remove(),
                            null == V.current || V.current(),
                            null == q.current || q.current(),
                            x
                        ) && (
                            null == (e = I.current) || null == e.focus || e.focus(g),
                            I.current = null
                        )
                    }));
                Object(c.useEffect)((() => {
                    s && A && H()
                }), [s, A, H]),
                Object(c.useEffect)((() => {
                    T && B()
                }), [T, B]),
                z((() => {
                    B()
                }));
                const U = Q((() => {
                        if (!h || !L() || !M.isTopModal()) 
                            return;
                        const e = oe();
                        M.dialog && e && !de(M.dialog, e) && M
                            .dialog
                            .focus()
                    })),
                    G = Q((e => {
                        e.target === e.currentTarget && (null == j || j(e), !0 === o && _())
                    })),
                    K = Q((e => {
                        d && 27 === e.keyCode && M.isTopModal() && (
                            null == m || m(e),
                            e.defaultPrevented || _()
                        )
                    })),
                    q = Object(c.useRef)(),
                    V = Object(c.useRef)(),
                    Y = (...e) => {
                        W(!0),
                        null == k || k(...e)
                    },
                    $ = u;
                if (!A || !(s || $ && !T)) 
                    return null;
                const X = Object.assign({
                    role: i,
                    ref: M.setDialogRef,
                    "aria-modal": "dialog" === i || void 0
                }, P, {
                    style: r,
                    className: n,
                    tabIndex: -1
                });
                let J = v
                    ? v(X)
                    : Object(a.jsx)("div", Object.assign({}, X, {
                        children: c.cloneElement(l, {role: "document"})
                    }));
                $ && (J = Object(a.jsx)($, {
                    appear: !0,
                    unmountOnExit: !0, in: !!s,
                    onExit: y,
                    onExiting: E,
                    onExited: Y,
                    onEnter: C,
                    onEntering: S,
                    onEntered: R,
                    children: J
                }));
                let Z = null;
                if (o) {
                    const e = b;
                    Z = f({ref: M.setBackdropRef, onClick: G}),
                    e && (Z = Object(a.jsx)(e, {
                        appear: !0, in: !!s,
                        children: Z
                    }))
                }
                return Object(a.jsx)(a.Fragment, {
                    children: me
                        .a
                        .createPortal(Object(a.jsxs)(a.Fragment, {
                            children: [Z, J]
                        }), A)
                })
            }));
            Oe.displayName = "Modal";
            var Ne = Object.assign(Oe, {Manager: be});
            var we = Function
                .prototype
                .bind
                .call(Function.prototype.call, [].slice);
            function _e(e, t) {
                return we(e.querySelectorAll(t))
            }
            function ye(e, t) {
                return e
                    .replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1")
                    .replace(/\s+/g, " ")
                    .replace(/^\s*|\s*$/g, "")
            }
            const ke = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
                Ee = ".sticky-top",
                Ce = ".navbar-toggler";
            class Se extends be {
                adjustAndStore(e, t, s) {
                    const a = t.style[e];
                    t.dataset[e] = a,
                    ie(t, {
                        [e]: `${parseFloat(ie(t, e)) + s}px`
                    })
                }
                restore(e, t) {
                    const s = t.dataset[e];
                    void 0 !== s && (delete t.dataset[e], ie(t, {[e]: s}))
                }
                setContainerStyle(e) {
                    super.setContainerStyle(e);
                    const t = this.getElement();
                    var s,
                        a;
                    if (
                        a = "modal-open",
                        (s = t).classList
                            ? s.classList.add(a)
                            : function (e, t) {
                                return e.classList
                                    ? !!t && e
                                        .classList
                                        .contains(t)
                                    : -1 !== (" " + (
                                        e.className.baseVal || e.className
                                    ) + " ").indexOf(" " + t + " ")
                            }(s, a) || (
                                "string" === typeof s.className
                                    ? s.className = s.className + " " + a
                                    : s.setAttribute("class", (s.className && s.className.baseVal || "") + " " + a)
                            ),
                        !e.scrollBarWidth
                    ) 
                        return;
                    const c = this.isRTL
                            ? "paddingLeft"
                            : "paddingRight",
                        i = this.isRTL
                            ? "marginLeft"
                            : "marginRight";
                    _e(t, ke).forEach((t => this.adjustAndStore(c, t, e.scrollBarWidth))),
                    _e(t, Ee).forEach((t => this.adjustAndStore(i, t, -e.scrollBarWidth))),
                    _e(t, Ce).forEach((t => this.adjustAndStore(i, t, e.scrollBarWidth)))
                }
                removeContainerStyle(e) {
                    super.removeContainerStyle(e);
                    const t = this.getElement();
                    var s,
                        a;
                    a = "modal-open",
                    (s = t).classList
                        ? s
                            .classList
                            .remove(a)
                        : "string" === typeof s.className
                            ? s.className = ye(s.className, a)
                            : s.setAttribute("class", ye(s.className && s.className.baseVal || "", a));
                    const c = this.isRTL
                            ? "paddingLeft"
                            : "paddingRight",
                        i = this.isRTL
                            ? "marginLeft"
                            : "marginRight";
                    _e(t, ke).forEach((e => this.restore(c, e))),
                    _e(t, Ee).forEach((e => this.restore(i, e))),
                    _e(t, Ce).forEach((e => this.restore(i, e)))
                }
            }
            let Re;
            s("17x9");
            var Pe = !1,
                Ae = i
                    .a
                    .createContext(null),
                Me = "unmounted",
                Le = "exited",
                De = "entering",
                Te = "entered",
                We = "exiting",
                Ie = function (e) {
                    var t,
                        s;
                    function a(t, s) {
                        var a;
                        a = e.call(this, t, s) || this;
                        var c,
                            i = s && !s.isMounting
                                ? t.enter
                                : t.appear;
                        return a.appearStatus = null,
                        t. in
                            ? i
                                ? (c = Le, a.appearStatus = De)
                                : c = Te
                            : c = t.unmountOnExit || t.mountOnEnter
                                ? Me
                                : Le,
                        a.state = {
                            status: c
                        },
                        a.nextCallback = null,
                        a
                    }
                    s = e,
                    (t = a).prototype = Object.create(s.prototype),
                    t.prototype.constructor = t,
                    t.__proto__ = s,
                    a.getDerivedStateFromProps = function (e, t) {
                        return e. in && t.status === Me
                            ? {
                                status: Le
                            }
                            : null
                    };
                    var c = a.prototype;
                    return c.componentDidMount = function () {
                        this.updateStatus(!0, this.appearStatus)
                    },
                    c.componentDidUpdate = function (e) {
                        var t = null;
                        if (e !== this.props) {
                            var s = this.state.status;
                            this.props. in
                                ? s !== De && s !== Te && (t = De)
                                : s !== De && s !== Te || (t = We)
                        }
                        this.updateStatus(!1, t)
                    },
                    c.componentWillUnmount = function () {
                        this.cancelNextCallback()
                    },
                    c.getTimeouts = function () {
                        var e,
                            t,
                            s,
                            a = this.props.timeout;
                        return e = t = s = a,
                        null != a && "number" !== typeof a && (
                            e = a.exit,
                            t = a.enter,
                            s = void 0 !== a.appear
                                ? a.appear
                                : t
                        ), {
                            exit: e,
                            enter: t,
                            appear: s
                        }
                    },
                    c.updateStatus = function (e, t) {
                        void 0 === e && (e = !1),
                        null !== t
                            ? (
                                this.cancelNextCallback(),
                                t === De
                                    ? this.performEnter(e)
                                    : this.performExit()
                            )
                            : this.props.unmountOnExit && this.state.status === Le && this.setState(
                                {status: Me}
                            )
                    },
                    c.performEnter = function (e) {
                        var t = this,
                            s = this.props.enter,
                            a = this.context
                                ? this.context.isMounting
                                : e,
                            c = this.props.nodeRef
                                ? [a]
                                : [
                                    me
                                        .a
                                        .findDOMNode(this),
                                    a
                                ],
                            i = c[0],
                            n = c[1],
                            r = this.getTimeouts(),
                            l = a
                                ? r.appear
                                : r.enter;
                        !e && !s || Pe
                            ? this.safeSetState({
                                status: Te
                            }, (function () {
                                t
                                    .props
                                    .onEntered(i)
                            }))
                            : (this.props.onEnter(i, n), this.safeSetState({
                                status: De
                            }, (function () {
                                t
                                    .props
                                    .onEntering(i, n),
                                t.onTransitionEnd(l, (function () {
                                    t.safeSetState({
                                        status: Te
                                    }, (function () {
                                        t
                                            .props
                                            .onEntered(i, n)
                                    }))
                                }))
                            })))
                    },
                    c.performExit = function () {
                        var e = this,
                            t = this.props.exit,
                            s = this.getTimeouts(),
                            a = this.props.nodeRef
                                ? void 0
                                : me
                                    .a
                                    .findDOMNode(this);
                        t && !Pe
                            ? (this.props.onExit(a), this.safeSetState({
                                status: We
                            }, (function () {
                                e
                                    .props
                                    .onExiting(a),
                                e.onTransitionEnd(s.exit, (function () {
                                    e.safeSetState({
                                        status: Le
                                    }, (function () {
                                        e
                                            .props
                                            .onExited(a)
                                    }))
                                }))
                            })))
                            : this.safeSetState({
                                status: Le
                            }, (function () {
                                e
                                    .props
                                    .onExited(a)
                            }))
                    },
                    c.cancelNextCallback = function () {
                        null !== this.nextCallback && (
                            this.nextCallback.cancel(),
                            this.nextCallback = null
                        )
                    },
                    c.safeSetState = function (e, t) {
                        t = this.setNextCallback(t),
                        this.setState(e, t)
                    },
                    c.setNextCallback = function (e) {
                        var t = this,
                            s = !0;
                        return this.nextCallback = function (a) {
                            s && (s = !1, t.nextCallback = null, e(a))
                        },
                        this.nextCallback.cancel = function () {
                            s = !1
                        },
                        this.nextCallback
                    },
                    c.onTransitionEnd = function (e, t) {
                        this.setNextCallback(t);
                        var s = this.props.nodeRef
                                ? this.props.nodeRef.current
                                : me
                                    .a
                                    .findDOMNode(this),
                            a = null == e && !this.props.addEndListener;
                        if (s && !a) {
                            if (this.props.addEndListener) {
                                var c = this.props.nodeRef
                                        ? [this.nextCallback]
                                        : [
                                            s, this.nextCallback
                                        ],
                                    i = c[0],
                                    n = c[1];
                                this
                                    .props
                                    .addEndListener(i, n)
                            }
                            null != e && setTimeout(this.nextCallback, e)
                        } else 
                            setTimeout(this.nextCallback, 0)
                    },
                    c.render = function () {
                        var e = this.state.status;
                        if (e === Me) 
                            return null;
                        var t = this.props,
                            s = t.children,
                            a = (
                                t. in,
                                t.mountOnEnter,
                                t.unmountOnExit,
                                t.appear,
                                t.enter,
                                t.exit,
                                t.timeout,
                                t.addEndListener,
                                t.onEnter,
                                t.onEntering,
                                t.onEntered,
                                t.onExit,
                                t.onExiting,
                                t.onExited,
                                t.nodeRef,
                                function (e, t) {
                                    if (null == e) 
                                        return {};
                                    var s,
                                        a,
                                        c = {},
                                        i = Object.keys(e);
                                    for (a = 0; a < i.length; a++) 
                                        s = i[a],
                                        t.indexOf(s) >= 0 || (c[s] = e[s]);
                                    return c
                                }(t, [
                                    "children",
                                    "in",
                                    "mountOnEnter",
                                    "unmountOnExit",
                                    "appear",
                                    "enter",
                                    "exit",
                                    "timeout",
                                    "addEndListener",
                                    "onEnter",
                                    "onEntering",
                                    "onEntered",
                                    "onExit",
                                    "onExiting",
                                    "onExited",
                                    "nodeRef"
                                ])
                            );
                        return i
                            .a
                            .createElement(
                                Ae.Provider,
                                {
                                    value: null
                                },
                                "function" === typeof s
                                    ? s(e, a)
                                    : i.a.cloneElement(i.a.Children.only(s), a)
                            )
                    },
                    a
                }(i.a.Component);
            function He() {}
            Ie.contextType = Ae,
            Ie.propTypes = {},
            Ie.defaultProps = { in: !1,
                mountOnEnter: !1,
                unmountOnExit: !1,
                appear: !1,
                enter: !0,
                exit: !0,
                onEnter: He,
                onEntering: He,
                onEntered: He,
                onExit: He,
                onExiting: He,
                onExited: He
            },
            Ie.UNMOUNTED = Me,
            Ie.EXITED = Le,
            Ie.ENTERING = De,
            Ie.ENTERED = Te,
            Ie.EXITING = We;
            var Fe = Ie;
            function Be(e, t) {
                const s = ie(e, t) || "",
                    a = -1 === s.indexOf("ms")
                        ? 1e3
                        : 1;
                return parseFloat(s) * a
            }
            function Ue(e, t) {
                const s = Be(e, "transitionDuration"),
                    a = Be(e, "transitionDelay"),
                    c = le(e, (s => {
                        s.target === e && (c(), t(s))
                    }), s + a)
            }
            var Ge = i
                .a
                .forwardRef((({
                    onEnter: e,
                    onEntering: t,
                    onEntered: s,
                    onExit: n,
                    onExiting: r,
                    onExited: l,
                    addEndListener: o,
                    children: d,
                    childRef: j,
                    ...m
                }, u) => {
                    const b = Object(c.useRef)(null),
                        p = Z(b, j),
                        h = e => {
                            var t;
                            p(
                                (t = e) && "setState" in t
                                    ? me.a.findDOMNode(t)
                                    : null != t
                                        ? t
                                        : null
                            )
                        },
                        x = e => t => {
                            e && b.current && e(b.current, t)
                        },
                        g = Object(c.useCallback)(x(e), [e]),
                        v = Object(c.useCallback)(x(t), [t]),
                        f = Object(c.useCallback)(x(s), [s]),
                        O = Object(c.useCallback)(x(n), [n]),
                        N = Object(c.useCallback)(x(r), [r]),
                        w = Object(c.useCallback)(x(l), [l]),
                        _ = Object(c.useCallback)(x(o), [o]);
                    return Object(a.jsx)(Fe, {
                        ref: u,
                        ...m,
                        onEnter: g,
                        onEntered: f,
                        onEntering: v,
                        onExit: O,
                        onExited: w,
                        onExiting: N,
                        addEndListener: _,
                        nodeRef: b,
                        children: "function" === typeof d
                            ? (e, t) => d(e, {
                                ...t,
                                ref: h
                            })
                            : i
                                .a
                                .cloneElement(d, {ref: h})
                    })
                }));
            const Ke = {
                    [De]: "show",
                    [Te]: "show"
                },
                qe = c.forwardRef((({
                    className: e,
                    children: t,
                    transitionClasses: s = {},
                    ...i
                }, n) => {
                    const r = Object(c.useCallback)(((e, t) => {
                        !function (e) {
                            e.offsetHeight
                        }(e),
                        null == i.onEnter || i.onEnter(e, t)
                    }), [i]);
                    return Object(a.jsx)(Ge, {
                        ref: n,
                        addEndListener: Ue,
                        ...i,
                        onEnter: r,
                        childRef: t.ref,
                        children: (a, i) => c.cloneElement(t, {
                            ...i,
                            className: H()("fade", e, t.props.className, Ke[a], s[a])
                        })
                    })
                }));
            qe.defaultProps = { in: !1,
                timeout: 300,
                mountOnEnter: !1,
                unmountOnExit: !1,
                appear: !1
            },
            qe.displayName = "Fade";
            var Ve = qe,
                Ye = /-(.)/g;
            const $e = [
                    "xxl",
                    "xl",
                    "lg",
                    "md",
                    "sm",
                    "xs"
                ],
                Xe = c.createContext({prefixes: {}, breakpoints: $e}), {
                    Consumer: Qe,
                    Provider: Je
                } = Xe;
            function Ze(e, t) {
                const {prefixes: s} = Object(c.useContext)(Xe);
                return e || s[t] || t
            }
            const ze = e => {
                return e[0].toUpperCase() + (t = e, t.replace(Ye, (function (e, t) {
                    return t.toUpperCase()
                }))).slice(1);
                var t
            };
            function et(e, {
                displayName: t = ze(e),
                Component: s,
                defaultProps: i
            } = {}) {
                const n = c.forwardRef((({
                    className: t,
                    bsPrefix: c,
                    as: i = s || "div",
                    ...n
                }, r) => {
                    const l = Ze(c, e);
                    return Object(a.jsx)(i, {
                        ref: r,
                        className: H()(t, l),
                        ...n
                    })
                }));
                return n.defaultProps = i,
                n.displayName = t,
                n
            }
            var tt = et("modal-body");
            var st = c.createContext({onHide() {}});
            const at = c.forwardRef((({
                bsPrefix: e,
                className: t,
                contentClassName: s,
                centered: c,
                size: i,
                fullscreen: n,
                children: r,
                scrollable: l,
                ...o
            }, d) => {
                const j = `${e = Ze(e, "modal")}-dialog`,
                    m = "string" === typeof n
                        ? `${e}-fullscreen-${n}`
                        : `${e}-fullscreen`;
                return Object(a.jsx)("div", {
                    ...o,
                    ref: d,
                    className: H()(
                        j,
                        t,
                        i && `${e}-${i}`,
                        c && `${j}-centered`,
                        l && `${j}-scrollable`,
                        n && m
                    ),
                    children: Object(a.jsx)("div", {
                        className: H()(`${e}-content`, s),
                        children: r
                    })
                })
            }));
            at.displayName = "ModalDialog";
            var ct = at,
                it = et("modal-footer"),
                nt = s("bQTf"),
                rt = s.n(nt);
            const lt = {
                    "aria-label": rt.a.string,
                    onClick: rt.a.func,
                    variant: rt
                        .a
                        .oneOf(["white"])
                },
                ot = c.forwardRef((({
                    className: e,
                    variant: t,
                    ...s
                }, c) => Object(a.jsx)("button", {
                    ref: c,
                    type: "button",
                    className: H()("btn-close", t && `btn-close-${t}`, e),
                    ...s
                })));
            ot.displayName = "CloseButton",
            ot.propTypes = lt,
            ot.defaultProps = {
                "aria-label": "Close"
            };
            var dt = ot;
            const jt = c.forwardRef((({
                closeLabel: e,
                closeVariant: t,
                closeButton: s,
                onHide: i,
                children: n,
                ...r
            }, l) => {
                const o = Object(c.useContext)(st),
                    d = Q((() => {
                        null == o || o.onHide(),
                        null == i || i()
                    }));
                return Object(a.jsxs)("div", {
                    ref: l,
                    ...r,
                    children: [
                        n, s && Object(a.jsx)(dt, {
                            "aria-label": e,
                            variant: t,
                            onClick: d
                        })
                    ]
                })
            }));
            jt.defaultProps = {
                closeLabel: "Close",
                closeButton: !1
            };
            var mt = jt;
            const ut = c.forwardRef((({
                bsPrefix: e,
                className: t,
                ...s
            }, c) => (e = Ze(e, "modal-header"), Object(a.jsx)(mt, {
                ref: c,
                ...s,
                className: H()(t, e)
            }))));
            ut.displayName = "ModalHeader",
            ut.defaultProps = {
                closeLabel: "Close",
                closeButton: !1
            };
            var bt = ut;
            var pt,
                ht = et("modal-title", {
                    Component: (pt = "h4", c.forwardRef(((e, t) => Object(a.jsx)("div", {
                        ...e,
                        ref: t,
                        className: H()(e.className, pt)
                    }))))
                });
            const xt = {
                show: !1,
                backdrop: !0,
                keyboard: !0,
                autoFocus: !0,
                enforceFocus: !0,
                restoreFocus: !0,
                animation: !0,
                dialogAs: ct
            };
            function gt(e) {
                return Object(a.jsx)(Ve, {
                    ...e,
                    timeout: null
                })
            }
            function vt(e) {
                return Object(a.jsx)(Ve, {
                    ...e,
                    timeout: null
                })
            }
            const ft = c.forwardRef((({
                bsPrefix: e,
                className: t,
                style: s,
                dialogClassName: i,
                contentClassName: n,
                children: r,
                dialogAs: l,
                "aria-labelledby": o,
                show: d,
                animation: j,
                backdrop: m,
                keyboard: u,
                onEscapeKeyDown: b,
                onShow: p,
                onHide: h,
                container: x,
                autoFocus: g,
                enforceFocus: v,
                restoreFocus: f,
                restoreFocusOptions: O,
                onEntered: N,
                onExit: w,
                onExiting: _,
                onEnter: y,
                onEntering: k,
                onExited: E,
                backdropClassName: C,
                manager: S,
                ...R
            }, P) => {
                const [A, M] = Object(c.useState)({}),
                    [L, D] = Object(c.useState)(!1),
                    T = Object(c.useRef)(!1),
                    W = Object(c.useRef)(!1),
                    I = Object(c.useRef)(null),
                    [B, U] = Object(c.useState)(null),
                    G = Z(P, U),
                    V = Q(h),
                    X = function () {
                        const {dir: e} = Object(c.useContext)(Xe);
                        return "rtl" === e
                    }();
                e = Ze(e, "modal");
                const J = Object(c.useMemo)((() => ({onHide: V})), [V]);
                function ee() {
                    return S || (e = {
                        isRTL: X
                    }, Re || (Re = new Se(e)), Re);
                    var e
                }
                function te(e) {
                    if (!F) 
                        return;
                    const t = ee().getScrollbarWidth() > 0,
                        s = e.scrollHeight > q(e).documentElement.clientHeight;
                    M({
                        paddingRight: t && !s
                            ? $()
                            : void 0,
                        paddingLeft: !t && s
                            ? $()
                            : void 0
                    })
                }
                const se = Q((() => {
                    B && te(B.dialog)
                }));
                z((() => {
                    Y(window, "resize", se),
                    null == I.current || I.current()
                }));
                const ae = () => {
                        T.current = !0
                    },
                    ce = e => {
                        T.current && B && e.target === B.dialog && (W.current = !0),
                        T.current = !1
                    },
                    ie = () => {
                        D(!0),
                        I.current = le(B.dialog, (() => {
                            D(!1)
                        }))
                    },
                    ne = e => {
                        "static" !== m
                            ? W.current || e.target !== e.currentTarget
                                ? W.current = !1
                                : null == h || h()
                            : (e => {
                                e.target === e.currentTarget && ie()
                            })(e)
                    },
                    re = Object(c.useCallback)((t => Object(a.jsx)("div", {
                        ...t,
                        className: H()(`${e}-backdrop`, C, !j && "show")
                    })), [j, C, e]),
                    oe = {
                        ...s,
                        ...A
                    };
                j || (oe.display = "block");
                return Object(a.jsx)(st.Provider, {
                    value: J,
                    children: Object(a.jsx)(Ne, {
                        show: d,
                        ref: G,
                        backdrop: m,
                        container: x,
                        keyboard: !0,
                        autoFocus: g,
                        enforceFocus: v,
                        restoreFocus: f,
                        restoreFocusOptions: O,
                        onEscapeKeyDown: e => {
                            u || "static" !== m
                                ? u && b && b(e)
                                : (e.preventDefault(), ie())
                        },
                        onShow: p,
                        onHide: h,
                        onEnter: (e, t) => {
                            e && (e.style.display = "block", te(e)),
                            null == y || y(e, t)
                        },
                        onEntering: (e, t) => {
                            null == k || k(e, t),
                            K(window, "resize", se)
                        },
                        onEntered: N,
                        onExit: e => {
                            null == I.current || I.current(),
                            null == w || w(e)
                        },
                        onExiting: _,
                        onExited: e => {
                            e && (e.style.display = ""),
                            null == E || E(e),
                            Y(window, "resize", se)
                        },
                        manager: ee(),
                        transition: j
                            ? gt
                            : void 0,
                        backdropTransition: j
                            ? vt
                            : void 0,
                        renderBackdrop: re,
                        renderDialog: s => Object(a.jsx)("div", {
                            role: "dialog",
                            ...s,
                            style: oe,
                            className: H()(t, e, L && `${e}-static`),
                            onClick: m
                                ? ne
                                : void 0,
                            onMouseUp: ce,
                            "aria-labelledby": o,
                            children: Object(a.jsx)(l, {
                                ...R,
                                onMouseDown: ae,
                                className: i,
                                contentClassName: n,
                                children: r
                            })
                        })
                    })
                })
            }));
            ft.displayName = "Modal",
            ft.defaultProps = xt;
            var Ot = Object.assign(ft, {
                    Body: tt,
                    Header: bt,
                    Title: ht,
                    Footer: it,
                    Dialog: ct,
                    TRANSITION_DURATION: 300,
                    BACKDROP_TRANSITION_DURATION: 150
                }),
                Nt = s("i1W2"),
                wt = s.n(Nt);
            function _t(e) {
                var t = e.readmeContents,
                    s = Object(c.useState)(!1),
                    i = s[0],
                    n = s[1],
                    r = Object(c.useState)(""),
                    d = r[0],
                    j = r[1],
                    u = [
                        Object(c.useRef)(null),
                        Object(c.useRef)(null),
                        Object(c.useRef)(null),
                        Object(c.useRef)(null),
                        Object(c.useRef)(null),
                        Object(c.useRef)(null),
                        Object(c.useRef)(null)
                    ];
                Object(c.useEffect)((function () {
                    u.forEach((function (e) {
                        !function (e, t) {
                            var s,
                                a,
                                c,
                                i,
                                n,
                                r,
                                l = e.querySelector(".".concat(t.imgs)),
                                o = l.querySelectorAll(".".concat(t["img-wrapper"])),
                                d = o.length,
                                j = e
                                    .querySelector(".".concat(t.nav))
                                    .querySelector(".".concat(t.page)),
                                u = window.innerWidth,
                                b = 0,
                                p = 0,
                                h = d - 1;
                            function x() {
                                return b >= 0
                                    ? b % d
                                    : b % d === 0
                                        ? 0
                                        : d + b % d
                            }
                            function g() {
                                j.innerHTML = ""
                                    .concat(x() + 1, "/")
                                    .concat(d)
                            }
                            function v() {
                                if (b === h) {
                                    var e = x(),
                                        t = o[
                                            e !== d - 1
                                                ? e + 1
                                                : 0
                                        ].cloneNode(!0);
                                    l.append(t),
                                    h += 1
                                } else if (b === p) {
                                    var s = x(),
                                        a = o[
                                            0 !== s
                                                ? s - 1
                                                : d - 1
                                        ].cloneNode(!0);
                                    l.prepend(a),
                                    p -= 1,
                                    l.style.left = l.offsetLeft - o[0].offsetWidth + "px"
                                }
                            }
                            function f(e) {
                                (e = e || window.event).preventDefault(),
                                s = l.offsetLeft,
                                "touchstart" === e.type
                                    ? (
                                        c = e.touches[0].pageX,
                                        l.addEventListener("touchmove", O),
                                        l.addEventListener("touchend", N)
                                    )
                                    : (c = e.pageX, document.onmousemove = O, document.onmouseup = N),
                                n = m(e.target).x + 5,
                                r = m(e.target).x + o[0].offsetWidth - 5,
                                l.removeEventListener("touchstart", f),
                                l.removeEventListener("mousedown", f)
                            }
                            function O(e) {
                                e = e || window.event,
                                i = "touchmove" === e.type
                                    ? e
                                        .touches[0]
                                        .pageX
                                    : e.pageX,
                                (i = Math.min(Math.max(i, n), r)) > c
                                    ? l.style.left = s + (i - c) + "px"
                                    : c > i && (l.style.left = s - (c - i) + "px")
                            }
                            function N() {
                                (a = l.offsetLeft) - s > o[0].offsetWidth / 10
                                    ? (
                                        l.style.left = s + o[0].offsetWidth + "px",
                                        l.classList.add(t.shifting),
                                        b--
                                    )
                                    : s - a > o[0].offsetWidth / 10
                                        ? (
                                            l.style.left = s - o[0].offsetWidth + "px",
                                            l.classList.add(t.shifting),
                                            b++
                                        )
                                        : (
                                            l.style.left = s + "px",
                                            l.addEventListener("mousedown", f),
                                            l.addEventListener("touchstart", f)
                                        ),
                                l.removeEventListener("touchmove", O),
                                l.removeEventListener("touchend", N),
                                document.onmousemove = null,
                                document.onmouseup = null
                            }
                            g(),
                            v(),
                            l.addEventListener("touchstart", f),
                            l.addEventListener("mousedown", f),
                            l.addEventListener("transitionend", (function () {
                                l
                                    .classList
                                    .remove(t.shifting),
                                g(),
                                v(),
                                l.addEventListener("mousedown", f),
                                l.addEventListener("touchstart", f)
                            })),
                            window.addEventListener("resize", (function () {
                                u !== window.innerWidth && (l.style.left = -o[x()].offsetLeft + "px"),
                                u = window.innerWidth
                            }))
                        }(e.current, wt.a)
                    }))
                }), []);
                var b = Object(c.useCallback)((function (e) {
                        j(t[e]),
                        n(!0),
                        window
                            .history
                            .pushState(null, document.title, window.location.href)
                    }), []),
                    p = Object(c.useCallback)((function () {
                        n(!1),
                        window
                            .history
                            .back()
                    }), []),
                    h = Object(c.useCallback)((function (e) {
                        i && "Escape" === e.key && p()
                    }), [i, p]),
                    x = Object(c.useCallback)((function () {
                        i && n(!1)
                    }), [i]);
                return Object(c.useEffect)((function () {
                    return document.addEventListener("keydown", h),
                    window.addEventListener("popstate", x),
                    function () {
                        document.removeEventListener("keydown", h),
                        window.removeEventListener("popstate", x)
                    }
                }), [h, x]),
                Object(a.jsxs)("article", {
                    className: wt.a.Projects,
                    id: "projects",
                    children: [
                        Object(a.jsxs)("div", {
                            className: wt.a.content,
                            children: [
                                Object(a.jsx)(y, {
                                    text: "PROJECTS",
                                    elementId: "projects",
                                    color: l,
                                    borderColor: o,
                                    isWhiteLink: !0
                                }),
                                Object(a.jsxs)("div", {
                                    className: wt.a.projects,
                                    children: [
                                        Object(a.jsxs)("div", {
                                            className: wt.a.project,
                                            children: [
                                                Object(a.jsx)("div", {
                                                    className: wt.a.title,
                                                    children: "\ub611\ub611\ud558\uac8c N\ube75\ud558\uae30"
                                                }),
                                                Object(a.jsxs)("div", {
                                                    className: wt.a.period,
                                                    children: [
                                                        "2022.02\xa0",
                                                        Object(a.jsx)("span", {
                                                            className: wt.a["new-line-chunk"],
                                                            children: "(1\u4eba \uac1c\uc778 \ud504\ub85c\uc81d\ud2b8)"
                                                        })
                                                    ]
                                                }),
                                                Object(a.jsxs)("div", {
                                                    className: wt.a.info,
                                                    children: [
                                                        Object(a.jsxs)("div", {
                                                            className: wt.a["img-carousel"],
                                                            ref: u[6],
                                                            children: [
                                                                Object(a.jsxs)("div", {
                                                                    className: wt.a.imgs,
                                                                    children: [
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a["img-wrapper"],
                                                                            children: Object(a.jsx)("img", {
                                                                                className: wt.a.img,
                                                                                src: "/images/projects/dutch-pay-calculator/1.png",
                                                                                alt: ""
                                                                            })
                                                                        }),
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a["img-wrapper"],
                                                                            children: Object(a.jsx)("img", {
                                                                                className: wt.a.img,
                                                                                src: "/images/projects/dutch-pay-calculator/2.png",
                                                                                alt: ""
                                                                            })
                                                                        }),
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a["img-wrapper"],
                                                                            children: Object(a.jsx)("img", {
                                                                                className: wt.a.img,
                                                                                src: "/images/projects/dutch-pay-calculator/3.png",
                                                                                alt: ""
                                                                            })
                                                                        }),
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a["img-wrapper"],
                                                                            children: Object(a.jsx)("img", {
                                                                                className: wt.a.img,
                                                                                src: "/images/projects/dutch-pay-calculator/4.png",
                                                                                alt: ""
                                                                            })
                                                                        }),
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a["img-wrapper"],
                                                                            children: Object(a.jsx)("img", {
                                                                                className: wt.a.img,
                                                                                src: "/images/projects/dutch-pay-calculator/5.png",
                                                                                alt: ""
                                                                            })
                                                                        }),
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a["img-wrapper"],
                                                                            children: Object(a.jsx)("img", {
                                                                                className: wt.a.img,
                                                                                src: "/images/projects/dutch-pay-calculator/6.png",
                                                                                alt: ""
                                                                            })
                                                                        }),
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a["img-wrapper"],
                                                                            children: Object(a.jsx)("img", {
                                                                                className: wt.a.img,
                                                                                src: "/images/projects/dutch-pay-calculator/7.png",
                                                                                alt: ""
                                                                            })
                                                                        }),
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a["img-wrapper"],
                                                                            children: Object(a.jsx)("img", {
                                                                                className: wt.a.img,
                                                                                src: "/images/projects/dutch-pay-calculator/8.png",
                                                                                alt: ""
                                                                            })
                                                                        })
                                                                    ]
                                                                }),
                                                                Object(a.jsxs)("nav", {
                                                                    className: wt.a.nav,
                                                                    children: [
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a.prev,
                                                                            children: Object(a.jsx)("img", {
                                                                                src: "/images/arrow-left.svg",
                                                                                alt: ""
                                                                            })
                                                                        }),
                                                                        Object(a.jsx)("div", {className: wt.a.page}),
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a.next,
                                                                            children: Object(a.jsx)("img", {
                                                                                src: "/images/arrow-right.svg",
                                                                                alt: ""
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        Object(a.jsxs)("div", {
                                                            className: wt.a.descriptions,
                                                            children: [
                                                                Object(a.jsxs)("div", {
                                                                    className: wt.a["main-description"],
                                                                    children: [
                                                                        Object(a.jsx)("b", {
                                                                            children: "\ubcf5\uc7a1\ud55c \uc0c1\ud669\uc5d0\uc11c\uc758 N\ube75 \uacc4\uc0b0\uc744 " +
                                                                                    "\ub3c4\uc640 \ub204\uac00 \ub204\uad6c\uc5d0\uac8c \uc5bc\ub9c8\ub97c \ubcf4" +
                                                                                    "\ub0b4\uc57c \ud558\ub294\uc9c0 \uacc4\uc0b0\ud574 \uc8fc\ub294 \ubaa8\ubc14" +
                                                                                    "\uc77c \uc571"
                                                                        }),
                                                                        "\uc785\ub2c8\ub2e4. \ub3d9\uc544\ub9ac \ud65c\ub3d9\uc744 \ud558\ub358 \ub2f9" +
                                                                                "\uc2dc \uc5ec\ub7ec \ubaa8\uc784\uc5d0\uc11c N\ube75 \uacc4\uc0b0 \uc2dc " +
                                                                                "\uc5b4\ub824\uc6c0\uc744 \uacaa\uc740 \uba87\uba87 \uc0c1\ud669\uc5d0\uc11c " +
                                                                                "\uc544\uc774\ub514\uc5b4\ub97c \uc5bb\uc5b4 \uac1c\ubc1c\ud558\uc600\uc2b5" +
                                                                                "\ub2c8\ub2e4.",
                                                                        Object(a.jsx)("p", {}),
                                                                        "\uc774\ubbf8 Android Native\ub85c \uac1c\ubc1c\uc744 \uc644\ub8cc\ud55c \ud504" +
                                                                                "\ub85c\uc81d\ud2b8\uc600\uc9c0\ub9cc,",
                                                                        " ",
                                                                        Object(a.jsx)("span", {
                                                                            className: wt.a.red,
                                                                            children: "React Native"
                                                                        }),
                                                                        "\uc758 \ud559\uc2b5\uc744 \uc704\ud574 \uc774\ub97c \ub2e4\uc2dc React Native" +
                                                                                "\ub85c \uac1c\ubc1c\ud558\uc600\uc2b5\ub2c8\ub2e4. \uc774\uc804 \ud504\ub85c" +
                                                                                "\uc81d\ud2b8\uc640 \ub2ec\ub9ac \uc774\ubc88\uc5d0\ub294 \uc804\ubc18\uc801" +
                                                                                "\uc778 \ub85c\uc9c1\uacfc UI & UX\ub97c \uac1c\uc120\ud558\uace0 ",
                                                                        Object(a.jsx)("span", {
                                                                            className: wt.a.red,
                                                                            children: "\uc2e4\uc81c\ub85c \uc2a4\ud1a0\uc5b4\uc5d0 \ucd9c\uc2dc"
                                                                        }),
                                                                        "\uae4c\uc9c0 \ud588\ub2e4\ub294 \uc810\uc5d0\uc11c \uc758\ubbf8\uac00 \uc788" +
                                                                                "\uc2b5\ub2c8\ub2e4. \uc774\uc81c\ub294 \ub9c8\uc74c\ub9cc \uba39\uc73c\uba74 " +
                                                                                "\ubaa8\ubc14\uc77c \uc571\ub3c4 \uac1c\ubc1c\ud558\uace0 \ucd9c\uc2dc\ud560 " +
                                                                                "\uc218 \uc788\ub2e4\ub294 \uc790\uc2e0\uac10\uc744 \uc900 \ud504\ub85c\uc81d" +
                                                                                "\ud2b8\uc785\ub2c8\ub2e4.",
                                                                        Object(a.jsx)("p", {}),
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a["show-readme-btn"],
                                                                            onClick: function () {
                                                                                return b(6)
                                                                            },
                                                                            children: "\uc790\uc138\ud788 \ubcf4\uae30 \u25b6 README"
                                                                        })
                                                                    ]
                                                                }),
                                                                Object(a.jsxs)("div", {
                                                                    className: wt.a.description,
                                                                    children: [
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a.label,
                                                                            children: "\uc8fc\uc694 \uae30\ub2a5"
                                                                        }),
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a.value,
                                                                            children: "\ucc38\uc11d\uc790\uc758 \uc774\ub984\u2219\ubd80\ub2f4 \uae08\uc561\u2219" +
                                                                                    "\ube44\uc911 \uc785\ub825, \ucd5c\uc18c\ud55c\uc73c\ub85c \uc774\uccb4\ud558" +
                                                                                    "\ub294 \ubc29\ubc95 \uacc4\uc0b0"
                                                                        })
                                                                    ]
                                                                }),
                                                                Object(a.jsxs)("div", {
                                                                    className: wt.a.description,
                                                                    children: [
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a.label,
                                                                            children: "GitHub"
                                                                        }),
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a.value,
                                                                            children: Object(a.jsx)("div", {
                                                                                className: wt.a.url,
                                                                                onClick: function () {
                                                                                    return window.open("https://github.com/hjcdg1/dutch_pay_calculator_rn")
                                                                                },
                                                                                children: "github.com/hjcdg1/dutch_pay_calculator_rn"
                                                                            })
                                                                        })
                                                                    ]
                                                                }),
                                                                Object(a.jsxs)("div", {
                                                                    className: wt.a.description,
                                                                    children: [
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a.label,
                                                                            children: "URL"
                                                                        }),
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a.value,
                                                                            children: Object(a.jsx)("div", {
                                                                                className: wt.a.url,
                                                                                onClick: function () {
                                                                                    return window.open(
                                                                                        "https://play.google.com/store/apps/details?id=com.dutch_pay_calculator_rn"
                                                                                    )
                                                                                },
                                                                                children: "play.google.com/store/apps/details?id=com.dutch_pay_calculator_rn"
                                                                            })
                                                                        })
                                                                    ]
                                                                }),
                                                                Object(a.jsxs)("div", {
                                                                    className: wt.a.description,
                                                                    children: [
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a.label,
                                                                            children: "Mobile App"
                                                                        }),
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a.value,
                                                                            children: "React Native, Recoil, TypeScript"
                                                                        })
                                                                    ]
                                                                }),
                                                                Object(a.jsxs)("div", {
                                                                    className: wt.a.description,
                                                                    children: [
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a.label,
                                                                            children: "Deployment"
                                                                        }),
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a.value,
                                                                            children: "Google Play Store"
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        Object(a.jsxs)("div", {
                                            className: wt.a.project,
                                            children: [
                                                Object(a.jsx)("div", {
                                                    className: wt.a.title,
                                                    children: "\uce5c\uad6c\uac00 \ubcf4\ub294 \ub098\uc758 \uc131\uaca9\uc740?"
                                                }),
                                                Object(a.jsxs)("div", {
                                                    className: wt.a.period,
                                                    children: [
                                                        "2021.05 - 2021.06\xa0",
                                                        Object(a.jsx)("span", {
                                                            className: wt.a["new-line-chunk"],
                                                            children: "(2\u4eba \ud300 \ud504\ub85c\uc81d\ud2b8)"
                                                        })
                                                    ]
                                                }),
                                                Object(a.jsxs)("div", {
                                                    className: wt.a.info,
                                                    children: [
                                                        Object(a.jsxs)("div", {
                                                            className: wt.a["img-carousel"],
                                                            ref: u[5],
                                                            children: [
                                                                Object(a.jsxs)("div", {
                                                                    className: wt.a.imgs,
                                                                    children: [
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a["img-wrapper"],
                                                                            children: Object(a.jsx)("img", {
                                                                                className: wt.a.img,
                                                                                src: "/images/projects/personality-test-by-friends/1.png",
                                                                                alt: ""
                                                                            })
                                                                        }),
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a["img-wrapper"],
                                                                            children: Object(a.jsx)("img", {
                                                                                className: wt.a.img,
                                                                                src: "/images/projects/personality-test-by-friends/2.png",
                                                                                alt: ""
                                                                            })
                                                                        }),
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a["img-wrapper"],
                                                                            children: Object(a.jsx)("img", {
                                                                                className: wt.a.img,
                                                                                src: "/images/projects/personality-test-by-friends/3.png",
                                                                                alt: ""
                                                                            })
                                                                        }),
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a["img-wrapper"],
                                                                            children: Object(a.jsx)("img", {
                                                                                className: wt.a.img,
                                                                                src: "/images/projects/personality-test-by-friends/4.png",
                                                                                alt: ""
                                                                            })
                                                                        }),
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a["img-wrapper"],
                                                                            children: Object(a.jsx)("img", {
                                                                                className: wt.a.img,
                                                                                src: "/images/projects/personality-test-by-friends/5.png",
                                                                                alt: ""
                                                                            })
                                                                        }),
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a["img-wrapper"],
                                                                            children: Object(a.jsx)("img", {
                                                                                className: wt.a.img,
                                                                                src: "/images/projects/personality-test-by-friends/6.png",
                                                                                alt: ""
                                                                            })
                                                                        }),
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a["img-wrapper"],
                                                                            children: Object(a.jsx)("img", {
                                                                                className: wt.a.img,
                                                                                src: "/images/projects/personality-test-by-friends/7.png",
                                                                                alt: ""
                                                                            })
                                                                        })
                                                                    ]
                                                                }),
                                                                Object(a.jsxs)("nav", {
                                                                    className: wt.a.nav,
                                                                    children: [
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a.prev,
                                                                            children: Object(a.jsx)("img", {
                                                                                src: "/images/arrow-left.svg",
                                                                                alt: ""
                                                                            })
                                                                        }),
                                                                        Object(a.jsx)("div", {className: wt.a.page}),
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a.next,
                                                                            children: Object(a.jsx)("img", {
                                                                                src: "/images/arrow-right.svg",
                                                                                alt: ""
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        Object(a.jsxs)("div", {
                                                            className: wt.a.descriptions,
                                                            children: [
                                                                Object(a.jsxs)("div", {
                                                                    className: wt.a["main-description"],
                                                                    children: [
                                                                        Object(a.jsx)("b", {
                                                                            children: "\ub0b4\uac00 \uc0dd\uac01\ud558\ub294 \ub098\uc758 \uc131\uaca9\uacfc \uce5c" +
                                                                                    "\uad6c\uac00 \uc0dd\uac01\ud558\ub294 \ub098\uc758 \uc131\uaca9\uc744 \ube44" +
                                                                                    "\uad50\ud568\uc73c\ub85c\uc368 \uac89\uc73c\ub85c \ubcf4\uc774\ub294 \ub098" +
                                                                                    "\uc758 \ubaa8\uc2b5\uc774 \uc5b4\ub5a0\ud55c\uc9c0 \ud30c\uc545\ud574\ubcfc " +
                                                                                    "\uc218 \uc788\ub294 \uc6f9\uc0ac\uc774\ud2b8"
                                                                        }),
                                                                        "\uc785\ub2c8\ub2e4. \uc2e4\uc81c\ub85c \uc9c0\uc778\uacfc \uc131\uaca9 \uac80" +
                                                                                "\uc0ac\ub97c \uc11c\ub85c \ud574\uc8fc\uba74\uc11c \uc5bb\uc740 \uc544\uc774" +
                                                                                "\ub514\uc5b4\ub97c \ubc14\ud0d5\uc73c\ub85c \uc9c1\uc811 \uac1c\ubc1c\ud558" +
                                                                                "\uc600\uc2b5\ub2c8\ub2e4.",
                                                                        Object(a.jsx)("p", {}),
                                                                        Object(a.jsx)("span", {
                                                                            className: wt.a.red,
                                                                            children: "\ubc31 \uc5d4\ub4dc \uac1c\ubc1c\uc790\uc640 \ud611\uc5c5\ud558\ub294 \uacfc" +
                                                                                    "\uc815"
                                                                        }),
                                                                        "\uc5d0 \uad00\ud574 \ub9ce\uc774 \ubc30\uc6b8 \uc218 \uc788\uc5c8\uc2b5\ub2c8" +
                                                                                "\ub2e4. \ud544\uc694\ud55c \uba85\uc138\ub97c \ubb38\uc11c\ub85c \uc791\uc131" +
                                                                                "\ud558\uc5ec \uc18c\ud1b5\ud558\uc600\uace0, \ud544\uc694\ud55c \uc9c0\uc2dd" +
                                                                                "\ub3c4 \ud568\uaed8 \uacf5\uc720\ud558\uba70 \ud559\uc2b5\ud560 \uc218 \uc788" +
                                                                                "\uc5c8\uc2b5\ub2c8\ub2e4.",
                                                                        Object(a.jsx)("p", {}),
                                                                        "UI & UX\ub97c \uae4a\uac8c \uace0\ubbfc\ud558\uba70 ",
                                                                        Object(a.jsx)("span", {
                                                                            className: wt.a.red,
                                                                            children: "\uc2a4\uc2a4\ub85c \ub514\uc790\uc778"
                                                                        }),
                                                                        "\ud558\uc600\uace0, \uadf8 \uacfc\uc815\uc5d0\uc11c canvas API \ub4f1\uc744 " +
                                                                                "\ud65c\uc6a9\ud558\uc5ec",
                                                                        " ",
                                                                        Object(a.jsx)("span", {
                                                                            className: wt.a.red,
                                                                            children: "\ubcf5\uc7a1\ud55c \uc560\ub2c8\uba54\uc774\uc158"
                                                                        }),
                                                                        "\ub4e4\uc744 \uad6c\ud604\ud588\uc2b5\ub2c8\ub2e4.",
                                                                        Object(a.jsx)("p", {}),
                                                                        "\ubcf5\uc218 \ud398\uc774\uc9c0\uc758 Next.js \uc6f9\uc0ac\uc774\ud2b8\ub97c " +
                                                                                "\ub9cc\ub4e4\uba74\uc11c",
                                                                        " ",
                                                                        Object(a.jsx)("span", {
                                                                            className: wt.a.red,
                                                                            children: "\ub77c\uc6b0\ud305, CSR, SSR, SSG"
                                                                        }),
                                                                        "\uc5d0 \ub300\ud55c \uac1c\ub150\uc744 \ub354\uc6b1 \ud655\uc2e4\ud558\uac8c " +
                                                                                "\uc219\uc9c0\ud560 \uc218 \uc788\uc5c8\uc2b5\ub2c8\ub2e4.",
                                                                        Object(a.jsx)("p", {}),
                                                                        Object(a.jsx)("span", {
                                                                            className: wt.a.red,
                                                                            children: "GA"
                                                                        }),
                                                                        "\ub97c \uc124\uce58\ud558\uc5ec \ud2b8\ub798\ud53d\uc744 \ud30c\uc545\ud558" +
                                                                                "\uace0 \uc0ac\uc6a9\uc790\uc758 \ud589\ub3d9\uc744 \uc774\ubca4\ud2b8 \ub2e8" +
                                                                                "\uc704\ub85c \ubd84\uc11d\ud558\ub294 \ubc29\ubc95\uc744 \uc54c\uac8c \ub418" +
                                                                                "\uc5c8\uc2b5\ub2c8\ub2e4.",
                                                                        Object(a.jsx)("p", {}),
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a["show-readme-btn"],
                                                                            onClick: function () {
                                                                                return b(5)
                                                                            },
                                                                            children: "\uc790\uc138\ud788 \ubcf4\uae30 \u25b6 README"
                                                                        })
                                                                    ]
                                                                }),
                                                                Object(a.jsxs)("div", {
                                                                    className: wt.a.description,
                                                                    children: [
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a.label,
                                                                            children: "\uc8fc\uc694 \uae30\ub2a5"
                                                                        }),
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a.value,
                                                                            children: "\ub0b4\uac00 \uc0dd\uac01\ud558\ub294 \ub098\uc758 \uc131\uaca9 \uac80\uc0ac" +
                                                                                    "\ud558\uae30, \uce5c\uad6c\uc5d0\uac8c \ub098\uc758 \uc131\uaca9 \ud3c9\uac00 " +
                                                                                    "\ubd80\ud0c1\ud558\uae30, \ub098\uc758 \uc131\uaca9\uc5d0 \ub300\ud55c \ub098" +
                                                                                    "\uc640 \uce5c\uad6c\uc758 \uac80\uc0ac \uacb0\uacfc \ube44\uad50\ud558\uae30"
                                                                        })
                                                                    ]
                                                                }),
                                                                Object(a.jsxs)("div", {
                                                                    className: wt.a.description,
                                                                    children: [
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a.label,
                                                                            children: "GitHub"
                                                                        }),
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a.value,
                                                                            children: Object(a.jsx)("div", {
                                                                                className: wt.a.url,
                                                                                onClick: function () {
                                                                                    return window.open("https://github.com/hjcdg1/personality_test_by_friends")
                                                                                },
                                                                                children: "github.com/hjcdg1/personality_test_by_friends"
                                                                            })
                                                                        })
                                                                    ]
                                                                }),
                                                                Object(a.jsxs)("div", {
                                                                    className: wt.a.description,
                                                                    children: [
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a.label,
                                                                            children: "URL"
                                                                        }),
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a.value,
                                                                            children: Object(a.jsx)("div", {
                                                                                className: wt.a.url,
                                                                                onClick: function () {
                                                                                    return window.open("https://personality-test-by-friends.com")
                                                                                },
                                                                                children: "personality-test-by-friends.com"
                                                                            })
                                                                        })
                                                                    ]
                                                                }),
                                                                Object(a.jsxs)("div", {
                                                                    className: wt.a.description,
                                                                    children: [
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a.label,
                                                                            children: "Frontend"
                                                                        }),
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a.value,
                                                                            children: "Next.js, TypeScript, Sass"
                                                                        })
                                                                    ]
                                                                }),
                                                                Object(a.jsxs)("div", {
                                                                    className: wt.a.description,
                                                                    children: [
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a.label,
                                                                            children: "Backend"
                                                                        }),
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a.value,
                                                                            children: "Django REST Framework"
                                                                        })
                                                                    ]
                                                                }),
                                                                Object(a.jsxs)("div", {
                                                                    className: wt.a.description,
                                                                    children: [
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a.label,
                                                                            children: "Database"
                                                                        }),
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a.value,
                                                                            children: "PostgreSQL"
                                                                        })
                                                                    ]
                                                                }),
                                                                Object(a.jsxs)("div", {
                                                                    className: wt.a.description,
                                                                    children: [
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a.label,
                                                                            children: "Deployment"
                                                                        }),
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a.value,
                                                                            children: "Vercel, AWS (EC2, RDS, Route 53)"
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        Object(a.jsxs)("div", {
                                            className: wt.a.project,
                                            children: [
                                                Object(a.jsx)("div", {
                                                    className: wt.a.title,
                                                    children: "Onepick \uc6f9\uc0ac\uc774\ud2b8"
                                                }),
                                                Object(a.jsxs)("div", {
                                                    className: wt.a.period,
                                                    children: [
                                                        "2021.03\xa0",
                                                        Object(a.jsx)("span", {
                                                            className: wt.a["new-line-chunk"],
                                                            children: "(1\u4eba \uac1c\uc778 \ud504\ub85c\uc81d\ud2b8)"
                                                        })
                                                    ]
                                                }),
                                                Object(a.jsxs)("div", {
                                                    className: wt.a.info,
                                                    children: [
                                                        Object(a.jsxs)("div", {
                                                            className: wt.a["img-carousel"],
                                                            ref: u[4],
                                                            children: [
                                                                Object(a.jsxs)("div", {
                                                                    className: wt.a.imgs,
                                                                    children: [
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a["img-wrapper"],
                                                                            children: Object(a.jsx)("img", {
                                                                                className: wt.a.img,
                                                                                src: "/images/projects/onepick/1.jpg",
                                                                                alt: ""
                                                                            })
                                                                        }),
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a["img-wrapper"],
                                                                            children: Object(a.jsx)("img", {
                                                                                className: wt.a.img,
                                                                                src: "/images/projects/onepick/2.jpg",
                                                                                alt: ""
                                                                            })
                                                                        }),
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a["img-wrapper"],
                                                                            children: Object(a.jsx)("img", {
                                                                                className: wt.a.img,
                                                                                src: "/images/projects/onepick/3.jpg",
                                                                                alt: ""
                                                                            })
                                                                        }),
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a["img-wrapper"],
                                                                            children: Object(a.jsx)("img", {
                                                                                className: wt.a.img,
                                                                                src: "/images/projects/onepick/4.jpg",
                                                                                alt: ""
                                                                            })
                                                                        }),
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a["img-wrapper"],
                                                                            children: Object(a.jsx)("img", {
                                                                                className: wt.a.img,
                                                                                src: "/images/projects/onepick/5.jpg",
                                                                                alt: ""
                                                                            })
                                                                        }),
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a["img-wrapper"],
                                                                            children: Object(a.jsx)("img", {
                                                                                className: wt.a.img,
                                                                                src: "/images/projects/onepick/6.jpg",
                                                                                alt: ""
                                                                            })
                                                                        }),
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a["img-wrapper"],
                                                                            children: Object(a.jsx)("img", {
                                                                                className: wt.a.img,
                                                                                src: "/images/projects/onepick/7.jpg",
                                                                                alt: ""
                                                                            })
                                                                        }),
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a["img-wrapper"],
                                                                            children: Object(a.jsx)("img", {
                                                                                className: wt.a.img,
                                                                                src: "/images/projects/onepick/8.jpg",
                                                                                alt: ""
                                                                            })
                                                                        })
                                                                    ]
                                                                }),
                                                                Object(a.jsxs)("nav", {
                                                                    className: wt.a.nav,
                                                                    children: [
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a.prev,
                                                                            children: Object(a.jsx)("img", {
                                                                                src: "/images/arrow-left.svg",
                                                                                alt: ""
                                                                            })
                                                                        }),
                                                                        Object(a.jsx)("div", {className: wt.a.page}),
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a.next,
                                                                            children: Object(a.jsx)("img", {
                                                                                src: "/images/arrow-right.svg",
                                                                                alt: ""
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        Object(a.jsxs)("div", {
                                                            className: wt.a.descriptions,
                                                            children: [
                                                                Object(a.jsxs)("div", {
                                                                    className: wt.a["main-description"],
                                                                    children: [
                                                                        Object(a.jsx)("b", {
                                                                            children: "\uce5c\ud615\uc774 \uadfc\ubb34\ud558\ub294 PT \uc13c\ud130\uc758 \ud648\ud398" +
                                                                                    "\uc774\uc9c0\ub85c \uc0ac\uc6a9\ud558\ub294 \uc6f9\uc0ac\uc774\ud2b8"
                                                                        }),
                                                                        "\uc785\ub2c8\ub2e4. Onepick\uc740 \ud574\ub2f9 \uc13c\ud130\uc758 \uc774\ub984" +
                                                                                "\uc785\ub2c8\ub2e4. \uc81c \ubd84\uc57c\ub85c \uac00\uc871\uc5d0\uac8c \ub3c4" +
                                                                                "\uc6c0\uc774 \ub418\uace0 \uc2f6\uc740 \ub9c8\uc74c\uc5d0 \uc9c4\ud589\ud55c " +
                                                                                "\ud504\ub85c\uc81d\ud2b8\uc785\ub2c8\ub2e4.",
                                                                        Object(a.jsx)("p", {}),
                                                                        Object(a.jsx)("span", {
                                                                            className: wt.a.red,
                                                                            children: "Next.js"
                                                                        }),
                                                                        "\uc5d0 \uc870\uae08 \ub354 \uc775\uc219\ud574\uc9c4 \uacc4\uae30\uac00 \ub418" +
                                                                                "\uc5c8\uc744 \ubfd0 \uc544\ub2c8\ub77c, \uace0\uac1d\uc758 \ud655\ubcf4\uac00 " +
                                                                                "\uc911\uc694\ud55c \uc6f9\uc0ac\uc774\ud2b8\uc778 \ub9cc\ud07c \uc0ac\uc6a9" +
                                                                                "\uc790\uc758 \uc720\uc785\uacfc \uacbd\ud5d8\uc744 \uc704\ud574",
                                                                        " ",
                                                                        Object(a.jsx)("span", {
                                                                            className: wt.a.red,
                                                                            children: "\uac80\uc0c9\uc5d4\uc9c4\ucd5c\uc801\ud654(SEO)"
                                                                        }),
                                                                        "\uc640",
                                                                        " ",
                                                                        Object(a.jsx)("span", {
                                                                            className: wt.a.red,
                                                                            children: "UI & UX \uad6c\uc0c1"
                                                                        }),
                                                                        "\uc5d0 \ub9ce\uc740 \uacf5\uc744 \ub4e4\uc778 \ud504\ub85c\uc81d\ud2b8\uc785" +
                                                                                "\ub2c8\ub2e4.",
                                                                        Object(a.jsx)("p", {}),
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a["show-readme-btn"],
                                                                            onClick: function () {
                                                                                return b(4)
                                                                            },
                                                                            children: "\uc790\uc138\ud788 \ubcf4\uae30 \u25b6 README"
                                                                        })
                                                                    ]
                                                                }),
                                                                Object(a.jsxs)("div", {
                                                                    className: wt.a.description,
                                                                    children: [
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a.label,
                                                                            children: "\uc8fc\uc694 \uae30\ub2a5"
                                                                        }),
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a.value,
                                                                            children: "PT \uac00\uaca9, \ubb38\uc758 \ubc29\ubc95, \uc624\uc2dc\ub294 \uae38(Kakao Ma" +
                                                                                    "p), \ud2b8\ub808\uc774\ub108, \ub0b4\ubd80 \uc2dc\uc124, \ube14\ub85c\uadf8"
                                                                        })
                                                                    ]
                                                                }),
                                                                Object(a.jsxs)("div", {
                                                                    className: wt.a.description,
                                                                    children: [
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a.label,
                                                                            children: "GitHub"
                                                                        }),
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a.value,
                                                                            children: Object(a.jsx)("div", {
                                                                                className: wt.a.url,
                                                                                onClick: function () {
                                                                                    return window.open("https://github.com/hjcdg1/onepick")
                                                                                },
                                                                                children: "github.com/hjcdg1/onepick"
                                                                            })
                                                                        })
                                                                    ]
                                                                }),
                                                                Object(a.jsxs)("div", {
                                                                    className: wt.a.description,
                                                                    children: [
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a.label,
                                                                            children: "URL"
                                                                        }),
                                                                        Object(a.jsxs)("div", {
                                                                            className: wt.a.value,
                                                                            children: [
                                                                                Object(a.jsx)("div", {
                                                                                    className: wt.a.url,
                                                                                    onClick: function () {
                                                                                        return window.open("https://onepick-pt.com")
                                                                                    },
                                                                                    children: "onepick-pt.com"
                                                                                }),
                                                                                Object(a.jsx)("a", {href: "https://onepick-pt.com"}),
                                                                                " "
                                                                            ]
                                                                        })
                                                                    ]
                                                                }),
                                                                Object(a.jsxs)("div", {
                                                                    className: wt.a.description,
                                                                    children: [
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a.label,
                                                                            children: "Frontend"
                                                                        }),
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a.value,
                                                                            children: "Next.js, TypeScript, Sass"
                                                                        })
                                                                    ]
                                                                }),
                                                                Object(a.jsxs)("div", {
                                                                    className: wt.a.description,
                                                                    children: [
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a.label,
                                                                            children: "Deployment"
                                                                        }),
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a.value,
                                                                            children: "Vercel"
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        Object(a.jsxs)("div", {
                                            className: wt.a.project,
                                            children: [
                                                Object(a.jsx)("div", {
                                                    className: wt.a.title,
                                                    children: "\ud3ec\ud2b8\ud3f4\ub9ac\uc624 \uc6f9\uc0ac\uc774\ud2b8"
                                                }),
                                                Object(a.jsxs)("div", {
                                                    className: wt.a.period,
                                                    children: [
                                                        "2021.01\xa0",
                                                        Object(a.jsx)("span", {
                                                            className: wt.a["new-line-chunk"],
                                                            children: "(1\u4eba \uac1c\uc778 \ud504\ub85c\uc81d\ud2b8)"
                                                        })
                                                    ]
                                                }),
                                                Object(a.jsxs)("div", {
                                                    className: wt.a.info,
                                                    children: [
                                                        Object(a.jsxs)("div", {
                                                            className: wt.a["img-carousel"],
                                                            ref: u[3],
                                                            children: [
                                                                Object(a.jsxs)("div", {
                                                                    className: wt.a.imgs,
                                                                    children: [
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a["img-wrapper"],
                                                                            children: Object(a.jsx)("img", {
                                                                                className: wt.a.img,
                                                                                src: "/images/projects/portfolio/1.jpg",
                                                                                alt: ""
                                                                            })
                                                                        }),
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a["img-wrapper"],
                                                                            children: Object(a.jsx)("img", {
                                                                                className: wt.a.img,
                                                                                src: "/images/projects/portfolio/2.jpg",
                                                                                alt: ""
                                                                            })
                                                                        }),
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a["img-wrapper"],
                                                                            children: Object(a.jsx)("img", {
                                                                                className: wt.a.img,
                                                                                src: "/images/projects/portfolio/3.jpg",
                                                                                alt: ""
                                                                            })
                                                                        }),
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a["img-wrapper"],
                                                                            children: Object(a.jsx)("img", {
                                                                                className: wt.a.img,
                                                                                src: "/images/projects/portfolio/4.jpg",
                                                                                alt: ""
                                                                            })
                                                                        })
                                                                    ]
                                                                }),
                                                                Object(a.jsxs)("nav", {
                                                                    className: wt.a.nav,
                                                                    children: [
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a.prev,
                                                                            children: Object(a.jsx)("img", {
                                                                                src: "/images/arrow-left.svg",
                                                                                alt: ""
                                                                            })
                                                                        }),
                                                                        Object(a.jsx)("div", {className: wt.a.page}),
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a.next,
                                                                            children: Object(a.jsx)("img", {
                                                                                src: "/images/arrow-right.svg",
                                                                                alt: ""
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        Object(a.jsxs)("div", {
                                                            className: wt.a.descriptions,
                                                            children: [
                                                                Object(a.jsxs)("div", {
                                                                    className: wt.a["main-description"],
                                                                    children: [
                                                                        Object(a.jsx)("b", {
                                                                            children: "\ud3ec\ud2b8\ud3f4\ub9ac\uc624 \uc6a9\ub3c4\ub85c \uc81c\uc791\ud55c \uc6f9" +
                                                                                    "\uc0ac\uc774\ud2b8"
                                                                        }),
                                                                        "\uc785\ub2c8\ub2e4. \uc9c0\uae08 \ubcf4\uace0 \uc788\ub294 \ubc14\ub85c \uc774" +
                                                                                " \uc6f9\uc0ac\uc774\ud2b8\uc5d0 \ud574\ub2f9\ud569\ub2c8\ub2e4.",
                                                                        Object(a.jsx)("p", {}),
                                                                        "\uc774\ubbf8 \uc21c\uc218 React\ub85c \uac1c\ubc1c\uc744 \uc644\ub8cc\ud55c " +
                                                                                "\ud504\ub85c\uc81d\ud2b8\uc600\uc9c0\ub9cc,",
                                                                        " ",
                                                                        Object(a.jsx)("span", {
                                                                            className: wt.a.red,
                                                                            children: "Next.js"
                                                                        }),
                                                                        "\uc758 \ud559\uc2b5\uc744 \uc704\ud574 \uc774\ub97c Next.js\ub85c \ub2e4\uc2dc" +
                                                                                " \uac1c\ubc1c\ud558\uc600\uc2b5\ub2c8\ub2e4. \uadf8 \uacfc\uc815\uc5d0\uc11c " +
                                                                                "\uc11c\ubc84 \uc0ac\uc774\ub4dc \ub80c\ub354\ub9c1\uc744 \ud568\uaed8 \uc9c0" +
                                                                                "\uc6d0\ud558\ub294 Next.js\uc758 \uc704\ub300\ud568\uc744 \ub290\ub084 \uc218 " +
                                                                                "\uc788\uc5c8\uc2b5\ub2c8\ub2e4. \ub610\ud55c, ",
                                                                        Object(a.jsx)("span", {
                                                                            className: wt.a.red,
                                                                            children: "Vercel"
                                                                        }),
                                                                        "\uc744 \uc774\uc6a9\ud558\uc5ec \uc815\uc801 \uc6f9\uc0ac\uc774\ud2b8\uc758 Le" +
                                                                                "an\ud55c \ubc30\ud3ec\ub3c4 \uacbd\ud5d8\ud574\ubcfc \uc218 \uc788\uc5c8\uc2b5" +
                                                                                "\ub2c8\ub2e4.",
                                                                        Object(a.jsx)("p", {}),
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a["show-readme-btn"],
                                                                            onClick: function () {
                                                                                return b(3)
                                                                            },
                                                                            children: "\uc790\uc138\ud788 \ubcf4\uae30 \u25b6 README"
                                                                        })
                                                                    ]
                                                                }),
                                                                Object(a.jsxs)("div", {
                                                                    className: wt.a.description,
                                                                    children: [
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a.label,
                                                                            children: "\uc8fc\uc694 \uae30\ub2a5"
                                                                        }),
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a.value,
                                                                            children: "\uac04\ub2e8\ud55c \uc790\uae30\uc18c\uac1c, \uc778\uc801 \uc0ac\ud56d, \uae30" +
                                                                                    "\uc220 \uc2a4\ud0dd, GitHub \ubc0f \ud2f0\uc2a4\ud1a0\ub9ac \ub9c1\ud06c, " +
                                                                                    "\ud504\ub85c\uc81d\ud2b8 \uacbd\ud5d8, \uc5c5\ubb34 \uacbd\ub825"
                                                                        })
                                                                    ]
                                                                }),
                                                                Object(a.jsxs)("div", {
                                                                    className: wt.a.description,
                                                                    children: [
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a.label,
                                                                            children: "GitHub"
                                                                        }),
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a.value,
                                                                            children: Object(a.jsx)("div", {
                                                                                className: wt.a.url,
                                                                                onClick: function () {
                                                                                    return window.open("https://github.com/hjcdg1/portfolio_nextjs")
                                                                                },
                                                                                children: "github.com/hjcdg1/portfolio_nextjs"
                                                                            })
                                                                        })
                                                                    ]
                                                                }),
                                                                Object(a.jsxs)("div", {
                                                                    className: wt.a.description,
                                                                    children: [
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a.label,
                                                                            children: "URL"
                                                                        }),
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a.value,
                                                                            children: Object(a.jsx)("div", {
                                                                                className: wt.a.url,
                                                                                onClick: function () {
                                                                                    return window.open("https://cdg-portfolio.com")
                                                                                },
                                                                                children: "cdg-portfolio.com"
                                                                            })
                                                                        })
                                                                    ]
                                                                }),
                                                                Object(a.jsxs)("div", {
                                                                    className: wt.a.description,
                                                                    children: [
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a.label,
                                                                            children: "Frontend"
                                                                        }),
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a.value,
                                                                            children: "Next.js, TypeScript, Sass"
                                                                        })
                                                                    ]
                                                                }),
                                                                Object(a.jsxs)("div", {
                                                                    className: wt.a.description,
                                                                    children: [
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a.label,
                                                                            children: "Deployment"
                                                                        }),
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a.value,
                                                                            children: "Vercel"
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        Object(a.jsxs)("div", {
                                            className: wt.a.project,
                                            children: [
                                                Object(a.jsx)("div", {
                                                    className: wt.a.title,
                                                    children: "\ud587\ubd09 \uc704\ud0a4 (React, Django)"
                                                }),
                                                Object(a.jsxs)("div", {
                                                    className: wt.a.period,
                                                    children: [
                                                        "2020.08 - 2020.11\xa0",
                                                        Object(a.jsx)("span", {
                                                            className: wt.a["new-line-chunk"],
                                                            children: "(1\u4eba \uac1c\uc778 \ud504\ub85c\uc81d\ud2b8)"
                                                        })
                                                    ]
                                                }),
                                                Object(a.jsxs)("div", {
                                                    className: wt.a.info,
                                                    children: [
                                                        Object(a.jsxs)("div", {
                                                            className: wt.a["img-carousel"],
                                                            ref: u[2],
                                                            children: [
                                                                Object(a.jsxs)("div", {
                                                                    className: wt.a.imgs,
                                                                    children: [
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a["img-wrapper"],
                                                                            children: Object(a.jsx)("img", {
                                                                                className: wt.a.img,
                                                                                src: "/images/projects/hatbbong-wiki/1.jpg",
                                                                                alt: ""
                                                                            })
                                                                        }),
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a["img-wrapper"],
                                                                            children: Object(a.jsx)("img", {
                                                                                className: wt.a.img,
                                                                                src: "/images/projects/hatbbong-wiki/2.jpg",
                                                                                alt: ""
                                                                            })
                                                                        }),
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a["img-wrapper"],
                                                                            children: Object(a.jsx)("img", {
                                                                                className: wt.a.img,
                                                                                src: "/images/projects/hatbbong-wiki/3.jpg",
                                                                                alt: ""
                                                                            })
                                                                        }),
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a["img-wrapper"],
                                                                            children: Object(a.jsx)("img", {
                                                                                className: wt.a.img,
                                                                                src: "/images/projects/hatbbong-wiki/4.jpg",
                                                                                alt: ""
                                                                            })
                                                                        }),
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a["img-wrapper"],
                                                                            children: Object(a.jsx)("img", {
                                                                                className: wt.a.img,
                                                                                src: "/images/projects/hatbbong-wiki/5.jpg",
                                                                                alt: ""
                                                                            })
                                                                        }),
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a["img-wrapper"],
                                                                            children: Object(a.jsx)("img", {
                                                                                className: wt.a.img,
                                                                                src: "/images/projects/hatbbong-wiki/6.jpg",
                                                                                alt: ""
                                                                            })
                                                                        }),
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a["img-wrapper"],
                                                                            children: Object(a.jsx)("img", {
                                                                                className: wt.a.img,
                                                                                src: "/images/projects/hatbbong-wiki/7.jpg",
                                                                                alt: ""
                                                                            })
                                                                        }),
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a["img-wrapper"],
                                                                            children: Object(a.jsx)("img", {
                                                                                className: wt.a.img,
                                                                                src: "/images/projects/hatbbong-wiki/8.jpg",
                                                                                alt: ""
                                                                            })
                                                                        }),
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a["img-wrapper"],
                                                                            children: Object(a.jsx)("img", {
                                                                                className: wt.a.img,
                                                                                src: "/images/projects/hatbbong-wiki/9.jpg",
                                                                                alt: ""
                                                                            })
                                                                        }),
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a["img-wrapper"],
                                                                            children: Object(a.jsx)("img", {
                                                                                className: wt.a.img,
                                                                                src: "/images/projects/hatbbong-wiki/10.jpg",
                                                                                alt: ""
                                                                            })
                                                                        })
                                                                    ]
                                                                }),
                                                                Object(a.jsxs)("nav", {
                                                                    className: wt.a.nav,
                                                                    children: [
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a.prev,
                                                                            children: Object(a.jsx)("img", {
                                                                                src: "/images/arrow-left.svg",
                                                                                alt: ""
                                                                            })
                                                                        }),
                                                                        Object(a.jsx)("div", {className: wt.a.page}),
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a.next,
                                                                            children: Object(a.jsx)("img", {
                                                                                src: "/images/arrow-right.svg",
                                                                                alt: ""
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        Object(a.jsxs)("div", {
                                                            className: wt.a.descriptions,
                                                            children: [
                                                                Object(a.jsxs)("div", {
                                                                    className: wt.a["main-description"],
                                                                    children: [
                                                                        Object(a.jsx)("b", {
                                                                            children: "\uc11c\uc6b8\ub300\ud559\uad50 \uc911\uc559 \ub3d9\uc544\ub9ac \ud587\ube5b" +
                                                                                    "\ubd09\uc0ac\ub2e8\uc5d0 \uad00\ud55c \uc720\uc775\ud55c \uc815\ubcf4\ub4e4" +
                                                                                    "\uc744 \ubb38\uc11c\ud654\ud558\uc5ec \uc81c\uacf5\ud574\uc8fc\ub294 \uc6f9 " +
                                                                                    "\uc11c\ube44\uc2a4"
                                                                        }),
                                                                        "\uc785\ub2c8\ub2e4. \ud574\ub2f9 \ub3d9\uc544\ub9ac \ud65c\ub3d9\uc744 \ud558" +
                                                                                "\ub358 \ub2f9\uc2dc \ub3d9\uc544\ub9ac\uc758 \uaddc\ubaa8\uc5d0 \ube44\ud574 " +
                                                                                "\uc81c\ub300\ub85c \ub41c \ub300\ud45c \uc6f9\uc0ac\uc774\ud2b8\uac00 \uc5c6" +
                                                                                "\uc5c8\ub2e4\ub294 \uc810\uc774 \uc544\uc26c\uc6cc \uad6c\uc0c1\ud588\uc5c8" +
                                                                                "\ub358 \uc544\uc774\ub514\uc5b4\ub97c \ubc14\ud0d5\uc73c\ub85c \uac1c\ubc1c" +
                                                                                "\ud558\uc600\uc2b5\ub2c8\ub2e4.",
                                                                        Object(a.jsx)("p", {}),
                                                                        "\uc774\ubbf8 Django \ud480 \uc2a4\ud0dd\uc73c\ub85c \uac1c\ubc1c\uc744 \uc644" +
                                                                                "\ub8cc\ud55c \ud504\ub85c\uc81d\ud2b8\uc600\uc9c0\ub9cc,",
                                                                        " ",
                                                                        Object(a.jsx)("span", {
                                                                            className: wt.a.red,
                                                                            children: "React"
                                                                        }),
                                                                        "\uc758 \ud559\uc2b5\uc744 \uc704\ud574 \uc774\ub97c React\uc640 Django\ub97c " +
                                                                                "\uc774\uc6a9\ud558\uc5ec \ub2e4\uc2dc \uac1c\ubc1c\ud558\uc600\uc2b5\ub2c8" +
                                                                                "\ub2e4. \uadf8 \uacfc\uc815\uc5d0\uc11c",
                                                                        " ",
                                                                        Object(a.jsx)("span", {
                                                                            className: wt.a.red,
                                                                            children: "Django REST Framework"
                                                                        }),
                                                                        "\ub3c4 \ud559\uc2b5\ud558\uc5ec \ubc31 \uc5d4\ub4dc \uc9c0\uc2dd\uc744 \ub354" +
                                                                                "\uc6b1 \ud0c4\ud0c4\ud788 \ud558\uc600\uace0, AWS\uc758 \ub9ac\uc18c\uc2a4" +
                                                                                "\ub4e4\uc744 \uc9c1\uc811 \ud560\ub2f9, \uc5f0\uacb0, \uc124\uc815\ud558\uba74" +
                                                                                "\uc11c",
                                                                        " ",
                                                                        Object(a.jsx)("span", {
                                                                            className: wt.a.red,
                                                                            children: "\ubc30\ud3ec \uacbd\ud5d8"
                                                                        }),
                                                                        "\ub3c4 \uc313\uc744 \uc218 \uc788\uc5c8\uc2b5\ub2c8\ub2e4.",
                                                                        Object(a.jsx)("p", {}),
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a["show-readme-btn"],
                                                                            onClick: function () {
                                                                                return b(2)
                                                                            },
                                                                            children: "\uc790\uc138\ud788 \ubcf4\uae30 \u25b6 README"
                                                                        })
                                                                    ]
                                                                }),
                                                                Object(a.jsxs)("div", {
                                                                    className: wt.a.description,
                                                                    children: [
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a.label,
                                                                            children: "\uc8fc\uc694 \uae30\ub2a5"
                                                                        }),
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a.value,
                                                                            children: '"\ud587\ubd09 \uc704\ud0a4 (Django \ud480 \uc2a4\ud0dd)"\uacfc \ub3d9\uc77c'
                                                                        })
                                                                    ]
                                                                }),
                                                                Object(a.jsxs)("div", {
                                                                    className: wt.a.description,
                                                                    children: [
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a.label,
                                                                            children: "GitHub"
                                                                        }),
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a.value,
                                                                            children: Object(a.jsx)("div", {
                                                                                className: wt.a.url,
                                                                                onClick: function () {
                                                                                    return window.open("https://github.com/hjcdg1/hatbbong_wiki_react")
                                                                                },
                                                                                children: "github.com/hjcdg1/hatbbong_wiki_react"
                                                                            })
                                                                        })
                                                                    ]
                                                                }),
                                                                Object(a.jsxs)("div", {
                                                                    className: wt.a.description,
                                                                    children: [
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a.label,
                                                                            children: "Frontend"
                                                                        }),
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a.value,
                                                                            children: "React, Redux, Redux-Thunk, Redux-Saga, TypeScript, Sass, Bootstrap"
                                                                        })
                                                                    ]
                                                                }),
                                                                Object(a.jsxs)("div", {
                                                                    className: wt.a.description,
                                                                    children: [
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a.label,
                                                                            children: "Backend"
                                                                        }),
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a.value,
                                                                            children: "Django REST Framework"
                                                                        })
                                                                    ]
                                                                }),
                                                                Object(a.jsxs)("div", {
                                                                    className: wt.a.description,
                                                                    children: [
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a.label,
                                                                            children: "Database"
                                                                        }),
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a.value,
                                                                            children: "PostgreSQL"
                                                                        })
                                                                    ]
                                                                }),
                                                                Object(a.jsxs)("div", {
                                                                    className: wt.a.description,
                                                                    children: [
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a.label,
                                                                            children: "Deployment"
                                                                        }),
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a.value,
                                                                            children: "AWS (EC2, RDS)"
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        Object(a.jsxs)("div", {
                                            className: wt.a.project,
                                            children: [
                                                Object(a.jsx)("div", {
                                                    className: wt.a.title,
                                                    children: "\ud587\ubd09 \uc704\ud0a4 (Django \ud480 \uc2a4\ud0dd)"
                                                }),
                                                Object(a.jsxs)("div", {
                                                    className: wt.a.period,
                                                    children: [
                                                        "2020.05 - 2020.06\xa0",
                                                        Object(a.jsx)("span", {
                                                            className: wt.a["new-line-chunk"],
                                                            children: "(1\u4eba \uac1c\uc778 \ud504\ub85c\uc81d\ud2b8)"
                                                        })
                                                    ]
                                                }),
                                                Object(a.jsxs)("div", {
                                                    className: wt.a.info,
                                                    children: [
                                                        Object(a.jsxs)("div", {
                                                            className: wt.a["img-carousel"],
                                                            ref: u[1],
                                                            children: [
                                                                Object(a.jsxs)("div", {
                                                                    className: wt.a.imgs,
                                                                    children: [
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a["img-wrapper"],
                                                                            children: Object(a.jsx)("img", {
                                                                                className: wt.a.img,
                                                                                src: "/images/projects/hatbbong-wiki/1.jpg",
                                                                                alt: ""
                                                                            })
                                                                        }),
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a["img-wrapper"],
                                                                            children: Object(a.jsx)("img", {
                                                                                className: wt.a.img,
                                                                                src: "/images/projects/hatbbong-wiki/2.jpg",
                                                                                alt: ""
                                                                            })
                                                                        }),
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a["img-wrapper"],
                                                                            children: Object(a.jsx)("img", {
                                                                                className: wt.a.img,
                                                                                src: "/images/projects/hatbbong-wiki/3.jpg",
                                                                                alt: ""
                                                                            })
                                                                        }),
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a["img-wrapper"],
                                                                            children: Object(a.jsx)("img", {
                                                                                className: wt.a.img,
                                                                                src: "/images/projects/hatbbong-wiki/4.jpg",
                                                                                alt: ""
                                                                            })
                                                                        }),
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a["img-wrapper"],
                                                                            children: Object(a.jsx)("img", {
                                                                                className: wt.a.img,
                                                                                src: "/images/projects/hatbbong-wiki/5.jpg",
                                                                                alt: ""
                                                                            })
                                                                        }),
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a["img-wrapper"],
                                                                            children: Object(a.jsx)("img", {
                                                                                className: wt.a.img,
                                                                                src: "/images/projects/hatbbong-wiki/6.jpg",
                                                                                alt: ""
                                                                            })
                                                                        }),
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a["img-wrapper"],
                                                                            children: Object(a.jsx)("img", {
                                                                                className: wt.a.img,
                                                                                src: "/images/projects/hatbbong-wiki/7.jpg",
                                                                                alt: ""
                                                                            })
                                                                        }),
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a["img-wrapper"],
                                                                            children: Object(a.jsx)("img", {
                                                                                className: wt.a.img,
                                                                                src: "/images/projects/hatbbong-wiki/8.jpg",
                                                                                alt: ""
                                                                            })
                                                                        }),
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a["img-wrapper"],
                                                                            children: Object(a.jsx)("img", {
                                                                                className: wt.a.img,
                                                                                src: "/images/projects/hatbbong-wiki/9.jpg",
                                                                                alt: ""
                                                                            })
                                                                        }),
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a["img-wrapper"],
                                                                            children: Object(a.jsx)("img", {
                                                                                className: wt.a.img,
                                                                                src: "/images/projects/hatbbong-wiki/10.jpg",
                                                                                alt: ""
                                                                            })
                                                                        })
                                                                    ]
                                                                }),
                                                                Object(a.jsxs)("nav", {
                                                                    className: wt.a.nav,
                                                                    children: [
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a.prev,
                                                                            children: Object(a.jsx)("img", {
                                                                                src: "/images/arrow-left.svg",
                                                                                alt: ""
                                                                            })
                                                                        }),
                                                                        Object(a.jsx)("div", {className: wt.a.page}),
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a.next,
                                                                            children: Object(a.jsx)("img", {
                                                                                src: "/images/arrow-right.svg",
                                                                                alt: ""
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        Object(a.jsxs)("div", {
                                                            className: wt.a.descriptions,
                                                            children: [
                                                                Object(a.jsxs)("div", {
                                                                    className: wt.a["main-description"],
                                                                    children: [
                                                                        Object(a.jsx)("b", {
                                                                            children: "\uc11c\uc6b8\ub300\ud559\uad50 \uc911\uc559 \ub3d9\uc544\ub9ac \ud587\ube5b" +
                                                                                    "\ubd09\uc0ac\ub2e8\uc5d0 \uad00\ud55c \uc720\uc775\ud55c \uc815\ubcf4\ub4e4" +
                                                                                    "\uc744 \ubb38\uc11c\ud654\ud558\uc5ec \uc81c\uacf5\ud574\uc8fc\ub294 \uc6f9 " +
                                                                                    "\uc11c\ube44\uc2a4"
                                                                        }),
                                                                        "\uc785\ub2c8\ub2e4. \ud574\ub2f9 \ub3d9\uc544\ub9ac \ud65c\ub3d9\uc744 \ud558" +
                                                                                "\ub358 \ub2f9\uc2dc \ub3d9\uc544\ub9ac\uc758 \uaddc\ubaa8\uc5d0 \ube44\ud574 " +
                                                                                "\uc81c\ub300\ub85c \ub41c \ub300\ud45c \uc6f9\uc0ac\uc774\ud2b8\uac00 \uc5c6" +
                                                                                "\uc5c8\ub2e4\ub294 \uc810\uc774 \uc544\uc26c\uc6cc \uad6c\uc0c1\ud588\uc5c8" +
                                                                                "\ub358 \uc544\uc774\ub514\uc5b4\ub97c \ubc14\ud0d5\uc73c\ub85c \uac1c\ubc1c" +
                                                                                "\ud558\uc600\uc2b5\ub2c8\ub2e4.",
                                                                        Object(a.jsx)("p", {}),
                                                                        "\ud504\ub860\ud2b8 \uc5d4\ub4dc\uc640 \ubc31 \uc5d4\ub4dc\ub97c \ubaa8\ub450 D" +
                                                                                "jango\ub85c \uad6c\ud604\ud55c \uc6d0\uc2dc\uc801\uc778 \ud615\ud0dc\uc758 " +
                                                                                "\uc6f9 \uc5b4\ud50c\ub9ac\ucf00\uc774\uc158\uc785\ub2c8\ub2e4.",
                                                                        " ",
                                                                        Object(a.jsx)("span", {
                                                                            className: wt.a.red,
                                                                            children: "\ud604\uc7ac \ud68c\uc0ac\uc5d0\uc11c \ucc44\ud0dd\ud558\uace0 \uc788\ub294 " +
                                                                                    "\ud658\uacbd \ubc0f \uae30\uc220\uc5d0 \ub300\ud55c \uc644\uc804\ud55c \uc774" +
                                                                                    "\ud574"
                                                                        }),
                                                                        "\ub97c \ubaa9\uc801\uc73c\ub85c \uc9c4\ud589\ud55c \ud504\ub85c\uc81d\ud2b8" +
                                                                                "\uc785\ub2c8\ub2e4.",
                                                                        Object(a.jsx)("p", {}),
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a["show-readme-btn"],
                                                                            onClick: function () {
                                                                                return b(1)
                                                                            },
                                                                            children: "\uc790\uc138\ud788 \ubcf4\uae30 \u25b6 README"
                                                                        })
                                                                    ]
                                                                }),
                                                                Object(a.jsxs)("div", {
                                                                    className: wt.a.description,
                                                                    children: [
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a.label,
                                                                            children: "\uc8fc\uc694 \uae30\ub2a5"
                                                                        }),
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a.value,
                                                                            children: "\ud559\uad50 \uba54\uc77c \uc778\uc99d, \ubb38\uc11c \uc870\ud68c, \ubb38" +
                                                                                    "\uc11c \ucd94\uac00/\ud3b8\uc9d1 \uc694\uccad \ubc0f \ud1a0\ub860, \ubb38" +
                                                                                    "\uc11c \ubcc0\uacbd \ub0b4\uc5ed \uc870\ud68c (Git\uacfc \uc720\uc0ac\ud55c UI" +
                                                                                    "), \ucee4\ubba4\ub2c8\ud2f0 (\uacf5\uc9c0 \uac8c\uc2dc\ud310, \uc790\uc720 " +
                                                                                    "\uac8c\uc2dc\ud310), \uc2e0\uace0 \ubc0f \uacbd\uace0 \uc81c\ub3c4"
                                                                        })
                                                                    ]
                                                                }),
                                                                Object(a.jsxs)("div", {
                                                                    className: wt.a.description,
                                                                    children: [
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a.label,
                                                                            children: "GitHub"
                                                                        }),
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a.value,
                                                                            children: Object(a.jsx)("div", {
                                                                                className: wt.a.url,
                                                                                onClick: function () {
                                                                                    return window.open("https://github.com/hjcdg1/hatbbong_wiki")
                                                                                },
                                                                                children: "github.com/hjcdg1/hatbbong_wiki"
                                                                            })
                                                                        })
                                                                    ]
                                                                }),
                                                                Object(a.jsxs)("div", {
                                                                    className: wt.a.description,
                                                                    children: [
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a.label,
                                                                            children: "Frontend"
                                                                        }),
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a.value,
                                                                            children: "Django Template Engine, Vanilla JS, jQuery, Bootstrap"
                                                                        })
                                                                    ]
                                                                }),
                                                                Object(a.jsxs)("div", {
                                                                    className: wt.a.description,
                                                                    children: [
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a.label,
                                                                            children: "Backend"
                                                                        }),
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a.value,
                                                                            children: "Django"
                                                                        })
                                                                    ]
                                                                }),
                                                                Object(a.jsxs)("div", {
                                                                    className: wt.a.description,
                                                                    children: [
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a.label,
                                                                            children: "Database"
                                                                        }),
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a.value,
                                                                            children: "PostgreSQL"
                                                                        })
                                                                    ]
                                                                }),
                                                                Object(a.jsxs)("div", {
                                                                    className: wt.a.description,
                                                                    children: [
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a.label,
                                                                            children: "Deployment"
                                                                        }),
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a.value,
                                                                            children: "AWS (Elastic Beanstalk), Circle CI"
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        Object(a.jsxs)("div", {
                                            className: wt.a.project,
                                            children: [
                                                Object(a.jsx)("div", {
                                                    className: wt.a.title,
                                                    children: "SNU Moyeo (\ud63c\uc790 \ud558\uba74 \ud798\ub4e0, \ud568\uaed8 \ud558\uba74 " +
                                                            "\uc26c\uc6b4)"
                                                }),
                                                Object(a.jsxs)("div", {
                                                    className: wt.a.period,
                                                    children: [
                                                        "2019.03 - 2019.06\xa0",
                                                        Object(a.jsx)("span", {
                                                            className: wt.a["new-line-chunk"],
                                                            children: "(\ud559\ubd80 3\ud559\ub144 \uc218\uc5c5 4\u4eba \ud300 \ud504\ub85c\uc81d" +
                                                                    "\ud2b8)"
                                                        })
                                                    ]
                                                }),
                                                Object(a.jsxs)("div", {
                                                    className: wt.a.info,
                                                    children: [
                                                        Object(a.jsxs)("div", {
                                                            className: wt.a["img-carousel"],
                                                            ref: u[0],
                                                            children: [
                                                                Object(a.jsxs)("div", {
                                                                    className: wt.a.imgs,
                                                                    children: [
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a["img-wrapper"],
                                                                            children: Object(a.jsx)("img", {
                                                                                className: wt.a.img,
                                                                                src: "/images/projects/snu-moyeo/1.jpg",
                                                                                alt: ""
                                                                            })
                                                                        }),
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a["img-wrapper"],
                                                                            children: Object(a.jsx)("img", {
                                                                                className: wt.a.img,
                                                                                src: "/images/projects/snu-moyeo/2.jpg",
                                                                                alt: ""
                                                                            })
                                                                        }),
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a["img-wrapper"],
                                                                            children: Object(a.jsx)("img", {
                                                                                className: wt.a.img,
                                                                                src: "/images/projects/snu-moyeo/3.jpg",
                                                                                alt: ""
                                                                            })
                                                                        }),
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a["img-wrapper"],
                                                                            children: Object(a.jsx)("img", {
                                                                                className: wt.a.img,
                                                                                src: "/images/projects/snu-moyeo/4.jpg",
                                                                                alt: ""
                                                                            })
                                                                        }),
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a["img-wrapper"],
                                                                            children: Object(a.jsx)("img", {
                                                                                className: wt.a.img,
                                                                                src: "/images/projects/snu-moyeo/5.jpg",
                                                                                alt: ""
                                                                            })
                                                                        })
                                                                    ]
                                                                }),
                                                                Object(a.jsxs)("nav", {
                                                                    className: wt.a.nav,
                                                                    children: [
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a.prev,
                                                                            children: Object(a.jsx)("img", {
                                                                                src: "/images/arrow-left.svg",
                                                                                alt: ""
                                                                            })
                                                                        }),
                                                                        Object(a.jsx)("div", {className: wt.a.page}),
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a.next,
                                                                            children: Object(a.jsx)("img", {
                                                                                src: "/images/arrow-right.svg",
                                                                                alt: ""
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        Object(a.jsxs)("div", {
                                                            className: wt.a.descriptions,
                                                            children: [
                                                                Object(a.jsxs)("div", {
                                                                    className: wt.a["main-description"],
                                                                    children: [
                                                                        Object(a.jsx)("b", {
                                                                            children: "\uc11c\uc6b8\ub300\ud559\uad50 \ud559\uc0dd\ub4e4\uc774 \uc27d\uac8c \uc784" +
                                                                                    "\uc2dc\uc801/\uc7a5\uae30\uc801 \ubaa8\uc784\uc744 \uad6c\uc131\ud558\uace0 " +
                                                                                    "\uc774\uc5d0 \ucc38\uc5ec\ud560 \uc218 \uc788\ub3c4\ub85d \ub3d5\ub294 \uc6f9 " +
                                                                                    "\uc11c\ube44\uc2a4"
                                                                        }),
                                                                        "\uc785\ub2c8\ub2e4. \ud559\uad50 \ub0b4\uc5d0\uc11c \uc784\uc2dc\ub85c \ud639" +
                                                                                "\uc740 \uc7a5\uae30\uc801\uc73c\ub85c \uc5b4\ub5a0\ud55c \ubaa9\uc801\uc744 " +
                                                                                "\ud568\uaed8 \ud560 \ub204\uad70\uac00\ub97c \uac04\ud3b8\ud558\uac8c \ucc3e" +
                                                                                "\uc744 \uc218 \uc788\ub3c4\ub85d \ub3d5\ub294 \uac83\uc744 \ubaa9\uc801\uc73c" +
                                                                                "\ub85c \ud569\ub2c8\ub2e4.",
                                                                        Object(a.jsx)("p", {}),
                                                                        "\ucc98\uc74c\uc73c\ub85c ",
                                                                        Object(a.jsx)("span", {
                                                                            className: wt.a.red,
                                                                            children: "Git"
                                                                        }),
                                                                        "\uc744 \uc774\uc6a9\ud558\uc5ec \ub2e4\ub978 \uc0ac\ub78c\ub4e4\uacfc \ud611" +
                                                                                "\uc5c5\uc744 \ud574\ubcf4\uace0, ",
                                                                        Object(a.jsx)("span", {
                                                                            className: wt.a.red,
                                                                            children: "HTML, CSS, JavaScript"
                                                                        }),
                                                                        "\uc640 \ud568\uaed8",
                                                                        " ",
                                                                        Object(a.jsx)("span", {
                                                                            className: wt.a.red,
                                                                            children: "React, Django"
                                                                        }),
                                                                        "\ub97c \ubc30\uc6b0\uba74\uc11c \uc6f9 \uac1c\ubc1c\uc758 \uae30\ubcf8 \uc9c0" +
                                                                                "\uc2dd\uc744 \uc313\uc744 \uc218 \uc788\uc5c8\ub358 \ud504\ub85c\uc81d\ud2b8" +
                                                                                "\uc785\ub2c8\ub2e4. \ub610\ud55c \uc800\uc5d0\uac8c \ucc98\uc74c\uc73c\ub85c",
                                                                        " ",
                                                                        Object(a.jsx)("span", {
                                                                            className: wt.a.red,
                                                                            children: "\uc6f9 \uac1c\ubc1c"
                                                                        }),
                                                                        "\uc774\ub77c\ub294 \ub9e4\ub825\uc801\uc778 \ubd84\uc57c\ub97c \uc54c\ub824" +
                                                                                "\uc900 \uacc4\uae30\uc774\uae30\ub3c4 \ud569\ub2c8\ub2e4.",
                                                                        Object(a.jsx)("p", {}),
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a["show-readme-btn"],
                                                                            onClick: function () {
                                                                                return b(0)
                                                                            },
                                                                            children: "\uc790\uc138\ud788 \ubcf4\uae30 \u25b6 README"
                                                                        })
                                                                    ]
                                                                }),
                                                                Object(a.jsxs)("div", {
                                                                    className: wt.a.description,
                                                                    children: [
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a.label,
                                                                            children: "\uc8fc\uc694 \uae30\ub2a5"
                                                                        }),
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a.value,
                                                                            children: "\ud559\uad50 \uba54\uc77c \uc778\uc99d, \ubaa8\uc784 \uc0dd\uc131/\ucc38\uac00" +
                                                                                    "/\ud0c8\ud1f4/\ubaa8\uc9d1/\ub9c8\uac10, \uc2e0\uace0 \ubc0f \ubc8c\uc810 " +
                                                                                    "\uc81c\ub3c4"
                                                                        })
                                                                    ]
                                                                }),
                                                                Object(a.jsxs)("div", {
                                                                    className: wt.a.description,
                                                                    children: [
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a.label,
                                                                            children: "GitHub"
                                                                        }),
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a.value,
                                                                            children: Object(a.jsx)("div", {
                                                                                className: wt.a.url,
                                                                                onClick: function () {
                                                                                    return window.open("https://github.com/hjcdg1/swpp_cjlk")
                                                                                },
                                                                                children: "github.com/hjcdg1/swpp_cjlk"
                                                                            })
                                                                        })
                                                                    ]
                                                                }),
                                                                Object(a.jsxs)("div", {
                                                                    className: wt.a.description,
                                                                    children: [
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a.label,
                                                                            children: "Frontend"
                                                                        }),
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a.value,
                                                                            children: "(Atomic) React, Redux, Redux-Saga"
                                                                        })
                                                                    ]
                                                                }),
                                                                Object(a.jsxs)("div", {
                                                                    className: wt.a.description,
                                                                    children: [
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a.label,
                                                                            children: "Backend"
                                                                        }),
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a.value,
                                                                            children: "Django REST Framework"
                                                                        })
                                                                    ]
                                                                }),
                                                                Object(a.jsxs)("div", {
                                                                    className: wt.a.description,
                                                                    children: [
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a.label,
                                                                            children: "Database"
                                                                        }),
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a.value,
                                                                            children: "SQLite3"
                                                                        })
                                                                    ]
                                                                }),
                                                                Object(a.jsxs)("div", {
                                                                    className: wt.a.description,
                                                                    children: [
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a.label,
                                                                            children: "Deployment"
                                                                        }),
                                                                        Object(a.jsx)("div", {
                                                                            className: wt.a.value,
                                                                            children: "AWS (EC2)"
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        Object(a.jsxs)(Ot, {
                            contentClassName: wt.a["modal-content"],
                            show: i,
                            onHide: p,
                            centered: !0,
                            fullscreen: !0,
                            children: [
                                Object(a.jsx)(Ot.Header, {
                                    className: wt.a["modal-header"],
                                    children: "README.md"
                                }),
                                Object(a.jsx)(Ot.Body, {
                                    className: wt.a["modal-body"],
                                    dangerouslySetInnerHTML: {
                                        __html: d
                                    }
                                })
                            ]
                        })
                    ]
                })
            }
            var yt = i
                    .a
                    .memo(_t, (function () {
                        return !0
                    })),
                kt = s("rOdJ"),
                Et = s.n(kt);
            function Ct() {
                return Object(a.jsx)("article", {
                    className: Et.a.Career,
                    id: "career",
                    children: Object(a.jsxs)("div", {
                        className: Et.a.content,
                        children: [
                            Object(a.jsx)(y, {
                                text: "CAREER",
                                elementId: "career",
                                color: j,
                                borderColor: j,
                                isWhiteLink: !1
                            }),
                            Object(a.jsx)("div", {
                                className: Et.a.companies,
                                children: Object(a.jsxs)("div", {
                                    className: Et.a.company,
                                    children: [
                                        Object(a.jsx)("div", {
                                            className: Et.a["logo-container"],
                                            children: Object(a.jsx)("div", {
                                                className: Et.a["logo-wrapper"],
                                                children: Object(a.jsx)("img", {
                                                    className: Et.a.logo,
                                                    src: "/images/career/opengallery.png",
                                                    alt: ""
                                                })
                                            })
                                        }),
                                        Object(a.jsxs)("div", {
                                            className: Et.a.info,
                                            children: [
                                                Object(a.jsx)("div", {
                                                    className: Et.a.title,
                                                    children: "(\uc8fc) \uc624\ud508\uac24\ub7ec\ub9ac"
                                                }),
                                                Object(a.jsx)("div", {
                                                    className: Et.a.period,
                                                    children: "2019.08 - \ud604\uc7ac"
                                                }),
                                                Object(a.jsxs)("div", {
                                                    className: Et.a.description,
                                                    children: [
                                                        "\uadf8\ub9bc\uc744 \ub80c\ud0c8\ud558\ub824\ub294 \uace0\uac1d\ub4e4\uacfc " +
                                                                "\uadf8\ub9bc\uc744 \uadf8\ub9ac\ub294 \uc791\uac00\ub4e4\uc744 \uc911\uac1c" +
                                                                "\ud558\ub294",
                                                        " ",
                                                        Object(a.jsx)(
                                                            "b",
                                                            {children: "\uadf8\ub9bc \ub80c\ud0c8 \uc11c\ube44\uc2a4 \ud50c\ub7ab\ud3fc"}
                                                        ),
                                                        "\uc785\ub2c8\ub2e4.",
                                                        Object(a.jsx)("br", {}),
                                                        Object(a.jsx)("br", {}),
                                                        "\uae30\ubcf8\uc801\uc73c\ub85c\ub294 ",
                                                        Object(a.jsx)("b", {
                                                            children: "Django \ud504\ub808\uc784\uc6cc\ud06c \uae30\ubc18\uc758 \ud480 \uc2a4\ud0dd " +
                                                                    "\uc6f9 \uac1c\ubc1c \uc5c5\ubb34"
                                                        }),
                                                        "\ub97c \ucd1d\uad04 \ub2f4\ub2f9\ud558\uace0 \uc788\uc73c\uba70, \uae30\uc220 " +
                                                                "\uc2a4\ud0dd\uc758 \uc804\ud658\uc744 \uc704\ud55c ",
                                                        Object(a.jsx)(
                                                            "b",
                                                            {children: "\uc11c\ubc84 \ubc30\ud3ec \ub77c\uc778\uc758 \uad00\ub9ac"}
                                                        ),
                                                        " \ubc0f",
                                                        " ",
                                                        Object(a.jsx)("b", {
                                                            children: "\uac01\uc885 \ud504\ub860\ud2b8 \uc5d4\ub4dc \uad00\ub828 \uc9c0\uc2dd\uc758 " +
                                                                    "\uad50\uc721"
                                                        }),
                                                        ", \uadf8\ub9ac\uace0 ",
                                                        Object(a.jsx)(
                                                            "b",
                                                            {children: "\uc2e0\uc785 \uac1c\ubc1c\uc790\uc758 \uc0ac\uc218 \uc5ed\ud560"}
                                                        ),
                                                        " \ub4f1\uc758 \uae30\ud0c0 \uc5c5\ubb34\uae4c\uc9c0 \ud568\uaed8 \ub2f4\ub2f9" +
                                                                "\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4."
                                                    ]
                                                }),
                                                Object(a.jsxs)("ul", {
                                                    className: Et.a.works,
                                                    children: [
                                                        Object(a.jsx)("h4", {
                                                            className: Et.a["works-title"],
                                                            children: "\u258e \ubc31 \uc624\ud53c\uc2a4\uc758 \uc804\ubc18\uc801\uc778 \uad00\ub9ac " +
                                                                    "\ubc0f \uac01\uc885 \uae30\ub2a5 \ucd94\uac00/\uac1c\uc120"
                                                        }),
                                                        Object(a.jsx)("h5", {
                                                            className: Et.a["works-period"],
                                                            children: "2019\ub144 \ud558\ubc18\uae30 ~ \ud604\uc7ac"
                                                        }),
                                                        Object(a.jsx)("li", {
                                                            children: "\uace0\uac1d \uc720\uc785 \ud750\ub984 \ud30c\uc545\uc744 \uc704\ud55c \uc5c5" +
                                                                    "\ubb34 \ud504\ub85c\uc138\uc2a4 \uad00\ub828 \ub370\uc774\ud130 \ub300\uaddc" +
                                                                    "\ubaa8 \uc5f0\ub3d9 (Funnel)"
                                                        }),
                                                        Object(a.jsx)("li", {
                                                            children: "\uadf8\ub9bc \ud53d\uc5c5/\uc124\uce58/\ucca0\uc218/\ubc18\ub0a9 \uc77c\uc815" +
                                                                    "\uc758 \uad00\ub9ac\ub97c \uc704\ud55c \uce98\ub9b0\ub354 \ud398\uc774\uc9c0 " +
                                                                    "\uae30\ud68d \ubc0f \uac1c\ubc1c"
                                                        }),
                                                        Object(a.jsx)("li", {
                                                            children: "\uc544\ud2b8\ud14c\ud06c \uae30\ub2a5\uc744 \uc704\ud55c \ubaa8\ub378\ub9c1 " +
                                                                    "\ubc0f \uad00\ub828 \uae30\ub2a5 \uac1c\ubc1c"
                                                        }),
                                                        Object(a.jsx)("li", {
                                                            children: "Iamport \ubaa8\ub4c8\uc744 \uc774\uc6a9\ud55c \uacb0\uc81c \uae30\ub2a5 \ub9ac" +
                                                                    "\ud329\ud1a0\ub9c1"
                                                        }),
                                                        Object(a.jsx)("li", {
                                                            children: "\uc774\ubbf8\uc9c0 AWS S3 \uc5c5\ub85c\ub4dc \ubc29\uc2dd\uc758 \ud1b5\uc77c " +
                                                                    "\ubc0f \ucd5c\uc801\ud654"
                                                        }),
                                                        Object(a.jsx)("li", {
                                                            children: "\uc790\uc8fc \uc4f0\uc774\ub294 \ucf54\ub4dc\uc758 \ub9ac\ud329\ud1a0\ub9c1 (E" +
                                                                    "X. \ud398\uc774\uc9c0\ub124\uc774\uc158)"
                                                        }),
                                                        Object(a.jsx)("li", {
                                                            children: "\uace0\uac1d\uc758 \uc720\uc785\ub960 \ub4f1\uc744 \ubcf4\uc5ec\uc8fc\ub294 " +
                                                                    "\ud1b5\uacc4 \ud398\uc774\uc9c0 \uac1c\ubc1c"
                                                        }),
                                                        Object(a.jsx)(
                                                            "li",
                                                            {children: "\uc791\uac00 \uc1a1\uae08 \uad00\ub9ac \uae30\ub2a5 \uac1c\ubc1c"}
                                                        ),
                                                        Object(a.jsx)("h4", {
                                                            className: Et.a["works-title"],
                                                            children: "\u258e \uac1c\ubc1c \uc5c5\ubb34 \uc678 \uae30\ud0c0 \uc5c5\ubb34 \ub2f4\ub2f9"
                                                        }),
                                                        Object(a.jsx)("h5", {
                                                            className: Et.a["works-period"],
                                                            children: "2020\ub144 \uc911\ubc18\uae30 ~ \ud604\uc7ac"
                                                        }),
                                                        Object(a.jsx)("li", {
                                                            children: "\uac1c\ubc1c\uc790 \ucc44\uc6a9 \ub2f4\ub2f9 (\uc11c\ub958 \ud3c9\uac00 \ubc0f" +
                                                                    " \uba74\uc811 \ud3c9\uac00 \uc9c4\ud589)"
                                                        }),
                                                        Object(a.jsx)("li", {
                                                            children: "\uc2e0\uc785 \uac1c\ubc1c\uc790 \uc0ac\uc218 \ub2f4\ub2f9 (\uc5c5\ubb34 \uad50" +
                                                                    "\uc721/\ud560\ub2f9)"
                                                        }),
                                                        Object(a.jsx)("li", {
                                                            children: "\ub3d9\ub8cc \uac1c\ubc1c\uc790 \ucf54\ub4dc \ub9ac\ubdf0 (\ud53c\ub4dc\ubc31/" +
                                                                    "\uad50\uc721)"
                                                        }),
                                                        Object(a.jsx)("li", {
                                                            children: "\uac1c\ubc1c \uad00\ub828 \uc720\uc6a9\ud55c \uc9c0\uc2dd \ubc1c\ud45c \ubc0f " +
                                                                    "\uacf5\uc720"
                                                        }),
                                                        Object(a.jsx)(
                                                            "li",
                                                            {children: "IT\ud300 \uc5c5\ubb34 \uad00\ub828 \ubb38\uc11c \ucd1d\uc815\ub9ac"}
                                                        ),
                                                        Object(a.jsx)("li", {
                                                            children: "\uac1c\ubc1c\uc790 \uc778\uc218\uc778\uacc4 \ubc0f \uc628\ubcf4\ub529 \ubb38" +
                                                                    "\uc11c \uc791\uc131"
                                                        }),
                                                        Object(a.jsx)("h4", {
                                                            className: Et.a["works-title"],
                                                            children: "\u258e \ub300\uaddc\ubaa8 \uc11c\ubc84 \uc815\ub9ac \uc791\uc5c5 \ub9ac\ub4dc"
                                                        }),
                                                        Object(a.jsx)("h5", {
                                                            className: Et.a["works-period"],
                                                            children: "2020\ub144 \uc911\ubc18\uae30 ~ 2021\ub144 \uc911\ubc18\uae30"
                                                        }),
                                                        Object(a.jsx)("li", {
                                                            children: "\ub300\uaddc\ubaa8 \uc11c\ubc84 \uc815\ub9ac \uc791\uc5c5 \ucd1d\uad04 \ubc0f " +
                                                                    "\ucf54\ub4dc \ub9ac\ubdf0"
                                                        }),
                                                        Object(a.jsx)("li", {
                                                            children: "\ub370\uc774\ud130\ubca0\uc774\uc2a4 \ub9c8\uc774\uadf8\ub808\uc774\uc158 " +
                                                                    "\ud30c\uc77c \uc815\ub9ac"
                                                        }),
                                                        Object(a.jsx)("li", {
                                                            children: "\uc54c\ub9bc\ud1a1 \ubc0f \ub124\uc774\ubc84\uc6cd\uc2a4 \uc54c\ub9bc \uad00" +
                                                                    "\ub828 \uae30\ub2a5 \uc815\ub9ac \ubc0f \uac1c\uc120"
                                                        }),
                                                        Object(a.jsx)("li", {
                                                            children: "\ub85c\uadf8\uc778 \ubc0f \ud68c\uc6d0\uac00\uc785 \ub4f1\uc758 \uc778\uc99d " +
                                                                    "\uc2dc\uc2a4\ud15c \uc815\ub9ac \ubc0f \uac1c\uc120"
                                                        }),
                                                        Object(a.jsx)("li", {
                                                            children: "\uad00\ub9ac\uc790 \uad8c\ud55c \uad00\ub828 \uae30\ub2a5 \uc815\ub9ac \ubc0f " +
                                                                    "\uac1c\uc120"
                                                        }),
                                                        Object(a.jsx)("li", {
                                                            children: "\ubd88\ud544\uc694\ud55c \ud30c\uc77c/\ucf54\ub4dc \uc815\ub9ac \ubc0f \ucf54" +
                                                                    "\ub4dc \uc791\uc131 \ubc29\uc2dd \ud1b5\uc77c\uc131 \ud655\ubcf4"
                                                        }),
                                                        Object(a.jsx)("h4", {
                                                            className: Et.a["works-title"],
                                                            children: "\u258e \uc11c\ubc84 \ubc30\ud3ec \ub77c\uc778 \ubcc0\uacbd"
                                                        }),
                                                        Object(a.jsx)("h5", {
                                                            className: Et.a["works-period"],
                                                            children: "2021\ub144 \ud558\ubc18\uae30"
                                                        }),
                                                        Object(a.jsx)(
                                                            "li",
                                                            {children: "\uae30\uc874 \ubc30\ud3ec \ub77c\uc778 : AWS Elastic Beanstalk"}
                                                        ),
                                                        Object(a.jsx)(
                                                            "li",
                                                            {children: "\uc2e0\uaddc \ubc30\ud3ec \ub77c\uc778 : AWS ECS (Docker \uae30\ubc18)"}
                                                        ),
                                                        Object(a.jsx)("li", {
                                                            children: "OS \ub3c5\ub9bd\uc801\uc778 \uac04\ud3b8\ud55c \uac1c\ubc1c \ud658\uacbd " +
                                                                    "\uad6c\ucd95\uc774 \uac00\ub2a5\ud574\uc9d0"
                                                        }),
                                                        Object(a.jsx)("li", {
                                                            children: "\ud2b9\uc815 \uae30\uc220\uc758 \ub3c5\ub9bd\uc801\uc778 \ubc84\uc804 \uc5c5" +
                                                                    "\uadf8\ub808\uc774\ub4dc\uac00 \uc6a9\uc774\ud574\uc9d0"
                                                        }),
                                                        Object(a.jsx)("li", {
                                                            children: "Next.js\uc758 \uc810\uc9c4\uc801 \ub3c4\uc785\uc744 \uc704\ud55c \uae30\ubc18 " +
                                                                    "\ub9c8\ub828"
                                                        }),
                                                        Object(a.jsx)("h4", {
                                                            className: Et.a["works-title"],
                                                            children: "\u258e Next.js \ub9ac\ub274\uc5bc"
                                                        }),
                                                        Object(a.jsx)("h5", {
                                                            className: Et.a["works-period"],
                                                            children: "2022\ub144 \uc0c1\ubc18\uae30"
                                                        }),
                                                        Object(a.jsx)("li", {
                                                            children: "React \uae30\ubc18\uc758 Next.js \uac1c\ubc1c \ud658\uacbd \ucd5c\ucd08 \uad6c" +
                                                                    "\ucd95"
                                                        }),
                                                        Object(a.jsx)("li", {
                                                            children: "\uc791\uac00 \uac1c\uc778\uc6a9 \ud398\uc774\uc9c0\ub97c Next.js\ub97c \uc774" +
                                                                    "\uc6a9\ud558\uc5ec \ub9ac\ub274\uc5bc"
                                                        }),
                                                        Object(a.jsx)(
                                                            "li",
                                                            {children: "Next.js, Recoil, Sass, DRF \ub4f1 \ud65c\uc6a9"}
                                                        ),
                                                        Object(a.jsx)("li", {
                                                            children: "\uc2e0\uaddc \uae30\uc220 \uc2a4\ud0dd \ubc0f \uac1c\ubc1c \ud658\uacbd \uad00" +
                                                                    "\ub828 \ub0b4\ubd80 \uad50\uc721 \uc9c4\ud589"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            }
            var St = i
                    .a
                    .memo(Ct, (function () {
                        return !0
                    })),
                Rt = s("KkDK"),
                Pt = s.n(Rt);
            function At() {
                var e = Object(c.useState)(!1),
                    t = e[0],
                    s = e[1];
                return Object(c.useEffect)((function () {
                    function e() {
                        (window.scrollY || window.pageYOffset) >= 300
                            ? s(!0)
                            : s(!1)
                    }
                    return e(),
                    window.addEventListener("scroll", e),
                    function () {
                        window.removeEventListener("scroll", e)
                    }
                }), []),
                Object(a.jsx)("div", {
                    className: ""
                        .concat(Pt.a.PageUpButton, " ")
                        .concat(
                            t
                                ? Pt.a.show
                                : ""
                        ),
                    onClick: function () {
                        return u("root")
                    },
                    children: Object(a.jsx)("img", {
                        className: Pt.a.img,
                        src: "/images/page-up.svg",
                        alt: ""
                    })
                })
            }
            var Mt = i
                    .a
                    .memo(At, (function () {
                        return !0
                    })),
                Lt = s("Ku6/"),
                Dt = s.n(Lt);
            function Tt() {
                return Object(a.jsxs)("footer", {
                    className: Dt.a.Footer,
                    children: [
                        Object(a.jsxs)("div", {
                            className: Dt.a.icons,
                            children: [
                                Object(a.jsx)("div", {
                                    className: ""
                                        .concat(Dt.a["icon-wrapper"], " ")
                                        .concat(Dt.a["bg-white"]),
                                    title: "GitHub",
                                    onClick: function () {
                                        return window.open("https://github.com/hjcdg1")
                                    },
                                    children: Object(a.jsx)("img", {
                                        className: Dt.a.icon,
                                        src: "/images/footer/git-hub.png",
                                        alt: ""
                                    })
                                }),
                                Object(a.jsx)("div", {
                                    className: Dt.a["icon-wrapper"],
                                    title: "Tistory",
                                    onClick: function () {
                                        return window.open("https://it-eldorado.tistory.com")
                                    },
                                    children: Object(a.jsx)("img", {
                                        className: Dt.a.icon,
                                        src: "/images/footer/tistory.png",
                                        alt: ""
                                    })
                                }),
                                Object(a.jsx)("div", {
                                    className: Dt.a["icon-wrapper"],
                                    title: "Instagram",
                                    onClick: function () {
                                        return window.open("https://www.instagram.com/deokgyeong.choi")
                                    },
                                    children: Object(a.jsx)("img", {
                                        className: Dt.a.icon,
                                        src: "/images/footer/instagram.png",
                                        alt: ""
                                    })
                                }),
                                Object(a.jsx)("div", {
                                    className: ""
                                        .concat(Dt.a["icon-wrapper"], " ")
                                        .concat(Dt.a["bg-white"]),
                                    title: "Facebook",
                                    onClick: function () {
                                        return window.open("https://www.facebook.com/profile.php?id=100043084419617")
                                    },
                                    children: Object(a.jsx)("img", {
                                        className: Dt.a.icon,
                                        src: "/images/footer/facebook.png",
                                        alt: ""
                                    })
                                })
                            ]
                        }),
                        Object(a.jsx)("div", {
                            className: Dt.a.copyright,
                            children: "\xa9 2021. Choi Deok Gyeong. All rights reserved."
                        })
                    ]
                })
            }
            var Wt = i
                .a
                .memo(Tt, (function () {
                    return !0
                }));
            var It = !0;
            t.default = function (e) {
                var t = e.readmeContents;
                return Object(c.useEffect)((function () {
                    window.dataLayer = window.dataLayer || [];
                    var e = function () {
                        window
                            .dataLayer
                            .push(arguments)
                    };
                    e("js", new Date),
                    e("config", "G-R1Q0MCVGPW")
                }), []),
                Object(a.jsxs)("div", {
                    id: "root",
                    children: [
                        Object(a.jsxs)(r.a, {
                            children: [
                                Object(a.jsx)("title", {children: "CDG's Portfolio"}),
                                Object(a.jsx)("meta", {
                                    name: "description",
                                    content: "\ud504\ub860\ud2b8 \uc5d4\ub4dc \uac1c\ubc1c\uc790 \ucd5c\ub355\uacbd\uc758 " +
                                            "\ud3ec\ud2b8\ud3f4\ub9ac\uc624\uc785\ub2c8\ub2e4."
                                }),
                                Object(a.jsx)("meta", {
                                    property: "og:title",
                                    content: "\ucd5c\ub355\uacbd \ud3ec\ud2b8\ud3f4\ub9ac\uc624 :: CDG's Portfolio"
                                }),
                                Object(a.jsx)("meta", {
                                    property: "og:description",
                                    content: "\ud504\ub860\ud2b8 \uc5d4\ub4dc \uac1c\ubc1c\uc790 \ucd5c\ub355\uacbd\uc758 " +
                                            "\ud3ec\ud2b8\ud3f4\ub9ac\uc624\uc785\ub2c8\ub2e4."
                                }),
                                Object(a.jsx)("link", {
                                    rel: "canonical",
                                    href: "https://cdg-portfolio.com"
                                }),
                                Object(a.jsx)("link", {
                                    rel: "icon",
                                    href: "/favicon.png"
                                }),
                                Object(a.jsx)("link", {
                                    rel: "preconnect",
                                    href: "https://fonts.gstatic.com"
                                }),
                                Object(a.jsx)("link", {
                                    rel: "stylesheet",
                                    href: "https://fonts.googleapis.com/css2?family=Black+Han+Sans&family=Noto+Sans+KR:wg" +
                                            "ht@400;700;900&display=swap"
                                }),
                                Object(a.jsx)("meta", {
                                    name: "google-site-verification",
                                    content: "lZZYq3cCs7DMGI-o2jPNBGrb0WrRIlbVTC8Wqgj6FKo"
                                }),
                                Object(a.jsx)("meta", {
                                    name: "naver-site-verification",
                                    content: "ecc6f6dbf6d58e4399062837431b04c874efa04c"
                                }),
                                Object(a.jsx)("script", {
                                    async: !0,
                                    src: "https://www.googletagmanager.com/gtag/js?id=G-R1Q0MCVGPW"
                                })
                            ]
                        }),
                        Object(a.jsx)(x, {}),
                        Object(a.jsx)(O, {}),
                        Object(a.jsx)(S, {}),
                        Object(a.jsx)(M, {}),
                        Object(a.jsx)(W, {}),
                        Object(a.jsx)(yt, {readmeContents: t}),
                        Object(a.jsx)(St, {}),
                        Object(a.jsx)(Mt, {}),
                        Object(a.jsx)(Wt, {})
                    ]
                })
            }
        },
        "7W2i": function (e, t, s) {
            var a = s("SksO");
            e.exports = function (e, t) {
                if ("function" !== typeof t && null !== t) 
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && a(e, t)
            }
        },
        "8Kt/": function (e, t, s) {
            "use strict";
            s("lSNA");
            t.__esModule = !0,
            t.defaultHead = d,
            t.default = void 0;
            var a,
                c = function (e) {
                    if (e && e.__esModule) 
                        return e;
                    if (null === e || "object" !== typeof e && "function" !== typeof e) 
                        return {default: e};
                    var t = o();
                    if (t && t.has(e)) 
                        return t.get(e);
                    var s = {},
                        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var c in e) 
                        if (Object.prototype.hasOwnProperty.call(e, c)) {
                            var i = a
                                ? Object.getOwnPropertyDescriptor(e, c)
                                : null;
                            i && (i.get || i.set)
                                ? Object.defineProperty(s, c, i)
                                : s[c] = e[c]
                        }
                    s.default = e,
                    t && t.set(e, s);
                    return s
                }(s("q1tI")),
                i = (a = s("Xuae")) && a.__esModule
                    ? a
                    : {
                        default: a
                    },
                n = s("lwAK"),
                r = s("FYa8"),
                l = s("/0+H");
            function o() {
                if ("function" !== typeof WeakMap) 
                    return null;
                var e = new WeakMap;
                return o = function () {
                    return e
                },
                e
            }
            function d() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    t = [
                        c
                            .default
                            .createElement("meta", {charSet: "utf-8"})
                    ];
                return e || t.push(c.default.createElement("meta", {
                    name: "viewport",
                    content: "width=device-width"
                })),
                t
            }
            function j(e, t) {
                return "string" === typeof t || "number" === typeof t
                    ? e
                    : t.type === c.default.Fragment
                        ? e.concat(
                            c.default.Children.toArray(t.props.children).reduce((function (e, t) {
                                return "string" === typeof t || "number" === typeof t
                                    ? e
                                    : e.concat(t)
                            }), [])
                        )
                        : e.concat(t)
            }
            var m = ["name", "httpEquiv", "charSet", "itemProp"];
            function u(e, t) {
                return e
                    .reduce((function (e, t) {
                        var s = c
                            .default
                            .Children
                            .toArray(t.props.children);
                        return e.concat(s)
                    }), [])
                    .reduce(j, [])
                    .reverse()
                    .concat(d(t.inAmpMode))
                    .filter(function () {
                        var e = new Set,
                            t = new Set,
                            s = new Set,
                            a = {};
                        return function (c) {
                            var i = !0,
                                n = !1;
                            if (c.key && "number" !== typeof c.key && c.key.indexOf("$") > 0) {
                                n = !0;
                                var r = c
                                    .key
                                    .slice(c.key.indexOf("$") + 1);
                                e.has(r)
                                    ? i = !1
                                    : e.add(r)
                            }
                            switch (c.type) {
                                case "title":
                                case "base":
                                    t.has(c.type)
                                        ? i = !1
                                        : t.add(c.type);
                                    break;
                                case "meta":
                                    for (var l = 0, o = m.length; l < o; l++) {
                                        var d = m[l];
                                        if (c.props.hasOwnProperty(d)) 
                                            if ("charSet" === d) 
                                                s.has(d)
                                                    ? i = !1
                                                    : s.add(d);
                                            else {
                                                var j = c.props[d],
                                                    u = a[d] || new Set;
                                                "name" === d && n || !u.has(j)
                                                    ? (u.add(j), a[d] = u)
                                                    : i = !1
                                            }
                                        }
                            }
                            return i
                        }
                    }())
                    .reverse()
                    .map((function (e, t) {
                        var s = e.key || t;
                        return c
                            .default
                            .cloneElement(e, {key: s})
                    }))
            }
            function b(e) {
                var t = e.children,
                    s = (0, c.useContext)(n.AmpStateContext),
                    a = (0, c.useContext)(r.HeadManagerContext);
                return c
                    .default
                    .createElement(i.default, {
                        reduceComponentsToState: u,
                        headManager: a,
                        inAmpMode: (0, l.isInAmpMode)(s)
                    }, t)
            }
            b.rewind = function () {};
            var p = b;
            t.default = p
        },
        AFPX: function (e, t, s) {
            e.exports = {
                Skills: "Skills_Skills__30WZi",
                content: "Skills_content__1b1wq",
                "tech-stacks-container": "Skills_tech-stacks-container__3SGhh",
                "tech-stacks": "Skills_tech-stacks__3WypH",
                title: "Skills_title__3vC8g",
                img: "Skills_img__AYqwK"
            }
        },
        Bnag: function (e, t) {
            e.exports = function () {
                throw new TypeError(
                    "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non" +
                    "-array objects must have a [Symbol.iterator]() method."
                )
            }
        },
        E8UK: function (e, t, s) {
            "use strict";
            e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
        },
        EbDI: function (e, t) {
            e.exports = function (e) {
                if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e)) 
                    return Array.from(e)
            }
        },
        FYa8: function (e, t, s) {
            "use strict";
            var a;
            t.__esModule = !0,
            t.HeadManagerContext = void 0;
            var c = (
                (a = s("q1tI")) && a.__esModule
                    ? a
                    : {
                        default: a
                    }
            )
                .default
                .createContext({});
            t.HeadManagerContext = c
        },
        "GDU/": function (e, t, s) {
            e.exports = {
                SectionTitle: "SectionTitle_SectionTitle__3f_lU",
                text: "SectionTitle_text__hWi93",
                "link-wrapper": "SectionTitle_link-wrapper__3yMsW",
                link: "SectionTitle_link__3A4rU"
            }
        },
        Ijbi: function (e, t, s) {
            var a = s("WkPL");
            e.exports = function (e) {
                if (Array.isArray(e)) 
                    return a(e)
            }
        },
        KkDK: function (e, t, s) {
            e.exports = {
                PageUpButton: "PageUpButton_PageUpButton___HkTE",
                show: "PageUpButton_show__1h3jV",
                img: "PageUpButton_img__1L2at"
            }
        },
        "Ku6/": function (e, t, s) {
            e.exports = {
                Footer: "Footer_Footer__2N-mq",
                icons: "Footer_icons__39we2",
                "icon-wrapper": "Footer_icon-wrapper__3cU9_",
                "bg-white": "Footer_bg-white__21Z4U",
                icon: "Footer_icon__Rb30k",
                copyright: "Footer_copyright__16dqg"
            }
        },
        Nsbk: function (e, t) {
            function s(t) {
                return e.exports = s = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function (e) {
                        return e.__proto__ || Object.getPrototypeOf(e)
                    },
                s(t)
            }
            e.exports = s
        },
        PJYZ: function (e, t) {
            e.exports = function (e) {
                if (void 0 === e) 
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                    );
                return e
            }
        },
        Qetd: function (e, t, s) {
            "use strict";
            var a = Object
                .assign
                .bind(Object);
            e.exports = a,
            e.exports.default = e.exports
        },
        RIqP: function (e, t, s) {
            var a = s("Ijbi"),
                c = s("EbDI"),
                i = s("ZhPi"),
                n = s("Bnag");
            e.exports = function (e) {
                return a(e) || c(e) || i(e) || n()
            }
        },
        SksO: function (e, t) {
            function s(t, a) {
                return e.exports = s = Object.setPrototypeOf || function (e, t) {
                    return e.__proto__ = t,
                    e
                },
                s(t, a)
            }
            e.exports = s
        },
        W8MJ: function (e, t) {
            function s(e, t) {
                for (var s = 0; s < t.length; s++) {
                    var a = t[s];
                    a.enumerable = a.enumerable || !1,
                    a.configurable = !0,
                    "value" in a && (a.writable = !0),
                    Object.defineProperty(e, a.key, a)
                }
            }
            e.exports = function (e, t, a) {
                return t && s(e.prototype, t),
                a && s(e, a),
                e
            }
        },
        WkPL: function (e, t) {
            e.exports = function (e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var s = 0, a = new Array(t); s < t; s++) 
                    a[s] = e[s];
                return a
            }
        },
        Xuae: function (e, t, s) {
            "use strict";
            var a = s("RIqP"),
                c = s("lwsE"),
                i = s("W8MJ"),
                n = (s("PJYZ"), s("7W2i")),
                r = s("a1gu"),
                l = s("Nsbk");
            function o(e) {
                var t = function () {
                    if ("undefined" === typeof Reflect || !Reflect.construct) 
                        return !1;
                    if (Reflect.construct.sham) 
                        return !1;
                    if ("function" === typeof Proxy) 
                        return !0;
                    try {
                        return Date
                            .prototype
                            .toString
                            .call(Reflect.construct(Date, [], (function () {}))),
                        !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function () {
                    var s,
                        a = l(e);
                    if (t) {
                        var c = l(this).constructor;
                        s = Reflect.construct(a, arguments, c)
                    } else 
                        s = a.apply(this, arguments);
                    return r(this, s)
                }
            }
            t.__esModule = !0,
            t.default = void 0;
            var d = s("q1tI"),
                j = function (e) {
                    n(s, e);
                    var t = o(s);
                    function s(e) {
                        var i;
                        return c(this, s),
                        (i = t.call(this, e))._hasHeadManager = void 0,
                        i.emitChange = function () {
                            i._hasHeadManager && i
                                .props
                                .headManager
                                .updateHead(
                                    i.props.reduceComponentsToState(a(i.props.headManager.mountedInstances), i.props)
                                )
                        },
                        i._hasHeadManager = i.props.headManager && i.props.headManager.mountedInstances,
                        i
                    }
                    return i(s, [
                        {
                            key: "componentDidMount",
                            value: function () {
                                this._hasHeadManager && this
                                    .props
                                    .headManager
                                    .mountedInstances
                                    .add(this),
                                this.emitChange()
                            }
                        }, {
                            key: "componentDidUpdate",
                            value: function () {
                                this.emitChange()
                            }
                        }, {
                            key: "componentWillUnmount",
                            value: function () {
                                this._hasHeadManager && this
                                    .props
                                    .headManager
                                    .mountedInstances
                                    .delete(this),
                                this.emitChange()
                            }
                        }, {
                            key: "render",
                            value: function () {
                                return null
                            }
                        }
                    ]),
                    s
                }(d.Component);
            t.default = j
        },
        ZhPi: function (e, t, s) {
            var a = s("WkPL");
            e.exports = function (e, t) {
                if (e) {
                    if ("string" === typeof e) 
                        return a(e, t);
                    var s = Object
                        .prototype
                        .toString
                        .call(e)
                        .slice(8, -1);
                    return "Object" === s && e.constructor && (s = e.constructor.name),
                    "Map" === s || "Set" === s
                        ? Array.from(e)
                        : "Arguments" === s || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)
                            ? a(e, t)
                            : void 0
                }
            }
        },
        a1gu: function (e, t, s) {
            var a = s("cDf5"),
                c = s("PJYZ");
            e.exports = function (e, t) {
                return !t || "object" !== a(t) && "function" !== typeof t
                    ? c(e)
                    : t
            }
        },
        aQ6o: function (e, t, s) {
            e.exports = {
                AboutMe: "AboutMe_AboutMe__1TCRF",
                content: "AboutMe_content__2uEf5",
                "basic-infos": "AboutMe_basic-infos__36Rb0",
                "basic-info-wrapper": "AboutMe_basic-info-wrapper__3E-0e",
                "basic-info": "AboutMe_basic-info__3sjma",
                "icon-img-wrapper": "AboutMe_icon-img-wrapper__YKbSY",
                "icon-img": "AboutMe_icon-img__YYpc_",
                field: "AboutMe_field__5L2Lm",
                "field-label": "AboutMe_field-label__1B57s",
                "field-value": "AboutMe_field-value__qT3Li",
                email: "AboutMe_email__38blp"
            }
        },
        bQTf: function (e, t, s) {
            e.exports = s("r7+x")()
        },
        cDf5: function (e, t) {
            function s(t) {
                return "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
                    ? e.exports = s = function (e) {
                        return typeof e
                    }
                    : e.exports = s = function (e) {
                        return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                            ? "symbol"
                            : typeof e
                    },
                s(t)
            }
            e.exports = s
        },
        eC2I: function (e, t, s) {
            var a;
            !function () {
                "use strict";
                var s = {}.hasOwnProperty;
                function c() {
                    for (var e = [], t = 0; t < arguments.length; t++) {
                        var a = arguments[t];
                        if (a) {
                            var i = typeof a;
                            if ("string" === i || "number" === i) 
                                e.push(a);
                            else if (Array.isArray(a)) {
                                if (a.length) {
                                    var n = c.apply(null, a);
                                    n && e.push(n)
                                }
                            } else if ("object" === i) 
                                if (a.toString === Object.prototype.toString) 
                                    for (var r in a) 
                                        s.call(a, r) && a[r] && e.push(r);
                        else 
                                e.push(a.toString())
                        }
                    }
                    return e.join(" ")
                }
                e.exports
                    ? (c.default = c, e.exports = c)
                    : void 0 === (a = function () {
                        return c
                    }.apply(t, [])) || (e.exports = a)
            }()
        },
        g4pe: function (e, t, s) {
            e.exports = s("8Kt/")
        },
        "gHJ/": function (e, t, s) {
            e.exports = {
                Masthead: "Masthead_Masthead__3PNvE",
                content: "Masthead_content__-86Ao",
                title: "Masthead_title__56mjq",
                divider: "Masthead_divider__1wT-h",
                description: "Masthead_description__l0Duh",
                "find-out-more": "Masthead_find-out-more__3a_3R"
            }
        },
        i1W2: function (e, t, s) {
            e.exports = {
                Projects: "Projects_Projects__KtiS7",
                content: "Projects_content__2sdEt",
                projects: "Projects_projects__234Pm",
                project: "Projects_project__3InD_",
                title: "Projects_title__20T9r",
                period: "Projects_period__1fnvs",
                "new-line-chunk": "Projects_new-line-chunk__2nDnY",
                info: "Projects_info__1vwgW",
                "img-carousel": "Projects_img-carousel__lLBC3",
                imgs: "Projects_imgs__K8RFD",
                shifting: "Projects_shifting__Ox0ma",
                "img-wrapper": "Projects_img-wrapper__3Bmbj",
                img: "Projects_img__37LaU",
                nav: "Projects_nav__21TE1",
                prev: "Projects_prev__38GGZ",
                next: "Projects_next__2mQVA",
                page: "Projects_page__1WhnA",
                descriptions: "Projects_descriptions__1DeYX",
                "main-description": "Projects_main-description__3lCkI",
                red: "Projects_red__2npyK",
                "show-readme-btn": "Projects_show-readme-btn__cuVoG",
                description: "Projects_description__YKRcz",
                label: "Projects_label__1B9QH",
                value: "Projects_value__148t7",
                url: "Projects_url__2unkJ",
                "modal-content": "Projects_modal-content__ud8bG",
                "modal-header": "Projects_modal-header__3SkwG",
                "modal-body": "Projects_modal-body__3qVCg"
            }
        },
        lSNA: function (e, t) {
            e.exports = function (e, t, s) {
                return t in e
                    ? Object.defineProperty(e, t, {
                        value: s,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    })
                    : e[t] = s,
                e
            }
        },
        lwAK: function (e, t, s) {
            "use strict";
            var a;
            t.__esModule = !0,
            t.AmpStateContext = void 0;
            var c = (
                (a = s("q1tI")) && a.__esModule
                    ? a
                    : {
                        default: a
                    }
            )
                .default
                .createContext({});
            t.AmpStateContext = c
        },
        lwsE: function (e, t) {
            e.exports = function (e, t) {
                if (!(e instanceof t)) 
                    throw new TypeError("Cannot call a class as a function")
            }
        },
        "r7+x": function (e, t, s) {
            "use strict";
            var a = s("E8UK");
            function c() {}
            function i() {}
            i.resetWarningCache = c,
            e.exports = function () {
                function e(e, t, s, c, i, n) {
                    if (n !== a) {
                        var r = new Error(
                            "Calling PropTypes validators directly is not supported by the `prop-types` pac" +
                            "kage. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/u" +
                            "se-check-prop-types"
                        );
                        throw r.name = "Invariant Violation",
                        r
                    }
                }
                function t() {
                    return e
                }
                e.isRequired = e;
                var s = {
                    array: e,
                    bigint: e,
                    bool: e,
                    func: e,
                    number: e,
                    object: e,
                    string: e,
                    symbol: e,
                    any: e,
                    arrayOf: t,
                    element: e,
                    elementType: e,
                    instanceOf: t,
                    node: e,
                    objectOf: t,
                    oneOf: t,
                    oneOfType: t,
                    shape: t,
                    exact: t,
                    checkPropTypes: i,
                    resetWarningCache: c
                };
                return s.PropTypes = s,
                s
            }
        },
        rOdJ: function (e, t, s) {
            e.exports = {
                Career: "Career_Career__1AUMn",
                content: "Career_content__1aikH",
                companies: "Career_companies__ko_TA",
                company: "Career_company__1Kbfg",
                "logo-container": "Career_logo-container__3DkL1",
                "logo-wrapper": "Career_logo-wrapper__1N55e",
                logo: "Career_logo__Yrfln",
                info: "Career_info__3hL9g",
                title: "Career_title__2qXEn",
                period: "Career_period__2lszl",
                description: "Career_description__yM8tM",
                works: "Career_works__2zVJE",
                "works-title": "Career_works-title__2LC3-",
                "works-period": "Career_works-period__2tMQx"
            }
        },
        rhhu: function (e, t, s) {
            e.exports = {
                Header: "Header_Header__29pgS",
                "has-background-color": "Header_has-background-color__1tAzC",
                content: "Header_content__4A1k6",
                title: "Header_title__EwaWq",
                "navigation-menus": "Header_navigation-menus__1y0cV",
                "navigation-menu": "Header_navigation-menu__2Elgc",
                "hamburger-wrapper": "Header_hamburger-wrapper__1sgfN",
                "folded-navigation-menus": "Header_folded-navigation-menus__1ebT_",
                "is-folded": "Header_is-folded__3OB62",
                "folded-navigation-menu": "Header_folded-navigation-menu__3T4w5"
            }
        },
        u8OQ: function (e, t, s) {
            e.exports = {
                Archiving: "Archiving_Archiving__3P8w6",
                content: "Archiving_content__1Mmrq",
                container: "Archiving_container__2BGDS",
                "git-hub": "Archiving_git-hub__2Y84_",
                tistory: "Archiving_tistory__3NpTZ",
                url: "Archiving_url__3mKKs",
                "img-wrapper": "Archiving_img-wrapper__k3fGq",
                img: "Archiving_img___WoR6",
                description: "Archiving_description__JIcXz"
            }
        }
    },
    [
        ["/EDR", 0, 1]
    ]
]);