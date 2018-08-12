function Title(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.subheading}</p>
    </div>
  )
}

function Options(props) {
  return (
    <div>
      <div>
        <h2>{props.title}</h2>
        New Only
        <input type="checkbox" checked></input>
      </div>
      <div>
        <br></br>
        Select Type
        <select>
          <option value="type1">{props.type[0]}</option>
          <option value="type2">{props.type[1]}</option>
          <option value="type3">{props.type[2]}</option>
          <option value="type4">{props.type[3]}</option>
        </select>   
      </div>
    </div>
  )
}

function TableRow(props) {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Year</th>
            <th>Model</th>
            <th>Price</th>
            <th>Buy</th>
          </tr>
          <tr>
            <th>{props.year}</th>
            <th>{props.model}</th>
            <th>{props.price}</th>
            <th><button>Buy Now</button></th>
          </tr>
        </tbody>
      </table>
    </div>
  )  
}

function SellingTitle(props) {
  return (
    <div>
      <h2>{props.title}</h2>
    </div>
  )
}

function CarSellingApp(props) {
  return (
  <div>
    <Title title = "Welcome to React Transportation" subheading = "The best place to buy vehicles online"/>
    <Options title = "Choose Options" type = {["All", "Cars", "Trucks", "Convertibles"]}/>
    <SellingTitle title="Cars"/>
    <TableRow year="2013" model="A" price="$32000"/>
    <TableRow year="2011" model="B" price="$4400"/>
    <TableRow year="2016" model="B" price="$15500"/>
      
    <SellingTitle title="Trucks"/>
    <TableRow year="2014" model="D" price="$18000"/>
    <TableRow year="2013" model="E" price="$5200"/>
      
    <SellingTitle title="Convertibles"/>
    <TableRow year="2009" model="F" price="$2000"/>
    <TableRow year="2010" model="G" price="$6000"/>
    <TableRow year="2012" model="H" price="$12500"/>
    <TableRow year="2017" model="M" price="$50000"/>
      
  </div>
  )
}
ReactDOM.render(
  <CarSellingApp/>,
  document.getElementById("root")
)