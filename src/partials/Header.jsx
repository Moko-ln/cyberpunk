import { Container } from "../components/Container";
import { Brand } from "../components/Brand";
import { Navbar } from "../components/Navbar";

const Header = () => {
    return (
        <header className="lg:pt-10 lg:pb-20 pb-4 xl:w-custom-width-column lg:w-1/3 w-full flex lg:items-end z-30 absolute bottom-0 lg:left-[8vw] lg:h-screen justify-center">
            <Container className="flex lg:flex-col md:flex-row flex-col lg:items-start items-center lg:justify-between justify-center h-full w-full lg:gap-0 gap-10">
                <Brand />       
                <Navbar />
            </Container>
        </header>
    );
};

export default Header;
