import { InstructionTypes } from "@/lib/Commands";

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

const SingleSelectedInstruction = (props: {name: string}) => {

    const style = getColorOfInstruction(props.name)
    return (
        <div 
            className="single-selected-instruction"
            style={style}
            key={Math.random()}
        >
            {props.name}
        </div>
    )
}

export default SingleSelectedInstruction;