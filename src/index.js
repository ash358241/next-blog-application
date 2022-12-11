import axios from "axios";

export const getPostsData = async () => {
    const { data } = await axios.get('http://localhost:3000/api/posts')
    return data;
  }

export const getTrendingData = async () => {
  const {data} = await axios.get(`http://localhost:3000/api/trending`)
  return data
}

export const getPopularData = async () => {
    const {data} = await axios.get(`http://localhost:3000/api/popular`)
    return data
  }