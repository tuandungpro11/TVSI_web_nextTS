import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { Dispatch } from 'redux'
import { NewsItem } from 'src/types/apps/newsType'

interface FetchNewsBySlugParams {
    slug: string
    page: number
}

interface FetchNewsByIdParams {
    id: string
}

export const fetchNewsBySlug = createAsyncThunk('news/fetchNewsBySlug', async (params: FetchNewsBySlugParams) => {
    const response = await axios.get('/apps/news/getNewsBySlug', {
        params
    })
  
    return response.data
})

export const fetchNewsById = createAsyncThunk('news/fetchNewsById', async (params: FetchNewsByIdParams) => {
    const response = await axios.get('/apps/news/getById', {
        params
    })
  
    return response.data
})

export const newsSlice = createSlice({
    name: 'news',
    initialState: {
      listNews: [] as NewsItem[],
      totalPage: 0,
      selectedNews: {} as NewsItem,
      hottestNews: [],
      featuredNews: []
    },
    reducers: {},
    extraReducers: builder => {
      builder.addCase(fetchNewsBySlug.fulfilled, (state, action) => {
        state.listNews = action.payload.data
        state.totalPage = action.payload.totalPage
      })
      builder.addCase(fetchNewsById.fulfilled, (state, action) => {
        state.selectedNews = action.payload.data
      })
    }
  })
  
  export default newsSlice.reducer
  