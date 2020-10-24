const React = require('react');

const ProjectOwner = (props) => {
  return (
    <div id="project-owner">
      <img src={props.owner.iconUrl} className="project-owner-icon"></img>
      <h4 className="project-owner-name">{props.owner.name}</h4>
      <p className="project-owner-backed-created">{props.owner.created} created - {props.owner.backed} backed</p>
      <p className="project-owner-bio">{props.owner.aboutMe}</p>
    </div>
  )
}

export default ProjectOwner;