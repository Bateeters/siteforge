import { useState } from "react";
import EditorPanel from "../components/editor/EditorPanel";
import type { SelectedItem } from "../types/editor";


function EditorPage() { 
    const [selectedItem, setSelectedItem] = useState<SelectedItem>(null)
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12" style={{ backgroundColor: "#d4d1d1", padding: "10px" }}>
                        <p>Top Toolbar</p>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-9" style={{ backgroundColor: "red"}}>
                        <p>Content Area</p>
                        <h1>Website Title</h1>
                        <button onClick={() => setSelectedItem("row")}>Row</button>
                        <button onClick={() => setSelectedItem("component")}>Component</button>
                        <button onClick={() => setSelectedItem("emptyColumn")}>Empty Column</button>
                    </div>
                    <div className="col-lg-3 p-0" style={{ backgroundColor: "whitesmoke", padding: "10px" }}>
                        <EditorPanel 
                            selectedItem={selectedItem}
                            setSelectedItem={setSelectedItem}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default EditorPage;