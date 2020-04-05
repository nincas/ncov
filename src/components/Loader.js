import React from 'react'
import styled from 'styled-components'

const LoaderDiv = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 8px solid transparent;
    border-top: 8px solid #fff;
    border-bottom: 8px solid #fff;
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
    border: 8px dotted #fff;
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
    color: #fff;
`

const Name = styled.span`
    color: yellow;
`

export default function Loader({name}) {
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