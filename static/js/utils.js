"use strict";define(["jquery"],function(e){return{GetRequest:function(){var e=location.search,t={};if(-1!=e.indexOf("?"))for(var n=e.substr(1).split("&"),r=0;r<n.length;r++)t[n[r].split("=")[0]]=unescape(n[r].split("=")[1]);return t},b64DecodeUnicode:function(e){return decodeURIComponent(atob(e).split("").map(function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)}).join(""))},interfaceProxy:function(){return"/api"}}});