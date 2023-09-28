import React from "react";
import { IconPhoneCall } from '@tabler/icons-react';
import { IconMapPin } from '@tabler/icons-react';
import { IconClockFilled } from '@tabler/icons-react';
import "./estilo/footer.css"

const Footer=(props)=>( //CREAME UNA CONST PARA PODER ALMACENAR DATOS// 
<div className="footer"> 
    <div className="footer">
        <div className="foo1">
            <h2><span><IconPhoneCall/></span>{props.tel}</h2>
            <h3>{props.tel1}</h3>
        </div>
        <div className="foo1">
            <h2><span><IconMapPin/></span>{props.ubi}</h2>
            <h3>{props.ubi1}</h3>
        </div>
        <div className="foo1">
            <h2><span><IconClockFilled/></span>{props.hora}</h2>
            <h3>{props.hora1}</h3>
        </div>
    </div>
  </div>
)

export default Footer