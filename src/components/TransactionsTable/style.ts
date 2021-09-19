import styled from "styled-components";

export const Container = styled.div`
  margin-top: 3rem;

  table{
    width: 100%;
    border-spacing: 0 0.5rem;
    th{
      padding: 1rem 2rem;
      color: var(--text-body);
      font-weight: 400;
      text-align: left;
    }
    td{
      padding: 1rem 2rem;
      color: var(--text-body);
      background: var(--shape);
      border: 0;
      border-radius: 0.25rem;

      &:first-child{
        color: var(--text-title);
      }
      &.income_color{
        color: var(--green);
      }
      &.outcome_color{
        color: var(--red)
      }
    }
  }
`;