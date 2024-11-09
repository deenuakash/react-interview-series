export type TFolderData = {
  id: string;
  name: string;
  isFolder: boolean;
  children?: TFolderData[];
};

const folderData: TFolderData = {
  id: crypto.randomUUID(),
  name: "root",
  isFolder: true,
  children: [
    {
      id: crypto.randomUUID(),
      name: "Folder 1",
      isFolder: true,
      children: [
        {
          id: crypto.randomUUID(),
          name: "File 1",
          isFolder: false,
        },
      ],
    },
    {
      id: crypto.randomUUID(),
      name: "File 2",
      isFolder: false,
    },
    {
      id: crypto.randomUUID(),
      name: "Folder 3",
      isFolder: true,
      children: [
        {
          id: crypto.randomUUID(),
          name: "Folder 4",
          isFolder: true,
          children: [
            {
              id: crypto.randomUUID(),
              name: "File 3",
              isFolder: false,
            },
          ],
        },
      ],
    },
  ],
};

export { folderData };
