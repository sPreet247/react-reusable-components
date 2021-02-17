import {
  BtnDefault,
  Heading,
  HeadingText,
} from './components/Button/ButtonElements';

function App() {
  return (
    <>
      <Heading>Buttons</Heading>
      <HeadingText>
        <code>&lt;Button/&gt;</code>
      </HeadingText>
      <BtnDefault default>Default</BtnDefault>
      <BtnDefault default2>Default</BtnDefault>
      <BtnDefault outline>Default</BtnDefault>
      <BtnDefault outline2>Default</BtnDefault>
      <BtnDefault type='text' text>
        Default
      </BtnDefault>
      <BtnDefault text2>Default</BtnDefault>
    </>
  );
}

export default App;
