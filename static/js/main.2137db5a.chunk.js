(this["webpackJsonpgoootodo-practice"]=this["webpackJsonpgoootodo-practice"]||[]).push([[0],{20:function(e,t,c){},22:function(e,t,c){},26:function(e,t,c){"use strict";c.r(t);var n=c(1),o=c.n(n),r=c(14),a=c.n(r),i=(c(20),c(21),c(9)),s=c(8),d=(c(22),c(27)),l=c(28),j=c(0);function b(e){var t=e.todo,c=e.toggleTodo;return Object(j.jsx)("div",{children:Object(j.jsxs)(d.a,{className:"todo-wrapper",children:[Object(j.jsx)(l.a,{className:"mnxw-30 checkbox",children:Object(j.jsx)("div",{children:Object(j.jsx)("input",{onChange:function(){c(t.id)},type:"checkbox",checked:t.complete,className:"cust-checkbox"})})}),Object(j.jsx)(l.a,{className:"main-todo",children:Object(j.jsx)("div",{children:t.name})})]})})}function u(e){var t=e.todos,c=e.toggleTodo;return t.map((function(e){return Object(j.jsx)(b,{toggleTodo:c,todo:e},e.id)}))}var O=c(11),h="todoApp.todos";var m=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),c=t[0],o=t[1],r=Object(n.useRef)();return Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem(h));e&&o(e)}),[]),Object(n.useEffect)((function(){localStorage.setItem(h,JSON.stringify(c))}),[c]),Object(j.jsx)(d.a,{children:Object(j.jsxs)(l.a,{className:"main-container",children:[Object(j.jsx)(d.a,{children:Object(j.jsx)(l.a,{className:"main-content",children:Object(j.jsx)(d.a,{children:Object(j.jsx)(l.a,{children:Object(j.jsx)("div",{className:"main-box",children:Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"text-center title mb-3 py-2",children:"Gootodo"}),Object(j.jsxs)("div",{className:"box-content",children:[Object(j.jsx)("div",{className:"showTodos",children:Object(j.jsx)(u,{toggleTodo:function(e){var t=Object(i.a)(c),n=t.find((function(t){return t.id===e}));n.complete=!n.complete,o(t)},todos:c,className:"todo-wrapper"})}),Object(j.jsx)("div",{children:Object(j.jsx)("input",{ref:r,placeholder:"Type your todo",className:"input-todo mt-3",onKeyDown:function(e){if("Enter"===e.key){var t=r.current.value;if(""===t)return;o((function(e){return[].concat(Object(i.a)(e),[{id:Object(O.v4)(),name:t,complete:!1}])})),r.current.value=null}}})}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{onClick:function(e){var t=r.current.value;""!==t&&(o((function(e){return[].concat(Object(i.a)(e),[{id:Object(O.v4)(),name:t,complete:!1}])})),r.current.value=null)},className:"my-3 btn-add",children:"Add Your Todo"})}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{onClick:function(){var e=c.filter((function(e){return!e.complete}));o(e)},className:"mb-2 btn-clear",children:"Clear Complete"})}),Object(j.jsxs)("div",{className:"text-center",children:[c.filter((function(e){return!e.complete})).length," Left to do"]})]})]})})})})})}),Object(j.jsx)(d.a,{children:Object(j.jsx)(l.a,{className:"footer",children:Object(j.jsxs)("div",{children:["\xa9 ",(new Date).getFullYear()," Gootodo by ",Object(j.jsx)("a",{href:"https://github.com/dehyabi",children:"dehyabi"})]})})})]})})};a.a.render(Object(j.jsx)(o.a.StrictMode,{children:Object(j.jsx)(m,{})}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.2137db5a.chunk.js.map