import { InstructionTypes } from "@/lib/Commands";
import { ListOfArgTypes } from "@/lib/Commands";

type StringToStyle = (arg1: string) => {innerColor:string, borderColor:string};

//i could literally just return type InstructionType
const getColorOfInstruction : StringToStyle = (instruction_name : string) => {
    let style = {innerColor:"#444", borderColor:"#FFF"}
    InstructionTypes.forEach((instr_type) => {
        instr_type.instructions.some(instr => instruction_name == instr) ?
            style = {
                innerColor: instr_type.innerColor, 
                borderColor: instr_type.borderColor
            } : null;
    })
    return style;
}

type instrToArgs = (arg1: string) => number
const getArgsOfInstruction : instrToArgs = (instruction_name : string) => {
    let returnValue = 100;
    ListOfArgTypes.forEach(ArgTypeList => {
        ArgTypeList.list.some((instr) => instr == instruction_name) ?
            returnValue = ArgTypeList.numArgs : null
    })
    return returnValue;
}

const SingleSelectedInstruction = (props: {name: string}) => {

    const style = getColorOfInstruction(props.name)
    return (
        <div 
            className="single-selected-instruction"
            style={style}
            key={Math.random()}
            onClick={event => console.log(1)}
        >
            {props.name}
        </div>
    )
}

export default SingleSelectedInstruction;