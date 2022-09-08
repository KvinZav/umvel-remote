import React from "react"
type SquareColorsProps = {
    text: string;
    textSize?: "sm"|"md"|"lg";
}
const SquareColors:React.FC<SquareColorsProps> = ({text,textSize='md'}):JSX.Element => {
    return (
        <div className="relative group w-full aspect-square grid grid-cols-4 grid-rows-5 lg:grid-rows-4 lg:grid-cols-4 lg:hover:grid-cols-4 justify-items-center place-items-center text-primary-black gap-1 lg:gap-0 cursor-pointer">
            <div className="w-full -translate-y-1 lg:translate-y-0 lg:group-hover:-translate-y-2 lg:group-hover:scale-50 scale-50 lg:scale-100 transition-all delay-150 ease-out duration-1000 aspect-square bg-prisma-aqua" />
            <div className="w-full -translate-y-1 lg:translate-y-0 lg:group-hover:-translate-y-2 lg:group-hover:scale-50 scale-50 lg:scale-100 transition-all delay-150 ease-out duration-1000 aspect-square bg-prisma-green" />
            <div className="w-full -translate-y-1 lg:translate-y-0 lg:group-hover:-translate-y-2 lg:group-hover:scale-50 scale-50 lg:scale-100 transition-all delay-150 ease-out duration-1000 aspect-square bg-prisma-lemon" />
            <div className="w-full -translate-y-1 lg:translate-y-0 lg:group-hover:-translate-y-2 lg:group-hover:scale-50 scale-50 lg:scale-100 transition-all delay-150 ease-out duration-1000 aspect-square bg-prisma-ellow" />
            <div className="w-full -translate-y-1 lg:translate-y-0 lg:group-hover:-translate-y-2 lg:group-hover:scale-50 scale-50 lg:scale-100 transition-all delay-150 ease-out duration-1000 aspect-square bg-prisma-purple" />
            <div className="w-full -translate-y-1 lg:translate-y-0 lg:group-hover:-translate-y-2 lg:group-hover:scale-50 scale-50 lg:scale-100 transition-all delay-150 ease-out duration-1000 aspect-square bg-prisma-pink" />
            <div className="w-full -translate-y-1 lg:translate-y-0 lg:group-hover:-translate-y-2 lg:group-hover:scale-50 scale-50 lg:scale-100 transition-all delay-150 ease-out duration-1000 aspect-square bg-prisma-red" />
            <div className="w-full -translate-y-1 lg:translate-y-0 lg:group-hover:-translate-y-2 lg:group-hover:scale-50 scale-50 lg:scale-100 transition-all delay-150 ease-out duration-1000 aspect-square bg-prisma-organge" />
            <div className="-z-10 lg:absolute w-full h-full flex items-center justify-center top-0 col-span-4 transition delay-150 ease-in-out duration-1000 lg:min-h-0">
                <p className={`${textSize==="sm"? "text-xs": textSize==="md"? "text-base" : "text-lg"} whitespace-nowrap`}>{text}</p>
            </div>
            <div className="w-full translate-y-1 lg:translate-y-0 lg:group-hover:translate-y-2 lg:group-hover:scale-50 scale-50 lg:scale-100 transition-all delay-150 ease-out duration-1000 aspect-square bg-prisma-navy" />
            <div className="w-full translate-y-1 lg:translate-y-0 lg:group-hover:translate-y-2 lg:group-hover:scale-50 scale-50 lg:scale-100 transition-all delay-150 ease-out duration-1000 aspect-square bg-prisma-blue" />
            <div className="w-full translate-y-1 lg:translate-y-0 lg:group-hover:translate-y-2 lg:group-hover:scale-50 scale-50 lg:scale-100 transition-all delay-150 ease-out duration-1000 aspect-square bg-prisma-aqua" />
            <div className="w-full translate-y-1 lg:translate-y-0 lg:group-hover:translate-y-2 lg:group-hover:scale-50 scale-50 lg:scale-100 transition-all delay-150 ease-out duration-1000 aspect-square bg-prisma-green" />
            <div className="w-full translate-y-1 lg:translate-y-0 lg:group-hover:translate-y-2 lg:group-hover:scale-50 scale-50 lg:scale-100 transition-all delay-150 ease-out duration-1000 aspect-square bg-prisma-red" />
            <div className="w-full translate-y-1 lg:translate-y-0 lg:group-hover:translate-y-2 lg:group-hover:scale-50 scale-50 lg:scale-100 transition-all delay-150 ease-out duration-1000 aspect-square bg-prisma-organge" />
            <div className="w-full translate-y-1 lg:translate-y-0 lg:group-hover:translate-y-2 lg:group-hover:scale-50 scale-50 lg:scale-100 transition-all delay-150 ease-out duration-1000 aspect-square bg-prisma-ellow" />
            <div className="w-full translate-y-1 lg:translate-y-0 lg:group-hover:translate-y-2 lg:group-hover:scale-50 scale-50 lg:scale-100 transition-all delay-150 ease-out duration-1000 aspect-square bg-prisma-lemon" />
        </div>
    )
}

export default SquareColors