
import styled from 'styled-components'

export const Div = styled.div`
    display:flex;
    justify-content: space-between;
    padding: 5%;    
    font-size: 40px;
    @media (max-width: 450px) {
        flex-direction: column;
      }
`

export const DivCart = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 20px;   
    @media (max-width: 450px) {
        margin-top: 20px;
        align-self: flex-start;
      } 
`

export const SpanNum = styled.span`
    margin: 0 20px
`
