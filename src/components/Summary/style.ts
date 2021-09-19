import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  margin-top: -7rem;
  

  div{
    background: var(--shape);
    padding: 2rem;
    border-radius: 0.4rem;
    color: var(--text-title);
    header{
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    strong{
      line-height: 4rem;
      font-size: 2rem;
      font-weight: 500;
    }

    &.green_highlight{
      background: var(--green);
      color: var(--shape);
    }
  }
`;