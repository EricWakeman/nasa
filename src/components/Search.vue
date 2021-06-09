<template>
  <form @submit.prevent="getImage()">
    <div>
      <input type="text"
             class="form-control"
             placeholder="YYYY-MM-DD"
             v-model="state.query"
             minlength="10"
             maxlength="10"
             required
      >
      <button type="submit" class="btn btn-primary">
        Get Image
      </button>
    </div>
  </form>
</template>

<script>
import { reactive } from '@vue/reactivity'
// import { AppState } from '../AppState'
import { imageService } from '../services/ImageService'
import { logger } from '../utils/Logger'

export default {
  setup() {
    const state = reactive({
      query: ''
    })

    return {
      state,
      getImage() {
        logger.log('button worked')
        imageService.getImage(state.query)
        state.query = ''
      }
    }
  }
}
</script>
