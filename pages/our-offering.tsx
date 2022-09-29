import UmvelCard from "@modules/footer/UmvelCard"
import Services from "@modules/whatWeOffer"
import ContactForm from "@elements/ContactForm";

const OurOffering = () => {
    return (
        <>
            <Services/>
            <UmvelCard darkTheme={true}>
                <div className="p-12 lg:p-32">
                    <h1 className="mb-6 md:text-6xl text-3xl font-bold lg:text-7xl">Meet us in real life (or on Zoom ;)</h1>
                    <p className="mb-6 md:text-2xl lg:text-2xl">Enter your email address, and we’ll get in touch to plan a coffee.</p>
                    <ContactForm theme="dark" />
                </div>
            </UmvelCard>
        </>
    )
}

export default OurOffering