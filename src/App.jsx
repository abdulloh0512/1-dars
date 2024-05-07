import styled from "styled-components";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Right from "./components/Right";

function App() {
  const DIV1 = styled.div`
    display: flex;
    justify-content: center;
  `;
  return (
    <>
      <div>
        <Navbar />
        <DIV1>
          <div>
            <Hero />
          </div>
            <Right />
        </DIV1>
      </div>
    </>
  );
}

export default App;
