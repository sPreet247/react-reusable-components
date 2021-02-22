import AddShoppingCartOutlinedIcon from '@material-ui/icons/AddShoppingCartOutlined';
import { HeadingText } from './components/Button/BtnDescription';
import {
  BtnDefault,
  CreatorName,
  Heading,
  IconLink,
} from './components/Button/ButtonElements';

function App() {
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
      <BtnDefault outline>Default</BtnDefault>
      <BtnDefault outline2>Default</BtnDefault>
      <BtnDefault type='text' text>
        Default
      </BtnDefault>
      <BtnDefault text2>Default</BtnDefault>
      <BtnDefault disabledShadow>Default</BtnDefault>
      <BtnDefault disabled>Disabled</BtnDefault>
      <BtnDefault disabledText>Disabled</BtnDefault>
      <BtnDefault groceryStore>
        <AddShoppingCartOutlinedIcon />
        Default
      </BtnDefault>
      <BtnDefault groceryStoreRight>
        <AddShoppingCartOutlinedIcon />
        Default
      </BtnDefault>
      <BtnDefault smDefault>Default</BtnDefault>
      <BtnDefault mdDefault>Default</BtnDefault>
      <BtnDefault lgDefault>Default</BtnDefault>
      <BtnDefault default1New>Default</BtnDefault>
      <BtnDefault blueDefault>Default</BtnDefault>
      <BtnDefault secondaryDefault>Secondary</BtnDefault>
      <BtnDefault dangerDefault>Danger</BtnDefault>
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

export default App;
