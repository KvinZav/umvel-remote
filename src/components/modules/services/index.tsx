
const Services = () => {
    return (
        <div className="grid grid-cols-12">
            <div className="col-span-5 px-16">
                <div className="flex flex-col">
                    <h1 className="text-3xl font-bold sm:text-5xl mb-2">What we offer</h1>
                    <p className="text-base mb-8">Leading the way in meaningful digital products.</p>
                </div>
                <div className="flex flex-col">
                    <p className="text-2xl mb-6">Have a goal in mind?</p>
                </div>
                <div className="w-full grid grid-cols-2 gap-4">
                    <Filter />
                    <Filter />
                    <Filter />
                    <Filter />
                    <Filter />
                    <Filter />
                    <Filter />
                    <Filter />
                    <Filter />
                </div>
            </div>
            <div className="col-span-7 ">
                <div className="flex flex-row flex-wrap">
                    <Service />
                    <Service />
                    <Service />
                    <Service />
                    <Service />
                </div>
            </div>
        </div>
    )
}

const Service = () => {
    return (
        <div className="aspect-square w-1/4 min-w-[200px] border border-secondary-10 flex flex-col p-6 overflow-hidden">
            <div className="bg-cases-oeio w-8 aspect-square mb-1" />
            <div className="flex">
                <p className="font-bold">Define service, user and technology needs</p>
            </div>
        </div>
    )
}
const Filter = () => {
    return(
        <div className="border rounded-lg h-16">

        </div>
    )
}

export default Services