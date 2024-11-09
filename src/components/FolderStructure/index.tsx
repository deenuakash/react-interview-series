import { useState } from "react";
import { TFolderData } from "../../utils/folderStructureData";
import { THandleNodeChange } from "../../pages/FolderPage";

const FolderStructure = ({
  data,
  handleNodeChange,
}: {
  data: TFolderData | undefined;
  handleNodeChange: THandleNodeChange;
}) => {
  type TNewItem = {
    isFolder: null | boolean;
    show: boolean;
  };
  const [expanded, setExpanded] = useState<boolean>(false);
  const [newItem, setNewItem] = useState<TNewItem>({
    isFolder: null,
    show: false,
  });

  const handleNewItemClick = (isFolder: boolean) => {
    setExpanded(true);
    setNewItem({ ...newItem, isFolder, show: true });
  };

  const handleAddItem = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") return;
    if (newItem.isFolder === null) return;
    const target = e.target as HTMLInputElement;
    handleNodeChange("add", data!.id, target.value, newItem.isFolder);
    setNewItem({ ...newItem, show: false });
  };

  const handleChangeItem = () => {};
  return (
    <div>
      <div
        className={`border px-3 py-2 rounded-xl mb-2 flex items-center ${
          data?.isFolder && "cursor-pointer"
        }`}
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex-auto">
          {data?.isFolder ? (
            <span>{expanded ? "📂 " : "📁 "}</span>
          ) : (
            <span>📄 </span>
          )}
          {data?.name}
        </div>
        <div className="space-x-2" onClick={(e) => e.stopPropagation()}>
          {data?.isFolder && (
            <div className="inline space-x-2">
              <button
                className="border py-1 px-2 rounded-lg"
                onClick={() => handleNewItemClick(true)}
              >
                ➕ Folder
              </button>
              <button
                className="border py-1 px-2 rounded-lg"
                onClick={() => handleNewItemClick(false)}
              >
                ➕ File
              </button>
            </div>
          )}
          <button
            className="text-red-500"
            onClick={() => handleNodeChange("delete", data!.id)}
          >
            🗑️
          </button>
          <button className="text-red-500" onClick={() => handleChangeItem()}>
            ✏️
          </button>
        </div>
      </div>
      {newItem.show && (
        <div className="flex gap-2 ml-4">
          {newItem.isFolder ? "📁" : "📄"}
          <input
            type="text"
            className="w-full px-2 py-1 rounded-lg border mb-2"
            placeholder="Type here..."
            autoFocus
            onBlur={() => setNewItem({ ...newItem, show: false })}
            onKeyDown={(e) => handleAddItem(e)}
          />
        </div>
      )}
      {data?.children?.map((item) => {
        return (
          <div key={item.name}>
            {expanded && (
              <div className="ml-4">
                <FolderStructure
                  data={item}
                  handleNodeChange={handleNodeChange}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default FolderStructure;
