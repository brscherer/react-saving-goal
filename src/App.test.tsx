import { render } from '@testing-library/react';

import { App } from './App';

describe('App', () => {
  describe('Component Rendering', () => {
    it('should render saving goal component', () => {
      const component = render(<App />);

      expect(component.getByText(/buy a house/i)).toBeInTheDocument();
    });
  });
});
