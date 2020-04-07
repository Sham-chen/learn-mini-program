// components/my-mulslot/my-mulslot.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  },
  options: {
    multipleSlots: true
  },
  pageLifetimes: {
    show() {
      console.log('组件所在页显示出来时');
    },
    hide() {
      console.log('组件所在页隐藏起来时');
    }
  },
  lifetimes: {
    created() {
      console.log('组件被创建');
    },
    attached() {
      console.log('组件被添加到页面中');
    },
    ready() {
      console.log('组件被渲染出来');
    },
    detached() {
      console.log('组件被移除掉');
    }
  }
})
