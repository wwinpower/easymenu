import React from 'react';
import {PiMinusSquare,PiPlusSquareLight} from "react-icons/pi";
import {decModifier, incModifier, productSum} from "../../store/features/productSlice";
import {useDispatch} from "react-redux";

const ModifierMultiple = ({modifierId, option}) => {
    const dispatch = useDispatch();

    const incrementModifier = (modifierId, optionId) => {
        dispatch(incModifier({
            modifierId,
            optionId
        }));

        dispatch(productSum({currency: "amd"}))
    };

    const decrementModifier = (modifierId, optionId) => {
        dispatch(decModifier({
            modifierId,
            optionId
        }));

        dispatch(productSum({currency: "amd"}))
    }


    return (
        <li>
            <div>
                <div className="modifiers__action">

                    {
                        option.count === 0 ?
                            <PiPlusSquareLight
                                onClick={() => incrementModifier(modifierId, option.id)} className={`modifiers__checkbox ${option.count > 0 ? "modifiers__checkbox-active" : ""}`}
                            />:

                            <PiMinusSquare
                                onClick={() => decrementModifier(modifierId, option.id)} className={`modifiers__checkbox ${option.count > 0 ? "modifiers__checkbox-active" : ""}`}
                            />
                    }
                    {
                        option.count > 0 && (
                            <div>
                                <span>x{option.count}</span>
                                <PiPlusSquareLight
                                    className={"modifiers__checkbox modifiers__checkbox-active"}
                                    onClick={() => incrementModifier(modifierId, option.id)}
                                />
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