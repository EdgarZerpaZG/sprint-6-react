import type {TitleProps} from './titleTypes';

export default function Title({ title, style }: TitleProps) {
    return (
        <>
            <p className={style}>{title}</p>
        </>
    )
}