import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: ${props => (props.column ? 'column' : 'row')};
`
