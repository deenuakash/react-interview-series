import { TFolderData } from "../../utils/folderStructureData";

const useHandleNode = () => {
  const insertNode = (
    tree: TFolderData,
    parentId: string,
    name: string,
    isFolder: boolean
  ): TFolderData => {
    if (tree.id === parentId && tree.isFolder) {
      const newNode: TFolderData = {
        id: crypto.randomUUID(),
        name,
        isFolder,
        children: [],
      };
      tree?.children?.unshift(newNode);
      return tree;
    } else {
      const children = tree.children?.map((item) => {
        if (item.isFolder) {
          return insertNode(item, parentId, name, isFolder);
        }
        return item;
      });
      return { ...tree, children };
    }
  };

  const deleteNode = (
    tree: TFolderData,
    itemId: string
  ): TFolderData | undefined => {
    if (tree.id === itemId) {
      return undefined;
    }
    const children = tree?.children
      ?.map((item) => {
        const updatedChildren = deleteNode(item, itemId);
        return updatedChildren ? updatedChildren : null;
      })
      .filter((item) => item !== null);
    return { ...tree, children };
  };

  const editNode = (
    tree: TFolderData,
    itemId: string,
    name: string
  ): TFolderData => {
    if (tree.id === itemId) {
      tree.name = name;
      return tree;
    }
    const children = tree.children?.map((item) => {
      return editNode(item, itemId, name);
    });
    return { ...tree, children };
  };

  return { insertNode, deleteNode, editNode };
};

export default useHandleNode;
