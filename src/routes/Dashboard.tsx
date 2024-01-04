import { 
    Collapsible, 
    CollapsibleContent, 
    CollapsibleTrigger 
} from "@/components/ui/collapsible"
//i think i changed @/ to a different path, please check
import { ChevronDown } from "lucide-react"
import "./Dashboard.css"
import { Button } from "@/components/ui/button"
import { useState, useRef } from "react"
import { Component, InstructionGroup, Instruction } from "@/lib/Commands"

type GroupProps = {
    group: InstructionGroup, 
    draggedRef: React.MutableRefObject<number>, 
    draggedOverRef: React.MutableRefObject<number>, 
    Handler:any
};

const formatCoordinates = (nums: Array<number>) => {
    if (nums.length === 1)
        return nums
    return nums.map((num, i) => i === 5? num : `${num}, `)
}

//this boi should be nested so its a closure
const GroupComponent = (params : GroupProps, index: number) => {

    const InstructionComponent = (instr: Instruction, jndex: number) => {
        return (
            //check if JSON stringify is good or not (it probably isn't)
            <div className="instruction bg-slate-700 rounded flex flex-col justify-start" key={JSON.stringify(instr) + jndex}>
                <p>{instr.command}</p>
                {instr.parameters ? <p>{formatCoordinates(instr.parameters)}</p> : null}
            </div>
        )
    }

    return (
        <div
            draggable 
            //start dragging me? i store myself in dragGroup
            onDragStart={() => params.draggedRef.current = index}
            //hover over me? i store myself in OnDragEnter
            onDragEnter={() => params.draggedOverRef.current = index}
            //rearrange everything once the person stops dragging
            onDragEnd={params.Handler}
            //you don't do the default event
            onDragOver={(e) => e.preventDefault()}
        >
            {/* ew key  */}
            <Collapsible className="bg-slate-600 instruction-group" key={JSON.stringify(params.group)}>
                <CollapsibleTrigger asChild className="trigger">
                    <Button variant="default" className="justify-between">
                        <p>{params.group.name}</p>
                        <ChevronDown />
                    </Button>
                </CollapsibleTrigger>
                <CollapsibleContent>
                    {params.group.steps.map(InstructionComponent)}
                    {/* MoveJoints(0,0,0,0,0,0) [NOTE: needs to be editable]
                    <br />
                    MoveLinRelWrf(0, 10, 0, 0, 0, 0) */}
                </CollapsibleContent>
            </Collapsible>
        </div>
    )
}

const Dashboard = () => {
    const [component, setComponent] = useState({
        name: "SOIC16",
        groups: [
            {
                name: "pressButton", 
                steps: [
                    {
                        command: "ActivateRobot",
                        parameters: undefined,
                    },
                    {
                        command: "MoveJoints",
                        parameters: [90, 0, 0, 0, 0, 0]
                    },
                    {
                        command: "SetCartLinVel",
                        parameters: [100]
                    }
                ]
            }, 
            {
                name: "grapComponent", 
                steps: [
                    {
                        command: "MoveJoints",
                        parameters: [49.0655, 123.34234, 164.2309, 12, 32.3452, 12.90238]
                    },
                    {
                        command: "MoveLinRelWRF",
                        parameters: [0, 0, -10, 0, 0, 0]
                    }
                ]
            }

        ]
    } satisfies Component
    )
    const draggedGroup = useRef<number>(0);
    const draggedOverGroup = useRef<number>(0);

    function HandleGroup() {
        const groupClone = [...component.groups];
        [groupClone[draggedGroup.current], groupClone[draggedOverGroup.current]] = [groupClone[draggedOverGroup.current], groupClone[draggedGroup.current]]
        setComponent({
            name: component.name,
            groups: groupClone
        })
    }

    const passedInfo: Array<GroupProps> = component.groups.map((self) => {
        return {
            group: self,
            //use closures to remove this ugly code
            draggedRef: draggedGroup,
            draggedOverRef: draggedOverGroup,
            Handler: HandleGroup
        }
    })
    return (
        <>
            <h1>Instruction Dashboard</h1>
            <div className="dash">
                {/* we might want card for the header-content collection */}
                <div className="instructions flex flex-col bg-slate-600">
                    <div className="title bg-gray-800">
                        Instructions for {component.name}
                    </div>
                    {
                    [passedInfo.map(GroupComponent)]}
               </div>
            </div>
        </>
    )
}

export default Dashboard