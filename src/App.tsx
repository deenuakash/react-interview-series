import { Outlet } from "react-router-dom";
import Accordion from "./components/Accordion";
import { accordionData, TAccordionData } from "./utils/accordionData";

function App() {
  return (
    <div className="container mx-auto my-0">
      <h1 className="font-bold text-5xl text-center">React Interview Series</h1>
      {/* using accordion component */}
      <div className="mt-6 flex justify-center items-center flex-col space-y-3">
        {accordionData.map((item: TAccordionData) => {
          return <Accordion key={item.id} item={item} />;
        })}
      </div>
      <Outlet />
    </div>
  );
}

export default App;
