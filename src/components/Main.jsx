import { Link } from 'react-router-dom'

export const Header = () => {
    return(
        <>
            <nav className="navbar navbar-expand-lg color" >
                <Link to={'/home'}className="navbar-brand">
                    <img  className="logo" src="images/logo.png" alt="logo" />
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div id="menu" className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to={'/'} className="nav-link">Home</Link>
                        </li>
                        <li>
                            <Link to={'/hobies'} className="nav-link">Hobies</Link>
                        </li>
                        <li>
                            <Link to={'/videos'} className="nav-link">Vídeos</Link>
                        </li>
                        <li>
                            <Link to={'/curriculo'} className="nav-link">Curriculo</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}


export const Footer = () => {
    return(
        <>
            <footer className="text-center foot">
                <p>Desenvolvido por Eduardo Mota</p>
            </footer>
        </>
    )
}

export const Banner = props => {
    return(
        <>
            <div id="banner">
                <img src={props.imagem} alt={props.titulo} title={props.titulo} className="w-100" />
            </div>
        </>
    )
}

export const Video = props => {
    return (
        <>
            <div className="col-12 col-md-4">
                <div className="card">
                    
                    <iframe width="100%" height="320"
                    src={`https://youtube.com/embed/${props.video}`}></iframe>

                    <div className="card-body">
                        <h3>{props.titulo}</h3>
                    </div>
                </div>
            </div>
        </>
    )
}