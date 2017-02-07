/** 1. 换背景效果 **/

// loadjs 和 snow 方法是应用已经实现的, 直接引用即可
var loadjs = window._loadjs_;
var snow = window._snow_;

// 关闭雪花效果
snow(0);

// canvas-nest.min.js 是一个炫酷的网页背景效果, 我们使用 loadjs 加载它
loadjs('http://cdn.bootcss.com/canvas-nest.js/1.0.0/canvas-nest.min.js');



/** 2. 在墙底部插入随机文字 **/

// 随机文字
var text_arr = ['我爱你', '你不爱我'];
var text = text_arr[Math.floor(Math.random() * text_arr.length)];

//  演示考虑, 我们加载zepto.js
loadjs('http://cdn.bootcss.com/zepto/1.2.0/zepto.min.js', {
  success: function() { // zepto 加载成功
    $('<div/>', {
      css: {
        margin: '20px 5px 15px 5px',
        textAlign: 'center',
        borderTop: '1px dashed #9E9E9E',
        paddingTop: '15px'
      }
    }).text(text).appendTo('body');
  },
  error: function() { // zepto 加载失败用原生
    var text_area = document.createElement('div');
    text_area.style.cssText = 'margin: 20px 5px 15px 5px;text-align: center;border-top: 1px dashed #9E9E9E;padding-top: 15px;';
    text_area.innerText = text;
    document.body.appendChild(text_area);
  }
});



/** 3. 修改顶部一句话 **/

// 小小微信墙基于vue2.0开发, 你可直接对vue对象进行操作
var vue = window._vue_;
vue.config.sub_title = '以梦为马 随处可栖';