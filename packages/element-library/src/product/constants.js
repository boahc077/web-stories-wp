/*
 * Copyright 2022 Google LLC
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
import { createSolidFromString } from '@googleforcreators/patterns';
import { PanelTypes } from '@googleforcreators/design-system';

/**
 * Internal dependencies
 */
import { SHARED_DEFAULT_ATTRIBUTES } from '../shared/constants';

const defaultBackgroundColor = createSolidFromString('#c4c4c4');

export const defaultAttributes = {
  ...SHARED_DEFAULT_ATTRIBUTES,
  backgroundColor: defaultBackgroundColor,
  lockDimensions: true,
  supportsRotation: false,
};

export const hasEditMode = false;

export const hasDesignMenu = true;

export const hasDuplicateMenu = false;

export const isMedia = false;

export const canFlip = true;

export const isMaskable = false;

export const resizeRules = {
  vertical: true,
  horizontal: true,
  diagonal: true,
  minWidth: 20,
  minHeight: 20,
};

export const panels = [PanelTypes.PRODUCT];
