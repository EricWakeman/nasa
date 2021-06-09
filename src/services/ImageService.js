import { AppState } from '../AppState'
import { Image } from '../models/Image'

const { default: axios } = require('axios')
// const { logger } = require('../utils/Logger')

const url = 'https://api.nasa.gov/planetary/apod?api_key=33bf1gsRZdFBNQ7fb3ganzfhBn67vcvIAuTQNNfk&date='
class ImageService {
  async getImage(query) {
    const res = await axios.get(url + query)
    AppState.image = new Image(res.data)
  }
}

export const imageService = new ImageService()
