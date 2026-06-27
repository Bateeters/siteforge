import type { JSX } from "react/jsx-runtime";
import type { HeaderComponent } from "../../../types/component";

type Props = {
    component: HeaderComponent;
};

function HeaderComponentView({ component }: Props) {
    const Tag = `h${component.props.level}` as keyof JSX.IntrinsicElements;

    return <Tag>{component.props.text}</Tag>
}

export default HeaderComponentView;