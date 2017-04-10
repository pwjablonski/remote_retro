import React, { Component, PropTypes } from "react"
import * as AppPropTypes from "../prop_types"

class IdeaEditForm extends Component {
  constructor(props) {
    super(props)
    this.state = { ideaBody: props.idea.body }
    this.onChange = this.onChange.bind(this)
    this.onSave = this.onSave.bind(this)
  }

  onChange(event) {
    this.setState({ ideaBody: event.target.value })
  }

  onSave(event) {
    const { idea, retroChannel } = this.props
    const { ideaBody } = this.state
    retroChannel.push("idea_edited", { id: idea.id, body: ideaBody })
  }

  render() {
    return (
      <form className="ui form">
        <div className="field">
          <textarea autoFocus rows="2" value={this.state.ideaBody} onChange={this.onChange}></textarea>
        </div>
        <div className="ui buttons">
          <button className="ui button">Cancel</button>
          <div className="or"></div>
          <button className="ui positive button" onClick={this.onSave}>Save</button>
        </div>
      </form>
    )
  }
}

IdeaEditForm.propTypes = {
  idea: AppPropTypes.idea.isRequired,
  retroChannel: AppPropTypes.retroChannel.isRequired,
}

export default IdeaEditForm
