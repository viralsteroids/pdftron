<template>
  <div :class="className" class="rounded m-1 flex justify-between font-bold">
    <span class="text-black px-2">{{ tag.name }}</span>
    <span class="text-black bg-white w-5 text-center rounded-r-sm uppercase">{{ tag.shortcut }}</span>
  </div>
</template>

<script>
export default {
  props: ['tag'],
  computed: {
    className() {
      return `bg-${this.$props.tag.color}`
    }
  }
}
</script>