(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c4d8d"],{"3d28":function(t,a,n){"use strict";n.r(a);var e=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("v-container",[n("v-layout",[n("v-flex",{attrs:{xs12:"","justify-center":""}},[n("v-container",{attrs:{fluid:""}},[n("v-row",[n("patients")],1)],1)],1)],1)],1)},i=[],s=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("v-container",{attrs:{"fill-height":"",fluid:"","grid-list-xl":""}},[n("v-layout",{attrs:{"justify-center":"",wrap:""}},[n("v-flex",{attrs:{xs12:"",md8:""}},[n("v-card",{attrs:{height:"400px"}},[n("v-toolbar",{attrs:{color:"indigo",dark:""}},[n("v-toolbar-title",[t._v("Dr. "+t._s(t.firstname)+" "+t._s(t.lastname)+"'s Patient Profile")]),n("v-spacer")],1),n("v-container",[n("v-layout",{attrs:{wrap:""}},[n("div",[n("p",{staticClass:"card-description font-weight-light"},[t._v("Your Patients:")])]),n("div",[n("br"),t._l(t.patients,(function(a,e){return n("div",{key:e},[n("ul",[n("p",[t._v(t._s(a.patient_name)+" | "+t._s(a.age)+" | "+t._s(a.patient_email))])])])}))],2),n("v-flex",{attrs:{xs12:"","text-xs-right":""}})],1)],1)],1),n("v-spacer"),n("v-row",[n("v-col",{attrs:{xs:"12"}},[n("v-btn",{staticClass:"mx-3 my-2 font-weight-light",attrs:{to:"/Data",dark:"",color:"#3fb584"}},[t._v("My Data")]),n("v-btn",{staticClass:"mx-3 my-2 font-weight-light",attrs:{to:"/pDash",dark:"",color:"#3f51b5"}},[t._v("Back To Dashboard")])],1)],1)],1)],1)],1)},r=[],l=n("7338"),o=n.n(l),c={props:{source:String},data:function(){return{firstname:null,lastname:null,physician_email:null,patients:[]}},mounted:function(){var t=this;o.a.get("/api/physicians/1").then((function(a){t.firstname=a.data.firstName,t.lastname=a.data.lastName,t.physician_email=a.data.physician_email,t.phone=a.data.phone,t.patients=a.data.Patients}))}},u=c,p=n("2877"),d=n("6544"),f=n.n(d),v=n("8336"),h=n("b0af"),m=n("62ad"),_=n("a523"),x=n("0e8f"),b=n("a722"),w=n("0fd9"),y=n("2fa4"),g=n("71d9"),V=n("2a7f"),k=Object(p["a"])(u,s,r,!1,null,null,null),C=k.exports;f()(k,{VBtn:v["a"],VCard:h["a"],VCol:m["a"],VContainer:_["a"],VFlex:x["a"],VLayout:b["a"],VRow:w["a"],VSpacer:y["a"],VToolbar:g["a"],VToolbarTitle:V["a"]});var D={name:"App",components:{patients:C}},j=D,P=Object(p["a"])(j,e,i,!1,null,null,null);a["default"]=P.exports;f()(P,{VContainer:_["a"],VFlex:x["a"],VLayout:b["a"],VRow:w["a"]})}}]);
//# sourceMappingURL=chunk-2d0c4d8d.d0fbd0c7.js.map