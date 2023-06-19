import Image from "next/image";
import fullhappy from "../../public/assets/images/svg/full--on-light.svg"
import wordmark from "../../public/assets/images/svg/wordmark--on-dark.svg";
import Link from "next/link";

function Footer() {
  return (
    <>
      <div className="d-flex justify-content-center u-vr__py--1">
        <Image src={fullhappy} unoptimized={true} />
      </div>
      <div
        className="footer d-flex flex-column t-background--jet justify-content-center align-items-center u-vr__px--2 u-vr__py--1"
        style={{ minHeight: "300px" }}
      >
        <div className="u-vr__py--1">
          <Link href="/">
            <Image src={wordmark} alt="Aberration Co." unoptimized={true} />
          </Link>
        </div>
        <div>
          Nashville, TN |{" "}
          <a href="mailto:mike@aberration.com">mike@aberration.com</a>
        </div>
        <div>
          ©{"  "}
          {new Date().getFullYear()} Aberration Co. All rights reserved.
        </div>
      </div>
    </>
  );
}

export default Footer;
