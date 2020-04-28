import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Default, WithoutClass } from '../stories/listItem.stories';

describe('Renders list items component', () => {

    test('with default', () => {
      const { container, getByTestId } = render(<Default />);
      expect(container).toBeTruthy();
      const item = getByTestId('default-item')
      expect(item.classList.contains('with-class')).toBe(true)
    });

    test('with a disabled', () => {
      const { container, getByTestId } = render(<WithoutClass />);
      expect(container).toBeTruthy();
      const item = getByTestId('without-class-item')
      expect(item.classList.contains('without-class')).toBe(true)
    });
  });