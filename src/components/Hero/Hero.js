import Slider from '../Slider/Slider';

export default function Hero() {

    const slides = [
        {
            id: 1,
            url: 'https://blwall.art/wp-content/uploads/2020/12/091a1640-1536x1024.jpg',
            linkToPost: '/',
            title:'Квартиры',
            subtitle:'Старого фонда',
            text:'Под ключ'
        },
        {
            id: 2,
            url: 'https://blwall.art/wp-content/uploads/2021/11/kuhnya-gostinaya-2-edited.jpg',
            linkToPost: '/',
            title:'Квартиры',
            subtitle:'Старого фонда',
            text:'Под ключ'
        },
        {
            id: 3,
            url: 'https://blwall.art/wp-content/uploads/2022/08/091a9021-1536x1024.jpg',
            linkToPost: '/',
            title:'Квартиры',
            subtitle:'Старого фонда',
            text:'Под ключ'
        },
        {
            id: 4,
            url: 'https://blwall.art/wp-content/uploads/2020/12/091a1678-1536x1024.jpg',
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