import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Hobies} from './pages/Hobies'
import { Home } from './pages/Home'
import { Videos } from './pages/Videos'
import {Curriculo} from './pages/Curriculo'

import { Header, Footer } from './components/Main'

export const Router = () => {
    return(
        <BrowserRouter>
            <Header></Header>
            <Switch>
                <Route path={['/','/home']} exact component={Home}></Route>
                <Route path='/Hobies' component={Hobies}></Route>
                <Route path='/videos' component={Videos}></Route>
                <Route path='/curriculo' component={Curriculo}></Route>
            </Switch>
            <Footer></Footer>
        </BrowserRouter>
    )
}