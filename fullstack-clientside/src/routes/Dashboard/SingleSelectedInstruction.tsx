import { Instruction, InstructionTypes } from "@/lib/Commands";
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
export const getArgsOfInstruction : instrToArgs = (instruction_name : string) => {
    let returnValue = 100;
    ListOfArgTypes.forEach(ArgTypeList => {
        ArgTypeList.list.some((instr) => instr == instruction_name) ?
            returnValue = ArgTypeList.numArgs : null
    })
    return returnValue;
}

type instrToClass = (arg1: string) => string
const getCSSClass : instrToClass = (instruction_name : string) => {
    switch(getArgsOfInstruction(instruction_name)) {
        case(0) : {
            return "ZeroArgs"
        }
        case(1) : {
            return "OneArg"
        }
        case(6) : {
            return "SixArgs"
        }
        default : {
            return "InvalidArgError"
        }
    }
}

const ArgumentBoxes = (instruction_name : string) => {
    switch (getArgsOfInstruction(instruction_name)) {
        case (0) : {
            return (<></>)
        }
        case (1) : {
            return (
                <div className="inputs">
                    <input type="number" id="input-0" />
                </div>
            ) 
        }
        case (6) : {
            return (
                <div className="inputs">
                    <input type="number" id="input-1" />
                    <input type="number" id="input-2" />
                    <input type="number" id="input-3" />
                    <input type="number" id="input-4" />
                    <input type="number" id="input-5" />
                    <input type="number" id="input-6" />
                </div>
            );
        }
        default : {
            return <b>ERROR</b>
        }
    }
}

const SingleSelectedInstruction = (props: {instr: Instruction, index: number}) => {

    const style = getColorOfInstruction(props.instr.command)
    return (
        <div 
            className={`single-selected-instruction ${getCSSClass(props.instr.command)}`}
            style={style}
            key={Math.random()}
            onClick={event => console.log(getArgsOfInstruction((event.target as HTMLDivElement).innerText))}
        >
            {props.instr.command}
            {
                ArgumentBoxes(props.instr.command)
            }
        </div>
    )
}

export default SingleSelectedInstruction;