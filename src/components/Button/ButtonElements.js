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
      &:hover,
      &:focus {
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
      &:hover,
      &:focus {
        background: #fff;
      }
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

      &:hover,
      &:focus {
        background: #fff;
      }
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
    ${(props) =>
    props.groceryStoreRight &&
    css`
      width: 105px;
      height: 36px;
      left: 651px;
      top: 663px;
      color: #fff;

      background: #2962ff;
      box-shadow: 0px 2px 3px rgba(0, 49, 202, 0.2);
    `}
    ${(props) =>
    props.smDefault &&
    css`
      width: 73px;
      height: 32px;
      left: 319px;
      top: 773px;
      color: #fff;

      background: #2962ff;
      box-shadow: 0px 2px 3px rgba(0, 49, 202, 0.2);
    `}
    ${(props) =>
    props.mdDefault &&
    css`
      width: 81px;
      height: 36px;
      left: 523px;
      top: 771px;
      color: #fff;

      background: #2962ff;
      box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.2);
    `}
    ${(props) =>
    props.lgDefault &&
    css`
      width: 93px;
      height: 42px;
      left: 731px;
      top: 768px;
      color: #fff;

      background: #2962ff;
      box-shadow: 0px 2px 3px rgba(0, 49, 202, 0.2);
    `}
    ${(props) =>
    props.default1New &&
    css`
      width: 81px;
      height: 36px;
      left: 319px;
      top: 879px;

      background: #e0e0e0;
      box-shadow: 0px 2px 3px rgba(51, 51, 51, 0.2);
    `}
    ${(props) =>
    props.blueDefault &&
    css`
      width: 81px;
      height: 36px;
      left: 523px;
      top: 879px;
      color: #fff;
      background: #2962ff;
      box-shadow: 0px 2px 3px rgba(41, 98, 255, 0.2);
    `}
    ${(props) =>
    props.secondaryDefault &&
    css`
      width: 104px;
      height: 36px;
      left: 731px;
      top: 879px;
      color: #fff;
      background: #455a64;
      box-shadow: 0px 2px 3px rgba(69, 90, 100, 0.2);
    `}
    ${(props) =>
    props.dangerDefault &&
    css`
      height: 36px;
      left: 971px;
      top: 879px;
      color: #fff;
      background: #d32f2f;
      box-shadow: 0px 2px 3px rgba(211, 47, 47, 0.2);
    `}
    ${(props) =>
    props.default2New &&
    css`
      width: 81px;
      height: 36px;
      left: 319px;
      top: 984px;

      background: #aeaeae;
      box-shadow: 0px 2px 3px rgba(51, 51, 51, 0.2);
      &:hover,
      &:focus {
        background: ${colors.color.default};
      }
    `}
    ${(props) =>
    props.darkBlueDefault &&
    css`
      width: 81px;
      height: 36px;
      left: 523px;
      top: 984px;

      background: #0039cb;
      box-shadow: 0px 2px 3px rgba(41, 98, 255, 0.2);
      color: #fff;
    `}
    ${(props) =>
    props.secondaryDarkDefault &&
    css`
      width: 104px;
      height: 36px;
      left: 731px;
      top: 984px;

      background: #1c313a;
      box-shadow: 0px 2px 3px rgba(69, 90, 100, 0.2);
      color: #fff;
    `}
    ${(props) =>
    props.dangerDarkDefault &&
    css`
      width: 81px;
      height: 36px;
      left: 971px;
      top: 984px;

      background: #9a0007;
      box-shadow: 0px 2px 3px rgba(211, 47, 47, 0.2);
      color: #fff;
    `}
`;

export const IconLink = styled.h4`
  position: absolute;
  width: 330px;
  height: 12px;
  left: 320px;
  top: 1072px;

  font-family: Ubuntu Mono;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 12px;

  /* identical to box height */

  /* Gray 3 */
  color: #828282;
`;

export const CreatorName = styled.h4`
  position: absolute;
  width: 287px;
  height: 17px;
  left: 322px;
  top: 1118px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;

  /* identical to box height */
  text-align: center;

  color: #a9a9a9;
`;
