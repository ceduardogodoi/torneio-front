import React, { useState } from 'react';
import {
  Grid,
  TextField,
  Card,
  CardContent,
  CardHeader,
  Input,
  FormControl,
  InputLabel
} from '@material-ui/core';
import { Formik, Form, Field } from 'formik';
import InputCNPJ from '../components/InputCNPJ';

const Associacao: React.FC = () => {
  const [cnpj, setCnpj] = useState('');

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setCnpj(event.target.value);
  }

  return (
    <>
      <Formik
        initialValues={{ cnpj: '' }}
        onSubmit={values => alert(JSON.stringify(values, null, 2))}
      >
        {() => (
          <Card variant="outlined">
            <CardHeader title="Cadastro de Associação" />
            <CardContent>
              <FormControl>
                <Form>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <InputLabel htmlFor="input-cnpj">CNPJ</InputLabel>
                      <Input
                        id="input-cnpj"
                        name="cnpj"
                        value={cnpj}
                        onChange={handleChange}
                        inputComponent={InputCNPJ}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <Field
                        type="text"
                        name="nome"
                        label="Nome"
                        as={TextField}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <Field
                        type="text"
                        name="cidade"
                        label="Cidade"
                        as={TextField}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <Field
                        type="text"
                        name="sigla"
                        label="Sigla"
                        as={TextField}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <Field
                        type="text"
                        name="data-cadastro"
                        label="Data de Cadastro"
                        as={TextField}
                        fullWidth
                      />
                    </Grid>
                  </Grid>
                </Form>
              </FormControl>
            </CardContent>
          </Card>
        )}
      </Formik>
    </>
  );
};

export default Associacao;
