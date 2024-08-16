import { useIntersectionObserver } from '@vueuse/core'

//定义全局指令
export const lazyPlugin = {
    install(app) {
        app.directive('img-lazy', {
            mounted(el, binding) {
                const { stop } = useIntersectionObserver(el, ([{ isIntersecting }]) => {   //isIntersecting 布尔值
                    // console.log(isIntersecting)  //图片进入视口区域，那么isIntersecting为true，否则false
                    if (isIntersecting) {
                        //进入视口区域
                        el.src = binding.value
                        stop()   //结构出的停止监听的方法
                    }
                })
            }
        })
    }
}