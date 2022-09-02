import React from "react"
type SquareColorsProps = {
    text: string;
    textSize?: "sm"|"md"|"lg";
}
const SqueareColors:React.FC<SquareColorsProps> = ({text,textSize='md'}):JSX.Element => {
    return (
        <div className="group w-full aspect-square grid grid-cols-4 grid-rows-5 lg:grid-rows-4 lg:grid-cols-4 lg:hover:grid-cols-4 lg:hover:grid-rows-5 justify-items-center place-items-center">
            <div className="w-full lg:group-hover:scale-50 scale-50 lg:scale-100 transition delay-150 ease-in-out duration-1000 aspect-square bg-prisma-aqua" />
            <div className="w-full lg:group-hover:scale-50 scale-50 lg:scale-100 transition delay-150 ease-in-out duration-1000 aspect-square bg-prisma-green" />
            <div className="w-full lg:group-hover:scale-50 scale-50 lg:scale-100 transition delay-150 ease-in-out duration-1000 aspect-square bg-prisma-lemon" />
            <div className="w-full lg:group-hover:scale-50 scale-50 lg:scale-100 transition delay-150 ease-in-out duration-1000 aspect-square bg-prisma-ellow" />
            <div className="w-full lg:group-hover:scale-50 scale-50 lg:scale-100 transition delay-150 ease-in-out duration-1000 aspect-square bg-prisma-purple" />
            <div className="w-full lg:group-hover:scale-50 scale-50 lg:scale-100 transition delay-150 ease-in-out duration-1000 aspect-square bg-prisma-pink" />
            <div className="w-full lg:group-hover:scale-50 scale-50 lg:scale-100 transition delay-150 ease-in-out duration-1000 aspect-square bg-prisma-red" />
            <div className="w-full lg:group-hover:scale-50 scale-50 lg:scale-100 transition delay-150 ease-in-out duration-1000 aspect-square bg-prisma-organge" />
            <div className="lg:hidden lg:group-hover:flex col-span-4 transition delay-150 ease-in-out duration-1000">
                <p className={textSize==="sm"? "text-xs": textSize==="md"? "text-base" : "text-lg"}  >{text}</p>
            </div>
            <div className="w-full lg:group-hover:scale-50 scale-50 lg:scale-100 transition delay-150 ease-in-out duration-1000 aspect-square bg-prisma-navy" />
            <div className="w-full lg:group-hover:scale-50 scale-50 lg:scale-100 transition delay-150 ease-in-out duration-1000 aspect-square bg-prisma-blue" />
            <div className="w-full lg:group-hover:scale-50 scale-50 lg:scale-100 transition delay-150 ease-in-out duration-1000 aspect-square bg-prisma-aqua" />
            <div className="w-full lg:group-hover:scale-50 scale-50 lg:scale-100 transition delay-150 ease-in-out duration-1000 aspect-square bg-prisma-green" />
            <div className="w-full lg:group-hover:scale-50 scale-50 lg:scale-100 transition delay-150 ease-in-out duration-1000 aspect-square bg-prisma-red" />
            <div className="w-full lg:group-hover:scale-50 scale-50 lg:scale-100 transition delay-150 ease-in-out duration-1000 aspect-square bg-prisma-organge" />
            <div className="w-full lg:group-hover:scale-50 scale-50 lg:scale-100 transition delay-150 ease-in-out duration-1000 aspect-square bg-prisma-ellow" />
            <div className="w-full lg:group-hover:scale-50 scale-50 lg:scale-100 transition delay-150 ease-in-out duration-1000 aspect-square bg-prisma-lemon" />
        </div>
    )
}

export default SqueareColors