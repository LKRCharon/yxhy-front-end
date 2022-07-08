<template>
    <div>
        <div class="app min-h-full flex flex-col fixed w-full h-full overflow-hidden"
        @mouseup="cb.penClick=false">
            <header
                class="absolute z-10 flex p-2 w-full bg-white bg-opacity-70 shadow-md rounded-md backdrop-blur-3xl justify-between items-center sm:items-start">
                <!-- 左上角返回按钮 -->
                <div @click="backHome()" role="button" tabindex="-1"
                    class="inline-flex py-3 rounded-xl cursor-pointer space-x-3 px-5 hover:bg-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        aria-hidden="true" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                    </svg>
                    <span class="whitespace-nowrap select-none">返回</span>
                </div>
                <!-- 顶部右侧按钮div -->
                <div class="flex space-x-4">
                    <!-- 眼睛div -->
                    <div class="mr-4 flex items-center">
                        <div class="inline-flex items-center">
                            <label class="mr-4" id="headlessui-label-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor" aria-hidden="true" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z">
                                    </path>
                                </svg>
                            </label>
                            <!-- 眼睛图标按钮 -->
                            <button @click="showResultSwitch()" :class="eyeButtonBg"
                                class="relative inline-flex items-center h-6 rounded-full w-11" id="headlessui-switch-3"
                                role="switch" type="button" tabindex="0" aria-checked="false"
                                aria-labelledby="headlessui-label-2">
                                <span :class="eyeDotTraslate"
                                    class="transform transition ease-in-out duration-200 bg-gray-600 inline-block w-4 h-4 rounded-full"></span>
                            </button>
                        </div>
                    </div>
                    <!-- 清除图标 -->
                    <div class="ml-3 relative">
                        <div>
                            <button aria-label="cleanCanvas" @click="cleancanvas()"
                                class="flex items-center justify-center p-3 px-5 rounded-md hover:bg-primary"
                                id="headlessui-menu-button-6" type="button" aria-haspopup="true" aria-expanded="false">
                                <svg t="1651566433827" class="w-6 h-6" viewBox="0 0 1024 1024" version="1.1"
                                    xmlns="http://www.w3.org/2000/svg" p-id="7529">
                                    <path
                                        d="M951.168 383.872c-5.056-7.936-12.16-14.336-20.672-18.56l-125.696-61.76 85.056-166.144c6.08-11.904 5.12-26.24-2.56-39.36-6.336-10.688-16.832-20.032-29.504-26.304-12.736-6.208-26.624-8.832-39.232-7.36-15.36 1.792-27.712 9.664-33.792 21.568l-84.992 165.952L564.544 185.472l0.064-0.256L558.72 182.656C557.888 182.208 557.12 181.888 556.224 181.504L556.032 181.44C555.52 181.184 555.072 180.992 554.624 180.864l0 0c-0.64-0.256-1.28-0.512-1.856-0.704L547.392 177.92 547.136 178.496c0 0-0.064 0-0.064 0L546.24 178.304C545.408 178.112 544.64 177.984 544 177.856 543.296 177.728 542.528 177.664 541.568 177.536L538.88 177.28c-0.512-0.064-1.088-0.064-1.92-0.064l-1.152 0c-0.64 0-1.344 0-1.728 0-1.088 0-2.112 0.064-2.88 0.128C530.432 177.408 529.6 177.472 528.832 177.536 528.064 177.664 527.232 177.792 525.376 178.112L521.792 178.944C521.024 179.136 520.32 179.328 519.296 179.648L518.528 179.904c-0.64 0.192-1.216 0.448-1.728 0.64C516.352 180.736 515.776 180.864 515.264 181.12l-5.312 2.56C509.376 184 508.8 184.32 507.968 184.832L504 187.52c-0.64 0.448-1.28 0.96-1.984 1.536C501.504 189.504 500.992 189.952 500.288 190.592 499.584 191.168 498.88 191.808 498.496 192.256 497.792 192.96 497.088 193.664 496.512 194.368 495.872 195.008 495.36 195.584 495.04 196.032 494.4 196.736 493.888 197.504 493.312 198.272 492.736 199.04 492.224 199.808 491.904 200.256 491.52 200.832 491.136 201.472 490.816 202.048l-0.384 0.64c-0.448 0.704-0.832 1.408-1.088 1.92l0 0c-22.208 42.24-50.56 82.56-84.224 119.872C404.608 325.056 404.032 325.632 403.84 325.888 382.272 349.632 358.4 372.288 332.864 393.408c-67.712 55.872-146.88 100.8-235.52 133.568-20.672 7.68-34.304 27.968-33.28 49.472C63.232 594.816 72.704 612.096 88.768 621.696l544.64 325.44c4.8 2.88 10.048 4.928 15.552 6.144 7.744 4.352 16.576 6.656 25.536 6.656 13.632 0 26.496-5.12 36.224-14.464 78.336-75.136 139.84-159.616 182.912-250.944C937.344 601.856 959.68 506.88 960 412.352 960.064 402.176 956.992 392.32 951.168 383.872zM636.992 742.016 636.992 742.016c9.856-9.472 15.424-22.08 15.552-35.584 0.192-13.504-5.056-26.304-14.784-35.904-19.904-19.904-52.736-20.288-73.152-0.768l-75.84 72.512-102.016-60.992 60.288-41.344c11.328-7.744 18.88-19.264 21.312-32.576 2.432-13.312-0.64-26.752-8.576-37.888-16.32-22.784-48.64-28.352-72.064-12.352l-97.28 66.688L223.168 583.552c64.32-31.36 123.584-69.248 176.448-112.832 18.88-15.616 36.928-31.936 53.696-48.512l359.36 200.64c-4.096 9.92-8.448 19.776-12.992 29.376-32.832 69.696-78.336 135.232-135.36 194.88l-84.48-50.496L636.992 742.016zM855.552 441.728c-1.664 27.136-5.568 54.656-11.584 82.112l-322.048-179.84c12.16-16.064 23.616-32.64 34.176-49.472L855.552 441.728z"
                                        p-id="7530" fill="#000000"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <!--下载  -->
                    <div class="ml-3 relative">
                        <div>
                            <button aria-label="Menu" @click="downImage"
                                class="flex items-center justify-center p-3 px-5 rounded-md hover:bg-primary"
                                id="headlessui-menu-button-6" type="button" aria-haspopup="true" aria-expanded="false">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </header>
            <!--canvas和背景图  -->
            <div ref="canvaswrapper" class="transform-wrapper h-full w-full relative">
            <!-- 利用scale和translate变换尺寸并放到屏幕中央 -->
                <div ref="canvascomponent" class="transform-component flex flex-wrap" 
                :style="{transform:'scale('+1/originImg.r+') translate('+cb.xoffset+'px,'+ cb.yoffset+'px' +')'}"
                style="transform-origin: 0px 0px">
                    <canvas ref="mycanvas" 
                    @wheel.prevent="wheel" @mouseenter="cb.isOnCanvas = true" @mouseleave="cb.isOnCanvas = false"
                    @mousedown="penDown" @mousemove="drawing"
                    @touchmove.prevent="drawing" @touchstart="penDown" @touchend="penUp"
                        class="rounded-sm z-10" :style="{ cursor: cursorStyle }" 
                        :width="originImg.w" :height="originImg.h">
                        </canvas>
                    <div class="absolute top-0  pointer-events-none border-primary "
                    :style="{hetght:originImg.h+'px'}">
                        <img v-show="isOnload" ref="img" 
                        :style="{width:originImg.w+'px',height:originImg.h+'px'}"
                        style="max-width: none;"
                        class="absolute" :src="showImageSrc" alt="image"/>
                    </div>
                </div>
            </div>
            <!-- 画笔鼠标旁边圈圈 -->
            <div v-show="cb.isBrush && cb.isOnCanvas"
                class="sm:block fixed z-50 rounded-full pointer-events-none border border-primary bg-primary bg-opacity-50"
                :style="{
                    width: cb.penSize + 'px',
                    height: cb.penSize + 'px',
                    top: cb.startAxisY + 'px',
                    left: cb.startAxisX + 'px',
                }" style="transform: translate(-50%, -50%)"></div>
            <!-- 绑定box -->
            <div v-for="(box, index) in cboxs" @click="bdboxclicked($event, index)"
                class="fixed z-20 border-2 border-primary hover:bg-primary hover:opacity-50" :style="{
                    top: box.y + 'px',
                    left: box.x + 'px',
                    width: box.w + 'px',
                    height: box.h + 'px',
                }">
                <!-- :style="{top:cb.ct+box.ymin+'px',left:cb.cl+box.xmix+'px',width:box.xmax-box.xmin+'px',height:box.ymax-box.ymin+'px'}" -->
            </div>
            <!-- 底层工具栏div -->
            <div
                class="absolute w-full px-2 pb-2 flex justify-center flex-col sm:flex-row space-y-2 sm:space-y-0 items-end sm:items-center bottom-0 pointer-events-none">
                <!-- 画笔与自动检测div  -->
                <div
                    class="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:mx-4 sm:space-x-2 bg-gray-200 bg-opacity-50 backdrop-blur-xl rounded-2xl p-2 sm:py-2 pointer-events-auto">
                    <!-- 画笔 -->
                    <div class="has-tooltip">
                        <div role="button" tabindex="-1" :class="stateBrushButtonBg" @click="brushStateButtonClicked"
                            class="inline-flex py-3 rounded-xl cursor-pointer px-3 sm:px-5">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M2 13L1.34921 12.2407C1.16773 12.3963 1.04797 12.6117 1.01163 12.8479L2 13ZM22.5 4L23.49 4.14142C23.5309 3.85444 23.4454 3.5638 23.2555 3.3448C23.0655 3.1258 22.7899 3 22.5 3V4ZM12.5 4V3C12.2613 3 12.0305 3.08539 11.8492 3.24074L12.5 4ZM1 19.5L0.0116283 19.3479C-0.0327373 19.6363 0.051055 19.9297 0.241035 20.1511C0.431014 20.3726 0.708231 20.5 1 20.5V19.5ZM11.5 19.5V20.5C11.7373 20.5 11.9668 20.4156 12.1476 20.2619L11.5 19.5ZM21.5 11L22.1476 11.7619C22.3337 11.6038 22.4554 11.3831 22.49 11.1414L21.5 11ZM2 14H12.5V12H2V14ZM13.169 13.7433L23.169 4.74329L21.831 3.25671L11.831 12.2567L13.169 13.7433ZM22.5 3H12.5V5H22.5V3ZM11.8492 3.24074L1.34921 12.2407L2.65079 13.7593L13.1508 4.75926L11.8492 3.24074ZM1.01163 12.8479L0.0116283 19.3479L1.98837 19.6521L2.98837 13.1521L1.01163 12.8479ZM1 20.5H11.5V18.5H1V20.5ZM12.4884 19.6521L13.4884 13.1521L11.5116 12.8479L10.5116 19.3479L12.4884 19.6521ZM21.51 3.85858L20.51 10.8586L22.49 11.1414L23.49 4.14142L21.51 3.85858ZM20.8524 10.2381L10.8524 18.7381L12.1476 20.2619L22.1476 11.7619L20.8524 10.2381Z"
                                    fill="currentColor"></path>
                            </svg><span class="whitespace-nowrap select-none"></span>
                        </div>
                    </div>
                    <!-- 自动检测按钮 -->
                    <div class="has-tooltip">
                        <div role="button" tabindex="-1" :class="stateDetectButtonBg" @click="detectSubmit()"
                            class="inline-flex py-3 rounded-xl cursor-pointer px-3 sm:px-5">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M9.77781 15.5556C12.9688 15.5556 15.5556 12.9688 15.5556 9.77781C15.5556 6.58681 12.9688 4 9.77781 4C6.58681 4 4 6.58681 4 9.77781C4 12.9688 6.58681 15.5556 9.77781 15.5556Z"
                                    stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round"></path>
                                <path d="M19 19L14 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round"></path>
                            </svg><span class="whitespace-nowrap select-none"></span>
                        </div>
                        <div class="tooltip pointer-events-none relative mx-2 hidden sm:block">
                            <div
                                class="text-black bg-gray-100 dark:bg-gray-800 dark:text-gray-300 text-xs font-medium rounded-xl py-3 px-5 right-0 top-full whitespace-nowrap">
                                物体检测<svg class="absolute text-gray-100 dark:text-gray-800 h-2 w-full left-0 bottom-0"
                                    x="0px" y="0px" viewBox="0 0 255 255" xml:space="preserve"
                                    style="transform: translateY(8px)">
                                    <polygon class="fill-current" points="0,0 127.5,127.5 255,0"></polygon>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <!-- 语义分割后自动修复 -->
                    <!-- <div class="has-tooltip">
                        <div role="button" tabindex="-1" :class="stateDetectButtonBg" @click="autoDetectSubmit()"
                            class="inline-flex py-3 rounded-xl cursor-pointer px-3 sm:px-5">
                            <svg t="1651568862378" class="w-6 h-6" viewBox="0 0 1024 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M717.12 274H762c82.842 0 150 67.158 150 150v200c0 82.842-67.158 150-150 150H262c-82.842 0-150-67.158-150-150V424c0-82.842 67.158-150 150-150h44.88l-18.268-109.602c-4.086-24.514 12.476-47.7 36.99-51.786 24.514-4.086 47.7 12.476 51.786 36.99l20 120c0.246 1.472 0.416 2.94 0.516 4.398h228.192c0.1-1.46 0.27-2.926 0.516-4.398l20-120c4.086-24.514 27.272-41.076 51.786-36.99 24.514 4.086 41.076 27.272 36.99 51.786L717.12 274zM262 364c-33.138 0-60 26.862-60 60v200c0 33.138 26.862 60 60 60h500c33.138 0 60-26.862 60-60V424c0-33.138-26.862-60-60-60H262z m50 548c-24.852 0-45-20.148-45-45S287.148 822 312 822h400c24.852 0 45 20.148 45 45S736.852 912 712 912H312z m-4-428c0-24.852 20.148-45 45-45S398 459.148 398 484v40c0 24.852-20.148 45-45 45S308 548.852 308 524v-40z m318 0c0-24.852 20.148-45 45-45S716 459.148 716 484v40c0 24.852-20.148 45-45 45S626 548.852 626 524v-40z"
                                    p-id="20177" fill="#000000"></path>
                            </svg><span class="whitespace-nowrap select-none"></span>
                        </div>
                        <div class="tooltip pointer-events-none relative mx-2 hidden sm:block">
                            <div
                                class="text-black bg-gray-100 dark:bg-gray-800 dark:text-gray-300 text-xs font-medium rounded-xl py-3 px-5 right-0 top-full whitespace-nowrap">
                                自动修复<svg class="absolute text-gray-100 dark:text-gray-800 h-2 w-full left-0 bottom-0"
                                    x="0px" y="0px" viewBox="0 0 255 255" xml:space="preserve"
                                    style="transform: translateY(8px)">
                                    <polygon class="fill-current" points="0,0 127.5,127.5 255,0"></polygon>
                                </svg>
                            </div>
                        </div>
                    </div> -->
                </div>
                <!-- 画笔大小调节框 -->
                <div class="flex justify-center items-center sm:justify-start sm:w-90 pointer-events-auto">
                    <div
                        class="flex sm:items-center space-x-4 max-w-3xl bg-gray-200 bg-opacity-50 backdrop-blur-xl rounded-2xl p-2 justify-evenly">
                        <div class="py-2 pl-4 pr-4">
                            <div class="inline-flex items-center py-1 space-x-4 text-black">
                                <div class="flex justify-center">
                                    <span class="whitespace-nowrap">画笔</span>
                                </div>
                                <input class="appearance-none rounded-lg h-4 bg-primary w-24 md:w-auto" type="range"
                                    min="10" max="100" v-model="cb.penSize" />
                            </div>
                        </div>
                        <!-- -------------------------- 提交 ----------------------------->
                        <div @click="submitImage()" role="button" tabindex="-1"
                            class="inline-flex py-3 rounded-xl cursor-pointer space-x-3 px-5 bg-primary hover:bg-black hover:text-white">
                            <svg viewBox="0 0 1024 1024" class="w-6 h-6" fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M439.488 960 563.84 790.016 439.488 754.176Z"></path>
                                <path
                                    d="M0 559.872l353.472 107.072 435.328-369.6-337.408 398.144 377.92 116.736L1024 64.064 0 559.872zM337.984 593.984 171.968 544l585.984-286.016L337.984 593.984zM790.016 734.016l-241.984-67.968 384-467.968L790.016 734.016z">
                                </path>
                            </svg>
                            <span class="whitespace-nowrap select-none">提交</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            POST_URL:'https://55r11310h8.oicp.vip',
            // 防止onload反复初始化，可以优化
            isLoaded:false,
            // 判断是否移动段
            isPhone:false,
            //记录图像原始数据
            originImg: {
                w: 0,
                h: 0,
                r: 1, //宽高缩放了多少
                showWidth:0,
                showHeight:0,
                name:''
            },
            isOnload:false,
            cb: {
                xoffset:0,
                yoffset:0,

                isResultShow: false,
                isBrush: false, //画笔是否开启
                isOnCanvas: false, //鼠标是否在画板上，控制显示画笔范围
                isDetecting: false, //是否在自动检测，控制画框

                imgsrc: "", //原图
                paintingSrc: "", //canvas画板上的画
                resultSrc: "", //返回结果
                penClick: false,
                penSize: 50,
                penColor: "#BCCEFB",
                cl: 0,
                ct: 0, //canvas的xy坐标
                startAxisX: 0,
                startAxisY: 0,
            },
            //存储后端传来的检测box数据
            boxs: [],
            // 把比较复杂的绑定内联样式拿到这里
            style:{
                transformStyle:{
                    
                }
            }
        };
    },
    computed: {
        // 调整鼠标样式，画板时不显示鼠标显示圆圈div，检测和查看时为default
        cursorStyle() {
            if (this.cb.isBrush) {
                return "none";
            } else {
                return "default";
            }
        },
        // 根据当前状态计算状态按钮的背景
        stateBrushButtonBg() {
            if (this.cb.isBrush) {
                return "bg-primary";
            } else {
                return "hover:bg-primary";
            }
        },
        stateDetectButtonBg() {
            // console.log(this.cb.isDetecting)
            if (this.cb.isDetecting) {
                return "bg-primary";
            } else {
                return "hover:bg-primary";
            }
        },

        // 计算眼睛按钮的背景色class
        eyeButtonBg() {
            if (this.cb.isResultShow) {
                return "bg-primary";
            } else {
                return "bg-gray-200";
            }
        },
        eyeDotTraslate() {
            if (this.cb.isResultShow) {
                return "translate-x-6";
            } else {
                return "translate-x-1";
            }
        },
        // 画板上展示的src，有结果和原图两种
        showImageSrc() {
            if (!this.cb.isResultShow) {
                return this.cb.imgsrc;
            } else {
                return this.cb.resultSrc;
            }
        },
        // 计算之后的box数据，用于数据展示，有xy和宽高。
        cboxs() {
            if (!this.cb.isResultShow) {
                let cb = [];
                for (let b of this.boxs) {
                    let bb = {};
                    bb.x = this.cb.cl + b.xmin/this.originImg.r;
                    bb.y = this.cb.ct + b.ymin/this.originImg.r;
                    bb.w = (b.xmax - b.xmin)/this.originImg.r;
                    bb.h = (b.ymax - b.ymin)/this.originImg.r;
                    bb.size = bb.w * bb.h;
                    cb.push(bb);
                }
                // 根据div面积重拍，使小的区域后画，方便点击
                cb.sort(function (a, b) {
                    return b.size - a.size;
                });
                return cb;
            }
        },
    },
    mounted() {
        // 从路由传的参数拿imgsrc和name
        this.cb.imgsrc = this.$route.params["imgurl"]
        this.originImg.name=this.$route.params['imgname']
        this.cb.resultSrc=this.cb.imgsrc
        this.$refs.img.onload=(event)=>{
            // console.log("IMG ONLOAD!")
            this.originImg.w= event.target.naturalWidth
            this.originImg.h= event.target.naturalHeight
            this.isOnload=true
            this.originImg.showWidth=window.innerWidth-40
            this.originImg.showHeight=window.innerHeight-180
            this.originImg.r = Math.max(this.originImg.w/(this.originImg.showWidth),this.originImg.h/(this.originImg.showHeight))
            this.cb.xoffset=(this.originImg.showWidth+20)*this.originImg.r/(2) - this.originImg.w/2 
            this.cb.yoffset=88*this.originImg.r
            if(!this.isLoaded){
                this.initcanvas()
            }
            this.isLoaded=true
        }
    },
    methods: {
        // 调试事件用，输出event
        elog(e){
            console.log(e)
        },
        backHome(){
            this.$router.push({name:"home"})
        },
        showResultSwitch() {
            this.cb.isResultShow = !this.cb.isResultShow;
            this.cb.isDetecting = false;
            this.cb.isBrush = !this.cb.isResultShow;
            let canvas = this.$refs.mycanvas;
            // console.log(this.cb.isResultShow)
            canvas.height = canvas.height; //清空画板
        },
        initcanvas() {
            this.cb.isResultShow = false;
            this.cb.isBrush = true;
            this.cb.isDetecting = false;
            const canvas = this.$refs.mycanvas; //获取canvas标签
            // const ctx = canvas.getContext("2d");//创建 contextconst canvas = document.getElementById('canvas');  对象
            canvas.height = canvas.height;
            // console.log(this)

            // canvas.addEventListener("mousemove", this.drawing); //鼠标移动事件
            // canvas.addEventListener("mousedown", this.penDown); //鼠标按下事件
            // canvas.addEventListener("mouseup", this.penUp); //鼠标弹起事件

        },
        // 滚轮调节画笔大小
        wheel(event){
            // console.log(event.deltaY)
            if(event.deltaY>0){
                this.cb.penSize = Math.min(this.cb.penSize+5,100);
            }else{
                this.cb.penSize= Math.max(this.cb.penSize-5,10);;
            }
        },
        penDown(event) {
            // console.log(event)
            this.cb.penClick = true;
            this.cb.startAxisX = event.pageX;
            this.cb.startAxisY = event.pageY;
        },
        penUp(e) {
            // console.log(e)
            this.cb.penClick = false;
        },
        drawing(event) {
            // console.log(event)
            if(event.type=="touchmove"){
                event=event.changedTouches[0]
            }
            const canvas = this.$refs.mycanvas;
            // this.cb.isBrush=true;
            // console.log(1)
            if (!this.cb.penClick) {
                const cl = canvas.getBoundingClientRect().x;
                const ct = canvas.getBoundingClientRect().y;
                this.cb.startAxisX = event.pageX;
                this.cb.startAxisY = event.pageY;
                return;
            }
            //获取canvas标签
            const ctx = canvas.getContext("2d"); //创建 contextconst canvas = document.getElementById('canvas');  对象
            // ctx.globalAlpha=0.5
            ctx.globalglobalCompositeOperation="destination-out"
            const stopAxisX = event.pageX;
            const stopAxisY = event.pageY;

            ctx.beginPath();
            // 获取canvas的左上角点坐标
            const cl = canvas.getBoundingClientRect().x;
            const ct = canvas.getBoundingClientRect().y;
            // console.log('@',cl,ct)
            // console.log(canvas.getBoundingClientRect())
            ctx.moveTo((this.cb.startAxisX - cl)*this.originImg.r, (this.cb.startAxisY - ct)*this.originImg.r); //moveTo(x,y) 定义线条开始坐标
            ctx.lineTo((stopAxisX - cl)*this.originImg.r, (stopAxisY - ct)*this.originImg.r); //lineTo(x,y) 定义线条结束坐标
            ctx.strokeStyle = this.cb.penColor;
            ctx.lineWidth = this.cb.penSize*this.originImg.r;
            ctx.lineCap = "round";

            if (this.cb.isBrush) ctx.stroke(); // stroke() 方法来绘制线条

            this.cb.startAxisX = stopAxisX;
            this.cb.startAxisY = stopAxisY;
            // this.cb.isBrush=false;
        },
        createImage() {
            const canvas = this.$refs.mycanvas; //获取canvas标签
            this.cb.paintingSrc = canvas.toDataURL("image/png"); //将画板保存为图片格式的函数
        },
        submitImage() {
            const canvas = this.$refs.mycanvas; //获取canvas标签
            this.cb.paintingSrc = canvas.toDataURL("image/png"); //将画板保存为图片格式的函数
            // console.log(this.cb.paintingSrc)
            let msg = { mask: this.cb.paintingSrc, img: this.cb.imgsrc,prop:this.originImg.r};
            JSON.stringify(msg);
            // console.log(msg)
            alert("🚀已提交！请稍候🏃‍♂️");
            axios.post(this.POST_URL+"/up_file", msg).then((res) => {
                // 请求成功，在此处将showSrc改为返回的src
                alert("成功，点击右上角切换到结果图片");
                // console.log(res.data)
                this.cb.resultSrc = res.data.resultSrc;
            });
        },
        brushStateButtonClicked() {
            this.cb.isDetecting = false;
            this.cb.isBrush = true;
        },
        detectSubmit() {
            this.cb.isBrush = false;

            let msg = { img: this.cb.imgsrc };
            JSON.stringify(msg);
            // console.log(msg)
            const canvas = this.$refs.mycanvas;
            // console.log(canvas.getBoundingClientRect())
            this.cb.cl = canvas.getBoundingClientRect().x;
            this.cb.ct = canvas.getBoundingClientRect().y;

            alert("提交检测，请稍等👀");
            axios.post(this.POST_URL+"/detect", msg).then((res) => {
                // console.log(res.data)
                this.boxs = res.data;
                if(res.data.length==0){
                    alert("未检测到物体")
                }else{
                    alert("检测到物体，点击检测框可选中");
                }
                // console.log(res.data)
            }).catch(err=>{
                console.log(err)
            });
        },
        // 保定box点击绘图
        bdboxclicked: function (e, i) {
            const canvas = this.$refs.mycanvas;
            const ctx = canvas.getContext("2d");
            ctx.globalAlpha = 0.5
            ctx.fillStyle = this.cb.penColor;
            ctx.fillRect(
                this.originImg.r*(this.cboxs[i].x - this.cb.cl),
                this.originImg.r*(this.cboxs[i].y - this.cb.ct),
                this.originImg.r*this.cboxs[i].w,
                this.originImg.r*this.cboxs[i].h
            );
        },
        cleancanvas() {
            const canvas = this.$refs.mycanvas;
            canvas.height = canvas.height;
        },
        autoDetectSubmit() {
            alert("🤖已提交图片，请等待自动修复🤖");
            msg = { img: this.cb.imgsrc };
            JSON.stringify(msg);
            axios.post("http://127.0.0.1:6002/seg", msg).then((res) => {
                alert("成功😎");
                // console.log(res.data)
                this.cb.resultSrc = res.data.resultSrc;
            });
        },
        downImage() {
            let url = this.cb.resultSrc; // 获取图片地址
            var a = document.createElement("a"); // 创建一个a节点插入的document
            var event = new MouseEvent("click"); // 模拟鼠标click点击事件
            // console.log(this.originImg.name)
            a.download = this.originImg.name; // 设置a节点的download属性值
            a.href = url; // 将图片的src赋值给a节点的href
            a.dispatchEvent(event); // 触发鼠标点击事件
        },
    },
};
</script>

<style scoped>
</style>
