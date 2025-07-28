import { jsxs as H, jsx as x } from "react/jsx-runtime";
import { forwardRef as P, useState as I, useRef as d, useEffect as f, useImperativeHandle as V } from "react";
const G = P(
  ({
    text: r,
    autoScroll: m = !0,
    startDelay: i = 0,
    interval: a = 60,
    loop: v = !1,
    loopDelay: R = 1e3,
    className: j,
    style: q,
    cursor: c,
    onTypingStart: s,
    onType: h,
    onTypingEnd: u
  }, A) => {
    const [B, n] = I(""), [t, b] = I(0), w = d(null), e = d(!0), k = () => {
      n(""), b(0);
    };
    return f(() => {
      c && c.type !== "span" && console.warn("cursor must be a <span> element.");
    }, [c]), f(() => {
      k(), e.current = !0;
      const l = setTimeout(() => {
        e.current = !1, s == null || s();
      }, i);
      return () => clearTimeout(l);
    }, [r]), f(() => {
      const l = () => (v && (e.current = !0, setTimeout(() => {
        k(), s == null || s(), e.current = !1;
      }, R)), e.current = !0, u == null ? void 0 : u()), D = setInterval(() => {
        if (e.current) return;
        if (t >= r.length)
          return l();
        const C = r[t];
        h == null || h(C, t), n((o) => o + C), b((o) => o + 1);
      }, a);
      return () => clearInterval(D);
    }, [r, t, v, a, u]), f(() => {
      var l;
      m && ((l = w.current) == null || l.scrollIntoView({ behavior: "smooth", block: "end" }));
    }, [t]), V(A, () => ({
      pause: () => {
        e.current = !0;
      },
      resume: () => {
        t < r.length && (e.current = !1);
      },
      reset: () => {
        k(), e.current = !1, s == null || s();
      },
      skip: () => {
        n(r), b(r.length), u == null || u(), e.current = !0;
      }
    })), /* @__PURE__ */ H(
      "p",
      {
        className: j,
        style: {
          whiteSpace: "pre-line",
          wordBreak: "normal",
          ...q
        },
        children: [
          B,
          c !== null && c,
          /* @__PURE__ */ x(
            "span",
            {
              ref: w,
              style: {
                display: "inline-block",
                height: 0,
                marginTop: 1
              }
            }
          )
        ]
      }
    );
  }
), J = ({
  width: r = "2px",
  height: m = "1rem",
  marginLeft: i = "4px",
  cursorColor: a = "black"
}) => /* @__PURE__ */ x(
  "span",
  {
    style: {
      display: "inline-block",
      verticalAlign: "middle",
      width: r,
      height: m,
      marginLeft: i,
      backgroundColor: a
    }
  }
);
export {
  J as DefaultCursor,
  G as TypingText
};
