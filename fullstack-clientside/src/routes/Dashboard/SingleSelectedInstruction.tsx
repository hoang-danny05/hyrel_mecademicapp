import { Instruction, InstructionTypes, OneArgumentInstruction, SixArgumentInstruction } from "@/lib/Commands";
import { ListOfArgTypes } from "@/lib/Commands";
import { useState } from 'react'

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

const ArgumentBoxes = (props: SingleSelectedProps) => {
    switch (getArgsOfInstruction(props.instr.command)) {
        case (0) : {
            return (<></>)
        }
        case (1) : {
            return (
                <div className="inputs">
                    <input 
                        type="number" 
                        id="input-0" 
                        value={(props.instructionOrder[props.index] as OneArgumentInstruction).arg} 
                        onChange={e => props.updateOneArg(props.index, Number.parseFloat(e.target.value))}
                    />
                </div>
            ) 
        }
        case (6) : {
            return (
                <div className="inputs">
                    {
                        [0, 1, 2, 3, 4, 5].map(argsIndex => (
                            <input 
                            //implement min/max?
                                type="number" 
                                className={`index-${argsIndex}`}
                                value={(props.instructionOrder[props.index] as SixArgumentInstruction).args[argsIndex]}
                                onChange={e => props.updateSixArg(props.index, argsIndex, Number.parseFloat((e.target as HTMLInputElement).value))}
                            />
                        ))
                    }
                </div>
            );
        }
        default : {
            return <b>ERROR</b>
        }
    }
}

type SingleSelectedProps = {
    instr: Instruction, 
    index: number, 
    instructionOrder: Array<Instruction>,
    updateOneArg: (index: number, newArg: number) => void,
    updateSixArg: (index: number, argsIndex: number, newVal: number) => void,
    removeInstr: (hmm : number) => void,
};
const SingleSelectedInstruction = (props: SingleSelectedProps) => {

    const style = getColorOfInstruction(props.instr.command)
    return (
        <li 
            className={`single-selected-instruction ${getCSSClass(props.instr.command)}`}
            style={style}
            key={Math.random()}
            onClick={event => console.log(getArgsOfInstruction((event.target as HTMLDivElement).innerText))}
        >
            {props.instr.command}
            {
                ArgumentBoxes(props)
            }
            <button className="ico-times" onClick={event => props.removeInstr(props.index)}></button>
        </li>
    )
}

export default SingleSelectedInstruction;