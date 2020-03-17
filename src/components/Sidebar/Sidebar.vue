<template>
  <div class="bg-dark p-1" @mouseover="expand = true" @mouseleave="expand = false" @mouseenter="expand = true">
     
    <transition name="slideLeft" mode="out-in">
      <div v-if="expand" key="full" class="w-48 expand mt-10 fixed left-0 top-0 bg-dark p-1">
        <div class="flex flex-wrap">
          <Tag v-for="(tag, index) in tags" :key="index" :tag="tag" />
        </div>
      </div>
    </transition>

    <div class="p-1">
      <div class="flex flex-wrap w-16">
        <div v-for="(tag, index) in tags" :key="index" :class="className(tag.color)"
              class="text-black m-1 mt-0 flex rounded justify-center w-6"
        >
          <span class="font-bold uppercase">{{ tag.shortcut }}</span> 
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Tag from './Tag.vue'

export default {
  components: { Tag },
  props: ['tags'],
  data: () => ({ expand: false }),
  methods: {
    className(color) {
      return `bg-${color}`
    }
  }
}
</script>

<style lang="scss" scoped>
$animationDuration: 0.5s;
@import "../../../node_modules/vue2-animate/src/sass/vue2-animate.scss";

.expand {
  height: calc(100vh - 2.5rem)
}
</style>