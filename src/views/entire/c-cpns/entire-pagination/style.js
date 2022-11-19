import styled from "styled-components";

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;

  .info {
    display: flex;
    flex-direction: column;
    align-items: center;

    .MuiPaginationItem-icon {
      font-size: 20px;
    }

    .MuiPaginationItem-page {
      margin: 0 8px;

      &:hover {
        text-decoration: underline;
      }
    }

    .MuiPaginationItem-page.Mui-selected {
      background: #222;
      color: #fff;
      cursor: pointer;
    }

    .desc {
      margin-top: 16px;
      color: #222;
    }
  }
`