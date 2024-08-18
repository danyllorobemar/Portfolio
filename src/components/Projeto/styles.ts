import styled from 'styled-components'

export const Card = styled.div`
  background-color: ${(props) => props.theme.corDeFundo};
  border: 1px solid ${(props) => props.theme.corDaBorda};
  padding: 16px;
`

export const LinkContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 24px;
`

export const LinkBotao = styled.a`
  color: ${(props) => props.theme.corDeFundo};
  font-size: 14px;
  background-color: ${(props) => props.theme.corDeFundoBotao};
  text-decoration: none;
  padding: 8px;
  display: inline-block;
  border-radius: 10px;
  margin-top: 24px;
`
