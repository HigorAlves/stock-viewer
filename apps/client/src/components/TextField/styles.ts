import styled from 'styled-components'

export const Input = styled.input`
  box-sizing: border-box;
  margin: 0;
  font-variant: tabular-nums;
  list-style: none;
  font-feature-settings: tnum;
  position: relative;
  display: inline-block;
  width: 100%;
  min-width: 0;
  padding: 4px 11px;
  color: rgba(#000000, 0.85);
  font-size: 14px;
  line-height: 1.5715;
  background-color: #fff;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  transition: all 0.3s;
  font-style: 'Open Sans';

  :focus {
    outline: none !important;
    border: 1px solid #9092ff;
    box-shadow: 0 0 8px #9092ff;
  }
`
