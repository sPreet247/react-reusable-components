import AddShoppingCartOutlinedIcon from '@material-ui/icons/AddShoppingCartOutlined';
import React from 'react';
import { HeadingText } from './BtnDescription';
import { BtnDefault, CreatorName, Heading, IconLink } from './ButtonElements';
function Button() {
  return (
    <>
      <Heading>Buttons</Heading>
      <HeadingText>
        <code>&lt;Button/&gt;</code>
      </HeadingText>
      <BtnDefault default>Default</BtnDefault>
      <HeadingText default2Desc>
        <code>&:hover, &:focus</code>
      </HeadingText>
      <BtnDefault default2>Default</BtnDefault>
      <HeadingText outline>
        <code>&:hover, &:focus</code>
      </HeadingText>
      <BtnDefault outline>Default</BtnDefault>
      <HeadingText outline2>
        <code>&:hover, &:focus</code>
      </HeadingText>
      <BtnDefault outline2>Default</BtnDefault>
      <HeadingText text>
        <code>&:hover, &:focus</code>
      </HeadingText>
      <BtnDefault text>Default</BtnDefault>
      <HeadingText text2>
        <code>&:hover, &:focus</code>
      </HeadingText>
      <BtnDefault text2>Default</BtnDefault>
      <HeadingText disabledShadow>
        <code>&:hover, &:focus</code>
      </HeadingText>
      <BtnDefault disabledShadow>Default</BtnDefault>
      <HeadingText disabled>
        <code>&:hover, &:focus</code>
      </HeadingText>
      <BtnDefault disabled>Disabled</BtnDefault>
      <HeadingText disabledText>
        <code>&:hover, &:focus</code>
      </HeadingText>
      <BtnDefault disabledText>Disabled</BtnDefault>
      <HeadingText groceryStore>
        <code>&:hover, &:focus</code>
      </HeadingText>
      <BtnDefault groceryStore>
        <AddShoppingCartOutlinedIcon />
        Default
      </BtnDefault>
      <HeadingText groceryStoreRight>
        <code>&:hover, &:focus</code>
      </HeadingText>
      <BtnDefault groceryStoreRight>
        <AddShoppingCartOutlinedIcon />
        Default
      </BtnDefault>
      <HeadingText smDefault>
        <code>&:hover, &:focus</code>
      </HeadingText>
      <BtnDefault smDefault>Default</BtnDefault>
      <HeadingText mdDefault>
        <code>&:hover, &:focus</code>
      </HeadingText>
      <BtnDefault mdDefault>Default</BtnDefault>
      <HeadingText lgDefault>
        <code>&:hover, &:focus</code>
      </HeadingText>
      <BtnDefault lgDefault>Default</BtnDefault>
      <HeadingText default1New>
        <code>&:hover, &:focus</code>
      </HeadingText>
      <BtnDefault default1New>Default</BtnDefault>
      <HeadingText blueDefault>
        <code>&:hover, &:focus</code>
      </HeadingText>
      <BtnDefault blueDefault>Default</BtnDefault>
      <HeadingText secondaryDefault>
        <code>&:hover, &:focus</code>
      </HeadingText>
      <BtnDefault secondaryDefault>Secondary</BtnDefault>
      <HeadingText dangerDefault>
        <code>&:hover, &:focus</code>
      </HeadingText>
      <BtnDefault dangerDefault>Danger</BtnDefault>
      <HeadingText default2New>
        <code>&:hover, &:focus</code>
      </HeadingText>
      <BtnDefault default2New>Default</BtnDefault>

      <BtnDefault darkBlueDefault>Default</BtnDefault>

      <BtnDefault secondaryDarkDefault>Secondary</BtnDefault>

      <BtnDefault dangerDarkDefault>Danger</BtnDefault>
      <IconLink>
        Icons: https://material.io/resources/icons/?style=round
      </IconLink>
      <CreatorName>created by Sukhpreet Singh - devChallenges.io</CreatorName>
    </>
  );
}

export default Button;
