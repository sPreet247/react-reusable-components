import {
  BtnDefault,
  Heading,
  HeadingText,
  HoverText,
} from './components/Button/ButtonElements';

function App() {
  return (
    <>
      <Heading>Buttons</Heading>
      <HeadingText>
        <code>&lt;Button/&gt;</code>
      </HeadingText>
      <BtnDefault>Default</BtnDefault>
      <HoverText>
        <code>&:hover,&:focus</code>
      </HoverText>
    </>
  );
}

export default App;
