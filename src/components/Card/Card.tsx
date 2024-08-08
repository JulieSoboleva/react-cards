import './Card.css'

export interface CardProps {
    title: string,
    text: string,
    image?: string,
}

export const Card: React.FC<CardProps> = (props) => {
    const {title, text, image } = props
    return (
        <div className="card">
            {image ? <img src={image} className="card-img-top" alt="..."/> : null}
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{text}</p>
                <a href="#" className="card-btn">Go somewhere</a>
            </div>
        </div>
    );
}