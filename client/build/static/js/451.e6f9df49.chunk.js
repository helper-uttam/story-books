"use strict";(self.webpackChunkMERN=self.webpackChunkMERN||[]).push([[451],{5451:function(e,t,s){s.r(t),s.d(t,{default:function(){return m}});var i=s(8152),n="Dashboard_container__Hs1ve",o="Dashboard_item__gNJr1",l="Dashboard_loading__+oEvi",r=s(4569),c=s.n(r),a=s(2791),d=s(1296),u={story:"story_story__UokJx",title:"story_title__lV5BX",heading:"story_heading__daTBk",description:"story_description__Y4OBH",btn:"story_btn__1LPSN",delete:"story_delete__nYmNj",edit:"story_edit__7YJDk",like:"story_like__ebgvx",buttons:"story_buttons__gqiRO"},h=s(9e3),p=s(184),g=function(e){var t=(0,a.useState)(!1),s=(0,i.Z)(t,2),n=s[0],o=s[1],l=(0,a.useState)(""),r=(0,i.Z)(l,2),g=r[0],m=r[1],v=(0,a.useState)(!1),f=(0,i.Z)(v,2),b=f[0],k=f[1],x=(0,a.useState)({email:""}),_=(0,i.Z)(x,2),j=_[0],y=_[1],w=(0,a.useState)(!1),N=(0,i.Z)(w,2),S=N[0],C=N[1],Z=(0,a.useState)(""),E=(0,i.Z)(Z,2),B=E[0],L=E[1];(0,a.useEffect)((function(){y({email:localStorage.getItem("email")})}),[b,S]);return(0,p.jsxs)("div",{className:u.story,children:[!n&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)("div",{className:u.title,children:[(0,p.jsx)("h3",{className:u.heading,children:e.title}),(0,p.jsx)("button",{style:{border:"none",borderRadius:"20px",backgroundColor:"#dcdde1"},onClick:function(t){var s=new SpeechSynthesisUtterance;s.text=e.description,window.speechSynthesis.speak(s)},children:(0,p.jsx)(h.IUS,{})})]}),(0,p.jsx)("div",{className:u.description,children:(0,p.jsx)("p",{children:e.description})}),(0,p.jsxs)("div",{className:u.btn,children:[(0,p.jsxs)("button",{id:e.id,type:"submit",value:e.id,className:u.like,onClick:function(e){var t=e.target.id;if(b)c().post("https://story-books-service.herokuapp.com/stories/dislike/"+t,j).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)})),k(!b);else{console.log("like");var s=localStorage.getItem("email");y(s),c().post("https://story-books-service.herokuapp.com/stories/like/"+t,j).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)})),k(!b)}},children:[(0,p.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:b?"#fd79a8":"#bdc3c7",className:"bi bi-star-fill",id:e.id,viewBox:"0 0 16 16",children:(0,p.jsx)("path",{id:e.id,d:"M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"})}),(0,p.jsx)("br",{}),(0,p.jsxs)("p",{children:[e.likes," likes"]})]}),(0,p.jsx)("button",{className:u.delete,name:"title",value:e.id,type:"submit",onClick:function(e){var t=e.target.value;c().delete("https://story-books-service.herokuapp.com/stories/"+t).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)})),C(!0)},children:"Delete"}),(0,p.jsx)("button",{className:u.edit,name:"description",value:e.id,type:"submit",onClick:function(e){m(e.target.value),o(!0)},children:"Edit"}),(0,p.jsxs)("div",{className:u.whatsaap,children:[(0,p.jsx)("input",{type:"text",name:"whatsaap number",placeholder:"eg: 916207000077",id:"number",defaultValue:B,onChange:function(e){var t=e.target.value;if(12===t.length)return L(t),void console.log(B)}}),(0,p.jsx)("button",{className:u.edit,value:e.description,onClick:function(e){e.target.value&&B&&c().post("https://story-books-service.herokuapp.com/"+B,{story:e.target.value}).then((function(e){console.log(e),document.getElementById("number").value=""})).catch((function(e){return console.log(e)}))},children:(0,p.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-whatsapp",viewBox:"0 0 16 16",children:(0,p.jsx)("path",{d:"M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"})})})]}),(0,p.jsxs)("p",{style:{color:"gray"},children:[" Published on ",e.date]})]})]}),n&&(0,p.jsx)(d.Z,{id:g,renderForm:o})]})},m=function(){var e=(0,a.useState)([{title:"",description:"",likes:"",date:""}]),t=(0,i.Z)(e,2),s=t[0],r=t[1],d=(0,a.useState)(!1),u=(0,i.Z)(d,2),h=u[0],m=u[1],v=(0,a.useState)(!1),f=(0,i.Z)(v,2),b=(f[0],f[1]);return(0,a.useEffect)((function(){c().get("https://story-books-service.herokuapp.com/stories/").then((function(e){return e.data})).then((function(e){r(e),m(!0)})).catch((function(e){return console.log(e)})),b(!0)}),[s]),h?(0,p.jsx)("div",{className:n,children:s.sort((function(e,t){return t.likes.length-e.likes.length})).map((function(e,t){var s=e.likes.toString().split(",");return(0,p.jsx)("div",{className:o,children:(0,p.jsx)(g,{id:e._id,title:e.title,description:e.description,likes:s.length,date:e.date})},t)}))}):(0,p.jsx)("div",{className:l,children:(0,p.jsx)("h1",{children:"Loading..."})})}}}]);
//# sourceMappingURL=451.e6f9df49.chunk.js.map