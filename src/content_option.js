const logotext = "Seungwoo Cheon Portfolio";
const meta = {
    title: "Seungwoo Cheon Portfolio",
    description: "안녕하세요. 신입 프론트엔드 개발자 천승우입니다.",
};

const introdata = {
    title: "안녕하세요, 저는",
    animated: {
        first: "프론트엔드 개발자",
        second: "AI 엔지니어",
        third: "프로젝트 매니저",
        fourth: "퍼블리셔",
        fifth: "한영 번역가",
        // sixth: "",
        // add more if you'd like but make sure to update /src/pages/home/index.js Line 29
    },
    title_end: "입니다.",
    description: "UI/UX경험을 중시하는 프론트엔드 개발자입니다.",
    your_img_url: "https://github.com/PhoneticsBug/cybersecurity-portfolio-webpage/blob/main/public/profile.png?raw=true",
};

const dataabout = {
    title: "Who am I?",
    aboutme: [
      "안녕하세요. 신입 프론트엔드 및 AI 개발자 천승우입니다.",
      "- React를 통한 유지보수성이 높은 개발을 지향합니다.",
      "- 팀프로젝트를 통한 배포/유지보수 경험과 gh-pages를 통한 배포 경험이 있습니다.",
      "- AI 기반 웹 프로젝트에서 AI제작 참여 및 UI/UX, 프론트엔드 직무를 리드한 경험이 있습니다.",
      "- Figma, github를 통한 프로젝트 관리 및 기획 경험이 있습니다.",
      "- Tensorflow, sklearn 등 Python 기반 EDA 및 AI 모델 제작 경험이 있습니다."

    ]
  };
const worktimeline = [
    {
        jobtitle: "학력",
        where: "영어영문학과 학사",
        date: "2016.03~2023.02",
    },
    {
        jobtitle: "류황별의 종이공방",
        where: "Youtube, 영상 한영 자막 제작",
        date: "2020.01~",
    },
    {
        jobtitle: "자격",
        where: "TOEIC 950",
        date: "2022.11",
    },
    {
        jobtitle: "교육",
        where: "WANTED FRONTEND Preonboarding",
        date: "2023.09~2023.11",
    },
    {
        jobtitle: "교육",
        where: "KT AIVLE School AI 개발자 교육 3기",
        date: "2023.01~2023.07",
    },
    {
        jobtitle: "공모전",
        where: "광진구 빅데이터 공모전",
        date: "2023.03~2023.05",
    },
    {
        jobtitle: "병역",
        where: "대한민국 육군 만기전역",
        date: "2016.07~2018.04",
    },
    {
        jobtitle: "자격",
        where: "oPIC AL",
        date: "2023.08",
    },
    {
        jobtitle: "자격",
        where: "정보처리기사 (필기)",
        date: "2024.02",
    },

];

const skills = [{
        name: "Python",
    },
    
    {
        name: "JavaScript",
    },
    
    {
        name: "Figma",
    },
    
    {
        name: "Bash",
    },

    {
        name: "Powershell",
    },

    {
        name: "MySQL",
    },

    {
        name: "HTML5",
    },

    {
        name: "CSS3",
    },

    {
        name: "Photoshop",
    },

    {
        name: "Lightroom",
    },

    {
        name: "Praat",
    },
];

