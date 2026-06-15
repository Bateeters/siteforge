import { useState } from "react";
import EditorPanel from "../components/editor/EditorPanel";
import type { SelectedItem } from "../types/selected";
import type { Row } from "../types/row";
import RowView from "../components/editor/RowView";

function EditorPage() {
    const [selectedItem, setSelectedItem] = useState<SelectedItem>(null);
    const [rowList, setRowList] = useState<Row[]>([]);

    return (
        <>
            {/* Top Toolbar */}
            <div className="container-fluid">
                <div className="row">
                    <div
                        className="col-12"
                        style={{
                            backgroundColor: "#d4d1d1",
                            padding: "10px"
                        }}
                    >
                        <p>Top Toolbar</p>
                    </div>
                </div>
            </div>

            {/* Main Layout */}
            <div className="container-fluid">
                <div className="row">
                    {/* Content Area */}
                    <div
                        className="col-lg-9"
                        style={{ backgroundColor: "red" }}
                    >
                        <p>Content Area</p>
                        <h1>Website Title</h1>

                        <button onClick={() => setSelectedItem({ type: "page" })}>
                            Page
                        </button>

                        <button onClick={() => setSelectedItem({ type: "row", rowId: 0 })}>
                            Row
                        </button>

                        <button onClick={() => setSelectedItem({ type: "column", rowId: 0, columnId: 0 })}>
                            Column
                        </button>

                        <button onClick={() => setSelectedItem({ type: "component", rowId: 0, columnId: 0, componentId: 0 })}>
                            Component
                        </button>

                        {/* ROW RENDER */}
                        {rowList.map((row) => (
                            <RowView
                                key={row.id}
                                row={row}
                                setSelectedItem={setSelectedItem}
                            />
                        ))}
                    </div>

                    {/* Editor Panel */}
                    <div
                        className="col-lg-3 p-0"
                        style={{ backgroundColor: "whitesmoke" }}
                    >
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