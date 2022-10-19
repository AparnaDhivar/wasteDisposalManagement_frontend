import Topnavbar from "../components/Topnavbar";
import TopSlide from "../components/TopSlide";
import Aboutus from "../components/Aboutus";
import Steps from "../components/Steps";
import Wastemanagement from "../components/Wastemanagement";
import Contact from "../components/Contact";
import logo from "../images/logo.png";
import TopSliderLeft from "../images/TopSliderLeft.png";
import TopSliderRight from "../images/TopSliderRight.jpg";
import TopSlider3 from "../images/TopSlider3.jpg";
import AboutImg1 from "../images/AboutImg1.jpg"
import AboutImg2 from "../images/AboutImg2.jpg"
import AboutImg3 from "../images/AboutImg3.webp"
import WastemanagementImg1 from "../images/WastemanagementImg1.jpg";
import WastemanagementImg2 from "../images/WastemanagementImg2.jpg";
import Contactus from "../images/Contactus.png";
function Frontpage() {
   return(
    <div id="frontpage">
    <Topnavbar Logo={logo}/>
    <TopSlide Image1={TopSliderLeft} Image2={TopSliderRight} Image3={TopSlider3} />
    <Aboutus ODWD={AboutImg1} DS={AboutImg2} TP={AboutImg3}/>
    <Steps />
    <Wastemanagement wm1={WastemanagementImg1} wm2={WastemanagementImg2}/>
    <Contact lastimg={Contactus} />
    </div>
    
    
   );
}

export default Frontpage;