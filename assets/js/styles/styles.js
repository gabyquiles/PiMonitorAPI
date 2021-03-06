import styled from 'styled-components'

export const StyledApp = styled.div`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: auto auto auto auto auto auto auto auto auto auto;
    align-content: center;
    grid-template-rows: 1fr 4fr;
    height: 100vh;
`;

export const StyledGraph = styled.div`
    grid-column-start: 1;
    grid-column-end: 5;
    grid-row-start: 1;
    grid-row-end: 2;
`;

export const StyledDownload = styled.div`
    grid-column-start: 5;
    grid-column-end: 6;
    grid-row-start: 1;
    grid-row-end: 2;
`;

export const StyledUpload = styled.div`
    grid-column-start: 6;
    grid-column-end: 7;
    grid-row-start: 1;
    grid-row-end: 2;
`;

export const StyledPictureFrame = styled.div`
    grid-column-start: 1;
    grid-column-end: 9;
    grid-row-start: 2;
    grid-row-end: 3;
`;

export const StyledBandwidth = styled.h1`
    display: flex;
    display-direction: row;
`

export const UploadIcon = styled.i`
    width: 0; 
    height: 0; 
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-bottom: 15px solid blue;
`

export const DownloadIcon = styled.i`
    width: 0; 
    height: 0; 
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-top: 15px solid red;
`

export const StyledImage = styled.div`
    background: url(${props => props.image}) no-repeat 50%/cover;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    min-height: 400px;
    height: 100%;
`