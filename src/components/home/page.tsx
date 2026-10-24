import React from 'react'

import HeroSection from './hero-section/page'
import FeatureSection from './feature/page'
import SpecificationsSection from './specifications/page'
import AboutSection from './about/page'
import CertificationsQA from './certifi-quality/page'
import ContactSection from './contact/page'
import FAQ from './faq/page'

const HomePage = () => {

    return (
        <>
            <HeroSection />
            <FeatureSection />
            <SpecificationsSection />
            <AboutSection />
            <CertificationsQA />
            <FAQ />
            <ContactSection />
        </>
    )
}

export default HomePage
