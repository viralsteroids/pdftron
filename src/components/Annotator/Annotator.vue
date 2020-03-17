<template>
  <div ref="viewer" class="w-full annotator"></div>
</template>

<script>
export default {
  props: ['file', 'tags'],
  data() {
    return {
      instance: null,
      disabledElements: [
        'freeHandToolGroupButton', 'ellipseToolButton', 'lineToolButton',
        'polylineToolButton', 'polygonToolButton','cloudToolButton',
        'underlineToolButton', 'squigglyToolButton', 'strikeoutToolButton',
        'signatureToolButton', 'eraserToolButton', 'freeTextToolButton',
        'stickyToolButton', 'miscToolGroupButton', 'contextMenuPopup', 
        'viewControlsButton', 'panToolButton', 'textUnderlineToolButton',
        'textSquigglyToolButton', 'textStrikeoutToolButton', 'linkButton'
      ]
    }
  },
  methods: {
    async setup() {
      let instance = await WebViewer({
        path: process.env.BASE_URL + 'lib',
        initialDoc: `${this.baseUrl}/files/` + this.$props.file,
      }, this.$refs.viewer)
      this.instance = instance;
      let pallete = require('./colors')
      let colors = []
      this.$props.tags.forEach(tag => {
        colors.push(pallete[tag.color]);
      })

      instance.updateElement('colorPalette', colors)
      instance.setTheme('dark')
      instance.disableElements(this.disabledElements);
      setInterval(() => {
        var slider = instance.iframeWindow.document.getElementsByClassName('sliders-container')[0]
        if(slider)
          slider.parentElement.removeChild(slider)
      },100)
 
    },
    async loadFile(filename) {
      await this.instance.loadDocument(this.baseUrl + '/files/' + filename)
    }
  },
  async mounted() {
    await this.setup()
    this.$watch('file', (n) => this.loadFile(n))
  }
}
</script>

<style lang="scss">
.annotator {
  height: calc(100vh - 2.5rem);
}
.sliders-container  {
  display: none!important;
}
</style>