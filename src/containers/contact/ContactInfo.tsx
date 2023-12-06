import styled from "styled-components"

export const ContactInfo = () => {
    return (
        <>
            <div className="center">
                <StyledContactDiv>
                    <h1>Kim Sujin</h1>
                    <br /><br />
                    <h2>김 수 진</h2>
                    <p>1997.04.18</p>
                </StyledContactDiv>
            </div>
        </>
    )
}

const StyledContactDiv = styled.div`
    border: solid 1px #e9e9e9;
    padding: 1rem;
    width: 38rem;
    height:  10rem;
    display:  flex;
    flex-direction: column;
    justify-content: center;
`