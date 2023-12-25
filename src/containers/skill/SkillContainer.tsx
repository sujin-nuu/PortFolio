import { skillData, skillItemT } from "src/modules";

export const SkillContainer = () => {
    const skillItem = () => {
        const useContents = skillData.filter((value: skillItemT) => value.useYn === true);
        const skillItemData = useContents.map((data: skillItemT) => {
            return (
                <div>
                    {data.title}
                </div >
            )
        })
        return (skillItemData)
    }

    return (
        <>
            {skillItem()}
        </>
    )
}