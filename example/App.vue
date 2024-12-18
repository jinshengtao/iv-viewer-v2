<template>
  <viewer
    :visible="visible"
    :initial-index="imageIndex"
    :url-list="mediaList"
    @close="close"
    @delete="deleteFile"
  />
</template>

<script lang="ts">
import viewer from '../src/components/viewer.vue'
import Vue from 'vue'

export default Vue.extend({
  name: 'App',
  components: {
    viewer,
  },
  data() {
    return {
      visible: true,
      imageIndex: 0,
      mediaList: [
        'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
        'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg',
        'https://img.popicorns.com/dev/file/2023/12/29/80db6fa9c6ca44e6ab80b63fd70a2c35',
        'https://img.popicorns.com/dev/file/2023/12/29/80db6fa9c6ca44e6ab80b63fd70a2c35.mp4',
      ],
    }
  },
  methods: {
    close() {
      this.visible = false
    },
    deleteFile(data) {
      console.log('data', data)
      this.mediaList = data.fileList
    },
  },
})
</script>

<style>
body,
html {
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
