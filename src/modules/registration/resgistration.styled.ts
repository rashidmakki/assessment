import styled from "styled-components";

export const Title = styled.h1`
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 600;
  font-size: 3rem;
  line-height: 57px;
  display: flex;
  align-items: center;
  color: #111111;
`;


export const LoginWrapper = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: center;
  min-height: 80vh;
  width: 100%;
`;

export const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  &.full-width{
    grid-column: 1/-1;
  }
`;

export const FormLabel = styled.label`
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 1.2rem;
  color: #242424;
  margin-bottom: 1.2rem;
`;

export const FormInput = styled.input`
  background: #FFFFFF;
  border: 0.8px solid #88898a;
  border-radius: 2px;
  padding: 0.6rem;
  font-size: 1.4rem;
  outline: none;
  color: #000;
  &:focus {
    border: 0.8px solid #3581fc;
  }

  &:disabled {
    background: #f0f0f0;
  }

  &.error{
    border: 0.8px solid red;
  }
`;

export const FormSelect = styled.select`
  background-color: #FFFFFF;
  color:#000;
  border: 0.8px solid #88898a;
  border-radius: 2px;
  padding: 0.6rem;
  font-size: 1.2rem;
  outline: none;
  &.dropdown{
  min-height: 2.4rem;
  }

  &:focus {
    border: 0.8px solid #3581fc;
  }

  &:disabled {
    background: #f0f0f0;
  }

  &.error{
    border: 0.8px solid red;
  }
`;

export const FormOption = styled.option`
  background-color: #FFFFFF;
  border: 0.8px solid #88898a;
  border-radius: 2px;
  padding: 1.2rem;
  font-size: 1.4rem;
  outline: none;
`;

export const FormError = styled.p`
  margin: 1rem 0 0 0;
  color: red;
  font-size: 1.4rem;
`;

export const FormTextArea = styled.textarea`
  background: #FFFFFF;
  border: 0.8px solid #88898a;
  border-radius: 2px;
  padding: 0.6rem;
  font-size: 1.4rem;
  height: 6rem;
  outline: none;
  resize: none;
  &:focus {
    border: 0.8px solid #3581fc;
  }

  &.error{
    border: 0.8px solid red;
  }
`;

export const LoginWrapperForm = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  padding: 3.5rem;
  width: 50%;
  margin-left: auto;

`;

export const Button = styled.button`
  border-radius: 0.6rem;
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 500;
  font-size: 2rem;
  line-height: 2.2rem;
  text-align: center;
  padding: 1rem 2.4rem;
  outline: none;
  border: 0;
  margin-top: 3.6rem;
  text-transform: capitalize;
  display: inline-block;

  &.primary{
    color: #FFFFFF;
    background: #000000;
    border: 1px solid #000000;
  }
  &.secondary{
    color: #000000;
    background: #FFFFFF;
    border: 1px solid #b5b5b5;
    margin-right: 2rem;
  }
  &.full-width{
    width: 100%;
  }
`;

export const PageWrapper = styled.div`
  max-width: 100vw;
  width: 100vw;
  margin: 0 auto;
`;

export const Header = styled.div`
  padding: 2.2rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderImage = styled.img`
  width: 12rem;
  &.white-varient{
    filter: brightness(0) invert(1);
  }
`;

export const SideImageWrapper = styled.div`
  height: 100vh;
  width: 45%;
  background: grey;
  position: fixed;
  display: flex;
  justify-content: center;
  top: 0;
  left: 0;
  z-index: -1;
`;

export const SideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: bottom;
`;


