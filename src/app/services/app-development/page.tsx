import FaqSection from '@/app/components/common/FaqSection';
import React from 'react'
import ContactHeroSection from '../web-development/components/ContactSection';
import DevelopmentProcessSection from '../web-development/components/DevelopmentProcessSection';
import IndustriesSection from '../web-development/components/IndustriesSection';
import OurWorkSlide from '../web-development/components/OurWorkSlide';
import ServicesSection from '../web-development/components/ServicesSection';
import TechnologiesSection from '../web-development/components/TechnologySection';
import WhyChooseUsSection from '../web-development/components/WhyChooseSection';
import AppServicesSection from './components/AppServiceSection';
import AppDevelopmentProcessSection from './components/AppDevelopmentProcessSection';
import App from 'next/app';
import AppPortfolioSection from './components/AppPortfolioSection';
import PartnerWithUsSection from '@/app/components/PartnerWithUsSection';


const dynamicData = {
    title: "Bring Your Ideas to Life with Wayone’s ",
    heiglight: "Expert App Development Services",
    shortDesc: "Custom, Scalable & High-Performance App Development",
    description: "we offer end-to-end app development services that turn your own ideas into reality. Our team designs customized, high-performing applications with smooth user interfaces and functionality in line with your business requirements.",
    ctaText: "Start Your Project",
    ctaLink: "#contact",
    subheading: "App Development Services – Wayone"
};


const services = [
    {
        id: '1',
        icon: 'fa-brands fa-android',
        title: 'Android/IOS Application Development',
        description:
            'We specialize in developing native mobile apps for iOS and Android. We make sure each app is customized to its platform, providing a smooth, natural experience and using platform-specific capabilities to deliver the best possible experience to users.',
        delay: 100,
    },
    {
        id: '2',
        icon: 'fa-brands fa-flutter',
        title: 'Flutter App Development',
        description:
            'With the strength of Flutter, we develop cross-platform apps that run flawlessly on both Android and iOS platforms. Flutter allows us to save time in development while delivering an excellent native-like quality of experience to your users.',
        delay: 200,
    },
    {
        id: '3',
        icon: 'fa-solid fa-gear',
        title: 'React Native App Development',
        description:
            'Our React Native app development services enable us to develop apps that are both quick and scalable with native app platform. It also enables us to provide an identical experience both on iOS and Android.',
        delay: 300,
    },
];

const processSteps = [
    {
        id: '1',
        icon: 'fa-brands fa-searchengin', // Replace with appropriate icons
        title: 'Research',
    },
    {
        id: '2',
        icon: 'fa-solid fa-swatchbook', // Replace with appropriate icons
        title: 'Design',
    },
    {
        id: '3',
        icon: 'fa-solid fa-code', // Replace with appropriate icons
        title: 'Development',
    },
    {
        id: '4',
        icon: 'fa-regular fa-file-lines', // Replace with appropriate icons
        title: 'Testing',
    },
    {
        id: '5',
        icon: 'fa-solid fa-sitemap', // Replace with appropriate icons
        title: 'Deployment',
    },
];



const portfolioItems = [
    {
        id: '1',
        title: 'Fever99.Com - User\'s Screen',
        images: [
            '/assets/images/screens/fever1.png',
            '/assets/images/screens/fever2.png',
            '/assets/images/screens/fever3.png',
            '/assets/images/screens/fever4.png',
            '/assets/images/screens/fever5.png',
        ],
    },
    {
        id: '2',
        title: 'Fever99.Com - User\'s Screen',
        images: [
            '/assets/images/screens/fever1.png',
            '/assets/images/screens/fever2.png',
            '/assets/images/screens/fever3.png',
            '/assets/images/screens/fever4.png',
            '/assets/images/screens/fever5.png',
        ],
    },
    {
        id: '3',
        title: 'Fever99.Com - User\'s Screen',
        images: [
            '/assets/images/screens/fever1.png',
            '/assets/images/screens/fever2.png',
            '/assets/images/screens/fever3.png',
            '/assets/images/screens/fever4.png',
            '/assets/images/screens/fever5.png',
        ],
    },
];



const appfaqs = [
  {
    "question": "What is app development?",
    "answer": "App development involves creating mobile or web applications designed to offer specific functionalities, enhance user experience, and engage your audience."
  },
  {
    "question": "How long does it take to build an app?",
    "answer": "The timeline varies based on the complexity of the app. Simple apps may take a few weeks, while complex apps can take several months."
  },
  {
    "question": "Which platforms do you develop apps for?",
    "answer": "We develop apps for iOS, Android, and web platforms, ensuring cross-platform compatibility and a seamless experience."
  },
  {
    "question": "Do you offer app maintenance services?",
    "answer": "Yes, we offer ongoing app maintenance and updates to ensure optimal performance, security, and new feature implementation."
  },
  {
    "question": "How do you ensure the quality of your apps?",
    "answer": "We conduct rigorous testing, including usability testing, performance testing, and security audits, to ensure the highest quality and user satisfaction."
  },
  {
    "question": "Can you develop custom features for my app?",
    "answer": "Absolutely! We specialize in building custom features that align with your business goals and provide unique value to your users."
  },
  {
    "question": "What technologies do you use for app development?",
    "answer": "We use technologies like React Native, Flutter, Swift, Kotlin, and more to build robust, high-performance apps."
  },
  {
    "question": "Do you help with app store submission?",
    "answer": "Yes, we assist with the app submission process, ensuring your app is compliant with store guidelines and successfully published."
  },
  {
    "question": "Can you integrate third-party services into my app?",
    "answer": "Yes, we can integrate APIs, payment gateways, social media logins, and other third-party services to enhance your app's functionality."
  },
  {
    "question": "How do you ensure my app’s security?",
    "answer": "We implement industry-standard encryption, secure authentication, and data protection measures to ensure your app and user data remain secure."
  }
]



export const metadata = {
  title: "Best Custom App Development Company | WayOne IT Solutions",
  description:
    "WayOne IT Solutions, the best custom app development company, delivers best mobile and web apps designed to meet your unique business needs. Contact us today!",
  metadataBase: new URL("https://wayone.co.in/services/app-development/"),
};


export default function page() {
    return (
        <div className='bg-white'>
            <ContactHeroSection {...dynamicData} />
            <div className='max-w-7xl m-auto p-4 lg:px-16'>
                <AppServicesSection services={services} />
                <AppDevelopmentProcessSection processSteps={processSteps} />
            </div>
            <AppPortfolioSection items={portfolioItems} />
            <div className='max-w-7xl m-auto p-4 lg:px-16'>
                <IndustriesSection />                
                <PartnerWithUsSection />
                <FaqSection faqsData={appfaqs} />
            </div>
        </div>
    )
}
