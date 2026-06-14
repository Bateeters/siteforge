import { useState } from "react";
import EditorPanel from "../components/editor/EditorPanel";
import type { SelectedItem } from "../types/editor";
import type { Row } from "../types/row";

function EditorPage() { 
    const [selectedItem, setSelectedItem] = useState<SelectedItem>(null)
    const [rowList, setRowList] = useState<Row[]>([])

    function getColumnClass(columns: number) {
        if (columns === 1) return "col-12";
        if (columns === 2) return "col-6";
        return "col-4";
    }

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

                        {rowList.map((row) => (
                            <div className="row" key={row.id}>
                                {Array.from({ length: row.columns }, (_, i) => (
                                    <div 
                                    key={i}
                                    className={`d-flex ${getColumnClass(row.columns)} justify-content-center align-items-center`} 
                                    style={{backgroundColor: "yellow"}}>
                                        <button className="btn btn-secondary m-5">+</button>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                    <div className="col-lg-3 p-0" style={{ backgroundColor: "whitesmoke" }}>
                        <EditorPanel 
                            selectedItem={selectedItem}
                            setSelectedItem={setSelectedItem}
                            rowList={rowList}
                            setRowList={setRowList}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default EditorPage;