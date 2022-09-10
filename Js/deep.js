class MyDep {
    constructor(name) {
        console.log(name)
        this.callBackList = []
        setTimeout(()=> {
            this.fun()
        },0)
    }

    say(v) {
        let that = this
        let run = ((n) => {
            return function () {
                console.log('进来',n)
                that.fun()
            }
        })(v)
        this.callBackList.push(run)
        return this
    }

    deep(v) {
        let that = this
        let run = (function (v) {
           return function () {
               setTimeout(() => {
                   console.log("延时",v)
                   that.fun()
               }, v * 1000)
           }
        })(v)
        this.callBackList.push(run)
        return this
    }

    unshiftS(v) {
        let that = this
        let run = (function (v) {
           return function () {
               console.log('第一个了', v)
               that.fun()
           }
        })(v)
        this.callBackList.unshift(run)
        return this
    }
    fun() {
        let callback = this.callBackList.shift()
        callback && callback()
    }
}

function Fun(name) {
    return new MyDep(name)
}

let a = Fun("第一次")
a.say('say第二个').say('say第三个').deep(3).unshiftS('跑到最前面').say('再来一个').unshiftS('跑到最前面1')
console.log('%c>>>>>>>>>>>>>', 'color:red;','大江哈斯');
console.log('%c>>>>>>>>>>>>>', 'color:red;', '再来一遍');

