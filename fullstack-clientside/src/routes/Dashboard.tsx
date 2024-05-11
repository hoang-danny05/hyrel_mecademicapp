import "./Dashboard.css"
import { FC, useState, useRef } from 'react'
import { InstructionTypes, Instruction } from "@/lib/Commands"
import SingleSelectedInstruction from "./Dashboard/SingleSelectedInstruction"
import SelectableInstruction from "./Dashboard/SelectableInstruction"

const Dashboard : FC = () => {
    const [instructionOrder, setInstructionOrder] = useState<Array<Instruction>>([])
    const appendInstruction = (newInstruction : Instruction) => {
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
                            <div key={instruction_type.type} className="instruction-submenu">
                                <h2 ref={refs[index]} key={`${Math.random()}X`}>{instruction_type.type}</h2>
                                {instruction_type.instructions.map(
                                    (instruction_name) =>
                                        SelectableInstruction(instruction_name, instruction_type.innerColor, appendInstruction)
                                )}
                            </div>
                        )
                    })
                }
                <div className="large-space" key={"urmom"}></div>
            </div>
            {/* this element stores the current selected instructions */}
            <div className="instruction-order">
                {
                    // THE CURRENT SELECTED INSTRUCTIONS
                    instructionOrder.map((instr, idx) => (
                        SingleSelectedInstruction(
                            {instr: instr, index: idx}
                        )
                    ))
                }
            </div>
        </div>
    )
}

export default Dashboard;

