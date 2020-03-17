<template>
  <div>
    <Navbar v-model="filename" />
    <div class="flex">
      <Sidebar :tags="tags" />
      <Annotator :file.sync="filename" :tags="tags" />
    </div>
  </div>
</template>

<script>
import Annotator from '@/components/Annotator/Annotator.vue'
import Navbar from '@/components/Navbar.vue'
import Sidebar from '@/components/Sidebar/Sidebar.vue'

export default {
  components: { Annotator, Navbar, Sidebar},
  data: () => ({
    tags: [],
    filename: 'Demo1.1 КС-3.pdf',
  }),
  created() {
    this.tags = [
      {
        name: 'Event',
        shortcut: 'e',
        color: '0'
      },
      {
        name: 'Date',
        shortcut: 'd',
        color: '1'
      },
      {
        name: 'Other',
        shortcut: 'o',
        color: '4'
      }
    ]
  }
}
</script>
