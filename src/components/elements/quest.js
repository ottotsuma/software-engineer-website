import React, {useState} from 'react'
import Modal2 from './modal2'

export default function Quest(props) {
    const [show, setShow] = useState(false);
    function updateShow() {
      setShow(!show);
    }
    return (
        <div>
        {show && (
        <Modal2 title={"Testing Quests"} insert={<div>Tsuma</div>} close={updateShow} />
      )}
      <div onClick={() => updateShow()}>Tsuma or Orange!?</div>
        </div>
    )
}
