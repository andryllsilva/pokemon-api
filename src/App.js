import { Header } from "./components/header/header";
import { PokeCards } from "./components/poke-cards/poke-cards";
import { createGlobalStyle } from "styled-components";
import './services/index' 

function App() {
  return (
    <>
      <GlobalStyle/>
      <Header/>
      <PokeCards/>
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
