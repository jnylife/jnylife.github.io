// //随机背景图片数组,图片可以换成图床链接，注意最后一条后面不要有逗号
// var backimg =[
//     "url(http://cdn.ymktchic.top/img/202201142103725.jpg)",
//     "url(http://cdn.ymktchic.top/img/202201142103726.jpg)",
//     "url(http://cdn.ymktchic.top/img/202201181430034.webp)",
//     "url(http://cdn.ymktchic.top/img/202201142103723.jpg)",
//     "url(http://cdn.ymktchic.top/img/202201142103730.jpg)",
//     "url(http://cdn.ymktchic.top/img/202201142103731.jpg)",
//     "url(http://cdn.ymktchic.top/img/202201142103728.jpg)",
//     "url(http://cdn.ymktchic.top/img/202201142103729.jpg)"

//   ];
//   //获取背景图片总数，生成随机数
//   var bgindex =Math.floor(Math.random() * backimg.length);
//   //重设背景图片
//   // document.getElementById("web_bg").style.backgroundImage = backimg[bgindex];
//   //随机banner数组,图片可以换成图床链接，注意最后一条后面不要有逗号
//   var now = new Date();
//   var hour = now.getHours();
//   console.log(hour);
//   if (hour >= 0 && hour <3){
//        document.getElementById("web_bg").style.backgroundImage = backimg[7];
//   }
//   if (hour >= 3 && hour <6){
//     document.getElementById("web_bg").style.backgroundImage = backimg[3];
//   }
//   if (hour >= 6 && hour <9){
//     document.getElementById("web_bg").style.backgroundImage = backimg[0];
//   }
//   if (hour >= 9 && hour <12){
//     document.getElementById("web_bg").style.backgroundImage = backimg[1];
//   }
//   if (hour >= 12 && hour < 15){
//     document.getElementById("web_bg").style.backgroundImage = backimg[2];
//   }
//   if (hour >= 15 && hour < 18){
//     document.getElementById("web_bg").style.backgroundImage = backimg[4]; 
//   }
//   if(hour >= 18 && hour < 21){
//     document.getElementById("web_bg").style.backgroundImage = backimg[6];
//   }
//   if(hour >= 21 && hour < 24){
//     document.getElementById("web_bg").style.backgroundImage = backimg[5];
//   }
 

var bname =document.getElementById('site-name')
console.log(bname);
bname.onmouseover=function(){
   bname.innerText='Back to Home'
}
bname.onmouseout=function(){
   bname.innerText='JnyLife'
}
