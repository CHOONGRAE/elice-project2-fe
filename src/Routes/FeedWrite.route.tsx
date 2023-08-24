import FeedWrite from "../pages/FeedWrite";
import NewFeed from "../components/FeedWrite/NewFeed";

export const FeedWriteRouter = {
  path: "feedwrite",
  element: <FeedWrite />,
  children: [{ path: "", element: <NewFeed /> }],
};
