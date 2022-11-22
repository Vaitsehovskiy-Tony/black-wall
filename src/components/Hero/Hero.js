export default function Hero({mainPageData}) {

    const hero = mainPageData.hero;
        
    return (
        <section className="hero">
            <picture className="hero__bg">
                <source media="(max-width: 991px)" src={'http://localhost:1337/uploads/Rectangle_4276_77953d2707.png'}/>
                <img className="hero__bg-img" src={'http://localhost:1337/uploads/Rectangle_4276_77953d2707.png'} alt="Hero photo"/>
            </picture>
            <div className="hero__content">
                <h2 className="hero__description">{hero.description}</h2>
                <h1 className="hero__title">{hero.title}</h1>
            </div>
            <div className="hero__overlay"></div>
        </section>
    )
}