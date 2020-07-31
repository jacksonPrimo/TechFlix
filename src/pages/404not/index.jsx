import React from 'react'
import Styled from 'styled-components'

const Container = Styled.div`
    background: radial-gradient(50% 50% at 50% 50%, #2F3E52 27.6%, #202833 100%);
    color: var(--white);
    height: 100vh;
    body{
        padding-top: 0px;
    }
    `
export default function PageNot(){
    return(
        <Container>
            <h1>404 error not founder</h1>
        </Container>
    )
} 