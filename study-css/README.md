# study-css

常见的 css 使用总结

vue css scoped 作用域更好的隔离展示效果
vue 组件化隔离样式干扰

### 优秀博文收录

- [x] [一个可能让你的页面渲染速度提升数倍的 CSS 属性](https://mp.weixin.qq.com/s/IG9xt25Jj_KHkYnUNZsXdw)

```js
    content-visibility: auto; // 超出可见区域一定范围不会渲染
```

1. 一个元素具有 auto 这个属性，如果当前元素没有出现在屏幕上，浏览器就不会渲染它和它的子元素;当元素接近用户的可视区域时，浏览器就会解除限制，并开始进行渲染；这可以保证元素会及时被用户看到
1. 当滚动条滚动到这个元素之后，如果这个元素很大有一定高度，那么滚动条的长度就会发生变化，页面可能就会发生抖动的现象
1. 解决这个问题，可以先使用 contains-intrinsic-size 提前给元素设置自然高度的大小，比如 1000px ，这样元素提前占用了一些高度，就不会发生抖动现象
1. 单个高度过大的不要使用这个属性, 改成其中的子元素使用这个属性

- [x] [CSS 八种让人眼前一亮的 HOVER 效果](https://mp.weixin.qq.com/s/u-1IKmXQCIKD1YnlbZyhmw)
- [x] [SCSS — 缩减 50%的样式代码 14 条建议](https://mp.weixin.qq.com/s/YAti15C4hXTIVk7eVcg3Qg)
- [x] [之前总结的一些 css 常用的片段 一](http://note.youdao.com/noteshare?id=058418261ff3cf424e49fc0166d657d9&sub=27F12775ADC7488FBF82CEB956199496)
- [x] [之前总结的一些 css 常用的片段 二](http://note.youdao.com/noteshare?id=9928d2a4790538a2a5e59b76dfc6cc6f&sub=8436217DDDD34F62923B875B27895448)
- [x] [ css 调试](http://note.youdao.com/noteshare?id=421a0a47f9a62258137e978acf554bde&sub=75200A420548492CBD138FAB6033D961)
- [x] [可能是最全的 “文本溢出截断省略” 方案合集大全](https://mp.weixin.qq.com/s/mLz4CgmownHnteuzb45Qig)
  常见的省略号的实现方案对比（无副作用）
```
1. 只支持单行文本截断
    overflow: hidden；（文字长度超出限定宽度，则隐藏超出的内容）
    white-space: nowrap；（设置文字在一行显示，不能换行）
    text-overflow: ellipsis；（规定当文本溢出时，显示省略符号来代表被修剪的文本）

        无兼容问题
        响应式截断
        文本溢出范围才显示省略号，否则不显示省略号
        省略号位置显示刚好
2. 多行文本溢出省略（按行数）
    -webkit-line-clamp: 2；（用来限制在一个块元素显示的文本的行数，2 表示最多显示 2 行。为了实现该效果，它需要组合其他的 WebKit 属性）
    display: -webkit-box；（和 1 结合使用，将对象作为弹性伸缩盒子模型显示 ）
    -webkit-box-orient: vertical；（和 1 结合使用 ，设置或检索伸缩盒对象的子元素的排列方式 ）
    overflow: hidden；（文本溢出限定的宽度就隐藏内容）
    text-overflow: ellipsis；（多行文本的情况下，用省略号 “…” 隐藏溢出范围的文本)

        响应式截断
        文本溢出范围才显示省略号，否则不显示省略号
        省略号显示位置刚好

    兼容性一般：-webkit-line-clamp 属性只有 WebKit 内核的浏览器才支持
    多适用于移动端页面，因为移动设备浏览器更多是基于 WebKit 内核
```

- [ ] 
