import HeroSection from '../components/HeroSection';
import CTASection from '../components/CTASection';
import KeySellingPoints from '../components/KeySellingPoints';
import HowItWorks from '../components/HowItWorks';
import WhyCobbler from '../components/WhyCobbler';
import SocialProof from '../components/SocialProof';
import FAQSection from '../components/FAQSection';

const HomePage = () => {
    return (
        <div>
            <HeroSection />
            <CTASection />
            <KeySellingPoints />
            <HowItWorks />
            <WhyCobbler />
            <SocialProof />
            <FAQSection />
        </div>
    );
};

export default HomePage;