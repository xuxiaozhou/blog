(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{183:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"http"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http","aria-hidden":"true"}},[t._v("#")]),t._v(" HTTP")]),t._v(" "),s("ul",[s("li",[t._v("协议")]),t._v(" "),s("li",[t._v("从浏览器地址栏输入url到显示页面的步骤")]),t._v(" "),s("li",[t._v("如何进行网站性能优化")]),t._v(" "),s("li",[t._v("HTTP状态码及其含义")]),t._v(" "),s("li",[t._v("https://github.com/poetries/FE-Interview-Questions/blob/master/HTTP.md")]),t._v(" "),s("li",[t._v("安全问题")])]),t._v(" "),s("h2",{attrs:{id:"ajax"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ajax","aria-hidden":"true"}},[t._v("#")]),t._v(" ajax")]),t._v(" "),s("blockquote",[s("p",[t._v("异步的javascript和xml")])]),t._v(" "),s("ul",[s("li",[s("code",[t._v("XMLHttpRequest")]),t._v(" 创建ajax对象")]),t._v(" "),s("li",[s("code",[t._v("request.open(method,url,async)")]),t._v(" 连接服务器\n"),s("ul",[s("li",[s("code",[t._v("method")]),t._v(":发送请求的方法 "),s("code",[t._v("GET/POST")])]),t._v(" "),s("li",[s("code",[t._v("url")]),t._v(":请求地址")]),t._v(" "),s("li",[s("code",[t._v("async")]),t._v(":是否异步传输,true异步传输")])])]),t._v(" "),s("li",[s("code",[t._v("request.send(string)")]),t._v(" 发送请求\n"),s("ul",[s("li",[s("code",[t._v("GET")]),t._v("请求无需string")]),t._v(" "),s("li",[s("code",[t._v("POST")]),t._v("需要带上string，")])])]),t._v(" "),s("li",[s("code",[t._v("request.onreadystatechange=fn")]),t._v(" 接受服务器响应数据")]),t._v(" "),s("li",[s("code",[t._v("request.readyState")]),t._v(" 响应返回所处状态\n"),s("ul",[s("li",[t._v("0 未调用open()")]),t._v(" "),s("li",[t._v("1 已经调用send(),正在发送请求")]),t._v(" "),s("li",[t._v("2 send()完成，已经收到全部响应内容")]),t._v(" "),s("li",[t._v("3 正在解析响应内容")]),t._v(" "),s("li",[t._v("4 响应内容解析完毕，可以给客户端使用")])])])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("// 创建ajax对象")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" request "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("XMLHttpRequest")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nrequest"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("open")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'GET'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" url"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("true")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nrequest"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("send")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("// 判断请求状态request.onreadystatechange")]),t._v("\nrequest"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function-variable function"}},[t._v("onreadystatechange")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token comment"}},[t._v("// request.readyState 响应返回所处状态")]),t._v("\n  "),s("span",{attrs:{class:"token comment"}},[t._v("// 0 未调用open()")]),t._v("\n  "),s("span",{attrs:{class:"token comment"}},[t._v("// 1 已调用send()，正在发送请求")]),t._v("\n  "),s("span",{attrs:{class:"token comment"}},[t._v("// 2 send()方法完成，已经收到全部响应内容")]),t._v("\n  "),s("span",{attrs:{class:"token comment"}},[t._v("// 3 正在解析响应内容")]),t._v("\n  "),s("span",{attrs:{class:"token comment"}},[t._v("// 4 响应内容解析完毕，可以给客户端使用")]),t._v("\n  "),s("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("readyState "),s("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("4")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("status "),s("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("200")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{attrs:{class:"token comment"}},[t._v("// 获得字符串形式的响应数据")]),t._v("\n      console"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("log")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("responseText"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"简单封装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简单封装","aria-hidden":"true"}},[t._v("#")]),t._v(" 简单封装")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("ajax")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" callback"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token comment"}},[t._v("// 创建ajax对象")]),t._v("\n  "),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" request "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("XMLHttpRequest")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" method "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" options"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("method "),s("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'GET'")]),t._v("\n  method "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" method"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("toUpperCase")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" data "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" options"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data\n  "),s("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" params "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("''")]),t._v("\n  "),s("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token comment"}},[t._v("// 把参数带在url上")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" key "),s("span",{attrs:{class:"token keyword"}},[t._v("in")]),t._v(" data"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      params "),s("span",{attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'&'")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" key "),s("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'='")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" data"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" key "),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{attrs:{class:"token comment"}},[t._v("// 连接服务器")]),t._v("\n  "),s("span",{attrs:{class:"token comment"}},[t._v("// 发送请求")]),t._v("\n  "),s("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("method "),s("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'POST'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("log")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("method"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    request"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("open")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("method"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" url"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("true")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    request"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("setRequestHeader")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'Content-type'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'application/x-www-form-urlencoded'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    request"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("send")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("params"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("substring")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("method "),s("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'GET'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    url "),s("span",{attrs:{class:"token operator"}},[t._v("+=")]),t._v(" url"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("indexOf")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'?'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("-")]),s("span",{attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("?")]),t._v(" params "),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'?'")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" params"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("substring")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    request"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("open")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("method"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" url"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("true")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    request"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("send")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{attrs:{class:"token comment"}},[t._v("// 等待结果")]),t._v("\n  request"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function-variable function"}},[t._v("onreadystatechange")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("readyState "),s("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("4")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("status "),s("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("200")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" data "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token constant"}},[t._v("JSON")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("parse")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("responseText"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{attrs:{class:"token function"}},[t._v("callback")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"几种ajax请求方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#几种ajax请求方式","aria-hidden":"true"}},[t._v("#")]),t._v(" 几种ajax请求方式")]),t._v(" "),s("ul",[s("li",[t._v("get 获取数据")]),t._v(" "),s("li",[t._v("post 上传数据")]),t._v(" "),s("li",[t._v("put 修改数据")]),t._v(" "),s("li",[t._v("delete 删除数据")]),t._v(" "),s("li",[t._v("head 获取报文首部")])]),t._v(" "),s("h2",{attrs:{id:"get和post区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#get和post区别","aria-hidden":"true"}},[t._v("#")]),t._v(" get和post区别")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th"),t._v(" "),s("th",[t._v("get")]),t._v(" "),s("th",[t._v("post")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("参数位置")]),t._v(" "),s("td",[t._v("url")]),t._v(" "),s("td",[t._v("request body(请求体)")])]),t._v(" "),s("tr",[s("td",[t._v("大小限制")]),t._v(" "),s("td",[t._v("决定在浏览器的参数长度")]),t._v(" "),s("td",[t._v("理论上没有限制")])]),t._v(" "),s("tr",[s("td",[t._v("功能")]),t._v(" "),s("td",[t._v("获取数据")]),t._v(" "),s("td",[t._v("上传数据")])]),t._v(" "),s("tr",[s("td",[t._v("安全")]),t._v(" "),s("td",[t._v("比较不安全")]),t._v(" "),s("td",[t._v("比较安全")])]),t._v(" "),s("tr",[s("td",[t._v("缓存")]),t._v(" "),s("td",[t._v("浏览器主动缓存")]),t._v(" "),s("td",[t._v("不会缓存")])]),t._v(" "),s("tr",[s("td",[t._v("浏览器回退")]),t._v(" "),s("td",[t._v("get回退是无害的")]),t._v(" "),s("td",[t._v("post会再次请求")])])])]),t._v(" "),s("h2",{attrs:{id:"跨域"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#跨域","aria-hidden":"true"}},[t._v("#")]),t._v(" 跨域")]),t._v(" "),s("blockquote",[s("p",[t._v("因为浏览器出于安全考虑，有同源策略")])]),t._v(" "),s("blockquote",[s("p",[t._v("如果协议、域名或者端口有一个不同就是跨域，Ajax 请求会失败。")])]),t._v(" "),s("h3",{attrs:{id:"jsonp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jsonp","aria-hidden":"true"}},[t._v("#")]),t._v(" jsonp")]),t._v(" "),s("blockquote",[s("p",[t._v("解决get的跨域")])]),t._v(" "),s("h4",{attrs:{id:"原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#原理","aria-hidden":"true"}},[t._v("#")]),t._v(" 原理")]),t._v(" "),s("ul",[s("li",[t._v("利用script标签的src不受同源策略限制，可以请求第三方服务器数据")]),t._v(" "),s("li",[t._v("link和img也有这特性，img可以用于埋点")]),t._v(" "),s("li",[t._v("需要后端配合")])]),t._v(" "),s("h4",{attrs:{id:"简单实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简单实现","aria-hidden":"true"}},[t._v("#")]),t._v(" 简单实现")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" url "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'https://c.y.qq.com/tips/fcgi-bin/fcg_music_red_dota.fcg?g_tk=153730533&jsonpCallback=MusicJsonCallback7917118951592015&loginUin=759811542&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0&ct=24&qq=759811542&cid=205360410&reqtype=1&from=2'")]),t._v("\n\n"),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("jsonp")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" jsonpCallback"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" success"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" script "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("createElement")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'script'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  script"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("type "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'text/javascript'")]),t._v("\n  "),s("span",{attrs:{class:"token comment"}},[t._v("// 加载完毕立即执行")]),t._v("\n  script"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n  script"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("src "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" url\n  window"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" jsonpCallback "),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    success "),s("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("success")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  document"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("appendChild")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("script"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token function"}},[t._v("jsonp")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{attrs:{class:"token string"}},[t._v("'jsonpCallback'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("log")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"cors：跨域资源共享"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cors：跨域资源共享","aria-hidden":"true"}},[t._v("#")]),t._v(" CORS：跨域资源共享")]),t._v(" "),s("p",[s("strong",[t._v("做法")])]),t._v(" "),s("ul",[s("li",[t._v("服务器设置Access-Control-Allow-OriginHTTP响应头之后，浏览器将会允许跨域请求")]),t._v(" "),s("li",[t._v("Access-Control-Allow-OriginHTTP:*")]),t._v(" "),s("li",[t._v("Access-Control-Allow-OriginHTTP:http://a.com")])]),t._v(" "),s("h3",{attrs:{id:"代理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代理","aria-hidden":"true"}},[t._v("#")]),t._v(" 代理")]),t._v(" "),s("ul",[s("li",[t._v("开发时设置代理")]),t._v(" "),s("li",[t._v("上线时配置nginx")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("// vuecli3.0")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("// vue.config.js")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("// /api/getDiscList/musichall/fcgi-bin => https://c.y.qq.com/musichall/fcgi-bin")]),t._v("\nmodule"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  devServer"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     proxy"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{attrs:{class:"token string"}},[t._v("'/api/getDiscList'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          target"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'https://c.y.qq.com'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          changeOrigin"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("true")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          pathRewrite"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{attrs:{class:"token comment"}},[t._v("// 将/api/getDiscList 替换成空")]),t._v("\n            "),s("span",{attrs:{class:"token string"}},[t._v("'^/api/getDiscList'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("''")]),t._v("\n          "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"http协议类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http协议类","aria-hidden":"true"}},[t._v("#")]),t._v(" Http协议类")]),t._v(" "),s("ul",[s("li",[t._v("无连接：连接一次，就会断掉")]),t._v(" "),s("li",[t._v("无状态：不能区分两次连接的是否同一个人")]),t._v(" "),s("li",[t._v("灵活：可以通过http请求头的数据类型可以实现各种类型数据传输")]),t._v(" "),s("li",[t._v("简单快速：")])]),t._v(" "),s("h2",{attrs:{id:"http报文"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http报文","aria-hidden":"true"}},[t._v("#")]),t._v(" HTTP报文")]),t._v(" "),s("h3",{attrs:{id:"请求报文"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#请求报文","aria-hidden":"true"}},[t._v("#")]),t._v(" 请求报文")]),t._v(" "),s("ul",[s("li",[t._v("请求行：方法，url，http协议")]),t._v(" "),s("li",[t._v("请求头：请求数据类型")]),t._v(" "),s("li",[t._v("空行：")]),t._v(" "),s("li",[t._v("请求体：数据")])]),t._v(" "),s("h3",{attrs:{id:"响应报文"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#响应报文","aria-hidden":"true"}},[t._v("#")]),t._v(" 响应报文")]),t._v(" "),s("ul",[s("li",[t._v("响应行：http协议 状态码")]),t._v(" "),s("li",[t._v("响应头：")]),t._v(" "),s("li",[t._v("空行：")]),t._v(" "),s("li",[t._v("响应体：数据")])]),t._v(" "),s("h2",{attrs:{id:"http状态码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http状态码","aria-hidden":"true"}},[t._v("#")]),t._v(" http状态码")]),t._v(" "),s("h3",{attrs:{id:"总体介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总体介绍","aria-hidden":"true"}},[t._v("#")]),t._v(" 总体介绍")]),t._v(" "),s("ul",[s("li",[t._v("1开头： 指示信息")]),t._v(" "),s("li",[t._v("2开头：成功处理请求的状态代码")]),t._v(" "),s("li",[t._v("3开头：重定向")]),t._v(" "),s("li",[t._v("4开头：客户端出错")]),t._v(" "),s("li",[t._v("5开头：服务器出错")])]),t._v(" "),s("h3",{attrs:{id:"详细点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#详细点","aria-hidden":"true"}},[t._v("#")]),t._v(" ?? 详细点")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("状态码")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("200(成功)")]),t._v(" "),s("td",[t._v("客户端请求成功")])]),t._v(" "),s("tr",[s("td",[t._v("301")]),t._v(" "),s("td",[t._v("永久重定向")])]),t._v(" "),s("tr",[s("td",[t._v("302")]),t._v(" "),s("td",[t._v("临时重定向")])]),t._v(" "),s("tr",[s("td",[t._v("304")]),t._v(" "),s("td",[t._v("浏览器有缓存，不用从服务器中取文件")])]),t._v(" "),s("tr",[s("td",[t._v("400")]),t._v(" "),s("td",[t._v("客户端请求有语法错误，不能被服务器所理解")])]),t._v(" "),s("tr",[s("td",[t._v("401")]),t._v(" "),s("td",[t._v("请求未经授权")])]),t._v(" "),s("tr",[s("td",[t._v("403")]),t._v(" "),s("td",[t._v("资源被禁止访问")])]),t._v(" "),s("tr",[s("td",[t._v("404")]),t._v(" "),s("td",[t._v("请求资源不存在")])]),t._v(" "),s("tr",[s("td",[t._v("500")]),t._v(" "),s("td",[t._v("服务端错误")])]),t._v(" "),s("tr",[s("td",[t._v("503")]),t._v(" "),s("td",[t._v("服务端错误")])])])]),t._v(" "),s("h2",{attrs:{id:"cookie-sessionstorage和localstorage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cookie-sessionstorage和localstorage","aria-hidden":"true"}},[t._v("#")]),t._v(" cookie,sessionStorage和localStorage")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th"),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("cookie")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("localStorage")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("sessionStorage")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("indexDB")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("存储大小")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("4k")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("5m")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("5m")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("无限")])]),t._v(" "),s("tr",[s("td",[t._v("数据生命周期")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("后端设置过期时间内有效")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("不主动清除，一直都在")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("页面关闭就清除")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("不主动清除，一直都在")])]),t._v(" "),s("tr",[s("td",[t._v("通信")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("同源的http请求头中携带")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("不参与")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("不参与")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("不参与")])]),t._v(" "),s("tr",[s("td",[t._v("是否有同源策略")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("有")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("有")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("有")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}})])])]),t._v(" "),s("h3",{attrs:{id:"简单使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简单使用","aria-hidden":"true"}},[t._v("#")]),t._v(" 简单使用")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("localStorage"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("getItem")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'key'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nlocalStorage"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("setItem")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'key'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{attrs:{class:"token string"}},[t._v("'value'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nlocalStorage"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("removeItem")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'key'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nlocalStorage"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("clear")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nsessionStorage"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("getItem")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'key'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nsessionStorage"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("setItem")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'key'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{attrs:{class:"token string"}},[t._v("'value'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nsessionStorage"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("removeItem")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'key'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nsessionStorage"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("clear")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"从输入url到得到html的详细过程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#从输入url到得到html的详细过程","aria-hidden":"true"}},[t._v("#")]),t._v(" 从输入url到得到html的详细过程")]),t._v(" "),s("ul",[s("li",[t._v("浏览器根据dns服务器得到域名的ip地址")]),t._v(" "),s("li",[t._v("向这个ip服务器发送http请求")]),t._v(" "),s("li",[t._v("服务器收到，处理并返回http请求")]),t._v(" "),s("li",[t._v("浏览器接收到返回内容")])]),t._v(" "),s("h2",{attrs:{id:"浏览器渲染过程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#浏览器渲染过程","aria-hidden":"true"}},[t._v("#")]),t._v(" 浏览器渲染过程")]),t._v(" "),s("ul",[s("li",[t._v("拿到html经过解析成DOM树")]),t._v(" "),s("li",[t._v("拿到css经过解析成css树")]),t._v(" "),s("li",[t._v("把DOM树和CSS树合成渲染树")]),t._v(" "),s("li",[t._v("通过layout:依照盒子模型，计算出每个节点在屏幕中的位置及尺寸")]),t._v(" "),s("li",[t._v("把渲染树通过浏览器绘制出来")])]),t._v(" "),s("h2",{attrs:{id:"性能优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#性能优化","aria-hidden":"true"}},[t._v("#")]),t._v(" 性能优化")]),t._v(" "),s("ul",[s("li",[t._v("减少 HTTP 请求数量：css精灵，采用lazyload")]),t._v(" "),s("li",[t._v("采用字体图标")]),t._v(" "),s("li",[t._v("采用cdn加速")]),t._v(" "),s("li",[t._v("小图片使用base64")]),t._v(" "),s("li",[t._v("静态资源开启gzip压缩")]),t._v(" "),s("li",[t._v("组件异步加载")]),t._v(" "),s("li",[t._v("按需引入第三方包")])]),t._v(" "),s("h2",{attrs:{id:"重排reflow"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#重排reflow","aria-hidden":"true"}},[t._v("#")]),t._v(" 重排Reflow")]),t._v(" "),s("blockquote",[s("p",[t._v("当可见节点位置及尺寸发生变化时会发生重排")])]),t._v(" "),s("blockquote",[s("p",[t._v("每个元素都有自己的盒子模型，这些都需要浏览器根据各种样式计算，并根据计算结果将元素放在它该出现的位置，这个过程称之为reflow")])]),t._v(" "),s("h3",{attrs:{id:"触发reflow"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#触发reflow","aria-hidden":"true"}},[t._v("#")]),t._v(" 触发Reflow")]),t._v(" "),s("ul",[s("li",[t._v("新增，修改，删除DOM节点")]),t._v(" "),s("li",[t._v("移动DOM")]),t._v(" "),s("li",[t._v("滚动")]),t._v(" "),s("li",[t._v("改变元素字体大小")])]),t._v(" "),s("h2",{attrs:{id:"重绘repaint"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#重绘repaint","aria-hidden":"true"}},[t._v("#")]),t._v(" 重绘Repaint")]),t._v(" "),s("blockquote",[s("p",[t._v("改变某个元素的背景色、文字颜色、边框颜色等等不影响它周围或内部布局的属性时")])]),t._v(" "),s("blockquote",[s("p",[t._v("改变页面呈现内容都需要重绘")])]),t._v(" "),s("h3",{attrs:{id:"触发repaint"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#触发repaint","aria-hidden":"true"}},[t._v("#")]),t._v(" 触发Repaint")]),t._v(" "),s("ul",[s("li",[t._v("DOM改动")]),t._v(" "),s("li",[t._v("CSS动画")])]),t._v(" "),s("h3",{attrs:{id:"两者关系"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#两者关系","aria-hidden":"true"}},[t._v("#")]),t._v(" 两者关系")]),t._v(" "),s("ul",[s("li",[t._v("重绘不一定导致重排")]),t._v(" "),s("li",[t._v("重排一定会导致重绘")])]),t._v(" "),s("h2",{attrs:{id:"重绘和回流（重排）的区别和关系？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#重绘和回流（重排）的区别和关系？","aria-hidden":"true"}},[t._v("#")]),t._v(" 重绘和回流（重排）的区别和关系？")]),t._v(" "),s("ul",[s("li",[t._v("重绘：当渲染树中的元素外观（如：颜色）发生改变，不影响布局时，产生重绘")]),t._v(" "),s("li",[t._v("回流：当渲染树中的元素的布局（如：尺寸、位置、隐藏/状态状态）发生改变时，产生重绘回流")]),t._v(" "),s("li",[t._v("注意：JS获取Layout属性值（如：offsetLeft、scrollTop、getComputedStyle等）也会引起回流。因为浏览器需要通过回流计算最新值")]),t._v(" "),s("li",[t._v("回流必将引起重绘，而重绘不一定会引起回流")])]),t._v(" "),s("h2",{attrs:{id:"如何最小化重绘-repaint-和回流-reflow-？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何最小化重绘-repaint-和回流-reflow-？","aria-hidden":"true"}},[t._v("#")]),t._v(" 如何最小化重绘(repaint)和回流(reflow)？")]),t._v(" "),s("ul",[s("li",[t._v('需要要对元素进行复杂的操作时，可以先隐藏(display:"none")，操作完成后再显示')]),t._v(" "),s("li",[t._v("需要创建多个DOM节点时，使用DocumentFragment创建完后一次性的加入document")]),t._v(" "),s("li",[t._v("缓存Layout属性值，如：var left = elem.offsetLeft; 这样，多次使用 left 只产生一次回流")]),t._v(" "),s("li",[t._v("尽量避免用table布局（table元素一旦触发回流就会导致table里所有的其它元素回流）")]),t._v(" "),s("li",[t._v("避免使用css表达式(expression)，因为每次调用都会重新计算值（包括加载页面）")]),t._v(" "),s("li",[t._v("尽量使用 css 属性简写，如：用 border 代替 border-width, border-style, border-color")]),t._v(" "),s("li",[t._v("批量修改元素样式：elem.className 和 elem.style.cssText 代替 elem.style.xxx")])]),t._v(" "),s("h2",{attrs:{id:"跨域携带cookie"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#跨域携带cookie","aria-hidden":"true"}},[t._v("#")]),t._v(" 跨域携带cookie")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("// 前端\nxhr.withCredentials=true\n// 后端\nAccess-Control-Allow-Origin: a.com\nAccess-Control-Allow-Credentials: true\n")])])]),s("h2",{attrs:{id:"安全问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安全问题","aria-hidden":"true"}},[t._v("#")]),t._v(" 安全问题")]),t._v(" "),s("h3",{attrs:{id:"xss跨站脚本攻击"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#xss跨站脚本攻击","aria-hidden":"true"}},[t._v("#")]),t._v(" xss跨站脚本攻击")]),t._v(" "),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[t._v("v-html\n")])])])])}],!1,null,null,null);e.options.__file="HTTP.md";a.default=e.exports}}]);