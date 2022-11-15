import styled from "styled-components";

export const CenterWrapper = styled.div`
  .search-bar {
    display: flex;
    justify-content: space-between;
    align-items: center; // 垂直居中
    width: 300px;
    height: 48px;
    box-sizing: border-box; // padding和border宽高包含在width内，宽度会包含padding和border
    padding: 0 8px;
    border: 1px solid #ddd;
    border-radius: 24px;
    cursor: pointer;

    ${props => props.theme.mixin.boxShadow};

    .text {
      padding: 0 16px;
      color: ${props => props.theme.text.secondaryColor};
      font-weight: 600;
    }

    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      color: #fff;
      background-color: ${props => props.theme.color.primaryColor};    }
  }
`