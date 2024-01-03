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

const GroupComponent = (params : GroupProps, index: number) => {
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
            <Collapsible className="bg-slate-600 instruction-group">
                <CollapsibleTrigger asChild className="trigger">
                    <Button variant="default" className="justify-between">
                        <p>{params.group.name}</p>
                        <ChevronDown />
                    </Button>
                </CollapsibleTrigger>
                <CollapsibleContent>
                    MoveJoints(0,0,0,0,0,0) [NOTE: needs to be editable]
                    <br />
                    MoveLinRelWrf(0, 10, 0, 0, 0, 0)
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
            }, 

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