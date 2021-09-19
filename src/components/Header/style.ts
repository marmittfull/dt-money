import styled from 'styled-components';

export const Container = styled.header`

  background: var(--blue);
  width: 100%;

`;

export const Wrapper = styled.div`

  max-width: 1100px;
  margin: 0 auto;
  padding: 1.3rem 1.2rem 10rem 1.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  button {
    border: 0px;
    background: var(--blue-light);
    color: var(--shape);
    padding: 0rem 2.2rem;
    height: 48px;
    border-radius: 0.2rem;
    transition: filter 0.2s;

    &:hover{
      filter: brightness(0.9);
    }

  }

`;