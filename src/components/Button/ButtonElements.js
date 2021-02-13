import styled from 'styled-components';

export const ButtonDefault = styled.button`
  position: absolute;
  width: 81px;
  height: 36px;
  left: 319px;
  top: 141px;

  background-color: #e0e0e0;
  box-shadow: 0px 2px 3px rgba(51, 51, 51, 0.2);
  border-radius: 6px;
`;

export const NewButtonDefault = styled(ButtonDefault)`
  left: 555px;
  background-color: #aeaeae;
`;

export const OutlineButton = styled.button`
  position: absolute;
  width: 88px;
  height: 36px;
  left: 319px;
  top: 246px;

  border: 1px solid #3d5afe;
  border-radius: 6px;
`;

export const NewOutlineButton = styled(OutlineButton)`
  left: 555px;
  background-color: rgba(41, 98, 255, 0.1);
`;

export const TextButton = styled.p`
  position: absolute;
  width: 49px;
  height: 20px;
  left: 319px;
  top: 357px;
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: 500;
  font-style: normal;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #3d5afe;
`;

export const NewTextButton = styled.button`
  position: absolute;
  width: 88px;
  height: 36px;
  left: 555px;
  top: 351px;

  background-color: rgba(41, 98, 255, 0.1);
  border-radius: 6px;
`;

export const InnerText = styled(NewTextButton)`
  position: absolute;
  width: 49px;
  height: 20px;
  left: 574px;
  top: 359px;
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: 500;
  font-style: normal;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #3d5afe;
`;
