import './navabr.scss';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import {useNavigate} from "react-router-dom";
import {Search} from "../searchs/search/Search.jsx";

export const Navbar = () => {

    const navigate = useNavigate();

    return (
        <>
            <div className='header_left'>
                <div className='control'>
                    <span onClick={() => navigate(-1)}><ArrowBackIcon size={24}/></span>
                    <span onClick={() => navigate(-1)}><ArrowForwardIcon size={24}/></span>
                </div>
                <div className='search'>
                    <Search/>
                </div>
            </div>
            <div className='header_right'>
                <div style={{display: "flex", alignItems: "center"}}>
                    <div>
                        <div style={{display: "flex", justifyContent: "space-between"}}>
                            <div>
                                <button type="default" style={{margin: "0px 8px", width: "40px", height: "40px", border: "hidden", borderRadius:"50%"}}>
                                    <AccountCircleOutlinedIcon/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}