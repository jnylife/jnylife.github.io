function dark() {window.requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame;var n,e,i,h,t=.05,s=document.getElementById("universe"),o=!0,a="180,184,240",r="226,225,142",d="226,225,224",c=[];function f(){n=window.innerWidth,e=window.innerHeight,i=.216*n,s.setAttribute("width",n),s.setAttribute("height",e)}function u(){h.clearRect(0,0,n,e);for(var t=c.length,i=0;i<t;i++){var s=c[i];s.move(),s.fadeIn(),s.fadeOut(),s.draw()}}function y(){this.reset=function(){this.giant=m(3),this.comet=!this.giant&&!o&&m(10),this.x=l(0,n-10),this.y=l(0,e),this.r=l(1.1,2.6),this.dx=l(t,6*t)+(this.comet+1-1)*t*l(50,120)+2*t,this.dy=-l(t,6*t)-(this.comet+1-1)*t*l(50,120),this.fadingOut=null,this.fadingIn=!0,this.opacity=0,this.opacityTresh=l(.2,1-.4*(this.comet+1-1)),this.do=l(5e-4,.002)+.001*(this.comet+1-1)},this.fadeIn=function(){this.fadingIn&&(this.fadingIn=!(this.opacity>this.opacityTresh),this.opacity+=this.do)},this.fadeOut=function(){this.fadingOut&&(this.fadingOut=!(this.opacity<0),this.opacity-=this.do/2,(this.x>n||this.y<0)&&(this.fadingOut=!1,this.reset()))},this.draw=function(){if(h.beginPath(),this.giant)h.fillStyle="rgba("+a+","+this.opacity+")",h.arc(this.x,this.y,2,0,2*Math.PI,!1);else if(this.comet){h.fillStyle="rgba("+d+","+this.opacity+")",h.arc(this.x,this.y,1.5,0,2*Math.PI,!1);for(var t=0;t<30;t++)h.fillStyle="rgba("+d+","+(this.opacity-this.opacity/20*t)+")",h.rect(this.x-this.dx/4*t,this.y-this.dy/4*t-2,2,2),h.fill()}else h.fillStyle="rgba("+r+","+this.opacity+")",h.rect(this.x,this.y,this.r,this.r);h.closePath(),h.fill()},this.move=function(){this.x+=this.dx,this.y+=this.dy,!1===this.fadingOut&&this.reset(),(this.x>n-n/4||this.y<0)&&(this.fadingOut=!0)},setTimeout(function(){o=!1},50)}function m(t){return Math.floor(1e3*Math.random())+1<10*t}function l(t,i){return Math.random()*(i-t)+t}f(),window.addEventListener("resize",f,!1),function(){h=s.getContext("2d");for(var t=0;t<i;t++)c[t]=new y,c[t].reset();u()}(),function t(){document.getElementsByTagName('html')[0].getAttribute('data-theme')=='dark'&&u(),window.requestAnimationFrame(t)}()};
dark()


function checkNightMode() {
   '1' === localStorage.getItem('isDark') ? ($('body').addClass('DarkMode'), $('#changeMode-top').removeClass('fa-moon').addClass('fa-sun'), $('#modeicon').attr('xlink:href', '#icon-sun')) : '0' === localStorage.getItem('isDark') ? $('#modeicon').attr('xlink:href', '#icon-moon') : new Date().getHours() >= 20 || new Date().getHours() < 7 ? ($('body').addClass('DarkMode'), $('#changeMode-top').removeClass('fa-moon').addClass('fa-sun'), $('#modeicon').attr('xlink:href', '#icon-sun')) : matchMedia('(prefers-color-scheme: dark)').matches ? ($('body').addClass('DarkMode'), $('#changeMode-top').removeClass('fa-moon').addClass('fa-sun'), $('#modeicon').attr('xlink:href', '#icon-sun')) : $('#modeicon').attr('xlink:href', '#icon-moon')
 }
 function switchNightMode() {
   $('<div class="Cuteen_DarkSky"><div class="Cuteen_DarkPlanet"></div></div>').appendTo($('body')),
     setTimeout(function () {
       $('body').hasClass('DarkMode') ? ($('body').removeClass('DarkMode'), localStorage.setItem('isDark', '0'), $('#changeMode-top').removeClass('fa-sun').addClass('fa-moon'), $('#modeicon').attr('xlink:href', '#icon-moon')) : ($('body').addClass('DarkMode'), localStorage.setItem('isDark', '1'), $('#changeMode-top').removeClass('fa-moon').addClass('fa-sun'), $('#modeicon').attr('xlink:href', '#icon-sun')),
         setTimeout(function () {
           $('.Cuteen_DarkSky').fadeOut(1e3, function () {
             $(this).remove()
           })
         }, 2e3)
     })
     const nowMode = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light'
     if (nowMode === 'light') {
       activateDarkMode()
       saveToLocal.set('theme', 'dark', 2)
       GLOBAL_CONFIG.Snackbar !== undefined && btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)
       $('#modeicon').attr('xlink:href', '#icon-moon')
     } else {
       activateLightMode()
       saveToLocal.set('theme', 'light', 2)
       GLOBAL_CONFIG.Snackbar !== undefined && btf.snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day)
       $('body').addClass('DarkMode'), $('#changeMode-top').removeClass('fa-moon').addClass('fa-sun'), $('#modeicon').attr('xlink:href', '#icon-sun')
     }
     // handle some cases
     typeof utterancesTheme === 'function' && utterancesTheme()
     typeof FB === 'object' && window.loadFBComment()
     window.DISQUS && document.getElementById('disqus_thread').children.length && setTimeout(() => window.disqusReset(), 200)
 }
 function switchNightModeTop() {
   $('body').hasClass('DarkMode') ? ($('body').removeClass('DarkMode'), localStorage.setItem('isDark', '0'), $('#changeMode-top').removeClass('fa-sun').addClass('fa-moon'), $('#modeicon').attr('xlink:href', '#icon-moon')) : ($('body').addClass('DarkMode'), localStorage.setItem('isDark', '1'), $('#changeMode-top').removeClass('fa-moon').addClass('fa-sun'), $('#modeicon').attr('xlink:href', '#icon-sun'))
 }