const dataportfolio = [{
        img: "https://github.com/PhoneticsBug/sw_portpolio/blob/main/public/project%20logo/mini1.jpg?raw=true",
        description: "KT AIVLE School 미니 프로젝트 1",
        link: "https://github.com/PhoneticsBug/ktAivle/tree/main/1%EC%B0%A8",
    },
    {
        img: "https://github.com/PhoneticsBug/sw_portpolio/blob/main/public/project%20logo/mini2.jpg?raw=true",
        description: "KT AIVLE School 미니 프로젝트 2",
        link: "https://github.com/PhoneticsBug/ktAivle/tree/main/2%EC%B0%A8",
    },
    {
        img: "https://github.com/PhoneticsBug/sw_portpolio/blob/main/public/project%20logo/mini3.jpg?raw=true",
        description: "KT AIVLE School 미니 프로젝트 3",
        link: "https://github.com/PhoneticsBug/ktAivle/tree/main/3%EC%B0%A8",
    },
    {
        img: "https://github.com/PhoneticsBug/sw_portpolio/blob/main/public/project%20logo/mini4.jpg?raw=true",
        description: "KT AIVLE School 미니 프로젝트 4",
        link: "https://github.com/PhoneticsBug/ktAivle/tree/main/4%EC%B0%A8",
    },
    {
        img: "https://github.com/PhoneticsBug/sw_portpolio/blob/main/public/project%20logo/mini5.jpg?raw=true",
        description: "KT AIVLE School 미니 프로젝트 5",
        link: "https://github.com/PhoneticsBug/ktAivle/tree/main/5%EC%B0%A8",
    },
    {
        img: "https://github.com/PhoneticsBug/sw_portpolio/blob/main/public/project%20logo/mini6.jpg?raw=true",
        description: "KT AIVLE School 미니 프로젝트 6",
        link: "https://github.com/PhoneticsBug/ktAivle/tree/main/6%EC%B0%A8",
    },

    {
        img: "https://github.com/PhoneticsBug/sw_portpolio/blob/main/public/project%20logo/mini7.jpg?raw=true",
        description: "KT AIVLE School 미니 프로젝트 7",
        link: "https://github.com/PhoneticsBug/ktAivle/tree/main/7%EC%B0%A8",
    },
    {
        img: "https://github.com/PhoneticsBug/sw_portpolio/blob/main/public/project%20logo/big.jpg?raw=true",
        description: "KT AIVLE School 빅 프로젝트",
        link: "https://github.com/PhoneticsBug/ktAivle/tree/main/%EB%B9%85%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8",
    },
    {
        img: "https://github.com/PhoneticsBug/sw_portpolio/blob/main/public/project%20logo/kwangjin.png?raw=true",
        description: "광진구 빅데이터 공모전",
        link: "https://github.com/PhoneticsBug/ktAivle/tree/main/%EA%B4%91%EC%A7%84%EA%B5%AC",
    },
    {
        img: "https://github.com/PhoneticsBug/sw_portpolio/blob/main/public/project%20logo/preonboarding.jpg?raw=true",
        description: "WANTED 프론트엔드 프리온보딩 일정관리 웹서비스 제작 프로젝트",
        link: "https://github.com/PhoneticsBug/wanted-pre-onboarding-frontend",
    },
    {
        img: "https://github.com/PhoneticsBug/sw_portpolio/blob/main/public/project%20logo/study_logo.jpg?raw=true",
        description: "while True: 알고리즘 스터디",
        link: "https://www.notion.so/oneull/while-True-1d396a8e98fc48368ad346d8b590aae0",
    },
    {
        img: "https://github.com/PhoneticsBug/sw_portpolio/blob/main/public/project%20logo/ill_search.jpg?raw=true",
        description: "국내 모든 임상시험 검색하고 온라인으로 참여하기",
        link: "https://github.com/PhoneticsBug/assignment-1?tab=readme-ov-file",
    },
    {
        img: "https://github.com/PhoneticsBug/sw_portpolio/blob/main/public/project%20logo/nomad_clone.jpg?raw=true",
        description: "React Recap (with Nomad Coders)",
        link: "https://github.com/PhoneticsBug/nomad_clones/blob/main/README.md",
    },
    {
        img: "https://github.com/PhoneticsBug/sw_portpolio/blob/main/public/project%20logo/upcoming.jpg?raw=true",
        description: "upcoming...",
        link: "#",
    },
];

const contactConfig = {
    YOUR_EMAIL: "swwe1000@gmail.com",
    description: "According to the issue of content provider, form next to this text does not work. Please send E-mail directly instead.",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_swcheon", // SERVICE_ID
    YOUR_TEMPLATE_ID: "template_7ukl3mm", //TEMPLATE_ID
    YOUR_USER_ID: "83JbPmsyoMvlUMtgp", // PUBLIC_KEY
};

const socialprofils = {
    github: "https://github.com/PhoneticsBug",
    linkedin: "https://www.linkedin.com/in/iliya-cheon-948002285/",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};