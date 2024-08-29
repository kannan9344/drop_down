const List = ({ list }) => {
  return (
    <li className="list">
      {list}
      <i className="fa-solid fa-chevron-right"></i>
    </li>
  );
};

export default List;
