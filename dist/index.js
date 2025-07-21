import { jsxs as D, jsx as I } from "react/jsx-runtime";
import { forwardRef as H, useState as x, useRef as C, useEffect as a, useImperativeHandle as P } from "react";
const F = H(
  ({
    text: s,
    autoScroll: m = !0,
    startDelay: n = 0,
    interval: c = 60,
    loop: b = !1,
    loopDelay: R = 1e3,
    className: j,
    style: q,
    cursor: l,
    onTypingStart: e,
    onType: i,
    onTypingEnd: f
  }, A) => {
    const [B, d] = x(""), [t, k] = x(0), v = C(null), r = C(!0), o = () => {
      d(""), k(0);
    };
    return a(() => {
      l && l.type !== "span" && console.warn("cursor must be a <span> element.");
    }, [l]), a(() => {
      o(), r.current = !0;
      const u = setTimeout(() => {
        r.current = !1, e == null || e();
      }, n);
      return () => clearTimeout(u);
    }, [s]), a(() => {
      const u = setInterval(() => {
        if (r.current) return;
        if (t >= s.length)
          return b && (r.current = !0, setTimeout(() => {
            o(), e == null || e(), r.current = !1;
          }, R)), r.current = !0, f == null ? void 0 : f();
        const w = s[t];
        i == null || i(w, t), d((h) => h + w), k((h) => h + 1);
      }, c);
      return () => clearInterval(u);
    }, [s, t, b, c, f]), a(() => {
      var u;
      m && ((u = v.current) == null || u.scrollIntoView({ behavior: "smooth", block: "end" }));
    }, [t]), P(A, () => ({
      pause: () => {
        r.current = !0;
      },
      resume: () => {
        t < s.length && (r.current = !1);
      },
      reset: () => {
        o(), r.current = !1, e == null || e();
      }
    })), /* @__PURE__ */ D(
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
          l !== null && l,
          /* @__PURE__ */ I("span", { ref: v, style: { display: "inline-block", height: 0 } })
        ]
      }
    );
  }
), G = ({
  width: s = "2px",
  height: m = "1rem",
  marginLeft: n = "4px",
  cursorColor: c = "black"
}) => /* @__PURE__ */ I(
  "span",
  {
    style: {
      display: "inline-block",
      verticalAlign: "middle",
      width: s,
      height: m,
      marginLeft: n,
      backgroundColor: c
    }
  }
);
export {
  G as DefaultCursor,
  F as TypingText
};
