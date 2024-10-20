import classNames from 'classnames';

type Props = {
    children: React.ReactNode,
    maxWidth?: string;
    noPadding?: boolean;
    containerClassName?: string;
};

export function CenterLimitWidth(props: Props) {
    const { maxWidth = 'lg:max-w-4xl' } = props;
    return (
        <div className="flex justify-center w-full">
            <div className={classNames('flex flex-col w-full', maxWidth)}>
                <div className={classNames("px-8 lg:px-16 4xl:px-0", props.containerClassName)}>
                    {props.children}
                </div>
            </div>
        </div>
    )
}
