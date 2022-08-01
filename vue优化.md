1、封装组件，用Object.freeze()冻结手写的数组对象
2、图片、路由、组件懒加载
3、第三方组件按需加载
4、v-if 和 v-show 区分使用场景
5、computed 和 watch 区分使用场景
6、v-for 遍历必须为 item 添加 key
7、事件与定时器的销毁
8、需要缓存的页面开启keep-live，提高浏览性能
9、合理使用v-onec缓存一些静态结构
10、vue3后使用v-memo 缓存一个数组：有更改就更新，否则就跳过1000以后较有大用



2.0、使用webpack-bundle-analyzer开始工具分析
2.1、Webpack 对图片进行压缩 // https://blog.51cto.com/u_15652665/5330019
    注： image-webpack-loader/img-loader​​压缩图片
2.2、开启oneOf减少每个文件被loader的rules里的规则全部过滤一遍
2.3、开启cacel缓存，构建的时候会生成文件hash和时间戳，下次构建时未曾改变文件就不会再次被构建
2.4、在optimization下配置runtimeClunks，抽取文件的引用，防止未曾改变的文件因导入文件的改变而改变。
2.5、在optimization下配置splitChunks对引入重复的模块进行一个分割，减少打包体积
2.6、使用mini-css-extract-plugin插件提取css为单独文件，然后link引入
2.7、生产关闭SourceMap， 开发使用eval-source-map
2.8、开启cdn优化，在webapck中的externals配置不需要被打包文件名称
2.9、开启 gzip 压缩 //https://www.cnblogs.com/caofeng11/p/13935383.html
    注：开启webpack压缩：compression-webpack-plugin
        开启nginx压缩
        （因服务器时时压缩，每次访问都压缩）双压缩结合，减轻服务器压力，nginx开启静态压缩，过滤未压缩的再让nginx压缩
3.0、使用 Chrome Performance 查找性能瓶颈



        代码评审
1、命名是否合理
2、封装的组件方法等，是否留有可扩展性。也要根据需求需要来，以防止进行过于形象以及封装，使其复杂化
3、合理添加注释
4、代码的可读性
5、用户的敏感信息是否明文展现，未做加密传输，对存储本地的数据进行评估
6、组件http请求是否合理，是否会阻塞线程
7、展现一些优秀代码，供大家参考
8、代码逻辑的一些判断，比如：嵌套if else 和 数据结构过深问题
9、一些逻辑判断的添加，是否会导致原有逻辑发生更改
10、全部使用===
11、css样式是否有重复，可以封装或者继承的就无须多写
12、对后台返回数据进行处理，算法结构选择是否正确，是否会造成内存泄漏等。


1、IE8 下面的 png 图片无法正常显示
    解决：在样式里面对 span 设置宽高和 display:inline-block;即可

2、rgba 不支持 IE8
    可以用 opacity

3、img下的留白
    解决方案：给img设定display:block。

4、如果图片加a标签在IE9-中会有边框
    解决方案:给img设定border:none。



    浏览器渲染流程
    1、首先查询浏览器缓存momery，然后查找本地disk缓存，然后查找hosts文件，然后路由缓存，最后dns递归查询，（本地，权限，顶级，根服务器）
    2、建立三次握手，  （为了减少服务器的等待时间）,
    3、构建http请求，客户端相应，看是否命中缓存，命中则返回304，否则200
    4、如果通用首部字段conection不是keep-alive，既不是长连接，通过四次挥手断开tcp连接
    5、浏览器解析返回来的html文件，碰见link、script外部标签，会下载相关文件，并不影响html的解析，当js文件返回后，html解析会暂停，但css文件的解析不会停止，构造出cssdom树，cssdom构建完成，才运行返回的js文件， js文件执行结束后，html继续解析dom树， 进行下一步
    6、将dom树和cssdom树结合生成render渲染树，期间会去掉隐藏的节点，只展示可见的节点
    7、布局： 获取渲染树结构、节点位置和大小
    8、绘制根据渲染树和布局绘制页面