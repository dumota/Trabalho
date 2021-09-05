import {Banner} from '../../components/Main'

export const Home = () => {
    return(
        <>
            <Banner titulo="Página Principal - Ramones" imagem="images/homelander.jpg"></Banner>
            <h1 className="text-center">Home</h1>
            <h5 className="container">Este site é voltado a coisas que eu gosto , um pequeno blog,
                falando sobre meus hobies e gostos ,espero que se divirta e descubra algo em comum! :).
            </h5>
        </>
    )
}