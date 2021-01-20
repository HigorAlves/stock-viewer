import styled from 'styled-components'

export const ButtonC = styled.button`
  display: block;
  height: 32px;
  font-size: 1rem;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.85);
  text-align: center;
  border: 0.7px solid #9092ff;
  border-radius: 3px;
  padding: 4px 15px;
  white-space: nowrap;
  box-shadow: 0 2px 0 rgb(0 0 0 / 2%);
  background-color: #fff;
  transition: all 0.5s;
  outline: none;
  cursor: pointer;
  background-color: #9092ff;
  color: #fff;
  border-color: #9092ff;

  &.disabled {
    background-color: #f5f5f5 !important;
    box-shadow: none !important;
    color: rgba(0, 0, 0, 0.25);
    border: 1px solid #9092ff;
    cursor: not-allowed;
  }
`
