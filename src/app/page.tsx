import { Header } from "../components/page/Header/Header";
import { FirstCallToAction } from "@/components/page/FirstCallToAction/FirstCallToAction";

export default function Home() {
  return (
    <div className="w-full">
      <Header />
      <FirstCallToAction />
    </div>
  );
}
