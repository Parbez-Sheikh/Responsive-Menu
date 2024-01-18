
import { Outlet } from 'react-router-dom'
import Header from '../Components/Header';
import Home from '../Pages/Home';

const LayoutOne = () => {
    return (
        <div>
            <Header></Header>
            <Home></Home>
            <Outlet></Outlet>
           
        </div>
    );
};

export default LayoutOne;