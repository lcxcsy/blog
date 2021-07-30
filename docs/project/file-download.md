<!--
 * @Author: your name
 * @Date: 2021-07-30 14:57:16
 * @LastEditTime: 2021-07-30 15:04:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \docsify-based-wiki\docs\project\file-download.md
-->

# Vue 实现 Get 与 Post 方式的文件下载

> 前端需要传入过多的参数给后端，get 地址栏不行，只能接受 post 方式去导出数据

## Get 的下载方式

通常下载方式如下：

```javascript
 let url =  xxxx.action?a=xx&b=yy;
 window.location.href = url;
 // 或者
 window.open(url, '_self')
```

弊端：当请求参数较多时，get 的方式无法使用，这时候需要考虑 post 的方式，但是直接通过 ajax 的 post 的方式无法调用浏览器的下载功能。

## Post 的下载方式

原理： 创建一个隐藏 form 表单，通过 form 表单的提交刷新功能，实现下载。代码如下：

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](<javascript:void(0);>)

```javascript
    // vue项目代码
  // 导出excel
    postExcelFile(params, url) {
      //params是post请求需要的参数，url是请求url地址
      var form = document.createElement("form");
      form.style.display = "none";
      form.action = url;
      form.method = "post";
      document.body.appendChild(form);
    // 动态创建input并给value赋值
      for (var key in params) {
        var input = document.createElement("input");
        input.type = "hidden";
        input.name = key;
        input.value = params[key];
        form.appendChild(input);
      }

      form.submit();
      form.remove();
    }

    //调用
     this.postExcelFile(
        { currentPage: 2, pageSize: 20 },
        'url/xxxxxxx/'
      );
```

注意点：传给后端的参数不是 json 对象的形式，而是 formData 的形式, 因此需要后端的配合解决传参问题。