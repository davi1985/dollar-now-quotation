import { Container } from './styles';

import errorSvg from '../../assets/svgs/error.svg';

export const SomethingWrong = () => (
  <Container>
    <h3>
      Infelizmente aconteceu um erro ao tentarmos <br />
      solicitar a cotação em tempo real.
    </h3>

    <img src={errorSvg} alt="error image" />
  </Container>
);
