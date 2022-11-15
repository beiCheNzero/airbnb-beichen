import IconAvatar from '@/assets/svg/icon_avatar'
import IconGlobal from '@/assets/svg/icon_global'
import IconMenu from '@/assets/svg/icon_menu'
import React, { memo, useEffect, useState } from 'react'
import { RightWrapper } from './style'

const HeaderRight = memo(() => {
  /** 定义内部状态 */
  const [ showPanel, setShowPanel ] = useState(false)
  /** 事件处理函数 */
  function profileClickHandle() {
    // if(showPanel) {
    //   setShowPanel(!showPanel)
    //   return
    // }
    setShowPanel(true)
  }

  /** 副作用代码 */
  useEffect(() => {
    function windowHandleClick() {
      setShowPanel(false)
    }
    window.addEventListener('click', windowHandleClick, true)
    return () => {
      window.removeEventListener('cluck', windowHandleClick)
    }
  }, [])

  return (
    <RightWrapper>
      <div className='btns'>
        <span>登录</span>
        <span>注册</span>
        <span>
          <IconGlobal/>
        </span>
      </div>
      <div className='profile' onClick={profileClickHandle}>
        <IconMenu/>
        <IconAvatar/>
        
        {
          showPanel && (
            <div className='panel'>
              <div className="top">
                <div className='item'>行程</div>
                <div className='item'>星愿单</div>
              </div>
              <hr className='split'/>
              <div className="bottom">
                <div className='item'>出租房源</div>
                <div className='item'>开展体验</div>
                <div className='item'>帮助</div>
              </div>
            </div>
          )
        }
      </div>
    </RightWrapper>
  )
})

export default HeaderRight