import Image from "next/image"
import Head from "next/head";

const Footer = () =>{
    return(<>

            <div className="footer_data">
            <Image src="/left_footer.png" height={306} width={751} alt="footer" className="left_footer" />
            <Image src="/right_footer.png" height={306} width={751} alt="footer" className="right_footer" />
            <div className="container" id="footer_container">
                <div className="contents_footer">
                    <p className="footer_para">Stay Connected</p>
                    <a className="footer_mail">shriniwashsharma98413@gmail.com</a>
                    {/* <ul className="social_links text-align-center justify-content-center">
                        <li><a href=""><i className="fa fa-facebook"></i></a></li>
                        <li><a href=""><i className="fa fa-twitter"></i></a></li>
                        <li><a href=""><i className="fa fa-linkedin"></i></a></li>
                        <li><a href=""><i className="fa fa-dribbble"></i></a></li>
                        <li><a href=""><i className="fa fa-github"></i></a></li>
                    </ul> */}
                </div>
            </div>
        </div>
    </>)
}

export default Footer;