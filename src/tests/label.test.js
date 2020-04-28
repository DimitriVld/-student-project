import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Default } from '../stories/label.stories';

describe('Renders label component', () => {

    test('with default', () => {
      const { container, getByTestId } = render(<Default />);
      expect(container).toBeTruthy();
      const label = getByTestId('default-label')
      expect(label.classList.contains('label-atom')).toBe(true)
      expect(label.innerHTML.indexOf('Default label') !== -1).toBe(true)
    });
  });