import {
    h1One,
    infoSectionH2,
    cardHeader,
} from "../../styles/style-guide/Typography.module.css";

import {
    white,
    black87,
} from "../../styles/style-guide/ColorGuide.module.css";

interface PrimaryTitleProps {
    title: string
    variant?: string
    color?: string
}

export const PrimaryTitle = ({
    title,
    variant,
    color,
}: PrimaryTitleProps) => {
  return (
    <div className={`
        ${variant === 'banner' ? h1One : ''}
        ${variant === 'infoSection' ? infoSectionH2 : ''}
        ${variant === 'card' ? cardHeader : ''}
        ${color === 'white' ? white : black87}`}>
        {title}
    </div>
  )
};
