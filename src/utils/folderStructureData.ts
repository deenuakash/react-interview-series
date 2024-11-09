export type TFolderData = {
  name: string;
  isFolder: boolean;
  children?: TFolderData[];
};

const folderData: TFolderData = {
  name: "root",
  isFolder: true,
  children: [
    {
      name: "Folder 1",
      isFolder: true,
      children: [
        {
          name: "File 1",
          isFolder: false,
        },
      ],
    },
    {
      name: "File 2",
      isFolder: false,
    },
    {
      name: "Folder 3",
      isFolder: true,
      children: [
        {
          name: "Folder 4",
          isFolder: true,
          children: [
            {
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
