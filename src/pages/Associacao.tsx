import React from 'react';
import { Formik, Form, Field, FieldProps, FormikHelpers } from 'formik';
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Button,
  CardActions,
  makeStyles,
  createStyles
} from '@material-ui/core';
import 'date-fns';
import Input from '../components/Input';

const useStyles = makeStyles(() =>
  createStyles({
    revert: {
      flexDirection: 'row-reverse'
    }
  })
);

interface IAssociacao {
  cnpj?: string;
  nome?: string;
  sigla?: string;
  cidade?: string;
}

const Associacao: React.FC = () => {
  const classes = useStyles();

  const initialValues: IAssociacao = {
    cnpj: '',
    nome: '',
    sigla: '',
    cidade: ''
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { setSubmitting }: FormikHelpers<IAssociacao>) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 500);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Card>
            <CardHeader
              avatar={<Avatar aria-label="associacao">A</Avatar>}
              title="Associações"
              subheader="Controle e Cadastro"
            />
            <CardContent>
              <Grid container>
                <Grid container spacing={2}>
                  <Grid item xs={3}>
                    <Field name="cnpj">
                      {({ field }: FieldProps<IAssociacao>) => (
                        <Input
                          {...field}
                          id="input-cnpj"
                          label="CNPJ"
                          mask="cnpj"
                          fullWidth
                        />
                      )}
                    </Field>
                  </Grid>
                  <Grid item xs={9}>
                    <Field name="nome">
                      {({ field }: FieldProps<IAssociacao>) => (
                        <Input
                          {...field}
                          id="input-nome"
                          label="Nome"
                          inputProps={{ maxLength: 150 }}
                          fullWidth
                        />
                      )}
                    </Field>
                  </Grid>
                  <Grid item xs={3}>
                    <Field name="sigla">
                      {({ field }: FieldProps<IAssociacao>) => (
                        <Input
                          {...field}
                          id="input-sigla"
                          label="Sigla"
                          inputProps={{ maxLength: 10 }}
                          fullWidth
                        />
                      )}
                    </Field>
                  </Grid>
                  <Grid item xs={9}>
                    <Field name="cidade">
                      {({ field }: FieldProps<IAssociacao>) => (
                        <Input
                          {...field}
                          id="input-cidade"
                          label="Cidade"
                          inputProps={{ maxLength: 150 }}
                          fullWidth
                        />
                      )}
                    </Field>
                  </Grid>
                  <Grid item xs={4}>
                    <Field name="data-cadastro">
                      {({ field }: FieldProps<IAssociacao>) => (
                        <Input
                          {...field}
                          id="input-data-cadastro"
                          label="Data de cadastro"
                          mask="data"
                          inputProps={{ maxLength: 10 }}
                          fullWidth
                          defaultValue={new Date(Date.now()).toLocaleDateString(
                            'pt-BR'
                          )}
                          disabled
                        />
                      )}
                    </Field>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
            <CardActions className={classes.revert}>
              <Button type="submit" disabled={isSubmitting}>
                Salvar
              </Button>
            </CardActions>
          </Card>
        </Form>
      )}
    </Formik>
  );
};

export default Associacao;
