<template>
  <form @submit.prevent="onSubmit">
    <input data-testid="nameInput" type="text" v-model="name" />
    <button data-testSubmit="submitButton" type="submit">Submit</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: '',
    }
  },
  methods: {
    onSubmit() {
      this.$emit('formSubmitted', { name: this.name })
    },
  },
}
</script>
