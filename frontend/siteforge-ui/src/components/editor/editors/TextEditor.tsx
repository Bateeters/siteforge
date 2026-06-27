import type { TextComponent } from "../../../types/component";
import type { EditorProps } from "../../../editorRegistry";

function TextEditor({ component, updateProps }: EditorProps) {
    const textComponent = component as TextComponent;

    return (
        <textarea
            cols={50}
            rows={4}
            value={textComponent.props.text}
            onChange={(e) => updateProps({ text: e.target.value })}
        />
    )

}

export default TextEditor;
