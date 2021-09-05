import { Banner, Video } from '../../components/Main'

export const Videos = () => {
    return(
        <>
            <Banner titulo="Vídeos " imagem="images/invencible.jpg"></Banner>

            <h1 className="text-center">Alguns Videos</h1>
            <h4 className="text-center">Alguns videos que uso para escutar repetidas vezes para melhor entender o idioma</h4>

            <div className="container">
                <div className="row">
                    <Video titulo="so for away" video="ALhD2jGWb5k"></Video>

                    <Video titulo="Rocket Raccoon | Somebody Help Me Out" video="7iDu-qOhn-Y"></Video>

                    <Video titulo="Slipknot- Snuff [Legendado]" video="L4tZd_rgRrY"></Video>

                    <Video titulo="Duncan Laurence - Arcade (Loving You Is A Losing Game) [Legendado PT BR]" video="V-eR-5E_K1A"></Video>

                    <Video titulo="i dont enjoy hurting people | Loki [1x01]" video="tT56jWS6zc4"></Video>

                    <Video titulo="Cross The Line| Alfie Solomons- Peaky Blinders| S03-E06|" video="rt8aGh5Juxc"></Video>
                </div>
            </div>
        </>
    )
} 