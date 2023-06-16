import "./LeavesCard.css"
import JobInfo from "./jobs/JobInfo"

export default function LeavesCard({ jobName, photo }) {
    return (
        <div className="leave-card">
            <div className="cardBx">
                <img src={photo} alt="job_photo"/>
                <div className="infoBx">
                    <h1 className="job-name">{jobName}</h1>
                    <JobInfo jobInfo={jobName}/>
                </div>
            </div>
        </div>
    )
}