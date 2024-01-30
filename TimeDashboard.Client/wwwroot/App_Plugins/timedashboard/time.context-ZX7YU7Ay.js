var $ = (e, t, r) => {
  if (!t.has(e))
    throw TypeError("Cannot " + r);
};
var s = (e, t, r) => ($(e, t, "read from private field"), r ? r.call(e) : t.get(e)), d = (e, t, r) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, r);
}, u = (e, t, r, a) => ($(e, t, "write to private field"), a ? a.call(e, r) : t.set(e, r), r);
import { UmbBaseController as P } from "@umbraco-cms/backoffice/class-api";
import { UmbContextToken as k } from "@umbraco-cms/backoffice/context-api";
import { UmbStringState as B } from "@umbraco-cms/backoffice/observable-api";
import { tryExecuteAndNotify as U } from "@umbraco-cms/backoffice/resources";
class I extends Error {
  constructor(t, r, a) {
    super(a), this.name = "ApiError", this.url = r.url, this.status = r.status, this.statusText = r.statusText, this.body = r.body, this.request = t;
  }
}
class J extends Error {
  constructor(t) {
    super(t), this.name = "CancelError";
  }
  get isCancelled() {
    return !0;
  }
}
var y, m, l, f, g, C, T;
class L {
  constructor(t) {
    d(this, y, void 0);
    d(this, m, void 0);
    d(this, l, void 0);
    d(this, f, void 0);
    d(this, g, void 0);
    d(this, C, void 0);
    d(this, T, void 0);
    u(this, y, !1), u(this, m, !1), u(this, l, !1), u(this, f, []), u(this, g, new Promise((r, a) => {
      u(this, C, r), u(this, T, a);
      const n = (c) => {
        var h;
        s(this, y) || s(this, m) || s(this, l) || (u(this, y, !0), (h = s(this, C)) == null || h.call(this, c));
      }, o = (c) => {
        var h;
        s(this, y) || s(this, m) || s(this, l) || (u(this, m, !0), (h = s(this, T)) == null || h.call(this, c));
      }, i = (c) => {
        s(this, y) || s(this, m) || s(this, l) || s(this, f).push(c);
      };
      return Object.defineProperty(i, "isResolved", {
        get: () => s(this, y)
      }), Object.defineProperty(i, "isRejected", {
        get: () => s(this, m)
      }), Object.defineProperty(i, "isCancelled", {
        get: () => s(this, l)
      }), t(n, o, i);
    }));
  }
  get [Symbol.toStringTag]() {
    return "Cancellable Promise";
  }
  then(t, r) {
    return s(this, g).then(t, r);
  }
  catch(t) {
    return s(this, g).catch(t);
  }
  finally(t) {
    return s(this, g).finally(t);
  }
  cancel() {
    var t;
    if (!(s(this, y) || s(this, m) || s(this, l))) {
      if (u(this, l, !0), s(this, f).length)
        try {
          for (const r of s(this, f))
            r();
        } catch (r) {
          console.warn("Cancellation threw an error", r);
          return;
        }
      s(this, f).length = 0, (t = s(this, T)) == null || t.call(this, new J("Request aborted"));
    }
  }
  get isCancelled() {
    return s(this, l);
  }
}
y = new WeakMap(), m = new WeakMap(), l = new WeakMap(), f = new WeakMap(), g = new WeakMap(), C = new WeakMap(), T = new WeakMap();
const H = {
  BASE: "",
  VERSION: "Latest",
  WITH_CREDENTIALS: !1,
  CREDENTIALS: "include",
  TOKEN: void 0,
  USERNAME: void 0,
  PASSWORD: void 0,
  HEADERS: void 0,
  ENCODE_PATH: void 0
}, N = (e) => e != null, R = (e) => typeof e == "string", O = (e) => R(e) && e !== "", j = (e) => typeof e == "object" && typeof e.type == "string" && typeof e.stream == "function" && typeof e.arrayBuffer == "function" && typeof e.constructor == "function" && typeof e.constructor.name == "string" && /^(Blob|File)$/.test(e.constructor.name) && /^(Blob|File)$/.test(e[Symbol.toStringTag]), V = (e) => e instanceof FormData, W = (e) => {
  try {
    return btoa(e);
  } catch {
    return Buffer.from(e).toString("base64");
  }
}, v = (e) => {
  const t = [], r = (n, o) => {
    t.push(`${encodeURIComponent(n)}=${encodeURIComponent(String(o))}`);
  }, a = (n, o) => {
    N(o) && (Array.isArray(o) ? o.forEach((i) => {
      a(n, i);
    }) : typeof o == "object" ? Object.entries(o).forEach(([i, c]) => {
      a(`${n}[${i}]`, c);
    }) : r(n, o));
  };
  return Object.entries(e).forEach(([n, o]) => {
    a(n, o);
  }), t.length > 0 ? `?${t.join("&")}` : "";
}, G = (e, t) => {
  const r = e.ENCODE_PATH || encodeURI, a = t.url.replace("{api-version}", e.VERSION).replace(/{(.*?)}/g, (o, i) => {
    var c;
    return (c = t.path) != null && c.hasOwnProperty(i) ? r(String(t.path[i])) : o;
  }), n = `${e.BASE}${a}`;
  return t.query ? `${n}${v(t.query)}` : n;
}, z = (e) => {
  if (e.formData) {
    const t = new FormData(), r = (a, n) => {
      R(n) || j(n) ? t.append(a, n) : t.append(a, JSON.stringify(n));
    };
    return Object.entries(e.formData).filter(([a, n]) => N(n)).forEach(([a, n]) => {
      Array.isArray(n) ? n.forEach((o) => r(a, o)) : r(a, n);
    }), t;
  }
}, D = async (e, t) => typeof t == "function" ? t(e) : t, K = async (e, t) => {
  const r = await D(t, e.TOKEN), a = await D(t, e.USERNAME), n = await D(t, e.PASSWORD), o = await D(t, e.HEADERS), i = Object.entries({
    Accept: "application/json",
    ...o,
    ...t.headers
  }).filter(([c, h]) => N(h)).reduce((c, [h, b]) => ({
    ...c,
    [h]: String(b)
  }), {});
  if (O(r) && (i.Authorization = `Bearer ${r}`), O(a) && O(n)) {
    const c = W(`${a}:${n}`);
    i.Authorization = `Basic ${c}`;
  }
  return t.body && (t.mediaType ? i["Content-Type"] = t.mediaType : j(t.body) ? i["Content-Type"] = t.body.type || "application/octet-stream" : R(t.body) ? i["Content-Type"] = "text/plain" : V(t.body) || (i["Content-Type"] = "application/json")), new Headers(i);
}, Q = (e) => {
  var t;
  if (e.body !== void 0)
    return (t = e.mediaType) != null && t.includes("/json") ? JSON.stringify(e.body) : R(e.body) || j(e.body) || V(e.body) ? e.body : JSON.stringify(e.body);
}, X = async (e, t, r, a, n, o, i) => {
  const c = new AbortController(), h = {
    headers: o,
    body: a ?? n,
    method: t.method,
    signal: c.signal
  };
  return e.WITH_CREDENTIALS && (h.credentials = e.CREDENTIALS), i(() => c.abort()), await fetch(r, h);
}, Y = (e, t) => {
  if (t) {
    const r = e.headers.get(t);
    if (R(r))
      return r;
  }
}, Z = async (e) => {
  if (e.status !== 204)
    try {
      const t = e.headers.get("Content-Type");
      if (t)
        return ["application/json", "application/problem+json"].some((n) => t.toLowerCase().startsWith(n)) ? await e.json() : await e.text();
    } catch (t) {
      console.error(t);
    }
}, tt = (e, t) => {
  const a = {
    400: "Bad Request",
    401: "Unauthorized",
    403: "Forbidden",
    404: "Not Found",
    500: "Internal Server Error",
    502: "Bad Gateway",
    503: "Service Unavailable",
    ...e.errors
  }[t.status];
  if (a)
    throw new I(e, t, a);
  if (!t.ok) {
    const n = t.status ?? "unknown", o = t.statusText ?? "unknown", i = (() => {
      try {
        return JSON.stringify(t.body, null, 2);
      } catch {
        return;
      }
    })();
    throw new I(
      e,
      t,
      `Generic Error: status: ${n}; status text: ${o}; body: ${i}`
    );
  }
}, q = (e, t) => new L(async (r, a, n) => {
  try {
    const o = G(e, t), i = z(t), c = Q(t), h = await K(e, t);
    if (!n.isCancelled) {
      const b = await X(e, t, o, c, i, h, n), _ = await Z(b), F = Y(b, t.responseHeader), x = {
        url: o,
        ok: b.ok,
        status: b.status,
        statusText: b.statusText,
        body: F ?? _
      };
      tt(t, x), r(x.body);
    }
  } catch (o) {
    a(o);
  }
});
class M {
  /**
   * @returns string Success
   * @throws ApiError
   */
  static getUmbracoManagementApiV1TimeDate() {
    return q(H, {
      method: "GET",
      url: "/umbraco/management/api/v1/time/date",
      errors: {
        401: "The resource is protected and requires an authentication token"
      }
    });
  }
  /**
   * @returns string Success
   * @throws ApiError
   */
  static getUmbracoManagementApiV1TimeTime() {
    return q(H, {
      method: "GET",
      url: "/umbraco/management/api/v1/time/time",
      errors: {
        401: "The resource is protected and requires an authentication token"
      }
    });
  }
}
var p;
class et {
  constructor(t) {
    d(this, p, void 0);
    u(this, p, t);
  }
  async getTime() {
    return await U(s(this, p), M.getUmbracoManagementApiV1TimeTime());
  }
  async getDate() {
    return await U(s(this, p), M.getUmbracoManagementApiV1TimeDate());
  }
}
p = new WeakMap();
var E;
class rt extends P {
  constructor(r) {
    super(r);
    d(this, E, void 0);
    u(this, E, new et(this)), console.log("repository constructor");
  }
  async getTime() {
    return s(this, E).getTime();
  }
  async getDate() {
    return s(this, E).getDate();
  }
}
E = new WeakMap();
var S, w, A;
class st extends P {
  constructor(r) {
    super(r);
    d(this, S, void 0);
    d(this, w, void 0);
    d(this, A, void 0);
    u(this, w, new B("unknown")), this.time = s(this, w).asObservable(), u(this, A, new B("unknown")), this.date = s(this, A).asObservable(), this.provideContext(nt, this), u(this, S, new rt(this));
  }
  async getTime() {
    const { data: r } = await s(this, S).getTime();
    r && s(this, w).setValue(r);
  }
  async getDate() {
    const { data: r } = await s(this, S).getDate();
    r && s(this, A).setValue(r);
  }
}
S = new WeakMap(), w = new WeakMap(), A = new WeakMap();
const nt = new k(st.name);
export {
  nt as TIME_MANAGEMENT_CONTEXT_TOKEN,
  st as TimeManagementContext,
  st as default
};
//# sourceMappingURL=time.context-ZX7YU7Ay.js.map
