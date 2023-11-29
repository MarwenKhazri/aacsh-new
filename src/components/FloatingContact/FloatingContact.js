import React, { useState } from 'react';
import './FloatingContact.css';
import { LuPhone } from "react-icons/lu";
import { LuInstagram } from "react-icons/lu";

function FloatingContact() {

    return (
        <div className='modif'>


            <div id="container-floating">
                {/* <div className="nd4 nds">
                <img className="reminder" />
                <p className="letter">C</p>
            </div> */}

                <div className="nd3 nds">
                    {/* <img className="reminder" src="//ssl.gstatic.com/bt/C3341AA7A1A076756462EE2E5CD71C11/1x/ic_reminders_speeddial_white_24dp.png" /> */}

                    <a className="reminder" href="tel:6177787312" >
                        <LuPhone size={25} />
                    </a>
                </div>

                <div className="nd1 nds">
                    <a className="reminder" href="https://www.instagram.com/aacshospital/">
                        <LuInstagram size={25} />
                    </a>
                </div>

                <div id="floating-button">
                    <p className="plus">+</p>
                    <img className="edit" src="https://ssl.gstatic.com/bt/C3341AA7A1A076756462EE2E5CD71C11/1x/bt_compose2_1x.png" />
                </div>
            </div>
        </div>
    )


}

export default FloatingContact