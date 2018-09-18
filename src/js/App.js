import React, {Component} from "react";
import Routes from './Routes';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import '../styles/main.css';

class App extends Component {

    render() {

        return (
            <main className="dn--site-wrapper">
                {/*<Header/>*/}
                    <Routes/>
                {/*<Footer/>*/}
            </main>
        );
    }
}

export default App;