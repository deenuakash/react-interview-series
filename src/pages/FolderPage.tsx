import { useState } from "react";
import FolderStructure from "../components/FolderStructure";
import { folderData as data, TFolderData } from "../utils/folderStructureData";
import Page from "./page";
import useHandleNode from "../components/FolderStructure/useHandleNode";

export type THandleNodeChange = (
  action: "add" | "delete" | "update",
  id: string,
  name?: string,
  isFolder?: boolean
) => void;

const FolderPage = () => {
  const [folderData, setFolderData] = useState<TFolderData>(data);

  const { insertNode, deleteNode, editNode } = useHandleNode();

  const handleNodeChange: THandleNodeChange = (action, id, name, isFolder) => {
    let newData;
    switch (action) {
      case "add": {
        if (!name || isFolder === undefined) break;
        newData = insertNode(folderData, id, name, isFolder);
        break;
      }
      case "delete": {
        newData = deleteNode(folderData, id);
        break;
      }
      case "update": {
        if (!name) break;
        newData = editNode(folderData, id, name);
        break;
      }
      default: {
        newData = { ...folderData };
      }
    }
    if (newData) setFolderData(newData);
  };
  return (
    <Page title="Folder Structure">
      <div className="w-[50%] mx-auto">
        <FolderStructure
          data={folderData}
          handleNodeChange={handleNodeChange}
        />
      </div>
    </Page>
  );
};

export default FolderPage;
