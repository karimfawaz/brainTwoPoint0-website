import AboutUs from "./header";
import Enquiries from "../components/enquiries";
import Ethos from "./ethos";
import Team from "./team";

export default function About() {
    return (
        <div>
            <AboutUs />
            <Team />
            <Ethos />
            <Enquiries />
        </div>
    )
}
