function Circle(props) {
  // Function that defines and draws a circle, and its style.
  var style = {
    backgroundColor: "white",
    border: "1px solid black",
    borderRadius: "100%",
    paddingTop: "98%",
  }
  return (
    <div style = {style}></div>
  )
}

function Cell(props) {
  // Function that defines the properties of a single cell.
  var style = {
    height: 50,
    width: 50,
    border: "1px solid black",
    backgroundColor: "yellow",
  }
  return (
    <div style={style}>
      <Cell/>
    </div>
  )
}

function Row(props) {
  
}

// Render the react DOM.
ReactDOM.render(
  <Circle/>,
  document.getElementById('root')
)
