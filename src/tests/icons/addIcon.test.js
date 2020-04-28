import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Default, WithClass } from '../../stories/icons/addIcon.stories';

describe('Renders add icon component', () => {

    test('with default', () => {
      const { container, getByTestId } = render(<Default />);
      expect(container).toBeTruthy();
      const icon = getByTestId('default-icon')
      expect(icon.classList.contains('add-icon')).toBe(true)
    });

    test('with a class', () => {
      const { container, getByTestId } = render(<WithClass />);
      expect(container).toBeTruthy();
      const icon = getByTestId('with-class-icon')
      expect(icon.classList.contains('with-class-icon')).toBe(true)
    });
  });