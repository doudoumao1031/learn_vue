## 组件注册

Make sure the component is registered before you instantiate the root Vue instance. 

        // 全局注册组件
        Vue.component('my-component', {
            template:'<div>doudoumao 全局组件</div>'
        })
         // 局部作用域注册组件
         var Child = {
            template:'<div>豆豆猫局部组件</div>'
        }
        new Vue({
            el:'#example',
            components:{
                'my-component1':Child
            }
        })

## DOM 模板解析注意事项