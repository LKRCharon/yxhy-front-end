<template>
    <div id="root">
        <div class="app min-h-full flex flex-col ">
            <!-- <headerNav /> -->
            <!-- 顶部nav -->
            <div class="fixed w-full z-10">
                <div
                    class="w-full bg-white bg-opacity-70 filter backdrop-blur-3xl z-10 flex px-5 pt-3 pb-3 justify-between items-center ">
                    <!-- 左侧logo -->
                    <div>
                        <a href="#" aria-label="huiInpainting Logo">
                            <img src="../assets/fontlogo.png" alt="logo" class="inline-block "
                                width="144" height="48">
                        </a>
                    </div>
                    <!-- 右边导航 -->
                    <div class="flex items-center justify-center space-x-8">
                    <a class="hidden hover:bg-primary p-2 px-2 rounded-lg sm:inline-block" href="#advantage">产品优势</a>
                    <a class="hidden hover:bg-primary p-2 px-2 rounded-lg sm:inline-block" href="#lesson">使用教程</a>
                    <a class="hidden hover:bg-primary p-2 px-2 rounded-lg sm:inline-block" href="#contactus">联系我们</a>
                        
                    </div>
                </div>
            </div>
            <main
                class="flex flex-1 flex-col sm:items-center sm:justify-center overflow-hidden pt-24 items-center justify-center pb-10">
                <div class="flex flex-col sm:flex-row items-center space-y-5 sm:space-y-0 sm:space-x-6 p-5 pt-0 pb-10">
                    <div class="sm:max-w-md lg:max-w-lg flex flex-col items-center sm:items-start p-0 m-0 space-y-5">
                        <h1 class="text-center font-bold sm:text-left text-xl sm:text-3xl lg:text-4.9xl"> 与图像中所有多余的
                            <span class="bg-primary whitespace-nowrap rounded-l-full rounded-r-full px-2">杂物</span>,
                            <span class="bg-primary whitespace-nowrap rounded-l-full rounded-r-full px-2">人像</span>,
                            <span class="bg-primary whitespace-nowrap rounded-l-full rounded-r-full px-2">缺陷</span> 或者
                            <span class="bg-primary whitespace-nowrap rounded-l-full rounded-r-full px-2">文字</span> 说再见！
                            <br>
                            <p class="underline font-varent">转瞬之间，移形绘影</p>
                        </h1>
                    </div>
                    <div class="w-60 sm:w-80 flex items-center rounded-xl overflow-hidden">
                        <img src="../assets/intro.gif" alt="introduction">
                    </div>
                </div>
                <!-- 拖拽上传文件 -->
                <div ref="dropdiv" class="h-20 sm:h-52 px-4 w-full my-8 sm:my-0" style="max-width: 800px;"
                    @drop.prevent="filedrop" @dragover.prevent>
                    <label for="upload_img"
                        class="flex items-center w-full h-full group relative cursor-pointer rounded-md font-medium focus-within:outline-none">
                        <div
                            class="w-full flex items-center justify-center px-6 py-8 sm:py-16 text- font-semibold border-4 border-dashed rounded-3xl border-black hover:bg-primary text-center bg-gray-100">
                            <input id="upload_img" name="upload_img" type="file" class="sr-only"
                                accept="image/png, image/jpeg, image/jpg" @change="uploadImg($event)">
                            <p class="hidden sm:block">单击或拖拽文件到此处</p>
                            <p class="sm:hidden">点击这里加载图片</p>
                        </div>
                    </label>
                </div>
                <div class="flex flex-col items-center justify-center cursor-pointer pt-4 sm:pt-10"><span class="mb-4">↓
                        用下面的图片进行尝试吧</span>
                    <div class="flex space-x-2 sm:space-x-4 px-4">
                        <div @click="exampleClicked($event)" role="button" tabindex="-1"><img
                                class="cases-img rounded-md hover:opacity-75 w-24 h-24 object-cover" width="96"
                                height="96" src="../assets/eg/000068.png" alt="bag"></div>
                        <div @click="exampleClicked($event)" role="button" tabindex="-1"><img
                                class="cases-img rounded-md hover:opacity-75 w-24 h-24 object-cover" width="96"
                                height="96" src="../assets/eg/000814.png" alt="bag"></div>
                        <div @click="exampleClicked($event)" role="button" tabindex="-1"><img
                                class="cases-img rounded-md hover:opacity-75 w-24 h-24 object-cover" width="96"
                                height="96" src="../assets/eg/6458524847_2f4c361183_k.png" alt="bag"></div>
                        <div @click="exampleClicked($event)" role="button" tabindex="-1"><img
                                class="cases-img rounded-md hover:opacity-75 w-24 h-24 object-cover" width="96"
                                height="96" src="../assets/eg/bench2.png" alt="bag"></div>
                        <div @click="exampleClicked($event)" role="button" tabindex="-1"><img
                                class="cases-img rounded-md hover:opacity-75 w-24 h-24 object-cover" width="96"
                                height="96" src="../assets/eg/doodoosonic-0t7PNNZlTC0.png" alt="bag">
                        </div>
                    </div>
                </div>
            </main>
        </div>
        <div class="homepage-block bg-primary">
            <h1 class="font-serif font-semibold text-4xl">让图片焕发新的生机！
                <br>

                <span class="highlight text-primary">在刹那瞬间</span>
            </h1>
            <p class="pt-5">↓ 看看我们的产品介绍和使用方法吧！(╹ڡ╹ )</p>
            <div id="advantage"></div>
        </div>

        <div class="">
            <div 
                class="max-w-2xl sm:mx-auto lg:ml-auto py-8 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-16 sm:text-center">
                <div>
                    <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">产品优势</h2>
                    <!-- <p class="mt-4 text-gray-500">移形绘影</p> -->

                    <dl class=" m-auto mt-4 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2 sm:gap-y-8 lg:gap-x-8">
                        <div class="border-t border-gray-200 pt-4">
                            <dt class="font-medium text-gray-900">快捷</dt>
                            <dd class="mt-2 text-sm text-gray-500">打开网页，一键使用</dd>
                        </div>

                        <div class="border-t border-gray-200 pt-4">
                            <dt class="font-medium text-gray-900">简便</dt>
                            <dd class="mt-2 text-sm text-gray-500">上传图片，即可抹去</dd>
                        </div>

                        <div class="border-t border-gray-200 pt-4">
                            <dt class="font-medium text-gray-900">高效</dt>
                            <dd class="mt-2 text-sm text-gray-500">眨眨眼睛，得出结果</dd>
                        </div>

                        <div class="border-t border-gray-200 pt-4">
                            <dt class="font-medium text-gray-900">优质</dt>
                            <dd class="mt-2 text-sm text-gray-500">超清图片，优质效果</dd>
                        </div>

                        <div class="border-t border-gray-200 pt-4">
                            <dt class="font-medium text-gray-900">自由</dt>
                            <dd class="mt-2 text-sm text-gray-500">随心所欲，自由抹去</dd>
                        </div>

                        <div class="border-t border-gray-200 pt-4">
                            <dt class="font-medium text-gray-900">简洁</dt>
                            <dd class="mt-2 text-sm text-gray-500">全心全意，为您服务</dd>
                        </div>
                    </dl>
                </div>
                <!-- <div class="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8"> -->
                <!-- <img src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg"
                        alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                        class="bg-gray-100 rounded-lg">
                    <img src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg"
                        alt="Top down view of walnut card tray with embedded magnets and card groove."
                        class="bg-gray-100 rounded-lg">
                    <img src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg"
                        alt="Side of walnut card tray with card groove and recessed card area."
                        class="bg-gray-100 rounded-lg">
                    <img src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg"
                        alt="Walnut card tray filled with cards and card angled in dedicated groove."
                        class="bg-gray-100 rounded-lg">
                </div> -->
            </div>
        </div>
        <div class="py-12 bg-white" id="lesson">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="lg:text-center">
                    <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">我该如何使用？（￣▽￣）</h2>
                    <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">简单的使用教程
                    </p>
                </div>

                <div class="mt-10">
                    <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8  md:gap-y-10">
                        <div class="relative">
                            <dt>
                                <div
                                    class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                                    <!-- Heroicon name: outline/globe-alt -->
                                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                    </svg>
                                </div>
                                <p class="ml-16 text-lg leading-6 font-medium text-gray-900">1 上传图片
                                </p>
                            </dt>
                            <dd class="mt-2 ml-16 text-base text-gray-500">在上边的框框里，拖拽或者点击上传一张图片，进入画板页面！当然也可以直接点击示例图片进入哦
                            </dd>
                        </div>

                        <div class="relative">
                            <dt>
                                <div
                                    class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                                    <!-- Heroicon name: outline/scale -->
                                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                                    </svg>
                                </div>
                                <p class="ml-16 text-lg leading-6 font-medium text-gray-900">2 选择图像抹去方法！</p>
                            </dt>
                            <dd class="mt-2 ml-16 text-base text-gray-500">
                                我们提供了两种方法！你可以在画板页面下的选项框第一个选项中自由选择！</dd>
                        </div>

                        <div class="relative">
                            <dt>
                                <div
                                    class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                                    <!-- Heroicon name: outline/lightning-bolt -->
                                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <p class="ml-16 text-lg leading-6 font-medium text-gray-900">画笔模式</p>
                            </dt>
                            <dd class="mt-2 ml-16 text-base text-gray-500">
                                你可以利用画笔自由选择想要抹去的部分，可以在选项框内控制画笔粗细。如果画的不满意，可以在右上角一键擦去痕迹重新来哦！画好后点击提交即可！</dd>
                        </div>

                        <div class="relative">
                            <dt>
                                <div
                                    class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                                    <!-- Heroicon name: outline/annotation -->
                                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                                    </svg>
                                </div>
                                <p class="ml-16 text-lg leading-6 font-medium text-gray-900">物体检测模式</p>
                            </dt>
                            <dd class="mt-2 ml-16 text-base text-gray-500">
                                选择物体检测模式之后，自动开始检测！检测好返回后选择想要去除的框框，点击提交！在右上角可以开关进行前后效果对比！成功之后可以点击下载获取新图片！</dd>
                        </div>
                    </dl>
                </div>
            </div>
            <div id="contactus"></div>
        </div>
        <footer class="mx-auto mt-12 w-full max-w-container px-4 sm:px-6 lg:px-8">
            <div class="border-t border-slate-900/5 py-10">
                <p class="mt-5 text-center text-sm leading-6 text-slate-500">© 2022 Hide( ) Inc. All rights
                    reserved.</p>
                <div
                    class="mt-4 flex items-center justify-center space-x-4 text-sm font-semibold leading-6 text-slate-700">
                    <a href="mailto:leecharongg@gmail.com">欢迎联系我们</a>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
