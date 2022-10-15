export default function HeaderContact() {

    const contact = {
            title: '8 (921) 786-53-35',
            link: '+79217865335'
    }

    return (
        <a className="header__contact" href={`tel:${contact.link}`}>{contact.title}</a>
    )
}