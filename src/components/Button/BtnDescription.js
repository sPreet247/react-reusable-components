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
  color: #333333;

  ${(props) =>
    props.default2Desc &&
    css`
      width: 96px;
      height: 12px;
      left: 555px;
      top: 117px;
      color: #828282;
    `}
`;
