// Fully written out version.
function Feature(props) {
  if (props.active == true) {
    return <h1>This feature is active</h1>
  }
  else {
    return <h1>This feature is not active</h1>
  }
}

// Inline version.
function Feature(props) {
  return <h1>This feature is {props.active? "active" : "not active"}</h1>
}

// Prevent rendering.
function Feature(props) {
  if (props.active) {
      return null
      }
  else {
      return <h1>{props.message}</h1>
      }
}
      
ReactDOM.render(
  <Feature active = {false} message = "Hello World!"/>,
  document.getElementById("root")
)