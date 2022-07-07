<template>
    <div id="root">
        <div class="app min-h-full flex flex-col ">
            <headerNav/>    
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
                    <div class="w-60 sm:w-80 flex items-center rounded-xl overflow-hidden"><video
                            class="w-60 h-48 sm:w-80 sm:h-64 bg-gray-100 rounded-xl overflow-hidden" style="">
                            <source src="https://storage.googleapis.com/cleanup-pictures.appspot.com/demo_small.mp4"
                                type="video/mp4">
                            <track kind="captions">
                        </video></div>
                </div>
                <div class="h-20 sm:h-52 px-4 w-full my-8 sm:my-0" style="max-width: 800px;">
                    <label for="upload_img"
                        class="flex items-center w-full h-full group relative cursor-pointer rounded-md font-medium focus-within:outline-none">
                        <div
                            class="w-full flex items-center justify-center px-6 py-8 sm:py-16 text- font-semibold border-4 border-dashed rounded-3xl border-black hover:bg-primary text-center bg-gray-100">
                            <input id="upload_img" name="upload_img" type="file" class="sr-only"
                                accept="image/png, image/jpeg, image/jpg" @change="uploadImg($event)">
                            <p class="hidden sm:block">单击或拖拽文件到此处</p>
                            <p class="sm:hidden">点击这里加载你的图片</p>
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
    </div>
</template>

<script>
// import utils from '../utils/imgTool'
import axios from 'axios';
import HeaderNav from '../components/headerNav.vue';
export default {
    components: { HeaderNav },
    data (){
        return{
            // 内网穿透的域名
            POST_URL:'https://55r11310h8.oicp.vip'
        }
    },
    methods:{
        exampleClicked(event){
            // console.log(event.target.naturalWidth)
        },
        uploadImg(e){
            let imgfile=e.target.files[0]
            let imgurl = null;
            // 初始化fileReader读取imgfile的base64码。
            var reader = new FileReader()
            reader.readAsDataURL(imgfile)
            // onload控制读取完成后再进行上传。
            reader.onload=(event)=>{
                imgurl=event.target.result
                // console.log(typeof imgurl)
                // 包一个msg把img的base64码传过去
                // let msg = { 'img': imgurl }
                // JSON.stringify(msg)
                // axios.post(this.POST_URL+'/detect',msg).then(res=>{
                //     console.log(res.data)
                // })
                this.$router.push({name:'drawboard',params:{'imgurl':imgurl}})
            }
        },
        // 通过base64和h5的自然宽高属性拿到img的原始宽高
        getImgNaturalSizeByBase64Code(bcode){
            var image = new Image()
            image.src = bcode
            let naturalSize ={}
            image.onload=event=>{
                // console.log(event.target)
                naturalSize.width = event.target.naturalWidth
                naturalSize.height = event.target.naturalHeight
            }
            return naturalSize
            // while(JSON.stringify(naturalSize) == '{}'){

            // }
        },
        getImgNaturalSize(img){
            var naturalSize ={};
            if(img.naturalWidth && img.naturalHeight){
                naturalSize.width = img.naturalWidth;
                    naturalSize.height = img.naturalHeight;
            }else{
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
</style>