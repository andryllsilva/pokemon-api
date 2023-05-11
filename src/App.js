import { createGlobalStyle } from "styled-components";
import './services' 
import { AppRoutes } from "./pages/routes";

function App() {
  return (
    <>
      <GlobalStyle/>
      <AppRoutes />
    </>
  );
}

const GlobalStyle = createGlobalStyle`
*{
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  padding: 0;
  list-style: none;
  margin: 0;
  text-decoration:none;
}

`

export default App;
