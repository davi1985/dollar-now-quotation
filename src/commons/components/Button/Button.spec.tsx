import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from '.';

describe('Button', () => {
  it('should render correctly', () => {
    const onClickMock = vitest.fn();
    const { getByRole } = render(
      <Button text="My Button" onClick={onClickMock} />,
    );

    getByRole('button', { name: 'My Button' });
  });

  it('should be possible to execute onClick event', async () => {
    const onClickMock = vitest.fn();

    const { getByRole } = render(
      <Button text="My Button" onClick={onClickMock} />,
    );

    await userEvent.click(getByRole('button', { name: 'My Button' }));

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
