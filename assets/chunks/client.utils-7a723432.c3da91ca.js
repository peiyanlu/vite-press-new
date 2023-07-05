import{d,i as b}from"../app.861e674e.js";var M=function(){function e(){this.listeners={},this.listenersCount=0,this.channelId=Math.floor(Math.random()*1e6),this.listeners=[]}return e.prototype.cleanup=function(){this.listeners={},this.listenersCount=0},e.prototype.dispatch=function(r){Object.values(this.listeners).forEach(function(t){return t(r)})},e.prototype.listener=function(r){var t=this;if(typeof r!="function")return function(){};var u=this.listenersCount;return this.listeners[u]=r,this.listenersCount++,function(){delete t.listeners[u]}},e}();function p(e){return/[a-zA-Z.]/.test(e)}function y(e){return/[a-zA-Z]/.test(e)}function A(e){return/\s/.test(e)}function m(e){return/[&|]/.test(e)}function w(e){return/-/.test(e)}function S(e){return/["']/.test(e)}function E(e){return y(e)&&e===e.toUpperCase()}var a;(function(e){e.OR="OR",e.AND="AND",e.PIPE="PIPE",e.Command="Command",e.Argument="Argument",e.String="String",e.EnvVar="EnvVar"})(a||(a={}));var k=new Map([["&&",{type:a.AND}],["||",{type:a.OR}],["|",{type:a.PIPE}],["-",{type:a.Argument}]]);function P(e){var r=0,t=[];function u(){for(var n="";p(e[r])&&r<e.length;)n+=e[r],r++;return{type:a.Command,value:n}}function v(){for(var n="";m(e[r])&&r<e.length;)n+=e[r],r++;return k.get(n)}function c(){for(var n="";(w(e[r])||y(e[r]))&&r<e.length;)n+=e[r],r++;return{type:a.Argument,value:n}}function f(){var n=e[r],i=e[r];for(r++;e[r]!==n&&r<e.length;)i+=e[r],r++;return i+=e[r],r++,{type:a.String,value:i}}function h(){for(var n={},i=function(){for(var l="",s="";e[r]!=="="&&r<e.length;)l+=e[r],r++;for(e[r]==="="&&r++;e[r]!==" "&&r<e.length;)s+=e[r],r++;n[l]=s};E(e[r])&&r<e.length;)i(),r++;return{type:a.EnvVar,value:n}}for(;r<e.length;){var o=e[r];if(A(o)){r++;continue}switch(!0){case E(o):t.push(h());break;case p(o):t.push(u());break;case m(o):t.push(v());break;case w(o):t.push(c());break;case S(o):t.push(f());break;default:throw new Error("Unknown character: "+o)}}return t}var C=0;function F(){var e=Date.now(),r=Math.round(Math.random()*1e4),t=C+=1;return(+(""+e+r+t)).toString(16)}var O=function(e){return typeof e=="string"?new TextEncoder().encode(e):e},I=function(e){return typeof e=="string"?e:new TextDecoder().decode(e)},N=function(e){return Object.entries(e).reduce(function(r,t){var u=t[0],v=t[1];return r[u]=O(v.code),r},{})},V=function(e){var r={},t=["dev","start"];try{r=JSON.parse(e).scripts}catch(f){throw d("Could not parse package.json file: "+f.message)}b(r,"Failed to start. Please provide a `start` or `dev` script on the package.json");for(var u=function(f){if(t[f]in r){var h=t[f],o=r[h],n={},i="",l=[];return P(o).forEach(function(s){var g=i==="";s.type===a.EnvVar&&(n=s.value),s.type===a.Command&&g&&(i=s.value),(s.type===a.Argument||!g&&s.type===a.Command)&&l.push(s.value)}),{value:[i,l,{env:n}]}}},v=0;v<t.length;v++){var c=u(v);if(typeof c=="object")return c.value}throw d("Failed to start. Please provide a `start` or `dev` script on the package.json")},D=function(e){return typeof e=="string"?e:typeof e=="object"&&"message"in e?e.message:d("The server could not be reached. Make sure that the node script is running and that a port has been started.")};export{M as E,N as a,F as b,V as f,D as g,I as r,O as w};
