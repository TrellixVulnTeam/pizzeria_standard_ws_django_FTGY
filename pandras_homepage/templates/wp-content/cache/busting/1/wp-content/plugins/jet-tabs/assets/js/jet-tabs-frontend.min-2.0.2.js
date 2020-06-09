!function(t,e,a){"use strict";var o={addedScripts:{},addedStyles:{},addedAssetsPromises:[],devMode:JetTabsSettings.devMode||"false",init:function(){var a={"jet-tabs.default":o.tabsInit,"jet-accordion.default":o.accordionInit,"jet-image-accordion.default":o.imageAccordionInit,"jet-switcher.default":o.switcherInit};t.each(a,function(t,a){e.hooks.addAction("frontend/element_ready/"+t,a)})},tabsInit:function(e){var a,n=t(".jet-tabs",e).first(),i=n.data("id"),r=t(window),s=t(".jet-tabs__control-wrapper",n).first(),c=t(".jet-tabs__content-wrapper",n).first(),d=t("> .jet-tabs__control",s),l=t("> .jet-tabs__content",c),h=n.data("settings")||{},g=null,u=window.location.hash||!1,w=!!u&&u.replace("#","").split("&");if("click"===h.event?d.on("click.jetTabs",function(){var e=t(this),a=+e.data("tab")-1;clearInterval(g),h.ajaxTemplate&&p(a),v(a)}):"ontouchend"in window||"ontouchstart"in window?(d.on("touchstart",function(e){a=t(window).scrollTop()}),d.on("touchend",function(e){var o=t(this),n=+o.data("tab")-1;if(a!==t(window).scrollTop())return!1;clearInterval(g),h.ajaxTemplate&&p(n),v(n)})):d.on("mouseenter",function(e){var a=t(this),o=+a.data("tab")-1;clearInterval(g),h.ajaxTemplate&&p(o),v(o)}),h.autoSwitch){var m=h.activeIndex,f=d.length;g=setInterval(function(){m<f-1?m++:m=0,h.ajaxTemplate&&p(m),v(m)},+h.autoSwitchDelay)}function v(t){var e,a=d.eq(t),o=l.eq(t),n="auto";c.css({height:c.outerHeight(!0)}),d.removeClass("active-tab"),a.addClass("active-tab"),d.attr("aria-expanded","false"),a.attr("aria-expanded","true"),l.removeClass("active-content"),n=o.outerHeight(!0),n+=parseInt(c.css("border-top-width"))+parseInt(c.css("border-bottom-width")),o.addClass("active-content"),l.attr("aria-hidden","true"),o.attr("aria-hidden","false"),c.css({height:n}),r.trigger("jet-tabs/tabs/show-tab-event/before",{widgetId:i,tabIndex:t}),e&&clearTimeout(e),e=setTimeout(function(){r.trigger("jet-tabs/tabs/show-tab-event/after",{widgetId:i,tabIndex:t}),c.css({height:"auto"})},500)}function p(e){var a=l.eq(e),n=a.data("template-loaded")||!1,i=a.data("template-id"),r=t(".jet-tabs-loader",a);if(n)return!1;a.data("template-loaded",!0),t.ajax({type:"GET",url:window.JetTabsSettings.templateApiUrl,dataType:"json",data:{id:i,dev:window.JetTabsSettings.devMode},success:function(t,e,n){var i=t.template_content,s=t.template_scripts,c=t.template_styles;for(var d in s)o.addedAssetsPromises.push(o.loadScriptAsync(d,s[d]));for(var l in c)o.addedAssetsPromises.push(o.loadStyle(l,c[l]));Promise.all(o.addedAssetsPromises).then(t=>{r.remove(),a.append(i),o.elementorFrontendInit(a)},t=>{console.log("Script Loaded Error")})}})}h.ajaxTemplate&&p(h.activeIndex),t(window).on("resize.jetTabs orientationchange.jetTabs",function(){c.css({height:"auto"})}),w&&d.each(function(e){var a=t(this).attr("id"),o=e;w.forEach(function(t,e){t===a&&(h.ajaxTemplate&&p(o),v(o))})}),t(document).on("click.jetTabAnchor",'a[href*="#jet-tabs-control-"]',function(a){var o=t(this.hash);if(o.closest(e)[0]){var n=o.data("tab")-1;h.ajaxTemplate&&p(n),v(n)}})},switcherInit:function(e){var a,o=t(".jet-switcher",e).first(),n=o.data("id"),i=t(window),r=t(".jet-switcher__control-wrapper",o).first(),s=t(".jet-switcher__content-wrapper",o).first(),c=t("> .jet-switcher__control-instance",r),d=t("> .jet-switcher__control-instance > .jet-switcher__control, > .jet-switcher__control",r),l=t("> .jet-switcher__content",s),h=(t("> .jet-switcher__content--disable",s),t("> .jet-switcher__content--enable",s),o.hasClass("jet-switcher--disable"));o.data("settings");function g(t){var e,a,r,c="auto";s.css({height:s.outerHeight(!0)}),o.toggleClass("jet-switcher--disable jet-switcher--enable"),e=(h=!o.hasClass("jet-switcher--disable"))?d.eq(1):d.eq(0),a=h?l.eq(1):l.eq(0),l.removeClass("active-content"),c=a.outerHeight(!0),c+=parseInt(s.css("border-top-width"))+parseInt(s.css("border-bottom-width")),a.addClass("active-content"),d.attr("aria-expanded","false"),e.attr("aria-expanded","true"),l.attr("aria-hidden","true"),a.attr("aria-hidden","false"),s.css({height:c}),i.trigger("jet-tabs/switcher/show-case-event/before",{widgetId:n,caseIndex:t}),r&&clearTimeout(r),r=setTimeout(function(){i.trigger("jet-tabs/switcher/show-case-event/after",{widgetId:n,caseIndex:t}),s.css({height:"auto"})},500)}"ontouchend"in window||"ontouchstart"in window?(c.on("touchstart",function(e){a=t(window).scrollTop()}),c.on("touchend",function(e){if(a!==t(window).scrollTop())return!1;g()})):c.on("click.jetSwitcher",function(){g()}),t(window).on("resize.jetSwitcher orientationchange.jetSwitcher",function(){s.css({height:"auto"})})},accordionInit:function(e){var a,n,i=t(".jet-accordion",e).first(),r=i.data("id"),s=t(window),c=t("> .jet-accordion__inner > .jet-toggle > .jet-toggle__control",i),d=i.data("settings"),l=t("> .jet-accordion__inner > .jet-toggle",i),h=window.location.hash||!1,g=!!h&&h.replace("#","").split("&");function u(e){var a=l.eq(e),n=t("> .jet-toggle__content",a),i=t("> .jet-toggle__content > .jet-toggle__content-inner",a),r=n.data("template-loaded")||!1,s=n.data("template-id"),c=t(".jet-tabs-loader",i);if(r)return!1;n.data("template-loaded",!0),t.ajax({type:"GET",url:window.JetTabsSettings.templateApiUrl,dataType:"json",data:{id:s,dev:window.JetTabsSettings.devMode},success:function(t,e,a){var n=t.template_content,r=t.template_scripts,s=t.template_styles;for(var d in r)o.addedAssetsPromises.push(o.loadScriptAsync(d,r[d]));for(var l in s)o.addedAssetsPromises.push(o.loadStyle(l,s[l]));Promise.all(o.addedAssetsPromises).then(t=>{c.remove(),i.append(n),o.elementorFrontendInit(i)},t=>{console.log("Script Loaded Error")})}})}t(window).on("resize.jetAccordion orientationchange.jetAccordion",function(){var e=t("> .jet-accordion__inner > .active-toggle",i);t("> .jet-toggle__content",e).css({height:"auto"})}),c.on("click.jetAccordion",function(){var e=t(this),o=e.closest(".jet-toggle"),i=+e.data("toggle")-1;if(d.collapsible)o.hasClass("active-toggle")||l.each(function(e){var o=t(this),c=t("> .jet-toggle__control",o),l=t("> .jet-toggle__content",o),h=t("> .jet-toggle__content > .jet-toggle__content-inner",o).outerHeight();h+=parseInt(l.css("border-top-width"))+parseInt(l.css("border-bottom-width")),e===i?(o.addClass("active-toggle"),l.css({height:h}),c.attr("aria-expanded","true"),l.attr("aria-hidden","false"),d.ajaxTemplate&&u(i),s.trigger("jet-tabs/accordion/show-toggle-event/before",{widgetId:r,toggleIndex:i}),a&&clearTimeout(a),a=setTimeout(function(){s.trigger("jet-tabs/accordion/show-toggle-event/after",{widgetId:r,toggleIndex:i}),l.css({height:"auto"})},300)):o.hasClass("active-toggle")&&(l.css({height:l.outerHeight()}),o.removeClass("active-toggle"),c.attr("aria-expanded","false"),l.attr("aria-hidden","true"),n&&clearTimeout(n),n=setTimeout(function(){l.css({height:0})},5))});else{var c=t("> .jet-toggle__content",o),h=t("> .jet-toggle__content > .jet-toggle__content-inner",o).outerHeight();h+=parseInt(c.css("border-top-width"))+parseInt(c.css("border-bottom-width")),o.toggleClass("active-toggle"),o.hasClass("active-toggle")?(c.css({height:h}),e.attr("aria-expanded","true"),c.attr("aria-hidden","false"),d.ajaxTemplate&&u(i),s.trigger("jet-tabs/accordion/show-toggle-event/before",{widgetId:r,toggleIndex:i}),a&&clearTimeout(a),a=setTimeout(function(){s.trigger("jet-tabs/accordion/show-toggle-event/after",{widgetId:r,toggleIndex:i}),c.css({height:"auto"})},300)):(c.css({height:c.outerHeight()}),e.attr("aria-expanded","false"),c.attr("aria-hidden","true"),n&&clearTimeout(n),n=setTimeout(function(){c.css({height:0})},5))}}),g&&c.each(function(e){var a=t(this),o=a.attr("id");g.forEach(function(t,e){t===o&&a.trigger("click.jetAccordion")})}),t(document).on("click.jetAccordionAnchor",'a[href*="#jet-toggle-control-"]',function(a){var o=t(this.hash);o.closest(e)[0]&&o.trigger("click.jetAccordion")})},imageAccordionInit:function(e){var a,o=t(".jet-image-accordion",e);o.length&&(a=o.data("settings"),new jetImageAccordion(o,a).init())},loadScriptAsync:function(t,e){return o.addedScripts.hasOwnProperty(t)?t:(o.addedScripts[t]=e,new Promise((a,o)=>{var n=document.createElement("script");n.src=e,n.async=!0,n.onload=(()=>{a(t)}),document.head.appendChild(n)}))},loadStyle:function(t,e){return o.addedStyles.hasOwnProperty(t)&&o.addedStyles[t]===e?t:(o.addedStyles[t]=e,new Promise((a,o)=>{var n=document.createElement("link");n.id=t,n.rel="stylesheet",n.href=e,n.type="text/css",n.media="all",n.onload=(()=>{a(t)}),document.head.appendChild(n)}))},elementorFrontendInit:function(e){e.find("div[data-element_type]").each(function(){var e=t(this),a=e.data("element_type");if(a)try{"widget"===a&&(a=e.data("widget_type"),window.elementorFrontend.hooks.doAction("frontend/element_ready/widget",e,t)),window.elementorFrontend.hooks.doAction("frontend/element_ready/global",e,t),window.elementorFrontend.hooks.doAction("frontend/element_ready/"+a,e,t)}catch(t){return console.log(t),e.remove(),!1}})}};window.jetImageAccordion=function(e,a){var o,n=this,i=e,r=t(".jet-image-accordion__item",i),s=r.length;a=a||{};a=t.extend({orientation:"vertical",activeSize:{size:50,unit:"%"},duration:500,activeItem:-1},a),o=a.activeItem,this.layoutBuild=function(){r.css({"transition-duration":a.duration+"ms"}),r.each(function(e){e===o&&(t(this).addClass("active-accordion"),n.layoutRender())}),t(".jet-image-accordion__image-instance",r).imagesLoaded().progress(function(e,a){var o=t(a.img),n=o.closest(".jet-image-accordion__item"),i=t(".jet-image-accordion__item-loader",n);o.addClass("loaded"),i.fadeTo(250,0,function(){t(this).remove()})}),n.layoutRender(),n.addEvents()},this.layoutRender=function(e){var o=a.activeSize.size,n=((100/s).toFixed(2),o/((100-o)/(s-1)));t(".jet-image-accordion__item:not(.active-accordion)",i).css({"flex-grow":1}),t(".active-accordion",i).css({"flex-grow":n})},this.addEvents=function(){var e=t(window).scrollTop();"ontouchend"in window||"ontouchstart"in window?(r.on("touchstart.jetImageAccordion",function(a){e=t(window).scrollTop()}),r.on("touchend.jetImageAccordion",function(a){a.stopPropagation();var o=t(this);if(e!==t(window).scrollTop())return!1;o.hasClass("active-accordion")?r.removeClass("active-accordion"):(r.removeClass("active-accordion"),o.addClass("active-accordion")),n.layoutRender()})):r.on("mouseenter",function(e){var a=t(this);a.hasClass("active-accordion")||(r.removeClass("active-accordion"),a.addClass("active-accordion")),n.layoutRender()}),i.on("mouseleave.jetImageAccordion",function(t){r.removeClass("active-accordion"),-1!==o&&r.eq(o).addClass("active-accordion"),n.layoutRender()})},this.init=function(){n.layoutBuild()}},t(window).on("elementor/frontend/init",o.init)}(jQuery,window.elementorFrontend,window.JetTabsSettings);