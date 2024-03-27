import React, {useState} from 'react';

const Modifier = ({option}) => {
    let [count, setCount] = useState(0);

    return (
        <li>
              <div>
                  <div className="modifiers__action">
                      <button  onClick={()=>count === 0 ? setCount(count+=1) :  setCount(count-=1)} className={`modifiers__checkbox ${count > 0 ? "modifiers__checkbox-active" : ""}`}>−</button>
                      {
                          count > 0 && (
                              <div>
                                  <span>x{count}</span>
                                  <button className={"modifiers__checkbox modifiers__checkbox-active"}  onClick={()=>setCount(count+=1)}>+</button>
                              </div>
                          )
                      }
                  </div>

                  <p>{option?.name?.ru || ""} {option?.value || ""} {option?.units?.name.ru || ""}</p>
              </div>

            <span> {count * option?.price || 0} ֏</span>
        </li>
    );
};

export default Modifier;