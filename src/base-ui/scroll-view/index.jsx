import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import React, { memo, useEffect, useRef, useState } from 'react'
import { ViewWrapper } from './style'

const ScrollView = memo((props) => {
  // 定义内部状态
  const [ showLeft, setShowLeft ] = useState(false)
  const [ showRight, setShowRight ] = useState(false)
  // const [ positionIndex, setPositionIndex ] = useState(0)
  const totalDistanceRef = useRef(0)
  const positionIndex = useRef(0)

  // 组件渲染完毕判断是否显示右侧的按钮
  const scrollContentRef = useRef()
  useEffect(() => {
    const scrollWidth = scrollContentRef.current.scrollWidth // 可滚动的宽度
    const scrollClient = scrollContentRef.current.clientWidth // 本身占据的宽度
    const totalDistance = scrollWidth - scrollClient// 可滚动的区域
    totalDistanceRef.current = totalDistance
    setShowRight(totalDistance > 0)
  }, [props.children])

  // 事件处理
  // function leftClickHandle() {
  //   const newIndex = positionIndex - 1
  //   const newEl = scrollContentRef.current.children[newIndex]
  //   const newOffsetLeft = newEl.offsetLeft
  //   newOffsetLeftRef.current = newOffsetLeft
  //   scrollContentRef.current.style.transform = `translate(${newOffsetLeft}px)`
  //   setPositionIndex(newIndex)
  //   // 是否继续显示右/左侧的按钮
  //   setShowRight(totalDistanceRef.current > newOffsetLeft)
  //   setShowLeft(newOffsetLeft > 0)
  // }
  // function rightClickHandle() {
  //   const newIndex = positionIndex + 1
  //   setPositionIndex(newIndex)
  //   const newEl = scrollContentRef.current.children[newIndex]
  //   const newOffsetLeft = newEl.offsetLeft
  //   newOffsetLeftRef.current = newOffsetLeft
  //   // console.log(newOffsetLeftRef.current)
  //   scrollContentRef.current.style.transform = `translate(-${newOffsetLeft}px)`
  //   // 是否继续显示右/左侧的按钮
  //   setShowRight(totalDistanceRef.current > newOffsetLeft)
  //   setShowLeft(newOffsetLeft > 0)
  // }
  function controlClickHandle(isRight) {
    const newIndex = isRight ? positionIndex.current + 1 : positionIndex.current - 1
    positionIndex.current = newIndex
    const newEl = scrollContentRef.current.children[newIndex]
    const newOffsetLeft = newEl.offsetLeft
    // console.log(newEl, newOffsetLeft)
    scrollContentRef.current.style.transform = `translate(-${newOffsetLeft}px)`
    // 是否继续显示右/左侧的按钮
    setShowRight(totalDistanceRef.current > newOffsetLeft)
    setShowLeft(newOffsetLeft > 0)
  }

  return (
    <ViewWrapper>
      { showLeft && (
        <div className='control left' onClick={e => controlClickHandle(false)}>
          <IconArrowLeft/>
        </div>
      ) }
      { showRight && (
        <div className='control right' onClick={e => controlClickHandle(true)}>
          <IconArrowRight/>
        </div>
      ) }
      <div className="scroll">
        <div className="scroll-content" ref={scrollContentRef}>
          { props.children }
        </div>
      </div>
    </ViewWrapper>
  )
})

export default ScrollView