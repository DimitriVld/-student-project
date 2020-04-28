import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Default } from '../stories/inputCheckbox.stories';

describe('Renders input checkbox component', () => {

    test('with default', () => {
      const { container, getByTestId } = render(<Default />);
      expect(container).toBeTruthy();
      const input = getByTestId('default-checkbox')
      expect(input.classList.contains('input-checkbox-atom')).toBe(true)
      expect(input.value === 'Default-checkbox').toBe(true)
    });
  });