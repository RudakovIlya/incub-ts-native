import React, {ChangeEvent, MouseEvent} from "react";
import {GovernmentBuildingsType, HouseType} from "../02_lesson-object/02_02";

export const getStreetsTitlesOfGovernmentsBuildings = (buildings: Array<GovernmentBuildingsType>) => {
    return buildings.map((b) => b.address.street.title);
}

export const getStreetsTitlesOfHouses = (houses: Array<HouseType>) => {
    return houses.map((h) => h.address.street.title);
}

export const createMessages = (houses: Array<HouseType>) => {

    const callback = (h: HouseType) => {
        debugger
        return `Hello guys from ${h.address.street.title}`
    }
    const newArr = houses.map(callback);

    return newArr
}

export const User = () => {

    const saveUser = (e: MouseEvent<HTMLButtonElement>) => {
        alert(e.currentTarget.name)
    }
    const nameChanged = (event: ChangeEvent<HTMLTextAreaElement>) => {
        console.log(event.currentTarget.value)
    }
    return (
        <div>
            Dimych
            <textarea onBlur={nameChanged} onChange={nameChanged}></textarea>
            <button name={'delete'} onClick={saveUser}>delete</button>
            <button name={'save'} onClick={saveUser}>save</button>
        </div>
    )
}