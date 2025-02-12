import Cyberpunk from "../assets/images/cyberpunk.png";
export const Brand = () => {
    return (
        <div className="xl:w-custom-width-column lg:w-72 md:w-64 w-full lg:order-first order-last">
            <figure className="lg:w-72">
                <img src={Cyberpunk} alt="logo cyberpunk" className="object-contain w-full h-full" />
            </figure>
        </div>
    )
}