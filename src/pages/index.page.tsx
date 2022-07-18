import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Wrapper } from "src/styles/global";
import * as S from "./home.styles";

export default function Home() {
  return (
    <>
      <Head>
        <title>Faria Dex</title>
      </Head>
      <Wrapper>
        <S.Homepage>
          <section>
            <span>
              Welcome to <strong>FariaDex</strong>
            </span>
            <h1>
              A simple pokedex containing the <br />
              first <span>151</span> pokémon
            </h1>
            <p>Coming soon the next generations.</p>
            <Link href="/gen1" passHref>
              <button>Get started</button>
            </Link>
          </section>
          <S.PikachuImage>
            <Image src="/pikachu.svg" alt="Pikachu" layout="fill" />
          </S.PikachuImage>
        </S.Homepage>
      </Wrapper>
      <S.HaikeiBackground />
    </>
  );
}
