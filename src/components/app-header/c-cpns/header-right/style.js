import styled from "styled-components";

export const RightWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 25px;
  font-weight: 600;
  font-size: 14px;
  color: ${props => props.theme.text.primaryColor};

  .btns { 
    display: flex;
    margin: 5px 15px;
    align-items: center;
    span {
      cursor: pointer;
      padding: 12px 15px;
      background-color: #fff;
      &:hover {
        background-color: #f6f6f6;
        border-radius: 22px;
      }
    }
  }

  .profile {
    position: relative;
    display: flex;
    align-items: center;
    width: 72px;
    height: 42px;
    justify-content: space-evenly; // 每个元素与边距和其他元素的距离相等
    box-sizing: border-box; // 使宽高计算在盒子内部
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 25px;
    cursor: pointer;
    color: #888;

    ${props => props.theme.mixin.boxShadow};

    /* transition: box-shadow .2s ease;
    &:hover {
      box-shadow: 0 2px 4px rgba(0,0,0,0.18);
    } */

    .panel {
      position: absolute;
      top: 48px;
      right: 0px;
      width: 240px;
      background-color: #fff;
      box-shadow: 0 0px 4px rgba(0,0,0,0.18);
      border-radius: 15px;

      .split {
        border: none;
        border-top: 0.5px double #cecece;
      }

      .top {
        color: #222;
      }

      .top, .bottom {
        margin: 10px 0;

        .item {
          height: 40px;
          line-height: 40px;
          padding: 0 15px;
          &:hover {
            background-color: #f7f7f7;
          }
        }
      }
    }
  }
`