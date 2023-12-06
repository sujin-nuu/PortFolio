import { useNavigate } from "react-router-dom";

interface navButtonProps {
    title: string;
    icon?: string;
    url: string;
    content?: string;
}
export const NavButton = (props: navButtonProps) => {
    const { title, icon, url, content } = props;

    const navigate = useNavigate();

    const handleClickLink = () => {
        navigate(url);
    }

    return (
        <>
            <li
                className="mainCard"
                onClick={handleClickLink}
            >
                <div className='top_area'>
                    <span>{title}</span>
                    <p>{content}</p>
                </div>
                <div className='bottom_area'>
                    <p className='detail'>자세히보기 →</p>
                </div>
            </li>
        </>
    )
}