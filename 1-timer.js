import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{f,i as m}from"./assets/vendor-A92OCY9B.js";let r=null,t=document.querySelector("#js-button-start"),a=document.querySelector("#datetime-picker"),l=null;t.disabled=!0;const h={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){new Date>e[0]?(m.error({title:"Error",position:"topRight",backgroundColor:"#EF4040",messageColor:"#fff",titleColor:"#fff",iconColor:"#fff",message:"Please choose a date in the future"}),t.disabled=!0,r=null):(r=e[0],t.disabled=!1)}};f("#datetime-picker",h);t.addEventListener("click",()=>{r&&(clearInterval(l),t.disabled=!0,a.disabled=!0,l=setInterval(()=>{let e=r-new Date;e<=0&&(clearInterval(l),e=0,a.disabled=!1,t.disabled=!0);let o=s(e);document.querySelector("#js-days").textContent=n(o.days),document.querySelector("#js-hours").textContent=n(o.hours),document.querySelector("#js-minutes").textContent=n(o.minutes),document.querySelector("#js-seconds").textContent=n(o.seconds)},1e3))});function n(e){return String(e).padStart(2,"0")}function s(e){const u=Math.floor(e/864e5),i=Math.floor(e%864e5/36e5),d=Math.floor(e%864e5%36e5/6e4),c=Math.floor(e%864e5%36e5%6e4/1e3);return{days:u,hours:i,minutes:d,seconds:c}}console.log(s(2e3));console.log(s(14e4));console.log(s(2414e4));
//# sourceMappingURL=1-timer.js.map
