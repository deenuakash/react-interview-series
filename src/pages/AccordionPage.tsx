import Accordion from "../components/Accordion";
import { accordionData, TAccordionData } from "../utils/accordionData";

const AccordionPage = () => {
  return (
    <div>
      <h3 className="text-3xl text-center font-semibold">Accordion</h3>
      <div className="mt-6 flex justify-center items-center flex-col space-y-3">
        {accordionData.map((item: TAccordionData) => {
          return <Accordion key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default AccordionPage;
