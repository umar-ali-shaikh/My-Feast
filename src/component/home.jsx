import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../style/home.css";

// Import images (React requires this)
import headerBg from "../assets/herosection.jpg";
import section2 from "../assets/section2.png";
import section2bg from "../assets/section2-bg.png";
import section2modag from "../assets/section2-modag.png";
import section3 from "../assets/Festive-Divine-Mouse.png";
import section3bg from "../assets/Golden-Modak-Elegance.png";
import section3animation from "../assets/animated-image.gif";
import section4Box1 from "../assets/section4-box1.png"
import section4Box2 from "../assets/section4-box2.png"
import section4Box3 from "../assets/section4-box3.png"
import section4Box4 from "../assets/section4-box4.png"
import section4Box5 from "../assets/section4-box5.jpg"
import section4Box6 from "../assets/section4-box6.png"
import section4diya from "../assets/diya-1.png"
import section4live from "../assets/live.png"
import section4ebook from "../assets/e-book.png"
import section4magazine from "../assets/magazine-ads.png"
import section4recipt from "../assets/recipt.png"
import section4photos from "../assets/photos.png"
import section5runningrat from "../assets/Running_Decorated_Mouse.png"
import section5videobg from "../assets/Vibrant-Ganpati-Celebration.png"
import section5bg from "../assets/Ganesh-Chaturthi-Festivity.jpg"
import section6bg from "../assets/section6-boxbg.jpg"

