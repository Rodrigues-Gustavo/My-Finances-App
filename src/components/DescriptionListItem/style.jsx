import styled from "styled-components";

export const Tr = styled.tr``;

export const Td = styled.td`
    padding-top: 0.9rem;
    text-align: ${(props) => (props.alignCenter ? "center" : "start")};
    word-break: break-all;

    svg {
        width: 0.9rem;
        height: 0.9rem;
    }
`;