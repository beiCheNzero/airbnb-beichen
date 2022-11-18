import styled from "styled-components";

export const TabsWrapper = styled.div`
  /* display: flex; */
  margin-bottom: 10px;

  .item {
    box-sizing: border-box;
    flex-basis: 120px; // 设置最小的宽度
    flex-shrink: 0;
    padding: 10px 16px;
    margin-right: 16px;
    border-radius: 3px;
    font-size: 17px;
    text-align: center;
    border: 0.5px solid #D8D8D8;
    white-space: nowrap; // 不换行
    cursor: pointer;
    ${props => props.theme.mixin.boxShadow};

    &:last-child {
      margin-right: 0;
    }
    &.active {
      color: #fff;
      background-color: ${props => props.theme.color.secondaryColor};
    }
  }
`