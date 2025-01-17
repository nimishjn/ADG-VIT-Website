import styled from "styled-components";
import doodleBg from "./assets/doodles.svg";

export const SignUpContainer = styled.div`
  min-height: calc(100vh - 80px);
  padding: 0 10%;
  color: var(--text);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background-image: url(${doodleBg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  * {
    outline: none;
  }

  @media screen and (max-width: 400px) {
    padding: 0 5%;
  }
`;

export const AdgLogoWrap = styled.div`
  width: 7rem;
  margin-bottom: 1rem;

  img {
    width: 100%;
  }
`;

export const SignUpHeader = styled.h1`
  font-weight: 600;
  text-align: center;

  @media screen and (max-width: 400px) {
    font-size: 1.5rem;
  }
`;

export const LoginText = styled.p`
  text-align: center;
  font-size: 0.8rem;
  margin-bottom: 1rem;

  span {
    color: var(--blue);
    cursor: pointer;
    font-weight: 600;
  }

  span:hover {
    text-decoration: underline;
  }
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 3rem;

  div {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }

  @media screen and (max-width: 750px) {
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 400px) {
    width: 90%;
  }
`;

export const Label = styled.label`
  font-size: 0.9rem;
  opacity: 0.9;
  padding-left: 0.5rem;
  font-weight: 600;
`;

export const Input = styled.input`
  border: none;
  background-color: var(--form-bg);
  border-radius: 10px;
  height: 2.5rem;
  width: 20rem;
  padding-left: 1rem;
  color: var(--text);
  border: 2px solid transparent;

  ::placeholder {
    color: #797979;
    letter-spacing: 10%;
  }

  @media screen and (max-width: 400px) {
    width: 100%;
  }
`;

export const SelectWrap = styled.div`
  position: relative;

  #down-arrow {
    position: absolute;
    right: 10px;
    top: 10px;
    font-size: 20px;
  }
`;

export const InputSelection = styled.div`
  border: none;
  box-sizing: border-box;
  background-color: var(--form-bg);
  border-radius: 10px;
  height: 2.5rem;
  width: 20rem;
  padding-left: 1rem;
  color: var(--text);
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 0.8rem;
  color: #797979;

  ::placeholder {
    color: #797979;
    padding-left: 1rem;
    letter-spacing: 10%;
  }
`;

export const OptionWrap = styled.div`
  position: absolute;
  top: 30px;
  right: 0;
  width: 100px;
  border-radius: 10px;
  height: 5rem;
  background-color: var(--background);
  color: var(--text);
  overflow: hidden;
`;

export const InputOption = styled.div`
  height: 2.5rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  :hover {
    transition: all 0.2s ease-in-out;
    background-color: rgba(95, 46, 234, 0.4);
  }
`;

export const SubmitButton = styled.button`
  grid-column: 1 / -1;
  align-self: center;
  justify-self: center;
  width: 15rem;
  height: 2.5rem;
  outline: none;
  cursor: pointer;
  border-radius: 5px;
  white-space: nowrap;
  padding: 5px 15px;
  font-size: 0.9rem;
  color: white;
  border: none;
  background-color: var(--blue);
  font-weight: 600;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: rgba(255, 255, 255, 1);
  }
`;


export const Banner = styled.div`
    position: absolute;
    top: 5rem;
    left: 50vw;
    transform: translateX(-50%);
    background-color: var(--blue);
    color: var(--text);
    font-size: 1.2rem;
    min-width: 10rem;
    padding: 1rem 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    z-index: 10;
`