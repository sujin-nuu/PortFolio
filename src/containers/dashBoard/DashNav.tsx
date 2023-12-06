import { NavButton } from "src/components"
import styled from "styled-components"

export const DashNav = () => {

    const titleButtonData = [
        {
            title: 'Career',
            url: '/career',
            content: '경력사항을 확인하세요.'
        },
        {
            title: 'Skills',
            url: '/skills',
            content: '사용가능한 기술을 확인하세요.'
        },
        {
            title: 'Work',
            url: '/work',
            content: '제작한 작업물을 확인하세요.'
        },
        {
            title: 'Contact',
            url: '/contact',
            content: '관심있으시면 확인해주세요 :)'
        }
    ]

    return (
        <>
            <div style={{ margin: '2rem 0px 2rem 1rem' }}>
                <h2>Check About Me :)</h2>
            </div>
            <div style={{ width: 560, height: 560 }}>
                <ul style={{ display: 'flex', flexWrap: 'wrap', listStyle: 'none' }}>
                    {titleButtonData.map((data: any) => {
                        return (
                            <NavButton title={data.title} url={data.url} content={data.content} />
                        )
                    })}
                </ul>
                <StyledCopyrightDiv>
                    <StyledCopyrightTxt>
                        COPYRIGHT © 2023 KIM SUJIN. ALL RIGHTS RESERVED
                    </StyledCopyrightTxt>
                </StyledCopyrightDiv>
            </div>
            <div>
            </div>
        </>
    )
}

const StyledCopyrightDiv = styled.div`
    margin-left: 0.5rem;
    padding-left: 0.3rem;
    padding-top:0.5rem;
    margin-top: 0.5rem;
    border-top: 1px solid #e6e6e6;
`

const StyledCopyrightTxt = styled.p`
    color: #747474;
    font-size: 0.8rem;
`