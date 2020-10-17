/**
 * Add your data in next index with same key but different values
 * use require('./assets/filename') for offline image
 * add image file to assets/images
 * use {uri: 'image url'} for hosted image
 * please use high quality image
 * you are free to add more than one social media or portfolio link
**/

export const DATA = [
    {
        id: 1, //increment this value
        name: 'Doddy Rizal Novianto',
        image: require('./assets/images/doddy.jpg'),
        techStack: 'React Native, ReactJS, Flutter',
        social: [
            {
                name: 'Github',
                link: 'https://github.com/Drzaln'
            },
            {
                name: 'LinkedIn',
                link: 'https://www.linkedin.com/in/doddy-rizal-novianto-559269157/'
            },
            {
                name: 'Instagram',
                link: 'https://www.instagram.com/drzaln/'
            },
        ]
    },
    {
        id: 2, //increment this value
        name: 'Hary Suryanto',
        image: require('./assets/images/rocket.png'),
        techStack: 'Flutter, CodeIgniter',
        social: [
            {
                name: 'Github',
                link: 'https://github.com/harysuryanto'
            },
            {
                name: 'LinkedIn',
                link: 'https://www.linkedin.com/in/harysuryanto'
            },
            {
                name: 'Instagram',
                link: 'https://www.instagram.com/harysuryanto_'
            },
        ]
    },
     {
        id: 3, //increment this value
        name: 'Rohit W',
        image: {uri: 'https://i.ytimg.com/vi/p759fOyk2cw/maxresdefault.jpg'},
        techStack: 'MongoDb, Angular, Nodejs, Express',
        social: [
            {
                name: 'Github',
                link: 'https://github.com/rohya8'
            },
            {
                name: 'LinkedIn',
                link: 'https://www.linkedin.com/in/rohit-wadke'
            },
            {
                name: 'Instagram',
                link: 'https://www.instagram.com/rohya8'
            },
        ]
    },
    {
        id: 4, //increment this value
        name: 'Sarekashi',
        image: require('./assets/images/sarekashi.jpg'),
        techStack: 'Nodejs, CodeIgniter, Vim',
        social: [
            {
                name: 'Github',
                link: 'https://github.com/sarekashi'
            }
        ]
    },
    {
        id: 5, //increment this value
        name: 'alvin',
        image: require('./assets/images/sarekashi.jpg'),
        techStack: 'Nodejs, React Native, React, Typesctipt, GIT',
        social: [
            {
                name: 'Github',
                link: 'https://github.com/alvinadet'
            }
        ]
    },
    {
        id: 6,
        name: 'Rizky Bayu Oktavian',
        image: require('./assets/images/rocket.png'),
        techStack: 'ReactJS, React Native, Android Native, Web & Mobile Design, UI / UX',
        social: [
            {
                name: 'Github',
                link: 'https://github.com/rbayuokt'
            }
        ]
    },
    {
        id: 7, //increment this value
        name: 'Risky Makira',
        image: require('./assets/images/makira.jpeg'),
        techStack: 'Javascript, Golang, Python, Docker, Kubernetes',
        social: [
            {
                name: 'Github',
                link: 'https://github.com/kirahxr'
            },
            {
                name: 'LinkedIn',
                link: 'https://www.linkedin.com/in/kirahxr'
            },
            {
                name: 'Instagram',
                link: 'https://www.instagram.com/efekrumahkost'
            },
            {
                name: 'Twitter',
                link: 'https://twitter.com/makiraid'
            }
        ]
    },
    {
        id: 8, //increment this value
        name: 'Ammar Annajih Pasifiky',
        image: {uri: 'https://pbs.twimg.com/profile_images/1314051784466296832/WMEMxiDo_400x400.jpg'},
        techStack: 'Javascript, C#, Java, Docker, Node, TypeScript, React, React-Native',
        social: [
            {
                name: 'Github',
                link: 'https://github.com/tejojr'
            },
            {
                name: 'LinkedIn',
                link: 'https://www.linkedin.com/in/zeref-weismann/'
            },
            {
                name: 'Instagram',
                link: 'https://www.instagram.com/zeref.weismann/'
            },
            {
                name: 'Twitter',
                link: 'https://twitter.com/AmmarFiky'
            }
        ]
    },
]
