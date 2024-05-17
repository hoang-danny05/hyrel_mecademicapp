import { Instruction, OneArgCommand, SixArgCommand, ZeroArgCommand } from "@/lib/Commands";
import { getArgsOfInstruction } from "./SingleSelectedInstruction";
import {v4} from 'uuid';

// EACH INSTRUCTION YOU CAN CLICK ON
const SelectableInstruction = (name: string, color: string, appendInstruction : (arg1: Instruction) => void) => {
    const newInstruction: () => Instruction = () => {
        switch (getArgsOfInstruction(name)) {
            case (0) : {
                return {command: name as ZeroArgCommand, key: v4()}
            }
            case (1) : {
                return {command: name as OneArgCommand, arg: 1, key: v4()}
            }
            case (6) : {
                return {command: name as SixArgCommand, args: [0,0,0,0,0,0], key: v4()}
            } 
            default: {
                return {command: "MoveJoints" as SixArgCommand, args: [0,0,0,0,0,0], key: v4()}
            }
        }
    }
    const onChipClicked = (event : React.MouseEvent<HTMLDivElement>) => {
        appendInstruction(newInstruction())
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

export default SelectableInstruction;