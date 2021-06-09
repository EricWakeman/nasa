<template>
  <div class="container">
    <div class="row d-flex justify-content-center">
      <div class="col-12 text-center">
        <h3>Enter a Date to see the Nasa Astronomical Picture of the Day</h3>
        <Search />
      </div>
      <div class="col-md-8">
        <Image v-if="image != null" />
      </div>
    </div>
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

<style scoped lang="scss">
.home{
  text-align: center;
  user-select: none;
  > img{
    height: 200px;
    width: 200px;
  }
}
</style>
