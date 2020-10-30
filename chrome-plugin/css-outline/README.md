



#### outline
    border 会增加元素的大小但是 outline 不会。

```
html * {
    outline: 1px solid red
}
```

配置 Chrome 的书签功能。

    右键打开书签管理页
    右上角三个点「添加新书签」
    名称随意，粘贴以下代码到网址中
```
javascript: (function() {
	var elements = document.body.getElementsByTagName('*');
	var items = [];
	for (var i = 0; i < elements.length; i++) {
		if (elements[i].innerHTML.indexOf('html * { outline: 1px solid red }') != -1) {
			items.push(elements[i]);
		}
	}
	if (items.length > 0) {
		for (var i = 0; i < items.length; i++) {
			items[i].innerHTML = '';
		}
	} else {
		document.body.innerHTML +=
			'<style>html * { outline: 1px solid red }</style>';
	}
})();
```
然后我们就可以在任意网站上点击刚才创建的书签，内部会判断是否存在调试的 style。存在的话就删除，不存在的话就添加，通过这种方式我们就能很方便的通过这个技巧查看任意网页的布局了。



