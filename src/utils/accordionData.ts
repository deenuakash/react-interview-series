export type TAccordionData = {
  id: number;
  title: string;
  link: string;
  description: string;
};

const accordionData: TAccordionData[] = [
  {
    id: 1,
    title: "Accordion",
    link: "/accordion",
    description: "This is an accordion component",
  },
  {
    id: 2,
    title: "Folder Structure",
    link: "/folderStructure",
    description: "This is an folder structure component",
  },
  {
    id: 3,
    title: "Infinite Scroll",
    link: "/infiniteScroll",
    description: "This is an infinite scroll component",
  },
];

export { accordionData };
