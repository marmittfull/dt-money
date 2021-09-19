import styled from "styled-components";
import { darken, transparentize } from 'polished';

export const Container = styled.form`
  display: flex;
  flex-direction: column;

  h2{
    color: var(--text-title);
    margin-bottom: 2rem;
  }

  input{
    height: 4rem;
    padding: 0 1.5rem;
    background: #E7E9EE;
    border: 1px solid#D7D7D7;
    border-radius: 0.25rem;
    font-size: 1rem;

    &::placeholder{
      color: var(--text-body);
    }

    & + input{
      margin-top: 1rem;
    }
  }

  button[type="submit"]{
    margin-top: 2rem;
    background: var(--green);
    color: var(--shape);
    border: 0;
    border-radius: 0.25rem;
    height: 3rem;
    transition: filter 0.2s;
    &:hover{
      filter: brightness(0.9);
    }
  }
`;

export const TransactionTypeButton = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`;

interface RadioButtonProps{
  isActive: boolean;
  activeColor: 'green' | 'red';
}

const radioButtonColors = {
  green: '#33CC95',
  red: '#e52e40'
}

export const RadioButton = styled.button<RadioButtonProps>`
  border: 1px solid #d7d7d7;
  margin-top: 0;
  background: ${(props) => props.isActive ? transparentize(0.9, radioButtonColors[props.activeColor]) : ''};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.25rem;
  height: 4rem;

  img{
    height: 30px;
    width: 30px;
  }
  span{
    margin-left: 1rem;
    color: var(--text-title);
  }

  &:hover{
    border-color: ${darken(0.1, '#d7d7d7')};
    }
`;