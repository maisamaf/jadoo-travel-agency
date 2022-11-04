import Brands from "../components/Brands";
import Category from "../components/Category";
import Destinations from "../components/Destinations";
import Footer from "../components/Footer";
import Header from "../components/Header";
import NextTrip from "../components/NextTrip";
import Subscription from "../components/Subscription";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <div className="relative overflow-x-hidden">
      <Header />
      <main>
       <Category />
       <Destinations />
       <NextTrip />
       <Testimonials />
       <Brands /> 
       <Subscription /> 
       <Footer />   
      </main>
    </div>
  );
}
