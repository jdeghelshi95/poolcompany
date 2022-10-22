// import Testimonials from "../components/Testimonials";
import Team from "../components/Team";
import Gallery from "../components/Gallery";
import Header from "../components/Header";


export default function Home() {
  return (

    <div classname="bg-white">
        <section>
          <Header/>
        </section>


      <section>
        {/* gallery section */}
        <div className="flex justify-center">
          <Gallery />
        </div>
        
        {/* team section */}
        <section>
        <Team />
        </section>
        {/* <Testimonials/> */}
      </section>
    </div>
  );
}
