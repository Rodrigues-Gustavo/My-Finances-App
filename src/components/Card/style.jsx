import styled from "styled-components";

export const Container = styled.div`
    max-width: 1120px;
    width: 98%;
    margin:  0 auto;
    display: flex;
    gap: 1.25rem;
    margin-top: -3.125rem;
    justify-content: space-around;

    @media (max-width: 750px) {
        display: flex;
        flex-direction: column;
    }
`;