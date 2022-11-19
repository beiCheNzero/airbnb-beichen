import React, { memo, useState } from 'react'
import IconSearchBar from '@/assets/svg/icon-search-bar'
import { CenterWrapper } from './style'
import SearchTabs from './c-cpns/search-tabs'
import SearchTitles from '@/assets/data/search_titles'
import SearchSections from './c-cpns/search-sections'
import { CSSTransition } from 'react-transition-group'

const HeaderCenter = memo((props) => {
  const { isSearch, searchBarClick } = props

  const [tabIndex, setTabIndex] = useState(0)
  const titles = SearchTitles.map(item => item.title)

  function SearchBarClickHandle() {
    if(searchBarClick) searchBarClick()
  }

  return (
    <CenterWrapper>
      <CSSTransition 
        in={!isSearch} 
        classNames='bar' 
        timeout={250}
        unmountOnExit={true} // 动画完成之后卸载掉组件
        >
        <div className='search-bar' onClick={SearchBarClickHandle}>
          <div className='text'>
            搜索房源和体验
          </div>
          <div className='icon'>
            <IconSearchBar/>
          </div>
        </div>
      </CSSTransition>
      <CSSTransition
        in={isSearch}
        classNames='detail'
        timeout={250}
        unmountOnExit={true}
        >
        <div className="search-detail">
          <SearchTabs titles={titles} tabClick={setTabIndex} />
          <div className="infos">
            <SearchSections searchInfos={SearchTitles[tabIndex].searchInfos} />
          </div>
        </div>
      </CSSTransition>
      {/* {
        !isSearch ? (
          <div className='search-bar' onClick={SearchBarClickHandle}>
            <div className='text'>
              搜索房源和体验
            </div>
            <div className='icon'>
              <IconSearchBar/>
            </div>
          </div>
        ) : (
          <div className="search-detail">
            <SearchTabs titles={titles} tabClick={setTabIndex} />
            <div className="infos">
              <SearchSections searchInfos={SearchTitles[tabIndex].searchInfos} />
            </div>
          </div>
        )
      } */}
    </CenterWrapper>
  )
})

export default HeaderCenter