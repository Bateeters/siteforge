import type { HeaderComponent } from "../../../types/component";
import type { EditorProps } from "../../../editorRegistry";

function HeaderEditor({ component, updateProps }: EditorProps) {
    const headerComponent = component as HeaderComponent;

    return(
        <>
            <textarea
                cols={50}
                rows={4}
                value={headerComponent.props.text}
                onChange={(e) => updateProps({ text: e.target.value })}
            />
            <select
                value={headerComponent.props.level}
                onChange={(e) => updateProps({ level: Number(e.target.value) })}
            >
                <option value={1}>Header 1</option>
                <option value={2}>Header 2</option>
                <option value={3}>Header 3</option>
                <option value={4}>Header 4</option>
                <option value={5}>Header 5</option>
                <option value={6}>Header 6</option>
            </select>
        </>
    )
}

export default HeaderEditor;
