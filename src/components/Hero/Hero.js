import Slider from '../Slider/Slider';

export default function Hero() {

    const slides = [
        {
            id: 1,
            url: 'https://images.unsplash.com/photo-1665679293513-9f89c2d006e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            linkToPost: '/',
            title:'Квартиры',
            subtitle:'Старого фонда',
            text:'Под ключ'
        },
        {
            id: 2,
            url: 'https://images.unsplash.com/photo-1665689285360-2c67e6084d7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            linkToPost: '/',
            title:'Квартиры',
            subtitle:'Старого фонда',
            text:'Под ключ'
        },
        {
            id: 3,
            url: 'https://images.unsplash.com/photo-1665679293513-9f89c2d006e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            linkToPost: '/',
            title:'Квартиры',
            subtitle:'Старого фонда',
            text:'Под ключ'
        },
        {
            id: 4,
            url: 'https://images.unsplash.com/photo-1665689285360-2c67e6084d7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            linkToPost: '/',
            title:'Квартиры',
            subtitle:'Старого фонда',
            text:'Под ключ'
        }
    ]

        
    return (
        <Slider slides={slides} />
    )
}