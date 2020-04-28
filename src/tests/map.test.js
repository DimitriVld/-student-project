import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Default } from '../stories/map.stories';

describe('Renders map component', () => {

    test('with default', () => {
      const { container, getByTestId } = render(<Default />);
      expect(container).toBeTruthy();
      const map = getByTestId('default-map')
      expect(map.classList.contains('map-atom')).toBe(true)
    });
  });