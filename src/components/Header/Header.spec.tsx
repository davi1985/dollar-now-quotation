import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Header } from '.';

describe('Card', () => {
  it('should render correctly', () => {
    const { getByRole, getByText } = render(<Header />);

    getByRole('heading', { name: 'Dollar Now' });
    getByText('Veja a cotação do dia e calcule a convenção desejada.');
  });
});
