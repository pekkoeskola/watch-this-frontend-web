import { Link } from "@tanstack/react-router";
import { useGetGroupsQuery } from "../endpoint";

interface GroupListProps {
  userID: number;
}

const GroupsList = ({ userID }: GroupListProps) => {
  const { data, isSuccess } = useGetGroupsQuery(userID);

  if(isSuccess){
    return(
      <div>
        {data.map((group) => {return(<Link to={"/groups/$groupID"} params={{groupID: group.id.toString()}} key={group.id}>{group.name}</Link>)})}
      </div>
    )
  }

  return null;
};

export default GroupsList;
