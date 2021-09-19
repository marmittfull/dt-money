import EntradasIcon from '../../assets/incomes_icon.svg';
import SaidasIcon from '../../assets/outcomes_icon.svg';
import TotalIcon from '../../assets/money_icon.svg';
import { Container } from "./style";

export const Summary = () => {
  return(
    <Container>
      <div>
        <header>
          <span>Entradas</span>
          <img src={EntradasIcon} alt="Entradas" />
        </header>
        <strong>R$ 1.000,00</strong>
      </div>
      <div>
        <header>
          <span>Saídas</span> 
          <img src={SaidasIcon} alt="Saídas" />
        </header>
        <strong>R$ 500,00</strong>
      </div>
      <div className="green_highlight">
        <header>
          <span>Total</span>
          <img src={TotalIcon} alt="Total" />
        </header>
        <strong>R$ 500,00</strong>
      </div>            
    </Container>
  );
}