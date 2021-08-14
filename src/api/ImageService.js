import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Accept: "application/json",
    'Content-Type': 'application/json',
    Authorization: 'Client-ID XWBAmy0s2XT7yXDtQh3_v0gadAA5JkTJJmsD4VBggj8'
  }
})

export default {
  getPhotos({ page, perPage }) {
    return apiClient.get(
      `/photos?page=${page}&per_page=${perPage}`
    )
  },
  async searchPhotos({ query }) {
    const { data } = await apiClient.get('/search/photos', {
      params: { query }
    })
    return data
  }

}
