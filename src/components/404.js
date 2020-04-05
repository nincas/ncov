import React, { useEffect, useState } from 'react';
import styled from 'styled-components'


const Container = styled.div`
    width: 100%;
    text-align: center;
    margin: auto;
    padding: auto;
`

const ErrorHeader = styled.h1`
    color: red;
`

export default function About () 
{
    return (
        <Container>
            <ErrorHeader>ERROR</ErrorHeader>
            
            <p>
                Page not found.
            </p>
        </Container>
    )
}