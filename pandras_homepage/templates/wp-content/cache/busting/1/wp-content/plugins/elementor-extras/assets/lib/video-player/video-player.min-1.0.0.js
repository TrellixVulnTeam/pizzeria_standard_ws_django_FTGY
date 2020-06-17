!function(e){e.videoPlayer=function(o,t){var n={cover:".ee-player__cover",volume:.5,speed:1,controls:".ee-player__controls",bar:".ee-player__controls__bar-wrapper",controlPlay:".ee-player__controls__play",controlRewind:".ee-player__controls__rewind",controlFullScreen:".ee-player__controls__fs",controlTime:".ee-player__controls__time",controlDuration:".ee-player__controls__duration",controlProgressBar:".ee-player__controls__progress",controlProgress:".ee-player__controls__progress-time",controlVolumeBar:".ee-player__controls__volume-bar",controlVolume:".ee-player__controls__volume-bar__amount",controlVolumeIcon:".ee-player__controls__volume-icon",overlays:".ee-player__controls__overlay",restartOnPause:!1,stopOthersOnPlay:!1,playOnViewport:!1,stopOffViewport:!1,endAtLastFrame:!1},l=this;l.opts={};var r=e(document),a=e(o),u=a.find("> video"),s=u.get(0),i=null,c=null,p=null,d=null,f=null,m=null,y=null,v=null,_=null,g=null,P=null,h=null,w=null,V=null,b=null,k=null,F=null,R=(u.attr("src"),u.is("[autoplay]")),T=!1,C=!1,O=!1,q=!1,B=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;l.init=function(){l.opts=e.extend({},n,t),l._construct()},l._construct=function(){c=a.find(l.opts.cover),p=a.find(l.opts.controls),d=a.find(l.opts.bar),m=p.find(l.opts.controlRewind),f=p.find(l.opts.controlPlay),y=p.find(l.opts.controlFullScreen),_=p.find(l.opts.controlDuration),v=p.find(l.opts.controlTime),P=p.find(l.opts.controlProgress),g=p.find(l.opts.controlProgressBar),w=p.find(l.opts.controlVolume),h=p.find(l.opts.controlVolumeBar),V=p.find(l.opts.controlVolumeIcon),F=l.opts.volume,playbackRate=l.opts.speed,i=c.get(0),p.length&&(k=f.get(0),m.length&&(b=m.get(0))),s.load(),l.events(),l.initViewportPlay(),l.initProgressBar(),l.initVolumeBar()},l.events=function(){f.length&&f.on("click",l.maybePlay),c.length&&c.on("click",l.maybePlay),m.length&&m.on("click",l.maybeRewind),y.length&&y.on("click",function(e){e.preventDefault(),l.fullscreen()}),s.addEventListener("loadedmetadata",l.initVideo),s.addEventListener("timeupdate",l.updateTime),s.addEventListener("canplaythrough",l.canPlayThrough),s.addEventListener("ended",l.ended),s.defaultPlaybackRate=playbackRate,B&&u.on("webkitExitFullscreen",l.stop)},l.canPlayThrough=function(){q=!0},l.ended=function(){l.stop(!1),a.trigger("ee:video-player:ended",[l])},l.initVideo=function(){var e="true"===u.attr("muted")?0:F;s.playbackRate=playbackRate,l.updateVolume(0,e),l.updateDuration(),R&&(l.beforePlay(),l.afterPlay())},l.initProgressBar=function(){g.length&&(g.on("mousedown",function(e){T=!0,l.updateProgress(e.pageX)}),r.on("mouseup",function(e){T&&(T=!1,l.updateProgress(e.pageX))}),r.on("mousemove",function(e){T&&l.updateProgress(e.pageX)}))},l.initVolumeBar=function(){V.length&&V.click(function(e){if(e.preventDefault(),0==s.volume)0==F&&(F=l.opts.volume),s.muted=!1,l.updateVolume(0,F);else{var o=s.volume;l.updateVolume(0,0),F=o}}),h.length&&(h.on("mousedown",function(e){C=!0,s.muted=!1,l.updateVolumeIcon(1),l.updateVolume(e.pageX)}),r.on("mouseup",function(e){C&&(C=!1,l.updateVolume(e.pageX))}),r.on("mousemove",function(e){C&&l.updateVolume(e.pageX)}))},l.initViewportPlay=function(){a._appear({force_process:!0}),l.opts.playOnViewport&&(a.on("_appear",function(){l.play()}),l.opts.stopOffViewport&&a.on("_disappear",function(){l.stop(!0)}))},l.beforePlay=function(){f.removeClass("nicon-play").addClass("nicon-pause")},l.play=function(){O||(l.beforePlay(),a.trigger("ee:video-player:beforePlay",[l]),s.play(),l.afterPlay(),a.trigger("ee:video-player:afterPlay",[l]))},l.afterPlay=function(){if(a.removeClass("paused").addClass("playing"),O=!0,l.opts.stopOthersOnPlay){e(".ee-video-player").not(o).each(function(){e(this).data("videoPlayer").stop(!0)})}},l.stop=function(e){O&&(a.removeClass("playing"),f.removeClass("nicon-pause").addClass("nicon-play"),O&&(e?(a.addClass("paused"),s.pause(),l.opts.restartOnPause&&(s.currentTime=0)):l.opts.endAtLastFrame||(s.currentTime=0),O=!1,a.trigger("ee:video-player:stop",[l])))},l.maybeRewind=function(){s.currentTime=0,l.play(),a.trigger("ee:video-player:rewind",[l])},l.maybePlay=function(e){return O?l.stop(!0):l.play(),!1},l.fullscreen=function(){s.requestFullscreen?s.requestFullscreen():s.webkitRequestFullscreen?s.webkitRequestFullscreen():s.webkitEnterFullscreen?s.webkitEnterFullscreen():s.mozRequestFullScreen?s.mozRequestFullScreen():s.msRequestFullscreen?s.msRequestFullscreen():alert("Your browser doesn't support fullscreen")},l.updateTime=function(){var e=s.currentTime,o=s.duration,t=100*e/o;P&&P.css("width",t+"%"),v.length&&v.html(l.formatTime(e))},l.updateDuration=function(){var e=s.duration;_.length&&_.html(l.formatTime(e))},l.updateProgress=function(e){var o=s.duration,t=e-g.offset().left,n=100*t/g.width();n>100?n=100:n<0&&(n=0),P.css("width",n+"%"),s.currentTime=o*n/100},l.updateVolume=function(e,o){var t;if(o)t=100*o;else var n=h.length?h.offset().left:1,r=e-n,t=100*r/h.width();t>100?t=100:t<0&&(t=0),s.volume=t/100,l.updateVolumeIcon(s.volume),w.css("width",t+"%"),o=s.volume},l.updateVolumeIcon=function(e){0==e?V.addClass("nicon-volume-off").removeClass("nicon-volume"):V.addClass("nicon-volume").removeClass("nicon-volume-off")},l.formatTime=function(e){return minutes=Math.floor(e/60),minutes=minutes>=10?minutes:"0"+minutes,e=Math.floor(e%60),e=e>=10?e:"0"+e,minutes+":"+e},l.init()},e.fn.videoPlayer=function(o){return this.each(function(){if(void 0==e(this).data("videoPlayer")){var t=new e.videoPlayer(this,o);e(this).data("videoPlayer",t)}})}}(jQuery);