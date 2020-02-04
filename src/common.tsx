import * as React from 'react';
interface Props{
  name: string,
}
interface State {}

class Common extends React.Component<Props, State> {
  render() {
    return(
      <div className="Common">
        {this.props.name}さん。こんにちは。
      </div>
    )
  }
}

export default Common;