import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import WorkSpace from '../components/workSpace/WorkSpace';
import Header from '../components/header/Header';
import NotFoundPage from '../components/pages/NotFoundPage';
import EditCardModal from '../components/workSpace/EditCardModal';
import ToolBar from '../components/toolBar/ToolBar';

const AppRouter = () => {
    return (
        
            <BrowserRouter>
                <Header />
                <ToolBar />
                <Switch>
                    <Route path='/' component={WorkSpace} exact={true} />
                    <Route path='/edit/:id' component={EditCardModal} />
                    <Route path='*' component={NotFoundPage} />
                </Switch>
            </BrowserRouter>


        

    );

}
export default AppRouter;