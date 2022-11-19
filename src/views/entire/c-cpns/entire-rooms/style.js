import styled from "styled-components";

export const RoomsWrapper = styled.div`
  position: relative;
  padding: 30px 20px;
  margin-top: 118px;

  .title {
    font-size: 22px;
    color: #222;
    margin-left: 10px;
    font-weight: 700;
  }
  
  .list {
    display: flex;
    flex-wrap: wrap; // 换行
  }

  > .cover {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(255, 255, 255, 0.8);
  }
`