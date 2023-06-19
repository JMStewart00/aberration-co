import Footer from "./nav/Footer";
import CustomNav from "./nav/Navbar";

export default function RootLayout({ children }) {
    return (
        <>
            <CustomNav />
            <div id="main">
                {children}
            </div>
            <Footer />
        </>
    );
}