const HomeBody = () => {

    // VIDEO STATE
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);


    const handlePlay = () => {
        videoRef.current.play();
        setIsPlaying(true);
    };


    // RAT ANIMATION REFS
    const ratRef = useRef(null);
    const containerRef = useRef(null);
    useEffect(() => {
        const rat = ratRef.current;
        const container = containerRef.current;
        if (!rat || !container) return;

        let position = -200; // rat start position (left outside)
        let speed = 2;       // speed — change if needed

        const animateRat = () => {
            const containerWidth = container.offsetWidth;

            position += speed;

            // If rat reached end → restart from left
            if (position > containerWidth) {
                position = -200; // restart position
            }

            rat.style.transform = `translateX(${-position}px)`;

            requestAnimationFrame(animateRat);
        };

        animateRat(); // start animation
    }, []);






    const [sliderIndex, setSliderIndex] = useState({
        slider1: 0,
        slider2: 0,
    });

    const SLIDES_PER_SECTION = 3;

    // Refs for sliders
    const slider1Ref = useRef(null);
    const slider2Ref = useRef(null);

    // Stores exact width of one slide (including margin)
    const [slideWidth, setSlideWidth] = useState(0);

    // Go to dot slide
    const goToSlide = (sliderName, index) => {
        setSliderIndex(prev => ({ ...prev, [sliderName]: index }));
    };

    // ------------------ CALCULATE REAL WIDTH ------------------
    useEffect(() => {
        const calculateWidth = () => {
            if (slider1Ref.current) {
                const firstChild = slider1Ref.current.children[0];
                if (!firstChild) return;

                const width = firstChild.offsetWidth;
                const style = window.getComputedStyle(firstChild);
                const marginRight = parseFloat(style.marginRight);

                setSlideWidth(width + marginRight); // exact slide width
            }
        };

        calculateWidth();
        window.addEventListener("resize", calculateWidth);

        return () => window.removeEventListener("resize", calculateWidth);
    }, []);

    // ------------------ AUTO SLIDER ------------------
    useEffect(() => {
        const interval = setInterval(() => {
            setSliderIndex(prev => ({
                slider1: (prev.slider1 + 1) % SLIDES_PER_SECTION,
                slider2: (prev.slider2 + 1) % SLIDES_PER_SECTION,
            }));
        }, 3000);

        return () => clearInterval(interval);
    }, []);


    return (
        <>
            {/*  hero section */}

            <section className="hero-section"
                style={{ backgroundImage: `url(${headerBg})` }
                }>

                {/* Background Image */}
                <div className="header-bgimage container align-items-end d-flex" >

                    {/* Main Content */}
                    <div className="header-content" >
                        <p className="lang" data-key="hero_section_p1">
                            A vibrant festival that brings families and communities together to welcome wisdom, prosperity, and new beginnings.
                        </p>

                        <button type="button" className="btn btn-primary navbar-btn">
                            <a className="lang" data-key="hero_section_btn1" href="https://play.google.com/store/apps/details?id=com.starline.my_fest&amp;hl=en_IN">
                                Download MyFest Now
                            </a>
                        </button>

                    </div>
                </div >

            </section >



            {/*  section2 */}
            <section className="section2">
                <div className="container">
                    <div className="row d-flex">
                        <div className="header-content col d-flex flex-column justify-content-center">
                            <h2 className="pb-2 lang" data-key="section2_h2_1">
                                मायफेस्ट – तुमच्या गणेशोत्सवाचे डिजिटल व्यवस्थापन आता सुलभ!
                            </h2>

                            <p className="pb-2 lang" data-key="section2_p1">
                                मायफेस्ट" ऍपच्या मदतीने गणेशोत्सवाचे डिजिटल व्यवस्थापन आता अधिक सोपे आणि सुविधाजनक झाले आहे! डिजिटल अहवाल फीचरच्या माध्यमातून पूर्वीचे आर्थिक व्यवहार आणि हिशोब एका क्लिकवर पाहता येतील. गणेशोत्सव आणि इतर सणांचे महत्त्व फेस्टिव्ह बुक्सच्या द्वारे समजून घ्या. देणगी व्यवस्थापनासाठी डिजिटल पावती प्रणाली वापरा आणि संपूर्ण देणगीदार माहिती सुरक्षित ठेवा.
                            </p>

                            <p className="lang" data-key="section2_p2">

                                लाईव्ह गणपती दर्शनाने जगभरातून आपल्या बाप्पांचे दर्शन घ्या. डिजिटल जाहिरात मासिकाच्या मदतीने मंडळाचे उपक्रम प्रसिद्ध करा. फोटो गॅलरीमध्ये उत्सवाचे सर्व आठवणींचे जतन करा आणि शेअर करा. कमी कागदपत्रांसह पेपरलेस व्यवस्थापन करा आणि सोपी ऑपरेशन प्रणाली वापरून सहज ऍप ऑपरेट करा. 'मायफेस्ट' डाउनलोड करा आणि गणेशोत्सव डिजिटल बनवा!

                            </p>
                            <img src={section2modag} alt="" />
                        </div >
                        <div className="header-image col">
                            <img className="header-image1" src={section2} alt="" />
                            <img className="header-image2" src={section2bg} alt="" />
                        </div >
                    </div>

                </div >

            </section >



            {/* section3 */}
            <section className="section3"
                style={{ backgroundImage: `url(${section3bg})` }
                }>
                <div className="container">
                    <div className="row d-flex">
                        <div className="header-image col">
                            <img className="header-image1" src={section3animation} alt="" />
                        </div >

                        <div className="header-content col d-flex flex-column justify-content-center">
                            <h2 className="pb-2 lang" data-key="section3_h2_1">
                                वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ ।
                                <br />
                                निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा ॥
                            </h2>
                            <img className="header-image2" src={section3} alt="" />
                        </div >

                    </div>
                </div >

            </section >


            {/*  section4 */}
            <section className="section4 pb-5">
                <div className="container">
                    <div className="row d-flex">
                        <h2 className="py-5 text-center lang" data-key="section4_h2_1">
                            प्रमुख वैशिष्ट्ये मायफेस्ट
                        </h2>
                        <div className="section4-box pc d-flex flex-wrap">
                            <div className="section4-box-part">
                                <img className="section4-box-image" src={section4Box1} alt="" />
                                <div className="section4-box-part-content">
                                    <img src={section4recipt} alt="" />
                                    <h3 className="lang" data-key="section4_box1_h3">
                                        डिजिटल पावती (Digital Receipt)
                                    </h3>
                                    <p className="lang" data-key="section4_box1_p">
                                        देणगी व्यवस्थापन आता पूर्णतः डिजिटल! एका क्लिकवर देणगीदारांना पावती द्या आणि हिशोब ठेवा.
                                    </p>
                                </div>
                            </div>
                            <div className="section4-box-part">
                                <img className="section4-box-image" src={section4Box2} alt="" />
                                <div className="section4-box-part-content">
                                    <img src={section4photos} alt="" />
                                    <h3 className="lang" data-key="section4_box2_h3">
                                        फोटो गॅलरी (Photo Gallery)
                                    </h3>
                                    <p className="lang" data-key="section4_box2_p">
                                        गणेशोत्सवाचे सर्व सुंदर क्षण एका जागी! फोटो आणि आठवणी जतन करा आणि शेअर करा.
                                    </p>
                                </div>
                            </div>
                            <div className="section4-box-part">
                                <img className="section4-box-image" src={section4Box3} alt="" />
                                <div className="section4-box-part-content">
                                    <img src={section4ebook} alt="" />
                                    <h3 className="lang" data-key="section4_box3_h3">
                                        डिजिटल अहवाल (Digital Ahawal)
                                    </h3>
                                    <p className="lang" data-key="section4_box3_p">
                                        आता तुमच्या गणपती मंडळाच्या आर्थिक व्यवहारांचा संपूर्ण अहवाल एका क्लिकवर मिळवा! पूर्वीच्या हिशोबांची माहिती तपासा आणि पारदर्शक व्यवस्थापन करा.
                                    </p>
                                </div>
                            </div>
                            <div className="section4-box-part">
                                <img className="section4-box-image" src={section4Box4} alt="" />
                                <div className="section4-box-part-content">
                                    <img src={section4magazine} alt="" />
                                    <h3 className="lang" data-key="section4_box4_h3">
                                        डिजिटल जाहिरात मासिक (Digital Ad Magazine)
                                    </h3>
                                    <p className="lang" data-key="section4_box4_p">
                                        मंडळाच्या विविध उपक्रमांसाठी डिजिटल जाहिरात सुविधा. प्रायोजकांसाठी उत्कृष्ट जाहिरात संधी उपलब्ध.
                                    </p>
                                </div>
                            </div>
                            <div className="section4-box-part">
                                <img className="section4-box-image" src={section4Box5} alt="" />
                                <div className="section4-box-part-content">
                                    <img src={section4live} alt="" />
                                    <h3 className="lang" data-key="section4_box5_h3">
                                        लाईव्ह गणपती दर्शन (Live Ganpati Darshan)
                                    </h3>
                                    <p className="lang" data-key="section4_box5_p">
                                        आता तुमच्या गणपती मंडळाच्या आर्थिक व्यवहारांचा संपूर्ण अहवाल एका क्लिकवर मिळवा! पूर्वीच्या हिशोबांची माहिती तपासा आणि पारदर्शक व्यवस्थापन करा.
                                    </p>
                                </div>
                            </div>
                            <div className="section4-box-part">
                                <img className="section4-box-image" src={section4Box6} alt="" />
                                <div className="section4-box-part-content">
                                    <img src={section4diya} alt="" />
                                    <h3 className="lang" data-key="section4_box6_h3">
                                        डिजिटल आरती बुक (Digital Arati Book)
                                    </h3>
                                    <p className="lang" data-key="section4_box6_p">
                                        आता आपल्या गणपती मंडळाच्या दररोजच्या आरतीचे संपूर्ण व्यवस्थापन फक्त एका क्लिकवर! मागील आरतीचे रेकॉर्ड सहज तपासा आणि पारदर्शक व सुस्थित व्यवस्थापन राखा.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="section4-box-hlp mobile">

                            {/* ---------------- SLIDER 1 ---------------- */}
                            <div
                                ref={slider1Ref}
                                className="section4-box d-flex flex-wrap"
                                style={{
                                    transform: `translateX(-${sliderIndex.slider1 * slideWidth}px)`,
                                    transition: "0.6s ease",
                                }}
                            >
                                {/* YOUR 3 BOXES (UNCHANGED) */}
                                <div className="section4-box-part">
                                    <img className="section4-box-image" src={section4Box1} alt="" />
                                    <div className="section4-box-part-content">
                                        <img src={section4recipt} alt="" />
                                        <h3>डिजिटल पावती (Digital Receipt)</h3>
                                        <p>देणगी व्यवस्थापन आता पूर्णतः डिजिटल!</p>
                                    </div>
                                </div>

                                <div className="section4-box-part">
                                    <img className="section4-box-image" src={section4Box2} alt="" />
                                    <div className="section4-box-part-content">
                                        <img src={section4photos} alt="" />
                                        <h3>फोटो गॅलरी (Photo Gallery)</h3>
                                        <p>सुंदर क्षण जतन करा.</p>
                                    </div>
                                </div>

                                <div className="section4-box-part">
                                    <img className="section4-box-image" src={section4Box3} alt="" />
                                    <div className="section4-box-part-content">
                                        <img src={section4ebook} alt="" />
                                        <h3>डिजिटल अहवाल (Digital Ahawal)</h3>
                                        <p>पारदर्शक व्यवस्थापनासाठी उत्तम.</p>
                                    </div>
                                </div>

                                <div className="section4-box-part">
                                    <img className="section4-box-image" src={section4Box1} alt="" />
                                    <div className="section4-box-part-content">
                                        <img src={section4recipt} alt="" />
                                        <h3>डिजिटल पावती (Digital Receipt)</h3>
                                        <p>देणगी व्यवस्थापन आता पूर्णतः डिजिटल!</p>
                                    </div>
                                </div>
                            </div>

                            {/* PAGINATION DOTS SLIDER 1 */}
                            <div className="section4-box-pagination dots">
                                {[0, 1, 2].map(num => (
                                    <span
                                        key={num}
                                        className={sliderIndex.slider1 === num ? "dot active" : "dot"}
                                        onClick={() => goToSlide("slider1", num)}
                                    ></span>
                                ))}
                            </div>


                            {/* ---------------- SLIDER 2 ---------------- */}
                            <div
                                ref={slider2Ref}
                                className="section4-box d-flex flex-wrap"
                                style={{
                                    transform: `translateX(-${sliderIndex.slider2 * slideWidth}px)`,
                                    transition: "0.6s ease",
                                }}
                            >
                                {/* YOUR 3 BOXES (UNCHANGED) */}
                                <div className="section4-box-part">
                                    <img className="section4-box-image" src={section4Box4} alt="" />
                                    <div className="section4-box-part-content">
                                        <img src={section4magazine} alt="" />
                                        <h3>डिजिटल जाहिरात मासिक</h3>
                                        <p>प्रायोजकांसाठी उत्कृष्ट सुविधा.</p>
                                    </div>
                                </div>

                                <div className="section4-box-part">
                                    <img className="section4-box-image" src={section4Box5} alt="" />
                                    <div className="section4-box-part-content">
                                        <img src={section4live} alt="" />
                                        <h3>लाईव्ह गणपती दर्शन</h3>
                                        <p>घरबसल्या लाईव्ह दर्शन मिळवा!</p>
                                    </div>
                                </div>

                                <div className="section4-box-part">
                                    <img className="section4-box-image" src={section4Box6} alt="" />
                                    <div className="section4-box-part-content">
                                        <img src={section4diya} alt="" />
                                        <h3>डिजिटल आरती बुक</h3>
                                        <p>आरतीचे व्यवस्थापन सहज करा.</p>
                                    </div>
                                </div>

                                <div className="section4-box-part">
                                    <img className="section4-box-image" src={section4Box4} alt="" />
                                    <div className="section4-box-part-content">
                                        <img src={section4magazine} alt="" />
                                        <h3>डिजिटल जाहिरात मासिक</h3>
                                        <p>प्रायोजकांसाठी उत्कृष्ट सुविधा.</p>
                                    </div>
                                </div>
                            </div>

                            {/* PAGINATION DOTS SLIDER 2 */}
                            <div className="section4-box-pagination dots">
                                {[0, 1, 2].map(num => (
                                    <span
                                        key={num}
                                        className={sliderIndex.slider2 === num ? "dot active" : "dot"}
                                        onClick={() => goToSlide("slider2", num)}
                                    ></span>
                                ))}
                            </div>

                        </div>
                    </div>
                </div >

            </section >

            {/*  section5 */}
            <section className="section5" style={{ backgroundImage: `url(${section5bg})` }}>
                <div className="container" ref={containerRef}>
                    <div className={`row d-flex video-wrapper ${isPlaying ? "active" : ""}`}>

                        <video
                            ref={videoRef}
                            className="elementor-video"
                            src="https://ganeshutsav.myfest.co.in/wp-content/uploads/2025/04/ganpati-bappa.-06.mp4"
                            controls
                            controlsList="nodownload"
                        ></video>

                        {!isPlaying && (
                            <img className="elementor-video-thumbnail" src={section5videobg} alt="" />
                        )}

                        {!isPlaying && (
                            <svg onClick={handlePlay} className="play-btn-svg" aria-hidden="true" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M838 162C746 71 633 25 500 25 371 25 258 71 163 162 71 254 25 367 25 500 25 633 71 746 163 837 254 929 367 979 500 979 633 979 746 933 838 837 929 746 975 633 975 500 975 367 929 254 838 162M808 192C892 279 933 379 933 500 933 621 892 725 808 808 725 892 621 938 500 938 379 938 279 896 196 808 113 725 67 621 67 500 67 379 108 279 196 192 279 108 383 62 500 62 621 62 721 108 808 192M438 392V642L642 517 438 392Z"></path></svg>
                        )}
                    </div>
                </div>

                <img className="runninrat" ref={ratRef} src={section5runningrat} alt="running rat" />
            </section>


            {/*  section6 */}
            <section className="section6 py-5">
                <div className="container">
                    <div className="row ">
                        <h2 className="text-center lang" data-key="section6_h2_1">ॲप योजना तपशील</h2>

                        <div className="section6-price d-flex gap-5 justify-content-center">

                            <div className="section6-price-box p-5"
                                style={{ backgroundImage: `url(${section6bg})` }
                                }>
                                <h3 className="lang" data-key="section6_silver_h3">
                                    SILVER PLAN
                                </h3>
                                <span className="section6-spanhlp d-flex lang" data-key="section6_silver_span1">
                                    आयुष्यभरासाठी ॲप खर्च
                                </span>
                                <span className="section6-spanhlp2 d-flex lang" data-key="section6_silver_span2">₹ 5100</span>
                                <ul className="elementor-price-table__features-list">
                                    <li className="elementor-repeater-item-4d655ef">
                                        <div className="elementor-price-table__feature-inner">
                                            <svg aria-hidden="true" className="e-font-icon-svg e-far-check-circle" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"></path></svg>
                                            <span className="lang" data-key="section6_silver_li1">
                                                डिजिटल पावती
                                            </span>
                                        </div>
                                    </li>
                                    <li className="elementor-repeater-item-473a8ac">
                                        <div className="elementor-price-table__feature-inner">
                                            <svg aria-hidden="true" className="e-font-icon-svg e-far-check-circle" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"></path></svg>
                                            <span className="lang" data-key="section6_silver_li2">
                                                फोटो गॅलरी
                                            </span>
                                        </div>
                                    </li>
                                    <li className="elementor-repeater-item-95528f2">
                                        <div className="elementor-price-table__feature-inner">
                                            <svg aria-hidden="true" className="e-font-icon-svg e-far-check-circle" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"></path></svg>
                                            <span className="lang" data-key="section6_silver_li3">
                                                डिजिटल अहवाल
                                            </span>
                                        </div>
                                    </li>
                                </ul>
                                <button type="button" className="btn btn-primary navbar-btn">
                                    <a className="lang" data-key="section6_silver_btn" href="#elementor-action%3Aaction%3Dpopup%3Aopen%26settings%3DeyJpZCI6Ijg3MiIsInRvZ2dsZSI6ZmFsc2V9">
                                        येथे क्लिक करा
                                    </a>
                                </button>

                                <div className="elementor-price-table">
                                    <div>
                                        <span className="Maintanace lang" data-key="section6_silver_maint">वार्षिक देखभाल शुल्क</span>
                                        <p className="lang" data-key="section6_silver_p1">सिल्व्हर : ₹1100</p>
                                    </div>

                                    <div>
                                        <p className="lang" data-key="section6_silver_p2">या गोष्टींसाठी अजिबात अतिरिक्त पैसे नाहीत:</p>
                                        <p className="lang" data-key="section6_silver_p3">
                                            1) एसएमएस संदेश
                                            <br />
                                            2) मासिक बातम्या
                                        </p>
                                    </div>
                                </div>

                            </div>

                            <div className="section6-price-box p-5"
                                style={{ backgroundImage: `url(${section6bg})` }
                                }>
                                <h3 className="lang" data-key="section6_gold_h3">
                                    GOLD PLAN
                                </h3>
                                <span className="d-flex section6-spanhlp lang" data-key="section6_gold_span1">
                                    आयुष्यभरासाठी ॲप खर्च
                                </span>
                                <span className="d-flex section6-spanhlp2 lang" data-key="section6_gold_span2">₹11000</span>
                                <ul className="elementor-price-table__features-list">
                                    <li className="elementor-repeater-item-4d655ef">
                                        <div className="elementor-price-table__feature-inner">
                                            <svg aria-hidden="true" className="e-font-icon-svg e-far-check-circle" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"></path></svg>
                                            <span className="lang" data-key="section6_gold_li1">
                                                डिजिटल पावती
                                            </span>
                                        </div>
                                    </li>
                                    <li className="elementor-repeater-item-473a8ac">
                                        <div className="elementor-price-table__feature-inner">
                                            <svg aria-hidden="true" className="e-font-icon-svg e-far-check-circle" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"></path></svg>
                                            <span className="lang" data-key="section6_gold_li2">
                                                फोटो गॅलरी
                                            </span>
                                        </div>
                                    </li>
                                    <li className="elementor-repeater-item-95528f2">
                                        <div className="elementor-price-table__feature-inner">
                                            <svg aria-hidden="true" className="e-font-icon-svg e-far-check-circle" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"></path></svg>
                                            <span className="lang" data-key="section6_gold_li3">
                                                डिजिटल अहवाल
                                            </span>
                                        </div>
                                    </li>
                                    <li className="elementor-repeater-item-95528f2">
                                        <div className="elementor-price-table__feature-inner">
                                            <svg aria-hidden="true" className="e-font-icon-svg e-far-check-circle" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"></path></svg>
                                            <span className="lang" data-key="section6_gold_li4">
                                                डिजिटल जाहिरात मासिक
                                            </span>
                                        </div>
                                    </li>
                                    <li className="elementor-repeater-item-95528f2">
                                        <div className="elementor-price-table__feature-inner">
                                            <svg aria-hidden="true" className="e-font-icon-svg e-far-check-circle" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"></path></svg>
                                            <span className="lang" data-key="section6_gold_li5">
                                                लाईव्ह गणपती दर्शन
                                            </span>
                                        </div>
                                    </li>
                                    <li className="elementor-repeater-item-95528f2">
                                        <div className="elementor-price-table__feature-inner">
                                            <svg aria-hidden="true" className="e-font-icon-svg e-far-check-circle" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"></path></svg>
                                            <span className="lang" data-key="section6_gold_li6">
                                                डिजिटल आरती पुस्तक
                                            </span>
                                        </div>
                                    </li>
                                </ul>
                                <button type="button" className="btn btn-primary navbar-btn">
                                    <a className="lang" data-key="section6_gold_btn" href="#elementor-action%3Aaction%3Dpopup%3Aopen%26settings%3DeyJpZCI6Ijg3MiIsInRvZ2dsZSI6ZmFsc2V9">
                                        येथे क्लिक करा
                                    </a>
                                </button>

                                <div className="elementor-price-table">
                                    <div>
                                        <span className="Maintanace lang" data-key="section6_gold_maint">वार्षिक देखभाल शुल्क</span>
                                        <p className="lang" data-key="section6_gold_p1">सिल्व्हर : ₹1100</p>
                                    </div>

                                    <div>
                                        <p className="lang" data-key="section6_gold_p2">या गोष्टींसाठी अजिबात अतिरिक्त पैसे नाहीत:</p>
                                        <p className="lang" data-key="section6_gold_p3">
                                            1) एसएमएस संदेश
                                            <br />
                                            2) मासिक बातम्या
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>


        </>

    );
};

export default HomeBody;
