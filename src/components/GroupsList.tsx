import { useGetGroupsQuery } from "../endpoint";

interface GroupListProps {
  userID: number;
}

const GroupsList = ({ userID }: GroupListProps) => {
  const { data, isSuccess } = useGetGroupsQuery(userID);

  if(isSuccess){
    console.log(data)
    return(
      <div>
        {data.map((group) => {return(<div key={group.id}>{group.name}</div>)})}
      </div>
    )
  }

  return null;
};

export default GroupsList;
