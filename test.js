/** 1. ������Ч�� **/

// loadjs �� snow ������Ӧ���Ѿ�ʵ�ֵ�, ֱ�����ü���
var loadjs = window._loadjs_;
var snow = window._snow_;

// �ر�ѩ��Ч��
snow(0);

// canvas-nest.min.js ��һ���ſ����ҳ����Ч��, ����ʹ�� loadjs ������
loadjs('http://cdn.bootcss.com/canvas-nest.js/1.0.0/canvas-nest.min.js');



/** 2. ��ǽ�ײ������������ **/

// �������
var text_arr = ['�Ұ���', '�㲻����'];
var text = text_arr[Math.floor(Math.random() * text_arr.length)];

//  ��ʾ����, ���Ǽ���zepto.js
loadjs('http://cdn.bootcss.com/zepto/1.2.0/zepto.min.js', {
  success: function() { // zepto ���سɹ�
    $('<div/>', {
      css: {
        margin: '20px 5px 15px 5px',
        textAlign: 'center',
        borderTop: '1px dashed #9E9E9E',
        paddingTop: '15px'
      }
    }).text(text).appendTo('body');
  },
  error: function() { // zepto ����ʧ����ԭ��
    var text_area = document.createElement('div');
    text_area.style.cssText = 'margin: 20px 5px 15px 5px;text-align: center;border-top: 1px dashed #9E9E9E;padding-top: 15px;';
    text_area.innerText = text;
    document.body.appendChild(text_area);
  }
});



/** 3. �޸Ķ���һ�仰 **/

// СС΢��ǽ����vue2.0����, ���ֱ�Ӷ�vue������в���
var vue = window._vue_;
vue.config.sub_title = '����Ϊ�� �洦����';