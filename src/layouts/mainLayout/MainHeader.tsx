import { useNavigate } from "react-router-dom";

export const MainHeader = () => {

    const navigate = useNavigate();

    const handleClickLogo = () => {
        navigate('/', { replace: true });
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