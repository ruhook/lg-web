"use strict";function setHtmlFontSize(){var t,e,n,m=document.documentElement.clientWidth;console.log(m),1024<=m?(t=100,e=1920,n=document.documentElement.clientWidth/e,document.getElementsByTagName("html")[0].style.cssText="font-size:65px !important"):768<=m&&m<1024?(t=100,e=768,n=document.documentElement.clientWidth/e,document.getElementsByTagName("html")[0].style.cssText="font-size:"+t*Math.min(n,2)+"px !important"):m<768&&(t=100,e=750,n=document.documentElement.clientWidth/e,document.getElementsByTagName("html")[0].style.cssText="font-size:"+t*Math.min(n,2)+"px !important"),console.log(t,e)}window.addEventListener&&window.addEventListener("resize",function(){setHtmlFontSize()},!1),setHtmlFontSize();