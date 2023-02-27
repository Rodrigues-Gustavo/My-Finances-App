import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    border-radius: 0.3rem;
    padding: 0.3rem 0.9rem;
    width: 30%;
   
    
    /* @media (max-width: 750px) {
        width: 20%;

        p {
            font-size: 0.8rem;
        }

        span {
            font-size: 1.2rem;
        }

        svg {
            display: none;
        }
    } */

    @media (max-width: 750px) {
        width: 100%;
    }


`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: 0.6rem;
    margin: 1.2rem;

    svg {
        width: 1.6rem;
        height: 1.6rem;
    }

    /* @media (max-width: 750px) {
        display: flex;
        flex-direction: column;
        text-align: center;
        svg {
            width: 0.6rem;
            height: 0.6rem;
            margin: 0.4rem;
        }
    } */
`;

export const HeaderTitle = styled.p`
    font-size: 1.6rem;
    text-align: center;

    /* @media (max-width: 430px) {
        font-size: 100px;
        text-align: center;
    } */
`;

export const Total = styled.span`
    font-size: 1.6rem;
    font-weight: bold;
    flex-wrap: wrap;
`;