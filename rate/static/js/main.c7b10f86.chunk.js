(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{256:function(e,t,a){e.exports=a(547)},319:function(e,t,a){},547:function(e,t,a){"use strict";a.r(t);a(257),a(259);var n=a(0),r=a.n(n),o=a(50),c=a.n(o),l=a(82),s=a.n(l),i=a(118),u=a(119),p=a(123),d=a(120),m=a(124),f=a(249),O=a(62),y=(a(264),a(239)),E=(a(548),a(182)),h=(a(311),a(52)),b=(a(313),a(240)),g=a(45),j=a(122),w=function(e){var t={};return window.location.search.replace("?","").split("&").map(function(e){return e.split("=")}).forEach(function(e){return t[e[0]]=e[1]}),t[e]},A="https://vkmacro.ru/api",S=(a(319),a(93)),v=a(20),_=a(18),L=a.n(_),R=a(35),G=a(94),U=a.n(G),I=new(a(252).a),x=function(e,t){var a=I.get("token");return t.params=Object(v.a)({},t.params),U.a.defaults.headers.common.Authorization="Bearer "+a,U.a.get(e,t)},k=(a(208),{user:{},myAccount:null,group:{},followers:[],followers_count:[],followers_loading:!1}),P=function(e,t){return function(){var a=Object(R.a)(L.a.mark(function a(n,r){return L.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(null!=e&&e>0){a.next=4;break}return n({type:"FOLLOWERS_COUNT",payload:0}),n({type:"FOLLOWERS",payload:[]}),a.abrupt("return");case 4:n({type:"FOLLOWERS_LOADING",payload:!0}),x(A+"/followers/GetFollowersFilter",{params:{groupId:e,sorter:t}}).then(function(e){(e=e.data).isSuccess&&(n({type:"FOLLOWERS_COUNT",payload:e.object.count}),n({type:"FOLLOWERS",payload:e.object.items}),n({type:"FOLLOWERS_LOADING",payload:!1}))});case 6:case"end":return a.stop()}},a)}));return function(e,t){return a.apply(this,arguments)}}()},F=function(e){return function(){var t=Object(R.a)(L.a.mark(function t(a,n){return L.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:x(A+"/group/GetGroupById",{params:{socialId:e}}).then(function(e){(e=e.data).isSuccess?a({type:"SELECTGROUP",payload:e.object}):a({type:"SELECTGROUP",payload:null})}).catch(function(e){console.log(e),a({type:"SELECTGROUP",payload:null})});case 1:case"end":return t.stop()}},t)}));return function(e,a){return t.apply(this,arguments)}}()},W=function(e,t){return function(){var a=Object(R.a)(L.a.mark(function a(n,r){return L.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(t){a.next=2;break}return a.abrupt("return");case 2:x(A+"/followers/GetFollowersFilter",{params:{groupId:e,followerId:t}}).then(function(e){(e=e.data).isSuccess?e.object.count>0&&n({type:"MYFOLLOWER",payload:e.object.items[0]}):n({type:"MYFOLLOWER",payload:null})});case 3:case"end":return a.stop()}},a)}));return function(e,t){return a.apply(this,arguments)}}()},N=function(){return function(){var e=Object(R.a)(L.a.mark(function e(t,a){return L.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:s.a.subscribe(function(e){switch(e.detail.type){case"VKWebAppGetUserInfoResult":t({type:"USER",payload:{fetchedUser:e.detail.data}});break;default:console.log(e.detail.type)}});case 1:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}()},T=function(){return function(){var e=Object(R.a)(L.a.mark(function e(t,a){return L.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:s.a.send("VKWebAppGetUserInfo",{});case 1:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}()},C=function(e){function t(){return Object(i.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=w("vk_group_id"),t=w("vk_user_id");this.props.regVKApp(),this.props.vkWebAppGetUserInfo(),this.props.getFollowers(e),this.props.getGroupById(e),this.props.getFollowerById(e,t)}},{key:"render",value:function(){var e=this.props,t=e.followers,a=e.group,n=e.myAccount,o=e.user;return r.a.createElement("div",null,r.a.createElement(b.a,{mode:"dark"},"\u0420\u0435\u0439\u0442\u0438\u043d\u0433"),a?r.a.createElement("div",null,r.a.createElement("h2",{style:{textAlign:"center"}}),o.first_name&&r.a.createElement(h.a,{full:!0},r.a.createElement(h.a.Header,{title:"".concat(o.first_name," ").concat(o.last_name),thumb:"".concat(o.photo_100),thumbStyle:{"border-radius":"50%",width:"50px"},extra:r.a.createElement("div",{style:{float:"right"},class:"am-card-header-content"},r.a.createElement("img",{src:"https://img.icons8.com/color/32/000000/coins.png"}),100)}),r.a.createElement(h.a.Body,null,n?r.a.createElement(E.a,{className:"rate",columnNum:4,data:[{text:101},{icon:"https://img.icons8.com/color/96/000000/filled-like.png",text:0},{icon:"https://img.icons8.com/color/96/000000/filled-topic.png",text:0},{icon:"https://img.icons8.com/color/96/000000/undo.png",text:0}],activeStyle:!1}):r.a.createElement("h3",{style:{textAlign:"center"}},"\u041d\u0435\u0442 \u0430\u043a\u0442\u0438\u0432\u043d\u044b\u0445 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439"))),r.a.createElement("h2",{style:{textAlign:"center"}},"\u0413\u0440\u0443\u043f\u043f\u0430"),r.a.createElement(h.a,{full:!0},r.a.createElement(h.a.Header,{title:a.name,thumb:a.photo100,thumbStyle:{"border-radius":"50%"},extra:r.a.createElement("div",{style:{float:"right"},class:"am-card-header-content"},r.a.createElement("img",{src:"https://img.icons8.com/color/32/000000/coins.png"}),100)})),r.a.createElement("h2",{style:{textAlign:"center"}},"\u0420\u0435\u0439\u0442\u0438\u043d\u0433 \u043f\u043e\u0434\u043f\u0438\u0441\u0447\u0438\u043a\u043e\u0432"),t.map(function(e,t){return r.a.createElement("div",null,r.a.createElement(y.a,{size:"sm"}),r.a.createElement(h.a,{full:!0},r.a.createElement(h.a.Header,{title:e.name,thumb:e.photo100,thumbStyle:{"border-radius":"50%",width:"50px"},extra:r.a.createElement("div",{style:{float:"right"},class:"am-card-header-content"},r.a.createElement("img",{src:"https://img.icons8.com/color/32/000000/coins.png"}),e.balls)}),r.a.createElement(h.a.Body,null,r.a.createElement(E.a,{className:"rate",columnNum:4,data:[{text:e.num},{icon:"https://img.icons8.com/color/96/000000/filled-like.png",text:e.likes},{icon:"https://img.icons8.com/color/96/000000/filled-topic.png",text:e.comments},{icon:"https://img.icons8.com/color/96/000000/undo.png",text:e.reposts}],activeStyle:!1}))))})):r.a.createElement("h1",{style:{paddingTop:200,"text-align":"center"}},"\u041d\u0435\u0442 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043e \u0434\u0430\u043d\u043d\u043e\u0439 \u0433\u0440\u0443\u043f\u043f\u0435"))}}]),t}(n.Component);var B=Object(j.b)(function(e){return{followers:e.ratePage.followers,group:e.ratePage.group,myAccount:e.ratePage.myAccount,user:e.ratePage.user}},function(e){return Object(g.bindActionCreators)({getFollowers:P,getGroupById:F,getFollowerById:W,regVKApp:N,vkWebAppGetUserInfo:T},e)})(C),D=(a(549),{user:{},user_loading:!1,groups:[],groups_loading:!1,actions:[],actions_count:0,actions_loading:!1,statistic:[]}),K=Object(g.combineReducers)({userPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USERPAGE_USER":return Object(v.a)({},e,{user:Object(v.a)({},t.payload)});case"USERPAGE_USER_LOADING":return Object(v.a)({},e,{user_loading:t.payload});case"USERPAGE_GROUPS":return Object(v.a)({},e,{groups:Object(S.a)(t.payload)});case"USERPAGE_GROUPS_LOADING":return Object(v.a)({},e,{groups_loading:t.payload});case"USERPAGE_ACTIONS":return Object(v.a)({},e,{actions:Object(S.a)(t.payload)});case"USERPAGE_ACTION_UPDATE":return Object(v.a)({},e,{actions:e.actions.map(function(e){return e.followersGroupActionId==t.payload.followersGroupActionId?Object(v.a)({},e,{isAddBalls:t.payload.isAddBalls}):e})});case"USERPAGE_COUNT":return Object(v.a)({},e,{actions_count:t.payload});case"USERPAGE_ACTIONS_LOADING":return Object(v.a)({},e,{actions_loading:t.payload});case"USERPAGE_USER_STATISTIC":return Object(v.a)({},e,{statistic:t.payload});default:return e}},ratePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SELECTGROUP":return Object(v.a)({},e,{group:t.payload});case"FOLLOWERS":return Object(v.a)({},e,{followers:Object(S.a)(t.payload)});case"FOLLOWERS_COUNT":return Object(v.a)({},e,{followers_count:t.payload});case"FOLLOWERS_LOADING":return Object(v.a)({},e,{followers_loading:t.payload});case"MYFOLLOWER":return Object(v.a)({},e,{myAccount:t.payload});case"USER":return Object(v.a)({},e,{user:t.payload});default:return e}}}),M=a(247),V=a(248),H=Object(g.createStore)(K,Object(M.composeWithDevTools)(Object(g.applyMiddleware)(V.a))),Y=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).state={activePanel:"home",fetchedUser:null},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(f.a,null,r.a.createElement(j.a,{store:H},r.a.createElement(O.c,null,r.a.createElement(O.a,{path:"/",component:B}))))}}]),t}(r.a.Component);s.a.send("VKWebAppInit",{}),c.a.render(r.a.createElement(Y,null),document.getElementById("root"))}},[[256,1,2]]]);
//# sourceMappingURL=main.c7b10f86.chunk.js.map