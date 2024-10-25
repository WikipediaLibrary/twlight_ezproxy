var Ui = {};
/**
* @vue/shared v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function at(e, t) {
  const n = new Set(e.split(","));
  return (o) => n.has(o);
}
const ie = Ui.NODE_ENV !== "production" ? Object.freeze({}) : {}, Zt = Ui.NODE_ENV !== "production" ? Object.freeze([]) : [], ue = () => {
}, Rl = () => !1, Rn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), io = (e) => e.startsWith("onUpdate:"), ae = Object.assign, lr = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Pl = Object.prototype.hasOwnProperty, Q = (e, t) => Pl.call(e, t), j = Array.isArray, en = (e) => ho(e) === "[object Map]", Tl = (e) => ho(e) === "[object Set]", H = (e) => typeof e == "function", de = (e) => typeof e == "string", Pn = (e) => typeof e == "symbol", se = (e) => e !== null && typeof e == "object", cr = (e) => (se(e) || H(e)) && H(e.then) && H(e.catch), Il = Object.prototype.toString, ho = (e) => Il.call(e), ar = (e) => ho(e).slice(8, -1), Al = (e) => ho(e) === "[object Object]", ur = (e) => de(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, vn = /* @__PURE__ */ at(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), kl = /* @__PURE__ */ at(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), mo = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Ml = /-(\w)/g, rn = mo((e) => e.replace(Ml, (t, n) => n ? n.toUpperCase() : "")), jl = /\B([A-Z])/g, xt = mo(
  (e) => e.replace(jl, "-$1").toLowerCase()
), go = mo((e) => e.charAt(0).toUpperCase() + e.slice(1)), kt = mo((e) => e ? `on${go(e)}` : ""), Dt = (e, t) => !Object.is(e, t), un = (e, t) => {
  for (let n = 0; n < e.length; n++)
    e[n](t);
}, Bi = (e, t, n, o = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: o,
    value: n
  });
}, Ll = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let zr;
const fr = () => zr || (zr = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function dr(e) {
  if (j(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], r = de(o) ? Ul(o) : dr(o);
      if (r)
        for (const i in r)
          t[i] = r[i];
    }
    return t;
  } else if (de(e) || se(e))
    return e;
}
const Hl = /;(?![^(]*\))/g, Fl = /:([^]+)/, zl = /\/\*[^]*?\*\//g;
function Ul(e) {
  const t = {};
  return e.replace(zl, "").split(Hl).forEach((n) => {
    if (n) {
      const o = n.split(Fl);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function pr(e) {
  let t = "";
  if (de(e))
    t = e;
  else if (j(e))
    for (let n = 0; n < e.length; n++) {
      const o = pr(e[n]);
      o && (t += o + " ");
    }
  else if (se(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Bl = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", Kl = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", Wl = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", Gl = /* @__PURE__ */ at(Bl), ql = /* @__PURE__ */ at(Kl), Yl = /* @__PURE__ */ at(Wl), Jl = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Ql = /* @__PURE__ */ at(Jl);
function Ki(e) {
  return !!e || e === "";
}
var me = {};
function Ct(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let He;
class Wi {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this.parent = He, !t && He && (this.index = (He.scopes || (He.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const n = He;
      try {
        return He = this, t();
      } finally {
        He = n;
      }
    } else me.NODE_ENV !== "production" && Ct("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    He = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    He = this.parent;
  }
  stop(t) {
    if (this._active) {
      let n, o;
      for (n = 0, o = this.effects.length; n < o; n++)
        this.effects[n].stop();
      for (n = 0, o = this.cleanups.length; n < o; n++)
        this.cleanups[n]();
      if (this.scopes)
        for (n = 0, o = this.scopes.length; n < o; n++)
          this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop();
        r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index);
      }
      this.parent = void 0, this._active = !1;
    }
  }
}
function Xl(e) {
  return new Wi(e);
}
function Zl(e, t = He) {
  t && t.active && t.effects.push(e);
}
function ec() {
  return He;
}
let jt;
class hr {
  constructor(t, n, o, r) {
    this.fn = t, this.trigger = n, this.scheduler = o, this.active = !0, this.deps = [], this._dirtyLevel = 4, this._trackId = 0, this._runnings = 0, this._shouldSchedule = !1, this._depsLength = 0, Zl(this, r);
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      this._dirtyLevel = 1, ut();
      for (let t = 0; t < this._depsLength; t++) {
        const n = this.deps[t];
        if (n.computed && (tc(n.computed), this._dirtyLevel >= 4))
          break;
      }
      this._dirtyLevel === 1 && (this._dirtyLevel = 0), ft();
    }
    return this._dirtyLevel >= 4;
  }
  set dirty(t) {
    this._dirtyLevel = t ? 4 : 0;
  }
  run() {
    if (this._dirtyLevel = 0, !this.active)
      return this.fn();
    let t = Vt, n = jt;
    try {
      return Vt = !0, jt = this, this._runnings++, Ur(this), this.fn();
    } finally {
      Br(this), this._runnings--, jt = n, Vt = t;
    }
  }
  stop() {
    this.active && (Ur(this), Br(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function tc(e) {
  return e.value;
}
function Ur(e) {
  e._trackId++, e._depsLength = 0;
}
function Br(e) {
  if (e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++)
      Gi(e.deps[t], e);
    e.deps.length = e._depsLength;
  }
}
function Gi(e, t) {
  const n = e.get(t);
  n !== void 0 && t._trackId !== n && (e.delete(t), e.size === 0 && e.cleanup());
}
let Vt = !0, Mo = 0;
const qi = [];
function ut() {
  qi.push(Vt), Vt = !1;
}
function ft() {
  const e = qi.pop();
  Vt = e === void 0 ? !0 : e;
}
function mr() {
  Mo++;
}
function gr() {
  for (Mo--; !Mo && jo.length; )
    jo.shift()();
}
function Yi(e, t, n) {
  var o;
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId);
    const r = e.deps[e._depsLength];
    r !== t ? (r && Gi(r, e), e.deps[e._depsLength++] = t) : e._depsLength++, me.NODE_ENV !== "production" && ((o = e.onTrack) == null || o.call(e, ae({ effect: e }, n)));
  }
}
const jo = [];
function Ji(e, t, n) {
  var o;
  mr();
  for (const r of e.keys()) {
    let i;
    r._dirtyLevel < t && (i ?? (i = e.get(r) === r._trackId)) && (r._shouldSchedule || (r._shouldSchedule = r._dirtyLevel === 0), r._dirtyLevel = t), r._shouldSchedule && (i ?? (i = e.get(r) === r._trackId)) && (me.NODE_ENV !== "production" && ((o = r.onTrigger) == null || o.call(r, ae({ effect: r }, n))), r.trigger(), (!r._runnings || r.allowRecurse) && r._dirtyLevel !== 2 && (r._shouldSchedule = !1, r.scheduler && jo.push(r.scheduler)));
  }
  gr();
}
const Qi = (e, t) => {
  const n = /* @__PURE__ */ new Map();
  return n.cleanup = e, n.computed = t, n;
}, Lo = /* @__PURE__ */ new WeakMap(), Lt = Symbol(me.NODE_ENV !== "production" ? "iterate" : ""), Ho = Symbol(me.NODE_ENV !== "production" ? "Map key iterate" : "");
function Ne(e, t, n) {
  if (Vt && jt) {
    let o = Lo.get(e);
    o || Lo.set(e, o = /* @__PURE__ */ new Map());
    let r = o.get(n);
    r || o.set(n, r = Qi(() => o.delete(n))), Yi(
      jt,
      r,
      me.NODE_ENV !== "production" ? {
        target: e,
        type: t,
        key: n
      } : void 0
    );
  }
}
function Ze(e, t, n, o, r, i) {
  const s = Lo.get(e);
  if (!s)
    return;
  let l = [];
  if (t === "clear")
    l = [...s.values()];
  else if (n === "length" && j(e)) {
    const c = Number(o);
    s.forEach((f, d) => {
      (d === "length" || !Pn(d) && d >= c) && l.push(f);
    });
  } else
    switch (n !== void 0 && l.push(s.get(n)), t) {
      case "add":
        j(e) ? ur(n) && l.push(s.get("length")) : (l.push(s.get(Lt)), en(e) && l.push(s.get(Ho)));
        break;
      case "delete":
        j(e) || (l.push(s.get(Lt)), en(e) && l.push(s.get(Ho)));
        break;
      case "set":
        en(e) && l.push(s.get(Lt));
        break;
    }
  mr();
  for (const c of l)
    c && Ji(
      c,
      4,
      me.NODE_ENV !== "production" ? {
        target: e,
        type: t,
        key: n,
        newValue: o,
        oldValue: r,
        oldTarget: i
      } : void 0
    );
  gr();
}
const nc = /* @__PURE__ */ at("__proto__,__v_isRef,__isVue"), Xi = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Pn)
), Kr = /* @__PURE__ */ oc();
function oc() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const o = U(this);
      for (let i = 0, s = this.length; i < s; i++)
        Ne(o, "get", i + "");
      const r = o[t](...n);
      return r === -1 || r === !1 ? o[t](...n.map(U)) : r;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      ut(), mr();
      const o = U(this)[t].apply(this, n);
      return gr(), ft(), o;
    };
  }), e;
}
function rc(e) {
  Pn(e) || (e = String(e));
  const t = U(this);
  return Ne(t, "has", e), t.hasOwnProperty(e);
}
class Zi {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, o) {
    const r = this._isReadonly, i = this._isShallow;
    if (n === "__v_isReactive")
      return !r;
    if (n === "__v_isReadonly")
      return r;
    if (n === "__v_isShallow")
      return i;
    if (n === "__v_raw")
      return o === (r ? i ? ss : is : i ? rs : os).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the reciever is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(o) ? t : void 0;
    const s = j(t);
    if (!r) {
      if (s && Q(Kr, n))
        return Reflect.get(Kr, n, o);
      if (n === "hasOwnProperty")
        return rc;
    }
    const l = Reflect.get(t, n, o);
    return (Pn(n) ? Xi.has(n) : nc(n)) || (r || Ne(t, "get", n), i) ? l : we(l) ? s && ur(n) ? l : l.value : se(l) ? r ? cs(l) : vo(l) : l;
  }
}
class es extends Zi {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, o, r) {
    let i = t[n];
    if (!this._isShallow) {
      const c = Kt(i);
      if (!Ht(o) && !Kt(o) && (i = U(i), o = U(o)), !j(t) && we(i) && !we(o))
        return c ? !1 : (i.value = o, !0);
    }
    const s = j(t) && ur(n) ? Number(n) < t.length : Q(t, n), l = Reflect.set(t, n, o, r);
    return t === U(r) && (s ? Dt(o, i) && Ze(t, "set", n, o, i) : Ze(t, "add", n, o)), l;
  }
  deleteProperty(t, n) {
    const o = Q(t, n), r = t[n], i = Reflect.deleteProperty(t, n);
    return i && o && Ze(t, "delete", n, void 0, r), i;
  }
  has(t, n) {
    const o = Reflect.has(t, n);
    return (!Pn(n) || !Xi.has(n)) && Ne(t, "has", n), o;
  }
  ownKeys(t) {
    return Ne(
      t,
      "iterate",
      j(t) ? "length" : Lt
    ), Reflect.ownKeys(t);
  }
}
class ts extends Zi {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return me.NODE_ENV !== "production" && Ct(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return me.NODE_ENV !== "production" && Ct(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const ic = /* @__PURE__ */ new es(), sc = /* @__PURE__ */ new ts(), lc = /* @__PURE__ */ new es(
  !0
), cc = /* @__PURE__ */ new ts(!0), _r = (e) => e, _o = (e) => Reflect.getPrototypeOf(e);
function Ln(e, t, n = !1, o = !1) {
  e = e.__v_raw;
  const r = U(e), i = U(t);
  n || (Dt(t, i) && Ne(r, "get", t), Ne(r, "get", i));
  const { has: s } = _o(r), l = o ? _r : n ? vr : Sn;
  if (s.call(r, t))
    return l(e.get(t));
  if (s.call(r, i))
    return l(e.get(i));
  e !== r && e.get(t);
}
function Hn(e, t = !1) {
  const n = this.__v_raw, o = U(n), r = U(e);
  return t || (Dt(e, r) && Ne(o, "has", e), Ne(o, "has", r)), e === r ? n.has(e) : n.has(e) || n.has(r);
}
function Fn(e, t = !1) {
  return e = e.__v_raw, !t && Ne(U(e), "iterate", Lt), Reflect.get(e, "size", e);
}
function Wr(e) {
  e = U(e);
  const t = U(this);
  return _o(t).has.call(t, e) || (t.add(e), Ze(t, "add", e, e)), this;
}
function Gr(e, t) {
  t = U(t);
  const n = U(this), { has: o, get: r } = _o(n);
  let i = o.call(n, e);
  i ? me.NODE_ENV !== "production" && ns(n, o, e) : (e = U(e), i = o.call(n, e));
  const s = r.call(n, e);
  return n.set(e, t), i ? Dt(t, s) && Ze(n, "set", e, t, s) : Ze(n, "add", e, t), this;
}
function qr(e) {
  const t = U(this), { has: n, get: o } = _o(t);
  let r = n.call(t, e);
  r ? me.NODE_ENV !== "production" && ns(t, n, e) : (e = U(e), r = n.call(t, e));
  const i = o ? o.call(t, e) : void 0, s = t.delete(e);
  return r && Ze(t, "delete", e, void 0, i), s;
}
function Yr() {
  const e = U(this), t = e.size !== 0, n = me.NODE_ENV !== "production" ? en(e) ? new Map(e) : new Set(e) : void 0, o = e.clear();
  return t && Ze(e, "clear", void 0, void 0, n), o;
}
function zn(e, t) {
  return function(o, r) {
    const i = this, s = i.__v_raw, l = U(s), c = t ? _r : e ? vr : Sn;
    return !e && Ne(l, "iterate", Lt), s.forEach((f, d) => o.call(r, c(f), c(d), i));
  };
}
function Un(e, t, n) {
  return function(...o) {
    const r = this.__v_raw, i = U(r), s = en(i), l = e === "entries" || e === Symbol.iterator && s, c = e === "keys" && s, f = r[e](...o), d = n ? _r : t ? vr : Sn;
    return !t && Ne(
      i,
      "iterate",
      c ? Ho : Lt
    ), {
      // iterator protocol
      next() {
        const { value: u, done: h } = f.next();
        return h ? { value: u, done: h } : {
          value: l ? [d(u[0]), d(u[1])] : d(u),
          done: h
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function _t(e) {
  return function(...t) {
    if (me.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      Ct(
        `${go(e)} operation ${n}failed: target is readonly.`,
        U(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function ac() {
  const e = {
    get(i) {
      return Ln(this, i);
    },
    get size() {
      return Fn(this);
    },
    has: Hn,
    add: Wr,
    set: Gr,
    delete: qr,
    clear: Yr,
    forEach: zn(!1, !1)
  }, t = {
    get(i) {
      return Ln(this, i, !1, !0);
    },
    get size() {
      return Fn(this);
    },
    has: Hn,
    add: Wr,
    set: Gr,
    delete: qr,
    clear: Yr,
    forEach: zn(!1, !0)
  }, n = {
    get(i) {
      return Ln(this, i, !0);
    },
    get size() {
      return Fn(this, !0);
    },
    has(i) {
      return Hn.call(this, i, !0);
    },
    add: _t("add"),
    set: _t("set"),
    delete: _t("delete"),
    clear: _t("clear"),
    forEach: zn(!0, !1)
  }, o = {
    get(i) {
      return Ln(this, i, !0, !0);
    },
    get size() {
      return Fn(this, !0);
    },
    has(i) {
      return Hn.call(this, i, !0);
    },
    add: _t("add"),
    set: _t("set"),
    delete: _t("delete"),
    clear: _t("clear"),
    forEach: zn(!0, !0)
  };
  return [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((i) => {
    e[i] = Un(i, !1, !1), n[i] = Un(i, !0, !1), t[i] = Un(i, !1, !0), o[i] = Un(
      i,
      !0,
      !0
    );
  }), [
    e,
    n,
    t,
    o
  ];
}
const [
  uc,
  fc,
  dc,
  pc
] = /* @__PURE__ */ ac();
function Eo(e, t) {
  const n = t ? e ? pc : dc : e ? fc : uc;
  return (o, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? o : Reflect.get(
    Q(n, r) && r in o ? n : o,
    r,
    i
  );
}
const hc = {
  get: /* @__PURE__ */ Eo(!1, !1)
}, mc = {
  get: /* @__PURE__ */ Eo(!1, !0)
}, gc = {
  get: /* @__PURE__ */ Eo(!0, !1)
}, _c = {
  get: /* @__PURE__ */ Eo(!0, !0)
};
function ns(e, t, n) {
  const o = U(n);
  if (o !== n && t.call(e, o)) {
    const r = ar(e);
    Ct(
      `Reactive ${r} contains both the raw and reactive versions of the same object${r === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const os = /* @__PURE__ */ new WeakMap(), rs = /* @__PURE__ */ new WeakMap(), is = /* @__PURE__ */ new WeakMap(), ss = /* @__PURE__ */ new WeakMap();
function Ec(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function vc(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Ec(ar(e));
}
function vo(e) {
  return Kt(e) ? e : yo(
    e,
    !1,
    ic,
    hc,
    os
  );
}
function ls(e) {
  return yo(
    e,
    !1,
    lc,
    mc,
    rs
  );
}
function cs(e) {
  return yo(
    e,
    !0,
    sc,
    gc,
    is
  );
}
function Xe(e) {
  return yo(
    e,
    !0,
    cc,
    _c,
    ss
  );
}
function yo(e, t, n, o, r) {
  if (!se(e))
    return me.NODE_ENV !== "production" && Ct(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const i = r.get(e);
  if (i)
    return i;
  const s = vc(e);
  if (s === 0)
    return e;
  const l = new Proxy(
    e,
    s === 2 ? o : n
  );
  return r.set(e, l), l;
}
function tn(e) {
  return Kt(e) ? tn(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Kt(e) {
  return !!(e && e.__v_isReadonly);
}
function Ht(e) {
  return !!(e && e.__v_isShallow);
}
function Fo(e) {
  return e ? !!e.__v_raw : !1;
}
function U(e) {
  const t = e && e.__v_raw;
  return t ? U(t) : e;
}
function Er(e) {
  return Object.isExtensible(e) && Bi(e, "__v_skip", !0), e;
}
const Sn = (e) => se(e) ? vo(e) : e, vr = (e) => se(e) ? cs(e) : e, yc = "Computed is still dirty after getter evaluation, likely because a computed is mutating its own dependency in its getter. State mutations in computed getters should be avoided.  Check the docs for more details: https://vuejs.org/guide/essentials/computed.html#getters-should-be-side-effect-free";
class as {
  constructor(t, n, o, r) {
    this.getter = t, this._setter = n, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this.effect = new hr(
      () => t(this._value),
      () => Wn(
        this,
        this.effect._dirtyLevel === 2 ? 2 : 3
      )
    ), this.effect.computed = this, this.effect.active = this._cacheable = !r, this.__v_isReadonly = o;
  }
  get value() {
    const t = U(this);
    return (!t._cacheable || t.effect.dirty) && Dt(t._value, t._value = t.effect.run()) && Wn(t, 4), us(t), t.effect._dirtyLevel >= 2 && (me.NODE_ENV !== "production" && this._warnRecursive && Ct(yc, `

getter: `, this.getter), Wn(t, 2)), t._value;
  }
  set value(t) {
    this._setter(t);
  }
  // #region polyfill _dirty for backward compatibility third party code for Vue <= 3.3.x
  get _dirty() {
    return this.effect.dirty;
  }
  set _dirty(t) {
    this.effect.dirty = t;
  }
  // #endregion
}
function bc(e, t, n = !1) {
  let o, r;
  const i = H(e);
  i ? (o = e, r = me.NODE_ENV !== "production" ? () => {
    Ct("Write operation failed: computed value is readonly");
  } : ue) : (o = e.get, r = e.set);
  const s = new as(o, r, i || !r, n);
  return me.NODE_ENV !== "production" && t && !n && (s.effect.onTrack = t.onTrack, s.effect.onTrigger = t.onTrigger), s;
}
function us(e) {
  var t;
  Vt && jt && (e = U(e), Yi(
    jt,
    (t = e.dep) != null ? t : e.dep = Qi(
      () => e.dep = void 0,
      e instanceof as ? e : void 0
    ),
    me.NODE_ENV !== "production" ? {
      target: e,
      type: "get",
      key: "value"
    } : void 0
  ));
}
function Wn(e, t = 4, n) {
  e = U(e);
  const o = e.dep;
  o && Ji(
    o,
    t,
    me.NODE_ENV !== "production" ? {
      target: e,
      type: "set",
      key: "value",
      newValue: n
    } : void 0
  );
}
function we(e) {
  return !!(e && e.__v_isRef === !0);
}
function fs(e) {
  return ds(e, !1);
}
function Nc(e) {
  return ds(e, !0);
}
function ds(e, t) {
  return we(e) ? e : new wc(e, t);
}
class wc {
  constructor(t, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : U(t), this._value = n ? t : Sn(t);
  }
  get value() {
    return us(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || Ht(t) || Kt(t);
    t = n ? t : U(t), Dt(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : Sn(t), Wn(this, 4, t));
  }
}
function ke(e) {
  return we(e) ? e.value : e;
}
const Oc = {
  get: (e, t, n) => ke(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const r = e[t];
    return we(r) && !we(n) ? (r.value = n, !0) : Reflect.set(e, t, n, o);
  }
};
function ps(e) {
  return tn(e) ? e : new Proxy(e, Oc);
}
var m = {};
const Ft = [];
function Gn(e) {
  Ft.push(e);
}
function qn() {
  Ft.pop();
}
function V(e, ...t) {
  ut();
  const n = Ft.length ? Ft[Ft.length - 1].component : null, o = n && n.appContext.config.warnHandler, r = Vc();
  if (o)
    lt(
      o,
      n,
      11,
      [
        e + t.map((i) => {
          var s, l;
          return (l = (s = i.toString) == null ? void 0 : s.call(i)) != null ? l : JSON.stringify(i);
        }).join(""),
        n && n.proxy,
        r.map(
          ({ vnode: i }) => `at <${Vo(n, i.type)}>`
        ).join(`
`),
        r
      ]
    );
  else {
    const i = [`[Vue warn]: ${e}`, ...t];
    r.length && i.push(`
`, ...Sc(r)), console.warn(...i);
  }
  ft();
}
function Vc() {
  let e = Ft[Ft.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const o = e.component && e.component.parent;
    e = o && o.vnode;
  }
  return t;
}
function Sc(e) {
  const t = [];
  return e.forEach((n, o) => {
    t.push(...o === 0 ? [] : [`
`], ...xc(n));
  }), t;
}
function xc({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, r = ` at <${Vo(
    e.component,
    e.type,
    o
  )}`, i = ">" + n;
  return e.props ? [r, ...Dc(e.props), i] : [r + i];
}
function Dc(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((o) => {
    t.push(...hs(o, e[o]));
  }), n.length > 3 && t.push(" ..."), t;
}
function hs(e, t, n) {
  return de(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : we(t) ? (t = hs(e, U(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : H(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = U(t), n ? t : [`${e}=`, t]);
}
const yr = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://github.com/vuejs/core ."
};
function lt(e, t, n, o) {
  try {
    return o ? e(...o) : e();
  } catch (r) {
    Tn(r, t, n);
  }
}
function Ke(e, t, n, o) {
  if (H(e)) {
    const r = lt(e, t, n, o);
    return r && cr(r) && r.catch((i) => {
      Tn(i, t, n);
    }), r;
  }
  if (j(e)) {
    const r = [];
    for (let i = 0; i < e.length; i++)
      r.push(Ke(e[i], t, n, o));
    return r;
  } else m.NODE_ENV !== "production" && V(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function Tn(e, t, n, o = !0) {
  const r = t ? t.vnode : null;
  if (t) {
    let i = t.parent;
    const s = t.proxy, l = m.NODE_ENV !== "production" ? yr[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; i; ) {
      const f = i.ec;
      if (f) {
        for (let d = 0; d < f.length; d++)
          if (f[d](e, s, l) === !1)
            return;
      }
      i = i.parent;
    }
    const c = t.appContext.config.errorHandler;
    if (c) {
      ut(), lt(
        c,
        null,
        10,
        [e, s, l]
      ), ft();
      return;
    }
  }
  Cc(e, n, r, o);
}
function Cc(e, t, n, o = !0) {
  if (m.NODE_ENV !== "production") {
    const r = yr[t];
    if (n && Gn(n), V(`Unhandled error${r ? ` during execution of ${r}` : ""}`), n && qn(), o)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let xn = !1, zo = !1;
const Ve = [];
let Je = 0;
const nn = [];
let it = null, vt = 0;
const ms = /* @__PURE__ */ Promise.resolve();
let br = null;
const $c = 100;
function gs(e) {
  const t = br || ms;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Rc(e) {
  let t = Je + 1, n = Ve.length;
  for (; t < n; ) {
    const o = t + n >>> 1, r = Ve[o], i = Dn(r);
    i < e || i === e && r.pre ? t = o + 1 : n = o;
  }
  return t;
}
function bo(e) {
  (!Ve.length || !Ve.includes(
    e,
    xn && e.allowRecurse ? Je + 1 : Je
  )) && (e.id == null ? Ve.push(e) : Ve.splice(Rc(e.id), 0, e), _s());
}
function _s() {
  !xn && !zo && (zo = !0, br = ms.then(ys));
}
function Pc(e) {
  const t = Ve.indexOf(e);
  t > Je && Ve.splice(t, 1);
}
function Es(e) {
  j(e) ? nn.push(...e) : (!it || !it.includes(
    e,
    e.allowRecurse ? vt + 1 : vt
  )) && nn.push(e), _s();
}
function Jr(e, t, n = xn ? Je + 1 : 0) {
  for (m.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); n < Ve.length; n++) {
    const o = Ve[n];
    if (o && o.pre) {
      if (e && o.id !== e.uid || m.NODE_ENV !== "production" && Nr(t, o))
        continue;
      Ve.splice(n, 1), n--, o();
    }
  }
}
function vs(e) {
  if (nn.length) {
    const t = [...new Set(nn)].sort(
      (n, o) => Dn(n) - Dn(o)
    );
    if (nn.length = 0, it) {
      it.push(...t);
      return;
    }
    for (it = t, m.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), vt = 0; vt < it.length; vt++)
      m.NODE_ENV !== "production" && Nr(e, it[vt]) || it[vt]();
    it = null, vt = 0;
  }
}
const Dn = (e) => e.id == null ? 1 / 0 : e.id, Tc = (e, t) => {
  const n = Dn(e) - Dn(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function ys(e) {
  zo = !1, xn = !0, m.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), Ve.sort(Tc);
  const t = m.NODE_ENV !== "production" ? (n) => Nr(e, n) : ue;
  try {
    for (Je = 0; Je < Ve.length; Je++) {
      const n = Ve[Je];
      if (n && n.active !== !1) {
        if (m.NODE_ENV !== "production" && t(n))
          continue;
        lt(n, null, 14);
      }
    }
  } finally {
    Je = 0, Ve.length = 0, vs(e), xn = !1, br = null, (Ve.length || nn.length) && ys(e);
  }
}
function Nr(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > $c) {
      const o = t.ownerInstance, r = o && Zs(o.type);
      return Tn(
        `Maximum recursive updates exceeded${r ? ` in component <${r}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
        null,
        10
      ), !0;
    } else
      e.set(t, n + 1);
  }
}
let zt = !1;
const Jt = /* @__PURE__ */ new Set();
m.NODE_ENV !== "production" && (fr().__VUE_HMR_RUNTIME__ = {
  createRecord: xo(bs),
  rerender: xo(kc),
  reload: xo(Mc)
});
const Wt = /* @__PURE__ */ new Map();
function Ic(e) {
  const t = e.type.__hmrId;
  let n = Wt.get(t);
  n || (bs(t, e.type), n = Wt.get(t)), n.instances.add(e);
}
function Ac(e) {
  Wt.get(e.type.__hmrId).instances.delete(e);
}
function bs(e, t) {
  return Wt.has(e) ? !1 : (Wt.set(e, {
    initialDef: yn(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function yn(e) {
  return el(e) ? e.__vccOpts : e;
}
function kc(e, t) {
  const n = Wt.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, yn(o.type).render = t), o.renderCache = [], zt = !0, o.effect.dirty = !0, o.update(), zt = !1;
  }));
}
function Mc(e, t) {
  const n = Wt.get(e);
  if (!n)
    return;
  t = yn(t), Qr(n.initialDef, t);
  const o = [...n.instances];
  for (const r of o) {
    const i = yn(r.type);
    Jt.has(i) || (i !== n.initialDef && Qr(i, t), Jt.add(i)), r.appContext.propsCache.delete(r.type), r.appContext.emitsCache.delete(r.type), r.appContext.optionsCache.delete(r.type), r.ceReload ? (Jt.add(i), r.ceReload(t.styles), Jt.delete(i)) : r.parent ? (r.parent.effect.dirty = !0, bo(r.parent.update)) : r.appContext.reload ? r.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    );
  }
  Es(() => {
    for (const r of o)
      Jt.delete(
        yn(r.type)
      );
  });
}
function Qr(e, t) {
  ae(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function xo(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (o) {
      console.error(o), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let Qe, gn = [], Uo = !1;
function In(e, ...t) {
  Qe ? Qe.emit(e, ...t) : Uo || gn.push({ event: e, args: t });
}
function Ns(e, t) {
  var n, o;
  Qe = e, Qe ? (Qe.enabled = !0, gn.forEach(({ event: r, args: i }) => Qe.emit(r, ...i)), gn = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  !((o = (n = window.navigator) == null ? void 0 : n.userAgent) != null && o.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((i) => {
    Ns(i, t);
  }), setTimeout(() => {
    Qe || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Uo = !0, gn = []);
  }, 3e3)) : (Uo = !0, gn = []);
}
function jc(e, t) {
  In("app:init", e, t, {
    Fragment: $e,
    Text: An,
    Comment: Me,
    Static: Qn
  });
}
function Lc(e) {
  In("app:unmount", e);
}
const Hc = /* @__PURE__ */ wr(
  "component:added"
  /* COMPONENT_ADDED */
), ws = /* @__PURE__ */ wr(
  "component:updated"
  /* COMPONENT_UPDATED */
), Fc = /* @__PURE__ */ wr(
  "component:removed"
  /* COMPONENT_REMOVED */
), zc = (e) => {
  Qe && typeof Qe.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !Qe.cleanupBuffer(e) && Fc(e);
};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function wr(e) {
  return (t) => {
    In(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const Uc = /* @__PURE__ */ Os(
  "perf:start"
  /* PERFORMANCE_START */
), Bc = /* @__PURE__ */ Os(
  "perf:end"
  /* PERFORMANCE_END */
);
function Os(e) {
  return (t, n, o) => {
    In(e, t.appContext.app, t.uid, t, n, o);
  };
}
function Kc(e, t, n) {
  In(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
function Wc(e, t, ...n) {
  if (e.isUnmounted)
    return;
  const o = e.vnode.props || ie;
  if (m.NODE_ENV !== "production") {
    const {
      emitsOptions: d,
      propsOptions: [u]
    } = e;
    if (d)
      if (!(t in d))
        (!u || !(kt(t) in u)) && V(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${kt(t)}" prop.`
        );
      else {
        const h = d[t];
        H(h) && (h(...n) || V(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let r = n;
  const i = t.startsWith("update:"), s = i && t.slice(7);
  if (s && s in o) {
    const d = `${s === "modelValue" ? "model" : s}Modifiers`, { number: u, trim: h } = o[d] || ie;
    h && (r = n.map((g) => de(g) ? g.trim() : g)), u && (r = n.map(Ll));
  }
  if (m.NODE_ENV !== "production" && Kc(e, t, r), m.NODE_ENV !== "production") {
    const d = t.toLowerCase();
    d !== t && o[kt(d)] && V(
      `Event "${d}" is emitted in component ${Vo(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${xt(
        t
      )}" instead of "${t}".`
    );
  }
  let l, c = o[l = kt(t)] || // also try camelCase event handler (#2249)
  o[l = kt(rn(t))];
  !c && i && (c = o[l = kt(xt(t))]), c && Ke(
    c,
    e,
    6,
    r
  );
  const f = o[l + "Once"];
  if (f) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, Ke(
      f,
      e,
      6,
      r
    );
  }
}
function Vs(e, t, n = !1) {
  const o = t.emitsCache, r = o.get(e);
  if (r !== void 0)
    return r;
  const i = e.emits;
  let s = {}, l = !1;
  if (!H(e)) {
    const c = (f) => {
      const d = Vs(f, t, !0);
      d && (l = !0, ae(s, d));
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  return !i && !l ? (se(e) && o.set(e, null), null) : (j(i) ? i.forEach((c) => s[c] = null) : ae(s, i), se(e) && o.set(e, s), s);
}
function No(e, t) {
  return !e || !Rn(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), Q(e, t[0].toLowerCase() + t.slice(1)) || Q(e, xt(t)) || Q(e, t));
}
let be = null, Ss = null;
function so(e) {
  const t = be;
  return be = e, Ss = e && e.type.__scopeId || null, t;
}
function he(e, t = be, n) {
  if (!t || e._n)
    return e;
  const o = (...r) => {
    o._d && ai(-1);
    const i = so(t);
    let s;
    try {
      s = e(...r);
    } finally {
      so(i), o._d && ai(1);
    }
    return m.NODE_ENV !== "production" && ws(t), s;
  };
  return o._n = !0, o._c = !0, o._d = !0, o;
}
let Bo = !1;
function lo() {
  Bo = !0;
}
function Do(e) {
  const {
    type: t,
    vnode: n,
    proxy: o,
    withProxy: r,
    propsOptions: [i],
    slots: s,
    attrs: l,
    emit: c,
    render: f,
    renderCache: d,
    props: u,
    data: h,
    setupState: g,
    ctx: x,
    inheritAttrs: D
  } = e, B = so(e);
  let L, A;
  m.NODE_ENV !== "production" && (Bo = !1);
  try {
    if (n.shapeFlag & 4) {
      const Z = r || o, fe = m.NODE_ENV !== "production" && g.__isScriptSetup ? new Proxy(Z, {
        get(M, ve, pe) {
          return V(
            `Property '${String(
              ve
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(M, ve, pe);
        }
      }) : Z;
      L = ze(
        f.call(
          fe,
          Z,
          d,
          m.NODE_ENV !== "production" ? Xe(u) : u,
          g,
          h,
          x
        )
      ), A = l;
    } else {
      const Z = t;
      m.NODE_ENV !== "production" && l === u && lo(), L = ze(
        Z.length > 1 ? Z(
          m.NODE_ENV !== "production" ? Xe(u) : u,
          m.NODE_ENV !== "production" ? {
            get attrs() {
              return lo(), Xe(l);
            },
            slots: s,
            emit: c
          } : { attrs: l, slots: s, emit: c }
        ) : Z(
          m.NODE_ENV !== "production" ? Xe(u) : u,
          null
        )
      ), A = t.props ? l : Gc(l);
    }
  } catch (Z) {
    wn.length = 0, Tn(Z, e, 1), L = re(Me);
  }
  let T = L, Y;
  if (m.NODE_ENV !== "production" && L.patchFlag > 0 && L.patchFlag & 2048 && ([T, Y] = xs(L)), A && D !== !1) {
    const Z = Object.keys(A), { shapeFlag: fe } = T;
    if (Z.length) {
      if (fe & 7)
        i && Z.some(io) && (A = qc(
          A,
          i
        )), T = $t(T, A, !1, !0);
      else if (m.NODE_ENV !== "production" && !Bo && T.type !== Me) {
        const M = Object.keys(l), ve = [], pe = [];
        for (let Pe = 0, je = M.length; Pe < je; Pe++) {
          const De = M[Pe];
          Rn(De) ? io(De) || ve.push(De[2].toLowerCase() + De.slice(3)) : pe.push(De);
        }
        pe.length && V(
          `Extraneous non-props attributes (${pe.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`
        ), ve.length && V(
          `Extraneous non-emits event listeners (${ve.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (m.NODE_ENV !== "production" && !Xr(T) && V(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), T = $t(T, null, !1, !0), T.dirs = T.dirs ? T.dirs.concat(n.dirs) : n.dirs), n.transition && (m.NODE_ENV !== "production" && !Xr(T) && V(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), T.transition = n.transition), m.NODE_ENV !== "production" && Y ? Y(T) : L = T, so(B), L;
}
const xs = (e) => {
  const t = e.children, n = e.dynamicChildren, o = Or(t, !1);
  if (o) {
    if (m.NODE_ENV !== "production" && o.patchFlag > 0 && o.patchFlag & 2048)
      return xs(o);
  } else return [e, void 0];
  const r = t.indexOf(o), i = n ? n.indexOf(o) : -1, s = (l) => {
    t[r] = l, n && (i > -1 ? n[i] = l : l.patchFlag > 0 && (e.dynamicChildren = [...n, l]));
  };
  return [ze(o), s];
};
function Or(e, t = !0) {
  let n;
  for (let o = 0; o < e.length; o++) {
    const r = e[o];
    if (sn(r)) {
      if (r.type !== Me || r.children === "v-if") {
        if (n)
          return;
        if (n = r, m.NODE_ENV !== "production" && t && n.patchFlag > 0 && n.patchFlag & 2048)
          return Or(n.children);
      }
    } else
      return;
  }
  return n;
}
const Gc = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Rn(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, qc = (e, t) => {
  const n = {};
  for (const o in e)
    (!io(o) || !(o.slice(9) in t)) && (n[o] = e[o]);
  return n;
}, Xr = (e) => e.shapeFlag & 7 || e.type === Me;
function Yc(e, t, n) {
  const { props: o, children: r, component: i } = e, { props: s, children: l, patchFlag: c } = t, f = i.emitsOptions;
  if (m.NODE_ENV !== "production" && (r || l) && zt || t.dirs || t.transition)
    return !0;
  if (n && c >= 0) {
    if (c & 1024)
      return !0;
    if (c & 16)
      return o ? Zr(o, s, f) : !!s;
    if (c & 8) {
      const d = t.dynamicProps;
      for (let u = 0; u < d.length; u++) {
        const h = d[u];
        if (s[h] !== o[h] && !No(f, h))
          return !0;
      }
    }
  } else
    return (r || l) && (!l || !l.$stable) ? !0 : o === s ? !1 : o ? s ? Zr(o, s, f) : !0 : !!s;
  return !1;
}
function Zr(e, t, n) {
  const o = Object.keys(t);
  if (o.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < o.length; r++) {
    const i = o[r];
    if (t[i] !== e[i] && !No(n, i))
      return !0;
  }
  return !1;
}
function Jc({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const o = t.subTree;
    if (o.suspense && o.suspense.activeBranch === e && (o.el = e.el), o === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const Qc = Symbol.for("v-ndc"), Xc = (e) => e.__isSuspense;
function Zc(e, t) {
  t && t.pendingBranch ? j(e) ? t.effects.push(...e) : t.effects.push(e) : Es(e);
}
const ea = Symbol.for("v-scx"), ta = () => {
  {
    const e = ct(ea);
    return e || m.NODE_ENV !== "production" && V(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function na(e, t) {
  return Vr(e, null, t);
}
const Bn = {};
function on(e, t, n) {
  return m.NODE_ENV !== "production" && !H(t) && V(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), Vr(e, t, n);
}
function Vr(e, t, {
  immediate: n,
  deep: o,
  flush: r,
  once: i,
  onTrack: s,
  onTrigger: l
} = ie) {
  if (t && i) {
    const M = t;
    t = (...ve) => {
      M(...ve), fe();
    };
  }
  m.NODE_ENV !== "production" && o !== void 0 && typeof o == "number" && V(
    'watch() "deep" option with number value will be used as watch depth in future versions. Please use a boolean instead to avoid potential breakage.'
  ), m.NODE_ENV !== "production" && !t && (n !== void 0 && V(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), o !== void 0 && V(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), i !== void 0 && V(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const c = (M) => {
    V(
      "Invalid watch source: ",
      M,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, f = Ee, d = (M) => o === !0 ? M : (
    // for deep: false, only traverse root-level properties
    Qt(M, o === !1 ? 1 : void 0)
  );
  let u, h = !1, g = !1;
  if (we(e) ? (u = () => e.value, h = Ht(e)) : tn(e) ? (u = () => d(e), h = !0) : j(e) ? (g = !0, h = e.some((M) => tn(M) || Ht(M)), u = () => e.map((M) => {
    if (we(M))
      return M.value;
    if (tn(M))
      return d(M);
    if (H(M))
      return lt(M, f, 2);
    m.NODE_ENV !== "production" && c(M);
  })) : H(e) ? t ? u = () => lt(e, f, 2) : u = () => (x && x(), Ke(
    e,
    f,
    3,
    [D]
  )) : (u = ue, m.NODE_ENV !== "production" && c(e)), t && o) {
    const M = u;
    u = () => Qt(M());
  }
  let x, D = (M) => {
    x = Y.onStop = () => {
      lt(M, f, 4), x = Y.onStop = void 0;
    };
  }, B;
  if (Oo)
    if (D = ue, t ? n && Ke(t, f, 3, [
      u(),
      g ? [] : void 0,
      D
    ]) : u(), r === "sync") {
      const M = ta();
      B = M.__watcherHandles || (M.__watcherHandles = []);
    } else
      return ue;
  let L = g ? new Array(e.length).fill(Bn) : Bn;
  const A = () => {
    if (!(!Y.active || !Y.dirty))
      if (t) {
        const M = Y.run();
        (o || h || (g ? M.some((ve, pe) => Dt(ve, L[pe])) : Dt(M, L))) && (x && x(), Ke(t, f, 3, [
          M,
          // pass undefined as the old value when it's changed for the first time
          L === Bn ? void 0 : g && L[0] === Bn ? [] : L,
          D
        ]), L = M);
      } else
        Y.run();
  };
  A.allowRecurse = !!t;
  let T;
  r === "sync" ? T = A : r === "post" ? T = () => Ce(A, f && f.suspense) : (A.pre = !0, f && (A.id = f.uid), T = () => bo(A));
  const Y = new hr(u, ue, T), Z = ec(), fe = () => {
    Y.stop(), Z && lr(Z.effects, Y);
  };
  return m.NODE_ENV !== "production" && (Y.onTrack = s, Y.onTrigger = l), t ? n ? A() : L = Y.run() : r === "post" ? Ce(
    Y.run.bind(Y),
    f && f.suspense
  ) : Y.run(), B && B.push(fe), fe;
}
function oa(e, t, n) {
  const o = this.proxy, r = de(e) ? e.includes(".") ? Ds(o, e) : () => o[e] : e.bind(o, o);
  let i;
  H(t) ? i = t : (i = t.handler, n = t);
  const s = kn(this), l = Vr(r, i.bind(o), n);
  return s(), l;
}
function Ds(e, t) {
  const n = t.split(".");
  return () => {
    let o = e;
    for (let r = 0; r < n.length && o; r++)
      o = o[n[r]];
    return o;
  };
}
function Qt(e, t = 1 / 0, n) {
  if (t <= 0 || !se(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, we(e))
    Qt(e.value, t, n);
  else if (j(e))
    for (let o = 0; o < e.length; o++)
      Qt(e[o], t, n);
  else if (Tl(e) || en(e))
    e.forEach((o) => {
      Qt(o, t, n);
    });
  else if (Al(e))
    for (const o in e)
      Qt(e[o], t, n);
  return e;
}
function Cs(e) {
  kl(e) && V("Do not use built-in directive ids as custom directive id: " + e);
}
function It(e, t, n, o) {
  const r = e.dirs, i = t && t.dirs;
  for (let s = 0; s < r.length; s++) {
    const l = r[s];
    i && (l.oldValue = i[s].value);
    let c = l.dir[o];
    c && (ut(), Ke(c, n, 8, [
      e.el,
      l,
      e,
      t
    ]), ft());
  }
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function $s(e, t) {
  return H(e) ? (
    // #8326: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    ae({ name: e.name }, t, { setup: e })
  ) : e;
}
const bn = (e) => !!e.type.__asyncLoader, Sr = (e) => e.type.__isKeepAlive;
function ra(e, t) {
  Rs(e, "a", t);
}
function ia(e, t) {
  Rs(e, "da", t);
}
function Rs(e, t, n = Ee) {
  const o = e.__wdc || (e.__wdc = () => {
    let r = n;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (wo(t, o, n), n) {
    let r = n.parent;
    for (; r && r.parent; )
      Sr(r.parent.vnode) && sa(o, t, n, r), r = r.parent;
  }
}
function sa(e, t, n, o) {
  const r = wo(
    t,
    e,
    o,
    !0
    /* prepend */
  );
  Ps(() => {
    lr(o[t], r);
  }, n);
}
function wo(e, t, n = Ee, o = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...s) => {
      if (n.isUnmounted)
        return;
      ut();
      const l = kn(n), c = Ke(t, n, e, s);
      return l(), ft(), c;
    });
    return o ? r.unshift(i) : r.push(i), i;
  } else if (m.NODE_ENV !== "production") {
    const r = kt(yr[e].replace(/ hook$/, ""));
    V(
      `${r} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const dt = (e) => (t, n = Ee) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!Oo || e === "sp") && wo(e, (...o) => t(...o), n)
), la = dt("bm"), ca = dt("m"), aa = dt("bu"), ua = dt("u"), fa = dt("bum"), Ps = dt("um"), da = dt("sp"), pa = dt(
  "rtg"
), ha = dt(
  "rtc"
);
function ma(e, t = Ee) {
  wo("ec", e, t);
}
function Co(e, t, n = {}, o, r) {
  if (be.isCE || be.parent && bn(be.parent) && be.parent.isCE)
    return t !== "default" && (n.name = t), re("slot", n, o);
  let i = e[t];
  m.NODE_ENV !== "production" && i && i.length > 1 && (V(
    "SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."
  ), i = () => []), i && i._c && (i._d = !1), et();
  const s = i && Ts(i(n)), l = Ka(
    $e,
    {
      key: n.key || // slot content array of a dynamic conditional slot may have a branch
      // key attached in the `createSlots` helper, respect that
      s && s.key || `_${t}`
    },
    s || [],
    s && e._ === 1 ? 64 : -2
  );
  return i && i._c && (i._d = !0), l;
}
function Ts(e) {
  return e.some((t) => sn(t) ? !(t.type === Me || t.type === $e && !Ts(t.children)) : !0) ? e : null;
}
const Ko = (e) => e ? Qs(e) ? Pr(e) || e.proxy : Ko(e.parent) : null, Ut = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ ae(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => m.NODE_ENV !== "production" ? Xe(e.props) : e.props,
    $attrs: (e) => m.NODE_ENV !== "production" ? Xe(e.attrs) : e.attrs,
    $slots: (e) => m.NODE_ENV !== "production" ? Xe(e.slots) : e.slots,
    $refs: (e) => m.NODE_ENV !== "production" ? Xe(e.refs) : e.refs,
    $parent: (e) => Ko(e.parent),
    $root: (e) => Ko(e.root),
    $emit: (e) => e.emit,
    $options: (e) => Dr(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      e.effect.dirty = !0, bo(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = gs.bind(e.proxy)),
    $watch: (e) => oa.bind(e)
  })
), xr = (e) => e === "_" || e === "$", $o = (e, t) => e !== ie && !e.__isScriptSetup && Q(e, t), Is = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: o, data: r, props: i, accessCache: s, type: l, appContext: c } = e;
    if (m.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let f;
    if (t[0] !== "$") {
      const g = s[t];
      if (g !== void 0)
        switch (g) {
          case 1:
            return o[t];
          case 2:
            return r[t];
          case 4:
            return n[t];
          case 3:
            return i[t];
        }
      else {
        if ($o(o, t))
          return s[t] = 1, o[t];
        if (r !== ie && Q(r, t))
          return s[t] = 2, r[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (f = e.propsOptions[0]) && Q(f, t)
        )
          return s[t] = 3, i[t];
        if (n !== ie && Q(n, t))
          return s[t] = 4, n[t];
        Wo && (s[t] = 0);
      }
    }
    const d = Ut[t];
    let u, h;
    if (d)
      return t === "$attrs" ? (Ne(e.attrs, "get", ""), m.NODE_ENV !== "production" && lo()) : m.NODE_ENV !== "production" && t === "$slots" && Ne(e, "get", t), d(e);
    if (
      // css module (injected by vue-loader)
      (u = l.__cssModules) && (u = u[t])
    )
      return u;
    if (n !== ie && Q(n, t))
      return s[t] = 4, n[t];
    if (
      // global properties
      h = c.config.globalProperties, Q(h, t)
    )
      return h[t];
    m.NODE_ENV !== "production" && be && (!de(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (r !== ie && xr(t[0]) && Q(r, t) ? V(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === be && V(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: o, setupState: r, ctx: i } = e;
    return $o(r, t) ? (r[t] = n, !0) : m.NODE_ENV !== "production" && r.__isScriptSetup && Q(r, t) ? (V(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : o !== ie && Q(o, t) ? (o[t] = n, !0) : Q(e.props, t) ? (m.NODE_ENV !== "production" && V(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (m.NODE_ENV !== "production" && V(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (m.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(i, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : i[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: o, appContext: r, propsOptions: i }
  }, s) {
    let l;
    return !!n[s] || e !== ie && Q(e, s) || $o(t, s) || (l = i[0]) && Q(l, s) || Q(o, s) || Q(Ut, s) || Q(r.config.globalProperties, s);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : Q(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
m.NODE_ENV !== "production" && (Is.ownKeys = (e) => (V(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function ga(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(Ut).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => Ut[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: ue
    });
  }), t;
}
function _a(e) {
  const {
    ctx: t,
    propsOptions: [n]
  } = e;
  n && Object.keys(n).forEach((o) => {
    Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[o],
      set: ue
    });
  });
}
function Ea(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(U(n)).forEach((o) => {
    if (!n.__isScriptSetup) {
      if (xr(o[0])) {
        V(
          `setup() return property ${JSON.stringify(
            o
          )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
        );
        return;
      }
      Object.defineProperty(t, o, {
        enumerable: !0,
        configurable: !0,
        get: () => n[o],
        set: ue
      });
    }
  });
}
function ei(e) {
  return j(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function va() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? V(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let Wo = !0;
function ya(e) {
  const t = Dr(e), n = e.proxy, o = e.ctx;
  Wo = !1, t.beforeCreate && ti(t.beforeCreate, e, "bc");
  const {
    // state
    data: r,
    computed: i,
    methods: s,
    watch: l,
    provide: c,
    inject: f,
    // lifecycle
    created: d,
    beforeMount: u,
    mounted: h,
    beforeUpdate: g,
    updated: x,
    activated: D,
    deactivated: B,
    beforeDestroy: L,
    beforeUnmount: A,
    destroyed: T,
    unmounted: Y,
    render: Z,
    renderTracked: fe,
    renderTriggered: M,
    errorCaptured: ve,
    serverPrefetch: pe,
    // public API
    expose: Pe,
    inheritAttrs: je,
    // assets
    components: De,
    directives: We,
    filters: Mn
  } = t, Te = m.NODE_ENV !== "production" ? va() : null;
  if (m.NODE_ENV !== "production") {
    const [K] = e.propsOptions;
    if (K)
      for (const W in K)
        Te("Props", W);
  }
  if (f && ba(f, o, Te), s)
    for (const K in s) {
      const W = s[K];
      H(W) ? (m.NODE_ENV !== "production" ? Object.defineProperty(o, K, {
        value: W.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : o[K] = W.bind(n), m.NODE_ENV !== "production" && Te("Methods", K)) : m.NODE_ENV !== "production" && V(
        `Method "${K}" has type "${typeof W}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (r) {
    m.NODE_ENV !== "production" && !H(r) && V(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const K = r.call(n, n);
    if (m.NODE_ENV !== "production" && cr(K) && V(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !se(K))
      m.NODE_ENV !== "production" && V("data() should return an object.");
    else if (e.data = vo(K), m.NODE_ENV !== "production")
      for (const W in K)
        Te("Data", W), xr(W[0]) || Object.defineProperty(o, W, {
          configurable: !0,
          enumerable: !0,
          get: () => K[W],
          set: ue
        });
  }
  if (Wo = !0, i)
    for (const K in i) {
      const W = i[K], Ie = H(W) ? W.bind(n, n) : H(W.get) ? W.get.bind(n, n) : ue;
      m.NODE_ENV !== "production" && Ie === ue && V(`Computed property "${K}" has no getter.`);
      const Tt = !H(W) && H(W.set) ? W.set.bind(n) : m.NODE_ENV !== "production" ? () => {
        V(
          `Write operation failed: computed property "${K}" is readonly.`
        );
      } : ue, ht = Ue({
        get: Ie,
        set: Tt
      });
      Object.defineProperty(o, K, {
        enumerable: !0,
        configurable: !0,
        get: () => ht.value,
        set: (Ge) => ht.value = Ge
      }), m.NODE_ENV !== "production" && Te("Computed", K);
    }
  if (l)
    for (const K in l)
      As(l[K], o, n, K);
  if (c) {
    const K = H(c) ? c.call(n) : c;
    Reflect.ownKeys(K).forEach((W) => {
      Yn(W, K[W]);
    });
  }
  d && ti(d, e, "c");
  function ye(K, W) {
    j(W) ? W.forEach((Ie) => K(Ie.bind(n))) : W && K(W.bind(n));
  }
  if (ye(la, u), ye(ca, h), ye(aa, g), ye(ua, x), ye(ra, D), ye(ia, B), ye(ma, ve), ye(ha, fe), ye(pa, M), ye(fa, A), ye(Ps, Y), ye(da, pe), j(Pe))
    if (Pe.length) {
      const K = e.exposed || (e.exposed = {});
      Pe.forEach((W) => {
        Object.defineProperty(K, W, {
          get: () => n[W],
          set: (Ie) => n[W] = Ie
        });
      });
    } else e.exposed || (e.exposed = {});
  Z && e.render === ue && (e.render = Z), je != null && (e.inheritAttrs = je), De && (e.components = De), We && (e.directives = We);
}
function ba(e, t, n = ue) {
  j(e) && (e = Go(e));
  for (const o in e) {
    const r = e[o];
    let i;
    se(r) ? "default" in r ? i = ct(
      r.from || o,
      r.default,
      !0
    ) : i = ct(r.from || o) : i = ct(r), we(i) ? Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (s) => i.value = s
    }) : t[o] = i, m.NODE_ENV !== "production" && n("Inject", o);
  }
}
function ti(e, t, n) {
  Ke(
    j(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function As(e, t, n, o) {
  const r = o.includes(".") ? Ds(n, o) : () => n[o];
  if (de(e)) {
    const i = t[e];
    H(i) ? on(r, i) : m.NODE_ENV !== "production" && V(`Invalid watch handler specified by key "${e}"`, i);
  } else if (H(e))
    on(r, e.bind(n));
  else if (se(e))
    if (j(e))
      e.forEach((i) => As(i, t, n, o));
    else {
      const i = H(e.handler) ? e.handler.bind(n) : t[e.handler];
      H(i) ? on(r, i, e) : m.NODE_ENV !== "production" && V(`Invalid watch handler specified by key "${e.handler}"`, i);
    }
  else m.NODE_ENV !== "production" && V(`Invalid watch option: "${o}"`, e);
}
function Dr(e) {
  const t = e.type, { mixins: n, extends: o } = t, {
    mixins: r,
    optionsCache: i,
    config: { optionMergeStrategies: s }
  } = e.appContext, l = i.get(t);
  let c;
  return l ? c = l : !r.length && !n && !o ? c = t : (c = {}, r.length && r.forEach(
    (f) => co(c, f, s, !0)
  ), co(c, t, s)), se(t) && i.set(t, c), c;
}
function co(e, t, n, o = !1) {
  const { mixins: r, extends: i } = t;
  i && co(e, i, n, !0), r && r.forEach(
    (s) => co(e, s, n, !0)
  );
  for (const s in t)
    if (o && s === "expose")
      m.NODE_ENV !== "production" && V(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const l = Na[s] || n && n[s];
      e[s] = l ? l(e[s], t[s]) : t[s];
    }
  return e;
}
const Na = {
  data: ni,
  props: oi,
  emits: oi,
  // objects
  methods: _n,
  computed: _n,
  // lifecycle
  beforeCreate: xe,
  created: xe,
  beforeMount: xe,
  mounted: xe,
  beforeUpdate: xe,
  updated: xe,
  beforeDestroy: xe,
  beforeUnmount: xe,
  destroyed: xe,
  unmounted: xe,
  activated: xe,
  deactivated: xe,
  errorCaptured: xe,
  serverPrefetch: xe,
  // assets
  components: _n,
  directives: _n,
  // watch
  watch: Oa,
  // provide / inject
  provide: ni,
  inject: wa
};
function ni(e, t) {
  return t ? e ? function() {
    return ae(
      H(e) ? e.call(this, this) : e,
      H(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function wa(e, t) {
  return _n(Go(e), Go(t));
}
function Go(e) {
  if (j(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function xe(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function _n(e, t) {
  return e ? ae(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function oi(e, t) {
  return e ? j(e) && j(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : ae(
    /* @__PURE__ */ Object.create(null),
    ei(e),
    ei(t ?? {})
  ) : t;
}
function Oa(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = ae(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    n[o] = xe(e[o], t[o]);
  return n;
}
function ks() {
  return {
    app: null,
    config: {
      isNativeTag: Rl,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let Va = 0;
function Sa(e, t) {
  return function(o, r = null) {
    H(o) || (o = ae({}, o)), r != null && !se(r) && (m.NODE_ENV !== "production" && V("root props passed to app.mount() must be an object."), r = null);
    const i = ks(), s = /* @__PURE__ */ new WeakSet();
    let l = !1;
    const c = i.app = {
      _uid: Va++,
      _component: o,
      _props: r,
      _container: null,
      _context: i,
      _instance: null,
      version: pi,
      get config() {
        return i.config;
      },
      set config(f) {
        m.NODE_ENV !== "production" && V(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(f, ...d) {
        return s.has(f) ? m.NODE_ENV !== "production" && V("Plugin has already been applied to target app.") : f && H(f.install) ? (s.add(f), f.install(c, ...d)) : H(f) ? (s.add(f), f(c, ...d)) : m.NODE_ENV !== "production" && V(
          'A plugin must either be a function or an object with an "install" function.'
        ), c;
      },
      mixin(f) {
        return i.mixins.includes(f) ? m.NODE_ENV !== "production" && V(
          "Mixin has already been applied to target app" + (f.name ? `: ${f.name}` : "")
        ) : i.mixins.push(f), c;
      },
      component(f, d) {
        return m.NODE_ENV !== "production" && Xo(f, i.config), d ? (m.NODE_ENV !== "production" && i.components[f] && V(`Component "${f}" has already been registered in target app.`), i.components[f] = d, c) : i.components[f];
      },
      directive(f, d) {
        return m.NODE_ENV !== "production" && Cs(f), d ? (m.NODE_ENV !== "production" && i.directives[f] && V(`Directive "${f}" has already been registered in target app.`), i.directives[f] = d, c) : i.directives[f];
      },
      mount(f, d, u) {
        if (l)
          m.NODE_ENV !== "production" && V(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          m.NODE_ENV !== "production" && f.__vue_app__ && V(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const h = re(o, r);
          return h.appContext = i, u === !0 ? u = "svg" : u === !1 && (u = void 0), m.NODE_ENV !== "production" && (i.reload = () => {
            e(
              $t(h),
              f,
              u
            );
          }), d && t ? t(h, f) : e(h, f, u), l = !0, c._container = f, f.__vue_app__ = c, m.NODE_ENV !== "production" && (c._instance = h.component, jc(c, pi)), Pr(h.component) || h.component.proxy;
        }
      },
      unmount() {
        l ? (e(null, c._container), m.NODE_ENV !== "production" && (c._instance = null, Lc(c)), delete c._container.__vue_app__) : m.NODE_ENV !== "production" && V("Cannot unmount an app that is not mounted.");
      },
      provide(f, d) {
        return m.NODE_ENV !== "production" && f in i.provides && V(
          `App already provides property with key "${String(f)}". It will be overwritten with the new value.`
        ), i.provides[f] = d, c;
      },
      runWithContext(f) {
        const d = Nn;
        Nn = c;
        try {
          return f();
        } finally {
          Nn = d;
        }
      }
    };
    return c;
  };
}
let Nn = null;
function Yn(e, t) {
  if (!Ee)
    m.NODE_ENV !== "production" && V("provide() can only be used inside setup().");
  else {
    let n = Ee.provides;
    const o = Ee.parent && Ee.parent.provides;
    o === n && (n = Ee.provides = Object.create(o)), n[e] = t;
  }
}
function ct(e, t, n = !1) {
  const o = Ee || be;
  if (o || Nn) {
    const r = o ? o.parent == null ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : Nn._context.provides;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && H(t) ? t.call(o && o.proxy) : t;
    m.NODE_ENV !== "production" && V(`injection "${String(e)}" not found.`);
  } else m.NODE_ENV !== "production" && V("inject() can only be used inside setup() or functional components.");
}
const Ms = {}, js = () => Object.create(Ms), Ls = (e) => Object.getPrototypeOf(e) === Ms;
function xa(e, t, n, o = !1) {
  const r = {}, i = js();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Hs(e, t, r, i);
  for (const s in e.propsOptions[0])
    s in r || (r[s] = void 0);
  m.NODE_ENV !== "production" && zs(t || {}, r, e), n ? e.props = o ? r : ls(r) : e.type.props ? e.props = r : e.props = i, e.attrs = i;
}
function Da(e) {
  for (; e; ) {
    if (e.type.__hmrId)
      return !0;
    e = e.parent;
  }
}
function Ca(e, t, n, o) {
  const {
    props: r,
    attrs: i,
    vnode: { patchFlag: s }
  } = e, l = U(r), [c] = e.propsOptions;
  let f = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(m.NODE_ENV !== "production" && Da(e)) && (o || s > 0) && !(s & 16)
  ) {
    if (s & 8) {
      const d = e.vnode.dynamicProps;
      for (let u = 0; u < d.length; u++) {
        let h = d[u];
        if (No(e.emitsOptions, h))
          continue;
        const g = t[h];
        if (c)
          if (Q(i, h))
            g !== i[h] && (i[h] = g, f = !0);
          else {
            const x = rn(h);
            r[x] = qo(
              c,
              l,
              x,
              g,
              e,
              !1
            );
          }
        else
          g !== i[h] && (i[h] = g, f = !0);
      }
    }
  } else {
    Hs(e, t, r, i) && (f = !0);
    let d;
    for (const u in l)
      (!t || // for camelCase
      !Q(t, u) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((d = xt(u)) === u || !Q(t, d))) && (c ? n && // for camelCase
      (n[u] !== void 0 || // for kebab-case
      n[d] !== void 0) && (r[u] = qo(
        c,
        l,
        u,
        void 0,
        e,
        !0
      )) : delete r[u]);
    if (i !== l)
      for (const u in i)
        (!t || !Q(t, u)) && (delete i[u], f = !0);
  }
  f && Ze(e.attrs, "set", ""), m.NODE_ENV !== "production" && zs(t || {}, r, e);
}
function Hs(e, t, n, o) {
  const [r, i] = e.propsOptions;
  let s = !1, l;
  if (t)
    for (let c in t) {
      if (vn(c))
        continue;
      const f = t[c];
      let d;
      r && Q(r, d = rn(c)) ? !i || !i.includes(d) ? n[d] = f : (l || (l = {}))[d] = f : No(e.emitsOptions, c) || (!(c in o) || f !== o[c]) && (o[c] = f, s = !0);
    }
  if (i) {
    const c = U(n), f = l || ie;
    for (let d = 0; d < i.length; d++) {
      const u = i[d];
      n[u] = qo(
        r,
        c,
        u,
        f[u],
        e,
        !Q(f, u)
      );
    }
  }
  return s;
}
function qo(e, t, n, o, r, i) {
  const s = e[n];
  if (s != null) {
    const l = Q(s, "default");
    if (l && o === void 0) {
      const c = s.default;
      if (s.type !== Function && !s.skipFactory && H(c)) {
        const { propsDefaults: f } = r;
        if (n in f)
          o = f[n];
        else {
          const d = kn(r);
          o = f[n] = c.call(
            null,
            t
          ), d();
        }
      } else
        o = c;
    }
    s[
      0
      /* shouldCast */
    ] && (i && !l ? o = !1 : s[
      1
      /* shouldCastTrue */
    ] && (o === "" || o === xt(n)) && (o = !0));
  }
  return o;
}
function Fs(e, t, n = !1) {
  const o = t.propsCache, r = o.get(e);
  if (r)
    return r;
  const i = e.props, s = {}, l = [];
  let c = !1;
  if (!H(e)) {
    const d = (u) => {
      c = !0;
      const [h, g] = Fs(u, t, !0);
      ae(s, h), g && l.push(...g);
    };
    !n && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  if (!i && !c)
    return se(e) && o.set(e, Zt), Zt;
  if (j(i))
    for (let d = 0; d < i.length; d++) {
      m.NODE_ENV !== "production" && !de(i[d]) && V("props must be strings when using array syntax.", i[d]);
      const u = rn(i[d]);
      ri(u) && (s[u] = ie);
    }
  else if (i) {
    m.NODE_ENV !== "production" && !se(i) && V("invalid props options", i);
    for (const d in i) {
      const u = rn(d);
      if (ri(u)) {
        const h = i[d], g = s[u] = j(h) || H(h) ? { type: h } : ae({}, h);
        if (g) {
          const x = si(Boolean, g.type), D = si(String, g.type);
          g[
            0
            /* shouldCast */
          ] = x > -1, g[
            1
            /* shouldCastTrue */
          ] = D < 0 || x < D, (x > -1 || Q(g, "default")) && l.push(u);
        }
      }
    }
  }
  const f = [s, l];
  return se(e) && o.set(e, f), f;
}
function ri(e) {
  return e[0] !== "$" && !vn(e) ? !0 : (m.NODE_ENV !== "production" && V(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function Yo(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function ii(e, t) {
  return Yo(e) === Yo(t);
}
function si(e, t) {
  return j(t) ? t.findIndex((n) => ii(n, e)) : H(t) && ii(t, e) ? 0 : -1;
}
function zs(e, t, n) {
  const o = U(t), r = n.propsOptions[0];
  for (const i in r) {
    let s = r[i];
    s != null && $a(
      i,
      o[i],
      s,
      m.NODE_ENV !== "production" ? Xe(o) : o,
      !Q(e, i) && !Q(e, xt(i))
    );
  }
}
function $a(e, t, n, o, r) {
  const { type: i, required: s, validator: l, skipCheck: c } = n;
  if (s && r) {
    V('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !s)) {
    if (i != null && i !== !0 && !c) {
      let f = !1;
      const d = j(i) ? i : [i], u = [];
      for (let h = 0; h < d.length && !f; h++) {
        const { valid: g, expectedType: x } = Pa(t, d[h]);
        u.push(x || ""), f = g;
      }
      if (!f) {
        V(Ta(e, t, u));
        return;
      }
    }
    l && !l(t, o) && V('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const Ra = /* @__PURE__ */ at(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function Pa(e, t) {
  let n;
  const o = Yo(t);
  if (Ra(o)) {
    const r = typeof e;
    n = r === o.toLowerCase(), !n && r === "object" && (n = e instanceof t);
  } else o === "Object" ? n = se(e) : o === "Array" ? n = j(e) : o === "null" ? n = e === null : n = e instanceof t;
  return {
    valid: n,
    expectedType: o
  };
}
function Ta(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let o = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(go).join(" | ")}`;
  const r = n[0], i = ar(t), s = li(t, r), l = li(t, i);
  return n.length === 1 && ci(r) && !Ia(r, i) && (o += ` with value ${s}`), o += `, got ${i} `, ci(i) && (o += `with value ${l}.`), o;
}
function li(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function ci(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function Ia(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const Us = (e) => e[0] === "_" || e === "$stable", Cr = (e) => j(e) ? e.map(ze) : [ze(e)], Aa = (e, t, n) => {
  if (t._n)
    return t;
  const o = he((...r) => (m.NODE_ENV !== "production" && Ee && (!n || n.root === Ee.root) && V(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), Cr(t(...r))), n);
  return o._c = !1, o;
}, Bs = (e, t, n) => {
  const o = e._ctx;
  for (const r in e) {
    if (Us(r))
      continue;
    const i = e[r];
    if (H(i))
      t[r] = Aa(r, i, o);
    else if (i != null) {
      m.NODE_ENV !== "production" && V(
        `Non-function value encountered for slot "${r}". Prefer function slots for better performance.`
      );
      const s = Cr(i);
      t[r] = () => s;
    }
  }
}, Ks = (e, t) => {
  m.NODE_ENV !== "production" && !Sr(e.vnode) && V(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = Cr(t);
  e.slots.default = () => n;
}, ka = (e, t) => {
  const n = e.slots = js();
  if (e.vnode.shapeFlag & 32) {
    const o = t._;
    o ? (ae(n, t), Bi(n, "_", o, !0)) : Bs(t, n);
  } else t && Ks(e, t);
}, Ma = (e, t, n) => {
  const { vnode: o, slots: r } = e;
  let i = !0, s = ie;
  if (o.shapeFlag & 32) {
    const l = t._;
    l ? m.NODE_ENV !== "production" && zt ? (ae(r, t), Ze(e, "set", "$slots")) : n && l === 1 ? i = !1 : (ae(r, t), !n && l === 1 && delete r._) : (i = !t.$stable, Bs(t, r)), s = t;
  } else t && (Ks(e, t), s = { default: 1 });
  if (i)
    for (const l in r)
      !Us(l) && s[l] == null && delete r[l];
};
function Jo(e, t, n, o, r = !1) {
  if (j(e)) {
    e.forEach(
      (h, g) => Jo(
        h,
        t && (j(t) ? t[g] : t),
        n,
        o,
        r
      )
    );
    return;
  }
  if (bn(o) && !r)
    return;
  const i = o.shapeFlag & 4 ? Pr(o.component) || o.component.proxy : o.el, s = r ? null : i, { i: l, r: c } = e;
  if (m.NODE_ENV !== "production" && !l) {
    V(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const f = t && t.r, d = l.refs === ie ? l.refs = {} : l.refs, u = l.setupState;
  if (f != null && f !== c && (de(f) ? (d[f] = null, Q(u, f) && (u[f] = null)) : we(f) && (f.value = null)), H(c))
    lt(c, l, 12, [s, d]);
  else {
    const h = de(c), g = we(c);
    if (h || g) {
      const x = () => {
        if (e.f) {
          const D = h ? Q(u, c) ? u[c] : d[c] : c.value;
          r ? j(D) && lr(D, i) : j(D) ? D.includes(i) || D.push(i) : h ? (d[c] = [i], Q(u, c) && (u[c] = d[c])) : (c.value = [i], e.k && (d[e.k] = c.value));
        } else h ? (d[c] = s, Q(u, c) && (u[c] = s)) : g ? (c.value = s, e.k && (d[e.k] = s)) : m.NODE_ENV !== "production" && V("Invalid template ref type:", c, `(${typeof c})`);
      };
      s ? (x.id = -1, Ce(x, n)) : x();
    } else m.NODE_ENV !== "production" && V("Invalid template ref type:", c, `(${typeof c})`);
  }
}
let fn, wt;
function ot(e, t) {
  e.appContext.config.performance && ao() && wt.mark(`vue-${t}-${e.uid}`), m.NODE_ENV !== "production" && Uc(e, t, ao() ? wt.now() : Date.now());
}
function rt(e, t) {
  if (e.appContext.config.performance && ao()) {
    const n = `vue-${t}-${e.uid}`, o = n + ":end";
    wt.mark(o), wt.measure(
      `<${Vo(e, e.type)}> ${t}`,
      n,
      o
    ), wt.clearMarks(n), wt.clearMarks(o);
  }
  m.NODE_ENV !== "production" && Bc(e, t, ao() ? wt.now() : Date.now());
}
function ao() {
  return fn !== void 0 || (typeof window < "u" && window.performance ? (fn = !0, wt = window.performance) : fn = !1), fn;
}
function ja() {
  const e = [];
  if (m.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const Ce = Zc;
function La(e) {
  return Ha(e);
}
function Ha(e, t) {
  ja();
  const n = fr();
  n.__VUE__ = !0, m.NODE_ENV !== "production" && Ns(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const {
    insert: o,
    remove: r,
    patchProp: i,
    createElement: s,
    createText: l,
    createComment: c,
    setText: f,
    setElementText: d,
    parentNode: u,
    nextSibling: h,
    setScopeId: g = ue,
    insertStaticContent: x
  } = e, D = (a, p, _, v = null, y = null, w = null, S = void 0, N = null, O = m.NODE_ENV !== "production" && zt ? !1 : !!p.dynamicChildren) => {
    if (a === p)
      return;
    a && !dn(a, p) && (v = $(a), Ae(a, y, w, !0), a = null), p.patchFlag === -2 && (O = !1, p.dynamicChildren = null);
    const { type: b, ref: R, shapeFlag: k } = p;
    switch (b) {
      case An:
        B(a, p, _, v);
        break;
      case Me:
        L(a, p, _, v);
        break;
      case Qn:
        a == null ? A(p, _, v, S) : m.NODE_ENV !== "production" && T(a, p, _, S);
        break;
      case $e:
        We(
          a,
          p,
          _,
          v,
          y,
          w,
          S,
          N,
          O
        );
        break;
      default:
        k & 1 ? fe(
          a,
          p,
          _,
          v,
          y,
          w,
          S,
          N,
          O
        ) : k & 6 ? Mn(
          a,
          p,
          _,
          v,
          y,
          w,
          S,
          N,
          O
        ) : k & 64 || k & 128 ? b.process(
          a,
          p,
          _,
          v,
          y,
          w,
          S,
          N,
          O,
          J
        ) : m.NODE_ENV !== "production" && V("Invalid VNode type:", b, `(${typeof b})`);
    }
    R != null && y && Jo(R, a && a.ref, w, p || a, !p);
  }, B = (a, p, _, v) => {
    if (a == null)
      o(
        p.el = l(p.children),
        _,
        v
      );
    else {
      const y = p.el = a.el;
      p.children !== a.children && f(y, p.children);
    }
  }, L = (a, p, _, v) => {
    a == null ? o(
      p.el = c(p.children || ""),
      _,
      v
    ) : p.el = a.el;
  }, A = (a, p, _, v) => {
    [a.el, a.anchor] = x(
      a.children,
      p,
      _,
      v,
      a.el,
      a.anchor
    );
  }, T = (a, p, _, v) => {
    if (p.children !== a.children) {
      const y = h(a.anchor);
      Z(a), [p.el, p.anchor] = x(
        p.children,
        _,
        y,
        v
      );
    } else
      p.el = a.el, p.anchor = a.anchor;
  }, Y = ({ el: a, anchor: p }, _, v) => {
    let y;
    for (; a && a !== p; )
      y = h(a), o(a, _, v), a = y;
    o(p, _, v);
  }, Z = ({ el: a, anchor: p }) => {
    let _;
    for (; a && a !== p; )
      _ = h(a), r(a), a = _;
    r(p);
  }, fe = (a, p, _, v, y, w, S, N, O) => {
    p.type === "svg" ? S = "svg" : p.type === "math" && (S = "mathml"), a == null ? M(
      p,
      _,
      v,
      y,
      w,
      S,
      N,
      O
    ) : Pe(
      a,
      p,
      y,
      w,
      S,
      N,
      O
    );
  }, M = (a, p, _, v, y, w, S, N) => {
    let O, b;
    const { props: R, shapeFlag: k, transition: I, dirs: F } = a;
    if (O = a.el = s(
      a.type,
      w,
      R && R.is,
      R
    ), k & 8 ? d(O, a.children) : k & 16 && pe(
      a.children,
      O,
      null,
      v,
      y,
      Ro(a, w),
      S,
      N
    ), F && It(a, null, v, "created"), ve(O, a, a.scopeId, S, v), R) {
      for (const oe in R)
        oe !== "value" && !vn(oe) && i(
          O,
          oe,
          null,
          R[oe],
          w,
          a.children,
          v,
          y,
          E
        );
      "value" in R && i(O, "value", null, R.value, w), (b = R.onVnodeBeforeMount) && Ye(b, v, a);
    }
    m.NODE_ENV !== "production" && (Object.defineProperty(O, "__vnode", {
      value: a,
      enumerable: !1
    }), Object.defineProperty(O, "__vueParentComponent", {
      value: v,
      enumerable: !1
    })), F && It(a, null, v, "beforeMount");
    const X = Fa(y, I);
    X && I.beforeEnter(O), o(O, p, _), ((b = R && R.onVnodeMounted) || X || F) && Ce(() => {
      b && Ye(b, v, a), X && I.enter(O), F && It(a, null, v, "mounted");
    }, y);
  }, ve = (a, p, _, v, y) => {
    if (_ && g(a, _), v)
      for (let w = 0; w < v.length; w++)
        g(a, v[w]);
    if (y) {
      let w = y.subTree;
      if (m.NODE_ENV !== "production" && w.patchFlag > 0 && w.patchFlag & 2048 && (w = Or(w.children) || w), p === w) {
        const S = y.vnode;
        ve(
          a,
          S,
          S.scopeId,
          S.slotScopeIds,
          y.parent
        );
      }
    }
  }, pe = (a, p, _, v, y, w, S, N, O = 0) => {
    for (let b = O; b < a.length; b++) {
      const R = a[b] = N ? yt(a[b]) : ze(a[b]);
      D(
        null,
        R,
        p,
        _,
        v,
        y,
        w,
        S,
        N
      );
    }
  }, Pe = (a, p, _, v, y, w, S) => {
    const N = p.el = a.el;
    let { patchFlag: O, dynamicChildren: b, dirs: R } = p;
    O |= a.patchFlag & 16;
    const k = a.props || ie, I = p.props || ie;
    let F;
    if (_ && At(_, !1), (F = I.onVnodeBeforeUpdate) && Ye(F, _, p, a), R && It(p, a, _, "beforeUpdate"), _ && At(_, !0), m.NODE_ENV !== "production" && zt && (O = 0, S = !1, b = null), b ? (je(
      a.dynamicChildren,
      b,
      N,
      _,
      v,
      Ro(p, y),
      w
    ), m.NODE_ENV !== "production" && Jn(a, p)) : S || Ie(
      a,
      p,
      N,
      null,
      _,
      v,
      Ro(p, y),
      w,
      !1
    ), O > 0) {
      if (O & 16)
        De(
          N,
          p,
          k,
          I,
          _,
          v,
          y
        );
      else if (O & 2 && k.class !== I.class && i(N, "class", null, I.class, y), O & 4 && i(N, "style", k.style, I.style, y), O & 8) {
        const X = p.dynamicProps;
        for (let oe = 0; oe < X.length; oe++) {
          const le = X[oe], ge = k[le], Le = I[le];
          (Le !== ge || le === "value") && i(
            N,
            le,
            ge,
            Le,
            y,
            a.children,
            _,
            v,
            E
          );
        }
      }
      O & 1 && a.children !== p.children && d(N, p.children);
    } else !S && b == null && De(
      N,
      p,
      k,
      I,
      _,
      v,
      y
    );
    ((F = I.onVnodeUpdated) || R) && Ce(() => {
      F && Ye(F, _, p, a), R && It(p, a, _, "updated");
    }, v);
  }, je = (a, p, _, v, y, w, S) => {
    for (let N = 0; N < p.length; N++) {
      const O = a[N], b = p[N], R = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        O.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (O.type === $e || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !dn(O, b) || // - In the case of a component, it could contain anything.
        O.shapeFlag & 70) ? u(O.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          _
        )
      );
      D(
        O,
        b,
        R,
        null,
        v,
        y,
        w,
        S,
        !0
      );
    }
  }, De = (a, p, _, v, y, w, S) => {
    if (_ !== v) {
      if (_ !== ie)
        for (const N in _)
          !vn(N) && !(N in v) && i(
            a,
            N,
            _[N],
            null,
            S,
            p.children,
            y,
            w,
            E
          );
      for (const N in v) {
        if (vn(N))
          continue;
        const O = v[N], b = _[N];
        O !== b && N !== "value" && i(
          a,
          N,
          b,
          O,
          S,
          p.children,
          y,
          w,
          E
        );
      }
      "value" in v && i(a, "value", _.value, v.value, S);
    }
  }, We = (a, p, _, v, y, w, S, N, O) => {
    const b = p.el = a ? a.el : l(""), R = p.anchor = a ? a.anchor : l("");
    let { patchFlag: k, dynamicChildren: I, slotScopeIds: F } = p;
    m.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (zt || k & 2048) && (k = 0, O = !1, I = null), F && (N = N ? N.concat(F) : F), a == null ? (o(b, _, v), o(R, _, v), pe(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      p.children || [],
      _,
      R,
      y,
      w,
      S,
      N,
      O
    )) : k > 0 && k & 64 && I && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    a.dynamicChildren ? (je(
      a.dynamicChildren,
      I,
      _,
      y,
      w,
      S,
      N
    ), m.NODE_ENV !== "production" ? Jn(a, p) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (p.key != null || y && p === y.subTree) && Jn(
        a,
        p,
        !0
        /* shallow */
      )
    )) : Ie(
      a,
      p,
      _,
      R,
      y,
      w,
      S,
      N,
      O
    );
  }, Mn = (a, p, _, v, y, w, S, N, O) => {
    p.slotScopeIds = N, a == null ? p.shapeFlag & 512 ? y.ctx.activate(
      p,
      _,
      v,
      S,
      O
    ) : Te(
      p,
      _,
      v,
      y,
      w,
      S,
      O
    ) : ye(a, p, O);
  }, Te = (a, p, _, v, y, w, S) => {
    const N = a.component = Qa(
      a,
      v,
      y
    );
    if (m.NODE_ENV !== "production" && N.type.__hmrId && Ic(N), m.NODE_ENV !== "production" && (Gn(a), ot(N, "mount")), Sr(a) && (N.ctx.renderer = J), m.NODE_ENV !== "production" && ot(N, "init"), Za(N), m.NODE_ENV !== "production" && rt(N, "init"), N.asyncDep) {
      if (y && y.registerDep(N, K), !a.el) {
        const O = N.subTree = re(Me);
        L(null, O, p, _);
      }
    } else
      K(
        N,
        a,
        p,
        _,
        y,
        w,
        S
      );
    m.NODE_ENV !== "production" && (qn(), rt(N, "mount"));
  }, ye = (a, p, _) => {
    const v = p.component = a.component;
    if (Yc(a, p, _))
      if (v.asyncDep && !v.asyncResolved) {
        m.NODE_ENV !== "production" && Gn(p), W(v, p, _), m.NODE_ENV !== "production" && qn();
        return;
      } else
        v.next = p, Pc(v.update), v.effect.dirty = !0, v.update();
    else
      p.el = a.el, v.vnode = p;
  }, K = (a, p, _, v, y, w, S) => {
    const N = () => {
      if (a.isMounted) {
        let { next: R, bu: k, u: I, parent: F, vnode: X } = a;
        {
          const qt = Ws(a);
          if (qt) {
            R && (R.el = X.el, W(a, R, S)), qt.asyncDep.then(() => {
              a.isUnmounted || N();
            });
            return;
          }
        }
        let oe = R, le;
        m.NODE_ENV !== "production" && Gn(R || a.vnode), At(a, !1), R ? (R.el = X.el, W(a, R, S)) : R = X, k && un(k), (le = R.props && R.props.onVnodeBeforeUpdate) && Ye(le, F, R, X), At(a, !0), m.NODE_ENV !== "production" && ot(a, "render");
        const ge = Do(a);
        m.NODE_ENV !== "production" && rt(a, "render");
        const Le = a.subTree;
        a.subTree = ge, m.NODE_ENV !== "production" && ot(a, "patch"), D(
          Le,
          ge,
          // parent may have changed if it's in a teleport
          u(Le.el),
          // anchor may have changed if it's in a fragment
          $(Le),
          a,
          y,
          w
        ), m.NODE_ENV !== "production" && rt(a, "patch"), R.el = ge.el, oe === null && Jc(a, ge.el), I && Ce(I, y), (le = R.props && R.props.onVnodeUpdated) && Ce(
          () => Ye(le, F, R, X),
          y
        ), m.NODE_ENV !== "production" && ws(a), m.NODE_ENV !== "production" && qn();
      } else {
        let R;
        const { el: k, props: I } = p, { bm: F, m: X, parent: oe } = a, le = bn(p);
        if (At(a, !1), F && un(F), !le && (R = I && I.onVnodeBeforeMount) && Ye(R, oe, p), At(a, !0), k && G) {
          const ge = () => {
            m.NODE_ENV !== "production" && ot(a, "render"), a.subTree = Do(a), m.NODE_ENV !== "production" && rt(a, "render"), m.NODE_ENV !== "production" && ot(a, "hydrate"), G(
              k,
              a.subTree,
              a,
              y,
              null
            ), m.NODE_ENV !== "production" && rt(a, "hydrate");
          };
          le ? p.type.__asyncLoader().then(
            // note: we are moving the render call into an async callback,
            // which means it won't track dependencies - but it's ok because
            // a server-rendered async wrapper is already in resolved state
            // and it will never need to change.
            () => !a.isUnmounted && ge()
          ) : ge();
        } else {
          m.NODE_ENV !== "production" && ot(a, "render");
          const ge = a.subTree = Do(a);
          m.NODE_ENV !== "production" && rt(a, "render"), m.NODE_ENV !== "production" && ot(a, "patch"), D(
            null,
            ge,
            _,
            v,
            a,
            y,
            w
          ), m.NODE_ENV !== "production" && rt(a, "patch"), p.el = ge.el;
        }
        if (X && Ce(X, y), !le && (R = I && I.onVnodeMounted)) {
          const ge = p;
          Ce(
            () => Ye(R, oe, ge),
            y
          );
        }
        (p.shapeFlag & 256 || oe && bn(oe.vnode) && oe.vnode.shapeFlag & 256) && a.a && Ce(a.a, y), a.isMounted = !0, m.NODE_ENV !== "production" && Hc(a), p = _ = v = null;
      }
    }, O = a.effect = new hr(
      N,
      ue,
      () => bo(b),
      a.scope
      // track it in component's effect scope
    ), b = a.update = () => {
      O.dirty && O.run();
    };
    b.id = a.uid, At(a, !0), m.NODE_ENV !== "production" && (O.onTrack = a.rtc ? (R) => un(a.rtc, R) : void 0, O.onTrigger = a.rtg ? (R) => un(a.rtg, R) : void 0, b.ownerInstance = a), b();
  }, W = (a, p, _) => {
    p.component = a;
    const v = a.vnode.props;
    a.vnode = p, a.next = null, Ca(a, p.props, v, _), Ma(a, p.children, _), ut(), Jr(a), ft();
  }, Ie = (a, p, _, v, y, w, S, N, O = !1) => {
    const b = a && a.children, R = a ? a.shapeFlag : 0, k = p.children, { patchFlag: I, shapeFlag: F } = p;
    if (I > 0) {
      if (I & 128) {
        ht(
          b,
          k,
          _,
          v,
          y,
          w,
          S,
          N,
          O
        );
        return;
      } else if (I & 256) {
        Tt(
          b,
          k,
          _,
          v,
          y,
          w,
          S,
          N,
          O
        );
        return;
      }
    }
    F & 8 ? (R & 16 && E(b, y, w), k !== b && d(_, k)) : R & 16 ? F & 16 ? ht(
      b,
      k,
      _,
      v,
      y,
      w,
      S,
      N,
      O
    ) : E(b, y, w, !0) : (R & 8 && d(_, ""), F & 16 && pe(
      k,
      _,
      v,
      y,
      w,
      S,
      N,
      O
    ));
  }, Tt = (a, p, _, v, y, w, S, N, O) => {
    a = a || Zt, p = p || Zt;
    const b = a.length, R = p.length, k = Math.min(b, R);
    let I;
    for (I = 0; I < k; I++) {
      const F = p[I] = O ? yt(p[I]) : ze(p[I]);
      D(
        a[I],
        F,
        _,
        null,
        y,
        w,
        S,
        N,
        O
      );
    }
    b > R ? E(
      a,
      y,
      w,
      !0,
      !1,
      k
    ) : pe(
      p,
      _,
      v,
      y,
      w,
      S,
      N,
      O,
      k
    );
  }, ht = (a, p, _, v, y, w, S, N, O) => {
    let b = 0;
    const R = p.length;
    let k = a.length - 1, I = R - 1;
    for (; b <= k && b <= I; ) {
      const F = a[b], X = p[b] = O ? yt(p[b]) : ze(p[b]);
      if (dn(F, X))
        D(
          F,
          X,
          _,
          null,
          y,
          w,
          S,
          N,
          O
        );
      else
        break;
      b++;
    }
    for (; b <= k && b <= I; ) {
      const F = a[k], X = p[I] = O ? yt(p[I]) : ze(p[I]);
      if (dn(F, X))
        D(
          F,
          X,
          _,
          null,
          y,
          w,
          S,
          N,
          O
        );
      else
        break;
      k--, I--;
    }
    if (b > k) {
      if (b <= I) {
        const F = I + 1, X = F < R ? p[F].el : v;
        for (; b <= I; )
          D(
            null,
            p[b] = O ? yt(p[b]) : ze(p[b]),
            _,
            X,
            y,
            w,
            S,
            N,
            O
          ), b++;
      }
    } else if (b > I)
      for (; b <= k; )
        Ae(a[b], y, w, !0), b++;
    else {
      const F = b, X = b, oe = /* @__PURE__ */ new Map();
      for (b = X; b <= I; b++) {
        const Se = p[b] = O ? yt(p[b]) : ze(p[b]);
        Se.key != null && (m.NODE_ENV !== "production" && oe.has(Se.key) && V(
          "Duplicate keys found during update:",
          JSON.stringify(Se.key),
          "Make sure keys are unique."
        ), oe.set(Se.key, b));
      }
      let le, ge = 0;
      const Le = I - X + 1;
      let qt = !1, Lr = 0;
      const an = new Array(Le);
      for (b = 0; b < Le; b++)
        an[b] = 0;
      for (b = F; b <= k; b++) {
        const Se = a[b];
        if (ge >= Le) {
          Ae(Se, y, w, !0);
          continue;
        }
        let qe;
        if (Se.key != null)
          qe = oe.get(Se.key);
        else
          for (le = X; le <= I; le++)
            if (an[le - X] === 0 && dn(Se, p[le])) {
              qe = le;
              break;
            }
        qe === void 0 ? Ae(Se, y, w, !0) : (an[qe - X] = b + 1, qe >= Lr ? Lr = qe : qt = !0, D(
          Se,
          p[qe],
          _,
          null,
          y,
          w,
          S,
          N,
          O
        ), ge++);
      }
      const Hr = qt ? za(an) : Zt;
      for (le = Hr.length - 1, b = Le - 1; b >= 0; b--) {
        const Se = X + b, qe = p[Se], Fr = Se + 1 < R ? p[Se + 1].el : v;
        an[b] === 0 ? D(
          null,
          qe,
          _,
          Fr,
          y,
          w,
          S,
          N,
          O
        ) : qt && (le < 0 || b !== Hr[le] ? Ge(qe, _, Fr, 2) : le--);
      }
    }
  }, Ge = (a, p, _, v, y = null) => {
    const { el: w, type: S, transition: N, children: O, shapeFlag: b } = a;
    if (b & 6) {
      Ge(a.component.subTree, p, _, v);
      return;
    }
    if (b & 128) {
      a.suspense.move(p, _, v);
      return;
    }
    if (b & 64) {
      S.move(a, p, _, J);
      return;
    }
    if (S === $e) {
      o(w, p, _);
      for (let k = 0; k < O.length; k++)
        Ge(O[k], p, _, v);
      o(a.anchor, p, _);
      return;
    }
    if (S === Qn) {
      Y(a, p, _);
      return;
    }
    if (v !== 2 && b & 1 && N)
      if (v === 0)
        N.beforeEnter(w), o(w, p, _), Ce(() => N.enter(w), y);
      else {
        const { leave: k, delayLeave: I, afterLeave: F } = N, X = () => o(w, p, _), oe = () => {
          k(w, () => {
            X(), F && F();
          });
        };
        I ? I(w, X, oe) : oe();
      }
    else
      o(w, p, _);
  }, Ae = (a, p, _, v = !1, y = !1) => {
    const {
      type: w,
      props: S,
      ref: N,
      children: O,
      dynamicChildren: b,
      shapeFlag: R,
      patchFlag: k,
      dirs: I
    } = a;
    if (N != null && Jo(N, null, _, a, !0), R & 256) {
      p.ctx.deactivate(a);
      return;
    }
    const F = R & 1 && I, X = !bn(a);
    let oe;
    if (X && (oe = S && S.onVnodeBeforeUnmount) && Ye(oe, p, a), R & 6)
      gt(a.component, _, v);
    else {
      if (R & 128) {
        a.suspense.unmount(_, v);
        return;
      }
      F && It(a, null, p, "beforeUnmount"), R & 64 ? a.type.remove(
        a,
        p,
        _,
        y,
        J,
        v
      ) : b && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (w !== $e || k > 0 && k & 64) ? E(
        b,
        p,
        _,
        !1,
        !0
      ) : (w === $e && k & 384 || !y && R & 16) && E(O, p, _), v && mt(a);
    }
    (X && (oe = S && S.onVnodeUnmounted) || F) && Ce(() => {
      oe && Ye(oe, p, a), F && It(a, null, p, "unmounted");
    }, _);
  }, mt = (a) => {
    const { type: p, el: _, anchor: v, transition: y } = a;
    if (p === $e) {
      m.NODE_ENV !== "production" && a.patchFlag > 0 && a.patchFlag & 2048 && y && !y.persisted ? a.children.forEach((S) => {
        S.type === Me ? r(S.el) : mt(S);
      }) : jn(_, v);
      return;
    }
    if (p === Qn) {
      Z(a);
      return;
    }
    const w = () => {
      r(_), y && !y.persisted && y.afterLeave && y.afterLeave();
    };
    if (a.shapeFlag & 1 && y && !y.persisted) {
      const { leave: S, delayLeave: N } = y, O = () => S(_, w);
      N ? N(a.el, w, O) : O();
    } else
      w();
  }, jn = (a, p) => {
    let _;
    for (; a !== p; )
      _ = h(a), r(a), a = _;
    r(p);
  }, gt = (a, p, _) => {
    m.NODE_ENV !== "production" && a.type.__hmrId && Ac(a);
    const { bum: v, scope: y, update: w, subTree: S, um: N } = a;
    v && un(v), y.stop(), w && (w.active = !1, Ae(S, a, p, _)), N && Ce(N, p), Ce(() => {
      a.isUnmounted = !0;
    }, p), p && p.pendingBranch && !p.isUnmounted && a.asyncDep && !a.asyncResolved && a.suspenseId === p.pendingId && (p.deps--, p.deps === 0 && p.resolve()), m.NODE_ENV !== "production" && zc(a);
  }, E = (a, p, _, v = !1, y = !1, w = 0) => {
    for (let S = w; S < a.length; S++)
      Ae(a[S], p, _, v, y);
  }, $ = (a) => a.shapeFlag & 6 ? $(a.component.subTree) : a.shapeFlag & 128 ? a.suspense.next() : h(a.anchor || a.el);
  let C = !1;
  const P = (a, p, _) => {
    a == null ? p._vnode && Ae(p._vnode, null, null, !0) : D(
      p._vnode || null,
      a,
      p,
      null,
      null,
      null,
      _
    ), C || (C = !0, Jr(), vs(), C = !1), p._vnode = a;
  }, J = {
    p: D,
    um: Ae,
    m: Ge,
    r: mt,
    mt: Te,
    mc: pe,
    pc: Ie,
    pbc: je,
    n: $,
    o: e
  };
  let ce, G;
  return {
    render: P,
    hydrate: ce,
    createApp: Sa(P, ce)
  };
}
function Ro({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function At({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function Fa(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Jn(e, t, n = !1) {
  const o = e.children, r = t.children;
  if (j(o) && j(r))
    for (let i = 0; i < o.length; i++) {
      const s = o[i];
      let l = r[i];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = r[i] = yt(r[i]), l.el = s.el), n || Jn(s, l)), l.type === An && (l.el = s.el), m.NODE_ENV !== "production" && l.type === Me && !l.el && (l.el = s.el);
    }
}
function za(e) {
  const t = e.slice(), n = [0];
  let o, r, i, s, l;
  const c = e.length;
  for (o = 0; o < c; o++) {
    const f = e[o];
    if (f !== 0) {
      if (r = n[n.length - 1], e[r] < f) {
        t[o] = r, n.push(o);
        continue;
      }
      for (i = 0, s = n.length - 1; i < s; )
        l = i + s >> 1, e[n[l]] < f ? i = l + 1 : s = l;
      f < e[n[i]] && (i > 0 && (t[o] = n[i - 1]), n[i] = o);
    }
  }
  for (i = n.length, s = n[i - 1]; i-- > 0; )
    n[i] = s, s = t[s];
  return n;
}
function Ws(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Ws(t);
}
const Ua = (e) => e.__isTeleport, $e = Symbol.for("v-fgt"), An = Symbol.for("v-txt"), Me = Symbol.for("v-cmt"), Qn = Symbol.for("v-stc"), wn = [];
let Be = null;
function et(e = !1) {
  wn.push(Be = e ? null : []);
}
function Ba() {
  wn.pop(), Be = wn[wn.length - 1] || null;
}
let Cn = 1;
function ai(e) {
  Cn += e;
}
function Gs(e) {
  return e.dynamicChildren = Cn > 0 ? Be || Zt : null, Ba(), Cn > 0 && Be && Be.push(e), e;
}
function pt(e, t, n, o, r, i) {
  return Gs(
    ne(
      e,
      t,
      n,
      o,
      r,
      i,
      !0
    )
  );
}
function Ka(e, t, n, o, r) {
  return Gs(
    re(
      e,
      t,
      n,
      o,
      r,
      !0
    )
  );
}
function sn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function dn(e, t) {
  return m.NODE_ENV !== "production" && t.shapeFlag & 6 && Jt.has(t.type) ? (e.shapeFlag &= -257, t.shapeFlag &= -513, !1) : e.type === t.type && e.key === t.key;
}
const Wa = (...e) => Ys(
  ...e
), qs = ({ key: e }) => e ?? null, Xn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? de(e) || we(e) || H(e) ? { i: be, r: e, k: t, f: !!n } : e : null);
function ne(e, t = null, n = null, o = 0, r = null, i = e === $e ? 0 : 1, s = !1, l = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && qs(t),
    ref: t && Xn(t),
    scopeId: Ss,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: i,
    patchFlag: o,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: be
  };
  return l ? ($r(c, n), i & 128 && e.normalize(c)) : n && (c.shapeFlag |= de(n) ? 8 : 16), m.NODE_ENV !== "production" && c.key !== c.key && V("VNode created with invalid key (NaN). VNode type:", c.type), Cn > 0 && // avoid a block node from tracking itself
  !s && // has current parent block
  Be && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && Be.push(c), c;
}
const re = m.NODE_ENV !== "production" ? Wa : Ys;
function Ys(e, t = null, n = null, o = 0, r = null, i = !1) {
  if ((!e || e === Qc) && (m.NODE_ENV !== "production" && !e && V(`Invalid vnode type when creating vnode: ${e}.`), e = Me), sn(e)) {
    const l = $t(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && $r(l, n), Cn > 0 && !i && Be && (l.shapeFlag & 6 ? Be[Be.indexOf(e)] = l : Be.push(l)), l.patchFlag |= -2, l;
  }
  if (el(e) && (e = e.__vccOpts), t) {
    t = Ga(t);
    let { class: l, style: c } = t;
    l && !de(l) && (t.class = pr(l)), se(c) && (Fo(c) && !j(c) && (c = ae({}, c)), t.style = dr(c));
  }
  const s = de(e) ? 1 : Xc(e) ? 128 : Ua(e) ? 64 : se(e) ? 4 : H(e) ? 2 : 0;
  return m.NODE_ENV !== "production" && s & 4 && Fo(e) && (e = U(e), V(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), ne(
    e,
    t,
    n,
    o,
    r,
    s,
    i,
    !0
  );
}
function Ga(e) {
  return e ? Fo(e) || Ls(e) ? ae({}, e) : e : null;
}
function $t(e, t, n = !1, o = !1) {
  const { props: r, ref: i, patchFlag: s, children: l, transition: c } = e, f = t ? qa(r || {}, t) : r, d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: f,
    key: f && qs(f),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && i ? j(i) ? i.concat(Xn(t)) : [i, Xn(t)] : Xn(t)
    ) : i,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: m.NODE_ENV !== "production" && s === -1 && j(l) ? l.map(Js) : l,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== $e ? s === -1 ? 16 : s | 16 : s,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: c,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && $t(e.ssContent),
    ssFallback: e.ssFallback && $t(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return c && o && (d.transition = c.clone(d)), d;
}
function Js(e) {
  const t = $t(e);
  return j(e.children) && (t.children = e.children.map(Js)), t;
}
function ee(e = " ", t = 0) {
  return re(An, null, e, t);
}
function ze(e) {
  return e == null || typeof e == "boolean" ? re(Me) : j(e) ? re(
    $e,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : typeof e == "object" ? yt(e) : re(An, null, String(e));
}
function yt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : $t(e);
}
function $r(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if (j(t))
    n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), $r(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !Ls(t) ? t._ctx = be : r === 3 && be && (be.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else H(t) ? (t = { default: t, _ctx: be }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [ee(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function qa(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const r in o)
      if (r === "class")
        t.class !== o.class && (t.class = pr([t.class, o.class]));
      else if (r === "style")
        t.style = dr([t.style, o.style]);
      else if (Rn(r)) {
        const i = t[r], s = o[r];
        s && i !== s && !(j(i) && i.includes(s)) && (t[r] = i ? [].concat(i, s) : s);
      } else r !== "" && (t[r] = o[r]);
  }
  return t;
}
function Ye(e, t, n, o = null) {
  Ke(e, t, 7, [
    n,
    o
  ]);
}
const Ya = ks();
let Ja = 0;
function Qa(e, t, n) {
  const o = e.type, r = (t ? t.appContext : e.appContext) || Ya, i = {
    uid: Ja++,
    vnode: e,
    type: o,
    parent: t,
    appContext: r,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    scope: new Wi(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(r.provides),
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Fs(o, r),
    emitsOptions: Vs(o, r),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: ie,
    // inheritAttrs
    inheritAttrs: o.inheritAttrs,
    // state
    ctx: ie,
    data: ie,
    props: ie,
    attrs: ie,
    slots: ie,
    refs: ie,
    setupState: ie,
    setupContext: null,
    attrsProxy: null,
    slotsProxy: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return m.NODE_ENV !== "production" ? i.ctx = ga(i) : i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = Wc.bind(null, i), e.ce && e.ce(i), i;
}
let Ee = null;
const Rr = () => Ee || be;
let uo, Qo;
{
  const e = fr(), t = (n, o) => {
    let r;
    return (r = e[n]) || (r = e[n] = []), r.push(o), (i) => {
      r.length > 1 ? r.forEach((s) => s(i)) : r[0](i);
    };
  };
  uo = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Ee = n
  ), Qo = t(
    "__VUE_SSR_SETTERS__",
    (n) => Oo = n
  );
}
const kn = (e) => {
  const t = Ee;
  return uo(e), e.scope.on(), () => {
    e.scope.off(), uo(t);
  };
}, ui = () => {
  Ee && Ee.scope.off(), uo(null);
}, Xa = /* @__PURE__ */ at("slot,component");
function Xo(e, { isNativeTag: t }) {
  (Xa(e) || t(e)) && V(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function Qs(e) {
  return e.vnode.shapeFlag & 4;
}
let Oo = !1;
function Za(e, t = !1) {
  t && Qo(t);
  const { props: n, children: o } = e.vnode, r = Qs(e);
  xa(e, n, r, t), ka(e, o);
  const i = r ? eu(e, t) : void 0;
  return t && Qo(!1), i;
}
function eu(e, t) {
  var n;
  const o = e.type;
  if (m.NODE_ENV !== "production") {
    if (o.name && Xo(o.name, e.appContext.config), o.components) {
      const i = Object.keys(o.components);
      for (let s = 0; s < i.length; s++)
        Xo(i[s], e.appContext.config);
    }
    if (o.directives) {
      const i = Object.keys(o.directives);
      for (let s = 0; s < i.length; s++)
        Cs(i[s]);
    }
    o.compilerOptions && tu() && V(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Is), m.NODE_ENV !== "production" && _a(e);
  const { setup: r } = o;
  if (r) {
    const i = e.setupContext = r.length > 1 ? ou(e) : null, s = kn(e);
    ut();
    const l = lt(
      r,
      e,
      0,
      [
        m.NODE_ENV !== "production" ? Xe(e.props) : e.props,
        i
      ]
    );
    if (ft(), s(), cr(l)) {
      if (l.then(ui, ui), t)
        return l.then((c) => {
          fi(e, c, t);
        }).catch((c) => {
          Tn(c, e, 0);
        });
      if (e.asyncDep = l, m.NODE_ENV !== "production" && !e.suspense) {
        const c = (n = o.name) != null ? n : "Anonymous";
        V(
          `Component <${c}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      fi(e, l, t);
  } else
    Xs(e, t);
}
function fi(e, t, n) {
  H(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : se(t) ? (m.NODE_ENV !== "production" && sn(t) && V(
    "setup() should not return VNodes directly - return a render function instead."
  ), m.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = ps(t), m.NODE_ENV !== "production" && Ea(e)) : m.NODE_ENV !== "production" && t !== void 0 && V(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), Xs(e, n);
}
let Zo;
const tu = () => !Zo;
function Xs(e, t, n) {
  const o = e.type;
  if (!e.render) {
    if (!t && Zo && !o.render) {
      const r = o.template || Dr(e).template;
      if (r) {
        m.NODE_ENV !== "production" && ot(e, "compile");
        const { isCustomElement: i, compilerOptions: s } = e.appContext.config, { delimiters: l, compilerOptions: c } = o, f = ae(
          ae(
            {
              isCustomElement: i,
              delimiters: l
            },
            s
          ),
          c
        );
        o.render = Zo(r, f), m.NODE_ENV !== "production" && rt(e, "compile");
      }
    }
    e.render = o.render || ue;
  }
  {
    const r = kn(e);
    ut();
    try {
      ya(e);
    } finally {
      ft(), r();
    }
  }
  m.NODE_ENV !== "production" && !o.render && e.render === ue && !t && (o.template ? V(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : V("Component is missing template or render function."));
}
const di = m.NODE_ENV !== "production" ? {
  get(e, t) {
    return lo(), Ne(e, "get", ""), e[t];
  },
  set() {
    return V("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return V("setupContext.attrs is readonly."), !1;
  }
} : {
  get(e, t) {
    return Ne(e, "get", ""), e[t];
  }
};
function nu(e) {
  return e.slotsProxy || (e.slotsProxy = new Proxy(e.slots, {
    get(t, n) {
      return Ne(e, "get", "$slots"), t[n];
    }
  }));
}
function ou(e) {
  const t = (n) => {
    if (m.NODE_ENV !== "production" && (e.exposed && V("expose() should be called only once per setup()."), n != null)) {
      let o = typeof n;
      o === "object" && (j(n) ? o = "array" : we(n) && (o = "ref")), o !== "object" && V(
        `expose() should be passed a plain object, received ${o}.`
      );
    }
    e.exposed = n || {};
  };
  if (m.NODE_ENV !== "production") {
    let n;
    return Object.freeze({
      get attrs() {
        return n || (n = new Proxy(e.attrs, di));
      },
      get slots() {
        return nu(e);
      },
      get emit() {
        return (o, ...r) => e.emit(o, ...r);
      },
      expose: t
    });
  } else
    return {
      attrs: new Proxy(e.attrs, di),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
}
function Pr(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(ps(Er(e.exposed)), {
      get(t, n) {
        if (n in t)
          return t[n];
        if (n in Ut)
          return Ut[n](e);
      },
      has(t, n) {
        return n in t || n in Ut;
      }
    }));
}
const ru = /(?:^|[-_])(\w)/g, iu = (e) => e.replace(ru, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Zs(e, t = !0) {
  return H(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Vo(e, t, n = !1) {
  let o = Zs(t);
  if (!o && t.__file) {
    const r = t.__file.match(/([^/\\]+)\.\w+$/);
    r && (o = r[1]);
  }
  if (!o && e && e.parent) {
    const r = (i) => {
      for (const s in i)
        if (i[s] === t)
          return s;
    };
    o = r(
      e.components || e.parent.type.components
    ) || r(e.appContext.components);
  }
  return o ? iu(o) : n ? "App" : "Anonymous";
}
function el(e) {
  return H(e) && "__vccOpts" in e;
}
const Ue = (e, t) => {
  const n = bc(e, t, Oo);
  if (m.NODE_ENV !== "production") {
    const o = Rr();
    o && o.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function tl(e, t, n) {
  const o = arguments.length;
  return o === 2 ? se(t) && !j(t) ? sn(t) ? re(e, null, [t]) : re(e, t) : re(e, null, t) : (o > 3 ? n = Array.prototype.slice.call(arguments, 2) : o === 3 && sn(n) && (n = [n]), re(e, t, n));
}
function su() {
  if (m.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, o = { style: "color:#eb2f96" }, r = {
    header(u) {
      return se(u) ? u.__isVue ? ["div", e, "VueInstance"] : we(u) ? [
        "div",
        {},
        ["span", e, d(u)],
        "<",
        l(u.value),
        ">"
      ] : tn(u) ? [
        "div",
        {},
        ["span", e, Ht(u) ? "ShallowReactive" : "Reactive"],
        "<",
        l(u),
        `>${Kt(u) ? " (readonly)" : ""}`
      ] : Kt(u) ? [
        "div",
        {},
        ["span", e, Ht(u) ? "ShallowReadonly" : "Readonly"],
        "<",
        l(u),
        ">"
      ] : null : null;
    },
    hasBody(u) {
      return u && u.__isVue;
    },
    body(u) {
      if (u && u.__isVue)
        return [
          "div",
          {},
          ...i(u.$)
        ];
    }
  };
  function i(u) {
    const h = [];
    u.type.props && u.props && h.push(s("props", U(u.props))), u.setupState !== ie && h.push(s("setup", u.setupState)), u.data !== ie && h.push(s("data", U(u.data)));
    const g = c(u, "computed");
    g && h.push(s("computed", g));
    const x = c(u, "inject");
    return x && h.push(s("injected", x)), h.push([
      "div",
      {},
      [
        "span",
        {
          style: o.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: u }]
    ]), h;
  }
  function s(u, h) {
    return h = ae({}, h), Object.keys(h).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        u
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(h).map((g) => [
          "div",
          {},
          ["span", o, g + ": "],
          l(h[g], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function l(u, h = !0) {
    return typeof u == "number" ? ["span", t, u] : typeof u == "string" ? ["span", n, JSON.stringify(u)] : typeof u == "boolean" ? ["span", o, u] : se(u) ? ["object", { object: h ? U(u) : u }] : ["span", n, String(u)];
  }
  function c(u, h) {
    const g = u.type;
    if (H(g))
      return;
    const x = {};
    for (const D in u.ctx)
      f(g, D, h) && (x[D] = u.ctx[D]);
    return x;
  }
  function f(u, h, g) {
    const x = u[g];
    if (j(x) && x.includes(h) || se(x) && h in x || u.extends && f(u.extends, h, g) || u.mixins && u.mixins.some((D) => f(D, h, g)))
      return !0;
  }
  function d(u) {
    return Ht(u) ? "ShallowRef" : u.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(r) : window.devtoolsFormatters = [r];
}
const pi = "3.4.27", St = m.NODE_ENV !== "production" ? V : ue;
var Rt = {};
const lu = "http://www.w3.org/2000/svg", cu = "http://www.w3.org/1998/Math/MathML", bt = typeof document < "u" ? document : null, hi = bt && /* @__PURE__ */ bt.createElement("template"), au = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, o) => {
    const r = t === "svg" ? bt.createElementNS(lu, e) : t === "mathml" ? bt.createElementNS(cu, e) : bt.createElement(e, n ? { is: n } : void 0);
    return e === "select" && o && o.multiple != null && r.setAttribute("multiple", o.multiple), r;
  },
  createText: (e) => bt.createTextNode(e),
  createComment: (e) => bt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => bt.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, o, r, i) {
    const s = n ? n.previousSibling : t.lastChild;
    if (r && (r === i || r.nextSibling))
      for (; t.insertBefore(r.cloneNode(!0), n), !(r === i || !(r = r.nextSibling)); )
        ;
    else {
      hi.innerHTML = o === "svg" ? `<svg>${e}</svg>` : o === "mathml" ? `<math>${e}</math>` : e;
      const l = hi.content;
      if (o === "svg" || o === "mathml") {
        const c = l.firstChild;
        for (; c.firstChild; )
          l.appendChild(c.firstChild);
        l.removeChild(c);
      }
      t.insertBefore(l, n);
    }
    return [
      // first
      s ? s.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, uu = Symbol("_vtc");
function fu(e, t, n) {
  const o = e[uu];
  o && (t = (t ? [t, ...o] : [...o]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const mi = Symbol("_vod"), du = Symbol("_vsh"), pu = Symbol(Rt.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : ""), hu = /(^|;)\s*display\s*:/;
function mu(e, t, n) {
  const o = e.style, r = de(n);
  let i = !1;
  if (n && !r) {
    if (t)
      if (de(t))
        for (const s of t.split(";")) {
          const l = s.slice(0, s.indexOf(":")).trim();
          n[l] == null && Zn(o, l, "");
        }
      else
        for (const s in t)
          n[s] == null && Zn(o, s, "");
    for (const s in n)
      s === "display" && (i = !0), Zn(o, s, n[s]);
  } else if (r) {
    if (t !== n) {
      const s = o[pu];
      s && (n += ";" + s), o.cssText = n, i = hu.test(n);
    }
  } else t && e.removeAttribute("style");
  mi in e && (e[mi] = i ? o.display : "", e[du] && (o.display = "none"));
}
const gu = /[^\\];\s*$/, gi = /\s*!important$/;
function Zn(e, t, n) {
  if (j(n))
    n.forEach((o) => Zn(e, t, o));
  else if (n == null && (n = ""), Rt.NODE_ENV !== "production" && gu.test(n) && St(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const o = _u(e, t);
    gi.test(n) ? e.setProperty(
      xt(o),
      n.replace(gi, ""),
      "important"
    ) : e[o] = n;
  }
}
const _i = ["Webkit", "Moz", "ms"], Po = {};
function _u(e, t) {
  const n = Po[t];
  if (n)
    return n;
  let o = rn(t);
  if (o !== "filter" && o in e)
    return Po[t] = o;
  o = go(o);
  for (let r = 0; r < _i.length; r++) {
    const i = _i[r] + o;
    if (i in e)
      return Po[t] = i;
  }
  return t;
}
const Ei = "http://www.w3.org/1999/xlink";
function Eu(e, t, n, o, r) {
  if (o && t.startsWith("xlink:"))
    n == null ? e.removeAttributeNS(Ei, t.slice(6, t.length)) : e.setAttributeNS(Ei, t, n);
  else {
    const i = Ql(t);
    n == null || i && !Ki(n) ? e.removeAttribute(t) : e.setAttribute(t, i ? "" : n);
  }
}
function vu(e, t, n, o, r, i, s) {
  if (t === "innerHTML" || t === "textContent") {
    o && s(o, r, i), e[t] = n ?? "";
    return;
  }
  const l = e.tagName;
  if (t === "value" && l !== "PROGRESS" && // custom elements may use _value internally
  !l.includes("-")) {
    const f = l === "OPTION" ? e.getAttribute("value") || "" : e.value, d = n ?? "";
    (f !== d || !("_value" in e)) && (e.value = d), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let c = !1;
  if (n === "" || n == null) {
    const f = typeof e[t];
    f === "boolean" ? n = Ki(n) : n == null && f === "string" ? (n = "", c = !0) : f === "number" && (n = 0, c = !0);
  }
  try {
    e[t] = n;
  } catch (f) {
    Rt.NODE_ENV !== "production" && !c && St(
      `Failed setting prop "${t}" on <${l.toLowerCase()}>: value ${n} is invalid.`,
      f
    );
  }
  c && e.removeAttribute(t);
}
function yu(e, t, n, o) {
  e.addEventListener(t, n, o);
}
function bu(e, t, n, o) {
  e.removeEventListener(t, n, o);
}
const vi = Symbol("_vei");
function Nu(e, t, n, o, r = null) {
  const i = e[vi] || (e[vi] = {}), s = i[t];
  if (o && s)
    s.value = Rt.NODE_ENV !== "production" ? bi(o, t) : o;
  else {
    const [l, c] = wu(t);
    if (o) {
      const f = i[t] = Su(
        Rt.NODE_ENV !== "production" ? bi(o, t) : o,
        r
      );
      yu(e, l, f, c);
    } else s && (bu(e, l, s, c), i[t] = void 0);
  }
}
const yi = /(?:Once|Passive|Capture)$/;
function wu(e) {
  let t;
  if (yi.test(e)) {
    t = {};
    let o;
    for (; o = e.match(yi); )
      e = e.slice(0, e.length - o[0].length), t[o[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : xt(e.slice(2)), t];
}
let To = 0;
const Ou = /* @__PURE__ */ Promise.resolve(), Vu = () => To || (Ou.then(() => To = 0), To = Date.now());
function Su(e, t) {
  const n = (o) => {
    if (!o._vts)
      o._vts = Date.now();
    else if (o._vts <= n.attached)
      return;
    Ke(
      xu(o, n.value),
      t,
      5,
      [o]
    );
  };
  return n.value = e, n.attached = Vu(), n;
}
function bi(e, t) {
  return H(e) || j(e) ? e : (St(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), ue);
}
function xu(e, t) {
  if (j(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (o) => (r) => !r._stopped && o && o(r)
    );
  } else
    return t;
}
const Ni = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Du = (e, t, n, o, r, i, s, l, c) => {
  const f = r === "svg";
  t === "class" ? fu(e, o, f) : t === "style" ? mu(e, n, o) : Rn(t) ? io(t) || Nu(e, t, n, o, s) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Cu(e, t, o, f)) ? vu(
    e,
    t,
    o,
    i,
    s,
    l,
    c
  ) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), Eu(e, t, o, f));
};
function Cu(e, t, n, o) {
  if (o)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Ni(t) && H(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return Ni(t) && de(n) ? !1 : t in e;
}
const $u = /* @__PURE__ */ ae({ patchProp: Du }, au);
let wi;
function Ru() {
  return wi || (wi = La($u));
}
const Pu = (...e) => {
  const t = Ru().createApp(...e);
  Rt.NODE_ENV !== "production" && (Iu(t), Au(t));
  const { mount: n } = t;
  return t.mount = (o) => {
    const r = ku(o);
    if (!r)
      return;
    const i = t._component;
    !H(i) && !i.render && !i.template && (i.template = r.innerHTML), r.innerHTML = "";
    const s = n(r, !1, Tu(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), s;
  }, t;
};
function Tu(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Iu(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => Gl(t) || ql(t) || Yl(t),
    writable: !1
  });
}
function Au(e) {
  {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        St(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const n = e.config.compilerOptions, o = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return St(o), n;
      },
      set() {
        St(o);
      }
    });
  }
}
function ku(e) {
  if (de(e)) {
    const t = document.querySelector(e);
    return Rt.NODE_ENV !== "production" && !t && St(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return Rt.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && St(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
var Mu = {};
function ju() {
  su();
}
Mu.NODE_ENV !== "production" && ju();
var Lu = !1;
function Hu() {
  return nl().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function nl() {
  return typeof navigator < "u" && typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : {};
}
const Fu = typeof Proxy == "function", zu = "devtools-plugin:setup", Uu = "plugin:settings:set";
let Yt, er;
function Bu() {
  var e;
  return Yt !== void 0 || (typeof window < "u" && window.performance ? (Yt = !0, er = window.performance) : typeof globalThis < "u" && (!((e = globalThis.perf_hooks) === null || e === void 0) && e.performance) ? (Yt = !0, er = globalThis.perf_hooks.performance) : Yt = !1), Yt;
}
function Ku() {
  return Bu() ? er.now() : Date.now();
}
class Wu {
  constructor(t, n) {
    this.target = null, this.targetQueue = [], this.onQueue = [], this.plugin = t, this.hook = n;
    const o = {};
    if (t.settings)
      for (const s in t.settings) {
        const l = t.settings[s];
        o[s] = l.defaultValue;
      }
    const r = `__vue-devtools-plugin-settings__${t.id}`;
    let i = Object.assign({}, o);
    try {
      const s = localStorage.getItem(r), l = JSON.parse(s);
      Object.assign(i, l);
    } catch {
    }
    this.fallbacks = {
      getSettings() {
        return i;
      },
      setSettings(s) {
        try {
          localStorage.setItem(r, JSON.stringify(s));
        } catch {
        }
        i = s;
      },
      now() {
        return Ku();
      }
    }, n && n.on(Uu, (s, l) => {
      s === this.plugin.id && this.fallbacks.setSettings(l);
    }), this.proxiedOn = new Proxy({}, {
      get: (s, l) => this.target ? this.target.on[l] : (...c) => {
        this.onQueue.push({
          method: l,
          args: c
        });
      }
    }), this.proxiedTarget = new Proxy({}, {
      get: (s, l) => this.target ? this.target[l] : l === "on" ? this.proxiedOn : Object.keys(this.fallbacks).includes(l) ? (...c) => (this.targetQueue.push({
        method: l,
        args: c,
        resolve: () => {
        }
      }), this.fallbacks[l](...c)) : (...c) => new Promise((f) => {
        this.targetQueue.push({
          method: l,
          args: c,
          resolve: f
        });
      })
    });
  }
  async setRealTarget(t) {
    this.target = t;
    for (const n of this.onQueue)
      this.target.on[n.method](...n.args);
    for (const n of this.targetQueue)
      n.resolve(await this.target[n.method](...n.args));
  }
}
function Tr(e, t) {
  const n = e, o = nl(), r = Hu(), i = Fu && n.enableEarlyProxy;
  if (r && (o.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !i))
    r.emit(zu, e, t);
  else {
    const s = i ? new Wu(n, r) : null;
    (o.__VUE_DEVTOOLS_PLUGINS__ = o.__VUE_DEVTOOLS_PLUGINS__ || []).push({
      pluginDescriptor: n,
      setupFn: t,
      proxy: s
    }), s && t(s.proxiedTarget);
  }
}
var En = {};
const Gu = En.NODE_ENV !== "production" ? Symbol("pinia") : (
  /* istanbul ignore next */
  Symbol()
);
var Bt;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(Bt || (Bt = {}));
const ol = typeof window < "u", Oi = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof global == "object" && global.global === global ? global : typeof globalThis == "object" ? globalThis : { HTMLElement: null };
function qu(e, { autoBom: t = !1 } = {}) {
  return t && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(["\uFEFF", e], { type: e.type }) : e;
}
function Ir(e, t, n) {
  const o = new XMLHttpRequest();
  o.open("GET", e), o.responseType = "blob", o.onload = function() {
    sl(o.response, t, n);
  }, o.onerror = function() {
    console.error("could not download file");
  }, o.send();
}
function rl(e) {
  const t = new XMLHttpRequest();
  t.open("HEAD", e, !1);
  try {
    t.send();
  } catch {
  }
  return t.status >= 200 && t.status <= 299;
}
function eo(e) {
  try {
    e.dispatchEvent(new MouseEvent("click"));
  } catch {
    const n = document.createEvent("MouseEvents");
    n.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), e.dispatchEvent(n);
  }
}
const to = typeof navigator == "object" ? navigator : { userAgent: "" }, il = /Macintosh/.test(to.userAgent) && /AppleWebKit/.test(to.userAgent) && !/Safari/.test(to.userAgent), sl = ol ? (
  // Use download attribute first if possible (#193 Lumia mobile) unless this is a macOS WebView or mini program
  typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype && !il ? Yu : (
    // Use msSaveOrOpenBlob as a second approach
    "msSaveOrOpenBlob" in to ? Ju : (
      // Fallback to using FileReader and a popup
      Qu
    )
  )
) : () => {
};
function Yu(e, t = "download", n) {
  const o = document.createElement("a");
  o.download = t, o.rel = "noopener", typeof e == "string" ? (o.href = e, o.origin !== location.origin ? rl(o.href) ? Ir(e, t, n) : (o.target = "_blank", eo(o)) : eo(o)) : (o.href = URL.createObjectURL(e), setTimeout(function() {
    URL.revokeObjectURL(o.href);
  }, 4e4), setTimeout(function() {
    eo(o);
  }, 0));
}
function Ju(e, t = "download", n) {
  if (typeof e == "string")
    if (rl(e))
      Ir(e, t, n);
    else {
      const o = document.createElement("a");
      o.href = e, o.target = "_blank", setTimeout(function() {
        eo(o);
      });
    }
  else
    navigator.msSaveOrOpenBlob(qu(e, n), t);
}
function Qu(e, t, n, o) {
  if (o = o || open("", "_blank"), o && (o.document.title = o.document.body.innerText = "downloading..."), typeof e == "string")
    return Ir(e, t, n);
  const r = e.type === "application/octet-stream", i = /constructor/i.test(String(Oi.HTMLElement)) || "safari" in Oi, s = /CriOS\/[\d]+/.test(navigator.userAgent);
  if ((s || r && i || il) && typeof FileReader < "u") {
    const l = new FileReader();
    l.onloadend = function() {
      let c = l.result;
      if (typeof c != "string")
        throw o = null, new Error("Wrong reader.result type");
      c = s ? c : c.replace(/^data:[^;]*;/, "data:attachment/file;"), o ? o.location.href = c : location.assign(c), o = null;
    }, l.readAsDataURL(e);
  } else {
    const l = URL.createObjectURL(e);
    o ? o.location.assign(l) : location.href = l, o = null, setTimeout(function() {
      URL.revokeObjectURL(l);
    }, 4e4);
  }
}
function _e(e, t) {
  const n = "🍍 " + e;
  typeof __VUE_DEVTOOLS_TOAST__ == "function" ? __VUE_DEVTOOLS_TOAST__(n, t) : t === "error" ? console.error(n) : t === "warn" ? console.warn(n) : console.log(n);
}
function Ar(e) {
  return "_a" in e && "install" in e;
}
function ll() {
  if (!("clipboard" in navigator))
    return _e("Your browser doesn't support the Clipboard API", "error"), !0;
}
function cl(e) {
  return e instanceof Error && e.message.toLowerCase().includes("document is not focused") ? (_e('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.', "warn"), !0) : !1;
}
async function Xu(e) {
  if (!ll())
    try {
      await navigator.clipboard.writeText(JSON.stringify(e.state.value)), _e("Global state copied to clipboard.");
    } catch (t) {
      if (cl(t))
        return;
      _e("Failed to serialize the state. Check the console for more details.", "error"), console.error(t);
    }
}
async function Zu(e) {
  if (!ll())
    try {
      al(e, JSON.parse(await navigator.clipboard.readText())), _e("Global state pasted from clipboard.");
    } catch (t) {
      if (cl(t))
        return;
      _e("Failed to deserialize the state from clipboard. Check the console for more details.", "error"), console.error(t);
    }
}
async function ef(e) {
  try {
    sl(new Blob([JSON.stringify(e.state.value)], {
      type: "text/plain;charset=utf-8"
    }), "pinia-state.json");
  } catch (t) {
    _e("Failed to export the state as JSON. Check the console for more details.", "error"), console.error(t);
  }
}
let tt;
function tf() {
  tt || (tt = document.createElement("input"), tt.type = "file", tt.accept = ".json");
  function e() {
    return new Promise((t, n) => {
      tt.onchange = async () => {
        const o = tt.files;
        if (!o)
          return t(null);
        const r = o.item(0);
        return t(r ? { text: await r.text(), file: r } : null);
      }, tt.oncancel = () => t(null), tt.onerror = n, tt.click();
    });
  }
  return e;
}
async function nf(e) {
  try {
    const n = await tf()();
    if (!n)
      return;
    const { text: o, file: r } = n;
    al(e, JSON.parse(o)), _e(`Global state imported from "${r.name}".`);
  } catch (t) {
    _e("Failed to import the state from JSON. Check the console for more details.", "error"), console.error(t);
  }
}
function al(e, t) {
  for (const n in t) {
    const o = e.state.value[n];
    o ? Object.assign(o, t[n]) : e.state.value[n] = t[n];
  }
}
function Fe(e) {
  return {
    _custom: {
      display: e
    }
  };
}
const ul = "🍍 Pinia (root)", no = "_root";
function of(e) {
  return Ar(e) ? {
    id: no,
    label: ul
  } : {
    id: e.$id,
    label: e.$id
  };
}
function rf(e) {
  if (Ar(e)) {
    const n = Array.from(e._s.keys()), o = e._s;
    return {
      state: n.map((i) => ({
        editable: !0,
        key: i,
        value: e.state.value[i]
      })),
      getters: n.filter((i) => o.get(i)._getters).map((i) => {
        const s = o.get(i);
        return {
          editable: !1,
          key: i,
          value: s._getters.reduce((l, c) => (l[c] = s[c], l), {})
        };
      })
    };
  }
  const t = {
    state: Object.keys(e.$state).map((n) => ({
      editable: !0,
      key: n,
      value: e.$state[n]
    }))
  };
  return e._getters && e._getters.length && (t.getters = e._getters.map((n) => ({
    editable: !1,
    key: n,
    value: e[n]
  }))), e._customProperties.size && (t.customProperties = Array.from(e._customProperties).map((n) => ({
    editable: !0,
    key: n,
    value: e[n]
  }))), t;
}
function sf(e) {
  return e ? Array.isArray(e) ? e.reduce((t, n) => (t.keys.push(n.key), t.operations.push(n.type), t.oldValue[n.key] = n.oldValue, t.newValue[n.key] = n.newValue, t), {
    oldValue: {},
    keys: [],
    operations: [],
    newValue: {}
  }) : {
    operation: Fe(e.type),
    key: Fe(e.key),
    oldValue: e.oldValue,
    newValue: e.newValue
  } : {};
}
function lf(e) {
  switch (e) {
    case Bt.direct:
      return "mutation";
    case Bt.patchFunction:
      return "$patch";
    case Bt.patchObject:
      return "$patch";
    default:
      return "unknown";
  }
}
let Xt = !0;
const oo = [], Mt = "pinia:mutations", Oe = "pinia", { assign: cf } = Object, fo = (e) => "🍍 " + e;
function af(e, t) {
  Tr({
    id: "dev.esm.pinia",
    label: "Pinia 🍍",
    logo: "https://pinia.vuejs.org/logo.svg",
    packageName: "pinia",
    homepage: "https://pinia.vuejs.org",
    componentStateTypes: oo,
    app: e
  }, (n) => {
    typeof n.now != "function" && _e("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."), n.addTimelineLayer({
      id: Mt,
      label: "Pinia 🍍",
      color: 15064968
    }), n.addInspector({
      id: Oe,
      label: "Pinia 🍍",
      icon: "storage",
      treeFilterPlaceholder: "Search stores",
      actions: [
        {
          icon: "content_copy",
          action: () => {
            Xu(t);
          },
          tooltip: "Serialize and copy the state"
        },
        {
          icon: "content_paste",
          action: async () => {
            await Zu(t), n.sendInspectorTree(Oe), n.sendInspectorState(Oe);
          },
          tooltip: "Replace the state with the content of your clipboard"
        },
        {
          icon: "save",
          action: () => {
            ef(t);
          },
          tooltip: "Save the state as a JSON file"
        },
        {
          icon: "folder_open",
          action: async () => {
            await nf(t), n.sendInspectorTree(Oe), n.sendInspectorState(Oe);
          },
          tooltip: "Import the state from a JSON file"
        }
      ],
      nodeActions: [
        {
          icon: "restore",
          tooltip: 'Reset the state (with "$reset")',
          action: (o) => {
            const r = t._s.get(o);
            r ? typeof r.$reset != "function" ? _e(`Cannot reset "${o}" store because it doesn't have a "$reset" method implemented.`, "warn") : (r.$reset(), _e(`Store "${o}" reset.`)) : _e(`Cannot reset "${o}" store because it wasn't found.`, "warn");
          }
        }
      ]
    }), n.on.inspectComponent((o, r) => {
      const i = o.componentInstance && o.componentInstance.proxy;
      if (i && i._pStores) {
        const s = o.componentInstance.proxy._pStores;
        Object.values(s).forEach((l) => {
          o.instanceData.state.push({
            type: fo(l.$id),
            key: "state",
            editable: !0,
            value: l._isOptionsAPI ? {
              _custom: {
                value: U(l.$state),
                actions: [
                  {
                    icon: "restore",
                    tooltip: "Reset the state of this store",
                    action: () => l.$reset()
                  }
                ]
              }
            } : (
              // NOTE: workaround to unwrap transferred refs
              Object.keys(l.$state).reduce((c, f) => (c[f] = l.$state[f], c), {})
            )
          }), l._getters && l._getters.length && o.instanceData.state.push({
            type: fo(l.$id),
            key: "getters",
            editable: !1,
            value: l._getters.reduce((c, f) => {
              try {
                c[f] = l[f];
              } catch (d) {
                c[f] = d;
              }
              return c;
            }, {})
          });
        });
      }
    }), n.on.getInspectorTree((o) => {
      if (o.app === e && o.inspectorId === Oe) {
        let r = [t];
        r = r.concat(Array.from(t._s.values())), o.rootNodes = (o.filter ? r.filter((i) => "$id" in i ? i.$id.toLowerCase().includes(o.filter.toLowerCase()) : ul.toLowerCase().includes(o.filter.toLowerCase())) : r).map(of);
      }
    }), globalThis.$pinia = t, n.on.getInspectorState((o) => {
      if (o.app === e && o.inspectorId === Oe) {
        const r = o.nodeId === no ? t : t._s.get(o.nodeId);
        if (!r)
          return;
        r && (o.nodeId !== no && (globalThis.$store = U(r)), o.state = rf(r));
      }
    }), n.on.editInspectorState((o, r) => {
      if (o.app === e && o.inspectorId === Oe) {
        const i = o.nodeId === no ? t : t._s.get(o.nodeId);
        if (!i)
          return _e(`store "${o.nodeId}" not found`, "error");
        const { path: s } = o;
        Ar(i) ? s.unshift("state") : (s.length !== 1 || !i._customProperties.has(s[0]) || s[0] in i.$state) && s.unshift("$state"), Xt = !1, o.set(i, s, o.state.value), Xt = !0;
      }
    }), n.on.editComponentState((o) => {
      if (o.type.startsWith("🍍")) {
        const r = o.type.replace(/^🍍\s*/, ""), i = t._s.get(r);
        if (!i)
          return _e(`store "${r}" not found`, "error");
        const { path: s } = o;
        if (s[0] !== "state")
          return _e(`Invalid path for store "${r}":
${s}
Only state can be modified.`);
        s[0] = "$state", Xt = !1, o.set(i, s, o.state.value), Xt = !0;
      }
    });
  });
}
function uf(e, t) {
  oo.includes(fo(t.$id)) || oo.push(fo(t.$id)), Tr({
    id: "dev.esm.pinia",
    label: "Pinia 🍍",
    logo: "https://pinia.vuejs.org/logo.svg",
    packageName: "pinia",
    homepage: "https://pinia.vuejs.org",
    componentStateTypes: oo,
    app: e,
    settings: {
      logStoreChanges: {
        label: "Notify about new/deleted stores",
        type: "boolean",
        defaultValue: !0
      }
      // useEmojis: {
      //   label: 'Use emojis in messages ⚡️',
      //   type: 'boolean',
      //   defaultValue: true,
      // },
    }
  }, (n) => {
    const o = typeof n.now == "function" ? n.now.bind(n) : Date.now;
    t.$onAction(({ after: s, onError: l, name: c, args: f }) => {
      const d = fl++;
      n.addTimelineEvent({
        layerId: Mt,
        event: {
          time: o(),
          title: "🛫 " + c,
          subtitle: "start",
          data: {
            store: Fe(t.$id),
            action: Fe(c),
            args: f
          },
          groupId: d
        }
      }), s((u) => {
        Ot = void 0, n.addTimelineEvent({
          layerId: Mt,
          event: {
            time: o(),
            title: "🛬 " + c,
            subtitle: "end",
            data: {
              store: Fe(t.$id),
              action: Fe(c),
              args: f,
              result: u
            },
            groupId: d
          }
        });
      }), l((u) => {
        Ot = void 0, n.addTimelineEvent({
          layerId: Mt,
          event: {
            time: o(),
            logType: "error",
            title: "💥 " + c,
            subtitle: "end",
            data: {
              store: Fe(t.$id),
              action: Fe(c),
              args: f,
              error: u
            },
            groupId: d
          }
        });
      });
    }, !0), t._customProperties.forEach((s) => {
      on(() => ke(t[s]), (l, c) => {
        n.notifyComponentUpdate(), n.sendInspectorState(Oe), Xt && n.addTimelineEvent({
          layerId: Mt,
          event: {
            time: o(),
            title: "Change",
            subtitle: s,
            data: {
              newValue: l,
              oldValue: c
            },
            groupId: Ot
          }
        });
      }, { deep: !0 });
    }), t.$subscribe(({ events: s, type: l }, c) => {
      if (n.notifyComponentUpdate(), n.sendInspectorState(Oe), !Xt)
        return;
      const f = {
        time: o(),
        title: lf(l),
        data: cf({ store: Fe(t.$id) }, sf(s)),
        groupId: Ot
      };
      l === Bt.patchFunction ? f.subtitle = "⤵️" : l === Bt.patchObject ? f.subtitle = "🧩" : s && !Array.isArray(s) && (f.subtitle = s.type), s && (f.data["rawEvent(s)"] = {
        _custom: {
          display: "DebuggerEvent",
          type: "object",
          tooltip: "raw DebuggerEvent[]",
          value: s
        }
      }), n.addTimelineEvent({
        layerId: Mt,
        event: f
      });
    }, { detached: !0, flush: "sync" });
    const r = t._hotUpdate;
    t._hotUpdate = Er((s) => {
      r(s), n.addTimelineEvent({
        layerId: Mt,
        event: {
          time: o(),
          title: "🔥 " + t.$id,
          subtitle: "HMR update",
          data: {
            store: Fe(t.$id),
            info: Fe("HMR update")
          }
        }
      }), n.notifyComponentUpdate(), n.sendInspectorTree(Oe), n.sendInspectorState(Oe);
    });
    const { $dispose: i } = t;
    t.$dispose = () => {
      i(), n.notifyComponentUpdate(), n.sendInspectorTree(Oe), n.sendInspectorState(Oe), n.getSettings().logStoreChanges && _e(`Disposed "${t.$id}" store 🗑`);
    }, n.notifyComponentUpdate(), n.sendInspectorTree(Oe), n.sendInspectorState(Oe), n.getSettings().logStoreChanges && _e(`"${t.$id}" store installed 🆕`);
  });
}
let fl = 0, Ot;
function Vi(e, t, n) {
  const o = t.reduce((r, i) => (r[i] = U(e)[i], r), {});
  for (const r in o)
    e[r] = function() {
      const i = fl, s = n ? new Proxy(e, {
        get(...c) {
          return Ot = i, Reflect.get(...c);
        },
        set(...c) {
          return Ot = i, Reflect.set(...c);
        }
      }) : e;
      Ot = i;
      const l = o[r].apply(s, arguments);
      return Ot = void 0, l;
    };
}
function ff({ app: e, store: t, options: n }) {
  if (!t.$id.startsWith("__hot:")) {
    if (t._isOptionsAPI = !!n.state, !t._p._testing) {
      Vi(t, Object.keys(n.actions), t._isOptionsAPI);
      const o = t._hotUpdate;
      U(t)._hotUpdate = function(r) {
        o.apply(this, arguments), Vi(t, Object.keys(r._hmrPayload.actions), !!t._isOptionsAPI);
      };
    }
    uf(
      e,
      // FIXME: is there a way to allow the assignment from Store<Id, S, G, A> to StoreGeneric?
      t
    );
  }
}
function df() {
  const e = Xl(!0), t = e.run(() => fs({}));
  let n = [], o = [];
  const r = Er({
    install(i) {
      r._a = i, i.provide(Gu, r), i.config.globalProperties.$pinia = r, En.NODE_ENV !== "production" && En.NODE_ENV !== "test" && ol && af(i, r), o.forEach((s) => n.push(s)), o = [];
    },
    use(i) {
      return !this._a && !Lu ? o.push(i) : n.push(i), this;
    },
    _p: n,
    // it's actually undefined here
    // @ts-expect-error
    _a: null,
    _e: e,
    _s: /* @__PURE__ */ new Map(),
    state: t
  });
  return En.NODE_ENV !== "production" && En.NODE_ENV !== "test" && typeof Proxy < "u" && r.use(ff), r;
}
var z = {};
const st = typeof document < "u";
function pf(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module";
}
const te = Object.assign;
function Io(e, t) {
  const n = {};
  for (const o in t) {
    const r = t[o];
    n[o] = Re(r) ? r.map(e) : e(r);
  }
  return n;
}
const On = () => {
}, Re = Array.isArray;
function q(e) {
  const t = Array.from(arguments).slice(1);
  console.warn.apply(console, ["[Vue Router warn]: " + e].concat(t));
}
const dl = /#/g, hf = /&/g, mf = /\//g, gf = /=/g, _f = /\?/g, pl = /\+/g, Ef = /%5B/g, vf = /%5D/g, hl = /%5E/g, yf = /%60/g, ml = /%7B/g, bf = /%7C/g, gl = /%7D/g, Nf = /%20/g;
function kr(e) {
  return encodeURI("" + e).replace(bf, "|").replace(Ef, "[").replace(vf, "]");
}
function wf(e) {
  return kr(e).replace(ml, "{").replace(gl, "}").replace(hl, "^");
}
function tr(e) {
  return kr(e).replace(pl, "%2B").replace(Nf, "+").replace(dl, "%23").replace(hf, "%26").replace(yf, "`").replace(ml, "{").replace(gl, "}").replace(hl, "^");
}
function Of(e) {
  return tr(e).replace(gf, "%3D");
}
function Vf(e) {
  return kr(e).replace(dl, "%23").replace(_f, "%3F");
}
function Sf(e) {
  return e == null ? "" : Vf(e).replace(mf, "%2F");
}
function ln(e) {
  try {
    return decodeURIComponent("" + e);
  } catch {
    z.NODE_ENV !== "production" && q(`Error decoding "${e}". Using original value`);
  }
  return "" + e;
}
const xf = /\/$/, Df = (e) => e.replace(xf, "");
function Ao(e, t, n = "/") {
  let o, r = {}, i = "", s = "";
  const l = t.indexOf("#");
  let c = t.indexOf("?");
  return l < c && l >= 0 && (c = -1), c > -1 && (o = t.slice(0, c), i = t.slice(c + 1, l > -1 ? l : t.length), r = e(i)), l > -1 && (o = o || t.slice(0, l), s = t.slice(l, t.length)), o = Rf(o ?? t, n), {
    fullPath: o + (i && "?") + i + s,
    path: o,
    query: r,
    hash: ln(s)
  };
}
function Cf(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function Si(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function xi(e, t, n) {
  const o = t.matched.length - 1, r = n.matched.length - 1;
  return o > -1 && o === r && Pt(t.matched[o], n.matched[r]) && _l(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function Pt(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function _l(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const n in e)
    if (!$f(e[n], t[n]))
      return !1;
  return !0;
}
function $f(e, t) {
  return Re(e) ? Di(e, t) : Re(t) ? Di(t, e) : e === t;
}
function Di(e, t) {
  return Re(t) ? e.length === t.length && e.every((n, o) => n === t[o]) : e.length === 1 && e[0] === t;
}
function Rf(e, t) {
  if (e.startsWith("/"))
    return e;
  if (z.NODE_ENV !== "production" && !t.startsWith("/"))
    return q(`Cannot resolve a relative location without an absolute path. Trying to resolve "${e}" from "${t}". It should look like "/${t}".`), e;
  if (!e)
    return t;
  const n = t.split("/"), o = e.split("/"), r = o[o.length - 1];
  (r === ".." || r === ".") && o.push("");
  let i = n.length - 1, s, l;
  for (s = 0; s < o.length; s++)
    if (l = o[s], l !== ".")
      if (l === "..")
        i > 1 && i--;
      else
        break;
  return n.slice(0, i).join("/") + "/" + o.slice(s).join("/");
}
const Et = {
  path: "/",
  // TODO: could we use a symbol in the future?
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0
};
var $n;
(function(e) {
  e.pop = "pop", e.push = "push";
})($n || ($n = {}));
var Vn;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(Vn || (Vn = {}));
function Pf(e) {
  if (!e)
    if (st) {
      const t = document.querySelector("base");
      e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
    } else
      e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), Df(e);
}
const Tf = /^[^#]+#/;
function If(e, t) {
  return e.replace(Tf, "#") + t;
}
function Af(e, t) {
  const n = document.documentElement.getBoundingClientRect(), o = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: o.left - n.left - (t.left || 0),
    top: o.top - n.top - (t.top || 0)
  };
}
const So = () => ({
  left: window.scrollX,
  top: window.scrollY
});
function kf(e) {
  let t;
  if ("el" in e) {
    const n = e.el, o = typeof n == "string" && n.startsWith("#");
    if (z.NODE_ENV !== "production" && typeof e.el == "string" && (!o || !document.getElementById(e.el.slice(1))))
      try {
        const i = document.querySelector(e.el);
        if (o && i) {
          q(`The selector "${e.el}" should be passed as "el: document.querySelector('${e.el}')" because it starts with "#".`);
          return;
        }
      } catch {
        q(`The selector "${e.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);
        return;
      }
    const r = typeof n == "string" ? o ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
    if (!r) {
      z.NODE_ENV !== "production" && q(`Couldn't find element using selector "${e.el}" returned by scrollBehavior.`);
      return;
    }
    t = Af(r, e);
  } else
    t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.scrollX, t.top != null ? t.top : window.scrollY);
}
function Ci(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const nr = /* @__PURE__ */ new Map();
function Mf(e, t) {
  nr.set(e, t);
}
function jf(e) {
  const t = nr.get(e);
  return nr.delete(e), t;
}
let Lf = () => location.protocol + "//" + location.host;
function El(e, t) {
  const { pathname: n, search: o, hash: r } = t, i = e.indexOf("#");
  if (i > -1) {
    let l = r.includes(e.slice(i)) ? e.slice(i).length : 1, c = r.slice(l);
    return c[0] !== "/" && (c = "/" + c), Si(c, "");
  }
  return Si(n, e) + o + r;
}
function Hf(e, t, n, o) {
  let r = [], i = [], s = null;
  const l = ({ state: h }) => {
    const g = El(e, location), x = n.value, D = t.value;
    let B = 0;
    if (h) {
      if (n.value = g, t.value = h, s && s === x) {
        s = null;
        return;
      }
      B = D ? h.position - D.position : 0;
    } else
      o(g);
    r.forEach((L) => {
      L(n.value, x, {
        delta: B,
        type: $n.pop,
        direction: B ? B > 0 ? Vn.forward : Vn.back : Vn.unknown
      });
    });
  };
  function c() {
    s = n.value;
  }
  function f(h) {
    r.push(h);
    const g = () => {
      const x = r.indexOf(h);
      x > -1 && r.splice(x, 1);
    };
    return i.push(g), g;
  }
  function d() {
    const { history: h } = window;
    h.state && h.replaceState(te({}, h.state, { scroll: So() }), "");
  }
  function u() {
    for (const h of i)
      h();
    i = [], window.removeEventListener("popstate", l), window.removeEventListener("beforeunload", d);
  }
  return window.addEventListener("popstate", l), window.addEventListener("beforeunload", d, {
    passive: !0
  }), {
    pauseListeners: c,
    listen: f,
    destroy: u
  };
}
function $i(e, t, n, o = !1, r = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: o,
    position: window.history.length,
    scroll: r ? So() : null
  };
}
function Ff(e) {
  const { history: t, location: n } = window, o = {
    value: El(e, n)
  }, r = { value: t.state };
  r.value || i(o.value, {
    back: null,
    current: o.value,
    forward: null,
    // the length is off by one, we need to decrease it
    position: t.length - 1,
    replaced: !0,
    // don't add a scroll as the user may have an anchor, and we want
    // scrollBehavior to be triggered without a saved position
    scroll: null
  }, !0);
  function i(c, f, d) {
    const u = e.indexOf("#"), h = u > -1 ? (n.host && document.querySelector("base") ? e : e.slice(u)) + c : Lf() + e + c;
    try {
      t[d ? "replaceState" : "pushState"](f, "", h), r.value = f;
    } catch (g) {
      z.NODE_ENV !== "production" ? q("Error with push/replace State", g) : console.error(g), n[d ? "replace" : "assign"](h);
    }
  }
  function s(c, f) {
    const d = te({}, t.state, $i(
      r.value.back,
      // keep back and forward entries but override current position
      c,
      r.value.forward,
      !0
    ), f, { position: r.value.position });
    i(c, d, !0), o.value = c;
  }
  function l(c, f) {
    const d = te(
      {},
      // use current history state to gracefully handle a wrong call to
      // history.replaceState
      // https://github.com/vuejs/router/issues/366
      r.value,
      t.state,
      {
        forward: c,
        scroll: So()
      }
    );
    z.NODE_ENV !== "production" && !t.state && q(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://router.vuejs.org/guide/migration/#Usage-of-history-state`), i(d.current, d, !0);
    const u = te({}, $i(o.value, c, null), { position: d.position + 1 }, f);
    i(c, u, !1), o.value = c;
  }
  return {
    location: o,
    state: r,
    push: l,
    replace: s
  };
}
function zf(e) {
  e = Pf(e);
  const t = Ff(e), n = Hf(e, t.state, t.location, t.replace);
  function o(i, s = !0) {
    s || n.pauseListeners(), history.go(i);
  }
  const r = te({
    // it's overridden right after
    location: "",
    base: e,
    go: o,
    createHref: If.bind(null, e)
  }, t, n);
  return Object.defineProperty(r, "location", {
    enumerable: !0,
    get: () => t.location.value
  }), Object.defineProperty(r, "state", {
    enumerable: !0,
    get: () => t.state.value
  }), r;
}
function po(e) {
  return typeof e == "string" || e && typeof e == "object";
}
function vl(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const or = Symbol(z.NODE_ENV !== "production" ? "navigation failure" : "");
var Ri;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(Ri || (Ri = {}));
const Uf = {
  1({ location: e, currentLocation: t }) {
    return `No match for
 ${JSON.stringify(e)}${t ? `
while being at
` + JSON.stringify(t) : ""}`;
  },
  2({ from: e, to: t }) {
    return `Redirected from "${e.fullPath}" to "${Kf(t)}" via a navigation guard.`;
  },
  4({ from: e, to: t }) {
    return `Navigation aborted from "${e.fullPath}" to "${t.fullPath}" via a navigation guard.`;
  },
  8({ from: e, to: t }) {
    return `Navigation cancelled from "${e.fullPath}" to "${t.fullPath}" with a new navigation.`;
  },
  16({ from: e, to: t }) {
    return `Avoided redundant navigation to current location: "${e.fullPath}".`;
  }
};
function cn(e, t) {
  return z.NODE_ENV !== "production" ? te(new Error(Uf[e](t)), {
    type: e,
    [or]: !0
  }, t) : te(new Error(), {
    type: e,
    [or]: !0
  }, t);
}
function nt(e, t) {
  return e instanceof Error && or in e && (t == null || !!(e.type & t));
}
const Bf = ["params", "query", "hash"];
function Kf(e) {
  if (typeof e == "string")
    return e;
  if (e.path != null)
    return e.path;
  const t = {};
  for (const n of Bf)
    n in e && (t[n] = e[n]);
  return JSON.stringify(t, null, 2);
}
const Pi = "[^/]+?", Wf = {
  sensitive: !1,
  strict: !1,
  start: !0,
  end: !0
}, Gf = /[.+*?^${}()[\]/\\]/g;
function qf(e, t) {
  const n = te({}, Wf, t), o = [];
  let r = n.start ? "^" : "";
  const i = [];
  for (const f of e) {
    const d = f.length ? [] : [
      90
      /* PathScore.Root */
    ];
    n.strict && !f.length && (r += "/");
    for (let u = 0; u < f.length; u++) {
      const h = f[u];
      let g = 40 + (n.sensitive ? 0.25 : 0);
      if (h.type === 0)
        u || (r += "/"), r += h.value.replace(Gf, "\\$&"), g += 40;
      else if (h.type === 1) {
        const { value: x, repeatable: D, optional: B, regexp: L } = h;
        i.push({
          name: x,
          repeatable: D,
          optional: B
        });
        const A = L || Pi;
        if (A !== Pi) {
          g += 10;
          try {
            new RegExp(`(${A})`);
          } catch (Y) {
            throw new Error(`Invalid custom RegExp for param "${x}" (${A}): ` + Y.message);
          }
        }
        let T = D ? `((?:${A})(?:/(?:${A}))*)` : `(${A})`;
        u || (T = // avoid an optional / if there are more segments e.g. /:p?-static
        // or /:p?-:p2
        B && f.length < 2 ? `(?:/${T})` : "/" + T), B && (T += "?"), r += T, g += 20, B && (g += -8), D && (g += -20), A === ".*" && (g += -50);
      }
      d.push(g);
    }
    o.push(d);
  }
  if (n.strict && n.end) {
    const f = o.length - 1;
    o[f][o[f].length - 1] += 0.7000000000000001;
  }
  n.strict || (r += "/?"), n.end ? r += "$" : n.strict && (r += "(?:/|$)");
  const s = new RegExp(r, n.sensitive ? "" : "i");
  function l(f) {
    const d = f.match(s), u = {};
    if (!d)
      return null;
    for (let h = 1; h < d.length; h++) {
      const g = d[h] || "", x = i[h - 1];
      u[x.name] = g && x.repeatable ? g.split("/") : g;
    }
    return u;
  }
  function c(f) {
    let d = "", u = !1;
    for (const h of e) {
      (!u || !d.endsWith("/")) && (d += "/"), u = !1;
      for (const g of h)
        if (g.type === 0)
          d += g.value;
        else if (g.type === 1) {
          const { value: x, repeatable: D, optional: B } = g, L = x in f ? f[x] : "";
          if (Re(L) && !D)
            throw new Error(`Provided param "${x}" is an array but it is not repeatable (* or + modifiers)`);
          const A = Re(L) ? L.join("/") : L;
          if (!A)
            if (B)
              h.length < 2 && (d.endsWith("/") ? d = d.slice(0, -1) : u = !0);
            else
              throw new Error(`Missing required param "${x}"`);
          d += A;
        }
    }
    return d || "/";
  }
  return {
    re: s,
    score: o,
    keys: i,
    parse: l,
    stringify: c
  };
}
function Yf(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const o = t[n] - e[n];
    if (o)
      return o;
    n++;
  }
  return e.length < t.length ? e.length === 1 && e[0] === 80 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 80 ? 1 : -1 : 0;
}
function yl(e, t) {
  let n = 0;
  const o = e.score, r = t.score;
  for (; n < o.length && n < r.length; ) {
    const i = Yf(o[n], r[n]);
    if (i)
      return i;
    n++;
  }
  if (Math.abs(r.length - o.length) === 1) {
    if (Ti(o))
      return 1;
    if (Ti(r))
      return -1;
  }
  return r.length - o.length;
}
function Ti(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const Jf = {
  type: 0,
  value: ""
}, Qf = /[a-zA-Z0-9_]/;
function Xf(e) {
  if (!e)
    return [[]];
  if (e === "/")
    return [[Jf]];
  if (!e.startsWith("/"))
    throw new Error(z.NODE_ENV !== "production" ? `Route paths should start with a "/": "${e}" should be "/${e}".` : `Invalid path "${e}"`);
  function t(g) {
    throw new Error(`ERR (${n})/"${f}": ${g}`);
  }
  let n = 0, o = n;
  const r = [];
  let i;
  function s() {
    i && r.push(i), i = [];
  }
  let l = 0, c, f = "", d = "";
  function u() {
    f && (n === 0 ? i.push({
      type: 0,
      value: f
    }) : n === 1 || n === 2 || n === 3 ? (i.length > 1 && (c === "*" || c === "+") && t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`), i.push({
      type: 1,
      value: f,
      regexp: d,
      repeatable: c === "*" || c === "+",
      optional: c === "*" || c === "?"
    })) : t("Invalid state to consume buffer"), f = "");
  }
  function h() {
    f += c;
  }
  for (; l < e.length; ) {
    if (c = e[l++], c === "\\" && n !== 2) {
      o = n, n = 4;
      continue;
    }
    switch (n) {
      case 0:
        c === "/" ? (f && u(), s()) : c === ":" ? (u(), n = 1) : h();
        break;
      case 4:
        h(), n = o;
        break;
      case 1:
        c === "(" ? n = 2 : Qf.test(c) ? h() : (u(), n = 0, c !== "*" && c !== "?" && c !== "+" && l--);
        break;
      case 2:
        c === ")" ? d[d.length - 1] == "\\" ? d = d.slice(0, -1) + c : n = 3 : d += c;
        break;
      case 3:
        u(), n = 0, c !== "*" && c !== "?" && c !== "+" && l--, d = "";
        break;
      default:
        t("Unknown state");
        break;
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${f}"`), u(), s(), r;
}
function Zf(e, t, n) {
  const o = qf(Xf(e.path), n);
  if (z.NODE_ENV !== "production") {
    const i = /* @__PURE__ */ new Set();
    for (const s of o.keys)
      i.has(s.name) && q(`Found duplicated params with name "${s.name}" for path "${e.path}". Only the last one will be available on "$route.params".`), i.add(s.name);
  }
  const r = te(o, {
    record: e,
    parent: t,
    // these needs to be populated by the parent
    children: [],
    alias: []
  });
  return t && !r.record.aliasOf == !t.record.aliasOf && t.children.push(r), r;
}
function ed(e, t) {
  const n = [], o = /* @__PURE__ */ new Map();
  t = ki({ strict: !1, end: !0, sensitive: !1 }, t);
  function r(u) {
    return o.get(u);
  }
  function i(u, h, g) {
    const x = !g, D = td(u);
    z.NODE_ENV !== "production" && id(D, h), D.aliasOf = g && g.record;
    const B = ki(t, u), L = [
      D
    ];
    if ("alias" in u) {
      const Y = typeof u.alias == "string" ? [u.alias] : u.alias;
      for (const Z of Y)
        L.push(te({}, D, {
          // this allows us to hold a copy of the `components` option
          // so that async components cache is hold on the original record
          components: g ? g.record.components : D.components,
          path: Z,
          // we might be the child of an alias
          aliasOf: g ? g.record : D
          // the aliases are always of the same kind as the original since they
          // are defined on the same record
        }));
    }
    let A, T;
    for (const Y of L) {
      const { path: Z } = Y;
      if (h && Z[0] !== "/") {
        const fe = h.record.path, M = fe[fe.length - 1] === "/" ? "" : "/";
        Y.path = h.record.path + (Z && M + Z);
      }
      if (z.NODE_ENV !== "production" && Y.path === "*")
        throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://router.vuejs.org/guide/migration/#Removed-star-or-catch-all-routes.`);
      if (A = Zf(Y, h, B), z.NODE_ENV !== "production" && h && Z[0] === "/" && sd(A, h), g ? (g.alias.push(A), z.NODE_ENV !== "production" && rd(g, A)) : (T = T || A, T !== A && T.alias.push(A), x && u.name && !Ai(A) && s(u.name)), bl(A) && c(A), D.children) {
        const fe = D.children;
        for (let M = 0; M < fe.length; M++)
          i(fe[M], A, g && g.children[M]);
      }
      g = g || A;
    }
    return T ? () => {
      s(T);
    } : On;
  }
  function s(u) {
    if (vl(u)) {
      const h = o.get(u);
      h && (o.delete(u), n.splice(n.indexOf(h), 1), h.children.forEach(s), h.alias.forEach(s));
    } else {
      const h = n.indexOf(u);
      h > -1 && (n.splice(h, 1), u.record.name && o.delete(u.record.name), u.children.forEach(s), u.alias.forEach(s));
    }
  }
  function l() {
    return n;
  }
  function c(u) {
    const h = ld(u, n);
    n.splice(h, 0, u), u.record.name && !Ai(u) && o.set(u.record.name, u);
  }
  function f(u, h) {
    let g, x = {}, D, B;
    if ("name" in u && u.name) {
      if (g = o.get(u.name), !g)
        throw cn(1, {
          location: u
        });
      if (z.NODE_ENV !== "production") {
        const T = Object.keys(u.params || {}).filter((Y) => !g.keys.find((Z) => Z.name === Y));
        T.length && q(`Discarded invalid param(s) "${T.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`);
      }
      B = g.record.name, x = te(
        // paramsFromLocation is a new object
        Ii(
          h.params,
          // only keep params that exist in the resolved location
          // only keep optional params coming from a parent record
          g.keys.filter((T) => !T.optional).concat(g.parent ? g.parent.keys.filter((T) => T.optional) : []).map((T) => T.name)
        ),
        // discard any existing params in the current location that do not exist here
        // #1497 this ensures better active/exact matching
        u.params && Ii(u.params, g.keys.map((T) => T.name))
      ), D = g.stringify(x);
    } else if (u.path != null)
      D = u.path, z.NODE_ENV !== "production" && !D.startsWith("/") && q(`The Matcher cannot resolve relative paths but received "${D}". Unless you directly called \`matcher.resolve("${D}")\`, this is probably a bug in vue-router. Please open an issue at https://github.com/vuejs/router/issues/new/choose.`), g = n.find((T) => T.re.test(D)), g && (x = g.parse(D), B = g.record.name);
    else {
      if (g = h.name ? o.get(h.name) : n.find((T) => T.re.test(h.path)), !g)
        throw cn(1, {
          location: u,
          currentLocation: h
        });
      B = g.record.name, x = te({}, h.params, u.params), D = g.stringify(x);
    }
    const L = [];
    let A = g;
    for (; A; )
      L.unshift(A.record), A = A.parent;
    return {
      name: B,
      path: D,
      params: x,
      matched: L,
      meta: od(L)
    };
  }
  e.forEach((u) => i(u));
  function d() {
    n.length = 0, o.clear();
  }
  return {
    addRoute: i,
    resolve: f,
    removeRoute: s,
    clearRoutes: d,
    getRoutes: l,
    getRecordMatcher: r
  };
}
function Ii(e, t) {
  const n = {};
  for (const o of t)
    o in e && (n[o] = e[o]);
  return n;
}
function td(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: nd(e),
    children: e.children || [],
    instances: {},
    leaveGuards: /* @__PURE__ */ new Set(),
    updateGuards: /* @__PURE__ */ new Set(),
    enterCallbacks: {},
    components: "components" in e ? e.components || null : e.component && { default: e.component }
  };
}
function nd(e) {
  const t = {}, n = e.props || !1;
  if ("component" in e)
    t.default = n;
  else
    for (const o in e.components)
      t[o] = typeof n == "object" ? n[o] : n;
  return t;
}
function Ai(e) {
  for (; e; ) {
    if (e.record.aliasOf)
      return !0;
    e = e.parent;
  }
  return !1;
}
function od(e) {
  return e.reduce((t, n) => te(t, n.meta), {});
}
function ki(e, t) {
  const n = {};
  for (const o in e)
    n[o] = o in t ? t[o] : e[o];
  return n;
}
function rr(e, t) {
  return e.name === t.name && e.optional === t.optional && e.repeatable === t.repeatable;
}
function rd(e, t) {
  for (const n of e.keys)
    if (!n.optional && !t.keys.find(rr.bind(null, n)))
      return q(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
  for (const n of t.keys)
    if (!n.optional && !e.keys.find(rr.bind(null, n)))
      return q(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
}
function id(e, t) {
  t && t.record.name && !e.name && !e.path && q(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`);
}
function sd(e, t) {
  for (const n of t.keys)
    if (!e.keys.find(rr.bind(null, n)))
      return q(`Absolute path "${e.record.path}" must have the exact same param named "${n.name}" as its parent "${t.record.path}".`);
}
function ld(e, t) {
  let n = 0, o = t.length;
  for (; n !== o; ) {
    const i = n + o >> 1;
    yl(e, t[i]) < 0 ? o = i : n = i + 1;
  }
  const r = cd(e);
  return r && (o = t.lastIndexOf(r, o - 1), z.NODE_ENV !== "production" && o < 0 && q(`Finding ancestor route "${r.record.path}" failed for "${e.record.path}"`)), o;
}
function cd(e) {
  let t = e;
  for (; t = t.parent; )
    if (bl(t) && yl(e, t) === 0)
      return t;
}
function bl({ record: e }) {
  return !!(e.name || e.components && Object.keys(e.components).length || e.redirect);
}
function ad(e) {
  const t = {};
  if (e === "" || e === "?")
    return t;
  const o = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let r = 0; r < o.length; ++r) {
    const i = o[r].replace(pl, " "), s = i.indexOf("="), l = ln(s < 0 ? i : i.slice(0, s)), c = s < 0 ? null : ln(i.slice(s + 1));
    if (l in t) {
      let f = t[l];
      Re(f) || (f = t[l] = [f]), f.push(c);
    } else
      t[l] = c;
  }
  return t;
}
function Mi(e) {
  let t = "";
  for (let n in e) {
    const o = e[n];
    if (n = Of(n), o == null) {
      o !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (Re(o) ? o.map((i) => i && tr(i)) : [o && tr(o)]).forEach((i) => {
      i !== void 0 && (t += (t.length ? "&" : "") + n, i != null && (t += "=" + i));
    });
  }
  return t;
}
function ud(e) {
  const t = {};
  for (const n in e) {
    const o = e[n];
    o !== void 0 && (t[n] = Re(o) ? o.map((r) => r == null ? null : "" + r) : o == null ? o : "" + o);
  }
  return t;
}
const fd = Symbol(z.NODE_ENV !== "production" ? "router view location matched" : ""), ji = Symbol(z.NODE_ENV !== "production" ? "router view depth" : ""), Mr = Symbol(z.NODE_ENV !== "production" ? "router" : ""), Nl = Symbol(z.NODE_ENV !== "production" ? "route location" : ""), ir = Symbol(z.NODE_ENV !== "production" ? "router view location" : "");
function pn() {
  let e = [];
  function t(o) {
    return e.push(o), () => {
      const r = e.indexOf(o);
      r > -1 && e.splice(r, 1);
    };
  }
  function n() {
    e = [];
  }
  return {
    add: t,
    list: () => e.slice(),
    reset: n
  };
}
function Nt(e, t, n, o, r, i = (s) => s()) {
  const s = o && // name is defined if record is because of the function overload
  (o.enterCallbacks[r] = o.enterCallbacks[r] || []);
  return () => new Promise((l, c) => {
    const f = (h) => {
      h === !1 ? c(cn(4, {
        from: n,
        to: t
      })) : h instanceof Error ? c(h) : po(h) ? c(cn(2, {
        from: t,
        to: h
      })) : (s && // since enterCallbackArray is truthy, both record and name also are
      o.enterCallbacks[r] === s && typeof h == "function" && s.push(h), l());
    }, d = i(() => e.call(o && o.instances[r], t, n, z.NODE_ENV !== "production" ? dd(f, t, n) : f));
    let u = Promise.resolve(d);
    if (e.length < 3 && (u = u.then(f)), z.NODE_ENV !== "production" && e.length > 2) {
      const h = `The "next" callback was never called inside of ${e.name ? '"' + e.name + '"' : ""}:
${e.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;
      if (typeof d == "object" && "then" in d)
        u = u.then((g) => f._called ? g : (q(h), Promise.reject(new Error("Invalid navigation guard"))));
      else if (d !== void 0 && !f._called) {
        q(h), c(new Error("Invalid navigation guard"));
        return;
      }
    }
    u.catch((h) => c(h));
  });
}
function dd(e, t, n) {
  let o = 0;
  return function() {
    o++ === 1 && q(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`), e._called = !0, o === 1 && e.apply(null, arguments);
  };
}
function ko(e, t, n, o, r = (i) => i()) {
  const i = [];
  for (const s of e) {
    z.NODE_ENV !== "production" && !s.components && !s.children.length && q(`Record with path "${s.path}" is either missing a "component(s)" or "children" property.`);
    for (const l in s.components) {
      let c = s.components[l];
      if (z.NODE_ENV !== "production") {
        if (!c || typeof c != "object" && typeof c != "function")
          throw q(`Component "${l}" in record with path "${s.path}" is not a valid component. Received "${String(c)}".`), new Error("Invalid route component");
        if ("then" in c) {
          q(`Component "${l}" in record with path "${s.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);
          const f = c;
          c = () => f;
        } else c.__asyncLoader && // warn only once per component
        !c.__warnedDefineAsync && (c.__warnedDefineAsync = !0, q(`Component "${l}" in record with path "${s.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`));
      }
      if (!(t !== "beforeRouteEnter" && !s.instances[l]))
        if (pd(c)) {
          const d = (c.__vccOpts || c)[t];
          d && i.push(Nt(d, n, o, s, l, r));
        } else {
          let f = c();
          z.NODE_ENV !== "production" && !("catch" in f) && (q(`Component "${l}" in record with path "${s.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`), f = Promise.resolve(f)), i.push(() => f.then((d) => {
            if (!d)
              return Promise.reject(new Error(`Couldn't resolve component "${l}" at "${s.path}"`));
            const u = pf(d) ? d.default : d;
            s.components[l] = u;
            const g = (u.__vccOpts || u)[t];
            return g && Nt(g, n, o, s, l, r)();
          }));
        }
    }
  }
  return i;
}
function pd(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function Li(e) {
  const t = ct(Mr), n = ct(Nl);
  let o = !1, r = null;
  const i = Ue(() => {
    const d = ke(e.to);
    return z.NODE_ENV !== "production" && (!o || d !== r) && (po(d) || (o ? q(`Invalid value for prop "to" in useLink()
- to:`, d, `
- previous to:`, r, `
- props:`, e) : q(`Invalid value for prop "to" in useLink()
- to:`, d, `
- props:`, e)), r = d, o = !0), t.resolve(d);
  }), s = Ue(() => {
    const { matched: d } = i.value, { length: u } = d, h = d[u - 1], g = n.matched;
    if (!h || !g.length)
      return -1;
    const x = g.findIndex(Pt.bind(null, h));
    if (x > -1)
      return x;
    const D = Hi(d[u - 2]);
    return (
      // we are dealing with nested routes
      u > 1 && // if the parent and matched route have the same path, this link is
      // referring to the empty child. Or we currently are on a different
      // child of the same parent
      Hi(h) === D && // avoid comparing the child with its parent
      g[g.length - 1].path !== D ? g.findIndex(Pt.bind(null, d[u - 2])) : x
    );
  }), l = Ue(() => s.value > -1 && gd(n.params, i.value.params)), c = Ue(() => s.value > -1 && s.value === n.matched.length - 1 && _l(n.params, i.value.params));
  function f(d = {}) {
    return md(d) ? t[ke(e.replace) ? "replace" : "push"](
      ke(e.to)
      // avoid uncaught errors are they are logged anyway
    ).catch(On) : Promise.resolve();
  }
  if (z.NODE_ENV !== "production" && st) {
    const d = Rr();
    if (d) {
      const u = {
        route: i.value,
        isActive: l.value,
        isExactActive: c.value,
        error: null
      };
      d.__vrl_devtools = d.__vrl_devtools || [], d.__vrl_devtools.push(u), na(() => {
        u.route = i.value, u.isActive = l.value, u.isExactActive = c.value, u.error = po(ke(e.to)) ? null : 'Invalid "to" value';
      }, { flush: "post" });
    }
  }
  return {
    route: i,
    href: Ue(() => i.value.href),
    isActive: l,
    isExactActive: c,
    navigate: f
  };
}
const hd = /* @__PURE__ */ $s({
  name: "RouterLink",
  compatConfig: { MODE: 3 },
  props: {
    to: {
      type: [String, Object],
      required: !0
    },
    replace: Boolean,
    activeClass: String,
    // inactiveClass: String,
    exactActiveClass: String,
    custom: Boolean,
    ariaCurrentValue: {
      type: String,
      default: "page"
    }
  },
  useLink: Li,
  setup(e, { slots: t }) {
    const n = vo(Li(e)), { options: o } = ct(Mr), r = Ue(() => ({
      [Fi(e.activeClass, o.linkActiveClass, "router-link-active")]: n.isActive,
      // [getLinkClass(
      //   props.inactiveClass,
      //   options.linkInactiveClass,
      //   'router-link-inactive'
      // )]: !link.isExactActive,
      [Fi(e.exactActiveClass, o.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
    }));
    return () => {
      const i = t.default && t.default(n);
      return e.custom ? i : tl("a", {
        "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
        href: n.href,
        // this would override user added attrs but Vue will still add
        // the listener, so we end up triggering both
        onClick: n.navigate,
        class: r.value
      }, i);
    };
  }
}), ro = hd;
function md(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t))
        return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function gd(e, t) {
  for (const n in t) {
    const o = t[n], r = e[n];
    if (typeof o == "string") {
      if (o !== r)
        return !1;
    } else if (!Re(r) || r.length !== o.length || o.some((i, s) => i !== r[s]))
      return !1;
  }
  return !0;
}
function Hi(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const Fi = (e, t, n) => e ?? t ?? n, _d = /* @__PURE__ */ $s({
  name: "RouterView",
  // #674 we manually inherit them
  inheritAttrs: !1,
  props: {
    name: {
      type: String,
      default: "default"
    },
    route: Object
  },
  // Better compat for @vue/compat users
  // https://github.com/vuejs/router/issues/1315
  compatConfig: { MODE: 3 },
  setup(e, { attrs: t, slots: n }) {
    z.NODE_ENV !== "production" && Ed();
    const o = ct(ir), r = Ue(() => e.route || o.value), i = ct(ji, 0), s = Ue(() => {
      let f = ke(i);
      const { matched: d } = r.value;
      let u;
      for (; (u = d[f]) && !u.components; )
        f++;
      return f;
    }), l = Ue(() => r.value.matched[s.value]);
    Yn(ji, Ue(() => s.value + 1)), Yn(fd, l), Yn(ir, r);
    const c = fs();
    return on(() => [c.value, l.value, e.name], ([f, d, u], [h, g, x]) => {
      d && (d.instances[u] = f, g && g !== d && f && f === h && (d.leaveGuards.size || (d.leaveGuards = g.leaveGuards), d.updateGuards.size || (d.updateGuards = g.updateGuards))), f && d && // if there is no instance but to and from are the same this might be
      // the first visit
      (!g || !Pt(d, g) || !h) && (d.enterCallbacks[u] || []).forEach((D) => D(f));
    }, { flush: "post" }), () => {
      const f = r.value, d = e.name, u = l.value, h = u && u.components[d];
      if (!h)
        return zi(n.default, { Component: h, route: f });
      const g = u.props[d], x = g ? g === !0 ? f.params : typeof g == "function" ? g(f) : g : null, B = tl(h, te({}, x, t, {
        onVnodeUnmounted: (L) => {
          L.component.isUnmounted && (u.instances[d] = null);
        },
        ref: c
      }));
      if (z.NODE_ENV !== "production" && st && B.ref) {
        const L = {
          depth: s.value,
          name: u.name,
          path: u.path,
          meta: u.meta
        };
        (Re(B.ref) ? B.ref.map((T) => T.i) : [B.ref.i]).forEach((T) => {
          T.__vrv_devtools = L;
        });
      }
      return (
        // pass the vnode to the slot as a prop.
        // h and <component :is="..."> both accept vnodes
        zi(n.default, { Component: B, route: f }) || B
      );
    };
  }
});
function zi(e, t) {
  if (!e)
    return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const wl = _d;
function Ed() {
  const e = Rr(), t = e.parent && e.parent.type.name, n = e.parent && e.parent.subTree && e.parent.subTree.type;
  if (t && (t === "KeepAlive" || t.includes("Transition")) && typeof n == "object" && n.name === "RouterView") {
    const o = t === "KeepAlive" ? "keep-alive" : "transition";
    q(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${o}>
    <component :is="Component" />
  </${o}>
</router-view>`);
  }
}
function hn(e, t) {
  const n = te({}, e, {
    // remove variables that can contain vue instances
    matched: e.matched.map((o) => Cd(o, ["instances", "children", "aliasOf"]))
  });
  return {
    _custom: {
      type: null,
      readOnly: !0,
      display: e.fullPath,
      tooltip: t,
      value: n
    }
  };
}
function Kn(e) {
  return {
    _custom: {
      display: e
    }
  };
}
let vd = 0;
function yd(e, t, n) {
  if (t.__hasDevtools)
    return;
  t.__hasDevtools = !0;
  const o = vd++;
  Tr({
    id: "org.vuejs.router" + (o ? "." + o : ""),
    label: "Vue Router",
    packageName: "vue-router",
    homepage: "https://router.vuejs.org",
    logo: "https://router.vuejs.org/logo.png",
    componentStateTypes: ["Routing"],
    app: e
  }, (r) => {
    typeof r.now != "function" && console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."), r.on.inspectComponent((d, u) => {
      d.instanceData && d.instanceData.state.push({
        type: "Routing",
        key: "$route",
        editable: !1,
        value: hn(t.currentRoute.value, "Current Route")
      });
    }), r.on.visitComponentTree(({ treeNode: d, componentInstance: u }) => {
      if (u.__vrv_devtools) {
        const h = u.__vrv_devtools;
        d.tags.push({
          label: (h.name ? `${h.name.toString()}: ` : "") + h.path,
          textColor: 0,
          tooltip: "This component is rendered by &lt;router-view&gt;",
          backgroundColor: Ol
        });
      }
      Re(u.__vrl_devtools) && (u.__devtoolsApi = r, u.__vrl_devtools.forEach((h) => {
        let g = h.route.path, x = xl, D = "", B = 0;
        h.error ? (g = h.error, x = Vd, B = Sd) : h.isExactActive ? (x = Sl, D = "This is exactly active") : h.isActive && (x = Vl, D = "This link is active"), d.tags.push({
          label: g,
          textColor: B,
          tooltip: D,
          backgroundColor: x
        });
      }));
    }), on(t.currentRoute, () => {
      c(), r.notifyComponentUpdate(), r.sendInspectorTree(l), r.sendInspectorState(l);
    });
    const i = "router:navigations:" + o;
    r.addTimelineLayer({
      id: i,
      label: `Router${o ? " " + o : ""} Navigations`,
      color: 4237508
    }), t.onError((d, u) => {
      r.addTimelineEvent({
        layerId: i,
        event: {
          title: "Error during Navigation",
          subtitle: u.fullPath,
          logType: "error",
          time: r.now(),
          data: { error: d },
          groupId: u.meta.__navigationId
        }
      });
    });
    let s = 0;
    t.beforeEach((d, u) => {
      const h = {
        guard: Kn("beforeEach"),
        from: hn(u, "Current Location during this navigation"),
        to: hn(d, "Target location")
      };
      Object.defineProperty(d.meta, "__navigationId", {
        value: s++
      }), r.addTimelineEvent({
        layerId: i,
        event: {
          time: r.now(),
          title: "Start of navigation",
          subtitle: d.fullPath,
          data: h,
          groupId: d.meta.__navigationId
        }
      });
    }), t.afterEach((d, u, h) => {
      const g = {
        guard: Kn("afterEach")
      };
      h ? (g.failure = {
        _custom: {
          type: Error,
          readOnly: !0,
          display: h ? h.message : "",
          tooltip: "Navigation Failure",
          value: h
        }
      }, g.status = Kn("❌")) : g.status = Kn("✅"), g.from = hn(u, "Current Location during this navigation"), g.to = hn(d, "Target location"), r.addTimelineEvent({
        layerId: i,
        event: {
          title: "End of navigation",
          subtitle: d.fullPath,
          time: r.now(),
          data: g,
          logType: h ? "warning" : "default",
          groupId: d.meta.__navigationId
        }
      });
    });
    const l = "router-inspector:" + o;
    r.addInspector({
      id: l,
      label: "Routes" + (o ? " " + o : ""),
      icon: "book",
      treeFilterPlaceholder: "Search routes"
    });
    function c() {
      if (!f)
        return;
      const d = f;
      let u = n.getRoutes().filter((h) => !h.parent || // these routes have a parent with no component which will not appear in the view
      // therefore we still need to include them
      !h.parent.record.components);
      u.forEach($l), d.filter && (u = u.filter((h) => (
        // save matches state based on the payload
        sr(h, d.filter.toLowerCase())
      ))), u.forEach((h) => Cl(h, t.currentRoute.value)), d.rootNodes = u.map(Dl);
    }
    let f;
    r.on.getInspectorTree((d) => {
      f = d, d.app === e && d.inspectorId === l && c();
    }), r.on.getInspectorState((d) => {
      if (d.app === e && d.inspectorId === l) {
        const h = n.getRoutes().find((g) => g.record.__vd_id === d.nodeId);
        h && (d.state = {
          options: Nd(h)
        });
      }
    }), r.sendInspectorTree(l), r.sendInspectorState(l);
  });
}
function bd(e) {
  return e.optional ? e.repeatable ? "*" : "?" : e.repeatable ? "+" : "";
}
function Nd(e) {
  const { record: t } = e, n = [
    { editable: !1, key: "path", value: t.path }
  ];
  return t.name != null && n.push({
    editable: !1,
    key: "name",
    value: t.name
  }), n.push({ editable: !1, key: "regexp", value: e.re }), e.keys.length && n.push({
    editable: !1,
    key: "keys",
    value: {
      _custom: {
        type: null,
        readOnly: !0,
        display: e.keys.map((o) => `${o.name}${bd(o)}`).join(" "),
        tooltip: "Param keys",
        value: e.keys
      }
    }
  }), t.redirect != null && n.push({
    editable: !1,
    key: "redirect",
    value: t.redirect
  }), e.alias.length && n.push({
    editable: !1,
    key: "aliases",
    value: e.alias.map((o) => o.record.path)
  }), Object.keys(e.record.meta).length && n.push({
    editable: !1,
    key: "meta",
    value: e.record.meta
  }), n.push({
    key: "score",
    editable: !1,
    value: {
      _custom: {
        type: null,
        readOnly: !0,
        display: e.score.map((o) => o.join(", ")).join(" | "),
        tooltip: "Score used to sort routes",
        value: e.score
      }
    }
  }), n;
}
const Ol = 15485081, Vl = 2450411, Sl = 8702998, wd = 2282478, xl = 16486972, Od = 6710886, Vd = 16704226, Sd = 12131356;
function Dl(e) {
  const t = [], { record: n } = e;
  n.name != null && t.push({
    label: String(n.name),
    textColor: 0,
    backgroundColor: wd
  }), n.aliasOf && t.push({
    label: "alias",
    textColor: 0,
    backgroundColor: xl
  }), e.__vd_match && t.push({
    label: "matches",
    textColor: 0,
    backgroundColor: Ol
  }), e.__vd_exactActive && t.push({
    label: "exact",
    textColor: 0,
    backgroundColor: Sl
  }), e.__vd_active && t.push({
    label: "active",
    textColor: 0,
    backgroundColor: Vl
  }), n.redirect && t.push({
    label: typeof n.redirect == "string" ? `redirect: ${n.redirect}` : "redirects",
    textColor: 16777215,
    backgroundColor: Od
  });
  let o = n.__vd_id;
  return o == null && (o = String(xd++), n.__vd_id = o), {
    id: o,
    label: n.path,
    tags: t,
    children: e.children.map(Dl)
  };
}
let xd = 0;
const Dd = /^\/(.*)\/([a-z]*)$/;
function Cl(e, t) {
  const n = t.matched.length && Pt(t.matched[t.matched.length - 1], e.record);
  e.__vd_exactActive = e.__vd_active = n, n || (e.__vd_active = t.matched.some((o) => Pt(o, e.record))), e.children.forEach((o) => Cl(o, t));
}
function $l(e) {
  e.__vd_match = !1, e.children.forEach($l);
}
function sr(e, t) {
  const n = String(e.re).match(Dd);
  if (e.__vd_match = !1, !n || n.length < 3)
    return !1;
  if (new RegExp(n[1].replace(/\$$/, ""), n[2]).test(t))
    return e.children.forEach((s) => sr(s, t)), e.record.path !== "/" || t === "/" ? (e.__vd_match = e.re.test(t), !0) : !1;
  const r = e.record.path.toLowerCase(), i = ln(r);
  return !t.startsWith("/") && (i.includes(t) || r.includes(t)) || i.startsWith(t) || r.startsWith(t) || e.record.name && String(e.record.name).includes(t) ? !0 : e.children.some((s) => sr(s, t));
}
function Cd(e, t) {
  const n = {};
  for (const o in e)
    t.includes(o) || (n[o] = e[o]);
  return n;
}
function $d(e) {
  const t = ed(e.routes, e), n = e.parseQuery || ad, o = e.stringifyQuery || Mi, r = e.history;
  if (z.NODE_ENV !== "production" && !r)
    throw new Error('Provide the "history" option when calling "createRouter()": https://router.vuejs.org/api/interfaces/RouterOptions.html#history');
  const i = pn(), s = pn(), l = pn(), c = Nc(Et);
  let f = Et;
  st && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const d = Io.bind(null, (E) => "" + E), u = Io.bind(null, Sf), h = (
    // @ts-expect-error: intentionally avoid the type check
    Io.bind(null, ln)
  );
  function g(E, $) {
    let C, P;
    return vl(E) ? (C = t.getRecordMatcher(E), z.NODE_ENV !== "production" && !C && q(`Parent route "${String(E)}" not found when adding child route`, $), P = $) : P = E, t.addRoute(P, C);
  }
  function x(E) {
    const $ = t.getRecordMatcher(E);
    $ ? t.removeRoute($) : z.NODE_ENV !== "production" && q(`Cannot remove non-existent route "${String(E)}"`);
  }
  function D() {
    return t.getRoutes().map((E) => E.record);
  }
  function B(E) {
    return !!t.getRecordMatcher(E);
  }
  function L(E, $) {
    if ($ = te({}, $ || c.value), typeof E == "string") {
      const a = Ao(n, E, $.path), p = t.resolve({ path: a.path }, $), _ = r.createHref(a.fullPath);
      return z.NODE_ENV !== "production" && (_.startsWith("//") ? q(`Location "${E}" resolved to "${_}". A resolved location cannot start with multiple slashes.`) : p.matched.length || q(`No match found for location with path "${E}"`)), te(a, p, {
        params: h(p.params),
        hash: ln(a.hash),
        redirectedFrom: void 0,
        href: _
      });
    }
    if (z.NODE_ENV !== "production" && !po(E))
      return q(`router.resolve() was passed an invalid location. This will fail in production.
- Location:`, E), L({});
    let C;
    if (E.path != null)
      z.NODE_ENV !== "production" && "params" in E && !("name" in E) && // @ts-expect-error: the type is never
      Object.keys(E.params).length && q(`Path "${E.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`), C = te({}, E, {
        path: Ao(n, E.path, $.path).path
      });
    else {
      const a = te({}, E.params);
      for (const p in a)
        a[p] == null && delete a[p];
      C = te({}, E, {
        params: u(a)
      }), $.params = u($.params);
    }
    const P = t.resolve(C, $), J = E.hash || "";
    z.NODE_ENV !== "production" && J && !J.startsWith("#") && q(`A \`hash\` should always start with the character "#". Replace "${J}" with "#${J}".`), P.params = d(h(P.params));
    const ce = Cf(o, te({}, E, {
      hash: wf(J),
      path: P.path
    })), G = r.createHref(ce);
    return z.NODE_ENV !== "production" && (G.startsWith("//") ? q(`Location "${E}" resolved to "${G}". A resolved location cannot start with multiple slashes.`) : P.matched.length || q(`No match found for location with path "${E.path != null ? E.path : E}"`)), te({
      fullPath: ce,
      // keep the hash encoded so fullPath is effectively path + encodedQuery +
      // hash
      hash: J,
      query: (
        // if the user is using a custom query lib like qs, we might have
        // nested objects, so we keep the query as is, meaning it can contain
        // numbers at `$route.query`, but at the point, the user will have to
        // use their own type anyway.
        // https://github.com/vuejs/router/issues/328#issuecomment-649481567
        o === Mi ? ud(E.query) : E.query || {}
      )
    }, P, {
      redirectedFrom: void 0,
      href: G
    });
  }
  function A(E) {
    return typeof E == "string" ? Ao(n, E, c.value.path) : te({}, E);
  }
  function T(E, $) {
    if (f !== E)
      return cn(8, {
        from: $,
        to: E
      });
  }
  function Y(E) {
    return M(E);
  }
  function Z(E) {
    return Y(te(A(E), { replace: !0 }));
  }
  function fe(E) {
    const $ = E.matched[E.matched.length - 1];
    if ($ && $.redirect) {
      const { redirect: C } = $;
      let P = typeof C == "function" ? C(E) : C;
      if (typeof P == "string" && (P = P.includes("?") || P.includes("#") ? P = A(P) : (
        // force empty params
        { path: P }
      ), P.params = {}), z.NODE_ENV !== "production" && P.path == null && !("name" in P))
        throw q(`Invalid redirect found:
${JSON.stringify(P, null, 2)}
 when navigating to "${E.fullPath}". A redirect must contain a name or path. This will break in production.`), new Error("Invalid redirect");
      return te({
        query: E.query,
        hash: E.hash,
        // avoid transferring params if the redirect has a path
        params: P.path != null ? {} : E.params
      }, P);
    }
  }
  function M(E, $) {
    const C = f = L(E), P = c.value, J = E.state, ce = E.force, G = E.replace === !0, a = fe(C);
    if (a)
      return M(
        te(A(a), {
          state: typeof a == "object" ? te({}, J, a.state) : J,
          force: ce,
          replace: G
        }),
        // keep original redirectedFrom if it exists
        $ || C
      );
    const p = C;
    p.redirectedFrom = $;
    let _;
    return !ce && xi(o, P, C) && (_ = cn(16, { to: p, from: P }), ht(
      P,
      P,
      // this is a push, the only way for it to be triggered from a
      // history.listen is with a redirect, which makes it become a push
      !0,
      // This cannot be the first navigation because the initial location
      // cannot be manually navigated to
      !1
    )), (_ ? Promise.resolve(_) : Pe(p, P)).catch((v) => nt(v) ? (
      // navigation redirects still mark the router as ready
      nt(
        v,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? v : Tt(v)
    ) : (
      // reject any unknown error
      W(v, p, P)
    )).then((v) => {
      if (v) {
        if (nt(
          v,
          2
          /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
        ))
          return z.NODE_ENV !== "production" && // we are redirecting to the same location we were already at
          xi(o, L(v.to), p) && // and we have done it a couple of times
          $ && // @ts-expect-error: added only in dev
          ($._count = $._count ? (
            // @ts-expect-error
            $._count + 1
          ) : 1) > 30 ? (q(`Detected a possibly infinite redirection in a navigation guard when going from "${P.fullPath}" to "${p.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`), Promise.reject(new Error("Infinite redirect in navigation guard"))) : M(
            // keep options
            te({
              // preserve an existing replacement but allow the redirect to override it
              replace: G
            }, A(v.to), {
              state: typeof v.to == "object" ? te({}, J, v.to.state) : J,
              force: ce
            }),
            // preserve the original redirectedFrom if any
            $ || p
          );
      } else
        v = De(p, P, !0, G, J);
      return je(p, P, v), v;
    });
  }
  function ve(E, $) {
    const C = T(E, $);
    return C ? Promise.reject(C) : Promise.resolve();
  }
  function pe(E) {
    const $ = mt.values().next().value;
    return $ && typeof $.runWithContext == "function" ? $.runWithContext(E) : E();
  }
  function Pe(E, $) {
    let C;
    const [P, J, ce] = Rd(E, $);
    C = ko(P.reverse(), "beforeRouteLeave", E, $);
    for (const a of P)
      a.leaveGuards.forEach((p) => {
        C.push(Nt(p, E, $));
      });
    const G = ve.bind(null, E, $);
    return C.push(G), gt(C).then(() => {
      C = [];
      for (const a of i.list())
        C.push(Nt(a, E, $));
      return C.push(G), gt(C);
    }).then(() => {
      C = ko(J, "beforeRouteUpdate", E, $);
      for (const a of J)
        a.updateGuards.forEach((p) => {
          C.push(Nt(p, E, $));
        });
      return C.push(G), gt(C);
    }).then(() => {
      C = [];
      for (const a of ce)
        if (a.beforeEnter)
          if (Re(a.beforeEnter))
            for (const p of a.beforeEnter)
              C.push(Nt(p, E, $));
          else
            C.push(Nt(a.beforeEnter, E, $));
      return C.push(G), gt(C);
    }).then(() => (E.matched.forEach((a) => a.enterCallbacks = {}), C = ko(ce, "beforeRouteEnter", E, $, pe), C.push(G), gt(C))).then(() => {
      C = [];
      for (const a of s.list())
        C.push(Nt(a, E, $));
      return C.push(G), gt(C);
    }).catch((a) => nt(
      a,
      8
      /* ErrorTypes.NAVIGATION_CANCELLED */
    ) ? a : Promise.reject(a));
  }
  function je(E, $, C) {
    l.list().forEach((P) => pe(() => P(E, $, C)));
  }
  function De(E, $, C, P, J) {
    const ce = T(E, $);
    if (ce)
      return ce;
    const G = $ === Et, a = st ? history.state : {};
    C && (P || G ? r.replace(E.fullPath, te({
      scroll: G && a && a.scroll
    }, J)) : r.push(E.fullPath, J)), c.value = E, ht(E, $, C, G), Tt();
  }
  let We;
  function Mn() {
    We || (We = r.listen((E, $, C) => {
      if (!jn.listening)
        return;
      const P = L(E), J = fe(P);
      if (J) {
        M(te(J, { replace: !0 }), P).catch(On);
        return;
      }
      f = P;
      const ce = c.value;
      st && Mf(Ci(ce.fullPath, C.delta), So()), Pe(P, ce).catch((G) => nt(
        G,
        12
        /* ErrorTypes.NAVIGATION_CANCELLED */
      ) ? G : nt(
        G,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? (M(
        G.to,
        P
        // avoid an uncaught rejection, let push call triggerError
      ).then((a) => {
        nt(
          a,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && !C.delta && C.type === $n.pop && r.go(-1, !1);
      }).catch(On), Promise.reject()) : (C.delta && r.go(-C.delta, !1), W(G, P, ce))).then((G) => {
        G = G || De(
          // after navigation, all matched components are resolved
          P,
          ce,
          !1
        ), G && (C.delta && // a new navigation has been triggered, so we do not want to revert, that will change the current history
        // entry while a different route is displayed
        !nt(
          G,
          8
          /* ErrorTypes.NAVIGATION_CANCELLED */
        ) ? r.go(-C.delta, !1) : C.type === $n.pop && nt(
          G,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && r.go(-1, !1)), je(P, ce, G);
      }).catch(On);
    }));
  }
  let Te = pn(), ye = pn(), K;
  function W(E, $, C) {
    Tt(E);
    const P = ye.list();
    return P.length ? P.forEach((J) => J(E, $, C)) : (z.NODE_ENV !== "production" && q("uncaught error during route navigation:"), console.error(E)), Promise.reject(E);
  }
  function Ie() {
    return K && c.value !== Et ? Promise.resolve() : new Promise((E, $) => {
      Te.add([E, $]);
    });
  }
  function Tt(E) {
    return K || (K = !E, Mn(), Te.list().forEach(([$, C]) => E ? C(E) : $()), Te.reset()), E;
  }
  function ht(E, $, C, P) {
    const { scrollBehavior: J } = e;
    if (!st || !J)
      return Promise.resolve();
    const ce = !C && jf(Ci(E.fullPath, 0)) || (P || !C) && history.state && history.state.scroll || null;
    return gs().then(() => J(E, $, ce)).then((G) => G && kf(G)).catch((G) => W(G, E, $));
  }
  const Ge = (E) => r.go(E);
  let Ae;
  const mt = /* @__PURE__ */ new Set(), jn = {
    currentRoute: c,
    listening: !0,
    addRoute: g,
    removeRoute: x,
    clearRoutes: t.clearRoutes,
    hasRoute: B,
    getRoutes: D,
    resolve: L,
    options: e,
    push: Y,
    replace: Z,
    go: Ge,
    back: () => Ge(-1),
    forward: () => Ge(1),
    beforeEach: i.add,
    beforeResolve: s.add,
    afterEach: l.add,
    onError: ye.add,
    isReady: Ie,
    install(E) {
      const $ = this;
      E.component("RouterLink", ro), E.component("RouterView", wl), E.config.globalProperties.$router = $, Object.defineProperty(E.config.globalProperties, "$route", {
        enumerable: !0,
        get: () => ke(c)
      }), st && // used for the initial navigation client side to avoid pushing
      // multiple times when the router is used in multiple apps
      !Ae && c.value === Et && (Ae = !0, Y(r.location).catch((J) => {
        z.NODE_ENV !== "production" && q("Unexpected error when starting the router:", J);
      }));
      const C = {};
      for (const J in Et)
        Object.defineProperty(C, J, {
          get: () => c.value[J],
          enumerable: !0
        });
      E.provide(Mr, $), E.provide(Nl, ls(C)), E.provide(ir, c);
      const P = E.unmount;
      mt.add(E), E.unmount = function() {
        mt.delete(E), mt.size < 1 && (f = Et, We && We(), We = null, c.value = Et, Ae = !1, K = !1), P();
      }, z.NODE_ENV !== "production" && st && yd(E, $, t);
    }
  };
  function gt(E) {
    return E.reduce(($, C) => $.then(() => pe(C)), Promise.resolve());
  }
  return jn;
}
function Rd(e, t) {
  const n = [], o = [], r = [], i = Math.max(t.matched.length, e.matched.length);
  for (let s = 0; s < i; s++) {
    const l = t.matched[s];
    l && (e.matched.find((f) => Pt(f, l)) ? o.push(l) : n.push(l));
    const c = e.matched[s];
    c && (t.matched.find((f) => Pt(f, c)) || r.push(c));
  }
  return [n, o, r];
}
const Gt = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
}, Pd = { class: "wrapper" }, Td = {
  __name: "App",
  setup(e) {
    return (t, n) => (et(), pt($e, null, [
      ne("header", null, [
        ne("div", Pd, [
          ne("nav", null, [
            re(ke(ro), { to: { name: "home" } }, {
              default: he(() => [
                ee("Home")
              ]),
              _: 1
            }),
            re(ke(ro), { to: { name: "admin" } }, {
              default: he(() => [
                ee("Admin")
              ]),
              _: 1
            }),
            re(ke(ro), { to: { name: "unique" } }, {
              default: he(() => [
                ee("Unique Users")
              ]),
              _: 1
            })
          ])
        ])
      ]),
      re(ke(wl))
    ], 64));
  }
}, Id = /* @__PURE__ */ Gt(Td, [["__scopeId", "data-v-d2f5364e"]]), Ad = {}, kd = { class: "item" }, Md = { class: "details" };
function jd(e, t) {
  return et(), pt("div", kd, [
    ne("i", null, [
      Co(e.$slots, "icon", {}, void 0)
    ]),
    ne("div", Md, [
      ne("h3", null, [
        Co(e.$slots, "heading", {}, void 0)
      ]),
      Co(e.$slots, "default", {}, void 0)
    ])
  ]);
}
const mn = /* @__PURE__ */ Gt(Ad, [["render", jd], ["__scopeId", "data-v-40a5c0e5"]]), Ld = {}, Hd = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "17",
  fill: "currentColor"
}, Fd = /* @__PURE__ */ ne("path", { d: "M11 2.253a1 1 0 1 0-2 0h2zm-2 13a1 1 0 1 0 2 0H9zm.447-12.167a1 1 0 1 0 1.107-1.666L9.447 3.086zM1 2.253L.447 1.42A1 1 0 0 0 0 2.253h1zm0 13H0a1 1 0 0 0 1.553.833L1 15.253zm8.447.833a1 1 0 1 0 1.107-1.666l-1.107 1.666zm0-14.666a1 1 0 1 0 1.107 1.666L9.447 1.42zM19 2.253h1a1 1 0 0 0-.447-.833L19 2.253zm0 13l-.553.833A1 1 0 0 0 20 15.253h-1zm-9.553-.833a1 1 0 1 0 1.107 1.666L9.447 14.42zM9 2.253v13h2v-13H9zm1.553-.833C9.203.523 7.42 0 5.5 0v2c1.572 0 2.961.431 3.947 1.086l1.107-1.666zM5.5 0C3.58 0 1.797.523.447 1.42l1.107 1.666C2.539 2.431 3.928 2 5.5 2V0zM0 2.253v13h2v-13H0zm1.553 13.833C2.539 15.431 3.928 15 5.5 15v-2c-1.92 0-3.703.523-5.053 1.42l1.107 1.666zM5.5 15c1.572 0 2.961.431 3.947 1.086l1.107-1.666C9.203 13.523 7.42 13 5.5 13v2zm5.053-11.914C11.539 2.431 12.928 2 14.5 2V0c-1.92 0-3.703.523-5.053 1.42l1.107 1.666zM14.5 2c1.573 0 2.961.431 3.947 1.086l1.107-1.666C18.203.523 16.421 0 14.5 0v2zm3.5.253v13h2v-13h-2zm1.553 12.167C18.203 13.523 16.421 13 14.5 13v2c1.573 0 2.961.431 3.947 1.086l1.107-1.666zM14.5 13c-1.92 0-3.703.523-5.053 1.42l1.107 1.666C11.539 15.431 12.928 15 14.5 15v-2z" }, null, -1), zd = [
  Fd
];
function Ud(e, t) {
  return et(), pt("svg", Hd, zd);
}
const Bd = /* @__PURE__ */ Gt(Ld, [["render", Ud]]), Kd = {}, Wd = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  "aria-hidden": "true",
  role: "img",
  class: "iconify iconify--mdi",
  width: "24",
  height: "24",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24"
}, Gd = /* @__PURE__ */ ne("path", {
  d: "M20 18v-4h-3v1h-2v-1H9v1H7v-1H4v4h16M6.33 8l-1.74 4H7v-1h2v1h6v-1h2v1h2.41l-1.74-4H6.33M9 5v1h6V5H9m12.84 7.61c.1.22.16.48.16.8V18c0 .53-.21 1-.6 1.41c-.4.4-.85.59-1.4.59H4c-.55 0-1-.19-1.4-.59C2.21 19 2 18.53 2 18v-4.59c0-.32.06-.58.16-.8L4.5 7.22C4.84 6.41 5.45 6 6.33 6H7V5c0-.55.18-1 .57-1.41C7.96 3.2 8.44 3 9 3h6c.56 0 1.04.2 1.43.59c.39.41.57.86.57 1.41v1h.67c.88 0 1.49.41 1.83 1.22l2.34 5.39z",
  fill: "currentColor"
}, null, -1), qd = [
  Gd
];
function Yd(e, t) {
  return et(), pt("svg", Wd, qd);
}
const Jd = /* @__PURE__ */ Gt(Kd, [["render", Yd]]), Qd = {}, Xd = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "18",
  height: "20",
  fill: "currentColor"
}, Zd = /* @__PURE__ */ ne("path", { d: "M11.447 8.894a1 1 0 1 0-.894-1.789l.894 1.789zm-2.894-.789a1 1 0 1 0 .894 1.789l-.894-1.789zm0 1.789a1 1 0 1 0 .894-1.789l-.894 1.789zM7.447 7.106a1 1 0 1 0-.894 1.789l.894-1.789zM10 9a1 1 0 1 0-2 0h2zm-2 2.5a1 1 0 1 0 2 0H8zm9.447-5.606a1 1 0 1 0-.894-1.789l.894 1.789zm-2.894-.789a1 1 0 1 0 .894 1.789l-.894-1.789zm2 .789a1 1 0 1 0 .894-1.789l-.894 1.789zm-1.106-2.789a1 1 0 1 0-.894 1.789l.894-1.789zM18 5a1 1 0 1 0-2 0h2zm-2 2.5a1 1 0 1 0 2 0h-2zm-5.447-4.606a1 1 0 1 0 .894-1.789l-.894 1.789zM9 1l.447-.894a1 1 0 0 0-.894 0L9 1zm-2.447.106a1 1 0 1 0 .894 1.789l-.894-1.789zm-6 3a1 1 0 1 0 .894 1.789L.553 4.106zm2.894.789a1 1 0 1 0-.894-1.789l.894 1.789zm-2-.789a1 1 0 1 0-.894 1.789l.894-1.789zm1.106 2.789a1 1 0 1 0 .894-1.789l-.894 1.789zM2 5a1 1 0 1 0-2 0h2zM0 7.5a1 1 0 1 0 2 0H0zm8.553 12.394a1 1 0 1 0 .894-1.789l-.894 1.789zm-1.106-2.789a1 1 0 1 0-.894 1.789l.894-1.789zm1.106 1a1 1 0 1 0 .894 1.789l-.894-1.789zm2.894.789a1 1 0 1 0-.894-1.789l.894 1.789zM8 19a1 1 0 1 0 2 0H8zm2-2.5a1 1 0 1 0-2 0h2zm-7.447.394a1 1 0 1 0 .894-1.789l-.894 1.789zM1 15H0a1 1 0 0 0 .553.894L1 15zm1-2.5a1 1 0 1 0-2 0h2zm12.553 2.606a1 1 0 1 0 .894 1.789l-.894-1.789zM17 15l.447.894A1 1 0 0 0 18 15h-1zm1-2.5a1 1 0 1 0-2 0h2zm-7.447-5.394l-2 1 .894 1.789 2-1-.894-1.789zm-1.106 1l-2-1-.894 1.789 2 1 .894-1.789zM8 9v2.5h2V9H8zm8.553-4.894l-2 1 .894 1.789 2-1-.894-1.789zm.894 0l-2-1-.894 1.789 2 1 .894-1.789zM16 5v2.5h2V5h-2zm-4.553-3.894l-2-1-.894 1.789 2 1 .894-1.789zm-2.894-1l-2 1 .894 1.789 2-1L8.553.106zM1.447 5.894l2-1-.894-1.789-2 1 .894 1.789zm-.894 0l2 1 .894-1.789-2-1-.894 1.789zM0 5v2.5h2V5H0zm9.447 13.106l-2-1-.894 1.789 2 1 .894-1.789zm0 1.789l2-1-.894-1.789-2 1 .894 1.789zM10 19v-2.5H8V19h2zm-6.553-3.894l-2-1-.894 1.789 2 1 .894-1.789zM2 15v-2.5H0V15h2zm13.447 1.894l2-1-.894-1.789-2 1 .894 1.789zM18 15v-2.5h-2V15h2z" }, null, -1), ep = [
  Zd
];
function tp(e, t) {
  return et(), pt("svg", Xd, ep);
}
const np = /* @__PURE__ */ Gt(Qd, [["render", tp]]), op = {}, rp = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  fill: "currentColor"
}, ip = /* @__PURE__ */ ne("path", { d: "M15 4a1 1 0 1 0 0 2V4zm0 11v-1a1 1 0 0 0-1 1h1zm0 4l-.707.707A1 1 0 0 0 16 19h-1zm-4-4l.707-.707A1 1 0 0 0 11 14v1zm-4.707-1.293a1 1 0 0 0-1.414 1.414l1.414-1.414zm-.707.707l-.707-.707.707.707zM9 11v-1a1 1 0 0 0-.707.293L9 11zm-4 0h1a1 1 0 0 0-1-1v1zm0 4H4a1 1 0 0 0 1.707.707L5 15zm10-9h2V4h-2v2zm2 0a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3v2zm1 1v6h2V7h-2zm0 6a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3h-2zm-1 1h-2v2h2v-2zm-3 1v4h2v-4h-2zm1.707 3.293l-4-4-1.414 1.414 4 4 1.414-1.414zM11 14H7v2h4v-2zm-4 0c-.276 0-.525-.111-.707-.293l-1.414 1.414C5.42 15.663 6.172 16 7 16v-2zm-.707 1.121l3.414-3.414-1.414-1.414-3.414 3.414 1.414 1.414zM9 12h4v-2H9v2zm4 0a3 3 0 0 0 3-3h-2a1 1 0 0 1-1 1v2zm3-3V3h-2v6h2zm0-6a3 3 0 0 0-3-3v2a1 1 0 0 1 1 1h2zm-3-3H3v2h10V0zM3 0a3 3 0 0 0-3 3h2a1 1 0 0 1 1-1V0zM0 3v6h2V3H0zm0 6a3 3 0 0 0 3 3v-2a1 1 0 0 1-1-1H0zm3 3h2v-2H3v2zm1-1v4h2v-4H4zm1.707 4.707l.586-.586-1.414-1.414-.586.586 1.414 1.414z" }, null, -1), sp = [
  ip
];
function lp(e, t) {
  return et(), pt("svg", rp, sp);
}
const cp = /* @__PURE__ */ Gt(op, [["render", lp]]), ap = {}, up = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  fill: "currentColor"
}, fp = /* @__PURE__ */ ne("path", { d: "M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.666.105 5.5 5.5 0 0 0-.114 7.665L10 18.78l8.39-8.4a5.5 5.5 0 0 0-.114-7.665 5.5 5.5 0 0 0-7.666-.105l-.61.61z" }, null, -1), dp = [
  fp
];
function pp(e, t) {
  return et(), pt("svg", up, dp);
}
const hp = /* @__PURE__ */ Gt(ap, [["render", pp]]), mp = /* @__PURE__ */ ne("a", {
  href: "https://vuejs.org/",
  target: "_blank",
  rel: "noopener"
}, "official documentation", -1), gp = /* @__PURE__ */ ne("a", {
  href: "https://vitejs.dev/guide/features.html",
  target: "_blank",
  rel: "noopener"
}, "Vite", -1), _p = /* @__PURE__ */ ne("a", {
  href: "https://code.visualstudio.com/",
  target: "_blank",
  rel: "noopener"
}, "VSCode", -1), Ep = /* @__PURE__ */ ne("a", {
  href: "https://github.com/johnsoncodehk/volar",
  target: "_blank",
  rel: "noopener"
}, "Volar", -1), vp = /* @__PURE__ */ ne("a", {
  href: "https://www.cypress.io/",
  target: "_blank",
  rel: "noopener"
}, "Cypress", -1), yp = /* @__PURE__ */ ne("a", {
  href: "https://on.cypress.io/component",
  target: "_blank",
  rel: "noopener"
}, "Cypress Component Testing", -1), bp = /* @__PURE__ */ ne("br", null, null, -1), Np = /* @__PURE__ */ ne("code", null, "README.md", -1), wp = /* @__PURE__ */ ne("a", {
  href: "https://pinia.vuejs.org/",
  target: "_blank",
  rel: "noopener"
}, "Pinia", -1), Op = /* @__PURE__ */ ne("a", {
  href: "https://router.vuejs.org/",
  target: "_blank",
  rel: "noopener"
}, "Vue Router", -1), Vp = /* @__PURE__ */ ne("a", {
  href: "https://test-utils.vuejs.org/",
  target: "_blank",
  rel: "noopener"
}, "Vue Test Utils", -1), Sp = /* @__PURE__ */ ne("a", {
  href: "https://github.com/vuejs/devtools",
  target: "_blank",
  rel: "noopener"
}, "Vue Dev Tools", -1), xp = /* @__PURE__ */ ne("a", {
  href: "https://github.com/vuejs/awesome-vue",
  target: "_blank",
  rel: "noopener"
}, "Awesome Vue", -1), Dp = /* @__PURE__ */ ne("a", {
  href: "https://chat.vuejs.org",
  target: "_blank",
  rel: "noopener"
}, "Vue Land", -1), Cp = /* @__PURE__ */ ne("a", {
  href: "https://stackoverflow.com/questions/tagged/vue.js",
  target: "_blank",
  rel: "noopener"
}, "StackOverflow", -1), $p = /* @__PURE__ */ ne("a", {
  href: "https://news.vuejs.org",
  target: "_blank",
  rel: "noopener"
}, "our mailing list", -1), Rp = /* @__PURE__ */ ne("a", {
  href: "https://twitter.com/vuejs",
  target: "_blank",
  rel: "noopener"
}, "@vuejs", -1), Pp = /* @__PURE__ */ ne("a", {
  href: "https://vuejs.org/sponsor/",
  target: "_blank",
  rel: "noopener"
}, "becoming a sponsor", -1), Tp = {
  __name: "TheWelcome",
  setup(e) {
    return (t, n) => (et(), pt($e, null, [
      re(mn, null, {
        icon: he(() => [
          re(Bd)
        ]),
        heading: he(() => [
          ee("Documentation")
        ]),
        default: he(() => [
          ee(" Vue’s "),
          mp,
          ee(" provides you with all information you need to get started. ")
        ]),
        _: 1
      }),
      re(mn, null, {
        icon: he(() => [
          re(Jd)
        ]),
        heading: he(() => [
          ee("Tooling")
        ]),
        default: he(() => [
          ee(" This project is served and bundled with "),
          gp,
          ee(". The recommended IDE setup is "),
          _p,
          ee(" + "),
          Ep,
          ee(". If you need to test your components and web pages, check out "),
          vp,
          ee(" and "),
          yp,
          ee(". "),
          bp,
          ee(" More instructions are available in "),
          Np,
          ee(". ")
        ]),
        _: 1
      }),
      re(mn, null, {
        icon: he(() => [
          re(np)
        ]),
        heading: he(() => [
          ee("Ecosystem")
        ]),
        default: he(() => [
          ee(" Get official tools and libraries for your project: "),
          wp,
          ee(", "),
          Op,
          ee(", "),
          Vp,
          ee(", and "),
          Sp,
          ee(". If you need more resources, we suggest paying "),
          xp,
          ee(" a visit. ")
        ]),
        _: 1
      }),
      re(mn, null, {
        icon: he(() => [
          re(cp)
        ]),
        heading: he(() => [
          ee("Community")
        ]),
        default: he(() => [
          ee(" Got stuck? Ask your question on "),
          Dp,
          ee(", our official Discord server, or "),
          Cp,
          ee(". You should also subscribe to "),
          $p,
          ee(" and follow the official "),
          Rp,
          ee(" twitter account for latest news in the Vue world. ")
        ]),
        _: 1
      }),
      re(mn, null, {
        icon: he(() => [
          re(hp)
        ]),
        heading: he(() => [
          ee("Support Vue")
        ]),
        default: he(() => [
          ee(" As an independent project, Vue relies on community backing for its sustainability. You can help us by "),
          Pp,
          ee(". ")
        ]),
        _: 1
      })
    ], 64));
  }
}, Ip = {
  __name: "HomeView",
  setup(e) {
    return (t, n) => (et(), pt("main", null, [
      re(Tp)
    ]));
  }
}, Ap = $d({
  history: zf("/loggedin"),
  routes: [
    {
      name: "home",
      path: "/index.htm",
      pathToRegexpOptions: { strict: !0 },
      component: Ip
    },
    {
      name: "admin",
      path: "/index.htm#admin",
      pathToRegexpOptions: { strict: !0 },
      component: () => import("./AdminView-C-9UprwC.js")
    },
    {
      name: "unique",
      path: "/index.htm#unique",
      pathToRegexpOptions: { strict: !0 },
      component: () => import("./UniqueUsersView-DH8BmfrQ.js")
    }
  ]
}), jr = Pu(Id);
jr.use(df());
jr.use(Ap);
jr.mount("#app");
export {
  Gt as _,
  pt as c,
  et as o
};
