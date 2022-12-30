import { render, getByTestId } from '@testing-library/react';
import App from './App';

test('App is being rendered', () => {
  // Render the component
  const { container } = render(<App />);

  // Check for the presence of an element with the test ID "app"
  const element = getByTestId(container, 'app');
  expect(element).toBeInTheDocument();
});
