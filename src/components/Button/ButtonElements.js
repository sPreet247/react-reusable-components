import styled, { css } from 'styled-components';
import { colors } from './global.js';

export const Heading = styled.h1`
  position: absolute;
  width: 93px;
  height: 36px;
  left: 320px;
  top: 53px;

  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;

  /* identical to box height */

  /* Gray 2 */
  color: #4f4f4f;
`;

export const HeadingText = styled.code`
  position: absolute;
  left: 319px;
  top: 117px;
  width: 60px;
  height: 12px;
  font-family: Ubuntu Mono;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 12px;

  /* identical to box height */

  /* Gray 1 */
  color: #333333;
`;

export const BtnDefault = styled.button`
  position: absolute;
  width: 81px;
  height: 36px;
  padding: 0.5rem 1rem;
  border: none;
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  box-shadow: rgb(51 51 51 / 20%) 0px 2px 3px;
  border-radius: 6px;
  cursor: pointer;
  text-align: center;

  ${(props) =>
    props.default &&
    css`
      background: ${colors.default};
      left: 319px;
      top: 149px;
      &:hover {
        background: ${colors.hover.default};
      }
    `}
  ${(props) =>
    props.default2 &&
    css`
      background: rgb(174, 174, 174);
      left: 555px;
      top: 149px;
    `}

    ${(props) =>
    props.outline2 &&
    css`
      background: 'white';
      border: 1px solid #3d5afe;
      left: 555px;
      top: 246px;
      color: #3d5afe;
    `}
`;
