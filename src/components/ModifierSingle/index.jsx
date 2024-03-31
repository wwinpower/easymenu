import React from 'react';
import {PiRadioButtonFill, PiRecordLight} from "react-icons/pi";
import {productSum, selectModifier} from "../../store/features/productSlice";
import {useDispatch} from "react-redux";

const ModifierSingle = ({modifierId, option}) => {
    const dispatch = useDispatch();

    const selectedModifier = (modifierId, optionId) => {
        dispatch(selectModifier({modifierId, optionId}));

        dispatch(productSum({currency: "amd"}))
    }

    return (
        <li>
            <div>
                <div className="modifiers__action">
                    {
                        option.selected
                            ? <PiRadioButtonFill
                                className={`modifiers__checkbox ${option.selected ? "modifiers__checkbox-active" : ""}`}
                                onClick={() => selectedModifier(modifierId, option.id)}
                            />
                            : <PiRecordLight
                                className={`modifiers__checkbox ${option.selected ? "modifiers__checkbox-active" : ""}`}
                                onClick={() => selectedModifier(modifierId, option.id)}
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