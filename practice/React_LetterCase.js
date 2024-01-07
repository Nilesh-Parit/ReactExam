import {useState} from "react";

export default function Case()
{
    const [original, setOriginal] = useState();
    const [state, setState] = useState();

    function ChangeCase()
    {
        let str = document.getElementById("str").value;
        setOriginal(str);
                let op =  document.getElementById("case").value;
                let result;
                switch(op)
                    {
                        case 'up':  result = "";
                                    result = str.toUpperCase();
                                    setState(result);
                                    break;
                        case 'low': result = "";
                                    result = str.toLowerCase();
                                    setState(result);
                                    break;
                        case 'title': result = "";
                                      result = (str.charAt(0)).toUpperCase() + (str.substr(1)).toLowerCase();
                                      setState(result);
                                      break;
                        case 'camel': const temp = str.split(" ");
                                      result = "";
                                        temp.forEach(element => {
                                            result = result + (element.charAt(0)).toUpperCase() + (element.substr(1)).toLowerCase()+" ";
                                        });
                                      setState(result);
                                      break;
                    }
    };
    return(
        <><br/><br/><br/><br/>
        <div Align="center" border="0">
        <fieldset><legend><b>Word Case</b></legend>
        Enter String : <input type="text" id="str"/><br/><br/>
        Select Case :
        <select id="case">
            <option value={"none"}>Select Case</option>
            <option value={"up"}>Upper Case</option>
            <option value={"low"}>Lower Case</option>
            <option value={"title"}>Title Case</option>
            <option value={"camel"}>Camel Case</option>
        </select><br/><br/>
        <button type="submit" onClick={ChangeCase}> Result</button><br/>
    <p><b>Original String : </b>{original}</p>
    <p><b>New String : </b>{state}</p>
    </fieldset>
    </div></>
    )
}