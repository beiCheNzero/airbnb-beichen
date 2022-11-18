import ljlRequest from "..";

export function getEntireRoomList(offset = 0, size = 20) {
  return ljlRequest.get({
    url: 'entire/list',
    params: {
      offset,
      size
    }
  })
}