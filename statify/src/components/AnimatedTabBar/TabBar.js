import React from 'react';
import { useState } from 'react';

function TabBar(props) {
    const [OpenTab, SetOpenTab] = useState("btn1");

  return (

<div className="text-2xl font-bold text-center text-gray-500 border-gray-200 dark:text-gray-400 dark:border-gray-700 p-4">
    <ul class="flex flex-wrap -mb-px justify-center justify-evenly">
        <li className="">
            <div onClick={() => {
                SetOpenTab("btn1");
            }} className={"inline-block p-4 rounded-t-lg border-b-2" + (OpenTab === "btn1" ? ' border-green-600 active text-green-600' : ' border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300')}>{props.btn1}</div>
        </li>
        <li class="">
            <div onClick={() => {
                SetOpenTab("btn2");
            }} className={"inline-block p-4 rounded-t-lg border-b-2" + (OpenTab === "btn2" ? ' border-green-600 active text-green-600' : ' border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300')} >{props.btn2}</div>
        </li>
        <li class="">
            <div onClick={() => {
                SetOpenTab("btn3");
            }} className={"inline-block p-4 rounded-t-lg border-b-2" + (OpenTab === "btn3" ? ' border-green-600 active text-green-600' : ' border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300')}>{props.btn3}</div>
        </li>
    </ul>
</div>



  );
}

export default TabBar;

// eslint-disable-next-line no-lone-blocks
{/* <div className={`App ${isClicked ? "bkg-dark" : "bkg-light"}`}>
<button className="btn" onClick={handleToggle}>
  <strong>{isClicked ? "Light" : "Dark"}</strong>
</button>
className={"myClass " + (position === index && 'active')}
</div> */}

// gray hover code: border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300

// blue active code: border-blue-600 active dark:text-blue-500 dark:border-blue-500 text-blue-600