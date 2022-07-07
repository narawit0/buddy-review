import React from 'react';
import { Formik } from 'formik';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import {loginAsync} from "../store/auth/authSlice";

const FormStyled = styled.form`
  display: flex;
  padding: 2rem;
  background-color: #FFF;
  border-radius: 5px;
  flex-direction: column;
`
const InputStyled = styled.input`
  width: 20rem;
  height: 2rem;
  padding: .5rem;
  border-radius: 5px;
  margin-bottom: 1rem;
`

const ButtonStyled = styled.button`
  padding: 1rem;
  background-color: lightblue;
  border: none;
`

const initialValues = { username: '', password: '' };

function LoginForm() {
    const dispatch = useDispatch();

    const handleSubmit = (values) => {
        const { username, password } = values;

        if (username, password) {
            const data = {
                username,
                password
            }

            dispatch(loginAsync(data));
        }
    }

    return (
        <div>
            <Formik
                initialValues={initialValues}
            >
                {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      isSubmitting,
                      /* and other goodies */
                  }) => (
                    <FormStyled onSubmit={(e) => {
                        e.preventDefault()
                        handleSubmit(values);
                    }}>
                        <label htmlFor="username">Username</label>
                        <InputStyled
                            type="username"
                            name="username"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.username}
                        />
                        {errors.username && touched.username && errors.username}

                        <label htmlFor="password">Password</label>
                        <InputStyled
                            type="password"
                            name="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                        />
                        {errors.password && touched.password && errors.password}
                        <ButtonStyled type="submit" disabled={isSubmitting}>
                            Login
                        </ButtonStyled>
                    </FormStyled>
                )}
            </Formik>
        </div>
    );
}

export default LoginForm;