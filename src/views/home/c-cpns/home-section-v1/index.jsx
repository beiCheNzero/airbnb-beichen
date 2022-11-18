import SectionFooter from '@/components/section-footer'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { SectionV1Wrapper } from './style'

const HomeSectionV1 = memo((props) => {
  const { title, subtitle, list } = props.infoData

  return (
    <SectionV1Wrapper>
      <SectionHeader title={title} subTitle={subtitle} />
      <SectionRooms roomList={list} itemWidth='25%' />
      <SectionFooter/>
    </SectionV1Wrapper>
  )
})

HomeSectionV1.propTypes = {
  infoData: PropTypes.object
}

export default HomeSectionV1