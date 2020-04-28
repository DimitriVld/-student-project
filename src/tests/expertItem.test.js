import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Default, WhitoutClass } from '../stories/expertItem.stories';

describe('Renders Expert item component', () => {

    test('with default', () => {
      const { container, getByTestId } = render(<Default />);
      expect(container).toBeTruthy();
      const div = getByTestId('default-div')
      expect(div.classList.contains('class-default')).toBe(true)
      expect(div.innerHTML.indexOf('Title default') !== -1).toBe(true)
    });

    test('without class', () => {
      const { container, getByTestId } = render(<WhitoutClass />);
      expect(container).toBeTruthy();
      const div = getByTestId('without-class-div')
      expect(div.classList.contains('empty')).toBe(true)
      expect(div.innerHTML.indexOf('Title without class') !== -1).toBe(true)
    });
  });