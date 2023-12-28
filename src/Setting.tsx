import React from 'react'
import './App.css'

type SettingProps<T> = {
    uniqueID: string,
    name: string,
    setValue: React.Dispatch<React.SetStateAction<T>>
}

/**
 * A setting that lets the user input a string as a setting
 * @param props requires an ID, name, and a set function from setState()
 * @returns the setting element
 */
function Setting(props: SettingProps<string>): React.JSX.Element {
    return (
        <div className="setting">
            <label htmlFor={props.uniqueID}>{props.name}</label>
            <input type="text" id={props.uniqueID} 
            onChange={
                (event: React.ChangeEvent<HTMLInputElement>) => {
                    props.setValue(event.target.value)
                }
            }/>
        </div>
    )
}

function IntSetting(props: SettingProps<number>): React.JSX.Element {
    return (
        <div className="setting">
            <label htmlFor={props.uniqueID}>{props.name}</label>
            <input type="text" id={props.uniqueID} 
            onChange={
                (event: React.ChangeEvent<HTMLInputElement>) => {
                    props.setValue(Number.parseInt(event.target.value))
                }
            }/>
        </div>
    )
}
// function numberInput()

export default Setting
export { IntSetting }