import AllServices from "../AllServices/AllServices";
import CustomerSupport from "../CustomerSupport/CustomerSupport";
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
            <CustomerSupport></CustomerSupport>
            <ReviewsClients></ReviewsClients>
        </div>
    );
};

export default Home;