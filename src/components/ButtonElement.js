import styled from 'styled-components'
import {Link} from 'react-scroll'

export const Button = styled(Link)`
  border-radius: 10px;
  white-space: nowrap;
  padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
  color: ${({dark}) => (dark ? '#FFEEF2' : '#000')};
  font-size: ${({fontBig}) => (fontBig ? '24px' : '24px')};
  outline: none;
  border: 1px solid white;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({primary}) => (primary ? '#fff' : '#01BF71')};
    color: ${({dark}) => (dark ? 'black' : '#000')};

  }
`