(this.webpackJsonpestimation=this.webpackJsonpestimation||[]).push([[0],{10:function(t,e,n){t.exports={background:"background_background__28otj",pi:"background_pi__2_F0F"}},11:function(t,e,n){t.exports={square:"estimate_square__1UN3W",circle:"estimate_circle__1ltCi"}},18:function(t,e,n){},20:function(t,e,n){"use strict";n.r(e);var a=n(0),i=n.n(a),r=n(12),c=n.n(r),o=(n(18),n(5)),s=n(4),d=n(22),h=n(1),u=function(t){var e=t.size,n=t.c,i=t.start,r=100*Math.random()+1,c=100*Math.random()+1,u=20*Math.random()+1,j=Object(a.useState)(Math.random()),b=Object(s.a)(j,1)[0],l=Object(a.useState)({x:!0,y:!0}),x=Object(s.a)(l,2),O=x[0],p=x[1],y=Object(a.useState)({x:Math.random()>.5?r:-1*r,y:Math.random()>.5?c:-1*c,r:Math.random()>.5?u:-1*u}),m=Object(s.a)(y,2),g=m[0],f=m[1],w=Object(a.useState)({x:i.x,y:i.y,r:i.r}),M=Object(s.a)(w,2),v=M[0],S=M[1],_={animate:{scale:1,x:v.x,y:v.y,opacity:b,rotate:v.r,transition:{duration:1,ease:"linear"}}};return Object(h.jsx)(d.a.p,{style:{fontSize:e+"px"},className:n,animate:"animate",variants:_,transition:{ease:"linear"},onAnimationComplete:function(){(v.x>window.innerWidth||v.x<0)&&O.x&&(p(Object(o.a)(Object(o.a)({},O),{},{x:!1})),f({x:-1*g.x,y:g.y,r:g.r})),(v.y>window.innerHeight||v.y<0)&&O.y&&(p(Object(o.a)(Object(o.a)({},O),{},{y:!1})),f({x:g.x,y:-1*g.y,r:g.r})),v.x<window.innerWidth&&v.x>0&&!O.x&&p(Object(o.a)(Object(o.a)({},O),{},{x:!0})),v.y<window.innerHeight&&v.y>0&&!O.y&&p(Object(o.a)(Object(o.a)({},O),{},{y:!0})),S({x:v.x+g.x,y:v.y+g.y,r:v.r+g.r})},children:"\u03c0"})},j=n(10),b=n.n(j),l=function(){for(var t=Math.round(100*Math.random())+15,e=[],n=0;n<t;n++){var a={size:Math.round(45*Math.random())+10,start:{x:Math.round(Math.random()*window.innerWidth)+1,y:Math.round(Math.random()*window.innerHeight)+1,r:360*Math.random()}};e.push(a)}return Object(h.jsx)("div",{className:b.a.background,children:e.map((function(t,e){return Object(h.jsx)(u,{size:t.size,c:b.a.pi,start:t.start},e)}))})},x=n(8),O=n(11),p=n.n(O),y=function(t){var e=t.x,n=t.y,a=t.delay,i={x:e,y:n,opacity:0,scale:100-Math.pow(a,.6)},r={opacity:1,scale:1,x:e,y:n,transition:{duration:.5,ease:a<500?"easeInOut":"",type:a<500?"spring":"",stiffness:a<500?150:0,delay:Math.log(a,10)}};return Object(h.jsx)(d.a.div,{style:{position:"absolute",height:"10px",width:"10px",backgroundColor:"white",borderRadius:"50%"},initial:"hidden",animate:"visible",variants:{hidden:i,visible:r}})},m=function(){var t=5e3,e=Object(a.useState)(0),n=Object(s.a)(e,2),i=n[0],r=n[1],c=Object(a.useState)(0),o=Object(s.a)(c,2),d=o[0],u=o[1],j=Object(a.useState)(0),b=Object(s.a)(j,2),l=b[0],O=b[1],m=Math.round(.66*Math.min(window.innerWidth,window.innerHeight)),g=Object(a.useState)([]),f=Object(s.a)(g,2),w=f[0],M=f[1],v=Object(a.useState)(0),S=Object(s.a)(v,2),_=S[0],k=S[1],C=function(t){var e=t.filter((function(t){var e=Math.sqrt(Math.pow(t.x-m/2,2)+Math.pow(t.y-m/2,2));return console.log(e),e<=m/2})),n=e.length/t.length*4;u(e.length),O(t.length),r(n)};return Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{style:{width:"100%",textAlign:"center",padding:"1% 0 0 0"},children:[Object(h.jsx)("h1",{style:{margin:0},children:"Estimating Pi!"}),Object(h.jsxs)("p",{children:["Pi estimate: 4*(",d," / ",l,") = ",i]}),Object(h.jsx)("p",{children:"How? 4 * (number of points in circle / total number of points)"}),Object(h.jsx)("button",{onClick:function(){!function(){if(w.length<=t){var e=Math.random()*m,n=Math.random()*m,a=[].concat(Object(x.a)(w),[{x:e,y:n}]);M(a),C(a)}}()},children:"Add point"}),Object(h.jsxs)("p",{children:["Set many points:"," ",Object(h.jsx)("input",{type:"number",onChange:function(e){!function(e){e.target.value>0&&e.target.value<=t&&k(e.target.value)}(e)}})," ",Object(h.jsx)("button",{onClick:function(){return function(){for(var e=[],n=0;n<_;n++){var a=Math.random()*m,i=Math.random()*m;e.push({x:a,y:i})}e.length+w.length<=t?(M([].concat(Object(x.a)(w),e)),C([].concat(Object(x.a)(w),e))):(M([].concat(e)),C(e))}()},children:"Set!"})]}),Object(h.jsxs)("p",{children:["Max ",t," points |\xa0could slow your browser"]})]}),Object(h.jsxs)("div",{className:p.a.square,style:{width:m+"px",height:m+"px",backgroundColor:"black",border:"4px solid white",margin:"7.5% auto"},children:[Object(h.jsx)("div",{className:p.a.circle,style:{width:m+"px",height:m+"px"}}),w.map((function(t,e){return Object(h.jsx)(y,{x:t.x,y:t.y,delay:e},e)}))]})]})};var g=function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(l,{}),Object(h.jsx)(m,{})]})},f=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(e){var n=e.getCLS,a=e.getFID,i=e.getFCP,r=e.getLCP,c=e.getTTFB;n(t),a(t),i(t),r(t),c(t)}))};c.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(g,{})}),document.getElementById("root")),f()}},[[20,1,2]]]);
//# sourceMappingURL=main.572e9849.chunk.js.map