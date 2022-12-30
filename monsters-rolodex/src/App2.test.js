import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('App does not throw any errors', () => {
  // Wrap the rendering of the component in a try-catch block
  try {
    render(<App />);
  } catch (error) {
    // If an error is thrown, fail the test
    expect(error).toBeFalsy();
  }
});
