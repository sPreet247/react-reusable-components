import styled, { css } from 'styled-components';

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
  color: #000000;

  ${(props) =>
    props.default2Desc &&
    css`
      width: 96px;
      height: 12px;
      left: 555px;
      top: 117px;
      color: #828282;
    `}
  ${(props) =>
    props.outline &&
    css`
      width: 168px;
      height: 12px;
      left: 319px;
      top: 222px;
    `}
  ${(props) =>
    props.outline2 &&
    css`
      width: 96px;
      height: 12px;
      left: 555px;
      top: 222px;
      color: #828282;
    `}
  ${(props) =>
    props.text &&
    css`
      width: 150px;
      height: 12px;
      left: 319px;
      top: 329px;
    `}
  ${(props) =>
    props.text2 &&
    css`
      width: 96px;
      height: 12px;
      left: 555px;
      top: 327px;
      color: #828282;
    `}
  ${(props) =>
    props.disabledShadow &&
    css`
      width: 144px;
      height: 12px;
      left: 319px;
      top: 432px;
    `}
  ${(props) =>
    props.disabled &&
    css`
      width: 114px;
      height: 12px;
      left: 319px;
      top: 534px;
    `}
  ${(props) =>
    props.disabledText &&
    css`
      width: 204px;
      height: 12px;
      left: 558px;
      top: 534px;
    `}
  ${(props) =>
    props.groceryStore &&
    css`
      width: 252px;
      height: 12px;
      left: 319px;
      top: 639px;
    `}
  ${(props) =>
    props.groceryStoreRight &&
    css`
      width: 240px;
      height: 12px;
      left: 651px;
      top: 639px;
    `}
  ${(props) =>
    props.smDefault &&
    css`
      width: 120px;
      height: 12px;
      left: 319px;
      top: 744px;
    `}
  ${(props) =>
    props.mdDefault &&
    css`
      width: 120px;
      height: 12px;
      left: 523px;
      top: 744px;
    `}
  ${(props) =>
    props.lgDefault &&
    css`
      width: 120px;
      height: 12px;
      left: 731px;
      top: 744px;
    `}
  ${(props) =>
    props.default1New &&
    css`
      width: 156px;
      height: 12px;
      left: 322px;
      top: 855px;
    `}
  ${(props) =>
    props.blueDefault &&
    css`
      width: 156px;
      height: 12px;
      left: 523px;
      top: 855px;
    `}
  ${(props) =>
    props.secondaryDefault &&
    css`
      width: 168px;
      height: 12px;
      left: 731px;
      top: 855px;
    `}
  ${(props) =>
    props.dangerDefault &&
    css`
      width: 150px;
      height: 12px;
      left: 971px;
      top: 855px;
    `}
  ${(props) =>
    props.default2New &&
    css`
      width: 96px;
      height: 12px;
      left: 319px;
      top: 960px;
      color: #828282;
    `}
`;
