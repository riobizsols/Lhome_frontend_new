import * as React from "react";
import * as config from "../next.config.js";
import PageHeader from "./components/PageHeader";
import css from "../styles/bedroom.module.scss";
import Footer from "./components/Footer/Footer";
import Warranty from "./components/warranty/Warranty";
import Guranted from "./components/Guranted/Guranted";
import FAQPage from "./components/Faq/FAQPage";
import PartnershipBanner from "./components/Partnership/PartnershipBanner";
import OurPartners from "./components/Partnership/OurPartners/OurPartners";
import PartnershipRow from "./components/Partnership/PartnershipRow/PartnershipRow";

const Partnership: React.FC = () => {
    const [screenwidth, setWidth] = React.useState(window.innerWidth);

    let assetpath = config.assetPrefix ? `${config.assetPrefix}` : ``;
    let hgtt = 0;
    if (window.innerWidth < 600) {
        hgtt = window.innerHeight - 210;
        if (window.innerWidth > 490 && window.innerWidth < 512) {
            hgtt += 10;
        }
    } else {
        hgtt = window.innerHeight - 160;
    }
    const [screenheight, setHeight] = React.useState(hgtt);


    const handleResize = React.useCallback(() => {
        setWidth(window.innerWidth);
        let hgtt = 0;
        if (window.innerWidth < 600) {
            hgtt = window.innerHeight - 210;
            if (window.innerWidth > 490 && window.innerWidth < 512) {
                hgtt += 10;
            }
            if (window.innerWidth > 571 && window.innerWidth < 599) {
                hgtt += 50;
            }
            if (window.innerWidth > 570 && window.innerWidth < 572) {
                hgtt += 45;
            }
            if (window.innerWidth > 509 && window.innerWidth < 571) {
                hgtt += 25;
            }
            if (window.innerWidth > 500 && window.innerWidth < 510) {
                hgtt += 15;
            }
            if (window.innerWidth < 500) {
                hgtt -= 10;
            }
        } else {
            hgtt = window.innerHeight - 160;
        }
        setHeight(hgtt);
    }, []);

    const handleResized = React.useCallback(() => {
        setTimeout(() => {
            handleResize();
        }, 1000);
    }, [handleResize]);

    

    const page = React.useRef(null);
    const [prevPosition, setPrev] = React.useState(0);
    const [hidden, setHidden] = React.useState(false)

    const pageheaderMonitor = () => {
        if (page.current.scrollTop > prevPosition) {
            setPrev(page.current.scrollTop)
            setHidden(true)
        } else {
            setHidden(false)
            setPrev(page.current.scrollTop)

        }
    }

    return (
        <React.Fragment>
            <div className="animate-fade-in">
                <div className={css.lhomePage}>
                <div className={hidden ? "hidden" : ""}>
                        <PageHeader screenwidth={screenwidth} screenheight={screenheight} assetpath={assetpath} hidden={false} />
                    </div>

                    <div ref={page} onScroll={pageheaderMonitor} className={hidden ? css.LhomeBottom1 : css.LhomeBottom}>
                    <div><PartnershipBanner/></div>
                    <div><PartnershipRow screenwidth={screenwidth}/></div>
                    <div><OurPartners/></div>
                    <div><Warranty /></div>
                    <div><FAQPage /></div>
                    <div><Guranted /></div>
                    <div><Footer /></div>
                    </div>
                </div>

            </div>
        </React.Fragment>
    )
}
export default Partnership;
  