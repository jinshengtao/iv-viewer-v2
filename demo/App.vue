<template>
  <div class="demo">
    <div class="main">
      <div class="image-list">
        <div
          class="image-item"
          @click="preview(index)"
          v-for="(item, index) in mediaList"
          :key="index"
        >
          <img :src="item" />
        </div>
      </div>
    </div>
    <viewer
      :visible="visible"
      :currentIndex="currentIndex"
      :url-list="mediaList"
      @close="close"
      @delete="deleteFile"
    />
  </div>
</template>

<script lang="ts">
import viewer from '../src/components/viewer.vue'

export default {
  name: 'App',
  components: {
    viewer,
  },
  data() {
    return {
      visible: false,
      currentIndex: 0,
      mediaList: [
        'public/1.jpg',
        'https://images.pexels.com/photos/19807850/pexels-photo-19807850.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/29315817/pexels-photo-29315817.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      ],
    }
  },

  methods: {
    preview(index) {
      this.currentIndex = index
      this.visible = true
    },
    close() {
      this.visible = false
    },
    deleteFile(data) {
      console.log('data', data)
      this.mediaList = data.fileList
    },
  },
}
</script>

<style>
body,
html {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}
</style>
<style lang="scss" scoped>
.demo {
  .main {
    .image-list {
      display: flex;
      align-items: center;
      width: 330px;
      margin: 0 auto;
      .image-item {
        box-sizing: border-box;
        overflow: hidden;
        width: 100px;
        margin-right: 10px;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        img {
          width: 100%;
        }
        :last-child {
          margin-right: 0;
        }
      }
    }
  }
}
</style>
