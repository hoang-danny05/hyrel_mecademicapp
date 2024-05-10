import "./Dashboard.css"
import { FC } from 'react'
import { InstructionTypes, MovementInstructions, Requests, ControlInstructions, SetupInstructions } from "@/lib/Commands"

const InstructionChip = (name: string, color: string) => {
    return (
        <div className="instruction-chip" style={{backgroundColor: color}}>
            {name}
        </div>
    )
}

const Dashboard : FC = () => {
    return (
        <div className="dash">
            <div className="instruction-types">
            {
                InstructionTypes.map((item) => (
                    <div 
                        className="single-instruction-type"
                        style={{backgroundColor: item.innerColor, boxShadow: `0 .5rem ${item.borderColor}`}}
                    >
                        <p>{item.type}</p>
                    </div>
                )
            )
            }
            </div>
            <div className="instruction-menu">
                {}
            </div>
            {/* this element stores the current selected instructions */}
            <div className="instruction-order"></div>
        </div>
    )
}

export default Dashboard;