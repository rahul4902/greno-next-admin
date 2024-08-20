import React from 'react';

const ProjectTable = ({ projects }) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Project Name</th>
                    <th>Hours</th>
                    <th>Priority</th>
                    <th>Members</th>
                    <th>Progress</th>
                </tr>
            </thead>
            <tbody>
                {projects.map((project, index) => (
                    <tr key={index}>
                        <td>
                            <div className="d-flex align-items-center">
                                <div>
                                    <div className={`icon-shape icon-md border p-4 rounded-1 ${project.brandLogoBg}`}>
                                        <img src={project.brandLogo} alt={project.projectName} />
                                    </div>
                                </div>
                                <div className="ms-3 lh-1">
                                    <h5 className="mb-1">
                                        <a href="#" className="text-inherit">{project.projectName}</a>
                                    </h5>
                                </div>
                            </div>
                        </td>
                        <td>{project.hours}</td>
                        <td><span className={`badge bg-${project.priorityBadgeBg}`}>{project.priority}</span></td>
                        <td>
                            <div className="avatar-group">
                                {project.members.map((member, memberIndex) => (
                                    <span className="avatar avatar-sm" key={memberIndex}>
                                        <img alt="avatar" src={member.image} className="rounded-circle" />
                                    </span>
                                ))}
                                <span className="avatar avatar-sm avatar-primary">
                                    <span className="avatar-initials rounded-circle fs-6">+5</span>
                                </span>
                            </div>
                        </td>
                        <td className="text-dark">
                            <div className="float-start me-3">{project.progress}%</div>
                            <div className="mt-2">
                                <div className="progress" style={{ height: '5px' }}>
                                    <div
                                        className="progress-bar"
                                        role="progressbar"
                                        style={{ width: `${project.progress}%` }}
                                    ></div>
                                </div>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ProjectTable;
