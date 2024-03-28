import React from 'react';
import {PiRadioButtonFill, PiRecordLight} from "react-icons/pi";

const ModifierSingle = ({productId, modifierId, option, selectedModifier}) => {
    return (
        <li>
            <div>
                <div className="modifiers__action">
                    {
                        option.selected
                            ? <PiRadioButtonFill
                                className={`modifiers__checkbox ${option.selected ? "modifiers__checkbox-active" : ""}`}
                                onClick={() => selectedModifier(productId, modifierId, option.id)}
                            />
                            : <PiRecordLight
                                className={`modifiers__checkbox ${option.selected ? "modifiers__checkbox-active" : ""}`}
                                onClick={() => selectedModifier(productId, modifierId, option.id)}
                            />
                    }

                </div>

                <p>{option?.name?.ru || ""} {option?.value || ""} {option?.units?.name.ru || ""}</p>
            </div>

            <span>+ {option.selected && option.price.amd || 0} ֏</span>
        </li>
    );
};

export default ModifierSingle;