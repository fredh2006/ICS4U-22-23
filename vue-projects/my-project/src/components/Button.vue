<template>
  <button @click = "onClick()" :style="{ background: colour }" class="btn">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: String,
    colour: String,
  },
  methods: {
    onClick(){
      this.$emit('btn-click')
    }
  },
}
</script>