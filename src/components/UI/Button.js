import styled, {css} from 'styled-components'

export default styled.button`
    padding: 10px;
    margin: 0  0  0 10px;
    max-width: 150px
    
    &::focus {
        outline: none;
    }
    
    &::active {
        box-shadow: inset hoff voff blur #000;
    }

    &[disabled] {
        cursor: not-allowed;
        background-color: #cccccc !important;
    }
    
    ${props => props.primary 
        && css`
            margin-top: 10px
        
            background: black;
            color: #ffffff;
        
            font-size: 20px;
            border: none;  
            
            &:hover {
                background: #00000075;
            }
        `
    }    
`




