import React from 'react'
import styled from 'styled-components'



export default function Loader({name, theme}) {
    const LoaderDiv = styled.div`
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: 8px solid transparent;
        border-top: 8px solid ${theme == 'dark' ? '#fff' : '#333'};
        border-bottom: 8px solid ${theme == 'dark' ? '#fff' : '#333'};
        animation: Loading 1s ease infinite;
        top: 45%;
        transform: translateY(50%);
        @keyframes Loading {
            from {
                transform: rotate(360deg);
            }
            to {
                transform: rotate(0deg);
            }
        }
    `

    const PreLoaderDiv = styled.div`
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: 8px dotted ${theme == 'dark' ? '#fff' : '#333'};
        border-top: 8px solid transparent;
        border-bottom: 8px solid transparent;
        animation: PreLoading 1s ease-in-out infinite;
        top: 45%;
        transform: translateY(60%);
        @keyframes PreLoading {
            from {
                transform: rotate(0deg);
            }
            to {
                transform: rotate(360deg);
            }
        }
    `

    const LoaderContainer = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-left: 50%;
        margin-right: 50%;
    `

    const LoadingText = styled.h3`
        padding-top: 30px;
        text-align: center;
        color: ${theme == 'dark' ? '#fff' : 'black'} !important;
    `

    const Name = styled.span`
        color: ${theme == 'dark' ? 'yellow' : 'orange'};
    `

    return (
        <React.Fragment>
            <LoaderContainer>
                <LoaderDiv/>
                {/* <PreLoaderDiv/> */}
                <LoadingText>Loading <Name>{name ? name.toUpperCase() : ''}</Name> </LoadingText>
            </LoaderContainer>
        </React.Fragment>
    )
}