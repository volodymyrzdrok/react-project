"use strict";(self.webpackChunkreact_project=self.webpackChunkreact_project||[]).push([[978],{1758:function(e,r,a){a.d(r,{Z:function(){return j}});var s=a(9439),n={progressBar:"AuthForm_progressBar__DDeyq",formContainer:"AuthForm_formContainer__RykyM",form:"AuthForm_form__kV4hH",formTitleContainer:"AuthForm_formTitleContainer__evgNh",formTitle:"AuthForm_formTitle__HDuBL",formIcon:"AuthForm_formIcon__HsBDm",input:"AuthForm_input__sMieH",formInputMistake:"AuthForm_formInputMistake__7ZvNR",formInputWrapper:"AuthForm_formInputWrapper__zFZno",mainBtn:"AuthForm_mainBtn__X67Xw",subBtn:"AuthForm_subBtn__3si0H"},t=a(5705),i=a(1087),o=a(1413),l=a(2791),m=a(3329),u=function(e){return(0,m.jsx)("svg",(0,o.Z)((0,o.Z)({width:21,height:16,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),{},{children:(0,m.jsx)("path",{d:"M18.5 0h-16C1.4 0 .51.9.51 2L.5 14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zm0 4-8 5-8-5V2l8 5 8-5v2z"})}))},c=function(e){return(0,m.jsx)("svg",(0,o.Z)((0,o.Z)({width:17,height:21,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),{},{children:(0,m.jsx)("path",{d:"M14.5 7h-1V5c0-2.76-2.24-5-5-5s-5 2.24-5 5v2h-1c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H5.4V5c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"})}))},d=function(e){return(0,m.jsx)("svg",(0,o.Z)((0,o.Z)({width:19,height:18,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),{},{children:(0,m.jsx)("path",{d:"M.5 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2h-14a2 2 0 0 0-2 2zm12 4c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm-9 8c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1h-12v-1z"})}))},p=a(7012),h=a(7482),A=a(6853),g=a(6092),w=a(1973),f=a(7107),x=(0,f.Z)({palette:{primary:{main:"#24CCA7"}},components:{MuiLinearProgress:{styleOverrides:{root:{borderRadius:"20px",boxShadow:"0px 1px 8px rgba(36, 204, 167, 0.5)"}}}}}),v=(0,f.Z)({palette:{primary:{main:"#db2007"}},components:{MuiLinearProgress:{styleOverrides:{root:{borderRadius:"20px",boxShadow:"0px 1px 8px rgba(204, 36, 36, 0.5)"}}}}}),j=function(e){var r=e.onSubmitFunc,a=e.authType,o=(0,t.TA)({initialValues:"register"===a?{email:"",password:"",confirmPwd:"",username:""}:{email:"",password:""},validationSchema:(0,w.l)(a),onSubmit:function(e){r(e)}}),f=(0,l.useState)(0),j=(0,s.Z)(f,2),N=j[0],C=j[1];return(0,l.useEffect)((function(){"register"===a&&(0===o.values.confirmPwd.length?C(.01):o.values.password===o.values.confirmPwd&&0!==o.values.password.length?C(100):o.values.password.startsWith(o.values.confirmPwd)&&0!==o.values.password.length?C(100*o.values.confirmPwd.length/o.values.password.length):C(0))}),[N,o.values.confirmPwd,o.values.password,a]),(0,m.jsxs)("div",{className:n.formContainer,children:[(0,m.jsxs)("div",{className:n.formTitleContainer,children:[(0,m.jsxs)("picture",{className:n.logoIcon,children:[(0,m.jsx)("source",{media:"(min-width: 769px)",srcSet:A}),(0,m.jsx)("source",{media:"(max-width: 768px)",srcSet:g}),(0,m.jsx)("img",{src:A,alt:"wallet"})]}),(0,m.jsx)("h2",{className:n.formTitle,children:"Wallet"})]}),(0,m.jsxs)("form",{className:n.form,onSubmit:o.handleSubmit,children:[(0,m.jsxs)("div",{className:n.formInputWrapper,children:[(0,m.jsx)("input",{className:n.input,name:"email",type:"email",placeholder:"E-mail",onChange:o.handleChange,onBlur:o.handleBlur,value:o.values.email}),(0,m.jsx)(u,{className:n.formIcon}),o.touched.email&&o.errors.email?(0,m.jsx)("span",{className:n.formInputMistake,children:o.errors.email}):null]}),(0,m.jsxs)("div",{className:n.formInputWrapper,children:[(0,m.jsx)("input",{className:n.input,name:"password",type:"password",placeholder:"Password",onChange:o.handleChange,onBlur:o.handleBlur,value:o.values.password}),(0,m.jsx)(c,{className:n.formIcon}),o.touched.password&&o.errors.password?(0,m.jsx)("span",{className:n.formInputMistake,children:o.errors.password}):null]}),"register"===a&&(0,m.jsxs)("div",{children:[(0,m.jsxs)("div",{className:n.formInputWrapper,children:[(0,m.jsx)("input",{className:n.input,name:"confirmPwd",type:"password",placeholder:"Confirm password",onChange:o.handleChange,onBlur:o.handleBlur,value:o.values.confirmPwd}),(0,m.jsx)(c,{className:n.formIcon}),o.touched.confirmPwd&&o.errors.confirmPwd?(0,m.jsx)("span",{className:n.formInputMistake,children:o.errors.confirmPwd}):null]}),(0,m.jsx)(p.Z,{theme:0===N?v:x,children:(0,m.jsx)(h.Z,{className:n.progressBar,variant:"determinate",color:"primary",value:N})})]}),"register"===a&&(0,m.jsxs)("div",{className:n.formInputWrapper,children:[(0,m.jsx)("input",{className:n.input,name:"username",type:"text",placeholder:"First name",onChange:o.handleChange,onBlur:o.handleBlur,value:o.values.username}),(0,m.jsx)(d,{className:n.formIcon}),o.touched.username&&o.errors.username?(0,m.jsx)("span",{className:n.formInputMistake,children:o.errors.username}):null]}),(0,m.jsx)("button",{className:n.mainBtn,type:"submit",children:"register"===a?"Register":"Log in"}),(0,m.jsx)(i.rU,{to:"register"===a?"/login":"/register",children:(0,m.jsx)("button",{className:n.subBtn,children:"register"===a?"Log in":"Register"})})]})]})}},6978:function(e,r,a){a.r(r),a.d(r,{default:function(){return A}});var s=a(2791),n=a(9434),t=a(7186),i=a(5985),o=a(8363),l=a(1758),m=a(4111),u=a(3329),c=function(){var e=(0,n.I0)();return(0,u.jsx)(l.Z,{authType:"register",onSubmitFunc:function(r){var a=r.email,s=r.username,n=r.password;e((0,m.a$)({email:a,username:s,password:n}))}})},d=a(8492),p=a(1089),h=a(9577),A=function(){var e=(0,n.I0)(),r=(0,n.v9)(t.Hn);return(0,s.useEffect)((function(){"Request failed with status code 409"===r&&(i.Am.warning("User is already logged",(0,o.K)()),e((0,t.mo)()))}),[r,e]),(0,u.jsxs)("div",{children:[(0,u.jsxs)("div",{className:d.Z.background,children:[(0,u.jsx)("div",{className:d.Z.backdrop}),(0,u.jsx)("div",{className:"container",children:(0,u.jsxs)("div",{className:d.Z.contentWrapper,children:[(0,u.jsxs)("div",{className:d.Z.illustrationWrapper,children:[(0,u.jsxs)("picture",{className:d.Z.mainImg,children:[(0,u.jsx)("source",{media:"(min-width: 1280px)",srcSet:p}),(0,u.jsx)("source",{media:"(min-width: 768px)",srcSet:h}),(0,u.jsx)("img",{src:h,alt:"wallet"})]}),(0,u.jsx)("h2",{className:d.Z.illustrationText,children:"Finance App"})]}),(0,u.jsx)("div",{className:d.Z.formWrapper,children:(0,u.jsx)(c,{})})]})})]}),(0,u.jsx)(i.Ix,{})]})}},8363:function(e,r,a){a.d(r,{K:function(){return s}});var s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1500;return{position:"top-right",autoClose:e,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!0,progress:void 0,theme:"light"}}},1973:function(e,r,a){a.d(r,{l:function(){return t},o:function(){return i}});var s=a(1413),n=a(2797),t=function(e){var r={email:n.Z_().min(2,"Too Short!").max(50,"Too Long!").matches("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$","must be a valid email").required(),password:n.Z_().min(6,"Too Short!").max(12,"Password must be 6-12 characters").required()};return n.Ry().shape("register"===e?(0,s.Z)({username:n.Z_().min(1,"Too Short!").max(12,"Too Long!(must be less than 12 letters)").matches("^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$","only letters!").required("Required"),confirmPwd:n.Z_().oneOf([n.iH("password"),null],"Passwords must match").required()},r):r)},i=function(e){return e?n.Ry().shape({categoryName:n.Ry().required("Required"),amount:n.Rx().typeError("only numbers").positive("amount can't start with a minus").integer(" can't include a decimal point").required("amount is required")}):n.Ry().shape({amount:n.Rx().typeError("only numbers").positive("amount can't start with a minus").integer(" can't include a decimal point").required("amount is required")})}},8492:function(e,r){r.Z={background:"LoginPage_background__GqaPw",backdrop:"LoginPage_backdrop__s68sN",contentWrapper:"LoginPage_contentWrapper__erNa9",illustrationWrapper:"LoginPage_illustrationWrapper__7TTvR",illustrationText:"LoginPage_illustrationText__CoN2L",formWrapper:"LoginPage_formWrapper__ppMsG",mainImg:"LoginPage_mainImg__ejmzx"}},1089:function(e,r,a){e.exports=a.p+"static/media/reg-image-desk.793a8138536eba9aa8b6.webp"},9577:function(e,r,a){e.exports=a.p+"static/media/reg-image-tab.2302ebd26ec1681677aa.webp"},6092:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAI8SURBVHgB7VfNbtNAEJ5ZLyHl5CdAjhTurviROMUcONAL7YGWikt4gpQnaHiCJk/QRgiQEAdzghvumSJypwirfQHf6qa2p7NOUyVNUm/q1Jd2JGtX65n5Zma/Ha8RriDWn21TJuUGEG0QYAAgmv8erXVm8YGzKA8Dsqk55CaIjKOKv/g20PUldZTOAWMFCOZ4vGTKqKTeNYdt1DgtGNQCHMvwXDwg2FXj/uN1L9WP7tYB8SUHY6c2iK39h6/faQFPB6QAEV2e7J6I0FXZVH99cEDIGgfg8LozyR+/e6YCG16SEwFHS8pZ0Tck8v4+edPtZyVtCQub1b1P9TQwggxJnNTPJOAHvz/Wk1hsnvnoIIEbybCrshqUsLr3eYuDsrl8DEagzU0UtYtLcpDpSSg8FZX/dN0fMwzLZgSgSuzOeBCmx7K0dtjgMjYpLe31CmO0vn+5nxJNcMlaRYAq4VptPH/13+4DFywG9ZMsHHggNw9Yq1dfJkxMnyh+zxNfRz+MoKtGXFo9yOw7l4Ee9eLFe3dgmWlT07JBCKgXt3NljECdBcNweLKtb8NPyVjOt8eEPop4pAeoKmhYWvMlF8EOd6YKxbCSpXotrCbEzJtIblaPCEL9xeqBw33YzGJsvoyRrOTCMWLyWFm9X/EgZ8bYgAh2yIhX0BC2jkV6nI4TN2+pTVEyfhJSO0nQ1zEIe7HruZVgHntsIeEWat4PyjLdGu/261QcMG+N9m/HXIEJqA0FCd+IvR9fK56anwIaqeUQl+4ADwAAAABJRU5ErkJggg=="},6853:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALDSURBVHgB7ZjNbtNAEMdn1usg9RReIHWlcqdSi8Spya3iUldCiNJL8wRNn6DpE1CeoEEIFaiQzCmVuLgnDqginAmqoS8QLigQx8Osk5QkOCL2OlEq5Scl+5F4/ffOzO54EVJk+eLkgAh2EcDipuu3oOjd3/ZAAwkpcOfi5W5A4gAILPzbnZcmHHNZAA0QNOgJ685YNASF+tq2CwlJNIM9YTQ4Y6Mo8ccd7rQ+HFumkcl+ubdTg7QEji+MagRwjoSOL5vXApY/vsiDMDeJyFazTuGYJ5WWaO57K8VG1EhjmTgcGOUBV/MjBDUQ0eHKOd/M6d3M+nScNYOMDSDWlSi+XTb68uCwvrZThrgC/yPMZf86V2W/jynTSXnLBsRNGPlA/8io1Vcfr0T+AmMLi56l6//3mQ4S4BvN21FmxtHCqKGeDIjeIZHb78xjmy4GBLT1dfWJM9wvB8SByLM/sNnEoS9/1YafSAmTvrwLvshT2BN8469nanhdEMToINmwLy2Q0oJZwPe9M2fJ6zXxwaMrNimVYXbwWtTeen+6FLqUQKASzBaWCcZeryHYe7QdPG2obyUQMOPMBeoyF6hLKhl1NHQY/A4q/YtuEnih/q6/Tw1BSPvV14tHGw+veG8nCxKAATSqb3NO6gI5mXWrp7lCOjsUlifgg/Q5HBrABm2olLpARAizEjbz8A7VYFN5qoTxyU4tijkBKFTf5JYC0V6Jc930BLbC2YOzV/GieoLLzCALGbnHeedzI2OuEwRjXzc1gSqiRcYoxxGnSN/EhIthEXRMqjUUB1X6AhHsvH2ZJaNdVC/wkBSiGnJmPQkTZxdM4+nPZnvfdRZjRWwUE9nqung8sMOvFD8gJgGhd3aaq6j6JINEnd+UkhygYeewqaLq83xQl7lAXW6CQI3FdGJ0ckqF4D2p2M3TZgKVkVMrOOq1/wAXwS0jiANOuQAAAABJRU5ErkJggg=="}}]);
//# sourceMappingURL=978.41876843.chunk.js.map