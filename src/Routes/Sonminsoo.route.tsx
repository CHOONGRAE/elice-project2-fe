import SonminsooItem from "../pages/SonminsooItem/SonminsooItem";
import SonminsooItemList from "../components/SonminsooItem/SonminsooItemList";
import SonminsooItemDetails from "../components/SonminsooItem/SonminsooItemDetails";

export const SonminsooRouter = {
  path: "minsooItem",
  element: <SonminsooItem />, //손민수템 컴포넌트
  children: [
    { path: "", element: <SonminsooItemList /> }, //손민수템 상세보기
    { path: "details/:id", element: <SonminsooItemDetails /> }, //손민수템 상세보기
  ],
};
