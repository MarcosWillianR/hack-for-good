import * as Yup from 'yup';

export default async function validator(data, formRef) {
  try {
    const schema = Yup.object().shape({
      'social-reason': Yup.string().required('A razão social é obrigatória'),
      email: Yup.string()
        .email('Digite um e-mail válido')
        .required('O e-mail é obrigatório'),
      password: Yup.string()
        .min(6, 'A senha é muito curta')
        .required('A senha é obrigatória'),
      cnpj: Yup.string()
        .matches(/^[0-9]*$/, 'Formato inválido')
        .required('Informe o CNPJ da sua empresa'),
      cep: Yup.string()
        .matches(/^[0-9]*$/, 'Formato inválido')
        .required('Informe o CEP'),
      fone: Yup.string()
        .matches(/^[0-9]*$/, 'Formato inválido')
        .required('O telefone é obrigatório'),
      'economic-activity': Yup.string().required(
        'Atividade econômica/profissão é obrigatório'
      ),
      address: Yup.object().shape({
        street: Yup.string()
          .min(3, 'No mínimo 3 caracteres')
          .required('A rua é obrigatória'),
        neighborhood: Yup.string().required('O bairro é obrigatório'),
        city: Yup.string().required('A cidade é obrigatória'),
        state: Yup.string()
          .required('Favor informar o estado')
          .max(2, 'Utilize duas palavras'),
        country: Yup.string().required('Informe o seu país'),
      }),
    });

    await schema.validate(data, { abortEarly: false });

    formRef.current.setErrors({});
  } catch (err) {
    if (err instanceof Yup.ValidationError) {
      const errorMessages = {};

      err.inner.forEach((error) => {
        errorMessages[error.path] = error.message;
      });

      formRef.current.setErrors(errorMessages);
    }
  }
}
