"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[383],{2383:function(e,r,a){a.r(r),a.d(r,{default:function(){return q}});var n=a(9439),l=a(2791),i=a(1413),s=a(2701),t=a(4363),o=a(9886),d=a(7872),u=a(9219),c=a(9477),m=a(1999),v=a(6992),h=a(184),p=(0,o.k)({name:"FormErrorStylesContext",errorMessage:"useFormErrorStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormError />\" "}),f=(0,n.Z)(p,2),x=f[0],Z=f[1],b=(0,d.G)((function(e,r){var a=(0,u.jC)("FormError",e),n=(0,c.Lr)(e),l=(0,s.NJ)();return(null==l?void 0:l.isInvalid)?(0,h.jsx)(x,{value:a,children:(0,h.jsx)(m.m.div,(0,i.Z)((0,i.Z)({},null==l?void 0:l.getErrorMessageProps(n,r)),{},{className:(0,v.cx)("chakra-form__error-message",e.className),__css:(0,i.Z)({display:"flex",alignItems:"center"},a.text)}))}):null}));b.displayName="FormErrorMessage",(0,d.G)((function(e,r){var a=Z(),n=(0,s.NJ)();if(!(null==n?void 0:n.isInvalid))return null;var l=(0,v.cx)("chakra-form__error-icon",e.className);return(0,h.jsx)(t.J,(0,i.Z)((0,i.Z)({ref:r,"aria-hidden":!0},e),{},{__css:a.icon,className:l,children:(0,h.jsx)("path",{fill:"currentColor",d:"M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"})}))})).displayName="FormErrorIcon";var I=a(4585),g=a(7886),y=a(4224),_=a(9434),N=a(5822),q=function(){var e=(0,_.I0)(),r=(0,l.useState)(""),a=(0,n.Z)(r,2),i=a[0],t=a[1],o=(0,l.useState)(""),d=(0,n.Z)(o,2),u=d[0],c=d[1],m=(0,l.useState)(""),v=(0,n.Z)(m,2),p=v[0],f=v[1],x=function(e){var r=e.target,a=r.name,n=r.value;switch(a){case"name":return t(n);case"email":return c(n);case"password":return f(n);default:return}};return(0,h.jsxs)(s.NI,{onSubmit:function(r){r.preventDefault(),e((0,N.z2)({name:i,email:u,password:p})),c(""),t(""),f("")},autoComplete:"off",as:"form",w:"40%",m:"60px auto 0px",align:"center",children:[(0,h.jsx)(I.l,{children:"Name"}),(0,h.jsx)(g.I,{isInvalid:""===i,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",value:i,isRequired:!0,placeholder:"Name",onChange:x}),""===i&&(0,h.jsx)(b,{children:"Name is required."}),(0,h.jsx)(I.l,{children:"Email"}),(0,h.jsx)(g.I,{isInvalid:""===u,type:"email",name:"email",value:u,onChange:x,pattern:"^([a-z0-9_-]+\\.)*[a-z0-9_-]+@[a-z0-9_-]+(\\.[a-z0-9_-]+)*\\.[a-z]{2,6}$",isRequired:!0,placeholder:"Exaple: User@mail.com"}),""===u&&(0,h.jsx)(b,{children:"Email is required."}),(0,h.jsx)(I.l,{children:"Password "}),(0,h.jsx)(g.I,{isInvalid:""===p,type:"password",name:"password",value:p,onChange:x,pattern:"^.{7,}$",isRequired:!0,placeholder:"Passwords must be at least 7 characters"}),""===p&&(0,h.jsx)(b,{children:"Password is required."}),(0,h.jsx)(y.z,{mt:4,colorScheme:"teal",type:"submit",children:"Create account"})]})}},4585:function(e,r,a){a.d(r,{l:function(){return v}});var n=a(1413),l=a(4925),i=a(2701),s=a(7872),t=a(9219),o=a(9477),d=a(1999),u=a(6992),c=a(184),m=["className","children","requiredIndicator","optionalIndicator"],v=(0,s.G)((function(e,r){var a,s=(0,t.mq)("FormLabel",e),v=(0,o.Lr)(e),p=(v.className,v.children),f=v.requiredIndicator,x=void 0===f?(0,c.jsx)(h,{}):f,Z=v.optionalIndicator,b=void 0===Z?null:Z,I=(0,l.Z)(v,m),g=(0,i.NJ)(),y=null!=(a=null==g?void 0:g.getLabelProps(I,r))?a:(0,n.Z)({ref:r},I);return(0,c.jsxs)(d.m.label,(0,n.Z)((0,n.Z)({},y),{},{className:(0,u.cx)("chakra-form__label",v.className),__css:(0,n.Z)({display:"block",textAlign:"start"},s),children:[p,(null==g?void 0:g.isRequired)?x:b]}))}));v.displayName="FormLabel";var h=(0,s.G)((function(e,r){var a=(0,i.NJ)(),l=(0,i.e)();if(!(null==a?void 0:a.isRequired))return null;var s=(0,u.cx)("chakra-form__required-indicator",e.className);return(0,c.jsx)(d.m.span,(0,n.Z)((0,n.Z)({},null==a?void 0:a.getRequiredIndicatorProps(e,r)),{},{__css:l.requiredIndicator,className:s}))}));h.displayName="RequiredIndicator"},2701:function(e,r,a){a.d(r,{NI:function(){return q},NJ:function(){return N},e:function(){return I}});var n=a(1413),l=a(4925),i=a(9439),s=a(9886),t=a(4591),o=a(7872),d=a(9219),u=a(9477),c=a(1999),m=a(6992),v=a(2791),h=a(184),p=["id","isRequired","isInvalid","isDisabled","isReadOnly"],f=["getRootProps","htmlProps"],x=(0,s.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),Z=(0,i.Z)(x,2),b=Z[0],I=Z[1],g=(0,s.k)({strict:!1,name:"FormControlContext"}),y=(0,i.Z)(g,2),_=y[0],N=y[1];var q=(0,o.G)((function(e,r){var a=(0,d.jC)("Form",e),s=function(e){var r=e.id,a=e.isRequired,s=e.isInvalid,o=e.isDisabled,d=e.isReadOnly,u=(0,l.Z)(e,p),c=(0,v.useId)(),h=r||"field-".concat(c),f="".concat(h,"-label"),x="".concat(h,"-feedback"),Z="".concat(h,"-helptext"),b=(0,v.useState)(!1),I=(0,i.Z)(b,2),g=I[0],y=I[1],_=(0,v.useState)(!1),N=(0,i.Z)(_,2),q=N[0],R=N[1],k=(0,v.useState)(!1),j=(0,i.Z)(k,2),F=j[0],C=j[1],P=(0,v.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,n.Z)((0,n.Z)({id:Z},e),{},{ref:(0,t.lq)(r,(function(e){e&&R(!0)}))})}),[Z]),S=(0,v.useCallback)((function(){var e,r,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,n.Z)((0,n.Z)({},a),{},{ref:l,"data-focus":(0,m.PB)(F),"data-disabled":(0,m.PB)(o),"data-invalid":(0,m.PB)(s),"data-readonly":(0,m.PB)(d),id:null!=(e=a.id)?e:f,htmlFor:null!=(r=a.htmlFor)?r:h})}),[h,o,F,s,d,f]),w=(0,v.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,n.Z)((0,n.Z)({id:x},e),{},{ref:(0,t.lq)(r,(function(e){e&&y(!0)})),"aria-live":"polite"})}),[x]),z=(0,v.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,n.Z)((0,n.Z)((0,n.Z)({},e),u),{},{ref:r,role:"group"})}),[u]),O=(0,v.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,n.Z)((0,n.Z)({},e),{},{ref:r,role:"presentation","aria-hidden":!0,children:e.children||"*"})}),[]);return{isRequired:!!a,isInvalid:!!s,isReadOnly:!!d,isDisabled:!!o,isFocused:!!F,onFocus:function(){return C(!0)},onBlur:function(){return C(!1)},hasFeedbackText:g,setHasFeedbackText:y,hasHelpText:q,setHasHelpText:R,id:h,labelId:f,feedbackId:x,helpTextId:Z,htmlProps:u,getHelpTextProps:P,getErrorMessageProps:w,getRootProps:z,getLabelProps:S,getRequiredIndicatorProps:O}}((0,u.Lr)(e)),o=s.getRootProps,x=(s.htmlProps,(0,l.Z)(s,f)),Z=(0,m.cx)("chakra-form-control",e.className);return(0,h.jsx)(_,{value:x,children:(0,h.jsx)(b,{value:a,children:(0,h.jsx)(c.m.div,(0,n.Z)((0,n.Z)({},o({},r)),{},{className:Z,__css:a.container}))})})}));q.displayName="FormControl",(0,o.G)((function(e,r){var a=N(),l=I(),i=(0,m.cx)("chakra-form__helper-text",e.className);return(0,h.jsx)(c.m.div,(0,n.Z)((0,n.Z)({},null==a?void 0:a.getHelpTextProps(e,r)),{},{__css:l.helperText,className:i}))})).displayName="FormHelperText"},7886:function(e,r,a){a.d(r,{I:function(){return f}});var n=a(1413),l=a(4925),i=a(2701),s=a(6992),t=["isDisabled","isInvalid","isReadOnly","isRequired"],o=["id","disabled","readOnly","required","isRequired","isInvalid","isReadOnly","isDisabled","onFocus","onBlur"];function d(e){var r=function(e){var r,a,t,d=(0,i.NJ)(),u=e.id,c=e.disabled,m=e.readOnly,v=e.required,h=e.isRequired,p=e.isInvalid,f=e.isReadOnly,x=e.isDisabled,Z=e.onFocus,b=e.onBlur,I=(0,l.Z)(e,o),g=e["aria-describedby"]?[e["aria-describedby"]]:[];(null==d?void 0:d.hasFeedbackText)&&(null==d?void 0:d.isInvalid)&&g.push(d.feedbackId);(null==d?void 0:d.hasHelpText)&&g.push(d.helpTextId);return(0,n.Z)((0,n.Z)({},I),{},{"aria-describedby":g.join(" ")||void 0,id:null!=u?u:null==d?void 0:d.id,isDisabled:null!=(r=null!=c?c:x)?r:null==d?void 0:d.isDisabled,isReadOnly:null!=(a=null!=m?m:f)?a:null==d?void 0:d.isReadOnly,isRequired:null!=(t=null!=v?v:h)?t:null==d?void 0:d.isRequired,isInvalid:null!=p?p:null==d?void 0:d.isInvalid,onFocus:(0,s.v0)(null==d?void 0:d.onFocus,Z),onBlur:(0,s.v0)(null==d?void 0:d.onBlur,b)})}(e),a=r.isDisabled,d=r.isInvalid,u=r.isReadOnly,c=r.isRequired,m=(0,l.Z)(r,t);return(0,n.Z)((0,n.Z)({},m),{},{disabled:a,readOnly:u,required:c,"aria-invalid":(0,s.Qm)(d),"aria-required":(0,s.Qm)(c),"aria-readonly":(0,s.Qm)(u)})}var u=a(7872),c=a(9219),m=a(9477),v=a(1999),h=a(184),p=["htmlSize"],f=(0,u.G)((function(e,r){var a=e.htmlSize,i=(0,l.Z)(e,p),t=(0,c.jC)("Input",i),o=d((0,m.Lr)(i)),u=(0,s.cx)("chakra-input",e.className);return(0,h.jsx)(v.m.input,(0,n.Z)((0,n.Z)({size:a},o),{},{__css:t.field,ref:r,className:u}))}));f.displayName="Input",f.id="Input"}}]);
//# sourceMappingURL=383.dcfdbc9c.chunk.js.map