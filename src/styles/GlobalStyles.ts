import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root{
    --background: #f0f2f5;
    --red: #e52e40;
    --blue: #5429cc;
    --blue-light: #6933ff;
    --text-title: #363F5F;
    --text-body: #969CB3;
    --shape: #FFFFFF;
    --green: #33CC95;
  }
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  input, button, textarea, body{
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }
  h1, h2, h3, h4, h5, strong{
    font-weight: 600;
  }
  body{
    -webkit-font-smoothing: antialiased;
    background: var(--background);
  }
  html{
    @media (max-width:1080px){
      font-size: 93.75%;
    }
    @media (max-width: 720px){
      font-size: 87.50%;
    }
  }
  button{
    cursor: pointer;
  }
  [disabled]{
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react_modal_ov_style{
    background: rgba(0, 0, 0, 0.5);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;  
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .react_modal_style{
    width: 100%;
    max-width: 576px;
    height: 588px;
    background: var(--background);
    position: relative;
    padding: 2rem;
    border-radius: 0.25rem;
  }
  .react_modal_close_button{
    position: absolute;
    right: 1.5rem;
    top: 1rem;
    background: transparent;
    border: 0;

    &:hover{
      filter: brightness(0.9);
    }
  }
`;