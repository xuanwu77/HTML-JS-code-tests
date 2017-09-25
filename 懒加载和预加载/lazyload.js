/* 当我们的图片进入可视区域，再去请求资源；

需要监听scroll事件，在scroll事件的回调中去判断我们懒加载的图片是否进入可视区域。 */

var viewHeight = document.documentElement.clientHeight;    //可视区域的高度

function lazyload(){
    var eles = document.querySelectorAll('img[data-original][lazyload]');  //选取同时有data-original和lazyload属性的元素
    Array.prototype.forEach.call(eles,function(item,index){
        var rect;
        if(item.dataset.original === ""){
            return;
        }
        rect = item.getBoundingClientRect();  //图片没有下载下来前，也能获取到，这是通过占位符明确了图片的高度
        if(rect.bottom >= 0 && rect.top < viewHeight){
            (function(){
                var img = new Image();
                img.src = item.dataset.original;
                img.onload = function(){
                    item.src = img.src;
                }
                item.removeAttribute("data-original");
                item.removeAttribute("lazyload");
            })();
        }
    });
}

lazyload();  // 首屏时触发，即使没有触发scroll事件也可以加载出图片

document.addEventListener("scroll",lazyload);