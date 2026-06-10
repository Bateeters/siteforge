import { useState } from "react";

type EditorState =
    | "settings"
    | "properties"
    | "components";

type SettingsTab =
    | "site"
    | "page";

function EditorPanel() {
    const [editorState, setEditorState] = useState<EditorState>("settings");
    const [settingsTab, setSettingsTab] = useState<SettingsTab>("page");
    const [showTabProps, setShowTabProps] = useState(false);

    return (
        <div>
            <h2>Editor Side Panel</h2>
            <button onClick={() => setEditorState("settings")} disabled={editorState === "settings"}>Settings</button>
            <button onClick={() => setEditorState("properties")} disabled={editorState === "properties"}>Properties</button>
            <button onClick={() => setEditorState("components")} disabled={editorState === "components"}>Components</button>

            <h3>{editorState.charAt(0).toUpperCase() + editorState.slice(1)} Panel</h3>

            {/* ------------------- Settings Content -------------------- */}
            {editorState === "settings" && (
                <>
                    <button onClick={() => setSettingsTab("site")} disabled={settingsTab === "site"}>Site Settings</button>
                    <button onClick={() => setSettingsTab("page")} disabled={settingsTab === "page"}>Page Settings</button>
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
                </>
            )}

            {/* ------------------- Properties Content -------------------- */}
            {editorState === "properties" && (
                <>
                    <h4>Properties</h4>
                    <input type="text" placeholder="Property Name" />
                </>
            )}

            {/* ------------------- Components Content -------------------- */}
            {editorState === "components" && (
                <>
                    <h4>Components</h4>
                    <div>
                        <ul>
                            <li>Component 1</li>
                            <li>Component 2</li>
                            <li>Component 3</li>
                        </ul>
                    </div>
                </>
            )}
        </div>
    )
}

export default EditorPanel;