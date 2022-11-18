import ljlRequest from "..";

export function getHomeGoodPriceData() {
  return ljlRequest.get({
    url: '/home/goodprice'
  })
}

export function getHomeHighScoreData() {
  return ljlRequest.get({
    url: '/home/highScore'
  })
}

export function getHomeDiscountData() {
  return ljlRequest.get({
    url: '/home/discount'
  })
}

export function getHomeHotRecommendData() {
  return ljlRequest.get({
    url: '/home/hotrecommenddest'
  })
}

export function getHomeLongForData() {
  return ljlRequest.get({
    url: '/home/longfor'
  })
}

export function getHomePlusData() {
  return ljlRequest.get({
    url: '/home/plus'
  })
}