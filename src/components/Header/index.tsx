import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

interface HeaderProps {
  handleOpenNewTransactionMotal: () => void
}

export function Header({handleOpenNewTransactionMotal}: HeaderProps){
  
  return(
    <Container>
      <Content>
      <img src={logoImg} alt="dt money" />
      <button type="button" onClick={handleOpenNewTransactionMotal}>
        Nova transação
      </button>

      
      </Content>
    </Container>
  )
}