(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{183:function(e,t,r){"use strict";r.r(t);var n=r(0),a=Object(n.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),r("hr"),e._v(" "),e._m(4),e._v(" "),e._m(5),e._m(6),e._v(" "),e._m(7),e._v(" "),e._m(8),e._v(" "),e._m(9),e._v(" "),e._m(10),e._m(11),e._v(" "),e._m(12),e._v(" "),e._m(13),e._v(" "),e._m(14),r("p",[e._v("以上，设置属性的时候如果当前属性已存在，则不能设置成功，因此，我们可以利用set方法来拦截设置符合我们期望的属性，根据应用场景，自由发挥。")]),e._v(" "),e._m(15),r("p",[e._v("以上，当目标对象的某个属性为不可写状态，那么set方法将会失效。")]),e._v(" "),e._m(16),e._v(" "),e._m(17),e._v(" "),e._m(18),e._v(" "),e._m(19),e._m(20),e._v(" "),r("p",[e._v("不过需要注意，当目标对象是不可扩展或者对象的属性是不可配置时has方法不能隐藏目标对象的当前属性，否则拦截会报错。")]),e._v(" "),e._m(21),e._m(22),e._v(" "),e._m(23),e._v(" "),e._m(24),e._m(25),e._v(" "),e._m(26),e._v(" "),e._m(27),e._v(" "),e._m(28),e._m(29),e._v(" "),e._m(30),e._v(" "),e._m(31),e._m(32),e._v(" "),e._m(33),e._v(" "),r("p",[e._v("好啦，今天关于Proxy的介绍就到这了，以上也只是针对几个比较常用的操作函数进行了举例说明，如果想了解更多，建议参考以下资料，若有错误，还望各位大神指正!")]),e._v(" "),r("p",[r("a",{attrs:{href:"http://es6.ruanyifeng.com/#docs/proxy",target:"_blank",rel:"noopener noreferrer"}},[e._v("阮一峰：ECMAScript 6 入门-Proxy"),r("OutboundLink")],1),r("br"),e._v(" "),r("a",{attrs:{href:"http://es6.ruanyifeng.com/#docs/reflect",target:"_blank",rel:"noopener noreferrer"}},[e._v("阮一峰：ECMAScript 6 入门-Reflect"),r("OutboundLink")],1),r("br"),e._v(" "),r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy",target:"_blank",rel:"noopener noreferrer"}},[e._v("Proxy - JavaScript | MDN"),r("OutboundLink")],1)])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"初识es6-proxy属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#初识es6-proxy属性","aria-hidden":"true"}},[this._v("#")]),this._v(" 初识ES6 Proxy属性")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[this._v("#")]),this._v(" 前言")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Proxy对象是ES6(ECMAScript 6)中提供用来操作对象的一个API，其含义官方给出的解释是："),t("code",[this._v("Proxy 对象用于定义基本操作的自定义行为（如属性查找，赋值，枚举，函数调用等）")]),this._v("。"),t("br")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[e._v("小白：额~，读了三遍，还是不太明白。"),r("br")]),e._v(" "),r("li",[e._v("隔壁老王："),r("code",[e._v("Proxy")]),e._v("本意是"),r("code",[e._v("代理")]),e._v("，那既然代理，肯定要具备代理的俩基本素质，1.帮谁代理，2.干点什么。所以，\n帮谁代理？ "),r("code",[e._v("帮目标对象代理")]),e._v(",干点什么？"),r("code",[e._v("架设拦截，对外界的访问进行过滤和改写")]),e._v("，串起来说就是："),r("code",[e._v("在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写")]),e._v("。这下明白了吧，嘿嘿。")]),e._v(" "),r("li",[e._v("小白：喔育，不愧是隔壁老王，就是厉害~")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"语法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#语法","aria-hidden":"true"}},[this._v("#")]),this._v(" 语法")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("let proxy = new Proxy(target, handler);\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("tgarget")]),this._v("：要代理的目标对象。（可以是任何类型的对象，包括原生数组，函数，甚至另一个代理）。"),t("br"),this._v(" "),t("code",[this._v("handler")]),this._v("：定义拦截行为的配置对象（也是一个对象，其内部的属性均为执行操作的函数）。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("proxy支持的拦截操作一共 13 种，即支持13种代理行为（函数），这些函数如果你需要复写其行为方式，均要定义在handler这个对象中使用，下面我们就针对这些支持的比较常用的操作函数进行举例说明。其余的不是很常用，如果想了解可以参考文末的资料去学习。\n"),t("br"),this._v(" "),t("br")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"get-target-key-receiver"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#get-target-key-receiver","aria-hidden":"true"}},[this._v("#")]),this._v(" get(target, key, receiver)")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("含义：拦截对象属性的读取   "),r("br"),e._v(" "),r("code",[e._v("target")]),e._v("：要代理的目标对象。"),r("br"),e._v(" "),r("code",[e._v("key")]),e._v("：属性名。"),r("br"),e._v(" "),r("code",[e._v("receiver")]),e._v("：proxy实例（可选参数，一般不用）"),r("br")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("const proxy1 = new Proxy({\n            a: 1\n        }, {\n            get(target, key) {\n              if(Reflect.has(target,key)) {\n                return Reflect.get(target,key);\n              }else {\n                  return false;\n              }\n              \n            }\n    })\n        proxy1.a //1\n        proxy1.b //false\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("以上，a属性因为有定义，所以可获取到其值为1，b属性没有被定义，输出为"),t("code",[this._v("false")]),this._v("，如果这里没有定义get方法，那么获取操作就会被转发到目标对象身上，默认如果没有此属性，会返回"),t("code",[this._v("undefined")]),this._v("，而这里却返回"),t("code",[this._v("false")]),this._v("，正是因为重新定义了get方法，对返回内容进行了修改，正如其含义，对代理对象属性的读取进行了拦截。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"set-target-key-value-receiver"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#set-target-key-value-receiver","aria-hidden":"true"}},[this._v("#")]),this._v(" set(target, key, value, receiver)")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("含义：拦截对象属性的设置 "),r("br"),e._v(" "),r("code",[e._v("target")]),e._v("：要代理的目标对象。"),r("br"),e._v(" "),r("code",[e._v("key")]),e._v("：要设置的属性名。"),r("br"),e._v(" "),r("code",[e._v("value")]),e._v("：要设置的属性值。"),r("br"),e._v(" "),r("code",[e._v("receiver")]),e._v("：proxy实例（可选参数，一般不用）"),r("br")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("    const handler = {\n           set(target,key,value) {\n               if(!Reflect.has(target,key)) {\n                   Reflect.set(target,key,value);\n               }else {\n                  console.log(`${key}属性已存在`) //a属性已存在\n               }\n           },\n           get(target,key) {\n            return Reflect.get(target,key);\n           }\n\n       }\n    const proxy = new Proxy({},handler);\n     proxy.a = 1;\n     console.log(proxy.a);//1\n     proxy.a = 2;\n     console.log(proxy.a) //1\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("   var obj = {};\n   const target = Object.defineProperty(obj, 'a', {\n            value: 123,\n            writable: false,\n    });\n    const handler = {\n        set(target,key,value) {\n            Reflect.set(target,key,value);\n        },\n        get(target, key) {\n            return Reflect.get(target,key);\n        }\n    };\n\n    const proxy = new Proxy(target, handler);\n    proxy.a = 456;\n   console.log( proxy.a) //123\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("看到很多资料都写到是当目标对象的属性为"),t("code",[this._v("不可写且不可配置")]),this._v("状态，set方法将会失效，但自测发现其结果与"),t("code",[this._v("configurable")]),this._v("属性的状态并无关系，只与"),t("code",[this._v("writable")]),this._v("属性有关，有点小疑惑，希望看到的大佬能帮小弟解惑。")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"has-target-key"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#has-target-key","aria-hidden":"true"}},[this._v("#")]),this._v(" has(target, Key)")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("含义：判断对象是否具有某个属性。 "),r("br"),e._v(" "),r("code",[e._v("target")]),e._v("：要代理的目标对象。"),r("br"),e._v(" "),r("code",[e._v("key")]),e._v("：要设置的属性名。"),r("br"),e._v("\n当判断一个对象中是否具有某个属性时，has方法就会生效，典型的操作就是in运算符应用，返回值为布尔类型")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("     const handler = {\n            has(target, key) {\n                if (key[0] === '_') {\n                    console.log('it is a private property')\n                    return false;\n                }\n                return key in target;\n            }\n        };\n        const target = {\n            _a: 123,\n            a: 456\n        };\n        const proxy = new Proxy(target, handler);\n        console.log('_a' in proxy) // it is a private property  false\n        console.log('a' in proxy);//true\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("以上，当对proxy使用"),t("code",[this._v("in")]),this._v("运算符时，就会自动触发has方法，如果判断当前属性以_开头的话，就进行拦截，从而不被后面的"),t("code",[this._v("in")]),this._v("运算符发现，实现隐藏某些特定属性的目的。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("    var obj = {\n            a: 10\n        };\n       Object.preventExtensions(obj); //使obj对象不可扩展，也就是使其不能增加新的属性\n        var p = new Proxy(obj, {\n            has: function (target, key) {\n                return false;\n            }\n        });\n\n        'a' in p // Uncaught TypeError: 'has' on proxy: trap returned falsish for property 'a' but the proxy target is not extensible\n        \n        \n\n   let obj = {};\n        Object.defineProperty(obj, \"a\", {\n            configurable: false, //当前属性不可配置\n            value: 10,\n        });\n        var p = new Proxy(obj, {\n            has: function (target, key) {\n                return false;\n            }\n        });\n\n        'a' in p // Uncaught TypeError: 'has' on proxy: trap returned falsish for property 'a' which exists in the proxy target as non-configurable\n    \n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"apply-target-thisargs-args"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#apply-target-thisargs-args","aria-hidden":"true"}},[this._v("#")]),this._v(" apply(target, thisArgs, args)")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("含义：拦截函数的调用、call和apply操作"),r("br"),e._v(" "),r("code",[e._v("target")]),e._v("：目标对象。"),r("br"),e._v(" "),r("code",[e._v("thisArgs")]),e._v("：目标对象的上下文对象（this）。"),r("br"),e._v(" "),r("code",[e._v("args")]),e._v("：目标对象的参数数组。"),r("br")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("    const handler = {\n            apply(target, ctx, args) {\n                return Reflect.apply(...arguments) * 2;\n                //或者\n                return target(...args) * 2\n            }\n        };\n\n        function sum(...args) {\n            let num = 0;\n            args.forEach((item) => {\n                num += item;\n            })\n            return num;\n        }\n\n        var proxy = new Proxy(sum, handler);\n        proxy(1, 2) // 6\n        proxy.call(null, 5, 6) // 22\n        proxy.apply(null, [7, 8]) // 30\n")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("以上，目标对象"),r("code",[e._v("这里是sum")]),e._v("，必须是一个函数，否则调用会报错。每当proxy函数被直接调用或者"),r("code",[e._v("call")]),e._v(","),r("code",[e._v("apply")]),e._v("方式调用都会立即触发"),r("code",[e._v("apply")]),e._v("方法，从而该调用被"),r("code",[e._v("apply")]),e._v("方法拦截，这样就可以利用拦截修改返回值，如果不写apply方法，默认调用sum方法，返回 结果。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"construct-target-args，newtarget"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#construct-target-args，newtarget","aria-hidden":"true"}},[this._v("#")]),this._v(" construct(target, args，newTarget)")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("含义：拦截new命令"),r("br"),e._v(" "),r("code",[e._v("target")]),e._v("：目标对象。"),r("br"),e._v(" "),r("code",[e._v("args")]),e._v("：构造函数的参数列表。"),r("br"),e._v(" "),r("code",[e._v("newTarget")]),e._v("：创建实例对象时，new命令作用的构造函数（下面例子的p）。"),r("br")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("    var p = new Proxy(function () {}, {\n            construct: function (target, args, newTarget) {\n                console.log('called: ' + args.join(', '));\n                return {\n                    value: args[0] * 10\n                };\n\n               // return 1 //Uncaught TypeError: 'construct' on proxy: trap returned non-object ('1')\n            }\n        });\n\n        (new p(1)).value\n        // \"called: 1\"\n        // 10\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("以上，代理的目标对象必须是一个构造函数(只有构造函数才可以使用new操作符)，当执行"),t("code",[this._v("new p(1)")]),this._v("时，会立刻触发"),t("code",[this._v("construct")]),this._v("函数，也就是会被该函数拦截，这里的返回值有讲究，必须返回对象，否则会报错。"),t("code",[this._v("construct")]),this._v("方法执行完毕，p实例也就初始化完成了。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"proxy代理时-target-内部-this-的指向会发生改变"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#proxy代理时-target-内部-this-的指向会发生改变","aria-hidden":"true"}},[this._v("#")]),this._v(" Proxy代理时 target 内部 this 的指向会发生改变")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v(" const target = {\n            foo: function () {\n                console.log(this === proxy);\n            }\n        };\n        const handler = {};\n        const proxy = new Proxy(target, handler);\n\n        target.foo() // false\n        proxy.foo() // true\n\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("可以看出，当目标对象一旦被"),t("code",[this._v("proxy")]),this._v("代理后，其内部"),t("code",[this._v("this")]),this._v("就会指向"),t("code",[this._v("proxy")]),this._v("，而非自身，因此需要注意这点。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"结语"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#结语","aria-hidden":"true"}},[this._v("#")]),this._v(" 结语")])}],!1,null,null,null);t.default=a.exports}}]);