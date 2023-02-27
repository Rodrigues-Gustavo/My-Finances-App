import styled from "styled-components";

export const Container = styled.div`
    max-width: 1120px;
    margin: 1.2rem auto;
    width: 100%;
    background-color: #FFF;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 0.3rem;
    display: flex;
    justify-content: space-around;
    padding: 1rem 0rem;
    gap: 0.6rem;

    @media (max-width: 750px) {
        display: grid;
    }
`;

export const InputContent = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0.6rem;
`;

export const Label = styled.label``;

export const Input = styled.input`
    outline: none;
    border-radius: 0.3rem;
    padding: 0.3rem 0.6rem;
    font-size: 0.9rem;
    border: 1px solid #ccc;
`;

export const RadioGroup = styled.div`
    display: flex;
    align-items: center;

    input {
        margin-left: 20px;
        margin-right: 0.6rem;
        accent-color: #000;
        margin-top: 0;
    }
`;

export const Button = styled.button`
    padding: 0.9rem 0.6rem;
    border: none;
    border: 0.3rem;
    border-radius: 0.4rem;
    cursor: pointer;
    color: #fff;
    background-color: rgb(0, 128, 128);
`