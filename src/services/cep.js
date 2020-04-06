import axios from 'axios';

export default async function buscaCep(cep) {
  try {
    const response = await axios.get(`http://viacep.com.br/ws/${cep}/json/`);

    if (response.data.erro) {
      return {
        error: true,
      };
    }

    const {
      logradouro: street,
      bairro: neighborhood,
      localidade: city,
      uf: state,
    } = response.data;

    const address = { street, neighborhood, city, state };

    return address;
  } catch (err) {
    if (process.env.NODE_ENV === 'development') {
      console.error(err);
    }

    return {
      error: true,
    };
  }
}
