"use strict";(self["webpackChunkproject"]=self["webpackChunkproject"]||[]).push([[776],{6776:function(e,t,r){r.r(t),r.d(t,{default:function(){return S}});var o=r(6252),n=r(9963),a=r(3577),s=r(6949);const i=e=>((0,o.dD)("data-v-01260592"),e=e(),(0,o.Cn)(),e),g={class:"div"},c=i((()=>(0,o._)("img",{src:s},null,-1))),A=i((()=>(0,o._)("button",{class:"buttonLoginAndRegister"},"Entrar",-1))),d={class:"await","v:if":"awaitMsg"},l=["v-if"],w=["v-if"];function u(e,t,r,s,i,u){const p=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",g,[(0,o._)("form",{class:"card",onSubmit:t[2]||(t[2]=(0,n.iM)((t=>e.getLogin()),["prevent"]))},[c,(0,o.wy)((0,o._)("input",{type:"text",placeholder:"Apelido","onUpdate:modelValue":t[0]||(t[0]=t=>e.username=t)},null,512),[[n.nr,e.username]]),(0,o.wy)((0,o._)("input",{type:"password",placeholder:"Senha","onUpdate:modelValue":t[1]||(t[1]=t=>e.password=t)},null,512),[[n.nr,e.password]]),A,(0,o._)("p",d,(0,a.zw)(e.awaitMsg),1),(0,o._)("p",{class:"errorLogin","v-if":e.errorLogin},(0,a.zw)(e.errorLogin),9,l),(0,o._)("p",{class:"sucessLogin","v-if":e.sucessLogin},(0,a.zw)(e.sucessLogin),9,w),(0,o._)("p",null,[(0,o.Uk)("Não tem uma conta? "),(0,o.Wm)(p,{to:"/register"},{default:(0,o.w5)((()=>[(0,o.Uk)("Criar conta")])),_:1})])],32)])}var p=r(6154);function m(e){this.message=e}m.prototype=new Error,m.prototype.name="InvalidCharacterError";var h="undefined"!=typeof window&&window.atob&&window.atob.bind(window)||function(e){var t=String(e).replace(/=+$/,"");if(t.length%4==1)throw new m("'atob' failed: The string to be decoded is not correctly encoded.");for(var r,o,n=0,a=0,s="";o=t.charAt(a++);~o&&(r=n%4?64*r+o:o,n++%4)?s+=String.fromCharCode(255&r>>(-2*n&6)):0)o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(o);return s};function f(e){var t=e.replace(/-/g,"+").replace(/_/g,"/");switch(t.length%4){case 0:break;case 2:t+="==";break;case 3:t+="=";break;default:throw"Illegal base64url string!"}try{return function(e){return decodeURIComponent(h(e).replace(/(.)/g,(function(e,t){var r=t.charCodeAt(0).toString(16).toUpperCase();return r.length<2&&(r="0"+r),"%"+r})))}(t)}catch(e){return h(t)}}function E(e){this.message=e}function v(e,t){if("string"!=typeof e)throw new E("Invalid token specified");var r=!0===(t=t||{}).header?0:1;try{return JSON.parse(f(e.split(".")[r]))}catch(e){throw new E("Invalid token specified: "+e.message)}}E.prototype=new Error,E.prototype.name="InvalidTokenError";var I=v,U=r(8222),C={name:"Home",data(){return{username:"",password:"",baseURL:"https://backend-turtle-pex86ccc5-tiagobonito44-hotmailcom.vercel.app/",awaitMsg:"",errorLogin:"",sucessLogin:""}},mounted(){document.body.style.background="#EAE6E6"},methods:{async getLogin(){this.awaitMsg="Tentando se conectar, aguarde..";const e={username:this.username,password:this.password};try{const t=await p.Z.post(`${this.baseURL}login`,e),r=JSON.stringify(t.data.token),o=I(r),n=o.username,a=o.email,s=o.phone,i=o.adress,g=o.id;localStorage.setItem("username",n),localStorage.setItem("email",a),localStorage.setItem("adress",i),localStorage.setItem("phone",s),localStorage.setItem("token",r),localStorage.setItem("userId",g),U.Z.push({name:"forum"})}catch(t){console.log(t.response)}this.validations()},validations(){this.awaitMsg&&(this.errorLogin=""),this.username&&this.password||(this.errorLogin="Verifique os campos.",this.awaitMsg=""),this.token||setTimeout((()=>{this.errorLogin="Inválido, tente novamente.",this.awaitMsg=""}),3e3),this.token&&setTimeout((()=>{this.errorLogin="",this.awaitMsg=""}),3e3)}}},T=r(3744);const b=(0,T.Z)(C,[["render",u],["__scopeId","data-v-01260592"]]);var S=b},6949:function(e){e.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=776.f4176015.js.map