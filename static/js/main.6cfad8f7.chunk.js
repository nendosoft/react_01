(this.webpackJsonpreact_01=this.webpackJsonpreact_01||[]).push([[0],{162:function(e,t,n){},183:function(e,t,n){"use strict";n.r(t);var r=n(22),a=n(4),i=n(0),o=n.n(i),c=n(13),s=n.n(c),l=n(59),d=n(46),u=n(74),j=n(10),b=Object(u.b)({name:"user",initialState:{users:[],orgCode:""},reducers:{membersGotten:function(e,t){return Object(j.a)(Object(j.a)({},e),{},{users:t.payload.users2,isLoading:!1,error222:null,orgCode:t.payload.orgCode})},membersClear:function(e){return Object(j.a)(Object(j.a)({},e),{},{users:[],isLoading:!1,error222:null})}}}),h=(n(162),n(18)),p=n(8),O=n(33),f=n(122),x=n(90),g=n(76),v=n(249),m=n(130),y=n(17),w=n.n(y),C=n(24),k=n(123),N=n(120),S=n.n(N),q={prefixUrl:"https://api.github.com",timeout:7e3,hooks:{afterResponse:[function(){var e=Object(C.a)(w.a.mark((function e(t,n,r){var a,i,o,c,s;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=Blob,e.t1=JSON,e.t2=S.a,e.next=5,r.json();case 5:return e.t3=e.sent,e.t4=(0,e.t2)(e.t3),e.t5=e.t1.stringify.call(e.t1,e.t4,null,2),e.t6=[e.t5],e.t7={type:"application/json"},a=new e.t0(e.t6,e.t7),i=r.headers,o=r.status,c=r.statusText,s={headers:i,status:o,statusText:c},e.abrupt("return",new Response(a,s));case 14:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}()]}},z=function(){var e=Object(C.a)(w.a.mark((function e(t,n){var r,a,i;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Object(j.a)(Object(j.a)({},q),n),e.next=3,k.a.get("orgs/".concat(t,"/members"),r);case 3:return a=e.sent,e.next=6,a.json();case 6:if(i=e.sent,!i.some((function(e){return!function(e){var t=e;return"string"===typeof(null===t||void 0===t?void 0:t.login)&&"number"===typeof(null===t||void 0===t?void 0:t.id)&&"string"===typeof(null===t||void 0===t?void 0:t.nodeId)&&"string"===typeof(null===t||void 0===t?void 0:t.avatarUrl)&&"string"===typeof(null===t||void 0===t?void 0:t.gravatarId)&&"string"===typeof(null===t||void 0===t?void 0:t.url)&&"string"===typeof(null===t||void 0===t?void 0:t.htmlUrl)&&"string"===typeof(null===t||void 0===t?void 0:t.followersUrl)&&"string"===typeof(null===t||void 0===t?void 0:t.followingUrl)&&"string"===typeof(null===t||void 0===t?void 0:t.gistsUrl)&&"string"===typeof(null===t||void 0===t?void 0:t.starredUrl)&&"string"===typeof(null===t||void 0===t?void 0:t.subscriptionsUrl)&&"string"===typeof(null===t||void 0===t?void 0:t.organizationsUrl)&&"string"===typeof(null===t||void 0===t?void 0:t.reposUrl)&&"string"===typeof(null===t||void 0===t?void 0:t.eventsUrl)&&"string"===typeof(null===t||void 0===t?void 0:t.receivedEventsUrl)&&"string"===typeof(null===t||void 0===t?void 0:t.type)&&"boolean"===typeof(null===t||void 0===t?void 0:t.siteAdmin)}(e)}))){e.next=9;break}throw Error("API type error");case 9:return e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),I=n(125),L=n(5),G=n(9),M=n(239),U=n(238),B=n(189),F=n(97),H=n(96),P=[{field:"id",headerName:"ID",width:140},{field:"url",headerName:"url",width:280},{field:"login",headerName:"login",width:130},{field:"age",headerName:"Age",type:"number",width:90},{field:"fullName",headerName:"Full name",description:"This column has a value getter and is not sortable.",sortable:!1,width:160,valueGetter:function(e){return"".concat(e.getValue("firstName")||""," ").concat(e.getValue("lastName")||"")}}],T=function(e){e.orgCode;var t=e.users,n=void 0===t?[]:t;e.isLoading;return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("div",{style:{height:540},children:Object(a.jsx)(H.a,{rows:n,columns:P,pageSize:5,checkboxSelection:!0,disableColumnMenu:!0})})})};function E(e){return Object(a.jsx)(I.a,Object(j.a)(Object(j.a)({fontSize:"inherit",style:{width:14,height:14}},e),{},{children:Object(a.jsx)("path",{d:"M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 11.023h-11.826q-.375 0-.669.281t-.294.682v0q0 .401.294 .682t.669.281h11.826q.375 0 .669-.281t.294-.682v0q0-.401-.294-.682t-.669-.281z"})}))}function R(e){return Object(a.jsx)(I.a,Object(j.a)(Object(j.a)({fontSize:"inherit",style:{width:14,height:14}},e),{},{children:Object(a.jsx)("path",{d:"M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 12.977h-4.923v4.896q0 .401-.281.682t-.682.281v0q-.375 0-.669-.281t-.294-.682v-4.896h-4.923q-.401 0-.682-.294t-.281-.669v0q0-.401.281-.682t.682-.281h4.923v-4.896q0-.401.294-.682t.669-.281v0q.401 0 .682.281t.281.682v4.896h4.923q.401 0 .682.281t.281.682v0q0 .375-.281.669t-.682.294z"})}))}function V(e){return Object(a.jsx)(I.a,Object(j.a)(Object(j.a)({className:"close",fontSize:"inherit",style:{width:14,height:14}},e),{},{children:Object(a.jsx)("path",{d:"M17.237,3.056H2.93c-0.694,0-1.263,0.568-1.263,1.263v8.837c0,0.694,0.568,1.263,1.263,1.263h4.629v0.879c-0.015,0.086-0.183,0.306-0.273,0.423c-0.223,0.293-0.455,0.592-0.293,0.92c0.07,0.139,0.226,0.303,0.577,0.303h4.819c0.208,0,0.696,0,0.862-0.379c0.162-0.37-0.124-0.682-0.374-0.955c-0.089-0.097-0.231-0.252-0.268-0.328v-0.862h4.629c0.694,0,1.263-0.568,1.263-1.263V4.319C18.5,3.625,17.932,3.056,17.237,3.056 M8.053,16.102C8.232,15.862,8.4,15.597,8.4,15.309v-0.89h3.366v0.89c0,0.303,0.211,0.562,0.419,0.793H8.053z M17.658,13.156c0,0.228-0.193,0.421-0.421,0.421H2.93c-0.228,0-0.421-0.193-0.421-0.421v-1.263h15.149V13.156z M17.658,11.052H2.509V4.319c0-0.228,0.193-0.421,0.421-0.421h14.308c0.228,0,0.421,0.193,0.421,0.421V11.052z"})}))}function A(e){var t=Object(F.useSpring)({from:{opacity:0,transform:"translate3d(20px,0,0)"},to:{opacity:e.in?1:0,transform:"translate3d(".concat(e.in?0:20,"px,0,0)")}});return Object(a.jsx)(F.animated.div,{style:t,children:Object(a.jsx)(B.a,Object(j.a)({},e))})}var D=Object(L.a)((function(e){return Object(v.a)({iconContainer:{"& .close":{opacity:.3}},group:{marginLeft:7,paddingLeft:18,borderLeft:"1px dashed ".concat(Object(G.b)(e.palette.text.primary,.4))}})}))((function(e){return Object(a.jsx)(U.a,Object(j.a)(Object(j.a)({},e),{},{TransitionComponent:A}))})),J=Object(g.a)(Object(v.a)({root:{height:600,flexGrow:1,maxWidth:380,borderRight:"1px solid gray"}})),W=function(e){var t=e.orgCodes,n=void 0===t?[]:t,r=Object(i.useState)(""),o=Object(p.a)(r,2),c=o[0],s=o[1],l=Object(i.useState)(!1),u=Object(p.a)(l,2),h=u[0],O=u[1],f=Object(d.c)((function(e){return e.users})),x=Object(d.b)();Object(i.useEffect)((function(){var e=!1,t=b.actions,n=t.membersGotten,r=t.membersClear;return function(){var t=Object(C.a)(w.a.mark((function t(){var a;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return O(!0),t.prev=1,t.next=4,z(c);case 4:a=t.sent,e||x(n({users2:a,orgCode:c})),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),x(r());case 11:return t.prev=11,O(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[1,8,11,14]])})));return function(){return t.apply(this,arguments)}}()(),function(){e=!0}}),[c,x]);var g=J();return Object(a.jsx)("table",{style:{width:"100%"},children:Object(a.jsx)("tbody",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{style:{width:"20%"},children:Object(a.jsx)(M.a,{className:g.root,defaultExpanded:["1"],defaultCollapseIcon:Object(a.jsx)(E,{}),defaultExpandIcon:Object(a.jsx)(R,{}),defaultEndIcon:Object(a.jsx)(V,{}),children:Object(a.jsxs)(D,{nodeId:"1",label:"Root",onLabelClick:function(){return s("")},children:[Object(a.jsx)(D,{nodeId:"2",label:"Hello",onClick:function(){return Object(a.jsx)(V,{})},onLabelClick:function(){return s("")}}),Object(a.jsx)(D,{nodeId:"3",label:"company",children:n.map((function(e,t){return Object(a.jsx)(D,{nodeId:e,label:e,onClick:function(){return s(e)}},t)}))})]})})}),Object(a.jsx)("td",{style:{width:"80%",position:"relative",top:-28},children:Object(a.jsx)(T,Object(j.a)({},{orgCode:c,users:f,isLoading:h}))})]})})})},Y=(Object(f.a)({typography:{fontFamily:["Noto Sans JP","Lato","\u6e38\u30b4\u30b7\u30c3\u30af Medium","\u6e38\u30b4\u30b7\u30c3\u30af\u4f53","Yu Gothic Medium","YuGothic","\u30d2\u30e9\u30ae\u30ce\u89d2\u30b4 ProN","Hiragino Kaku Gothic ProN","\u30e1\u30a4\u30ea\u30aa","Meiryo","\uff2d\uff33 \uff30\u30b4\u30b7\u30c3\u30af","MS PGothic","sans-serif"].join(",")},palette:{primary:{main:x.a[800]}}}),Object(g.a)((function(e){return Object(v.a)({root:{display:"flex"},toolbar:{paddingRight:24},toolbarIcon:Object(j.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},pageTitle:{marginBottom:e.spacing(1)},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:Object(O.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7)},e.breakpoints.up("sm"),{width:e.spacing(9)}),appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},link:{textDecoration:"none",color:e.palette.text.secondary},test1:{paddingTop:100}})}))),_=function(e){e.children,e.title,Y();var t=o.a.useState(!0),n=Object(p.a)(t,2);n[0],n[1];return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("div",{children:Object(a.jsx)(W,{})})})},K=n(241),X=n(244),Q=n(236),Z=n(240),$=n(242),ee=n(243),te=n(100),ne=function(e,t,n,r){return{name:e,category:t,weight:n,price:r}},re=[ne("\u30c1\u30e7\u30b3\u30ec\u30fc\u30c8","\u304a\u83d3\u5b50",100,120),ne("\u30b1\u30fc\u30ad","\u304a\u83d3\u5b50",400,480),ne("\u308a\u3093\u3054","\u30d5\u30eb\u30fc\u30c4",500,360),ne("\u30d0\u30ca\u30ca","\u30d5\u30eb\u30fc\u30c4",200,300),ne("\u307f\u304b\u3093","\u30d5\u30eb\u30fc\u30c4",250,180)],ae=Object(g.a)({table:{minWidth:650}}),ie=function(){var e=ae();return Object(a.jsx)(_,{title:"\u5546\u54c1\u30da\u30fc\u30b8",children:Object(a.jsx)(Z.a,{component:te.a,children:Object(a.jsxs)(K.a,{className:e.table,"aria-label":"simple table",children:[Object(a.jsx)($.a,{children:Object(a.jsxs)(ee.a,{children:[Object(a.jsx)(Q.a,{children:"\u5546\u54c1\u540d"}),Object(a.jsx)(Q.a,{align:"right",children:"\u30ab\u30c6\u30b4\u30ea\u30fc"}),Object(a.jsx)(Q.a,{align:"right",children:"\u91cd\u91cf(g)"}),Object(a.jsx)(Q.a,{align:"right",children:"\u4fa1\u683c(\u5186)"})]})}),Object(a.jsx)(X.a,{children:re.map((function(e){return Object(a.jsxs)(ee.a,{children:[Object(a.jsx)(Q.a,{component:"th",scope:"row",children:e.name}),Object(a.jsx)(Q.a,{align:"right",children:e.category}),Object(a.jsx)(Q.a,{align:"right",children:e.weight}),Object(a.jsx)(Q.a,{align:"right",children:e.price})]},e.name)}))})]})})})},oe=n(245),ce=n(237),se=n(63),le=Object(g.a)((function(e){return Object(v.a)({root:{flexGrow:1},toolbar:{minHeight:"10px"},title:{flexGrow:1}})}));function de(){var e=le();return Object(a.jsx)("div",{className:e.root,children:Object(a.jsx)(oe.a,{position:"static",children:Object(a.jsxs)(ce.a,{className:e.toolbar,children:[Object(a.jsx)(m.a,{variant:"h6",className:e.title,children:"Header"}),Object(a.jsx)(se.a,{color:"inherit",children:"Login"})]})})})}var ue=n(124),je=n(248),be=n(246),he=n(247);function pe(e){var t=e.children,n=e.value,r=e.index,i=Object(ue.a)(e,["children","value","index"]);return Object(a.jsx)("div",Object(j.a)(Object(j.a)({role:"tabpanel",hidden:n!==r,id:"scrollable-auto-tabpanel-".concat(r),"aria-labelledby":"scrollable-auto-tab-".concat(r)},i),{},{children:n===r&&Object(a.jsx)(he.a,{p:3,style:{height:160,border:"1px solid gray"},children:Object(a.jsx)(m.a,{children:t})})}))}function Oe(e){return{id:"scrollable-auto-tab-".concat(e),"aria-controls":"scrollable-auto-tabpanel-".concat(e)}}var fe=Object(g.a)((function(e){return{root:{flexGrow:1,width:"100%",backgroundColor:e.palette.background.paper},TabPanel:{}}}));function xe(){var e=fe(),t=o.a.useState(0),n=Object(p.a)(t,2),r=n[0],i=n[1];return Object(a.jsxs)("div",{className:e.root,children:[Object(a.jsx)(oe.a,{position:"static",color:"default",children:Object(a.jsxs)(je.a,{value:r,onChange:function(e,t){i(t)},indicatorColor:"primary",textColor:"primary",variant:"scrollable",scrollButtons:"auto","aria-label":"scrollable auto tabs example",children:[Object(a.jsx)(be.a,Object(j.a)({label:"\u30a2\u30e9\u30fc\u30e0\u8868\u793a"},Oe(0))),Object(a.jsx)(be.a,Object(j.a)({label:"\u72b6\u614b\u8868\u793a"},Oe(1))),Object(a.jsx)(be.a,Object(j.a)({label:"\u30e6\u30fc\u30b6\u30fc\u7ba1\u7406"},Oe(2))),Object(a.jsx)(be.a,Object(j.a)({label:"\u51e6\u7406\u30ed\u30b0"},Oe(3)))]})}),Object(a.jsx)(pe,{value:r,index:0,children:"\u30a2\u30e9\u30fc\u30e0\u8868\u793a"}),Object(a.jsx)(pe,{value:r,index:1,children:"\u72b6\u614b\u8868\u793a"}),Object(a.jsx)(pe,{value:r,index:2,children:"\u30e6\u30fc\u30b6\u30fc\u7ba1\u7406"}),Object(a.jsx)(pe,{value:r,index:3,children:"\u51e6\u7406\u30ed\u30b0"})]})}var ge=["airbnb","apple","facebook","google","microsoft","mozilla","netflix","netlify"],ve=function(){return Object(a.jsx)(W,{orgCodes:ge})},me=Object(g.a)((function(e){return Object(v.a)({root:{flexGrow:1,position:"fixed",width:"100%",height:"36px",bottom:"0",textAlign:"center",backgroundColor:"#aaaaaa",color:"white",zIndex:1e3},toolbar:{minHeight:"10px"},title:{flexGrow:1}})}));function ye(){var e=me();return Object(a.jsx)("div",{className:e.root,children:Object(a.jsx)(ce.a,{className:e.toolbar,children:Object(a.jsx)(m.a,{variant:"h6",className:e.title,children:"Footer"})})})}var we=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(de,{}),Object(a.jsx)(xe,{}),Object(a.jsx)(ve,{}),Object(a.jsx)(ye,{})]})},Ce=function(e){var t=Object(i.useState)(!1),n=Object(p.a)(t,2),r=n[0],a=n[1],o=Object(d.c)((function(e){return e.users})),c=Object(d.b)();return Object(i.useEffect)((function(){var t=!1,n=b.actions.membersGotten;return function(){var r=Object(C.a)(w.a.mark((function r(){var i;return w.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a(!0),r.prev=1,r.next=4,z(e);case 4:i=r.sent,t||c(n({users2:i,orgCode:e})),r.next=11;break;case 8:throw r.prev=8,r.t0=r.catch(1),new Error("organization '".concat(e,"' not exists"));case 11:return r.prev=11,a(!1),r.finish(11);case 14:case"end":return r.stop()}}),r,null,[[1,8,11,14]])})));return function(){return r.apply(this,arguments)}}()(),function(){t=!0}}),[e,c]),{users:o,isLoading:r}},ke=function(){var e=Object(h.f)().orgCode,t=void 0===e?"":e;if(t){var n=Ce(t),r=n.users,i=n.isLoading;return Object(a.jsx)(T,Object(j.a)({},{orgCode:t,users:r,isLoading:i}))}return Object(a.jsx)(T,{orgCode:"zero",users:[],isLoading:!1})},Ne=function(){return Object(a.jsx)("div",{children:"404 Not Found"})},Se=function(){return Object(a.jsx)(l.a,{children:Object(a.jsxs)(h.c,{children:[Object(a.jsx)(h.a,{path:"/",component:we,exact:!0}),Object(a.jsx)(h.a,{path:"/:orgCode/members",component:ke}),Object(a.jsx)(h.a,{path:"/products",component:ie,exact:!0}),Object(a.jsx)(h.a,{component:Ne})]})})},qe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,252)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),r(e),a(e),i(e),o(e)}))},ze=Object(u.a)({reducer:b.reducer,middleware:Object(r.a)(Object(u.c)({thunk:!1}))});s.a.render(Object(a.jsx)(d.a,{store:ze,children:Object(a.jsx)(l.a,{children:Object(a.jsx)(Se,{})})}),document.getElementById("root")),qe()}},[[183,1,2]]]);
//# sourceMappingURL=main.6cfad8f7.chunk.js.map