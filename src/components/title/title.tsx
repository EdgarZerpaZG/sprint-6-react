import type {TitleProps} from './titleTypes';

export default function Title({ title }: TitleProps) {
    return (
        <>
            <h1 className="text-center text-3xl font-bold underline pb-5">{title}</h1>
        </>
    )
}