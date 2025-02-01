import Header from "@/components/ui/header/header";
import HomeContainer from "@/components/ui/pages/home/container";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />

      <HomeContainer />
    </div>
  );
}
