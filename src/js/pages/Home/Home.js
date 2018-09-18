import React from 'react';
import {observer} from 'mobx-react';
import Stage from '../../components/Stage/Stage';
import Forkme from '../../components/Forkme/Forkme';

@observer
class Home extends React.Component {

    render() {
        return(
            <div className="dn--home">
                <Stage/>
                <Forkme/>
            </div>
        );
    }
}

export default Home;