import iconHome from "../../../assets/images/svg/ic-home-active.svg";
import iconHomeInActive from "../../../assets/images/svg/ic-home-inactive.svg";
import iconFeed from "../../../assets/images/svg/ic-feed-active.svg";
import iconFeedInActive from "../../../assets/images/svg/ic-feed-inactive.svg";
import iconItem from "../../../assets/images/svg/ic-item-active.svg";
import iconItemInActive from "../../../assets/images/svg/ic-item-inactive.svg";
import iconChat from "../../../assets/images/svg/ic-chat-active.svg";
import iconChatInActive from "../../../assets/images/svg/ic-chat-inactive.svg";
import iconMypage from "../../../assets/images/svg/ic-mypage-active.svg";
import iconMypageInActive from "../../../assets/images/svg/ic-mypage-inactive.svg";

import * as S from "./style/IconWithText.style";

type IconWithTextProps = {
  text: string;
  pathname: string;
  onClick?: any;
};

const IconWithText = ({ text, pathname, onClick }: IconWithTextProps) => {
  let $active: boolean = false;
  let $iconUrl: string = "";

  switch (text) {
    case "홈":
      if (pathname.includes("home")) {
        $iconUrl = iconHome;
        $active = true;
      } else {
        $iconUrl = iconHomeInActive;
        $active = false;
      }
      break;

    case "피드":
      if (pathname.includes("feed")) {
        $iconUrl = iconFeed;
        $active = true;
      } else {
        $iconUrl = iconFeedInActive;
        $active = false;
      }
      break;

    case "손민수템":
      if (pathname.includes("minsooItem")) {
        $iconUrl = iconItem;
        $active = true;
      } else {
        $iconUrl = iconItemInActive;
        $active = false;
      }
      break;

    case "채팅방":
      if (pathname.includes("chatting")) {
        $iconUrl = iconChat;
        $active = true;
      } else {
        $iconUrl = iconChatInActive;
        $active = false;
      }
      break;

    case "마이페이지":
      if (pathname.includes("mypage")) {
        $iconUrl = iconMypage;
        $active = true;
      } else {
        $iconUrl = iconMypageInActive;
        $active = false;
      }
      break;
    case "로그인":
      $iconUrl = iconMypageInActive;
      $active = false;

      break;
  }

  return (
    <S.IconGroup onClick={onClick}>
      <S.TabIcon $iconUrl={$iconUrl} />
      <S.IconText $active={$active}>{text}</S.IconText>
    </S.IconGroup>
  );
};

export default IconWithText;
