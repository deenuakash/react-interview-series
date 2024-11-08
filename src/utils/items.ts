export type TItem = {
  id: number;
  title: string;
  link: string;
  description: string;
};

const items: TItem[] = [
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
];

export { items };
