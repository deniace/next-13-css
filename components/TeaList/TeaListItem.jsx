import Image from "next/image";
import style from "./TeaListItem.module.css";

const TeaListItem = (props) => {
  const { tea } = props;

  return (
    <li className={style.TeaListItem}>
      <div className={style.ImageContainer}>
        <Image
          fill={true}
          src={tea.image}
          alt=""
          object-fit="cover"
          object-position="center"
          priority={true}
        />
      </div>

      <div>
        <h2 className={style.Title}>{tea.name}</h2>
        <p>{tea.description}</p>
      </div>
    </li>
  );
};

export default TeaListItem;
