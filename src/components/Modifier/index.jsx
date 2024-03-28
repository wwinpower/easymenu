import React, {useState} from 'react';

const Modifier = ({productId, modifierId, option, decrementModifier, incrementModifier}) => {
    return (
        <li>
              <div>
                  <div className="modifiers__action">
                      <button  onClick={()=>option.count === 0 ? incrementModifier(productId, modifierId, option.id) :  decrementModifier(productId, modifierId, option.id)} className={`modifiers__checkbox ${option.count > 0 ? "modifiers__checkbox-active" : ""}`}>−</button>
                      {
                          option.count > 0 && (
                              <div>
                                  <span>x{option.count}</span>
                                  <button className={"modifiers__checkbox modifiers__checkbox-active"}  onClick={()=>incrementModifier(productId, modifierId, option.id)}>+</button>
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

export default Modifier;