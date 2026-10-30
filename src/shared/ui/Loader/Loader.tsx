import { classNames } from 'shared/lib/classNames/classNames';
import './Loader.scss';

interface LoaderProps {
    className?: string;
}

export const Loader = ({ className }: LoaderProps) => {
    const t = 0;
    return (
        <div className={classNames('loader', {}, [className])} />
    );
};
