import EditorPanel from "../components/editor/EditorPanel";

function EditorPage() { 
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