import{_ as w,g,o as c,c as h,a as t,n as d,h as a,w as p,v as u,F as f,i as v,j as y,f as m}from"./index.ea0ea144.js";const _={data(){return{POST_URL:"https://55r11310h8.oicp.vip",isLoaded:!1,originImg:{w:0,h:0,r:1,showWidth:0,showHeight:0},isOnload:!1,cb:{xoffset:0,yoffset:0,isResultShow:!1,isBrush:!1,isOnCanvas:!1,isDetecting:!1,imgsrc:"",paintingSrc:"",resultSrc:"",penClick:!1,penSize:50,penColor:"#BCCEFB",cl:0,ct:0,startAxisX:0,startAxisY:0},boxs:[],style:{transformStyle:{}}}},computed:{cursorStyle(){return this.cb.isBrush?"none":"default"},stateBrushButtonBg(){return this.cb.isBrush?"bg-primary":"hover:bg-primary"},stateDetectButtonBg(){return this.cb.isDetecting?"bg-primary":"hover:bg-primary"},eyeButtonBg(){return this.cb.isResultShow?"bg-primary":"bg-gray-200"},eyeDotTraslate(){return this.cb.isResultShow?"translate-x-6":"translate-x-1"},showImageSrc(){return this.cb.isResultShow?this.cb.resultSrc:this.cb.imgsrc},cboxs(){if(!this.cb.isResultShow){let e=[];for(let s of this.boxs){let i={};i.x=this.cb.cl+s.xmin/this.originImg.r,i.y=this.cb.ct+s.ymin/this.originImg.r,i.w=(s.xmax-s.xmin)/this.originImg.r,i.h=(s.ymax-s.ymin)/this.originImg.r,i.size=i.w*i.h,e.push(i)}return e.sort(function(s,i){return i.size-s.size}),e}}},mounted(){this.cb.imgsrc=this.$route.params.imgurl,this.cb.resultSrc=this.cb.imgsrc,this.$refs.img.onload=e=>{this.originImg.w=e.target.naturalWidth,this.originImg.h=e.target.naturalHeight,this.isOnload=!0,this.originImg.showWidth=window.innerWidth-40,this.originImg.showHeight=window.innerHeight-180,this.originImg.r=Math.max(this.originImg.w/this.originImg.showWidth,this.originImg.h/this.originImg.showHeight),this.cb.xoffset=(this.originImg.showWidth+20)*this.originImg.r/2-this.originImg.w/2,this.cb.yoffset=88*this.originImg.r,this.isLoaded||this.initcanvas(),this.isLoaded=!0}},methods:{backHome(){this.$router.push({name:"home"})},showResultSwitch(){this.cb.isResultShow=!this.cb.isResultShow,this.cb.isDetecting=!1,this.cb.isBrush=!this.cb.isResultShow;let e=this.$refs.mycanvas;console.log(this.cb.isResultShow),e.height=e.height},initcanvas(){this.cb.isResultShow=!1,this.cb.isBrush=!0,this.cb.isDetecting=!1;const e=this.$refs.mycanvas;e.height=e.height,console.log(this),e.addEventListener("mousemove",this.drawing),e.addEventListener("mousedown",this.penDown),e.addEventListener("mouseup",this.penUp),e.addEventListener("wheel",this.wheel)},wheel(e){e.deltaY>0?this.cb.penSize=Math.min(this.cb.penSize+5,100):this.cb.penSize=Math.max(this.cb.penSize-5,10)},penDown(e){this.cb.penClick=!0,this.cb.startAxisX=e.pageX,this.cb.startAxisY=e.pageY},penUp(){this.cb.penClick=!1},drawing(e){const s=this.$refs.mycanvas;if(!this.cb.penClick){s.getBoundingClientRect().x,s.getBoundingClientRect().y,this.cb.startAxisX=e.pageX,this.cb.startAxisY=e.pageY;return}const i=s.getContext("2d");i.globalglobalCompositeOperation="destination-out";const l=e.pageX,n=e.pageY;i.beginPath();const o=s.getBoundingClientRect().x,r=s.getBoundingClientRect().y;i.moveTo((this.cb.startAxisX-o)*this.originImg.r,(this.cb.startAxisY-r)*this.originImg.r),i.lineTo((l-o)*this.originImg.r,(n-r)*this.originImg.r),i.strokeStyle=this.cb.penColor,i.lineWidth=this.cb.penSize*this.originImg.r,i.lineCap="round",this.cb.isBrush&&i.stroke(),this.cb.startAxisX=l,this.cb.startAxisY=n},createImage(){const e=this.$refs.mycanvas;this.cb.paintingSrc=e.toDataURL("image/png")},submitImage(){const e=this.$refs.mycanvas;this.cb.paintingSrc=e.toDataURL("image/png");let s={mask:this.cb.paintingSrc,img:this.cb.imgsrc,prop:this.originImg.r};JSON.stringify(s),alert("\u{1F680}\u5DF2\u63D0\u4EA4\uFF01\u8BF7\u7A0D\u5019\u{1F3C3}\u200D\u2642\uFE0F"),g.post(this.POST_URL+"/up_file",s).then(i=>{alert("\u6210\u529F\u{1F60E}"),this.cb.resultSrc=i.data.resultSrc})},brushStateButtonClicked(){this.cb.isDetecting=!1,this.cb.isBrush=!0},detectSubmit(){this.cb.isBrush=!1,alert("\u5DF2\u63D0\u4EA4\u68C0\u6D4B\uFF0C\u8BF7\u7A0D\u7B49\u{1F440}");let e={img:this.cb.imgsrc};JSON.stringify(e);const s=this.$refs.mycanvas;this.cb.cl=s.getBoundingClientRect().x,this.cb.ct=s.getBoundingClientRect().y,g.post(this.POST_URL+"/detect",e).then(i=>{alert("\u6210\u5566\u5144\u5F1F"),this.boxs=i.data}).catch(i=>{console.log(i)})},bdboxclicked:function(e,s){const l=this.$refs.mycanvas.getContext("2d");l.globalAlpha=.5,l.fillStyle=this.cb.penColor,l.fillRect(this.originImg.r*(this.cboxs[s].x-this.cb.cl),this.originImg.r*(this.cboxs[s].y-this.cb.ct),this.originImg.r*this.cboxs[s].w,this.originImg.r*this.cboxs[s].h)},cleancanvas(){const e=this.$refs.mycanvas;e.height=e.height},autoDetectSubmit(){alert("\u{1F916}\u5DF2\u63D0\u4EA4\u56FE\u7247\uFF0C\u8BF7\u7B49\u5F85\u81EA\u52A8\u4FEE\u590D\u{1F916}"),msg={img:this.cb.imgsrc},JSON.stringify(msg),g.post("http://127.0.0.1:6002/seg",msg).then(e=>{alert("\u6210\u529F\u{1F60E}"),this.cb.resultSrc=e.data.resultSrc})},downImage(){let e=this.cb.resultSrc;var s=document.createElement("a"),i=new MouseEvent("click");s.download="result.png",s.href=e,s.dispatchEvent(i)}}},C={class:"app min-h-full flex flex-col fixed w-full h-full overflow-hidden"},k={class:"absolute z-10 flex p-2 w-full bg-white bg-opacity-70 shadow-md rounded-md backdrop-blur-3xl justify-between items-center sm:items-start"},L=t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",class:"w-6 h-6"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 19l-7-7m0 0l7-7m-7 7h18"})],-1),S=t("span",{class:"whitespace-nowrap select-none"},"\u8FD4\u56DE",-1),B=[L,S],I={class:"flex space-x-4"},M={class:"mr-4 flex items-center"},z={class:"inline-flex items-center"},R=t("label",{class:"mr-4",id:"headlessui-label-2"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",class:"w-6 h-6"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}),t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"})])],-1),Z={class:"ml-3 relative"},A=t("svg",{t:"1651566433827",class:"w-6 h-6",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"7529"},[t("path",{d:"M951.168 383.872c-5.056-7.936-12.16-14.336-20.672-18.56l-125.696-61.76 85.056-166.144c6.08-11.904 5.12-26.24-2.56-39.36-6.336-10.688-16.832-20.032-29.504-26.304-12.736-6.208-26.624-8.832-39.232-7.36-15.36 1.792-27.712 9.664-33.792 21.568l-84.992 165.952L564.544 185.472l0.064-0.256L558.72 182.656C557.888 182.208 557.12 181.888 556.224 181.504L556.032 181.44C555.52 181.184 555.072 180.992 554.624 180.864l0 0c-0.64-0.256-1.28-0.512-1.856-0.704L547.392 177.92 547.136 178.496c0 0-0.064 0-0.064 0L546.24 178.304C545.408 178.112 544.64 177.984 544 177.856 543.296 177.728 542.528 177.664 541.568 177.536L538.88 177.28c-0.512-0.064-1.088-0.064-1.92-0.064l-1.152 0c-0.64 0-1.344 0-1.728 0-1.088 0-2.112 0.064-2.88 0.128C530.432 177.408 529.6 177.472 528.832 177.536 528.064 177.664 527.232 177.792 525.376 178.112L521.792 178.944C521.024 179.136 520.32 179.328 519.296 179.648L518.528 179.904c-0.64 0.192-1.216 0.448-1.728 0.64C516.352 180.736 515.776 180.864 515.264 181.12l-5.312 2.56C509.376 184 508.8 184.32 507.968 184.832L504 187.52c-0.64 0.448-1.28 0.96-1.984 1.536C501.504 189.504 500.992 189.952 500.288 190.592 499.584 191.168 498.88 191.808 498.496 192.256 497.792 192.96 497.088 193.664 496.512 194.368 495.872 195.008 495.36 195.584 495.04 196.032 494.4 196.736 493.888 197.504 493.312 198.272 492.736 199.04 492.224 199.808 491.904 200.256 491.52 200.832 491.136 201.472 490.816 202.048l-0.384 0.64c-0.448 0.704-0.832 1.408-1.088 1.92l0 0c-22.208 42.24-50.56 82.56-84.224 119.872C404.608 325.056 404.032 325.632 403.84 325.888 382.272 349.632 358.4 372.288 332.864 393.408c-67.712 55.872-146.88 100.8-235.52 133.568-20.672 7.68-34.304 27.968-33.28 49.472C63.232 594.816 72.704 612.096 88.768 621.696l544.64 325.44c4.8 2.88 10.048 4.928 15.552 6.144 7.744 4.352 16.576 6.656 25.536 6.656 13.632 0 26.496-5.12 36.224-14.464 78.336-75.136 139.84-159.616 182.912-250.944C937.344 601.856 959.68 506.88 960 412.352 960.064 402.176 956.992 392.32 951.168 383.872zM636.992 742.016 636.992 742.016c9.856-9.472 15.424-22.08 15.552-35.584 0.192-13.504-5.056-26.304-14.784-35.904-19.904-19.904-52.736-20.288-73.152-0.768l-75.84 72.512-102.016-60.992 60.288-41.344c11.328-7.744 18.88-19.264 21.312-32.576 2.432-13.312-0.64-26.752-8.576-37.888-16.32-22.784-48.64-28.352-72.064-12.352l-97.28 66.688L223.168 583.552c64.32-31.36 123.584-69.248 176.448-112.832 18.88-15.616 36.928-31.936 53.696-48.512l359.36 200.64c-4.096 9.92-8.448 19.776-12.992 29.376-32.832 69.696-78.336 135.232-135.36 194.88l-84.48-50.496L636.992 742.016zM855.552 441.728c-1.664 27.136-5.568 54.656-11.584 82.112l-322.048-179.84c12.16-16.064 23.616-32.64 34.176-49.472L855.552 441.728z","p-id":"7530",fill:"#000000"})],-1),j=[A],D={class:"ml-3 relative"},O=t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"})],-1),V=[O],H={ref:"canvaswrapper",class:"transform-wrapper h-full w-full relative"},Y=["width","height"],X=["src"],E=["onClick"],T={class:"absolute w-full px-2 pb-2 flex justify-center flex-col sm:flex-row space-y-2 sm:space-y-0 items-end sm:items-center bottom-0 pointer-events-none"},U={class:"flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:mx-4 sm:space-x-2 bg-gray-200 bg-opacity-50 backdrop-blur-xl rounded-2xl p-2 sm:py-2 pointer-events-auto"},W={class:"has-tooltip"},N=t("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M2 13L1.34921 12.2407C1.16773 12.3963 1.04797 12.6117 1.01163 12.8479L2 13ZM22.5 4L23.49 4.14142C23.5309 3.85444 23.4454 3.5638 23.2555 3.3448C23.0655 3.1258 22.7899 3 22.5 3V4ZM12.5 4V3C12.2613 3 12.0305 3.08539 11.8492 3.24074L12.5 4ZM1 19.5L0.0116283 19.3479C-0.0327373 19.6363 0.051055 19.9297 0.241035 20.1511C0.431014 20.3726 0.708231 20.5 1 20.5V19.5ZM11.5 19.5V20.5C11.7373 20.5 11.9668 20.4156 12.1476 20.2619L11.5 19.5ZM21.5 11L22.1476 11.7619C22.3337 11.6038 22.4554 11.3831 22.49 11.1414L21.5 11ZM2 14H12.5V12H2V14ZM13.169 13.7433L23.169 4.74329L21.831 3.25671L11.831 12.2567L13.169 13.7433ZM22.5 3H12.5V5H22.5V3ZM11.8492 3.24074L1.34921 12.2407L2.65079 13.7593L13.1508 4.75926L11.8492 3.24074ZM1.01163 12.8479L0.0116283 19.3479L1.98837 19.6521L2.98837 13.1521L1.01163 12.8479ZM1 20.5H11.5V18.5H1V20.5ZM12.4884 19.6521L13.4884 13.1521L11.5116 12.8479L10.5116 19.3479L12.4884 19.6521ZM21.51 3.85858L20.51 10.8586L22.49 11.1414L23.49 4.14142L21.51 3.85858ZM20.8524 10.2381L10.8524 18.7381L12.1476 20.2619L22.1476 11.7619L20.8524 10.2381Z",fill:"currentColor"})],-1),P=t("span",{class:"whitespace-nowrap select-none"},null,-1),F=[N,P],J={class:"has-tooltip"},q=t("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M9.77781 15.5556C12.9688 15.5556 15.5556 12.9688 15.5556 9.77781C15.5556 6.58681 12.9688 4 9.77781 4C6.58681 4 4 6.58681 4 9.77781C4 12.9688 6.58681 15.5556 9.77781 15.5556Z",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),t("path",{d:"M19 19L14 14",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1),G=t("span",{class:"whitespace-nowrap select-none"},null,-1),K=[q,G],Q={class:"tooltip pointer-events-none relative mx-2 hidden sm:block"},$={class:"text-black bg-gray-100 dark:bg-gray-800 dark:text-gray-300 text-xs font-medium rounded-xl py-3 px-5 right-0 top-full whitespace-nowrap"},tt=m(" \u7269\u4F53\u68C0\u6D4B"),st={class:"absolute text-gray-100 dark:text-gray-800 h-2 w-full left-0 bottom-0",x:"0px",y:"0px",viewBox:"0 0 255 255","xml:space":"preserve",style:{transform:"translateY(8px)"}},et=t("polygon",{class:"fill-current",points:"0,0 127.5,127.5 255,0"},null,-1),it=[et],nt={class:"flex justify-center items-center sm:justify-start sm:w-90 pointer-events-auto"},ot={class:"flex sm:items-center space-x-4 max-w-3xl bg-gray-200 bg-opacity-50 backdrop-blur-xl rounded-2xl p-2 justify-evenly"},rt={class:"py-2 pl-4 pr-4"},lt={class:"inline-flex items-center py-1 space-x-4 text-black"},at=t("div",{class:"flex justify-center"},[t("span",{class:"whitespace-nowrap"},"\u753B\u7B14")],-1),ct=t("svg",{viewBox:"0 0 1024 1024",class:"w-6 h-6",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M439.488 960 563.84 790.016 439.488 754.176Z"}),t("path",{d:"M0 559.872l353.472 107.072 435.328-369.6-337.408 398.144 377.92 116.736L1024 64.064 0 559.872zM337.984 593.984 171.968 544l585.984-286.016L337.984 593.984zM790.016 734.016l-241.984-67.968 384-467.968L790.016 734.016z"})],-1),ht=t("span",{class:"whitespace-nowrap select-none"},"\u63D0\u4EA4",-1),dt=[ct,ht],gt={class:"flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2 bg-white bg-opacity-50 backdrop-blur-xl rounded-2xl p-2 sm:py-2 pointer-events-auto"},pt={class:"has-tooltip ml-2"},ut=t("svg",{viewBox:"0 0 1024 1024",class:"w-6 h-6",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M483.2 822.4v-256c0-12.8 12.8-25.6 25.6-25.6s25.6 12.8 25.6 25.6v256l51.2-38.4c12.8-6.4 25.6-6.4 38.4 6.4 12.8 19.2 6.4 32-6.4 38.4l-96 70.4c0 6.4-6.4 6.4-12.8 6.4s-12.8 0-12.8-6.4l-96-70.4c-12.8-6.4-12.8-25.6-6.4-38.4 6.4-12.8 25.6-12.8 38.4-6.4l51.2 38.4zM278.4 784h-19.2C144 784 54.4 681.6 54.4 560c0-128 96-230.4 211.2-224C304 208 412.8 118.4 534.4 118.4 668.8 118.4 784 220.8 816 368c89.6 19.2 153.6 102.4 153.6 204.8C969.6 688 886.4 784 784 784c-32 0-96 0-166.4-57.6-12.8-12.8-12.8-32 0-38.4 12.8-12.8 25.6-12.8 38.4 0 51.2 51.2 96 44.8 121.6 44.8h6.4c76.8 0 134.4-70.4 134.4-160 0-83.2-57.6-153.6-128-160-12.8 0-19.2-12.8-25.6-19.2-19.2-128-115.2-224-230.4-224-102.4 0-198.4 83.2-224 198.4 0 12.8-12.8 19.2-32 19.2h-25.6c-83.2 0-147.2 76.8-147.2 172.8 0 96 64 172.8 147.2 172.8h12.8c25.6 0 57.6 0 102.4-44.8 12.8-12.8 25.6-12.8 38.4 0 12.8 12.8 12.8 25.6 0 38.4-51.2 51.2-96 57.6-128 57.6z"})],-1),mt=t("span",{class:"whitespace-nowrap select-none"},null,-1),bt=[ut,mt],xt={class:"tooltip pointer-events-none relative mx-2 hidden sm:block"},wt={class:"text-black bg-gray-100 dark:bg-gray-800 dark:text-gray-300 text-xs font-medium rounded-xl py-3 px-5 right-0 top-full whitespace-nowrap"},ft=m(" \u4E0B\u8F7D"),vt={class:"absolute text-gray-100 dark:text-gray-800 h-2 w-full left-0 bottom-0",x:"0px",y:"0px",viewBox:"0 0 255 255","xml:space":"preserve",style:{transform:"translateY(8px)"}},yt=t("polygon",{class:"fill-current",points:"0,0 127.5,127.5 255,0"},null,-1),_t=[yt];function Ct(e,s,i,l,n,o){return c(),h("div",null,[t("div",C,[t("header",k,[t("div",{onClick:s[0]||(s[0]=r=>o.backHome()),role:"button",tabindex:"-1",class:"inline-flex py-3 rounded-xl cursor-pointer space-x-3 px-5 hover:bg-primary"},B),t("div",I,[t("div",M,[t("div",z,[R,t("button",{onClick:s[1]||(s[1]=r=>o.showResultSwitch()),class:d([o.eyeButtonBg,"relative inline-flex items-center h-6 rounded-full w-11"]),id:"headlessui-switch-3",role:"switch",type:"button",tabindex:"0","aria-checked":"false","aria-labelledby":"headlessui-label-2"},[t("span",{class:d([o.eyeDotTraslate,"transform transition ease-in-out duration-200 bg-gray-600 inline-block w-4 h-4 rounded-full"])},null,2)],2)])]),t("div",Z,[t("div",null,[t("button",{"aria-label":"cleanCanvas",onClick:s[2]||(s[2]=r=>o.cleancanvas()),class:"flex items-center justify-center p-3 px-5 rounded-md hover:bg-primary",id:"headlessui-menu-button-6",type:"button","aria-haspopup":"true","aria-expanded":"false"},j)])]),t("div",D,[t("div",null,[t("button",{"aria-label":"Menu",onClick:s[3]||(s[3]=(...r)=>o.downImage&&o.downImage(...r)),class:"flex items-center justify-center p-3 px-5 rounded-md hover:bg-primary",id:"headlessui-menu-button-6",type:"button","aria-haspopup":"true","aria-expanded":"false"},V)])])])]),t("div",H,[t("div",{ref:"canvascomponent",class:"transform-component flex flex-wrap",style:a([{transform:"scale("+1/n.originImg.r+") translate("+n.cb.xoffset+"px,"+n.cb.yoffset+"px)"},{"transform-origin":"0px 0px"}])},[t("canvas",{ref:"mycanvas",onMouseenter:s[4]||(s[4]=r=>n.cb.isOnCanvas=!0),onMouseleave:s[5]||(s[5]=r=>n.cb.isOnCanvas=!1),class:"rounded-sm z-10",style:a({cursor:o.cursorStyle}),width:n.originImg.w,height:n.originImg.h},null,44,Y),t("div",{class:"absolute top-0 pointer-events-none border-primary",style:a({hetght:n.originImg.h+"px"})},[p(t("img",{ref:"img",style:a([{width:n.originImg.w+"px",height:n.originImg.h+"px"},{"max-width":"none"}]),class:"absolute",src:o.showImageSrc,alt:"image"},null,12,X),[[u,n.isOnload]])],4)],4)],512),p(t("div",{class:"sm:block fixed z-50 rounded-full pointer-events-none border border-primary bg-primary bg-opacity-50",style:a([{width:n.cb.penSize+"px",height:n.cb.penSize+"px",top:n.cb.startAxisY+"px",left:n.cb.startAxisX+"px"},{transform:"translate(-50%, -50%)"}])},null,4),[[u,n.cb.isBrush&&n.cb.isOnCanvas]]),(c(!0),h(f,null,v(o.cboxs,(r,b)=>(c(),h("div",{onClick:x=>o.bdboxclicked(x,b),class:"fixed z-20 border-2 border-primary hover:bg-primary hover:opacity-50",style:a({top:r.y+"px",left:r.x+"px",width:r.w+"px",height:r.h+"px"})},null,12,E))),256)),t("div",T,[t("div",U,[t("div",W,[t("div",{role:"button",tabindex:"-1",class:d([o.stateBrushButtonBg,"inline-flex py-3 rounded-xl cursor-pointer px-3 sm:px-5"]),onClick:s[6]||(s[6]=(...r)=>o.brushStateButtonClicked&&o.brushStateButtonClicked(...r))},F,2)]),t("div",J,[t("div",{role:"button",tabindex:"-1",class:d([o.stateDetectButtonBg,"inline-flex py-3 rounded-xl cursor-pointer px-3 sm:px-5"]),onClick:s[7]||(s[7]=r=>o.detectSubmit())},K,2),t("div",Q,[t("div",$,[tt,(c(),h("svg",st,it))])])])]),t("div",nt,[t("div",ot,[t("div",rt,[t("div",lt,[at,p(t("input",{class:"appearance-none rounded-lg h-4 bg-primary w-24 md:w-auto",type:"range",min:"10",max:"100","onUpdate:modelValue":s[8]||(s[8]=r=>n.cb.penSize=r)},null,512),[[y,n.cb.penSize]])])]),t("div",{onClick:s[9]||(s[9]=r=>o.submitImage()),role:"button",tabindex:"-1",class:"inline-flex py-3 rounded-xl cursor-pointer space-x-3 px-5 bg-primary hover:bg-black hover:text-white"},dt)])]),t("div",gt,[t("div",pt,[t("div",{onClick:s[10]||(s[10]=(...r)=>o.downImage&&o.downImage(...r)),role:"button",tabindex:"-1",class:"inline-flex py-3 rounded-xl cursor-pointer px-3 sm:px-5 hover:bg-primary"},bt),t("div",xt,[t("div",wt,[ft,(c(),h("svg",vt,_t))])])])])])])])}var Lt=w(_,[["render",Ct]]);export{Lt as default};
