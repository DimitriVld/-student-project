import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Default } from '../stories/navigation.stories';

describe('Renders navigation component', () => {

    test('with default', () => {
      const { container, getByTestId } = render(<Default />);
      expect(container).toBeTruthy();
      const navigation = getByTestId('default-navigation')
      expect(navigation.classList.contains('navigation-atom')).toBe(true)
    });
  });