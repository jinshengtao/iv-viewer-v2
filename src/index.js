import Viewer from './components/viewer.vue'

Viewer.install = function (Vue) {
  Vue.component(Viewer.name, Viewer)
}
export default Viewer
