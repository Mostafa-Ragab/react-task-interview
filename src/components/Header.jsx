import React  from 'react';
import counterpart from "counterpart";
import TemporaryDrawer from './Drawer';
import en from '../language/en';
import ar from '../language/ar';

counterpart.registerTranslations('en',en)
counterpart.registerTranslations('ar',ar)
counterpart.setLocale('en')


const Header = () => {
    const en=()=>{
        counterpart.setLocale('en');
        document.documentElement.dir='ltr';
    }
    const ar=()=>{
        counterpart.setLocale('ar');
        document.documentElement.dir='rtl';
    }
    return (
        <div className="container-fluid bg-white shadow" data-dismiss="modal">
            <div className="row">
                <div className="col-sm">
                    <div className="row d-flex justify-content-center">
                        <button type="button" className="btn btn-secondary btn-lg mr-2 active m-1 p-1" onClick={en} value={"en"} width="40" height="80">EN</button>
                        <button type="button" className="btn btn-primary btn-lg m-1 p-1" onClick={ar} value={"ar"} width="40" height="40">AR</button>
                    </div>
                    <div className="row d-flex justify-content-center">contactus@mcst.edu.sa</div>
                </div>
                <div className="col-6 mb-2">
                    <div className="justify-content-md-center row">
                        <img src="/img/logo.png" height="80" alt="mcst"/>
                    </div>
                </div>
                <div className="col-sm">
                    <div className="justify-content-md-end row m-2 ">
                        <TemporaryDrawer/> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;



