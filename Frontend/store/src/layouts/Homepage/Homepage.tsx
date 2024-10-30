import { Carousel } from "./Components/Carousel";
import { ExploreTopProducts } from "./Components/ExploreTopProducts";
import { Heros } from "./Components/Heros";
import { Services } from "./Components/Services";

export const Homepage = () => {
  return (
    <>
      <ExploreTopProducts />
      <Carousel />
      <Heros />
      <Services />
    </>
  );
};
