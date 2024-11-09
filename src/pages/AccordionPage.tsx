import Accordion from "../components/Accordion";
import { accordionData, TAccordionData } from "../utils/accordionData";
import Page from "./page";

const AccordionPage = () => {
  return (
    <Page title="Accordion">
      <div className="mt-6 flex justify-center items-center flex-col space-y-3">
        {accordionData.map((item: TAccordionData) => {
          return <Accordion key={item.id} item={item} />;
        })}
      </div>
    </Page>
  );
};

export default AccordionPage;
