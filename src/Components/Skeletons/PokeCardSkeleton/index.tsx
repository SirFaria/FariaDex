import Shimmer from "../Shimmer";
import * as S from "./styles";

export default function PokeCardSkeleton() {
  return (
    <S.SkeletonWrapper>
      <S.TextTitleWrapper>
        <S.SkeletonElement className="text" />
        <S.SkeletonElement className="title" />
      </S.TextTitleWrapper>
      <S.SkeletonElement className="image" />
      <S.TextWrapper>
        <S.SkeletonElement className="title" />
      </S.TextWrapper>
      <Shimmer />
    </S.SkeletonWrapper>
  );
}
