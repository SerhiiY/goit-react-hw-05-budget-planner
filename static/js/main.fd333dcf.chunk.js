(window["webpackJsonpgoit-react-hw-05-budget-planner"]=window["webpackJsonpgoit-react-hw-05-budget-planner"]||[]).push([[0],{27:function(e,n,t){e.exports=t(48)},47:function(e,n,t){},48:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(8),u=t.n(o),l=t(3),c=t(4);function i(){var e=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 16px;\n  width: 100%;\n  border-radius: 2px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n"]);return i=function(){return e},e}var p=c.a.form(i()),s=function(e){var n=e.onSubmit,t=void 0===n?function(){return null}:n,r=e.children;return a.a.createElement(p,{onSubmit:t},r)};function m(){var e=Object(l.a)(["\n  display: inline-block;\n  font-size: 20px;\n  color: #171718;\n  cursor: pointer;\n  ","\n"]);return m=function(){return e},e}var d=c.a.label(m(),(function(e){return e.customStyles})),f=function(e){var n=e.children,t=e.customStyles;return a.a.createElement(d,{customStyles:t},n)};function b(){var e=Object(l.a)(["\n  color: #171718;\n  font: inherit;\n  font-size: 1.2rem;\n  padding: 16px;\n  border-radius: 4px;\n  border: 1px solid #bdbdbd;\n  width: 100%;\n  outline: 0;\n\n  &:focus {\n    border: 1px solid #2b32b2;\n  }\n"]);return b=function(){return e},e}var x=c.a.input(b()),v=function(e){var n=e.type,t=void 0===n?" text":n,r=e.onChange,o=void 0===r?function(){return null}:r,u=e.name,l=void 0===u?"":u;return a.a.createElement(x,{type:t,onChange:o,name:l})};function g(){var e=Object(l.a)(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  background-color: #3f51b5;\n  border: 0;\n  outline: 0;\n  padding: 8px 24px;\n  border-radius: 4px;\n  cursor: pointer;\n  box-shadow: 0px 2px 1px 1px rgba(0, 0, 0, 0.05);\n  font: inherit;\n  text-transform: uppercase;\n  user-select: none;\n\n  transition: background-color 200ms ease-in-out;\n\n  &:hover {\n    box-shadow: 0px 2px 1px 1px rgba(0, 0, 0, 0.15);\n    background-color: #303f9f;\n  }\n"]);return g=function(){return e},e}var E=c.a.button(g()),h=function(e){var n=e.type,t=void 0===n?"button":n,r=e.label,o=void 0===r?"":r,u=e.onClick,l=void 0===u?function(){return null}:u;return a.a.createElement(E,{type:t,onClick:l},o)},y=t(9),j=t(6),w=t(22),O=t.n(w),S="ADD_EXPENSE",P="REMOVE_EXPENSE",C="SET_BUDGET",k="SET_BALANCE",B=Object(j.b)((function(e){return{}}),(function(e){return{onSave:function(n){return e({type:C,payload:+n})}}}))((function(e){var n=e.onSave,t=0;return a.a.createElement(s,{onSubmit:function(e){if(e.preventDefault(),t<=0)return y.b.error("Enter correct number!");n(t),e.target.reset()}},a.a.createElement(f,{customStyles:"\n  margin-bottom: 16px;  \n"},"Enter your total budget",a.a.createElement(v,{type:"number",onChange:function(e){var n=e.target.value;t=n}})),a.a.createElement(h,{label:"Save",type:"submit"}))})),D=Object(j.b)((function(e){return{balance:e.balance}}),(function(e){return{onSave:function(n){return e(function(e){var n=e.name,t=e.amount,r={id:O.a.generate(),name:n,amount:+t};return{type:S,payload:r}}(n))}}}))((function(e){var n=e.onSave,t=e.balance,r={name:"",amount:0},o=function(e){var n=e.target,t=n.name,a=n.value;"name"===t?r.name=a:r.amount=a};return a.a.createElement(s,{onSubmit:function(e){e.preventDefault();var a=r.name,o=r.amount;return o<=0?y.b.error("Enter correct number!"):a?t<o?y.b.error("You don't have anough money"):(n(r),void e.target.reset()):y.b.error("Enter correct expense name!")}},a.a.createElement(f,{customStyles:"\n  margin-bottom: 16px;  \n"},"Enter expense name",a.a.createElement(v,{type:"text",name:"name",placeholder:"Enter expense name",onChange:o})),a.a.createElement(f,{customStyles:"\n  margin-bottom: 16px;  \n"},"Enter expense amount",a.a.createElement(v,{type:"number",name:"amount",placeholder:"Enter expense amount",onChange:o})),a.a.createElement(h,{label:"Add",type:"submit"}))}));function z(){var e=Object(l.a)(["\n  border-collapse: collapse;\n  text-align: center;\n  width: 100%;\n\n  tr {\n    border-bottom: 1px solid #212121;\n  }\n\n  td,\n  th {\n    padding-top: 8px;\n    padding-bottom: 8px;\n  }\n"]);return z=function(){return e},e}var A=c.a.table(z()),R=function(e){var n=e.expenses,t=e.onRemove;return a.a.createElement(A,null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"Expense name"),a.a.createElement("th",null,"Expense amount"),a.a.createElement("th",null))),a.a.createElement("tbody",null,n.map((function(e){var n=e.id,r=e.name,o=e.amount;return a.a.createElement("tr",{key:n},a.a.createElement("td",null,r),a.a.createElement("td",null,o),a.a.createElement("td",null,a.a.createElement(h,{label:"Delete",name:n,onClick:function(){return t(n)}})))}))))};R.defaultProps={expenses:[]};var T=Object(j.b)((function(e){return{expenses:e.expenses}}),(function(e){return{onRemove:function(n){return e(function(e){return{type:P,payload:e}}(n))}}}))(R);function _(){var e=Object(l.a)(["\n  margin-top: 0;\n  margin-bottom: 0;\n  font-size: 48px;\n"]);return _=function(){return e},e}function N(){var e=Object(l.a)(["\n  margin-top: 0;\n  margin-bottom: 8px;\n  text-transform: uppercase;\n  font-weight: 500;\n  font-size: 24px;\n"]);return N=function(){return e},e}function F(){var e=Object(l.a)(["\n  text-align: center;\n  padding: 8px 24px;\n  color: ",";\n  user-select: none;\n"]);return F=function(){return e},e}var J=c.a.div(F(),(function(e){return e.isPositive?"#388E3C":"#D32F2F"})),X=c.a.p(N()),G=c.a.p(_()),I=function(e){var n=e.label,t=e.value,r=e.isPositive;return a.a.createElement(J,{isPositive:r},a.a.createElement(X,null,n),a.a.createElement(G,null,t,"\xa0$"))};I.defaultProps={label:"",value:0,isPositive:!1};var L=I;function M(){var e=Object(l.a)(["\n  display: inline-flex;\n  justify-content: space-between;\n  align-items: center;\n"]);return M=function(){return e},e}var U=c.a.section(M()),V=function(e){var n=e.budget,t=e.expenses,r=e.setBalance,o=function(e){return e.reduce((function(e,n){return e+n.amount}),0)}(t),u=n-o;return r(u),a.a.createElement(U,null,a.a.createElement(L,{label:"Budget",value:n,isPositive:!0}),a.a.createElement(L,{label:"Expenses",value:o}),a.a.createElement(L,{label:"Balance",value:u,isPositive:u>=0}))};V.defaultProps={budget:0,expences:[]};var Y=Object(j.b)((function(e){return{budget:e.budget,expenses:e.expenses}}),(function(e){return{setBalance:function(n){return e(function(e){return{type:k,payload:e}}(n))}}}))(V);t(46);function $(){var e=Object(l.a)(["\n  display: grid;\n  grid-template-columns: 340px 1fr;\n  align-items: flex-start;\n  grid-gap: 24px;\n  max-width: 960px;\n  padding-left: 16px;\n  padding-right: 16px;\n  margin-left: auto;\n  margin-right: auto;\n"]);return $=function(){return e},e}var q=c.a.div($()),H=function(e){var n=e.expenses;return a.a.createElement(q,null,a.a.createElement(B,null),a.a.createElement(Y,null),a.a.createElement(D,null),n.length>0&&a.a.createElement(T,null),a.a.createElement(y.a,{position:"bottom-right",autoClose:3e3}))};H.defaultProps={expenses:[]};var K=Object(j.b)((function(e){return{expenses:e.expenses}}))(H),Q=t(11),W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case C:return n.payload;default:return e}},Z=t(24),ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0;switch(n.type){case S:return[n.payload].concat(Object(Z.a)(e));case P:return e.filter((function(e){return e.id!==n.payload}));default:return e}},ne=t(23),te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case k:return n.payload;default:return e}},re=Object(Q.combineReducers)({budget:W,expenses:ee,balance:te}),ae=Object(Q.createStore)(re,Object(ne.devToolsEnhancer)());t(47);u.a.render(a.a.createElement(j.a,{store:ae},a.a.createElement(K,null)),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.fd333dcf.chunk.js.map