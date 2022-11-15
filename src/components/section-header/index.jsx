import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { HeaderWrapper } from './style'

const SectionHeader = memo((props) => {
  const { title, subTitle } = props

  return (
    <HeaderWrapper>
      <h2 className='title'>{title}</h2>
      {
        subTitle && <h5 className='subtitle'>{subTitle}</h5>
      }
    </HeaderWrapper>
  )
})

// 类型验证
SectionHeader.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string
}

export default SectionHeader