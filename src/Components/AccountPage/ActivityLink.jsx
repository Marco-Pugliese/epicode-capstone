const ActivityLink = ({ activity }) => {
  return (
    <div>
      <div className="fw-bold fs-4 d-flex align-items-center px-2">
        {activity.name_activity} -
        <span className=" extrasmall mx-1 mt-1 fw-normal">
          {activity.kind_of_activity} / {activity.address}
        </span>
      </div>
    </div>
  );
};
export default ActivityLink;
