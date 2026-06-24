import { useState } from "react";
import type { SelectedItem } from "../../types/selected";
import type { Row } from "../../types/row";

type EditorPanelProps = {
    selectedItem: SelectedItem;
    setSelectedItem: React.Dispatch<React.SetStateAction<SelectedItem>>;
    rowList: Row[];
    setRowList: React.Dispatch<React.SetStateAction<Row[]>>;
};

type SettingsTab = "site" | "page";

type ColumnCount = 1 | 2 | 3;
    
function EditorPanel({
    selectedItem,
    setSelectedItem,
    rowList,
    setRowList
}: EditorPanelProps) {
    const [settingsTab, setSettingsTab] = useState<SettingsTab>("page");
    const [showTabProps, setShowTabProps] = useState(false);
    const [showCreateRowForm, setShowCreateRowForm] = useState(false);
    const [rowColumnCount, setRowColumnCount] = useState<ColumnCount>(1);

    const [rowData, setRowData] = useState({
        name: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setRowData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleCreateRow = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (rowData.name.trim() === "") {
            console.log("Row name required");
            return;
        }

        setRowList(prev => [
            ...prev,
            {
            id: prev.length,
                name: rowData.name,
                columns: Array.from({ length: rowColumnCount }, (_, i) => ({
                    id: i,
                    component: null
                }))
            }
        ]);

        setRowData({ name: "" });
        setShowCreateRowForm(false);
    };

    return (
        <div style={{height: "calc(100vh - 60px)"}}>
            <button
                className="w-100 p-1 pb-2 btn btn-primary rounded-0"
                onClick={() => setSelectedItem({type:"page"})}
            >
                Page Settings
            </button>

            {/* ================= PAGE / SITE ================= */}
            {selectedItem?.type === "page" && (
                <div className="p-3">
                    <button onClick={() => setSettingsTab("page")} 
                        disabled={settingsTab === "page"}>
                        Page Settings
                    </button>

                    <button onClick={() => setSettingsTab("site")}
                        disabled={settingsTab === "site"}>
                        Site Settings
                    </button>

                    {settingsTab === "page" && (
                        <>
                            <h4>Page Settings</h4>

                            <button
                                onClick={() => setShowTabProps(prev => !prev)}
                            >
                                {showTabProps
                                    ? "Close Page Properties"
                                    : "Edit Page Properties"}
                                </button>
                            
                            {showTabProps && (
                                <>
                                    <input type="text" placeholder="Page Title" />
                                    <input type="text" placeholder="Meta tag Description" />
                                    <input type="text" placeholder="Meta tag keywords" />
                                    <input type="text" placeholder="Slug" />
                                    <input type="text" placeholder="SEO" />
                                </>
                            )}

                            <h5>Rows</h5>

                            <ul>
                                {rowList.map(row => (
                                    <li 
                                        key={row.id}
                                        onClick={() => setSelectedItem({ type: "row", rowId: row.id })}
                                    >
                                        {row.name}
                                    </li>
                                ))}
                            </ul>

                            <button onClick={() => setShowCreateRowForm(true)}>
                                Add Row
                            </button>

                            {showCreateRowForm && (
                                <form onSubmit={handleCreateRow}>
                                    <input
                                        name="name"
                                        value={rowData.name}
                                        onChange={handleChange}
                                        placeholder="Row Name"
                                    />

                                    <label>Columns</label>

                                    <input
                                        type="radio"
                                        checked={rowColumnCount === 1}
                                        onChange={() => setRowColumnCount(1)}
                                    /> 1

                                    <input
                                        type="radio"
                                        checked={rowColumnCount === 2}
                                        onChange={() => setRowColumnCount(2)}
                                    /> 2

                                    <input
                                        type="radio"
                                        checked={rowColumnCount === 3}
                                        onChange={() => setRowColumnCount(3)}
                                    /> 3

                                    <button type="submit">Create</button>
                                    <button type="button" onClick={() => setShowCreateRowForm(false)}>Cancel</button>
                                </form>
                            )}
                        </>
                    )}

                    {settingsTab === "site" && (
                        <>
                            <h4>Site Settings</h4>
                            <h5>Page List</h5>
                            <ul>
                                <li>Page 1</li>
                                <li>Page 2</li>
                                <li>Page 3</li>
                            </ul>
                        </>
                    )}
                </div>
            )}

            {/* ================= ROW ================= */}
            {selectedItem?.type === "row" && (
                <div className="p-3">
                    <h4>Row Properties</h4>
                    <p>Row ID: {selectedItem.rowId}</p>
                </div>
            )}

            {/* ================= COLUMN ================= */}
            {selectedItem?.type === "column" && (
                <div className="p-3">
                    <h4>Column Properties</h4>
                    <p>Row ID: {selectedItem.rowId}</p>
                    <p>Column ID: {selectedItem.columnId}</p>
                </div>
            )}

            {/* ================= COMPONENT ================= */}
            {selectedItem?.type === "component" && (
                <div className="p-3">
                    <h4>Component Properties</h4>
                    <p>Row ID: {selectedItem.rowId}</p>
                    <p>Column ID: {selectedItem.columnId}</p>
                    <p>Component ID: {selectedItem.componentId}</p>
                </div>
            )}
        </div>
    );
}

export default EditorPanel;