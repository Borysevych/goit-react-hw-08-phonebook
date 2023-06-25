"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[684],{684:function(n,e,t){t.r(e),t.d(e,{default:function(){return K}});var r,a,o,i,s,c,l,u,d=t(9439),p=t(168),m=t(7691),x=m.ZP.div(r||(r=(0,p.Z)(["\n  margin-top: 30px;\n"]))),h=m.ZP.h3(a||(a=(0,p.Z)(["\n  margin-top: 50px;\n  font-size: 20px;\n  text-align: center;\n"]))),f=m.ZP.div(o||(o=(0,p.Z)(["\n  padding: 15px;\n  box-shadow: rgb(188 186 195) 0px 2px 10px 1px;\n  margin-bottom: 30px;\n"]))),Z=t(5218),b=t(4942),v=t(1413),j=t(4281),g=t(2791),C=m.ZP.form(i||(i=(0,p.Z)(["\n\n"]))),y=m.ZP.label(s||(s=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 15px;\n"]))),P=m.ZP.input(c||(c=(0,p.Z)(["\n  border: 1px solid #d3d3d3;\n  cursor: pointer;\n  margin-top: 5px;\n"]))),w=t(184);function k(n){var e=n.onData,t={name:"",number:""},r=(0,g.useState)((0,v.Z)({},t)),a=(0,d.Z)(r,2),o=a[0],i=a[1],s=o.name,c=o.number,l=function(n){var e=n.target,t=e.name,r=e.value;i((function(n){return(0,v.Z)((0,v.Z)({},n),{},(0,b.Z)({},t,r))}))};return(0,w.jsxs)(C,{onSubmit:function(n){n.preventDefault(),e((0,v.Z)({},o)),i((0,v.Z)({},t))},children:[(0,w.jsxs)(y,{children:["Name",(0,w.jsx)(P,{type:"text",name:"name",value:s,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,placeholder:" enter name",onChange:l})]}),(0,w.jsxs)(y,{children:["Phone number",(0,w.jsx)(P,{type:"tel",name:"number",value:c,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,placeholder:" enter number",onChange:l})]}),(0,w.jsx)(j.Z,{variant:"contained",size:"small",type:"submit",disabled:!s||!c,children:"Add contact"})]})}var z,A,D=m.ZP.ul(l||(l=(0,p.Z)(["\n  margin-top: 25px;\n"]))),F=m.ZP.li(u||(u=(0,p.Z)(["\n  margin-left: 15px;\n  margin-top: 10px;\n"]))),L=function(n){var e=n.contacts,t=n.onDeleteContact;return(0,w.jsx)(D,{children:e.map((function(n){var e=n.id,r=n.name,a=n.number;return(0,w.jsxs)(F,{children:[(0,w.jsxs)("span",{children:[r,": "]}),(0,w.jsx)("span",{children:a}),(0,w.jsx)(j.Z,{variant:"contained",size:"small",type:"button",onClick:function(){return t(e)},children:"Delete"})]},e)}))})},_=m.ZP.label(z||(z=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 15px;\n"]))),q=m.ZP.input(A||(A=(0,p.Z)(["\n  border: 1px solid #d3d3d3;\n  cursor: pointer;\n  margin-top: 5px;\n"]))),I=function(n){var e=n.value,t=n.onChangeFilter;return(0,w.jsxs)(_,{children:["Find contacts by name",(0,w.jsx)(q,{type:"text",value:e,onChange:t,placeholder:" enter contact"})]})},N=t(4808),S=function(n){return n.filter},B=function(n){var e=n.contacts,t=n.filter;return t?e.items.filter((function(n){return n.name.toLowerCase().includes(t.toLowerCase())})):e.items},E=t(9434),J=t(1921),K=function(){var n=function(){var n=(0,E.v9)(S),e=(0,E.I0)();return[n,function(n){var t=n.target;e((0,N.T)(t.value))}]}(),e=(0,d.Z)(n,2),t=e[0],r=e[1],a=function(){var n=(0,E.v9)(B),e=(0,E.I0)();return(0,g.useEffect)((function(){e((0,J.yF)())}),[e]),[n,function(t){n.find((function(n){return n.name.toLocaleLowerCase()===t.name.toLocaleLowerCase()}))?Z.Am.error("".concat(t.name," is in your Contacts")):e((0,J.uK)(t))},function(n){e((0,J.zY)(n))}]}(),o=(0,d.Z)(a,3),i=o[0],s=o[1],c=o[2];return(0,w.jsxs)(x,{children:[(0,w.jsxs)(f,{children:[(0,w.jsx)("h2",{children:"Phonebook"}),(0,w.jsx)(k,{onData:s})]}),(0,w.jsxs)(f,{children:[(0,w.jsx)("h2",{children:"Contacts"}),(0,w.jsx)(I,{value:t,onChangeFilter:r}),i.length>0?(0,w.jsx)(w.Fragment,{children:(0,w.jsx)(L,{contacts:i,onDeleteContact:c})}):(0,w.jsxs)(h,{children:["Phone book is empty! ",(0,w.jsx)("br",{})," Add your contacts."]}),(0,w.jsx)(Z.x7,{position:"top-center",reverseOrder:!1})]})]})}}}]);
//# sourceMappingURL=684.53677c47.chunk.js.map