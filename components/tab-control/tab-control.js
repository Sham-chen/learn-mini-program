// components/tab-control/tab-control.js
Component({
  properties: {
    title: {
      type: Array,
      value: []
    }
  },
  data: {
    currentIndex: 0
  },
  methods: {
    handleItemClick(event) {
      console.log(event);
      const index = event.currentTarget.dataset.index
      this.setData({
        currentIndex: index
      })
      this.triggerEvent('itemClick', { index, title: this.properties.title[index] }, {})
    }
  }
})
