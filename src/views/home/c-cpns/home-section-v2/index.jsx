import React, { memo, useState, useCallback } from 'react'
import PropTypes from 'prop-types'

import SectionHeader from '@/components/section-header'
import SectionTabs from '@/components/section-tabs'
import SectionRooms from '@/components/section-rooms'
import { SectionV2Wrapper } from './style'
import SectionFooter from '@/components/section-footer'

const HomeSectionV2 = memo((props) => {
  // 从props中获取数据
  const { infoData } = props
  const { title, subtitle } = props.infoData

  // 定义内部的数据
  const initialName = Object.keys(infoData.dest_list)[0]
  /*
   * useState的初始化只在第一次渲染的时候有效
   * 方式一：在discountInfo获取到内容中之后在进行第一次渲染
   * 方式二：通过useEffect监听infoData数据的变化，设置name的值
   *        缺点：会导致组件杯渲染三次，不好。
  */
  const [ name, setName ] = useState(initialName)
  
  // 数据转换
  const tabNames = infoData.dest_address?.map(item => item.name)
  const tabClickHandle = useCallback(function (index, name) {
    setName(name)
  }, [])

  return (
    <SectionV2Wrapper>
      <SectionHeader title={title} subTitle={subtitle} />
      <SectionTabs tabNames={tabNames} tabClick={tabClickHandle} />
      <SectionRooms roomList={infoData.dest_list?.[name]} itemWidth='33.33%' />
      <SectionFooter name={name} />
    </SectionV2Wrapper>
  )
})

HomeSectionV2.propTypes = {
  infoData: PropTypes.object
}

export default HomeSectionV2