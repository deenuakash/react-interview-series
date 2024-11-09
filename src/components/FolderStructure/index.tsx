import { useState } from "react";
import { TFolderData } from "../../utils/folderStructureData";

const FolderStructure = ({ data }: { data: TFolderData | undefined }) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  return (
    <div>
      <div>
        {data?.isFolder ? (
          <span onClick={() => setExpanded(!expanded)}>
            {expanded ? "- " : "+ "}
          </span>
        ) : (
          <span onClick={() => setExpanded(!expanded)}>&nbsp;&nbsp;&nbsp;</span>
        )}
        {data?.name}
      </div>
      {data?.children?.map((item) => {
        return (
          <>
            {expanded && (
              <div className="ml-4">
                <FolderStructure data={item} />
              </div>
            )}
          </>
        );
      })}
    </div>
  );
};

export default FolderStructure;
