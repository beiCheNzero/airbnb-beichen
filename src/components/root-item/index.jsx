import PropTypes from 'prop-types'
import React, { memo,useState, useRef } from 'react'
import { ItemWrapper } from './style'
import { Rate, Carousel } from 'antd'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import Indicator from '@/base-ui/indicator'
import classNames from 'classnames'

const RoomItem = memo((props) => {
  const { itemData,itemWidth = '25%', itemClick } = props
  const [selectIndex, setSelectIndex] = useState(0)
  const [mouseHover, setMouseHover] = useState(false)
  const sliderRef = useRef()

  function controlClickHandle(isRight = false, event) {
    isRight ? sliderRef.current.next() : sliderRef.current.prev()

    // 最新的索引
    let newIndex = isRight ? selectIndex + 1 : selectIndex - 1
    const length = itemData.picture_urls.length
    if(newIndex < 0) newIndex = length - 1
    if(newIndex > length - 1) newIndex = 0
    setSelectIndex(newIndex)

    // 阻止事件冒泡
    event.stopPropagation()
  }

  function itemClickHandle() {
    if(itemClick) itemClick(itemData)
  }

  /** 子元素的赋值 */
  const pictureElement = (
    <div className='cover'>
      <img src={itemData.picture_url} alt="" />
    </div>
  )
  const sliderElement = (
    <div 
      className="slider"
      onMouseOver={e => setMouseHover(true)} 
      onMouseOut={e => setMouseHover(false)}
    >
      <div className='control'>
        <div className='btn left' onClick={e => controlClickHandle(false, e)}>
          <IconArrowLeft width="24" height="24" />
        </div>
        <div className='btn right' onClick={e => controlClickHandle(true, e)}>
          <IconArrowRight width="24" height="24" />
        </div>
      </div>
      <Carousel dots={false} ref={sliderRef}>
        {
          itemData?.picture_urls?.map(item => {
            return (
              <div className='cover' key={item}>
                <img src={item} alt="" />
              </div>
            )
          })
        }
      </Carousel>
      <div className="indicator">
        <Indicator showDots={mouseHover} selectIndex={selectIndex}>
          {
            itemData?.picture_urls?.map((item, index) => {
              return (
                <div className="item" key={item}>
                  {
                    mouseHover && (
                      <span 
                        className={classNames("dot", { active: selectIndex === index })}
                      ></span>
                    )
                  }
                </div>
              )
            })
          }
        </Indicator>
      </div>
    </div>
  )

  return (
    <ItemWrapper 
      verifyColor={itemData?.verify_info?.text_color || '#39576a'}
      itemWidth={itemWidth}
      onClick={itemClickHandle}
    >
      <div className='inner'>
        { itemData.picture_urls ? sliderElement : pictureElement }
        <div className="desc">
          {itemData.verify_info?.messages?.join(' · ')}
        </div>
        <div className='name'>{itemData.name}</div>
        <div className="price">￥{itemData.price}/晚</div>
        <div className='bottom'>
          <Rate disabled defaultValue={itemData.star_rating ?? 4.5} allowHalf style={{
            fontSize: '9px', color: '#00848A'
          }} />
          <div className="bottom-dest">
            <span className='count'>浏览:{itemData?.reviews_count}</span>
            {
              itemData.bottom_info && <span className='extra'>· {itemData?.bottom_info?.content}</span>
            }
          </div>
        </div>
      </div>
    </ItemWrapper>
  )
})

RoomItem.propTypes = {
  itemData: PropTypes.object
}

export default RoomItem