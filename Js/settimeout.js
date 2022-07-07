var startTime = new Date().getTime();
console.log("这是一个什么事件", startTime)
var count = 0;
//耗时任务
let state = time()
console.log("起始值", time())
setInterval(function(){
    var i = 0;
    while(i++ < 100000000);
}, 0);
function handle() {
    count++;
    var offset = new Date().getTime() - (startTime + count * 1000);
    // console.log("ofseet", offset)
    // var nextTime = 1000 - offset;
    // if (nextTime < 0) nextTime = 0;
    setTimeout(handle, 1000);
    console.log(count + ' --- ' + (new Date().getTime() - (startTime + count * 1000)),time());
}
setTimeout(handle, 1000);


function time() {
    let time = new Date()
    let a = time.getMinutes()
    let b = time.getSeconds()
    let c = time.getMilliseconds()
    let result = a + ":" + b + ":" + c
    return result
}
