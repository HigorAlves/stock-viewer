import styled from 'styled-components'

export const CardComp = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  border: 0.7px solid #20222a;
  border-radius: 6px;
  box-shadow: 0 2px 0 rgb(0 0 0 / 2%);
  background-color: #fff;
  white-space: nowrap;
  padding: 4px 15px;
  outline: none;
  background-color: #20222a;
  min-width: 200px;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-left: 14px;

  p {
    margin: 0;
    font-weight: 300;
  }

  h2 {
    margin: 0;
  }
`
