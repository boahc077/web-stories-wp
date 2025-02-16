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
import styled from 'styled-components';
import { Text } from '@googleforcreators/design-system';

/**
 * Internal dependencies
 */
import useMediaRecording from './useMediaRecording';

const Number = styled(Text).attrs({ as: 'div' })`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 70px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.standard.white};
`;

function Countdown() {
  const { countdown } = useMediaRecording(({ state }) => ({
    countdown: state.countdown,
  }));

  if (countdown > 0) {
    return <Number>{countdown}</Number>;
  }

  return null;
}

export default Countdown;
