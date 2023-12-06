import { useNavigate } from "react-router-dom";

export const DashHeader = () => {

    const navigate = useNavigate();

    const handleClickLogo = () => {
        navigate('/');
    }

    return (
        <>
            <div className="header-div">
                <p className="logo" onClick={handleClickLogo}>SUJIN</p>
                <div></div>
            </div>
        </>
    )
}