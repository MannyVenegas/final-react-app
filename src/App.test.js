import { render, screen, fireEvent } from '@testing-library/react';
import Booking from './components/Booking';

test('Testing some elements from the booking form, check if people < 0 submit is disabled', () => {
  const handleSubmit = jest.fn();
  render(<Booking onSubmit={handleSubmit} />);
  
  const rangeInput = screen.getByTestId("people");
  fireEvent.change(rangeInput, {target: {value : "0"}});
  
  const submitButton = screen.getByRole("button");
  fireEvent.click(submitButton);

  expect(handleSubmit).not.toHaveBeenCalled();
  expect(submitButton).toHaveAttribute("disabled");
});

