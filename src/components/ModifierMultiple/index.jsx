import React from 'react';
import {PiMinusSquare, PiPlusLight, PiPlusSquareFill, PiPlusSquareLight} from "react-icons/pi";

const ModifierMultiple = ({productId, modifierId, option, decrementModifier, incrementModifier}) => {
    return (
        <li>
            <div>
                <div className="modifiers__action">

                    {
                        option.count === 0 ?
                            <PiPlusSquareLight onClick={() => incrementModifier(productId, modifierId, option.id)} className={`modifiers__checkbox ${option.count > 0 ? "modifiers__checkbox-active" : ""}`}/>:

                            <PiMinusSquare onClick={() => decrementModifier(productId, modifierId, option.id)} className={`modifiers__checkbox ${option.count > 0 ? "modifiers__checkbox-active" : ""}`}/>
                    }
                    {
                        option.count > 0 && (
                            <div>
                                <span>x{option.count}</span>
                                <PiPlusSquareLight className={"modifiers__checkbox modifiers__checkbox-active"}
                                                   onClick={() => incrementModifier(productId, modifierId, option.id)}/>
                            </div>
                        )
                    }
                </div>

                <p>{option?.name?.ru || ""} {option?.value || ""} {option?.units?.name.ru || ""}</p>
            </div>

            <span>+ {option.count * option?.price.amd || 0} ֏</span>
        </li>
    );
};

export default ModifierMultiple;