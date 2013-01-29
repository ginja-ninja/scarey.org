/* -----------------------------------------------  

Site Name: Crafted Pixelz
File: global.js
Author: Abid Din
Version: 1.0
Copyright (c): Crafted Pixelz
  
------------------------------------------------ *//* -----------------------------------------------  
  HTML5 HISTORY  
------------------------------------------------ */var html5History={init:function(){var e=window.History,t=window.jQuery,n=window.document;if(!e.enabled)return!1;var r="#main-content",i=t(r),s=i.get(0),o=t("#page-nav"),u="a",a="active",f=".active",l=t(n.body),c=e.getRootUrl();i.length===0&&(i=l);var h=window.location.pathname.split("/"),p=h[1];o.find(u).removeClass("active");window.location.pathname==="/"?t("#home-link").addClass("active"):t("#"+p+"-link").addClass("active");t.expr[":"].internal=function(e,n,r,i){var s=t(e),o=s.attr("href")||"",u;u=o.substring(0,c.length)===c||o.indexOf(":")===-1;return u};var d={init:function(){t("a[href^='http://']").each(function(){t(this).attr("target","_blank")})}};d.init();var v=function(e){var t=String(e).replace(/<\!DOCTYPE[^>]*>/i,"").replace(/<(html|head|body|title|meta|script)([\s\>])/gi,'<div class="document-$1"$2').replace(/<\/(html|head|body|title|meta|script)\>/gi,"</div>");return t};t.fn.ajaxify=function(){var r=t(this);r.find('a:internal:not(.no-ajaxy,[href^="#"])').click(function(r){var i=t(this),s=i.attr("href"),o=n.title;if(r.which==2||r.metaKey)return!0;clicky.log(t(this).attr("href"));e.pushState(null,o,s);r.preventDefault();return!1});return r};l.ajaxify();t(window).bind("statechange",function(){function g(){t.ajax({url:p,success:function(e,c,h){function T(e,n){t("html:not(:animated),body:not(:animated)").delay(n).animate({scrollTop:t("#"+e).offset().top},600)}var g=t(v(e)),y=g.find(".document-body:first"),b=y.find(r).filter(":first"),w,E,S;S=b.find(".document-script");S.length&&S.detach();E=b.html()||g.html();if(!E){n.location.href=p;return!1}w=o.find(u);w.filter(f).removeClass(a);w=w.has('a[href^="'+m+'"],a[href^="/'+m+'"],a[href^="'+p+'"]');w.length===1?w.addClass(a):window.location.pathname==="/"&&t("#home-link").addClass("active");i.html(E).ajaxify();work.init();d.init();contact.init();n.title=g.find(".document-title:first").text();try{n.getElementsByTagName("title")[0].innerHTML=n.title.replace("<","&lt;").replace(">","&gt;").replace(" & "," &amp; ")}catch(x){}S.each(function(){var e=t(this),r=e.text(),i=n.createElement("script");i.appendChild(n.createTextNode(r));s.appendChild(i)});t("#main-content").css("left","-100px").delay(100).animate({left:0,opacity:1},600,"easeOutExpo");t("#footer").css("left","-100px").animate({left:0,opacity:1},500,"easeOutExpo",function(){T("logo",0)});l.removeClass("loading")},error:function(e,t,r){n.location.href=p;return!1}})}var h=e.getState(),p=h.url,m=p.replace(c,"");l.addClass("loading");t("#main-content").delay(100).animate({left:"100px",opacity:0},600,"easeInOutExpo",function(){g()});t("#footer").animate({left:"100px",opacity:0},500,"easeInOutExpo")})}},preload={init:function(){$("body").prepend("<div id='loader' />");$("#loader").css({top:$(window).height()/2-$("#loader").height()/2,left:$(window).width()/2-$("#loader").width()/2});var e=new CanvasLoader("loader");e.setColor("#73d0ff");e.setDiameter(100);e.setDensity(100);e.setRange(1);e.setSpeed(3);e.setFPS(40);e.show()}},animate={entrance:function(){function n(){$("#pixelbg").delay(500).animate({top:0},250,function(){$("#container").css("visibility","visible").delay(200).animate({top:0,opacity:1},500,function(){var e=$("#nav li"),t=0;(function(){$(e[t++]).animate({top:0,opacity:1},180,arguments.callee)})();requestInterval(animate.sparkle,2e3)})})}var e=36;$("body").prepend("<div id='pixelbg' />");for(var t=0;t<e;t++)$("#pixelbg").append("<span />");$("#pixelbg span").each(function(){var e=["#c5e8ff","#9ad8ff","#5ec0ff","#e2f4ff","#dbf1ff","#81ceff","#94d5ff","#8bd2ff"],t=e[Math.floor(Math.random()*e.length)];$(this).css("background-color",t)});$(window).load(function(){$("#loader").fadeOut(500,function(){$(this).remove();n()})})},sparkle:function(){$("#pixelbg span").each(function(){var e=["#c5e8ff","#9ad8ff","#5ec0ff","#e2f4ff","#dbf1ff","#81ceff","#94d5ff","#8bd2ff"],t=e[Math.floor(Math.random()*e.length)];$(this).css({backgroundColor:t},800)})}},keyNav={init:function(){var e="#nav li.active";$(document).keydown(function(t){var n=null;t.keyCode==37?n="prev":t.keyCode==39&&(n="next");n!==null&&$(e)[n]().find("a").click()})}},social={init:function(){$("#show").mouseover(function(){Socialite.load("#buttons")}).toggle(function(){$(this).next("#buttons").stop().animate({left:0,opacity:1},300)},function(){$(this).next("#buttons").stop().animate({left:"235px",opacity:0},300)})}},work={init:function(){var e=$(".work-item"),t=$(".details, .screenie");e.each(function(){var e=$(this);e.attr("data-height",e.outerHeight())}).css("height","190px");t.toggle(function(){var e=$(this),t=e.parent(),n=t.data("height");$("html:not(:animated),body:not(:animated)").animate({scrollTop:t.offset().top-20},600,"easeInOutExpo");t.find(".more").text("See Less");t.find(".details").css("background","#222527 url(http://cdn.craftedpixelz.co.uk/resource/images/arrow-down.png) 190px 140px no-repeat");t.animate({height:n},200,"easeInOutExpo",function(){var e=$(this);e.find(".desc, .role").animate({top:0,opacity:1},400,"easeOutBack")})},function(){var e=$(this).parent();e.find(".more").text("See More");e.find(".details").css("background","#222527 url(http://cdn.craftedpixelz.co.uk/resource/images/arrow-right.png) 190px bottom no-repeat");e.find(".desc, .role").animate({top:"100px",opacity:0},400,"easeInBack",function(){e.animate({height:"190px"},200,"easeInOutExpo")})});$(".comingsoon").find(t).off()}},contact={init:function(){$("#getintouch").submit(function(e){e.preventDefault();var t=$(this).serialize(),n=$("#getintouch")[0].checkValidity();n===!0&&$.ajax({data:t,url:"/contact",type:"POST",success:function(){$("#getintouch").slideUp(300,function(){var e=$("#name").val();$(this).after("<div class='thanks'></div>");$(".thanks").append("<h2>Message sent successfully!</h2>").append("Thanks for contacting me "+e+". I'll be in touch as soon as possible!").animate({top:0,opacity:1},500,"easeOutBack")})}})})}},clicky_site_ids=clicky_site_ids||[];clicky_site_ids.push(142937);var analytics={init:function(){var e=document.createElement("script");e.async=!0;e.src="//static.getclicky.com/js";(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).appendChild(e)}};$(function(){preload.init();animate.entrance();html5History.init();keyNav.init();social.init();work.init();contact.init();analytics.init()});