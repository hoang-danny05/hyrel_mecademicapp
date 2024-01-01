import "../App.css"
import "./Grid.css"
import { Button } from "@/components/ui/button"

const Grid = () => {
    return (
        <>
        <Button>test</Button>
        <h1>This is the grid thing</h1>
        <div className="robot_layout">
            <div className="space">empty</div>
            <div className="space">test</div>
            <div className="space">test</div>
            <div className="space">hakko</div>
            <div className="space">robot</div>
            <div className="space">empty</div>
            <div className="space">empty</div>
            <div className="space">feeders</div>
            <div className="space">empty</div>
        </div>
        </>
    )
}

export default Grid