import React from 'react';
import {observer} from 'mobx-react';
import exampleStore from '../../store/ExampleStore'

@observer
class Stage extends React.Component {

    componentDidMount() {
        let interval = setInterval(() => {
            if (exampleStore.test > 1) {
                exampleStore.test--;
            }
            else {
                exampleStore.test = 'Getting started';
                clearInterval(interval);
            }
        }, 1000);
    }

    render() {
        return (
            <div className="dn--stage">
                <div className="dn--stage__content">
                    <h1>React & MobX</h1>
                    <h2>Lightweight, easy and powerful</h2>
                    <a href="#" title="" className="dn--button dn--button__cta">
                        {exampleStore.test}
                    </a>
                </div>
            </div>
        );
    }
}

export default Stage;