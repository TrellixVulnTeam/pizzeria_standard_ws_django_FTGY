!function(e){function r(r){return e(r).filter(function(){return e(this).is(":_appeared")})}function t(){a=!1;for(var e=0,t=i.length;e<t;e++){var n=r(i[e]);if(n.trigger("_appear",[n]),p[e]){var o=p[e].not(n);o.trigger("_disappear",[o])}p[e]=n}}function n(e){i.push(e),p.push()}var i=[],o=!1,a=!1,f={interval:250,force_process:!1},u=e(window),p=[];e.expr[":"]._appeared=function(r){var t=e(r);if(!t.is(":visible"))return!1;var n=u.scrollLeft(),i=u.scrollTop(),o=t.offset(),a=o.left,f=o.top;return f+t.height()>=i&&f-(t.data("appear-top-offset")||0)<=i+u.height()&&a+t.width()>=n&&a-(t.data("appear-left-offset")||0)<=n+u.width()},e.fn.extend({_appear:function(r){var i=e.extend({},f,r||{}),u=this.selector||this;if(!o){var p=function(){a||(a=!0,setTimeout(t,i.interval))};e(window).scroll(p).resize(p),o=!0}return i.force_process&&setTimeout(t,i.interval),n(u),e(u)}}),e.extend({force_appear:function(){return!!o&&(t(),!0)}})}(function(){return"undefined"!=typeof module?require("jquery"):jQuery}());