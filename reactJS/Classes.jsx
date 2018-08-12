class Welcome extends React.Component {
  constructor(props) {
    super(props)
    this.state = {message: 0}
  }
  
  componentDidMount() {
    // Updating state.
    this.setState((prevState, props) => {
      return {message: prevState.message + "!"}
    })
  }
  render() {
    return <div>message: {this.state.message}</div>
  }
}

ReactDOM.render(
  <Welcome message="Hello World!"/>,
  document.getElementById("root")
)