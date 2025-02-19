import Footer from "@/components/ui/footer/footer";
import Header from "@/components/ui/header/header";
import RegisterContainer from "@/components/ui/pages/register/container";

export default function Page() {
    return (
        <div className="flex flex-col">
            <Header />
            
            <RegisterContainer />
            
            <Footer />
        </div>
    )
}