import react from "react";
export default class Student extends react.Component {
  constructor() {
    super();
    this.state = {arr:[{ name: "pranav", marks: 90 },
    { name: "varad", marks: 89 },]};
  }
  arr = [
    { name: "pranav", marks: 90 },
    { name: "varad", marks: 89 },
  ];

   handler(e)
  {
    if(e.target.value=="first")
    {
      document.getElementById("par1").hidden=true;
  
    }
    if(e.target.value=="second")
    {
      document.getElementById("par2").hidden=true;
  
    }

  }

  render() {
    return (
      <>
    
        <div onClick={this.handler}>
        <p  id="par1">{this.arr[0].name}&nbsp; &nbsp;&nbsp;&nbsp;{this.arr[0].marks} 
        &nbsp; &nbsp;&nbsp;&nbsp; <button value="first" className="btn btn-primary">delete</button>
        {}
        </p>
        <p  id="par2" value="second">{this.arr[1].name}&nbsp; &nbsp;&nbsp;&nbsp;{this.arr[1].marks} 
        &nbsp; &nbsp;&nbsp;&nbsp; <button value="second" className="btn btn-primary">delete</button>
        
        </p>
        </div>
      </>
    );
  }
}
