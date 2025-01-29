import { render } from '@testing-library/react';
import { SomethingWrong } from '.';

describe('Card', () => {
  it('should render correctly', () => {
    const { getByRole } = render(<SomethingWrong />);

    getByRole('heading', {
      name: 'Infelizmente aconteceu um erro ao tentarmos solicitar a cotação em tempo real.',
    });

    getByRole('img', {
      name: 'error image',
    });
  });
});
