/* -----------------------------------------------
MOBILE FLYOUT
------------------------------------------------ */var navFly={init:function(){$(".more-nav").click(function(){$("#mobile-flyout").toggleClass("open slide");$(".main-content").toggleClass("dark");return!1})}},albumFilter={init:function(){$(".filter-toggle").click(function(){$("#slider").toggleClass("filter-show")});$(".filter-close").click(function(){$("#slider").removeClass("filter-show")})}},slider={init:function(){var e=[];$("#position a ").each(function(){var t=$(this);e.push(t)});window.mySwipe=$("#slider").Swipe({continuous:!1,callback:function(t){var n=e.length;while(n--)e[n].removeClass("on");e[t].addClass("on")}}).data("Swipe")}};$(document).bind("ready scroll",function(){var e=$(document).scrollTop();e>=300?$("#nav").hasClass("sticky")||$("#nav").addClass("sticky").css({top:"-300px"}).stop().animate({top:0},500):$("#nav").removeClass("sticky").removeAttr("style")});(function(e,t){var n=e.History,r=e.jQuery,i=e.document;if(!n.enabled)return!1;r(function(){var t=".wrap",s=r(t).filter(":first"),o=s.get(0),u=r(e),a=r(i.body),f=n.getRootUrl();s.length===0&&(s=a);r.expr[":"].internal=function(e){var t=r(e),n=t.attr("href")||"",i;i=n.substring(0,f.length)===f||n.indexOf(":")===-1;return i};var l=function(e){var t=String(e).replace(/<\!DOCTYPE[^>]*>/i,"").replace(/<(html|head|body|title|meta|script)([\s\>])/gi,'<div class="document-$1"$2').replace(/<\/(html|head|body|title|meta|script)\>/gi,"</div>");return t};r.fn.ajaxify=function(){var e=r(this);e.find(".page-nav a").click(function(e){var t=r(this),i=t.attr("href"),s=t.attr("title")||null;if(e.which===2||e.metaKey)return!0;n.pushState(null,s,i);e.preventDefault();return!1});return e};a.ajaxify();u.bind("statechange",function(){var u=n.getState(),f=u.url;a.addClass("loading");r("#main-content").removeClass("in").addClass("slide out");r.ajax({url:f,success:function(n){var u=r(l(n)),c=u.find(".document-body:first"),h=c.find(t).filter(":first"),p,d;d=h.find(".document-script");d.length&&d.detach();p=h.html()||u.html();if(!p){i.location.href=f;return!1}s.html(p).ajaxify();navFly.init();albumFilter.init();slider.init();i.title=u.find(".document-title:first").text();try{i.getElementsByTagName("title")[0].innerHTML=i.title.replace("<","&lt;").replace(">","&gt;").replace(" & "," &amp; ")}catch(v){}d.each(function(){var e=r(this),t=e.text(),n=e.attr("src"),s=i.createElement("script");if(n){s.src=n;o.appendChild(s)}else{s.appendChild(i.createTextNode(t));o.appendChild(s)}});r("#main-content").addClass("slide in");a.removeClass("loading");typeof e._gaq!="undefined"&&e._gaq.push(["_trackPageview",relativeUrl])},error:function(e){i.location.href=f;return!1}})})})})(window);$(document).ready(function(){navFly.init();albumFilter.init();slider.init();$.localScroll({hash:!0,duration:"300"});var e=$(window).width();e>=600?$(".photo-container a").colorbox({rel:"group",scalePhotos:!0,maxHeight:"900px",speed:200,opacity:".7"}):$(".photo-container a").click(function(e){event.preventDefault()});$(".album-cover img").click(function(){$(".album-cover img").toggleClass("album-cover-toggled")});$(".post-content p").each(function(){var e=$(this).text().split(" ").length;console.log(e);if(e>=10){$(this).css("text-align","justify");$(this).siblings().css("text-align","justify")}});$("#contact").validate({rules:{name:{required:!0,minlength:2},email:{required:!0,email:!0},message:{required:!0,minlength:5}},messages:{name:"Please enter your name",email:"Please enter your email",message:"Please enter a message"}});$("#contact").submit(function(e){function s(e){var t=new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);return t.test(e)}e.preventDefault();var t=$("#name").val(),n=$("#email").val(),r=$("#message").val(),i="name="+t+"&email="+n+"&text="+message;s(n)&&message.length>100&&t.length>1?$.ajax({type:"POST",url:"../../feedback/contactengine.php",data:i,success:function(){$(".success").fadeIn(1e3)}}):$(".error").fadeIn(1e3);return!1})});