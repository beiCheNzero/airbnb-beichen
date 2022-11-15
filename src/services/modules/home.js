import ljlRequest from "..";

export function getHomeGoodPriceData() {
  return ljlRequest.get({
    url: '/home/goodprice'
  })
}