import './sideBarLeft.scss';
import {NavLink, useNavigate} from "react-router-dom";
import logo from '../../../assets/logo.svg';
import {SideBarMenu} from "../menu/SideBarMenu.jsx";
export const SideBarLeft = () => {
    const navigate = useNavigate();
    return (
        <div className='left'>
            <div onClick={()=> navigate("")} className='logo'>
                <img src={logo ? logo : ""} alt="Logo" className='img_logo'/>
            </div>
            <div className='nav_menu'>
                {SideBarMenu.map(item =>(
                        <NavLink to={item.path} className={'nav_menu_items'} key={item.path}>
                            {item.icons}
                            <span style={{fontWeight: 'bold',fontSize: '14px'} }>{item.text}</span>
                        </NavLink>
                ))}
            </div>
        </div>
    )
}