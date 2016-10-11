/**
 * 移动端提示组件
 * @parma   msg         {String}, 显示的消息
 * @parma   duration    {Number}，消息展示时间
 *
 * @author Guoxing.Han(hancoson#163.com)
 * @time 2016-10-11
 */
; (function () {
  var PromptMsg = function (parent) {
    var parentDom = parent == undefined ? document.body : document.querySelector(parent);

    if (!parentDom.querySelector('.prompt-msg-mask')) {
      var mask = document.createElement('div');
      mask.className = 'prompt-msg-mask';
      parentDom.appendChild(mask);
      this.mask = mask;
    }
    if (!parentDom.querySelector('.prompt-msg')) {
      var promptMsg = document.createElement('div');
      promptMsg.className = 'prompt-msg';
      parentDom.appendChild(promptMsg);
      this.promptMsg = promptMsg;
    }
  };
  PromptMsg.prototype = {
    tpl: '<div class="prompt-msg-info">{msg}</div>',

    /**
     * open
     * @param msg
     * @param duration
     */
    alert: function (msg, duration) {
      this.tpl = this.tpl.replace('{msg}', msg);

      this.promptMsg.innerHTML = this.tpl;

      this.duration = duration || 1500;
      this.show();
    },
    show: function () {
      this.mask.className = this.mask.className + ' mask-show';
      this.promptMsg.className = this.promptMsg.className + ' dialog-show';
      this.fadeShow(this.promptMsg)
      var that = this;
      setTimeout(function () {
        that.hide();
      }, this.duration);
    },
    hide: function () {
      this.fadeHide(this.promptMsg);
      var that = this,
        classNames = this.mask.classList;
      setTimeout(function () {
        that.mask.className = classNames[0];
        classNames = that.promptMsg.classList;
        that.promptMsg.className = classNames[0];
        that.mask.style = '';        
      }, 1000);
    },
    /**
     * 淡入效果
     * @param {Object} obj
     */
    fadeShow: function (obj) {
      var num = 0;
      var st = setInterval(function () {
        num++;
        Fadeflag = false;
        obj.style.opacity = num / 10;
        if (num >= 10) {
          clearInterval(st);
          Fadeflag = true;
        }
      }, 20);

    },
    /**
     * 淡出效果
     * @param {Object} obj
     */
    fadeHide: function (obj) {
      var num = 10;
      var st = setInterval(function () {
        num--;
        Fadeflag = false;
        obj.style.opacity = num / 10;
        if (num <= 0) {
          clearInterval(st);
          Fadeflag = true;
        }
      }, 20);
    }
  };
  if (typeof module != 'undefined' && module.exports) {
    module.exports = PromptMsg;
  } else if (typeof define === "function" && define.amd) {
    define(function (require, exports, module) {
      module.exports = PromptMsg;
    });
  } else {
    window.PromptMsg = PromptMsg;
  }
})();