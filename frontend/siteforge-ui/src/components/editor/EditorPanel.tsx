import { useState } from "react";
import type { SelectedItem } from "../../types/editor";
import type { Row } from "../../types/row";

type EditorPanelProps = {
    selectedItem: SelectedItem;
    setSelectedItem: React.Dispatch<React.SetStateAction<SelectedItem>>;
    rowList: Row[];
    setRowList: React.Dispatch<React.SetStateAction<Row[]>>;
}

type SettingsTab =
    | "site"
    | "page";

type ColumnCount =
    | 1
    | 2
    | 3;

    
function EditorPanel({ selectedItem, setSelectedItem, rowList, setRowList }: EditorPanelProps) {
    const [settingsTab, setSettingsTab] = useState<SettingsTab>("page");
    const [showTabProps, setShowTabProps] = useState(false);
    const [showCreateRowForm, setShowCreateRowForm] = useState(false)
    const [rowColumnCount, setRowColumnCount] = useState<ColumnCount>(1);

    const [rowData, setRowData] = useState({
        name: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setRowData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleCreateRow = (e: React.SubmitEvent<HTMLFormElement>) => {
        const isValidName = rowData.name.trim() !== "";
        e.preventDefault();

        if (!isValidName) {
            console.log("Row name is required and cannot be blank.");
        }
        else
        {
            console.log(`Row Created: ${rowData.name}`);
            setRowList(prevRows => [
                ...prevRows,
                {
                    id: prevRows.length, // TODO: Replace with actual ID from backend
                    name: rowData.name,
                    columns: Array.from({ length: rowColumnCount }, (_, i) => ({
                        id: i
                    }))
                }
            ])
            setShowCreateRowForm(false);
        }
        setRowData({ name: "" });
    };

    return (
        <div>
            <button className="w-100 p-1 pb-2 btn btn-primary rounded-0" onClick={() => setSelectedItem(null)}>Page Settings</button>

            {/* ------------------- Settings Content -------------------- */}
            {selectedItem === null && (
                <div className="p-3">
                    <button onClick={() => setSettingsTab("page")} disabled={settingsTab === "page"}>Page Settings</button>
                    <button onClick={() => setSettingsTab("site")} disabled={settingsTab === "site"}>Site Settings</button>
                    {settingsTab === "page" && (
                        <>
                            <h4>Page Settings</h4>
                            {showTabProps ? (
                                <button onClick={() => setShowTabProps(false)}>
                                    Close {settingsTab.charAt(0).toUpperCase() + settingsTab.slice(1)} Properties
                                </button>
                            ) : (
                                <button onClick={() => setShowTabProps(true)}>
                                    Edit {settingsTab.charAt(0).toUpperCase() + settingsTab.slice(1)} Properties
                                </button>
                            ) }
                            
                            {showTabProps && (
                                <>
                                    <label>Page Title:</label>
                                    <input type="text" placeholder="Page Title" />
                                    <label>Meta tag Description:</label>
                                    <input type="text" placeholder="Meta tag Description" />
                                    <label>Meta tag keywords:</label>
                                    <input type="text" placeholder="Meta tag keywords" />
                                    <label>Slug:</label>
                                    <input type="text" placeholder="Slug" />
                                    <label>SEO:</label>
                                    <input type="text" placeholder="SEO" />
                                </>
                            )}
                            <h5>Row List</h5>
                            <ul>
                                {rowList.map((row) => (
                                    <li key={row.id} onClick={() => setSelectedItem("row")}>{row.name}</li>
                                ))}
                            </ul>
                            <button type="button" onClick={() => setShowCreateRowForm(true)}>Add Row</button>
                            {showCreateRowForm ? 
                                <div>
                                    <form onSubmit={handleCreateRow}>
                                        <label>Row Name:</label>
                                        <input
                                            type="text"
                                            placeholder="Row Name"
                                            name="name"
                                            value={rowData.name}
                                            onChange={handleChange}/>
                                        <label>Columns:</label>
                                        <div>
                                            <input
                                                type="radio"
                                                name="selectColumnCount"
                                                value="1"
                                                defaultChecked
                                                onChange={() => setRowColumnCount(1)}/>
                                                <label>1</label>
                                        </div>
                                        <div>
                                            <input
                                                type="radio"
                                                name="selectColumnCount"
                                                value="2"
                                                onChange={() => setRowColumnCount(2)}/>
                                                <label>2</label>
                                        </div>
                                        <div>
                                            <input
                                                type="radio"
                                                name="selectColumnCount"
                                                value="3"
                                                onChange={() => setRowColumnCount(3)}/>
                                                <label>3</label>
                                        </div>
                                        <button type="submit">Create</button>
                                        <button type="button" onClick={() => setShowCreateRowForm(false)}>Cancel</button>
                                    </form>
                                </div> 
                            : null}
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

            {/* ------------------- Row Properties Content -------------------- */}
            {selectedItem === "row" && (
                <div className="p-3">
                    <h4>Row Properties</h4>
                    <input type="text" placeholder="Number of Columns" />
                </div>
            )}

            {/* ------------------- Component Properties Content -------------------- */}
            {selectedItem === "component" && (
                <div className="p-3">
                    <h4>Component Properties</h4>
                    <input type="text" placeholder="Text Content" />
                </div>
            )}

            {/* ------------------- Components Content -------------------- */}
            {selectedItem === "emptyColumn" && (
                <div className="p-3">
                    <h4>Add Component</h4>
                    <div>
                        <ul>
                            <li>Component 1</li>
                            <li>Component 2</li>
                            <li>Component 3</li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    )
}

export default EditorPanel;