import styled from "styled-components";

export const IndicatorWrapper = styled.div`
  overflow: hidden;

  .i-content {
    display: flex;
    position: relative;
    transition: transform 800ms ease;

    /* 选取直接子元素 */
    > * {
      flex-shrink: 0; // 不压缩
    }
  }
`