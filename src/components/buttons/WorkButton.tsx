import { workT } from "src/modules";
import styled from "styled-components";

interface workButtonProps {
    key: number;
    workData: workT;
}

export const WorkButton = (props: workButtonProps) => {
    const { key, workData } = props;

    return (
        <>
        
            <li style={{ display: 'inline-flex' , boxShadow: '0px 5px 20px rgba(0, 0, 0, 0.15)' , borderRadius: '1.5rem', margin: '1rem'}} key={key}>
                <StyledButtonContainer>
                    <StyledImgDiv>
                        <img src={workData.imgPath} alt={workData.key + "이미지"} />
                    </StyledImgDiv>
                    <StyledContentsDiv>
                        <h4>{workData.title}</h4>
                        <p>{workData.content}</p>
                    </StyledContentsDiv>
                </StyledButtonContainer>
            </li> 
        </>
    )
}

const StyledButtonContainer = styled.div`
    display: flex;
    width: 28rem;
    height: 20rem;
    justify-content: space-between;
    padding: 2rem;
    cursor: pointer;
`

const StyledImgDiv = styled.div`
    width: 60%;
`

const StyledContentsDiv = styled.div`
    width: 40%;
`