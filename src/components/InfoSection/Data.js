// objects with data for our reusable sections

export const homeObjOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Premium Bank',
    headLine: 'Unlimited Transactions with zero fees',
    description: 'Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees',
    buttonLabel: 'Get started',
    imgStart: false,
    img: require('../../images/svg-1.svg').default,
    alt: 'Car',
    primary: true,
    dark: true,
    darkText: false 
}

export const homeObjTwo = {
    id: 'discover',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Unlimited Access',
    headLine: 'Login to your account at your convinience',
    description: 'We have you covered no matter where you are located. All you need is internet connection and a smartphone or laptop',
    buttonLabel: 'Learn More',
    imgStart: true,
    img: require('../../images/svg-2.svg').default,
    alt: 'Car',
    primary: false,
    dark: false,
    darkText: true 
}

export const homeObjThree = {
    id: 'signup',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Join the team',
    headLine: 'It is so easy to create an account',
    description: 'Get everything setup and ready in under 10 minutes. All you need to do is add your information and your will be ready to go.',
    buttonLabel: 'Start now',
    imgStart: false,
    img: require('../../images/svg-3.svg').default,
    alt: 'Car',
    primary: false,
    dark: false,
    darkText: true 
}