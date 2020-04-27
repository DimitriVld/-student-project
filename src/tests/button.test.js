import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

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
      expect(button).toHaveStyleRule('font-size', '24px');
      button.click();
      expect(spy).toHaveBeenCalled();
    });

    test('with a disabled', () => {
      const { container, getByTestId } = render(<Disabled onClick={spy} />);
      expect(container).toBeTruthy();
      const button = getByTestId('disabled-button')
      button.click();
      expect(spy).toHaveBeenCalledTimes(0);
    });
  });