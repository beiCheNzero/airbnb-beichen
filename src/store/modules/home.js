/*
 * 采用reduxjs/toolkit， RTK方式配置
*/
import { 
  getHomeDiscountData,
  getHomeGoodPriceData,
  getHomeHighScoreData,
  getHomeHotRecommendData,
  getHomeLongForData,
  getHomePlusData
} from "@/services";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// 发送异步请求 有两个参数(payload, sotre)
export const fetchHomeDataAction = createAsyncThunk('fetchData', (payload, { dispatch, getState }) => {
  // const res = await getHomeGoodPriceData()
  getHomeGoodPriceData().then(res => {
    dispatch(changeGoodPriceInfoAction(res))
  })
  getHomeHighScoreData().then(res => {
    dispatch(changeHighScoreInfoAction(res))
  })
  getHomeDiscountData().then(res => {
    dispatch(changeDiscountInfoAction(res))
  })
  getHomeHotRecommendData().then(res => {
    dispatch(changeHotRecommendAction(res))
  })
  getHomeLongForData().then(res => {
    dispatch(changeLongForAction(res))
  })
  getHomePlusData().then(res => {
    dispatch(changePlusAction(res))
  })
})

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {},
    discountInfo: {},
    hotRecommendInfo: {},
    longForInfo: {},
    plusInfo: {}
  },
  reducers: {
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload
    },
    changeHighScoreInfoAction(state, { payload }) {
      state.highScoreInfo = payload
    },
    changeDiscountInfoAction(state, { payload }) {
      state.discountInfo = payload
    },
    changeHotRecommendAction(state, { payload }) {
      state.hotRecommendInfo = payload
    },
    changeLongForAction(state, { payload }) {
      state.longForInfo = payload
    },
    changePlusAction(state, { payload }) {
      state.plusInfo = payload
    }
  },
  extraReducers: (builder) => {
    // [fetchHomeDataAction.fulfilled](state, { payload }) {
    //   state.goodPriceInfo = payload
    // }
    return 
  }
})

export const { 
  changeGoodPriceInfoAction,
  changeHighScoreInfoAction,
  changeDiscountInfoAction,
  changeHotRecommendAction,
  changeLongForAction,
  changePlusAction
} = homeSlice.actions
export default homeSlice.reducer