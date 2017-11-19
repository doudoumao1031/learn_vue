import Vue from 'vue'
import routes from './routes'

const app = new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      const matchingView = routes[this.currentRoute]
      return matchingView
        ? require('./pages/' + matchingView + '.vue')
        : require('./pages/404.vue')
    }
  },
  //这是Render函数
  render (h) {
    return h(this.ViewComponent)
  }
})

// HTML5之pushstate、popstate操作history，无刷新改变当前url
// window.history表示window对象的历史记录
// window.history.back();在历史记录中后退
// window.history.forward();前进
// window.history.go(-1);要后退一页（相当于调用back()）
// window.history.go(1);向前移动一页（相当于调用forward()）
// window.history.length;你可以查看length属性值，了解历史记录栈中一共有多少个记录点：

// HTML5的新API扩展了window.history，使历史记录点更加开放了。可以存储当前历史记录点、替换当前历史记录点、监听历史记录点
window.addEventListener('popstate', () => {
  app.currentRoute = window.location.pathname
})
