/*
 * Copyright 2020 Google LLC
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
import { produce } from 'immer';

/**
 * Remove the given id from the current selection.
 *
 * If no id is given or id is not in the current selection, nothing happens.
 *
 * @param {Object} draft Current state
 * @param {Object} payload Action payload
 * @param {string} payload.elementId Element id to remove from the current selection.
 */
export const unselectElement = (draft, { elementId }) => {
  const index = draft.selection.indexOf(elementId);
  if (index === -1) {
    return;
  }
  draft.selection.splice(index, 1);
};

export default produce(unselectElement);
