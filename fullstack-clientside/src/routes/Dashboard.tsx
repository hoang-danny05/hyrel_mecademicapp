import "./Dashboard.css"
import { Reorder } from "framer-motion"
import { v4 as uuidv4 } from 'uuid';
import { FC, useState, useRef } from 'react'
import { InstructionTypes, Instruction, OneArgumentInstruction, SixArgumentInstruction } from "@/lib/Commands"
import SingleSelectedInstruction from "./Dashboard/SingleSelectedInstruction"
import SelectableInstruction from "./Dashboard/SelectableInstruction"

const PORT = 8080;

const Dashboard : FC = () => {
    const [instructionOrder, setInstructionOrder] = useState<Array<Instruction>>([])
    const [IPAddress, setIPAddress] = useState<string>("127.0.0.1")

    const appendInstruction = (newInstruction : Instruction) => {
        setInstructionOrder([...instructionOrder, newInstruction])
    }

    const updateOneArgInstruction = (index: number, newArg: number ) => {
        let copyOfInstr = Array.from(instructionOrder);
        (copyOfInstr[index] as OneArgumentInstruction).arg = newArg;
        setInstructionOrder(copyOfInstr);
    }

    const updateSixArgInstruction = (index: number, argsIndex: number, newVal : number) => {
        let copyOfInstr = Array.from(instructionOrder);
        (copyOfInstr[index] as SixArgumentInstruction).args[argsIndex] = newVal;
        setInstructionOrder(copyOfInstr);
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
            {/* <div className="instruction-order">
                {
                    // THE CURRENT SELECTED INSTRUCTIONS
                    instructionOrder.map((instr, idx) => (
                        SingleSelectedInstruction(
                            {
                                instr: instr, 
                                index: idx,
                                instructionOrder: instructionOrder,
                                updateOneArg: updateOneArgInstruction,
                                updateSixArg : updateSixArgInstruction,
                            }
                        )
                    ))
                }
            </div> */}

            <Reorder.Group as="div" className="instruction-order" axis="y" values={instructionOrder} onReorder={setInstructionOrder}>
                {
                    // THE CURRENT SELECTED INSTRUCTIONS
                    instructionOrder.map((instr, idx) => (
                        <Reorder.Item as="div"  key={instr.key} value={instr}>
                            {SingleSelectedInstruction(
                            {
                                instr: instr, 
                                index: idx,
                                instructionOrder: instructionOrder,
                                updateOneArg: updateOneArgInstruction,
                                updateSixArg : updateSixArgInstruction,
                            }
                        )}
                        </Reorder.Item>
                        
                    ))
                }
            </Reorder.Group>






            <div className="console">
                <div className="console-buttons">
                    <button onClick={_ => console.log(instructionOrder)}>echo instructions</button>
                    <button onClick={_ => alert(1)}>template</button>
                    <button onClick={_ => alert(1)}>Send Instructions</button>
                    <label htmlFor="ip-address">IP:</label>
                    <input value={IPAddress} onChange={e => setIPAddress(e.target.innerText)} id="ip-address"/>
                </div>
                <div className="console-recieved">
                    <textarea name="robot-recv" id="robot-recv"></textarea>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;

