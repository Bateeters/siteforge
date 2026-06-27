import type { TextComponent } from "../../../types/component";

type Props = {
    component: TextComponent;
};

function TextComponentView({ component }: Props) {
    return (
        <p>{component.props.text}</p>
    )
}

export default TextComponentView;
