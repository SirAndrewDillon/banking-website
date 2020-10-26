import styled from 'styled-components'
import {Link} from 'react-scroll'


export const Button = styled(Link) `
    
    background: ${({primary}) => (primary ? '#cc5500' : '#010606')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px' )};
    color: ${({dark}) => (dark ? '#fff' : '#fff')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    font-family: 'Turret Road', sans-serif;
    cursor: crosshair;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        border-radius: 40px;
        transform: translate(2px, -2px);
        background: ${({primary}) => (primary ?  '#fff' : '#cc5500')}
    }
`
