import * as yup from 'yup';

const formatValue = (value: number): string =>
  Intl.NumberFormat('pt', {
    style: 'currency',
    currency: 'BRL',
  }).format(value); // TODO
  

 const newsletterValidation = yup.object().shape({
    name: yup.string().required('Preencha com seu nome completo'),
    email: yup.string().email('Email inválido').required('Preencha com um e-mail válido'),
});

export {
  formatValue,
  newsletterValidation
}