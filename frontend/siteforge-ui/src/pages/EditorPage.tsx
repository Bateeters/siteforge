import { useState } from "react";
import EditorPanel from "../components/editor/EditorPanel";

type EditorState =
    | "settings"
    | "properties"
    | "components";

type SettingsTab =
    | "site"
    | "page";

function EditorPage() {
    const [editorState, setEditorState] = useState("settings");
    const [settingsTab, setSettingsTab] = useState("page");
    const [showTabProps, setShowTabProps] = useState(false);

    return (
        <>
            <div>
                <p>Top Toolbar</p>
            </div>
            <div>
                <div>
                    <p>Content Area</p>
                    <h1>Website Title</h1>
                </div>
                <EditorPanel />
            </div>
        </>
    );
}

export default EditorPage;