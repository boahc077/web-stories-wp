/*
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * External dependencies
 */
import { fireEvent, screen } from '@testing-library/react';

/**
 * Internal dependencies
 */
import MediaOptimizationSettings from '..';
import { renderWithProviders } from '../../../../testUtils';

describe('Editor Settings: <MediaOptimizationSettings />', () => {
  it('should render the media optimization as checked when selected is true.', () => {
    renderWithProviders(
      <MediaOptimizationSettings
        disabled={false}
        onCheckboxSelected={jest.fn()}
        selected
      />
    );

    expect(screen.getByRole('checkbox')).toBeChecked();
  });

  it('should render the media optimization as not checked when selected is false.', () => {
    renderWithProviders(
      <MediaOptimizationSettings
        disabled={false}
        onCheckboxSelected={jest.fn()}
        selected={false}
      />
    );

    expect(screen.getByRole('checkbox')).not.toBeChecked();
  });

  it('should call the change function when the checkbox is clicked.', () => {
    const changeFn = jest.fn();
    renderWithProviders(
      <MediaOptimizationSettings
        disabled={false}
        onCheckboxSelected={changeFn}
        selected={false}
      />
    );

    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);

    expect(changeFn).toHaveBeenCalledTimes(1);
  });
});
