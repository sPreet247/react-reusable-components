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
  /* padding: 0.5rem 1rem; */
  background: inherit;
  border: none;
  font-family: 'Noto Sans JP', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;

  border-radius: 6px;
  cursor: pointer;
  text-align: center;

  ${(props) =>
    props.default &&
    css`
      background: #e0e0e0;
      left: 319px;
      top: 149px;
      box-shadow: rgb(51 51 51 / 20%) 0px 2px 3px;
    `}
  ${(props) =>
    props.default2 &&
    css`
      background: rgb(174, 174, 174);
      left: 555px;
      top: 149px;
      box-shadow: rgb(51 51 51 / 20%) 0px 2px 3px;
      &:hover {
        background: ${colors.color.default};
      }
    `}

    ${(props) =>
    props.outline &&
    css`
      left: 319px;
      top: 246px;
      border: 1px solid #3d5afe;
      color: #3d5afe;
      box-shadow: rgb(51 51 51 / 20%) 0px 2px 3px;
    `}

    ${(props) =>
    props.outline2 &&
    css`
      background: rgba(41, 98, 255, 0.1);
      border: 1px solid #3d5afe;
      left: 555px;
      top: 246px;
      color: #3d5afe;
      box-shadow: rgb(51 51 51 / 20%) 0px 2px 3px;
    `}
    
    ${(props) =>
    props.text &&
    css`
      left: 319px;
      top: 357px;
      color: #3d5afe;
    `}
    ${(props) =>
    props.text2 &&
    css`
      left: 555px;
      top: 351px;
      color: #3d5afe;
      background: rgba(41, 98, 255, 0.1);
      box-shadow: rgb(51 51 51 / 20%) 0px 2px 3px;
    `}

    ${(props) =>
    props.disabledShadow &&
    css`
      left: 319px;
      top: 453px;
      background: #3d5afe;
      color: #fff;
      box-shadow: rgb(51 51 51 / 20%) 0px 2px 3px;
    `}

    ${(props) =>
    props.disabled &&
    css`
      left: 319px;
      top: 558px;
      background: #e0e0e0;
      box-shadow: rgb(51 51 51 / 20%) 0px 2px 3px;
    `}
    ${(props) =>
    props.disabledText &&
    css`
      left: 558px;
      top: 566px;
      color: #9e9e9e;
    `}
    ${(props) =>
    props.groceryStore &&
    css`
      width: 105px;
      height: 36px;
      left: 319px;
      top: 663px;
      color: #fff;
      background: #2962ff;
      box-shadow: 0px 2px 3px rgba(0, 49, 202, 0.2);
    `}
`;
