import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Default } from '../stories/titlePage.stories';

describe('Renders title page component', () => {

    test('with default', () => {
      const { container, getByTestId } = render(<Default />);
      expect(container).toBeTruthy();
      const title = getByTestId('default-title')
      expect(title.classList.contains('title-page-atom')).toBe(true)
    });
  });