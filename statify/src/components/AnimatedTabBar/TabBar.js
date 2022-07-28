import React from 'react';
import { useState } from 'react';

function TabBar(props) {
    const [OpenTab, SetOpenTab] = useState("btn1");

  return (

<div className="text-2xl font-bold text-center text-gray-500 border-gray-200 dark:text-gray-400 dark:border-gray-700 p-3 m-3">
    <ul class="flex flex-wrap -mb-px justify-center justify-evenly">
        <li className="">
            <div onClick={() => {
                SetOpenTab("btn1");
                props.ChangeTimeType("4weeks");
            }} className={"inline-block p-4 rounded-t-lg border-b-2" + (OpenTab === "btn1" ? ' border-green-600 active text-green-600' : ' border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300')}>{props.btn1}</div>
        </li>
        <li class="">
            <div onClick={() => {
                SetOpenTab("btn2");
                props.ChangeTimeType("6months");
            }} className={"inline-block p-4 rounded-t-lg border-b-2" + (OpenTab === "btn2" ? ' border-green-600 active text-green-600' : ' border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300')} >{props.btn2}</div>
        </li>
        <li class="">
            <div onClick={() => {
                SetOpenTab("btn3");
                props.ChangeTimeType("lifetime");
            }} className={"inline-block p-4 rounded-t-lg border-b-2" + (OpenTab === "btn3" ? ' border-green-600 active text-green-600' : ' border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300')}>{props.btn3}</div>
        </li>
    </ul>
</div>



  );
}

export default TabBar;
