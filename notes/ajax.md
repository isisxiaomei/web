# 1 ajax
```js
同步交互：客户端给服务器发请求，服务器响给客户端一个响应，响应回来的内容把客户端的页面给覆盖了，这种交互称为同步交互。
```
```js
异步交互：客户端给服务器发请求，服务器响给客户端一个响应，响应回来的内容不会把客户端原来的页面覆盖掉，这种交互称为异步交互
```
## 1.1 概念
+ ajax: ajax就是实现页面不刷新，可以直接获取服务端数据

## 1.2 原理
+ 同步交互原理：浏览器直接帮我们客户端发送请求给服务器，浏览器接受数据，接收到数据之后会把原来的页面覆盖
+ 异步交互原理：浏览器给我们提供一个js对象 `XMLHttpRequest`,通过这个对象我们可以发送请求，服务器响应数据返回给`XMLHttpRequest`对象，`XMLHttpRequest`对象拿到数据之后，直接将数据通过dom放在页面上，从而达到页面不刷也可以跟服务器交互的效果

## 1.3 应用场景
+ 比如百度搜索框，搜索内容时，搜索下方会提示搜索相关的内容，这些内容就是服务器返回的，但是并未覆盖当面页面

## 1.4 XMLHttpRequest使用
+ ajax基本使用流程：创建XMLHttpRequest对象、打开链接、发送数据、接受数据
+ get和post区别：
    - get请求参数在地址中，不在send中；post请求参数不在地址中，在send中
    - post请求需要在open之后send之前添加请求头`xhr.setRequestHeader('Content-Type:','application/x-www-form-urlencoded');`
```js
// get请求示例：
<script>
    document.querySelector('input').onclick = function(){
        // 1. 创建XMLHttpRequest对象
        var xhr = new XMLHttpRequest();
        // 2. 打开链接
        // open(提交方式，提交地址)
        xhr.open('get', 'http://xxxx?a=x&b=x');

        // 3. 发送请求
        xhr.send(null);

        // 4. 接受数据
        // onreadystatechange时刻监听服务器端状态的改变
        xhr.onreadystatechange = function(){
            // 服务器响应成功会调用这个回调函数
            // 因为我跟服务器交互，服务器会进行处理，在处理的过程中会不断的给我一些状态 0，1，2，3，4
            // 每个状态表示不同的含义，4表示响应完成，完成并不代表成功，比如404状态码，此时响应完成4，但响应并未成功，
            // 所以需要通过响应状态码200来判断响应成功
            // xhr.readyState == 4 表示响应完成
            if (xhr.readyState == 4){
                // xhr.status == 200 表示响应成功
                if(xhr.status == 200){
                    // xhr.responseText 用来接收服务端的响应数据
                    var data = xhr.responseText
                }
            }
        }
    }
</script>
```
```js
// post请求
<script>
    document.querySelector('input').onclick = function(){
        var xhr = new XMLHttpRequest();
        xhr.open('post', 'http://xxxx');

        // post需要在打开链接发送数据之前设置请求头 Content-Type:application/x-www-form-urlencoded 这样服务器才能正确解析
        xhr.setRequestHeader('Content-Type:','application/x-www-form-urlencoded');

        xhr.send("username=xiaoming");

        xhr.onreadystatechange = function(){
            if (xhr.readyState == 4 && xhr.status == 200){
                    var data = xhr.responseText
            }
        }
    }
</script>
```
## 1.5 ajax封装

