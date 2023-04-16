import expressImg from "./assets/web-design/desktop/image-express.jpg"
import transferImg from "./assets/web-design/desktop/image-transfer.jpg"
import photonImg from "./assets/web-design/desktop/image-photon.jpg"
import builderImg from "./assets/web-design/desktop/image-builder.jpg"
import blogrImg from "./assets/web-design/desktop/image-blogr.jpg"
import campImg from "./assets/web-design/desktop/image-camp.jpg"
import airfilterImg from "./assets/app-design/desktop/image-airfilter.jpg"
import eyecamImg from "./assets/app-design/desktop/image-eyecam.jpg"
import faceitImg from "./assets/app-design/desktop/image-faceit.jpg"
import todoimg from "./assets/app-design/desktop/image-todo.jpg"
import loopstudiosImg from "./assets/app-design/desktop/image-loopstudios.jpg"
import timbrownImg from "./assets/graphic-design/desktop/image-change.jpg"
import boxedwaterImg from "./assets/graphic-design/desktop/image-boxed-water.jpg"
import scienceImg from "./assets/graphic-design/desktop/image-science.jpg"
import wordclassImg from "./assets/about/mobile/image-world-class-talent.jpg"
import realdealImg from "./assets/about/mobile/image-real-deal.jpg"

export const data = {

    webDesign: [
        {
            id: 1,
            img: expressImg,
            title: "EXPRESS",
            description: "A multi-carrier shipping website for ecommerce businesses"
        },
        {
            id: 2,
            img: transferImg,
            title: "TRANSFER",
            description: "Site for low-cost money transfers and sending money within seconds"
        },
        {
            id: 3,
            img: photonImg,
            title: "PHOTON",
            description: "A state-of-the-art music player with high-resolution audio and DSP effects"
        },
        {
            id: 4,
            img: builderImg,
            title: "BUILDER",
            description: "Connects users with local contractors based on their location"
        },
        {
            id: 5,
            img: blogrImg,
            title: "BLOGR",
            description: "Blogr is a platform for creating an online blog or publication"
        },
        {
            id: 6,
            img: campImg,
            title: "CAMP",
            description: "Get expert training in coding, data, design, and digital marketing"
        }

    
    ],
    appDesign: [
        {
            id: 1,
            img: airfilterImg,
            title: "AIRFILTER",
            description: "Solving the problem of poor indoor air quality by filtering the air"
        },
        {
            id: 2,
            img: eyecamImg,
            title: "EYECAM",
            description: "Product that lets you edit your favorite photos and videos at any time"
        },
        {
            id: 3,
            img: faceitImg,
            title: "FACEIT",
            description: "Get to meet your favorite internet superstar with the faceit app"
        },
        {
            id: 4,
            img: todoimg,
            title: "TODO",
            description: "A todo app that features cloud sync with light and dark mode"
        },
        {
            id: 5,
            img: loopstudiosImg,
            title: "LOOPSTUDIOS",
            description: "A VR experience app made for Loopstudios"
        }
    ],

    graphicsDesign : [
        {
            id: 1,
            img: timbrownImg,
            title: "TIM BROWN",
            description: `A book cover designed for Tim 
            Brown’s new release, ‘Change’`
        },
        {
            id: 2,
            img: boxedwaterImg,
            title: "BOXED WATER",
            description: "A simple packaging concept made for Boxed Water"
        },
        {
            id: 3,
            img: scienceImg,
            title: "SCIENCE!",
            description: "A poster made in collaboration with the Federal Art Project"
        }
    ],

    webHero: {
        title: "Web Design",
        description: `We build websites that serve as powerful 
        marketing tools and bring memorable brand experiences.`
    },

    appHero: {
        title: "App Design",
        description: `Our mobile designs bring intuitive 
        digital solutions to your customers right at their fingertips.`
    },

    graphicsHero: {
        title: "Graphic Design",
        description: `We deliver eye-catching branding 
        materials that are tailored to meet your business objectives.`
    },
    aboutDescription1: {
        img: wordclassImg,
        title: "World-class talent",
        paragraph1: `We are a crew of strategists, problem-solvers, and technologists. 
        Every design is thoughtfully crafted from concept to launch, 
        ensuring success in its given market. We are constantly updating our 
        skills in a myriad of platforms.`,
        paragraph2: `Our team is multi-disciplinary and we are not merely interested in 
        form — content and meaning are just as important. We give great 
        importance to craftsmanship, service, and prompt delivery. 
        Clients have always been impressed with our high-quality 
        outcomes that encapsulates their brand’s story and mission.`
    },
    aboutDescription2: {
        img: realdealImg,
        title: "The real deal",
        paragraph1: `As strategic partners in our clients’ businesses, we are ready to 
        take on any challenge as our own.
        Solving real problems require empathy and collaboration, 
        and we strive to bring a fresh perspective to every opportunity. 
        We make design and technology more accessible and give you tools to measure success.`,
        paragraph2: `We are visual storytellers in appealing and captivating ways. 
        By combining business and marketing strategies, we inspire audiences 
        to take action and drive real results.`
    },
    mapCanada : {
        long: 43.64419484706138,
		lat: -79.3945608610694,
        country: "Canada",
        office : "Designo Central Office",
        address1 : "3886 Wellington Street",
        address2 : "Toronto, Ontario M9C 3J5",
        phone: "+1 253-863-8967",
        email: "contact@designo.co"
    },
    mapAustralia : {
        long: -30.329148449296643,
		lat: 149.78822916951194,
        country: "Australia",
        office : "Designo AU Office",
        address1 : "19 Balonne Street",
        address2 : "New South Wales 2443",
        phone: "(02) 6720 9092",
        email: "contact@designo.au"
    },
    mapUK : {
        long: 53.71041818128988,
		lat: -1.3417707595071173,
        country: "United Kingdom",
        office : "Designo UK Office",
        address1 : "13  Colorado Way",
        address2 : "Rhyd-y-fro SA8 9GA",
        phone: "078 3115 1400",
        email: "contact@designo.uk"
    }

}