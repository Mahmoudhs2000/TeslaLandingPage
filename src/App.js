import { useEffect, useState } from "react";
import "./App.css";
import Section from "./Components/Section";
import Header from "./Components/Header";
import styled from "styled-components";
import { cars } from "./carInfo";
function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(cars);
  }, []);
  return (
    <>
      <Header />
      <Container>
        {data.map((car) => (
          <Section
            ImageSrc={car.image}
            title={car.title}
            description={car.description}
            LeftBtnText="Custom Order"
            RightBtnText="Existing Inventory"
            key={car.title}
          />
        ))}
        <Section
          ImageSrc="solar-panel.jpg"
          title="Lowest Cost Solar Panels in America"
          description="Money-Back Guarantee"
          LeftBtnText="Order Now"
          RightBtnText="Learn More"
        />
        <Section
          ImageSrc="accessories.jpg"
          title="Best Accessories You Will Ever Have"
          description="Money-Back Guarantee"
          LeftBtnText="Order Now"
        />
      </Container>
    </>
  );
}

const Container = styled.div`
  height: 100vh;
`;

export default App;
