import { WorkButton } from "src/components";
import { workList, workT } from "src/modules";

const Work = () => {

    const workData = workList.filter((value: workT) => value.useYn === true);

    return (
        <>
            <div className='yScroll' style={{ width: '100%', display: 'flex', gap: '2rem', margin:'2rem 4rem', overflowX:'hidden', overflowY:'scroll'}}>
                <div style={{ width: '30%' }}>
                    <h2>testttt</h2>
                    <span>전체</span>
                </div>
                <div style={{ width: '70%', marginTop:'2rem' }}>
                    <ul>
                        {
                            workData.map((data: workT) => {
                                return (
                                    <WorkButton
                                        key={data.key}
                                        workData={data} />
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Work;