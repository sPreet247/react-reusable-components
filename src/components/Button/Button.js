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
        <code>&lt;Button variant=”outline”/&gt;</code>
      </HeadingText>
      <BtnDefault outline>Default</BtnDefault>
      <HeadingText outline2>
        <code>&:hover, &:focus</code>
      </HeadingText>
      <BtnDefault outline2>Default</BtnDefault>
      <HeadingText text>
        <code>&lt;Button variant=”text” /&gt;</code>
      </HeadingText>
      <BtnDefault text>Default</BtnDefault>
      <HeadingText text2>
        <code>&:hover, &:focus</code>
      </HeadingText>
      <BtnDefault text2>Default</BtnDefault>
      <HeadingText disabledShadow>
        <code>&lt;Button disableShadow /&gt;</code>
      </HeadingText>
      <BtnDefault disabledShadow>Default</BtnDefault>
      <HeadingText disabled>
        <code>&lt;Button disabled /&gt;</code>
      </HeadingText>
      <BtnDefault disabled>Disabled</BtnDefault>
      <HeadingText disabledText>
        <code>&lt;Button variant=”text” disabled /&gt;</code>
      </HeadingText>
      <BtnDefault disabledText>Disabled</BtnDefault>
      <HeadingText groceryStore>
        <code>&lt;Button startIcon=”local_grocery_store” /&gt;</code>
      </HeadingText>
      <BtnDefault groceryStore>
        <AddShoppingCartOutlinedIcon />
        Default
      </BtnDefault>
      <HeadingText groceryStoreRight>
        <code>&lt;Button endIcon=”local_grocery_store” /&gt;</code>
      </HeadingText>
      <BtnDefault groceryStoreRight>
        Default
        <AddShoppingCartOutlinedIcon />
      </BtnDefault>
      <HeadingText smDefault>
        <code>&lt;Button size=”sm” /&gt;</code>
      </HeadingText>
      <BtnDefault smDefault>Default</BtnDefault>
      <HeadingText mdDefault>
        <code>&lt;Button size=”md” /&gt;</code>
      </HeadingText>
      <BtnDefault mdDefault>Default</BtnDefault>
      <HeadingText lgDefault>
        <code>&lt;Button size=”lg” /&gt;</code>
      </HeadingText>
      <BtnDefault lgDefault>Default</BtnDefault>
      <HeadingText default1New>
        <code>&lt;Button color=”default” /&gt;</code>
      </HeadingText>
      <BtnDefault default1New>Default</BtnDefault>
      <HeadingText blueDefault>
        <code>&lt;Button color=”primary” /&gt;</code>
      </HeadingText>
      <BtnDefault blueDefault>Default</BtnDefault>
      <HeadingText secondaryDefault>
        <code>&lt;Button color=”secondary” /&gt;</code>
      </HeadingText>
      <BtnDefault secondaryDefault>Secondary</BtnDefault>
      <HeadingText dangerDefault>
        <code>&lt;Button color=”danger” /&gt;</code>
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
