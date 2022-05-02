import React from 'react'
import { Container, FormButton, FormContent, FormH1, FormInput, FormLabel, FormWrap, Icon, Form, Text } from './SigninElements'

const Signin = () => {
  return (
    <>
      <Container >
        <FormWrap>
          <Icon to="/">TranquilFolds</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Welcome back</FormH1>
              <FormLabel htmlFor='for'>Email</FormLabel>
              <FormInput type='email' required />
              <FormLabel htmlFor='for'>Password</FormLabel>
              <FormInput type='password' required />
              <FormButton type='submit'>Sign In</FormButton>
              <Text>Forgot your password?</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  )
}

export default Signin;
