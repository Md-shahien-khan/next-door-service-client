import AllServices from "../AllServices/AllServices";
import ReviewsClients from "../ReviewsClient/ReviewsClients";
import About from "./About";
import Banner from "./Banner";
import DealsNews from "./DealsNews";
// Home
const Home = () => {
    return (
        <div className="font-poppins">
            <Banner></Banner>
            <DealsNews></DealsNews>
            <About></About>
            <AllServices></AllServices>
            <ReviewsClients></ReviewsClients>
        </div>
    );
};

export default Home;