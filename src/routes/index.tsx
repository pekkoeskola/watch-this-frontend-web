import { createFileRoute, Link } from "@tanstack/react-router";
import { useAppSelector } from "../hooks";
import GroupsList from "../components/GroupsList";
import { useCheckExistingLoginQuery } from "../features/apiSlice";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  useCheckExistingLoginQuery();
  const userDetails = useAppSelector((state) => state.auth);

  if (userDetails.id !== undefined) {
    return (
      <>
        <div>{`Hello ${userDetails.username}`}</div>
        <GroupsList userID={userDetails.id} />
      </>
    );
  }

  return (
    <div>
      {
        <Link to="/login" className="m-2 inline-block border-2 p-2">
          Login
        </Link>
      }
    </div>
  );
}
