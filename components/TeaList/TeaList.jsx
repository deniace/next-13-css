import TeaListItem from "./TeaListItem";
import style from "./TeaListItem.module.css";

import classNames from "classnames";

const TeaList = (props) => {
  const { teas } = props;

  return (
    // <ul role="list" className={`${style.TeaList} grid`}>
    <ul role="list" className={classNames(style.TeaList, "grid")}>
      {teas.map((tea) => (
        <TeaListItem tea={tea} key={tea.name} />
      ))}
    </ul>
  );
};

export default TeaList;
