import React from "react";

export class Buttons extends React.Component {
    render() {
        return(
            <div>
                {
                    this.props.technologies.map((tech, i) => {
                        return (
                            <button
                                key={i}
                                data-tech={tech}
                                onClick={this.props.dispatchTechChange}
                            >
                                {tech}
                            </button>
                        )
                    })
                }
            </div> 
        )
    }
}