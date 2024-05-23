import { Outlet } from 'react-router-dom'
import * as S from './styles'

export const MainTemplate = () => {
  return (
    <S.MainTemplate>
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          padding: '8px',
        }}
      >
        <a href="/cadastro" style={{ color: 'red' }}>
          Clique aqui para ir para o cadastro
        </a>
      </div>
      <Outlet />
    </S.MainTemplate>
  )
}
