import React from 'react'
import { LoginWrapper, LoginWrapperForm, PageWrapper, SideImage, SideImageWrapper, Title } from './resgistration.styled';
import LoginForm from './components/login.component';

function Registration() {
  return (
    <PageWrapper>
        <LoginWrapper>
            <SideImageWrapper>
                <SideImage src='/images/Frame.png'  alt='This is frame text'/>
            </SideImageWrapper>
            <LoginWrapperForm>
                <Title> Sign Up </Title>
                <p style={{fontSize: "1.4rem", margin: "1.5rem 0 3.2rem 0"}}>Already registered ? <a href="#" style={{textDecoration: "none", color: "#6d95d6", fontWeight: "500"}}>Sign In</a></p>
                <LoginForm/>
            </LoginWrapperForm>
        </LoginWrapper>
    </PageWrapper>
  )
}

export default Registration;