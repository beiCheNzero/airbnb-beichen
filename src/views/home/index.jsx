import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { fetchHomeDataAction } from '@/store/modules/home'
import HomeBanner from './c-cpns/home-banner'
import { HomeWrapper } from './style'
import HomeSectionV1 from './c-cpns/home-section-v1'
import HomeSectionV2 from './c-cpns/home-section-v2'
import { isEmptyObject } from '@/utils'
import HomeLongFor from './c-cpns/home-longfor'
import HomeSectionV3 from './c-cpns/home-section-v3'
import { changeHeaderConfigAction } from '@/store/modules/main'

const Home = memo(() => {
  // 从redux中获取数据
  const { goodPriceInfo, highScoreInfo, discountInfo, hotRecommendInfo, longForInfo, plusInfo } = useSelector((state) => ({
        goodPriceInfo: state.home.goodPriceInfo,
        highScoreInfo: state.home.highScoreInfo,
        discountInfo: state.home.discountInfo,
        hotRecommendInfo: state.home.hotRecommendInfo,
        longForInfo: state.home.longForInfo,
        plusInfo: state.home.plusInfo
  }), shallowEqual)
  // shallowEqual只有当数据进行浅拷贝发生改变的时候才需要重新获取数据

  // 派发异步事件，发送网络请求，将数据存到store中
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeDataAction())
    dispatch(changeHeaderConfigAction({ isFixed: true, topAlpha: true }))
  }, [dispatch])

  return (
    <HomeWrapper>
      <HomeBanner/>
      <div className='content'>
        { isEmptyObject(discountInfo) && <HomeSectionV2 infoData={discountInfo} /> }
        { isEmptyObject(hotRecommendInfo) && <HomeSectionV2 infoData={hotRecommendInfo} /> }
        { isEmptyObject(longForInfo) && <HomeLongFor infoData={longForInfo} />}
        { isEmptyObject(goodPriceInfo) && <HomeSectionV1 infoData={goodPriceInfo} /> }
        { isEmptyObject(highScoreInfo) && <HomeSectionV1 infoData={highScoreInfo} /> }
        { isEmptyObject(plusInfo) && <HomeSectionV3 infoData={plusInfo} />}
      </div>
    </HomeWrapper>
  )
})

export default Home