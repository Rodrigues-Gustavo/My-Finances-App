import styled from "styled-components";

export const Table = styled.table`
width: 98%;
background-color: #fff;
padding: 1.2rem;
box-shadow: 0px 0px 5px #ccc;
border: 0.3rem;
max-width: 1120px;
margin: 1.2rem auto;
border-radius: 0.3rem;
`

export const Thead = styled.thead``;
export const Tbody = styled.tbody``;
export const Tr = styled.tr``;

export const Th = styled.th`
    border-bottom: inset;
    padding-bottom: 0.3rem;
    text-align: ${(props) => (props.alignCenter ? "center" : "start")};
    width: ${(props) => (props.width ? props.width + "%" : "auto")};
`