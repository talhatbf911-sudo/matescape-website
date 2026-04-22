import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyMatescape from './components/WhyMatescape';
import TravelStyles from './components/TravelStyles';
import NayaritMap from './components/NayaritMap';
import FirstExperiences from './components/FirstExperiences';
import CommunityTogether from './components/CommunityTogether';
import Founders from './components/Founders';
import JoinJourney from './components/JoinJourney';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhyMatescape />
        <TravelStyles />
        <NayaritMap />
        <FirstExperiences />
        <CommunityTogether />
        <Founders />
        <JoinJourney />
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default App;
