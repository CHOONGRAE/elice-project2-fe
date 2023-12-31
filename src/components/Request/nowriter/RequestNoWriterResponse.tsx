import React from "react";
import * as S from "../style/RequestNoWriterResponse.style";
import LinkAttachItem from "../LinkAttachItem";
import detailDate from "../../../utils/time";
import select from "../../../assets/images/svg/ic-select.svg";
import { useNavigate } from "react-router-dom";
import { RequestAnswerProps } from "../../../types/request";

const RequestNoWriterResponse: React.FC<RequestAnswerProps> = ({
  answeruserid,
  answerUsername,
  answerUserimg,
  answerUserclearNum,
  answerDate,
  answerItems,
  answerIsChoosed,
}) => {
  const navigation = useNavigate();

  const clickProfile = () => {
    navigation(`/mypage/${answeruserid}`);
  };

  return (
    <>
      <S.Wrap>
        <S.ProfileBox>
          <S.ProfileImg src={answerUserimg} onClick={clickProfile} />
          <S.ProfileInfo>
            <S.UserName>{answerUsername}</S.UserName>
            <S.ResponesInfo>
              <S.ClearNumber>채택된 의뢰 {answerUserclearNum}개</S.ClearNumber>
              <S.Date>{detailDate(answerDate)}</S.Date>
            </S.ResponesInfo>
          </S.ProfileInfo>
          {answerIsChoosed && <S.SeleteImg src={select} />}
        </S.ProfileBox>
        <S.ImgsBox>
          {answerItems &&
            answerItems.map((item) => (
              <LinkAttachItem
                key={item.id}
                deletevalue={false}
                itemId={item.id}
                itemImg={item.imgUrl}
                itemPrice={item.price}
                itemName={item.title}
                itemUrl={item.originUrl}
              />
            ))}
        </S.ImgsBox>
      </S.Wrap>
    </>
  );
};

export default RequestNoWriterResponse;
