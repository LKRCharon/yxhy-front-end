function  getNaturalSize(img){
    var naturalSize ={};
    if(img.naturalWidth && img.naturalHeight){
        naturalSize.width = img.width;
            naturalSize.height = img.height;
    }else{
        var image = new Image();
        image.src = img.src;
        naturalSize.width = image.width;
        naturalSize.height = image.height;
    }
    return naturalSize;
}
function getObjectURL(file) {
    let url = null ;
    console.log('@')

    // 下面函数执行的效果是一样的，只是需要针对不同的浏览器执行不同的 js 函数而已
    if (window.createObjectURL!=undefined) { // basic
        url = window.createObjectURL(file) ;
    } else if (window.URL!=undefined) { // mozilla(firefox)
        url = window.URL.createObjectURL(file) ;
    } else if (window.webkitURL!=undefined) { // webkit or chrome
        url = window.webkitURL.createObjectURL(file) ;
    }
    return url ;
}
export {getNaturalSize,getObjectURL}