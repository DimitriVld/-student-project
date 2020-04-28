import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Default, Disabled } from '../stories/button.stories';

describe('Renders Button component', () => {
    let spy;

    beforeEach(() => {
      spy = jest.fn();
    });

    test('with default', () => {
      const { container, getByTestId } = render(<Default onClick={spy} />);
      expect(container).toBeTruthy();
      const button = getByTestId('default-button')
      expect(button.classList.contains('button-atom')).toBe(true)
      expect(button.innerHTML.indexOf('Default button') !== -1).toBe(true)
      button.click();
      expect(spy).toHaveBeenCalled();
    });

    test('with a disabled', () => {
      const { container, getByTestId } = render(<Disabled onClick={spy} />);
      expect(container).toBeTruthy();
      const button = getByTestId('disabled-button')
      expect(button.classList.contains('disabled')).toBe(true)
      expect(button.innerHTML.indexOf('Disabled button') !== -1).toBe(true)
      button.click();
      expect(spy).toHaveBeenCalledTimes(0);
    });
  });