import Logo from '../../assets/logo.svg'
import { Container, Wrapper } from './style'

interface HeaderProps{
  handleNewTransactionModalOpen: () => void;
}

export const Header = ({handleNewTransactionModalOpen}: HeaderProps) => {
  return (
    <Container>
      <Wrapper>
        <img src={Logo} alt="DT Money" />
        <button type="button" onClick={handleNewTransactionModalOpen}>
          New Transaction
        </button>
      </Wrapper>
    </Container>
  )
}