import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Default, ReadOnly } from '../stories/inputText.stories';

describe('Renders input text component', () => {

    test('with default', () => {
      const { container, getByTestId } = render(<Default />);
      expect(container).toBeTruthy();
      const input = getByTestId('default-input')
      expect(input.classList.contains('read-only-false')).toBe(true)
      expect(input.placeholder === 'Default input').toBe(true)
    });

    test('with readonly', () => {
        const { container, getByTestId } = render(<ReadOnly />);
        expect(container).toBeTruthy();
        const input = getByTestId('read-only-input')
        expect(input.classList.contains('read-only-true')).toBe(true)
        expect(input.placeholder === 'Read only input').toBe(true)
      });
  });