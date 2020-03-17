<template>
  <div class="h-10 bg-dark shadow-md z-30 sticky w-full items-center flex z-20 px-3">
    <div class="flex justify-between w-full">
      <span class="text-white font-bold">PDF.JS</span>
      <select v-model="selected" class="w-48">
        <option v-for="(name, index) in files" :key="index" :value="name">{{ name }}</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  props: ['value'],
  data() {
    return {
      selected: this.value,
      files: []
    }
  },
  async mounted() {
    this.files = await (await this.http.get('/files')).data;
    this.$watch('selected', (n) => this.$emit('input', n))
  }
}
</script>