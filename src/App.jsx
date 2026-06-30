import Hero from './components/Hero';
import WhyMatescape from './components/WhyMatescape';
import TravelStyles from './components/TravelStyles';
import NayaritMap from './components/NayaritMap';
import FirstExperiences from './components/FirstExperiences';
import CommunityTogether from './components/CommunityTogether';
import Founders from './components/Founders';
import JoinJourney from './components/JoinJourney';
import Footer from './components/Footer';
import TravelerNote from './components/TravelerNote';
import TravelerNote1 from './components/TravelerNote1';
import TravelerNote2 from './components/TravelerNote2';
import CuratedExperiences from './components/CuratedExperiences';
import MomentsWorthSharing from './components/MomentsWorthSharing';
function App() {
  return (
    <>
      <main>
        <Hero />
        <TravelerNote/>
        <WhyMatescape />
        <TravelStyles />
        <TravelerNote1/>
        <NayaritMap />
        <FirstExperiences />
        <CuratedExperiences/>
        <TravelerNote2/>
        <CommunityTogether />
        <MomentsWorthSharing/>
        <Founders />
        <JoinJourney />
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default App;
