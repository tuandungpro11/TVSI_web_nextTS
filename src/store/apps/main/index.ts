import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { CurrentHoverContentType } from "src/types/enum"

export const mainSlice = createSlice({
    name: 'main',
    initialState: {
        currentHoverContent: CurrentHoverContentType.INITIAL
    },
    reducers: {
        handleCurrentHoverContent(state, action: PayloadAction<CurrentHoverContentType>) {
            console.log(action.payload)
            state.currentHoverContent = action.payload
        }
    },
    extraReducers: builder => {
      
    }
  })
  export const { handleCurrentHoverContent } = mainSlice.actions
  export default mainSlice.reducer