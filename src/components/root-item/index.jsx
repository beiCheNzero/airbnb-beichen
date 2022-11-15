import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { ItemWrapper } from './style'
import { Rate } from 'antd'

const RoomItem = memo((props) => {
  const { itemData } = props


  return (
    <ItemWrapper verifyColor={itemData?.verify_info?.text_color || '#39576a'}>
      <div className='inner'>
        <div className='cover'>
          <img src={itemData.picture_url} alt="" />
        </div>
        <div className="desc">
          {itemData.verify_info?.messages?.join(' · ')}
        </div>
        <div className='name'>{itemData.name}</div>
        <div className="price">￥{itemData.price}/晚</div>
        <div className='bottom'>
          <Rate disabled defaultValue={itemData.star_rating ?? 4.5} allowHalf style={{
            fontSize: '10px', color: '#00848A'
          }} />
          <span className='count'>浏览:{itemData?.reviews_count}</span>
          {
            itemData.bottom_info && <span className='extra'>· {itemData?.bottom_info?.content}</span>
          }
          
        </div>
      </div>
    </ItemWrapper>
  )
})

RoomItem.propTypes = {
  itemData: PropTypes.object
}

export default RoomItem