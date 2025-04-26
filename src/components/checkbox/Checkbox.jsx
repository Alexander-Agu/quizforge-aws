import React, { useState } from 'react'
import "./checkbox.css"

function Checkbox({a, b, c, d, setAnswer, data, reset}) {

    function selectOnlyThis(checkbox) {
        const checkboxes = document.getElementsByName('option');
        checkboxes.forEach((item) => {
            if (item !== checkbox) item.checked = false;
        });

        setAnswer(checkbox.value)
        reset(checkboxes)
    }
  return (
    <>
        <form className='checkboxForm'>
            <label>
                <input type="checkbox" name="option" value={data[1]} onClick={(e) => { selectOnlyThis(e.target); }} /> {a}
            </label>

            <label>
                <input type="checkbox" name="option" value={data[2]} onClick={(e) => { selectOnlyThis(e.target); }} /> {b}
            </label>

            <label>
                <input type="checkbox" name="option" value={data[3]} onClick={(e) => { selectOnlyThis(e.target); }} /> {c}
            </label>

            <label>
                <input type="checkbox" name="option" value={data[4]} onClick={(e) => { selectOnlyThis(e.target); }} /> {d}
            </label>
        </form>
    </>
  )
}

export default Checkbox