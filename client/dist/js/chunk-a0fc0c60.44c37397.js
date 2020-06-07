(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a0fc0c60"],{"1b2c":function(t,e,i){},"2c64":function(t,e,i){},"38cb":function(t,e,i){"use strict";i("fb6a"),i("a9e3");var s=i("53ca"),n=i("a9ad"),a=i("7560"),r=i("3206"),o=i("80d2"),l=i("d9bd"),u=i("58df");e["a"]=Object(u["a"])(n["a"],Object(r["a"])("form"),a["a"]).extend({name:"validatable",props:{disabled:Boolean,error:Boolean,errorCount:{type:[Number,String],default:1},errorMessages:{type:[String,Array],default:function(){return[]}},messages:{type:[String,Array],default:function(){return[]}},readonly:Boolean,rules:{type:Array,default:function(){return[]}},success:Boolean,successMessages:{type:[String,Array],default:function(){return[]}},validateOnBlur:Boolean,value:{required:!1}},data:function(){return{errorBucket:[],hasColor:!1,hasFocused:!1,hasInput:!1,isFocused:!1,isResetting:!1,lazyValue:this.value,valid:!1}},computed:{computedColor:function(){if(!this.disabled)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},hasError:function(){return this.internalErrorMessages.length>0||this.errorBucket.length>0||this.error},hasSuccess:function(){return this.internalSuccessMessages.length>0||this.success},externalError:function(){return this.internalErrorMessages.length>0||this.error},hasMessages:function(){return this.validationTarget.length>0},hasState:function(){return!this.disabled&&(this.hasSuccess||this.shouldValidate&&this.hasError)},internalErrorMessages:function(){return this.genInternalMessages(this.errorMessages)},internalMessages:function(){return this.genInternalMessages(this.messages)},internalSuccessMessages:function(){return this.genInternalMessages(this.successMessages)},internalValue:{get:function(){return this.lazyValue},set:function(t){this.lazyValue=t,this.$emit("input",t)}},shouldValidate:function(){return!!this.externalError||!this.isResetting&&(this.validateOnBlur?this.hasFocused&&!this.isFocused:this.hasInput||this.hasFocused)},validations:function(){return this.validationTarget.slice(0,Number(this.errorCount))},validationState:function(){if(!this.disabled)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":this.hasColor?this.computedColor:void 0},validationTarget:function(){return this.internalErrorMessages.length>0?this.internalErrorMessages:this.successMessages.length>0?this.internalSuccessMessages:this.messages.length>0?this.internalMessages:this.shouldValidate?this.errorBucket:[]}},watch:{rules:{handler:function(t,e){Object(o["i"])(t,e)||this.validate()},deep:!0},internalValue:function(){this.hasInput=!0,this.validateOnBlur||this.$nextTick(this.validate)},isFocused:function(t){t||this.disabled||(this.hasFocused=!0,this.validateOnBlur&&this.$nextTick(this.validate))},isResetting:function(){var t=this;setTimeout((function(){t.hasInput=!1,t.hasFocused=!1,t.isResetting=!1,t.validate()}),0)},hasError:function(t){this.shouldValidate&&this.$emit("update:error",t)},value:function(t){this.lazyValue=t}},beforeMount:function(){this.validate()},created:function(){this.form&&this.form.register(this)},beforeDestroy:function(){this.form&&this.form.unregister(this)},methods:{genInternalMessages:function(t){return t?Array.isArray(t)?t:[t]:[]},reset:function(){this.isResetting=!0,this.internalValue=Array.isArray(this.internalValue)?[]:void 0},resetValidation:function(){this.isResetting=!0},validate:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=arguments.length>1?arguments[1]:void 0,i=[];e=e||this.internalValue,t&&(this.hasInput=this.hasFocused=!0);for(var n=0;n<this.rules.length;n++){var a=this.rules[n],r="function"===typeof a?a(e):a;!1===r||"string"===typeof r?i.push(r||""):"boolean"!==typeof r&&Object(l["b"])("Rules should return a string or boolean, received '".concat(Object(s["a"])(r),"' instead"),this)}return this.errorBucket=i,this.valid=0===i.length,this.valid}}})},"3d86":function(t,e,i){},"4b91":function(t,e,i){},"57e1":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",[i("v-layout",[i("v-flex",{attrs:{"justify-center":""}},[i("v-container",{attrs:{fluid:""}},[i("mySurvey")],1)],1)],1)],1)},n=[],a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-container",{attrs:{fluid:""}},[i("v-row",[i("v-subheader",[i("div",{staticClass:"headline"},[t._v("My Survey")])])],1),i("v-card",{staticClass:"mx-auto",attrs:{color:"#3f51b5",dark:"",width:"900px%"}},[i("v-card-text",[i("v-sheet",{attrs:{color:"rgba(0, 0, 0, .12)"}})],1),i("v-card-text",[i("div",{staticClass:"display-1 font-weight-thin"},[t._v("My Survey")])]),i("v-divider"),i("Questionnaire"),i("v-card-actions",{staticClass:"justify-center"},[i("v-btn",{attrs:{block:"",text:"",to:"/Home"}},[t._v("Back to Dashboard")])],1)],1)],1)],1)},r=[],o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",[i("v-container",[i("h1",{attrs:{id:"title"}},[t._v("Mental Health Survey")]),t._l(t.questions,(function(e,s){return i("v-content",{key:s},[i("p",[t._v(t._s(s+1)+". "+t._s(t.questions[s].text))]),i("v-radio-group",{attrs:{row:""},model:{value:t.questions[s].answer,callback:function(e){t.$set(t.questions[s],"answer",e)},expression:"questions[i].answer"}},[i("v-radio",{attrs:{label:"Not At All",value:"1"}}),i("v-radio",{attrs:{label:"Some Days",value:"2"}}),i("v-radio",{attrs:{label:"More Than Half The Time",value:"3"}}),i("v-radio",{attrs:{label:"Most Of The Time",value:"4"}})],1),i("h5",[t._v("Score: "+t._s(t.questions[s].answer))])],1)})),i("br"),i("h1"),i("div",[i("h2",[t._v("Mental Health Score: "+t._s(t.totalScore))])]),i("div",[i("br"),i("h3",{staticClass:"text-center"},[t._v("Mental Health Legend")]),i("p",{staticClass:"subtext text-center"},[t._v(" (Your mental health score should "),i("strong",[t._v("NOT")]),t._v(" be construed as a dignosis but rather an indicator that professional services may be needed) ")]),i("v-row",[i("v-col",[i("v-card",{staticClass:"success",attrs:{dark:""}},[i("v-card-title",{staticClass:"justify-center"},[i("p",[t._v("0-8 (No Risk)")])])],1)],1),i("v-col",[i("v-card",{staticClass:"info",attrs:{dark:""}},[i("v-card-title",{staticClass:"justify-center"},[i("p",[t._v("8-16 (Mild Risk)")])])],1)],1),i("v-col",[i("v-card",{staticClass:"warning",attrs:{dark:""}},[i("v-card-title",{staticClass:"justify-center"},[i("p",[t._v("16-24 (Moderate Risk)")])])],1)],1),i("v-col",[i("v-card",{staticClass:"error",attrs:{dark:""}},[i("v-card-title",{staticClass:"justify-center"},[i("p",[t._v("24-32 (Severe Risk)")])])],1)],1)],1)],1)],2)],1)},l=[],u=(i("13d5"),{data:function(){return{questions:[{text:"Do you experience little interest in pleasure in doing things?"},{text:"Are you feeling down, depressed, or hopeless?"},{text:"Trouble falling or staying asleep, or sleeping too much?"},{text:"Feeling tired or having little energy?"},{text:"Poor appetite or overeating?"},{text:"Feeling bad about yourself — or that you are a failure or have let yourself or your family down?"},{text:"Moving or speaking so slowly that other people could have noticed? Or so fidgety or restless that you have been moving a lot more than usual?"},{text:"Thoughts that you would be better off dead, or thoughts of hurting yourself in some way?"}],answers:{}}},computed:{totalScore:function(){return this.questions.reduce((function(t,e){return"answer"in e?t+parseInt(e.answer):t}),0)}}}),c=u,h=(i("b018"),i("2877")),d=i("6544"),p=i.n(d),f=i("7496"),v=i("b0af"),g=i("99d9"),m=i("62ad"),b=i("a523"),y=i("a75b"),C=(i("b0c0"),i("5530")),S=(i("2c64"),i("ba87")),V=i("9d26"),k=i("c37a"),w=i("7e2b"),$=i("a9ad"),_=i("4e82"),M=i("5607"),x=i("2b0e"),O=x["a"].extend({name:"rippleable",directives:{ripple:M["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),t.on=Object.assign({click:this.onChange},this.$listeners),this.$createElement("div",t)):null},onChange:function(){}}}),j=i("7560"),I=(i("4de4"),i("45fc"),i("d3b7"),i("25f0"),i("8547")),D=i("58df"),B=Object(D["a"])(k["a"],O,I["a"]).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,i=this.internalValue;return this.isMultiple?!!Array.isArray(i)&&i.some((function(i){return t.valueComparator(i,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,i):Boolean(i):this.valueComparator(i,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.disabled||this.validationState?this.validationState:"primary"}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var t=this,e=k["a"].options.methods.genLabel.call(this);return e?(e.data.on={click:function(e){e.preventDefault(),t.onChange()}},e):e},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown},ref:"input"})},onBlur:function(){this.isFocused=!1},onChange:function(){var t=this;if(!this.isDisabled){var e=this.value,i=this.internalValue;if(this.isMultiple){Array.isArray(i)||(i=[]);var s=i.length;i=i.filter((function(i){return!t.valueComparator(i,e)})),i.length===s&&i.push(e)}else i=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(i,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(i,e)?null:e:!i;this.validate(!0,i),this.internalValue=i,this.hasColor=i}},onFocus:function(){this.isFocused=!0},onKeydown:function(t){}}}),A=i("80d2"),E=Object(D["a"])(w["a"],$["a"],O,Object(_["a"])("radioGroup"),j["a"]),F=E.extend().extend({name:"v-radio",inheritAttrs:!1,props:{disabled:Boolean,id:String,label:String,name:String,offIcon:{type:String,default:"$radioOff"},onIcon:{type:String,default:"$radioOn"},readonly:Boolean,value:{default:null}},data:function(){return{isFocused:!1}},computed:{classes:function(){return Object(C["a"])({"v-radio--is-disabled":this.isDisabled,"v-radio--is-focused":this.isFocused},this.themeClasses,{},this.groupClasses)},computedColor:function(){return B.options.computed.computedColor.call(this)},computedIcon:function(){return this.isActive?this.onIcon:this.offIcon},computedId:function(){return k["a"].options.computed.computedId.call(this)},hasLabel:k["a"].options.computed.hasLabel,hasState:function(){return(this.radioGroup||{}).hasState},isDisabled:function(){return this.disabled||!!(this.radioGroup||{}).disabled},isReadonly:function(){return this.readonly||!!(this.radioGroup||{}).readonly},computedName:function(){return this.name||!this.radioGroup?this.name:this.radioGroup.name||"radio-".concat(this.radioGroup._uid)},rippleState:function(){return B.options.computed.rippleState.call(this)},validationState:function(){return(this.radioGroup||{}).validationState||this.computedColor}},methods:{genInput:function(t){return B.options.methods.genInput.call(this,"radio",t)},genLabel:function(){var t=this;return this.hasLabel?this.$createElement(S["a"],{on:{click:function(e){e.preventDefault(),t.onChange()}},attrs:{for:this.computedId},props:{color:this.validationState,focused:this.hasState}},Object(A["p"])(this,"label")||this.label):null},genRadio:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(V["a"],this.setTextColor(this.validationState,{props:{dense:this.radioGroup&&this.radioGroup.dense}}),this.computedIcon),this.genInput(Object(C["a"])({name:this.computedName,value:this.value},this.attrs$)),this.genRipple(this.setTextColor(this.rippleState))])},onFocus:function(t){this.isFocused=!0,this.$emit("focus",t)},onBlur:function(t){this.isFocused=!1,this.$emit("blur",t)},onChange:function(){this.isDisabled||this.isReadonly||this.isActive||this.toggle()},onKeydown:function(){}},render:function(t){var e={staticClass:"v-radio",class:this.classes};return t("div",e,[this.genRadio(),this.genLabel()])}}),T=(i("a9e3"),i("ec29"),i("3d86"),i("604c")),R=Object(D["a"])(I["a"],T["a"],k["a"]),L=R.extend({name:"v-radio-group",provide:function(){return{radioGroup:this}},props:{column:{type:Boolean,default:!0},height:{type:[Number,String],default:"auto"},name:String,row:Boolean,value:null},computed:{classes:function(){return Object(C["a"])({},k["a"].options.computed.classes.call(this),{"v-input--selection-controls v-input--radio-group":!0,"v-input--radio-group--column":this.column&&!this.row,"v-input--radio-group--row":this.row})}},methods:{genDefaultSlot:function(){return this.$createElement("div",{staticClass:"v-input--radio-group__input",attrs:{id:this.id,role:"radiogroup","aria-labelledby":this.computedId}},k["a"].options.methods.genDefaultSlot.call(this))},genInputSlot:function(){var t=k["a"].options.methods.genInputSlot.call(this);return delete t.data.on.click,t},genLabel:function(){var t=k["a"].options.methods.genLabel.call(this);return t?(t.data.attrs.id=this.computedId,delete t.data.attrs.for,t.tag="legend",t):null},onClick:T["a"].options.methods.onClick}}),z=i("0fd9"),G=Object(h["a"])(c,o,l,!1,null,null,null),N=G.exports;p()(G,{VApp:f["a"],VCard:v["a"],VCardTitle:g["c"],VCol:m["a"],VContainer:b["a"],VContent:y["a"],VRadio:F,VRadioGroup:L,VRow:z["a"]});var H={props:{source:String},components:{Questionnaire:N}},q=H,P=i("8336"),K=i("ce7e"),J=i("8dd9"),Q=i("e0c7"),U=Object(h["a"])(q,a,r,!1,null,null,null),Y=U.exports;p()(U,{VBtn:P["a"],VCard:v["a"],VCardActions:g["a"],VCardText:g["b"],VContainer:b["a"],VDivider:K["a"],VRow:z["a"],VSheet:J["a"],VSubheader:Q["a"]});var W={name:"App",components:{mySurvey:Y}},X=W,Z=i("0e8f"),tt=i("a722"),et=Object(h["a"])(X,s,n,!1,null,null,null);e["default"]=et.exports;p()(et,{VContainer:b["a"],VFlex:Z["a"],VLayout:tt["a"]})},8547:function(t,e,i){"use strict";var s=i("2b0e"),n=i("80d2");e["a"]=s["a"].extend({name:"comparable",props:{valueComparator:{type:Function,default:n["i"]}}})},"8ce9":function(t,e,i){},"8ff2":function(t,e,i){},b018:function(t,e,i){"use strict";var s=i("4b91"),n=i.n(s);n.a},ba87:function(t,e,i){"use strict";i("a9e3");var s=i("5530"),n=(i("1b2c"),i("a9ad")),a=i("7560"),r=i("58df"),o=i("80d2"),l=Object(r["a"])(a["a"]).extend({name:"v-label",functional:!0,props:{absolute:Boolean,color:{type:String,default:"primary"},disabled:Boolean,focused:Boolean,for:String,left:{type:[Number,String],default:0},right:{type:[Number,String],default:"auto"},value:Boolean},render:function(t,e){var i=e.children,r=e.listeners,l=e.props,u={staticClass:"v-label",class:Object(s["a"])({"v-label--active":l.value,"v-label--is-disabled":l.disabled},Object(a["b"])(e)),attrs:{for:l.for,"aria-hidden":!l.for},on:r,style:{left:Object(o["g"])(l.left),right:Object(o["g"])(l.right),position:l.absolute?"absolute":"relative"},ref:"label"};return t("label",n["a"].options.methods.setTextColor(l.focused&&l.color,u),i)}});e["a"]=l},c37a:function(t,e,i){"use strict";i("99af"),i("4de4"),i("d81d"),i("a9e3"),i("ac1f"),i("1276");var s=i("5530"),n=(i("d191"),i("9d26")),a=i("ba87"),r=(i("8ff2"),i("a9ad")),o=i("7560"),l=i("58df"),u=i("80d2"),c=Object(l["a"])(r["a"],o["a"]).extend({name:"v-messages",props:{value:{type:Array,default:function(){return[]}}},methods:{genChildren:function(){return this.$createElement("transition-group",{staticClass:"v-messages__wrapper",attrs:{name:"message-transition",tag:"div"}},this.value.map(this.genMessage))},genMessage:function(t,e){return this.$createElement("div",{staticClass:"v-messages__message",key:e},Object(u["p"])(this,"default",{message:t,key:e})||[t])}},render:function(t){return t("div",this.setTextColor(this.color,{staticClass:"v-messages",class:this.themeClasses}),[this.genChildren()])}}),h=c,d=i("7e2b"),p=i("38cb"),f=i("d9f7"),v=Object(l["a"])(d["a"],p["a"]),g=v.extend().extend({name:"v-input",inheritAttrs:!1,props:{appendIcon:String,backgroundColor:{type:String,default:""},dense:Boolean,height:[Number,String],hideDetails:[Boolean,String],hint:String,id:String,label:String,loading:Boolean,persistentHint:Boolean,prependIcon:String,value:null},data:function(){return{lazyValue:this.value,hasMouseDown:!1}},computed:{classes:function(){return Object(s["a"])({"v-input--has-state":this.hasState,"v-input--hide-details":!this.showDetails,"v-input--is-label-active":this.isLabelActive,"v-input--is-dirty":this.isDirty,"v-input--is-disabled":this.disabled,"v-input--is-focused":this.isFocused,"v-input--is-loading":!1!==this.loading&&void 0!==this.loading,"v-input--is-readonly":this.readonly,"v-input--dense":this.dense},this.themeClasses)},computedId:function(){return this.id||"input-".concat(this._uid)},hasHint:function(){return!this.hasMessages&&!!this.hint&&(this.persistentHint||this.isFocused)},hasLabel:function(){return!(!this.$slots.label&&!this.label)},internalValue:{get:function(){return this.lazyValue},set:function(t){this.lazyValue=t,this.$emit(this.$_modelEvent,t)}},isDirty:function(){return!!this.lazyValue},isDisabled:function(){return this.disabled||this.readonly},isLabelActive:function(){return this.isDirty},messagesToDisplay:function(){var t=this;return this.hasHint?[this.hint]:this.hasMessages?this.validations.map((function(e){if("string"===typeof e)return e;var i=e(t.internalValue);return"string"===typeof i?i:""})).filter((function(t){return""!==t})):[]},showDetails:function(){return!1===this.hideDetails||"auto"===this.hideDetails&&this.messagesToDisplay.length>0}},watch:{value:function(t){this.lazyValue=t}},beforeCreate:function(){this.$_modelEvent=this.$options.model&&this.$options.model.event||"input"},methods:{genContent:function(){return[this.genPrependSlot(),this.genControl(),this.genAppendSlot()]},genControl:function(){return this.$createElement("div",{staticClass:"v-input__control"},[this.genInputSlot(),this.genMessages()])},genDefaultSlot:function(){return[this.genLabel(),this.$slots.default]},genIcon:function(t,e){var i=this,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=this["".concat(t,"Icon")],r="click:".concat(Object(u["t"])(t)),o=!(!this.listeners$[r]&&!e),l=Object(f["a"])({attrs:{"aria-label":o?Object(u["t"])(t).split("-")[0]+" icon":void 0,color:this.validationState,dark:this.dark,disabled:this.disabled,light:this.light},on:o?{click:function(t){t.preventDefault(),t.stopPropagation(),i.$emit(r,t),e&&e(t)},mouseup:function(t){t.preventDefault(),t.stopPropagation()}}:void 0},s);return this.$createElement("div",{staticClass:"v-input__icon",class:t?"v-input__icon--".concat(Object(u["t"])(t)):void 0},[this.$createElement(n["a"],l,a)])},genInputSlot:function(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor,{staticClass:"v-input__slot",style:{height:Object(u["g"])(this.height)},on:{click:this.onClick,mousedown:this.onMouseDown,mouseup:this.onMouseUp},ref:"input-slot"}),[this.genDefaultSlot()])},genLabel:function(){return this.hasLabel?this.$createElement(a["a"],{props:{color:this.validationState,dark:this.dark,disabled:this.disabled,focused:this.hasState,for:this.computedId,light:this.light}},this.$slots.label||this.label):null},genMessages:function(){var t=this;return this.showDetails?this.$createElement(h,{props:{color:this.hasHint?"":this.validationState,dark:this.dark,light:this.light,value:this.messagesToDisplay},attrs:{role:this.hasMessages?"alert":null},scopedSlots:{default:function(e){return Object(u["p"])(t,"message",e)}}}):null},genSlot:function(t,e,i){if(!i.length)return null;var s="".concat(t,"-").concat(e);return this.$createElement("div",{staticClass:"v-input__".concat(s),ref:s},i)},genPrependSlot:function(){var t=[];return this.$slots.prepend?t.push(this.$slots.prepend):this.prependIcon&&t.push(this.genIcon("prepend")),this.genSlot("prepend","outer",t)},genAppendSlot:function(){var t=[];return this.$slots.append?t.push(this.$slots.append):this.appendIcon&&t.push(this.genIcon("append")),this.genSlot("append","outer",t)},onClick:function(t){this.$emit("click",t)},onMouseDown:function(t){this.hasMouseDown=!0,this.$emit("mousedown",t)},onMouseUp:function(t){this.hasMouseDown=!1,this.$emit("mouseup",t)}},render:function(t){return t("div",this.setTextColor(this.validationState,{staticClass:"v-input",class:this.classes}),this.genContent())}});e["a"]=g},ce7e:function(t,e,i){"use strict";var s=i("5530"),n=(i("8ce9"),i("7560"));e["a"]=n["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:Object(s["a"])({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:Object(s["a"])({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}})},d191:function(t,e,i){},ec29:function(t,e,i){}}]);
//# sourceMappingURL=chunk-a0fc0c60.44c37397.js.map