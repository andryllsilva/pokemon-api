import { Header } from "./components/header/header";
import { createGlobalStyle } from "styled-components";

function App() {
  return (
    <>
      <GlobalStyle/>
      <Header/>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
*{
  padding: 0;
  list-style: none;
  margin: 0;
}`

export default App;
