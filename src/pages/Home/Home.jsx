import AllServices from "../AllServices/AllServices";
import About from "./About";
import Banner from "./Banner";
import DealsNews from "./DealsNews";
// Home
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <DealsNews></DealsNews>
            <About></About>
            <AllServices></AllServices>
        </div>
    );
};

export default Home;