import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import * as S from "./styles";

export function BackToTopButton() {
  useEffect(() => {
    window.addEventListener("scroll", scrollHandle);
  }, []);

  const [scrollLocation, setScrollLocation] = useState(false);

  function scrollHandle() {
    scrollY > 500 ? setScrollLocation(true) : setScrollLocation(false);
  }

  return (
    <Link href="/" passHref>
      <S.TopButton scrollLocation={scrollLocation}>
        <Image width={40} height={40} src="/back-to-top-button.svg" alt="" />
      </S.TopButton>
    </Link>
  );
}
