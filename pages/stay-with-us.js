import Image from "next/image";
import rental1 from "../public/assets/images/rental1.png";
import rental2 from "../public/assets/images/rental2.png";
import rental3 from "../public/assets/images/rental3.png";
import building from "../public/assets/images/a-co-building.png";
export default function RealEstate() {
    return (
        <>
            <div className="container text-center">
                <h1>Stay with us!</h1>
                <h2>Real Estate Services</h2>
                <p className="u-vr__mb--2">
                    Founded in 2022, Aberration Co. offers a unique experience situated for travellers to explore the city and beyond.
                </p>
                <div className="h3">We're calling it<br /><span className="h1">Digs by A Co.</span></div>
                <div className="d-flex justify-content-center align-items-center u-vr__pb--2 flex-wrap">
                    <div className="u-vr__px--1 u-vr__py--1" style={{ maxWidth: '400px', aspectRatio: '4/3', objectFit: 'cover', overflow: 'hidden' }}>
                        <Image src={rental1} style={{ width: 'auto', height: '100%' }}/>
                    </div>
                    <div className="u-vr__px--1 u-vr__py--1" style={{ maxWidth: '400px', aspectRatio: '4/3', objectFit: 'cover', overflow: 'hidden' }}>
                        <Image src={building} style={{ width: 'auto', height: '100%' }} />
                    </div>
                    <div className="u-vr__px--1 u-vr__py--1" style={{ maxWidth: '400px', aspectRatio: '4/3', objectFit: 'cover', overflow: 'hidden' }}>
                        <Image src={rental2} style={{ width: 'auto', height: '100%' }} />
                    </div>
                    <div className="u-vr__px--1 u-vr__py--1" style={{ maxWidth: '400px', aspectRatio: '4/3', objectFit: 'cover', overflow: 'hidden' }}>
                        <Image src={rental3} style={{ width: 'auto', height: '100%' }} />
                    </div>
                </div>
                <p>
                    Our easy booking model has a similar concept as AirBnb and VRBO making it a straightforward process to get your next stay going. You'll find that all of our locations and rooms are designed to be different from the usual boring accommodations with creative design and chill vibes for any guest.
                </p>
                <p>
                    Our rooms also feature all the necessary amenities for craft beer lovers and coffee goers including bedside beer fridges, kegerators with draft beer delivery and espresso maschine so you can be your own barista.
                </p>
                <h3>
                    For direct invite to our reservation system, reach out to <a href="mailto:mike@aberrationco.com">mike@aberrationco.com</a>
                </h3>
            </div>
        </>
    )
}