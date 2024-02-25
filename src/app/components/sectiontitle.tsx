interface SectionTitleProps {
    firstText: string;
    secondText: string;
    colorClass: string;
}

export default function SectionTitle({ firstText, secondText, colorClass }: SectionTitleProps) {
    return (
        <div className="flex flex-col justify-center items-center h-full w-1/5 md:w-40">
            <h1 className={`font-bold text-6xl md:text-7xl text-${colorClass} rotate-90`}>
                {firstText}<span className="font-[100] inter-font">{secondText}</span>
            </h1>
        </div>
    )
}
