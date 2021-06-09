<template>
  <img :src="image.url" :alt="image.title" height="500">
  <div>
    <h3 class="text-center">
      {{ image.title }}
    </h3>
    <p>
      {{ image.explanation }}
    </p>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
export default {
  setup() {
    return {
      image: computed(() => AppState.image)
    }
  }
}
</script>
