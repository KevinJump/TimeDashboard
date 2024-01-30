var B = (e, t, r) => {
  if (!t.has(e))
    throw TypeError("Cannot " + r);
};
var s = (e, t, r) => (B(e, t, "read from private field"), r ? r.call(e) : t.get(e)), d = (e, t, r) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, r);
}, u = (e, t, r, i) => (B(e, t, "write to private field"), i ? i.call(e, r) : t.set(e, r), r);
import { UmbBaseController as _ } from "@umbraco-cms/backoffice/class-api";
import { UmbContextToken as F } from "@umbraco-cms/backoffice/context-api";
import { UmbStringState as U } from "@umbraco-cms/backoffice/observable-api";
import { tryExecuteAndNotify as I } from "@umbraco-cms/backoffice/resources";
import { UMB_AUTH_CONTEXT as L } from "@umbraco-cms/backoffice/auth";
class H extends Error {
  constructor(t, r, i) {
    super(i), this.name = "ApiError", this.url = r.url, this.status = r.status, this.statusText = r.statusText, this.body = r.body, this.request = t;
  }
}
class W extends Error {
  constructor(t) {
    super(t), this.name = "CancelError";
  }
  get isCancelled() {
    return !0;
  }
}
var m, y, l, f, b, C, E;
class J {
  constructor(t) {
    d(this, m, void 0);
    d(this, y, void 0);
    d(this, l, void 0);
    d(this, f, void 0);
    d(this, b, void 0);
    d(this, C, void 0);
    d(this, E, void 0);
    u(this, m, !1), u(this, y, !1), u(this, l, !1), u(this, f, []), u(this, b, new Promise((r, i) => {
      u(this, C, r), u(this, E, i);
      const n = (c) => {
        var h;
        s(this, m) || s(this, y) || s(this, l) || (u(this, m, !0), (h = s(this, C)) == null || h.call(this, c));
      }, o = (c) => {
        var h;
        s(this, m) || s(this, y) || s(this, l) || (u(this, y, !0), (h = s(this, E)) == null || h.call(this, c));
      }, a = (c) => {
        s(this, m) || s(this, y) || s(this, l) || s(this, f).push(c);
      };
      return Object.defineProperty(a, "isResolved", {
        get: () => s(this, m)
      }), Object.defineProperty(a, "isRejected", {
        get: () => s(this, y)
      }), Object.defineProperty(a, "isCancelled", {
        get: () => s(this, l)
      }), t(n, o, a);
    }));
  }
  get [Symbol.toStringTag]() {
    return "Cancellable Promise";
  }
  then(t, r) {
    return s(this, b).then(t, r);
  }
  catch(t) {
    return s(this, b).catch(t);
  }
  finally(t) {
    return s(this, b).finally(t);
  }
  cancel() {
    var t;
    if (!(s(this, m) || s(this, y) || s(this, l))) {
      if (u(this, l, !0), s(this, f).length)
        try {
          for (const r of s(this, f))
            r();
        } catch (r) {
          console.warn("Cancellation threw an error", r);
          return;
        }
      s(this, f).length = 0, (t = s(this, E)) == null || t.call(this, new W("Request aborted"));
    }
  }
  get isCancelled() {
    return s(this, l);
  }
}
m = new WeakMap(), y = new WeakMap(), l = new WeakMap(), f = new WeakMap(), b = new WeakMap(), C = new WeakMap(), E = new WeakMap();
const O = {
  BASE: "",
  VERSION: "Latest",
  WITH_CREDENTIALS: !1,
  CREDENTIALS: "include",
  TOKEN: void 0,
  USERNAME: void 0,
  PASSWORD: void 0,
  HEADERS: void 0,
  ENCODE_PATH: void 0
}, j = (e) => e != null, R = (e) => typeof e == "string", N = (e) => R(e) && e !== "", x = (e) => typeof e == "object" && typeof e.type == "string" && typeof e.stream == "function" && typeof e.arrayBuffer == "function" && typeof e.constructor == "function" && typeof e.constructor.name == "string" && /^(Blob|File)$/.test(e.constructor.name) && /^(Blob|File)$/.test(e[Symbol.toStringTag]), M = (e) => e instanceof FormData, v = (e) => {
  try {
    return btoa(e);
  } catch {
    return Buffer.from(e).toString("base64");
  }
}, G = (e) => {
  const t = [], r = (n, o) => {
    t.push(`${encodeURIComponent(n)}=${encodeURIComponent(String(o))}`);
  }, i = (n, o) => {
    j(o) && (Array.isArray(o) ? o.forEach((a) => {
      i(n, a);
    }) : typeof o == "object" ? Object.entries(o).forEach(([a, c]) => {
      i(`${n}[${a}]`, c);
    }) : r(n, o));
  };
  return Object.entries(e).forEach(([n, o]) => {
    i(n, o);
  }), t.length > 0 ? `?${t.join("&")}` : "";
}, K = (e, t) => {
  const r = e.ENCODE_PATH || encodeURI, i = t.url.replace("{api-version}", e.VERSION).replace(/{(.*?)}/g, (o, a) => {
    var c;
    return (c = t.path) != null && c.hasOwnProperty(a) ? r(String(t.path[a])) : o;
  }), n = `${e.BASE}${i}`;
  return t.query ? `${n}${G(t.query)}` : n;
}, z = (e) => {
  if (e.formData) {
    const t = new FormData(), r = (i, n) => {
      R(n) || x(n) ? t.append(i, n) : t.append(i, JSON.stringify(n));
    };
    return Object.entries(e.formData).filter(([i, n]) => j(n)).forEach(([i, n]) => {
      Array.isArray(n) ? n.forEach((o) => r(i, o)) : r(i, n);
    }), t;
  }
}, D = async (e, t) => typeof t == "function" ? t(e) : t, X = async (e, t) => {
  const r = await D(t, e.TOKEN), i = await D(t, e.USERNAME), n = await D(t, e.PASSWORD), o = await D(t, e.HEADERS), a = Object.entries({
    Accept: "application/json",
    ...o,
    ...t.headers
  }).filter(([c, h]) => j(h)).reduce((c, [h, T]) => ({
    ...c,
    [h]: String(T)
  }), {});
  if (N(r) && (a.Authorization = `Bearer ${r}`), N(i) && N(n)) {
    const c = v(`${i}:${n}`);
    a.Authorization = `Basic ${c}`;
  }
  return t.body && (t.mediaType ? a["Content-Type"] = t.mediaType : x(t.body) ? a["Content-Type"] = t.body.type || "application/octet-stream" : R(t.body) ? a["Content-Type"] = "text/plain" : M(t.body) || (a["Content-Type"] = "application/json")), new Headers(a);
}, Q = (e) => {
  var t;
  if (e.body !== void 0)
    return (t = e.mediaType) != null && t.includes("/json") ? JSON.stringify(e.body) : R(e.body) || x(e.body) || M(e.body) ? e.body : JSON.stringify(e.body);
}, Y = async (e, t, r, i, n, o, a) => {
  const c = new AbortController(), h = {
    headers: o,
    body: i ?? n,
    method: t.method,
    signal: c.signal
  };
  return e.WITH_CREDENTIALS && (h.credentials = e.CREDENTIALS), a(() => c.abort()), await fetch(r, h);
}, Z = (e, t) => {
  if (t) {
    const r = e.headers.get(t);
    if (R(r))
      return r;
  }
}, tt = async (e) => {
  if (e.status !== 204)
    try {
      const t = e.headers.get("Content-Type");
      if (t)
        return ["application/json", "application/problem+json"].some((n) => t.toLowerCase().startsWith(n)) ? await e.json() : await e.text();
    } catch (t) {
      console.error(t);
    }
}, et = (e, t) => {
  const i = {
    400: "Bad Request",
    401: "Unauthorized",
    403: "Forbidden",
    404: "Not Found",
    500: "Internal Server Error",
    502: "Bad Gateway",
    503: "Service Unavailable",
    ...e.errors
  }[t.status];
  if (i)
    throw new H(e, t, i);
  if (!t.ok) {
    const n = t.status ?? "unknown", o = t.statusText ?? "unknown", a = (() => {
      try {
        return JSON.stringify(t.body, null, 2);
      } catch {
        return;
      }
    })();
    throw new H(
      e,
      t,
      `Generic Error: status: ${n}; status text: ${o}; body: ${a}`
    );
  }
}, q = (e, t) => new J(async (r, i, n) => {
  try {
    const o = K(e, t), a = z(t), c = Q(t), h = await X(e, t);
    if (!n.isCancelled) {
      const T = await Y(e, t, o, c, a, h, n), V = await tt(T), k = Z(T, t.responseHeader), $ = {
        url: o,
        ok: T.ok,
        status: T.status,
        statusText: T.statusText,
        body: k ?? V
      };
      et(t, $), r($.body);
    }
  } catch (o) {
    i(o);
  }
});
class P {
  /**
   * @returns string Success
   * @throws ApiError
   */
  static getUmbracoTimeApiV1TimeDate() {
    return q(O, {
      method: "GET",
      url: "/umbraco/time/api/v1/time/date",
      errors: {
        401: "The resource is protected and requires an authentication token"
      }
    });
  }
  /**
   * @returns string Success
   * @throws ApiError
   */
  static getUmbracoTimeApiV1TimeTime() {
    return q(O, {
      method: "GET",
      url: "/umbraco/time/api/v1/time/time",
      errors: {
        401: "The resource is protected and requires an authentication token"
      }
    });
  }
}
var p;
class rt {
  constructor(t) {
    d(this, p, void 0);
    u(this, p, t);
  }
  async getTime() {
    return await I(s(this, p), P.getUmbracoTimeApiV1TimeTime());
  }
  async getDate() {
    return await I(s(this, p), P.getUmbracoTimeApiV1TimeDate());
  }
}
p = new WeakMap();
var g;
class st extends _ {
  constructor(r) {
    super(r);
    d(this, g, void 0);
    u(this, g, new rt(this)), console.log("repository constructor");
  }
  async getTime() {
    return s(this, g).getTime();
  }
  async getDate() {
    return s(this, g).getDate();
  }
}
g = new WeakMap();
var S, w, A;
class nt extends _ {
  constructor(r) {
    super(r);
    d(this, S, void 0);
    d(this, w, void 0);
    d(this, A, void 0);
    u(this, w, new U("unknown")), this.time = s(this, w).asObservable(), u(this, A, new U("unknown")), this.date = s(this, A).asObservable(), this.provideContext(it, this), u(this, S, new st(this)), this.consumeContext(L, (i) => {
      O.TOKEN = () => i.getLatestToken(), O.WITH_CREDENTIALS = !0;
    });
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
const it = new F(nt.name);
export {
  it as TIME_MANAGEMENT_CONTEXT_TOKEN,
  nt as TimeManagementContext,
  nt as default
};
//# sourceMappingURL=time.context-2WucrG8V.js.map
