import React, {useState} from 'react';
import './Switch.css';
const Switch = () => {
  const [checked, setChecked] = useState(false)
const handleCheck = () => {
    setChecked(!checked)

  }
    return <div>
        <label class="switch">
            <input type="checkbox" checked={checked} onChange={handleCheck} />
            <span class="slider round"></span>
        </label>

    </div>;
}
export default Switch;