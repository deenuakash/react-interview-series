import { useState } from "react";
import FolderStructure from "../components/FolderStructure";
import { folderData as data } from "../utils/folderStructureData";
import Page from "./page";

const FolderPage = () => {
  const [folderData] = useState(data);
  return (
    <Page title="Folder Structure">
      <FolderStructure data={folderData} />
    </Page>
  );
};

export default FolderPage;
