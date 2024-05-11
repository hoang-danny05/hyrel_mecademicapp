import "./Dashboard.css"
import { FC, useState, useRef } from 'react'
import { InstructionTypes } from "@/lib/Commands"
import SingleSelectedInstruction from "./Dashboard/SingleSelectedInstruction"

// EACH INSTRUCTION YOU CAN CLICK ON
const InstructionChip = (name: string, color: string, appendInstruction : (arg1: string) => void) => {
    const onChipClicked = (event : React.MouseEvent<HTMLDivElement>) => {
        appendInstruction((event.target as HTMLDivElement).innerText)
    }

    return (
        <div 
            className="instruction-chip" 
            style={{borderLeft: `1rem solid ${color}`}}
            onClick={onChipClicked}
            key={name}
        >
            {name}
        </div>
    )
}

const Dashboard : FC = () => {
    const [instructionOrder, setInstructionOrder] = useState<Array<string>>([])
    const appendInstruction = (newInstruction : string) => {
        setInstructionOrder([...instructionOrder, newInstruction])
    }
    const refs = InstructionTypes.map(_ => useRef<HTMLDivElement>(null));

    return (
        <div className="dash">
            <div className="instruction-types">
            {
                // THE GROUPS OF INSTRUCTIONS YOU CAN DO
                InstructionTypes.map((item, index : number) => (
                    <div 
                        className="single-instruction-type"
                        style={{backgroundColor: item.innerColor, boxShadow: `0 .5rem ${item.borderColor}`}}
                        key={item.type}
                        onClick={() => {refs[index].current!.scrollIntoView(); window.scroll(0, 0)}}
                    >
                        <p>{item.type}</p>
                    </div>
                )
            )
            }
            </div>
            <div className="instruction-menu">
                {
                    // THE MENU OF ALL OF THE INSTRUCTIONS YOU CAN CHOOSE
                    InstructionTypes.map((instruction_type, index: number) => {
                        return (
                            <>
                                <h2 ref={refs[index]} key={`${Math.random()}X`}>{instruction_type.type}</h2>
                                {instruction_type.instructions.map(
                                    (instruction_name) =>
                                        InstructionChip(instruction_name, instruction_type.innerColor, appendInstruction)
                                )}
                            </>
                        )
                    })
                }
                <div className="large-space">test mf</div>
            </div>
            {/* this element stores the current selected instructions */}
            <div className="instruction-order">
                {
                    // THE CURRENT SELECTED INSTRUCTIONS
                    instructionOrder.map((instr) => (
                        SingleSelectedInstruction({name: instr})
                    ))
                }
            </div>
        </div>
    )
}

export default Dashboard;

