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
      <BtnDefault>Default</BtnDefault>
      <BtnDefault>Default</BtnDefault>
      <BtnDefault>Default</BtnDefault>
    </>
  );
}

export default App;
