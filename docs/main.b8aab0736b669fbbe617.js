(() => {
  "use strict";
  var t = {
    d: (e, r) => {
      for (var n in r)
        t.o(r, n) &&
          !t.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: r[n] });
    },
    o: (t, e) => Object.prototype.hasOwnProperty.call(t, e),
  };
  function e(t, e) {
    for (var r = 0; r < e.length; r++) {
      var n = e[r];
      (n.enumerable = n.enumerable || !1),
        (n.configurable = !0),
        "value" in n && (n.writable = !0),
        Object.defineProperty(t, n.key, n);
    }
  }
  t.d({}, { L: () => g });
  var r,
    n,
    o,
    a = (function () {
      function t(e) {
        !(function (t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        })(this, t),
          this.getCurrentID(),
          (this.tarea = e),
          (this.id = t._id),
          (this.completado = !1),
          (this.creado = new Date()),
          t._id++,
          this.recordID();
      }
      var r, n, o;
      return (
        (r = t),
        (o = [
          {
            key: "fromJson",
            value: function (e) {
              var r = e.id,
                n = e.tarea,
                o = e.completado,
                a = e.creado,
                i = new t(n);
              return (i.id = 1 * r), (i.completado = o), (i.creado = a), i;
            },
          },
        ]),
        (n = [
          {
            key: "recordID",
            value: function () {
              localStorage.setItem("current-id", t._id);
            },
          },
          {
            key: "getCurrentID",
            value: function () {
              t._id = localStorage.getItem("current-id")
                ? 1 * localStorage.getItem("current-id")
                : 1;
            },
          },
        ]) && e(r.prototype, n),
        o && e(r, o),
        Object.defineProperty(r, "prototype", { writable: !1 }),
        t
      );
    })();
  function i(t, e) {
    var r =
      ("undefined" != typeof Symbol && t[Symbol.iterator]) || t["@@iterator"];
    if (!r) {
      if (
        Array.isArray(t) ||
        (r = (function (t, e) {
          if (!t) return;
          if ("string" == typeof t) return l(t, e);
          var r = Object.prototype.toString.call(t).slice(8, -1);
          "Object" === r && t.constructor && (r = t.constructor.name);
          if ("Map" === r || "Set" === r) return Array.from(t);
          if (
            "Arguments" === r ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          )
            return l(t, e);
        })(t)) ||
        (e && t && "number" == typeof t.length)
      ) {
        r && (t = r);
        var n = 0,
          o = function () {};
        return {
          s: o,
          n: function () {
            return n >= t.length ? { done: !0 } : { done: !1, value: t[n++] };
          },
          e: function (t) {
            throw t;
          },
          f: o,
        };
      }
      throw new TypeError(
        "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
      );
    }
    var a,
      i = !0,
      c = !1;
    return {
      s: function () {
        r = r.call(t);
      },
      n: function () {
        var t = r.next();
        return (i = t.done), t;
      },
      e: function (t) {
        (c = !0), (a = t);
      },
      f: function () {
        try {
          i || null == r.return || r.return();
        } finally {
          if (c) throw a;
        }
      },
    };
  }
  function l(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
    return n;
  }
  function c(t, e) {
    for (var r = 0; r < e.length; r++) {
      var n = e[r];
      (n.enumerable = n.enumerable || !1),
        (n.configurable = !0),
        "value" in n && (n.writable = !0),
        Object.defineProperty(t, n.key, n);
    }
  }
  (o = void 0),
    (n = "_id") in (r = a)
      ? Object.defineProperty(r, n, {
          value: o,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (r[n] = o);
  var u = (function () {
    function t() {
      !(function (t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      })(this, t),
        this.cargarLocalStorage();
    }
    var e, r, n;
    return (
      (e = t),
      (r = [
        {
          key: "nuevoTodo",
          value: function (t) {
            this.todos.push(t), this.guardarLocalStorage();
          },
        },
        {
          key: "eliminarTodo",
          value: function (t) {
            (this.todos = this.todos.filter(function (e) {
              return e.id != t;
            })),
              this.guardarLocalStorage();
          },
        },
        {
          key: "toggleTodo",
          value: function (t) {
            var e,
              r = i(this.todos);
            try {
              for (r.s(); !(e = r.n()).done; ) {
                var n = e.value;
                if (n.id == t) {
                  (n.completado = !n.completado), this.guardarLocalStorage();
                  break;
                }
              }
            } catch (t) {
              r.e(t);
            } finally {
              r.f();
            }
          },
        },
        {
          key: "eliminarCompletados",
          value: function () {
            (this.todos = this.todos.filter(function (t) {
              return !t.completado;
            })),
              this.guardarLocalStorage();
          },
        },
        {
          key: "guardarLocalStorage",
          value: function () {
            localStorage.setItem("todo", JSON.stringify(this.todos));
          },
        },
        {
          key: "cargarLocalStorage",
          value: function () {
            (this.todos = localStorage.getItem("todo")
              ? JSON.parse(localStorage.getItem("todo"))
              : []),
              (this.todos = this.todos.map(function (t) {
                return a.fromJson(t);
              }));
          },
        },
      ]),
      r && c(e.prototype, r),
      n && c(e, n),
      Object.defineProperty(e, "prototype", { writable: !1 }),
      t
    );
  })();
  function d(t, e) {
    var r =
      ("undefined" != typeof Symbol && t[Symbol.iterator]) || t["@@iterator"];
    if (!r) {
      if (
        Array.isArray(t) ||
        (r = (function (t, e) {
          if (!t) return;
          if ("string" == typeof t) return s(t, e);
          var r = Object.prototype.toString.call(t).slice(8, -1);
          "Object" === r && t.constructor && (r = t.constructor.name);
          if ("Map" === r || "Set" === r) return Array.from(t);
          if (
            "Arguments" === r ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          )
            return s(t, e);
        })(t)) ||
        (e && t && "number" == typeof t.length)
      ) {
        r && (t = r);
        var n = 0,
          o = function () {};
        return {
          s: o,
          n: function () {
            return n >= t.length ? { done: !0 } : { done: !1, value: t[n++] };
          },
          e: function (t) {
            throw t;
          },
          f: o,
        };
      }
      throw new TypeError(
        "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
      );
    }
    var a,
      i = !0,
      l = !1;
    return {
      s: function () {
        r = r.call(t);
      },
      n: function () {
        var t = r.next();
        return (i = t.done), t;
      },
      e: function (t) {
        (l = !0), (a = t);
      },
      f: function () {
        try {
          i || null == r.return || r.return();
        } finally {
          if (l) throw a;
        }
      },
    };
  }
  function s(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
    return n;
  }
  var f = document.querySelector(".todo-list"),
    v = document.querySelector(".new-todo"),
    m = document.querySelector(".clear-completed"),
    y = document.querySelector(".filters"),
    h = document.querySelectorAll(".filtro"),
    p = function (t) {
      var e = '\n  <li class="'
          .concat(t.completado ? "completed" : "", '" data-id="')
          .concat(
            t.id,
            '">\n\t\t\t<div class="view">\n\t\t\t\t\t<input class="toggle" type="checkbox" '
          )
          .concat(t.completado ? "checked" : "", ">\n\t\t\t\t\t<label>")
          .concat(
            t.tarea,
            '</label>\n\t\t\t\t\t<button class="destroy"></button>\n\t\t\t</div>\n\t\t<input class="edit" value="Create a TodoMVC template">\n\t</li> \n  '
          ),
        r = document.createElement("div");
      return (
        (r.innerHTML = e), f.append(r.firstElementChild), r.firstElementChild
      );
    };
  v.addEventListener("keyup", function (t) {
    if (13 === t.keyCode && v.value.length > 0) {
      console.log(v.value);
      var e = new a(v.value);
      g.nuevoTodo(e), p(e), (v.value = "");
    }
  }),
    f.addEventListener("click", function (t) {
      var e = t.target.localName,
        r = t.target.parentElement.parentElement,
        n = r.getAttribute("data-id");
      e.includes("input")
        ? (g.toggleTodo(n), r.classList.toggle("completed"))
        : e.includes("button") && (g.eliminarTodo(n), f.removeChild(r));
    }),
    m.addEventListener("click", function () {
      g.eliminarCompletados();
      for (var t = f.children.length - 1; t >= 0; t--) {
        var e = f.children[t];
        e.classList.contains("completed") && f.removeChild(e);
      }
    }),
    y.addEventListener("click", function (t) {
      var e = t.target.text;
      if (e) {
        h.forEach(function (t) {
          return t.classList.remove("selected");
        }),
          t.target.classList.add("selected");
        var r,
          n = d(f.children);
        try {
          for (n.s(); !(r = n.n()).done; ) {
            var o = r.value;
            o.classList.remove("hidden");
            var a = o.classList.contains("completed");
            switch (e) {
              case "Pendientes":
                a && o.classList.add("hidden");
                break;
              case "Completados":
                a || o.classList.add("hidden");
            }
          }
        } catch (t) {
          n.e(t);
        } finally {
          n.f();
        }
      }
    });
  var g = new u();
  g.todos.forEach(function (t) {
    p(t);
  }),
    console.log(g.todos);
})();
