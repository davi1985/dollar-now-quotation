import { render } from '@testing-library/react';
import { App } from './App';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');
describe('Home', () => {
  it.only('should render correctly', () => {
    const { debug } = render(<App />);

    debug();
  });
});
