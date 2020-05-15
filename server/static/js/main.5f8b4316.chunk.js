(this["webpackJsonpreact-application"]=this["webpackJsonpreact-application"]||[]).push([[0],{15:function(e,t,a){},25:function(e,t,a){},38:function(e,t,a){},42:function(e,t,a){e.exports=a.p+"static/media/worldclubdome.a611bcff.jpg"},43:function(e,t,a){e.exports=a.p+"static/media/eintracht.f30f551e.jpg"},44:function(e,t,a){e.exports=a.p+"static/media/Logo.008bf3c6.svg"},46:function(e,t,a){e.exports=a(82)},51:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(39),l=a.n(c),s=(a(51),a(6)),o=a(13),i=a(2),u=a.n(i),p=a(8),m=a(3),_=Object(n.createContext)(),d=a(22),E=a(1),v=function(e,t){switch(t.type){case"ADD_TRIP":return Object(E.a)(Object(E.a)({},e),{},{trips:[].concat(Object(d.a)(e.trips),[t.payload])});case"FILTER_TRIPS":return Object(E.a)(Object(E.a)({},e),{},{filtered:e.trips.filter((function(e){var a=new RegExp("".concat(t.payload),"gi");return e.journey_text.match(a)}))});case"DELETE_TRIP":return Object(E.a)(Object(E.a)({},e),{},{userTrips:e.userTrips.filter((function(e){return e.journey_id!==t.payload}))});case"LOAD_TRIPS":return Object(E.a)(Object(E.a)({},e),{},{trips:t.payload,loading:!1});case"USER_TRIPS":return Object(E.a)(Object(E.a)({},e),{},{userTrips:t.payload,loading:!1});case"CLEAR_FILTER":return Object(E.a)(Object(E.a)({},e),{},{filtered:null});case"SET_LOADING":return Object(E.a)(Object(E.a)({},e),{},{loading:!0});default:return{state:e}}},f=a(5),h=a.n(f),y=function(e){var t=Object(n.useReducer)(v,{trips:[],userTrips:[],filtered:null,loading:!1,errors:null}),a=Object(m.a)(t,2),c=a[0],l=a[1],s=function(){var e=Object(p.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{"Content-Type":"application/json"}},e.prev=1,e.next=4,h.a.post("/api/trip",t,a);case 4:e.sent,l({type:"ADD_TRIP",payload:t}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),l({type:"LOAD_ERROR"});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=Object(p.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E(),e.prev=1,e.next=4,h.a.get("/api/trip_event",{params:{id:t}});case 4:a=e.sent,l({type:"LOAD_TRIPS",payload:a.data.trip_event}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),l({type:"LOAD_ERROR"});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),i=function(){var e=Object(p.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get("/api/tripUser",{params:{id:t}});case 3:a=e.sent,l({type:"USER_TRIPS",payload:a.data.tripUser}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),l({type:"LOAD_ERROR"});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(p.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.delete("/api/trip",{params:{id:t}});case 3:a=e.sent,l({type:"DELETE_TRIP",payload:t}),console.log(a),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),l({type:"LOAD_ERROR"});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),E=function(){return l({type:"SET_LOADING"})};return r.a.createElement(_.Provider,{value:{trips:c.trips,filtered:c.filtered,loading:c.loading,userTrips:c.userTrips,errors:c.errors,addTrip:s,filterTrips:function(e){l({type:"FILTER_TRIPS",payload:e})},clearFilter:function(){l({type:"CLEAR_FILTER"})},loadTrips:o,getTripsForUser:i,deleteTrip:d}},e.children)},j=Object(n.createContext)(),g=function(e,t){switch(t.type){case"USER_LOADED":return Object(E.a)(Object(E.a)({},e),{},{isAuthenticated:!0,loading:!1,user:t.payload});case"LOGIN_SUCCESS":case"REGISTER_SUCCESS":return localStorage.setItem("token",t.payload.token),Object(E.a)(Object(E.a)(Object(E.a)({},e),t.payload),{},{isAuthenticated:!0});case"EVENT_LOADED":return Object(E.a)(Object(E.a)({},e),{},{event:t.payload.event,loading:!1});case"LOGIN_FAIL":case"AUTH_ERROR":case"LOGOUT":case"LOAD_ERROR":case"REGISTER_FAIL":return localStorage.removeItem("token"),Object(E.a)(Object(E.a)({},e),{},{token:null,isAuthenticated:null,loading:!1,user:null,error:t.payload});case"CLEAR_ERRORS":return Object(E.a)(Object(E.a)({},e),{},{error:null});case"SET_LOADING":return{loading:!0};default:return e}},b=function(e){e?h.a.defaults.headers.common["x-access-token"]=e:delete h.a.defaults.headers.common["x-access-token"]},O=function(e){var t={token:localStorage.getItem("token"),isAuthenticated:null,loading:!1,user:null,error:null,event:null},a=Object(n.useReducer)(g,t),c=Object(m.a)(a,2),l=c[0],s=c[1],o=function(){var e=Object(p.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return localStorage.token&&b(localStorage.token),e.prev=1,e.next=4,h.a.get("/api/event",{params:{event_id:t}});case 4:a=e.sent,s({type:"EVENT_LOADED",payload:a.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),s({type:"LOAD_ERROR"});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),i=function(){var e=Object(p.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return localStorage.token&&b(localStorage.token),e.prev=1,e.next=4,h.a.get("/api/auth");case 4:t=e.sent,s({type:"USER_LOADED",payload:t.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),s({type:"AUTH_ERROR"});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),_=function(){var e=Object(p.a)(u.a.mark((function e(t){var a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E(),a={headers:{"Content-Type":"application/json"}},e.prev=2,e.next=5,h.a.post("/api/user",t,a);case 5:n=e.sent,s({type:"REGISTER_SUCCESS",payload:n.data}),i(),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),s({type:"REGISTER_FAIL",payload:e.t0.response.data.msg});case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(p.a)(u.a.mark((function e(t){var a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E(),a={headers:{"Content-Type":"application/json"}},e.prev=2,e.next=5,h.a.post("/api/auth",t,a);case 5:n=e.sent,s({type:"LOGIN_SUCCESS",payload:n.data}),i(),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),s({type:"LOGIN_FAIL",payload:e.t0.response.data.msg});case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),E=function(){return s({type:"SET_LOADING"})};return r.a.createElement(j.Provider,{value:{token:l.token,isAuthenticated:l.isAuthenticated,loading:l.loading,user:l.user,error:l.error,event:l.event,login:d,loadUser:i,logout:function(){return s({type:"LOGOUT"})},loadEvent:o,registerUser:_,clearErrors:function(){return s({type:"CLEAR_ERRORS"})}}},e.children)},x=Object(n.createContext)(),N=function(e,t){switch(t.type){case"SET_ALERT":return[].concat(Object(d.a)(e),[t.payload]);case"REMOVE_ALERT":return e.filter((function(e){return e.id!==t.payload}));default:return e}},w=a(84),C=function(e){var t=Object(n.useReducer)(N,[]),a=Object(m.a)(t,2),c=a[0],l=a[1];return r.a.createElement(x.Provider,{value:{alerts:c,setAlert:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5e3,n=Object(w.a)();l({type:"SET_ALERT",payload:{msg:e,type:t,id:n}}),setTimeout((function(){return l({type:"REMOVE_ALERT",payload:n})}),a)}}},e.children)},S=Object(n.createContext)(),R=function(e,t){switch(t.type){case"MAKE_RESERVATION":return Object(E.a)(Object(E.a)({},e),{},{makeReservation:t.payload,loading:!1});case"GET_RESERVATION":return Object(E.a)(Object(E.a)({},e),{},{reciviedReservation:t.payload,loading:!1});case"SET_LOADING":return Object(E.a)(Object(E.a)({},e),{},{loading:!0});default:return Object(E.a)({},e)}},k=function(e){var t=Object(n.useReducer)(R,{makeReservation:[],reciviedReservation:[],loading:!1}),a=Object(m.a)(t,2),c=a[0],l=a[1],s=function(){var e=Object(p.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(),a={headers:{"Content-Type":"application/json"}},e.prev=2,e.next=5,h.a.post("/api/reservation",t,a);case 5:e.sent,l({type:"MAKE_RESERVATION",payload:t}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.log("error");case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=Object(p.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(),e.prev=1,e.next=4,h.a.get("/api/reservation/messages",{params:{id:t}});case 4:a=e.sent,l({type:"GET_RESERVATION",payload:a.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log("error");case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),i=function(){return l({type:"SET_LOADING"})};return r.a.createElement(S.Provider,{value:{makeReservation:c.makeReservation,reciviedReservation:c.reciviedReservation,loading:c.loading,addReservation:s,getReservation:o}},e.children)},A=(a(70),a(71),a(15),function(e){var t=e.trip,a=Object(n.useContext)(j),c=Object(n.useState)({id:""}),l=Object(m.a)(c,2),o=l[0],i=l[1];Object(n.useEffect)((function(){i({id:u,user_id:a.user.user.user_id})}),[]);var u=t.journey_id,p=t.event_id,_=t.event_start_date,d=t.event_start_time,E=t.event_address,v=t.journey_car,f=t.journey_date,h=t.journey_empty_spaces,y=t.journey_text,g=t.pickup_zip_code,b=t.user_id,O=t.journey_money;return r.a.createElement("div",{className:"trips__container"},r.a.createElement("p",null,"FahrtID: ",u),r.a.createElement("p",null,"Event ID: ",p),r.a.createElement("p",null,"Event Adress: ",E),r.a.createElement("p",null,"Start Datum: ",_),r.a.createElement("p",null,"Start Zeit: ",d),r.a.createElement("p",null,"Auto: ",v),r.a.createElement("p",null,"Date: ",f),r.a.createElement("p",null,"Sitze: ",h),r.a.createElement("p",null,"Freitext: ",y),r.a.createElement("p",null,"PLZ: ",g),r.a.createElement("p",null,"User_id: ",b),r.a.createElement("p",null,"Geld: ",O),r.a.createElement(s.b,{to:{pathname:"/tripsreservation",state:{current:o}}},"Click me"))}),T=function(){var e=Object(n.useContext)(_),t=Object(n.useRef)(""),a=e.filtered,c=e.clearFilter,l=e.filterTrips;Object(n.useEffect)((function(){null==a&&(t.current.value="")}));return r.a.createElement("form",{className:"search__trips"},r.a.createElement("input",{className:"search__bar",type:"text",placeholder:"Filter Trips...",ref:t,onChange:function(e){""!==t.current.value?l(e.target.value):c()}}))},L=function(){var e=Object(n.useContext)(_),t=Object(n.useContext)(j).user,a=e.trips,c=e.filtered,l=e.loadTrips,s=e.loading;return Object(n.useEffect)((function(){l(t.user.event_id)}),[]),s?r.a.createElement(n.Fragment,null,r.a.createElement(T,null),r.a.createElement("div",{className:"trips__wrapper"},r.a.createElement("h1",null,"Loading"),";")):r.a.createElement(n.Fragment,null,r.a.createElement(T,null),r.a.createElement("div",{className:"trips__wrapper"},r.a.createElement("h2",null,"Zur Zeit werden ",a.length," Mitfahrglegenheiten angeboten"),null!==c?c.map((function(e){return r.a.createElement(A,{key:e.journey_id,trip:e})})):a.map((function(e){return r.a.createElement(A,{key:e.journey_id,trip:e})}))))},I=a(10),D=function(){var e=Object(n.useContext)(x);return e.alerts.length>0&&e.alerts.map((function(e){return r.a.createElement("div",{key:e.id,className:"alert alert-".concat(e.type)},r.a.createElement("i",{className:"fas fa-info-circle"})," ",e.msg)}))},F=function(e){var t=e.trip,a=e.onChange,c=e.nextStep,l=e.step,s=Object(n.useContext)(x).setAlert;return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"trips__form"},r.a.createElement("div",{className:"form__ctn"},r.a.createElement("div",{className:"form__steps"},r.a.createElement("p",null,l)),r.a.createElement("div",{className:"form__text"},r.a.createElement("p",null,"When and where do you want to start?")),r.a.createElement("div",{className:"input__wrapper"},r.a.createElement("input",{type:"text",placeholder:"Abfahrtsort",name:"pickup_zip_code",value:t.pickup_zip_code,onChange:a})),r.a.createElement("div",{className:"input__wrapper"},r.a.createElement("input",{type:"text",placeholder:"Abfahrtszeit",name:"journey_start_time",value:t.journey_start_time,onChange:a})),r.a.createElement("div",{className:"input__wrapper"},r.a.createElement("input",{type:"text",placeholder:"Abfahrtsdatum",name:"journey_date",value:t.journey_date,onChange:a})),r.a.createElement(D,null),r.a.createElement("i",{className:"fas fa-arrow-circle-right fa-2x",onClick:function(){""===t.pickup_zip_code||""===t.journey_start_time||""===t.journey_date?s("Please enter all required field","danger"):c()}})),r.a.createElement("div",{className:"form__img"},r.a.createElement("p",null,"Bild"))))},z=function(e){var t=e.nextStep,a=e.previousStep,c=e.trip,l=e.onChange,s=e.step,o=Object(n.useContext)(x).setAlert;return r.a.createElement("div",{className:"trips__form"},r.a.createElement("div",{className:"form__ctn"},r.a.createElement("div",{className:"form__steps"},r.a.createElement("p",null,s)),r.a.createElement("div",{className:"form__text"},r.a.createElement("p",null,"How many seats you you have available and how much is each seat?")),r.a.createElement("div",{className:"input__wrapper"},r.a.createElement("input",{type:"text",placeholder:"Car",name:"journey_car",value:c.journey_car,onChange:l})),r.a.createElement("div",{className:"input__wrapper"},r.a.createElement("input",{type:"number",placeholder:"Seats",name:"journey_empty_spaces",value:c.journey_empty_spaces,onChange:l})),r.a.createElement("div",{className:"input__wrapper"},r.a.createElement("input",{type:"number",placeholder:"Mitfahrerkosten",name:"journey_money",value:c.journey_money,onChange:l})),r.a.createElement(D,null),r.a.createElement("div",{className:"button__wrapper"},r.a.createElement("i",{class:"fas fa-arrow-circle-left fa-2x",onClick:a}),r.a.createElement("i",{class:"fas fa-arrow-circle-right fa-2x",onClick:function(){""===c.journey_car||""===c.journey_empty_spaces||""===c.journey_money?o("Please enter all required field","danger"):t()}}))),r.a.createElement("div",{className:"form__img"},r.a.createElement("p",null,"Picture")))},P=function(e){var t=e.nextStep,a=e.previousStep,n=e.onChange,c=e.trip,l=e.step;return r.a.createElement("div",{className:"trips__form"},r.a.createElement("div",{className:"form__ctn"},r.a.createElement("div",{className:"form__steps"},r.a.createElement("p",null,l)),r.a.createElement("div",{className:"form__text"},r.a.createElement("p",null,"Anything else that you want your fellows to know?")),r.a.createElement("textarea",{type:"text",placeholder:"Beschreibung",name:"journey_text",value:c.journey_text,onChange:n}),r.a.createElement("div",{className:"button__wrapper"},r.a.createElement("i",{class:"fas fa-arrow-circle-left fa-2x",onClick:a}),r.a.createElement("i",{class:"fas fa-arrow-circle-right fa-2x",onClick:t}))),r.a.createElement("div",{className:"form__img"},r.a.createElement("p",null,"Bild")))},U=function(e){var t=Object(n.useContext)(_),a=e.trip,c=e.previousStep,l=e.step,s=e.nextStep,o=e.setTrip;return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"form__steps"},r.a.createElement("p",null,l)),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t.addTrip(a),o({pickup_zip_code:"",journey_start_time:"",journey_car:"",journey_text:"",journey_empty_spaces:null,journey_date:"",journey_money:null}),s()},className:"confirm__wrapper"},r.a.createElement("p",null,"Abfahrtsort: ",a.pickup_zip_code),r.a.createElement("p",null,"Abfahrtszeit: ",a.journey_start_time),r.a.createElement("p",null,"Datum: ",a.journey_date),r.a.createElement("p",null,"Auto: ",a.journey_car),r.a.createElement("p",null,"Verf\xfcgbare Pl\xe4tze: ",a.seats),r.a.createElement("p",null,"Kosten: ",a.journey_money),r.a.createElement("div",{className:"button__wrapper"},r.a.createElement("i",{class:"fas fa-arrow-circle-left fa-2x",onClick:c}),r.a.createElement("button",{className:"button"},"Submit"))))},G=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Success"))},M=function(){Object(n.useContext)(_);var e=Object(n.useContext)(j),t=Object(n.useContext)(x),a=e.user,c=e.event,l=(t.setAlert,Object(n.useState)({step:1,pickup_zip_code:"",journey_start_time:"",journey_car:"",journey_text:"",journey_empty_spaces:"",journey_date:"",journey_money:null,user_id:a.user.user_id,event_address:c.event_address,event_id:a.user.event_id})),s=Object(m.a)(l,2),o=s[0],i=s[1],u=(o.pickup_zip_code,o.journey_start_time,o.journey_car,o.journey_text,o.journey_empty_spaces,o.journey_date,o.journey_money,o.step),p=function(e){i(Object(E.a)(Object(E.a)({},o),{},Object(I.a)({},e.target.name,"number"===e.target.type?parseInt(e.target.value):e.target.value)))},d=function(){var e=o.step;i(Object(E.a)(Object(E.a)({},o),{},{step:e+1}))},v=function(){var e=o.step;i(Object(E.a)(Object(E.a)({},o),{},{step:e-1}))};switch(u){case 1:return r.a.createElement(F,{nextStep:d,onChange:p,trip:o,step:u});case 2:return r.a.createElement(z,{nextStep:d,previousStep:v,onChange:p,trip:o,step:u});case 3:return r.a.createElement(P,{nextStep:d,previousStep:v,onChange:p,trip:o,step:u});case 4:return r.a.createElement(U,{previousStep:v,trip:o,step:u,nextStep:d,setTrip:i});case 5:return r.a.createElement(G,null)}},W=(a(77),function(){var e=Object(n.useContext)(j),t=e.isAuthenticated,a=r.a.createElement(n.Fragment,null,r.a.createElement(s.b,{to:"/"},r.a.createElement("li",{className:"navigation__authLinks"},"Home")),r.a.createElement(s.b,{to:"/profile"},r.a.createElement("li",{className:"navigation__authLinks"},"Profile")),r.a.createElement(s.b,{to:"/trips"},r.a.createElement("li",{className:"navigation__authLinks"},"Find Trips")),r.a.createElement(s.b,{to:"/offertrip"},r.a.createElement("li",{className:"navigation__authLinks"},"Offer Trips")),r.a.createElement(s.b,{to:"/chat"},r.a.createElement("li",{className:"navigation__authLinks"},"Chat")),r.a.createElement("li",{className:"navigation__logoutLink"},r.a.createElement("a",{onClick:function(){e.logout()},href:"/login"},r.a.createElement("i",{className:"fas fa-sign-out-alt fa-lg"},r.a.createElement("span",{className:"hide-sm"}))))),c=r.a.createElement(n.Fragment,null,r.a.createElement(s.b,{to:"/login"},r.a.createElement("li",{className:"navigation__freeLinks"},"Login")),r.a.createElement(s.b,{to:"/register"},r.a.createElement("li",{className:"navigation__freeLinks"},"Register")));return r.a.createElement("nav",{className:"nav__wrapper"},r.a.createElement("ul",null,t?a:c))}),V=a(42),q=a.n(V),H=a(43),Z=a.n(H),B=function(){var e=Object(n.useContext)(j).event;return r.a.createElement("img",{className:"event__picture",alt:"Event",src:"World Club Dome"===e.event_name?q.a:Z.a})},K=(a(78),function(){var e=Object(n.useContext)(j).event;return r.a.createElement("div",{className:"event__container"},r.a.createElement("div",{className:"event__ctn"},r.a.createElement(B,null)),r.a.createElement("div",{className:"event__inf"},r.a.createElement("h1",null,e.event_name),r.a.createElement("div",{className:"event_inf_ctn"},r.a.createElement("h2",null,"Where?"),r.a.createElement("p",null,e.event_address),r.a.createElement("h2",null,"When?"),r.a.createElement("p",null,e.event_start_date," at ",e.event_start_time),r.a.createElement("h2",null,"What else?"),r.a.createElement("p",null,"Event Spezifischer Content"))))}),J=(a(79),function(){return r.a.createElement("div",{className:"weather__container"},r.a.createElement("div",{className:"weather__img"},r.a.createElement("p",null,"Weather Image")),r.a.createElement("div",{className:"weather__inf"},r.a.createElement("p",null,"Weather Info"),r.a.createElement("p",null,"Information zum Wetter am Eventtag bzw. zur Uhrzeit; openweatherapi")))}),Y=function(){var e=Object(n.useContext)(j).event,t=Object(n.useState)({days:"",hours:"",minutes:"",seconds:""}),a=Object(m.a)(t,2),c=a[0],l=a[1];return setTimeout((function(){var t=function(e,t){var a=new Date,n=new Date("".concat(e,"T").concat(t))-a;return{days:Math.floor(n/864e5-1),hours:Math.floor(24-a.getHours()),minutes:Math.floor(60-a.getMinutes()),seconds:Math.floor(60-a.getSeconds())}}(e.event_start_date,e.event_start_time);l({days:t.days,hours:t.hours,minutes:t.minutes,seconds:t.seconds})}),1e3),r.a.createElement("div",{className:"counter__wrapper"},r.a.createElement("div",{className:"counter"},r.a.createElement("div",{className:"counter__wrapper__text"},r.a.createElement("p",{className:"count"},c.days)),r.a.createElement("p",{className:"counter__text"},"Tage")),r.a.createElement("div",{className:"counter"},r.a.createElement("div",{className:"counter__wrapper__text"},r.a.createElement("p",{className:"count"},c.hours)),r.a.createElement("p",{className:"counter__text"},"Stunden")),r.a.createElement("div",{className:"counter"},r.a.createElement("div",{className:"counter__wrapper__text"},r.a.createElement("p",{className:"count"},c.minutes)),r.a.createElement("p",{className:"counter__text"},"Minuten")),r.a.createElement("div",{className:"counter"},r.a.createElement("div",{className:"counter__wrapper__text"},r.a.createElement("p",{className:"count"},c.seconds)),r.a.createElement("p",{className:"counter__text"},"Sekunden")))},$=function(){var e=Object(n.useContext)(j),t=e.event,a=e.loading,c=e.loadEvent,l=e.user;return Object(n.useEffect)((function(){a||void 0===l||c(l.user.event_id)}),[a]),a||void 0===t?r.a.createElement("p",null,"Loading"):r.a.createElement(n.Fragment,null,r.a.createElement(Y,null),r.a.createElement(K,null),r.a.createElement(J,null))},Q=(a(80),function(){return r.a.createElement("div",{className:"footer__wrapper"},r.a.createElement("div",{className:"footer__content"},r.a.createElement("h1",null,"Footer-Content 1")),r.a.createElement("div",{className:"footer__content"},r.a.createElement("h1",null,"Footer-Content 2")))}),X=a(44),ee=a.n(X),te=(a(25),function(){return r.a.createElement("div",{className:"logo__wrapper"},r.a.createElement("img",{src:ee.a,width:500,height:150,alt:"Logo"}))}),ae=function(e){var t=Object(n.useContext)(j),a=Object(n.useContext)(x),c=t.login,l=t.isAuthenticated,s=t.error,o=t.clearErrors;Object(n.useEffect)((function(){l&&e.history.push("/"),"Please provide valid credentials"===s&&(a.setAlert(s,"danger"),o())}),[s,l,e.history]);var i=Object(n.useState)({email:"",password:""}),u=Object(m.a)(i,2),p=u[0],_=u[1],d=function(e){return _(Object(E.a)(Object(E.a)({},p),{},Object(I.a)({},e.target.name,e.target.value)))},v=p.email,f=p.password;return r.a.createElement(n.Fragment,null,r.a.createElement(te,null),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),""===v||""===f?a.setAlert("Please fill in all fields","danger"):c({user_email:v,user_password:f})},className:"auth__form__login"},r.a.createElement("div",{className:"input__wrapper"},r.a.createElement("i",{className:"far fa-envelope fa-lg"}),r.a.createElement("input",{onChange:d,type:"email",name:"email",placeholder:"E-Mail"})),r.a.createElement("div",{className:"input__wrapper"},r.a.createElement("i",{className:"fas fa-key fa-lg"}),r.a.createElement("input",{onChange:d,type:"password",name:"password",placeholder:"Password"})),r.a.createElement(D,null),r.a.createElement("button",{type:"submit",value:"Login",className:"auth__button"},"Login")))},ne=function(e){var t=Object(n.useContext)(x),a=Object(n.useContext)(j),c=t.setAlert,l=a.error,s=a.clearErrors,o=a.isAuthenticated,i=Object(n.useState)({username:"",user_email:"",user_password:"",user_ticket_ID:""}),u=Object(m.a)(i,2),p=u[0],_=u[1],d=p.username,v=p.user_email,f=p.user_password,h=p.user_ticket_ID;Object(n.useEffect)((function(){o&&e.history.push("/"),"the user already exists"===l&&(c(l,"danger"),s())}),[l,o,e.history]);var y=function(e){return _(Object(E.a)(Object(E.a)({},p),{},Object(I.a)({},e.target.name,e.target.value)))},g=Object(n.useState)({passwordActive:!1}),b=Object(m.a)(g,2),O=b[0],N=b[1],w=function(){N({passwordActive:!O.passwordActive})};return r.a.createElement(n.Fragment,null,r.a.createElement(te,null),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),""===d||""===v||""===f||""===h?t.setAlert("Please fill in all fields","danger"):a.registerUser(p),_({username:"",user_email:"",user_password:"",user_ticket_ID:""})},className:"auth__form__register"},r.a.createElement("div",{className:"input__wrapper"},r.a.createElement("i",{className:"fas fa-user fa-lg"}),r.a.createElement("input",{type:"text",name:"username",placeholder:"Username",value:d,onChange:y})),r.a.createElement("div",{className:"input__wrapper"},r.a.createElement("i",{className:"far fa-envelope fa-lg"}),r.a.createElement("input",{type:"email",name:"user_email",placeholder:"Email",value:v,onChange:y})),r.a.createElement("div",{className:"input__wrapper"},r.a.createElement("i",{className:"fas fa-key fa-lg"}),r.a.createElement("input",{type:O.passwordActive?"text":"password",name:"user_password",placeholder:"Password",value:f,onChange:y}),O.passwordActive?r.a.createElement("i",{class:"fas fa-eye-slash",onClick:w}):r.a.createElement("i",{class:"fas fa-eye",onClick:w})),r.a.createElement("div",{className:"input__wrapper"},r.a.createElement("i",{className:"fas fa-key fa-lg"}),r.a.createElement("input",{type:O.passwordActive?"text":"password",name:"user_password2",placeholder:"Confirm Password"}),O.passwordActive?r.a.createElement("i",{class:"fas fa-eye-slash",onClick:w}):r.a.createElement("i",{class:"fas fa-eye",onClick:w})),r.a.createElement("div",{className:"input__wrapper"},r.a.createElement("i",{className:"fas fa-ticket-alt fa-lg"}),r.a.createElement("input",{type:"text",name:"user_ticket_ID",placeholder:"Ticket ID",value:h,onChange:y})),r.a.createElement(D,null),r.a.createElement("button",{type:"submit",value:"Login",className:"auth__button"},"Register")))},re=(a(81),function(){var e=Object(n.useContext)(j).user;return r.a.createElement("div",{className:"userdata__container"},r.a.createElement("h1",null,"User Data goes here"),r.a.createElement("p",null,e.user.event_id),r.a.createElement("p",null,e.user.ticket_id),r.a.createElement("p",null,e.user.user_email),r.a.createElement("p",null,e.user.username))}),ce=function(e){var t=e.userTrip,a=Object(n.useContext)(_).deleteTrip,c=t.journey_id,l=t.event_id,o=t.event_start_date,i=t.event_start_time,u=t.event_address,p=t.journey_car,d=t.journey_date,E=t.journey_empty_spaces,v=t.journey_text,f=t.pickup_zip_code,h=t.user_id,y=Object(n.useState)({id:c,event_id:l,event_start_time:i,event_start_date:o,event_address:u,journey_car:p,journey_date:d,journey_empty_spaces:E,journey_text:v,pickup_zip_code:f,user_id:h}),j=Object(m.a)(y,2),g=j[0];j[1];return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"usertrips__container"},r.a.createElement("p",null,"FahrtID: ",c),r.a.createElement("p",null,"Event ID: ",l),r.a.createElement("p",null,"Event Adress: ",u),r.a.createElement("p",null,"Start Datum: ",o),r.a.createElement("p",null,"Start Zeit: ",i),r.a.createElement("p",null,"Auto: ",p),r.a.createElement("p",null,"Date: ",d),r.a.createElement("p",null,"Sitze: ",E),r.a.createElement("p",null,"Freitext: ",v),r.a.createElement("p",null,"PLZ: ",f),r.a.createElement("p",null,"User_id: ",h),r.a.createElement("button",{onClick:function(){a(g.id),console.log(g.id)}},"Delete Trip"),r.a.createElement(s.b,{to:{pathname:"/changeform",state:{current:g}}},"Change trip")))},le=function(){var e=Object(n.useContext)(_),t=Object(n.useContext)(j),a=e.getTripsForUser,c=e.userTrips,l=e.loading;return Object(n.useEffect)((function(){a(t.user.user.user_id)}),[]),l||void 0===c?r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"userdata__container"},r.a.createElement("h1",null,"Loading"))):r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"userdata__container"},r.a.createElement("h2",null,"Your active trips"),c.map((function(e){return r.a.createElement(ce,{key:e.journey_id,userTrip:e})}))))},se=function(){return r.a.createElement(n.Fragment,null,r.a.createElement(re,null),r.a.createElement(le,null))},oe=a(19),ie=a(20),ue=a(23),pe=a(21),me=function(e){Object(ue.a)(a,e);var t=Object(pe.a)(a);function a(){var e;Object(oe.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={journey_id:e.props.location.state.current.id,reservation_requested_seats:null,reservation_text:"",user_id:e.props.location.state.current.user_id},e.onSubmit=function(t){t.preventDefault(),e.context.addReservation(e.state),console.log("Submitted Reservation"),e.setState({reservation_requested_seats:"",reservation_text:""})},e.onChange=function(t){e.setState(Object(I.a)({},t.target.name,"number"===t.target.type?parseInt(t.target.value):t.target.value))},e}return Object(ie.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Hello this is a single trip form for the id: ",this.state.journey_id),r.a.createElement("form",{onSubmit:this.onSubmit,className:"reservation__form"},r.a.createElement("div",{className:"input__wrapper"},r.a.createElement("input",{type:"number",placeholder:"Anzahl der Pl\xe4tze",name:"reservation_requested_seats",value:this.state.reservation_requested_seats,onChange:this.onChange})),r.a.createElement("div",{className:"input__wrapper"},r.a.createElement("input",{type:"text",placeholder:"Nachricht an den Fahrer",name:"reservation_text",value:this.state.reservation_text,onChange:this.onChange})),r.a.createElement("button",{className:"button"},"Submit")))}}]),a}(n.Component);me.contextType=S;var _e=me,de=function(e){Object(ue.a)(a,e);var t=Object(pe.a)(a);function a(){var e;Object(oe.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={journey_id:e.props.location.state.current.id,event_id:e.props.location.state.current.event_id,event_start_time:e.props.location.state.current.event_start_time,event_start_date:e.props.location.state.current.event_start_date,event_address:e.props.location.state.current.event_address,journey_car:e.props.location.state.current.journey_car,journey_date:e.props.location.state.current.journey_date,journey_empty_spaces:e.props.location.state.current.journey_empty_spaces,journey_text:e.props.location.state.current.journey_text,pickup_zip_code:e.props.location.state.current.pickup_zip_code,user_id:e.props.location.state.current.user_id},e.onChange=function(t){e.setState(Object(I.a)({},t.target.name,t.target.value))},e.onSubmit=function(t){t.preventDefault(),console.log("Submitted Reservation"),e.setState({journey_seats:"",journey_text:""})},e}return Object(ie.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"You can change the form for trip id: ",this.state.journey_id,"\xa0"),r.a.createElement("form",{onSubmit:this.onSubmit,className:"change__form"},r.a.createElement("input",{type:"text",placeholder:"Anzahl der Pl\xe4tze",name:"journey_empty_spaces",value:this.state.journey_empty_spaces,onChange:this.onChange}),r.a.createElement("input",{type:"text",placeholder:"Auto",name:"journey_car",value:this.state.journey_car,onChange:this.onChange}),r.a.createElement("input",{type:"text",placeholder:"Datum der Fahrt",name:"journey_date",value:this.state.journey_date,onChange:this.onChange}),r.a.createElement("input",{type:"text",placeholder:"Freitext",name:"journey_text",value:this.state.journey_text,onChange:this.onChange}),r.a.createElement("input",{type:"text",placeholder:"Abfahrtort",name:"pickup_zip_code",value:this.state.pickup_zip_code,onChange:this.onChange})))}}]),a}(n.Component),Ee=(a(38),function(e){var t=e.reservation,a=t.reservation_id,n=t.reservation_requested_seats,c=t.reservation_text,l=t.user_id;return r.a.createElement("div",{className:"reservation__item__wrapper"},r.a.createElement("p",null,"Id: ",a),r.a.createElement("p",null,"Sitze: ",n),r.a.createElement("p",null,"Texte: ",c),r.a.createElement("p",null,"UserId: ",l),r.a.createElement("div",{className:"reservation__button__wrapper"},r.a.createElement("button",{className:"button"},"Anfrage best\xe4tigen"),r.a.createElement("button",{className:"button"},"Anfrage ablehnen")))}),ve=function(){var e=Object(n.useContext)(j),t=Object(n.useContext)(S),a=t.getReservation,c=t.reciviedReservation,l=e.user;return Object(n.useEffect)((function(){a(l.user.user_id)}),[]),c.length?r.a.createElement("div",null,r.a.createElement("h1",null,"This is the Reservation Componenent"),r.a.createElement("div",{className:"chat__wrapper"},c.map((function(e){return r.a.createElement(Ee,{key:e.reservation_id,reservation:e})})))):r.a.createElement("p",null,"Loading")},fe=a(45),he=function(e){var t=e.component,a=Object(fe.a)(e,["component"]),c=Object(n.useContext)(j),l=c.isAuthenticated,s=c.loading;return r.a.createElement(o.b,Object.assign({},a,{render:function(e){return l||s?r.a.createElement(t,e):r.a.createElement(o.a,{to:"/login"})}}))};var ye=function(){return r.a.createElement(O,null,r.a.createElement(y,null,r.a.createElement(C,null,r.a.createElement(k,null,r.a.createElement(s.a,null,r.a.createElement("div",{className:"main__container"},r.a.createElement("div",{className:"navbar__container"},r.a.createElement(W,null)),r.a.createElement("div",{className:"content__container"},r.a.createElement(o.d,null,r.a.createElement(he,{exact:!0,path:"/",component:$}),r.a.createElement(he,{exact:!0,path:"/trips",component:L}),r.a.createElement(he,{exact:!0,path:"/offertrip",component:M}),r.a.createElement(he,{exact:!0,path:"/profile",component:se}),r.a.createElement(he,{exact:!0,path:"/tripsreservation",component:_e}),r.a.createElement(he,{exact:!0,path:"/changeform",component:de}),r.a.createElement(he,{exact:!0,path:"/chat",component:ve}),r.a.createElement(o.b,{exact:!0,path:"/login",component:ae}),r.a.createElement(o.b,{exact:!0,path:"/register",component:ne}))),r.a.createElement("div",{className:"footer__container"},r.a.createElement(Q,null))))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ye,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[46,1,2]]]);
//# sourceMappingURL=main.5f8b4316.chunk.js.map