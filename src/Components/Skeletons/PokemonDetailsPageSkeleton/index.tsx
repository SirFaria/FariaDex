import { MainPanel } from "src/pages/pokemon/styles";
import { HaikeiBackground } from "src/pages/styles";
import { Wrapper } from "src/styles/global";
import Shimmer from "../Shimmer";
import * as S from "./styles";

export default function PokemonDetailsPageSkeleton() {
  return (
    <>
      <HaikeiBackground />
      <MainPanel>
        <Wrapper>
          <S.PokemonDetailsContainerSkeleton>
            <S.SkeletonWrapper className="left">
              <S.NameInfoSkeleton>
                <S.SkeletonElement className="image" />
                <S.SkeletonElement className="title" />
                <Shimmer />
              </S.NameInfoSkeleton>
              <S.InfoSkeleton>
                <S.SkeletonElement className="title" />
                <S.SkeletonElement className="text" />
                <Shimmer />
              </S.InfoSkeleton>
              <S.InfoSkeleton>
                <S.SkeletonElement className="title" />
                <S.SkeletonElement className="text" />
                <Shimmer />
              </S.InfoSkeleton>
              <S.InfoSkeleton>
                <S.SkeletonElement className="title" />
                <S.SkeletonElement className="text" />
                <Shimmer />
              </S.InfoSkeleton>
            </S.SkeletonWrapper>
            <S.SkeletonWrapper className="right">
              <S.InfoSkeleton>
                <S.SkeletonElement className="title" />
                <S.SkeletonElement className="text" />
                <S.SkeletonElement className="text" />
                <S.SkeletonElement className="text" />
                <Shimmer />
              </S.InfoSkeleton>
              <S.InfoSkeleton>
                <S.SkeletonElement className="title" />
                <S.SkeletonElement className="text" />
                <S.SkeletonElement className="text" />
                <S.SkeletonElement className="text" />
                <Shimmer />
              </S.InfoSkeleton>
            </S.SkeletonWrapper>
          </S.PokemonDetailsContainerSkeleton>
        </Wrapper>
      </MainPanel>
    </>
  );
}
