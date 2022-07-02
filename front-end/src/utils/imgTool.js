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
export {getNaturalSize}