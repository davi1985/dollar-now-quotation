import { renderHook } from '@testing-library/react';
import { vi } from 'vitest';
import { useCustomToast } from './useCustomToast';
import { toast } from 'react-toastify';

vi.mock('react-toastify', () => ({
  toast: {
    info: vi.fn(),
  },
}));

describe('useCustomToast', () => {
  it('should call toast.info with correct arguments', () => {
    const { result } = renderHook(() => useCustomToast());

    const mockMessage = 'Test message';
    const mockType = 'success';

    result.current.notify({ message: mockMessage, type: mockType });

    expect(toast.info).toHaveBeenCalledWith(mockMessage, {
      closeButton: true,
      theme: 'colored',
      type: mockType,
      autoClose: 3000,
      position: 'top-center',
      hideProgressBar: false,
      closeOnClick: true,
      rtl: false,
      pauseOnFocusLoss: true,
      draggable: true,
      pauseOnHover: true,
    });
  });
});
