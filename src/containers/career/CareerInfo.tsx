import { careerData, careerItemT } from "src/modules";

export const CareerInfo = () => {
    const contentItem = () => {
        const useContents = careerData.filter((value: careerItemT) => value.useYn === true);
        const careerComponents = useContents.map((data: careerItemT) => {
            return (
                <div>
                    {data.title}
                </div >
            )
        })
        return (careerComponents)
    }

    return (
        <>
            <div style={{margin:'4rem 8rem'}}>
                {contentItem()}
            </div>
        </>
    )
}