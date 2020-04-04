import * as Yup from 'yup';

export default async function validator(data, formRef) {
  try {
    const schema = Yup.object().shape({
      login: Yup.string().required('O login é obrigatório'),
      password: Yup.string().required('A senha é obrigatória'),
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
