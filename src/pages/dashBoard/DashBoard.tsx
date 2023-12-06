import { DashInfo, DashNav } from "src/containers";

const DashBoard = () => {
    return (
        <>
            <div className="mainInfo">
                <div style={{ width: '60%', height: '100%' }}>
                    <DashInfo />
                </div>
                <div style={{ width: '40%', height: '100%', paddingTop: '3rem' }}>
                    <DashNav />
                </div>
            </div>
        </>
    )
}

export default DashBoard;