// import utils from '../utils/imgTool'
import HeaderNav from '../components/headerNav.vue';
export default {
    components: { HeaderNav },
    data() {
        return {
            // 内网穿透的域名
            POST_URL: 'https://55r11310h8.oicp.vip'
        }
    },
    mounted() {
        // console.log(this.$refs.dropdiv)
    },
    methods: {
        filedrop(event) {
            // console.log(event)
            if (event.type === 'drop') {
                //获取文件信息，同File对象相同
                var files = event.dataTransfer.files;
                let imgurl = null;
                console.log(
                    `文件名称:${files[0].name},文件类型:${files[0].type},文件大小:${files[0].size} bytes`
                )
                var reader = new FileReader()
                reader.readAsDataURL(files[0])
                // console.log("filereading")
                reader.onload = (event) => {
                    imgurl = event.target.result
                    this.$router.push({ name: 'drawboard', params: { 'imgurl': imgurl, 'imgname': files[0].name } })
                }
            }
        },
        exampleClicked(event) {
            let img = event.target

            let tempCanvas = document.createElement("canvas");
            tempCanvas.width = img.naturalWidth;
            tempCanvas.height = img.naturalHeight;
            console.log(tempCanvas)
            let ctx = tempCanvas.getContext("2d");
            ctx.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight);
            let imgsrc = tempCanvas.toDataURL("image/png");
            console.log(imgsrc)
            this.$router.push({ name: 'drawboard', params: { 'imgurl': imgsrc, 'imgname': 'example.png' } })
        },
        uploadImg(e) {
            let imgfile = e.target.files[0]
            let imgurl = null;
            // 初始化fileReader读取imgfile的base64码。
            var reader = new FileReader()
            reader.readAsDataURL(imgfile)
            // onload控制读取完成后再进行上传。
            reader.onload = (event) => {
                imgurl = event.target.result
                this.$router.push({ name: 'drawboard', params: { 'imgurl': imgurl, 'imgname': imgfile.name } })
            }
        },
        // 通过base64和h5的自然宽高属性拿到img的原始宽高
        getImgNaturalSizeByBase64Code(bcode) {
            var image = new Image()
            image.src = bcode
            let naturalSize = {}
            image.onload = event => {
                // console.log(event.target)
                naturalSize.width = event.target.naturalWidth
                naturalSize.height = event.target.naturalHeight
            }
            return naturalSize
            // while(JSON.stringify(naturalSize) == '{}'){

            // }
        },
        getImgNaturalSize(img) {
            var naturalSize = {};
            if (img.naturalWidth && img.naturalHeight) {
                naturalSize.width = img.naturalWidth;
                naturalSize.height = img.naturalHeight;
            } else {
                let image = new Image();
                image.src = img.src;
                naturalSize.width = image.naturalWidth;
                naturalSize.height = image.naturalHeight;
            }
            return naturalSize;
        }
    }
}
</script>

<style lang="css" scoped>
.homepage-block {
    margin-top: 1rem;
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    padding: 3rem .5rem;
    text-align: center;
    line-height: 2rem;
}

.highlight {
    white-space: nowrap;
    border-top-left-radius: 9999px;
    border-bottom-left-radius: 9999px;
    border-top-right-radius: 9999px;
    border-bottom-right-radius: 9999px;
    --tw-bg-opacity: 1;
    background-color: rgba(0, 0, 0, var(--tw-bg-opacity));
    padding: .25rem 1rem;
    line-height: 3rem;
}

.font-alt {
    font-family: "VarentGrotesk", Helvetica, Arial, sans-serif;
    font-weight: 600;
}
</style>