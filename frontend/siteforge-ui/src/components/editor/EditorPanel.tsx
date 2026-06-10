import { useState } from "react";

type EditorPanelProps = {
    selectedItem:
        | null
        | "row"
        | "component"
        | "emptyColumn";
    setSelectedItem: React.Dispatch<React.SetStateAction<
        | null
        | "row"
        | "component"
        | "emptyColumn"
        >>;
}

type SettingsTab =
    | "site"
    | "page";

function EditorPanel({ selectedItem, setSelectedItem }: EditorPanelProps) {
    const [settingsTab, setSettingsTab] = useState<SettingsTab>("page");
    const [showTabProps, setShowTabProps] = useState(false);

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
                                <li>Row 1</li>
                                <li>Row 2</li>
                                <li>Row 3</li>
                            </ul>
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
                    <h4>Components</h4>
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