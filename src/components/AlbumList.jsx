import styles from "../styles/List.module.css";
import AlbumForm from "./AlbumForm";
import { useValue } from "../photoContext";
import Album from "./Album";
import ImageList from "./ImagesList";

function AlbumList() {
  const { toggleAdd, albums, toggleImages } = useValue();
  return (
    <>
      <div className={styles.container}>
        {toggleAdd && <AlbumForm />}
        {toggleImages ? <div className="flex flex-wrap mt-2">
          {albums.map((item, index) => (
            <Album key={index} item={item} />
          ))}
        </div> :
          <ImageList />}
      </div>
    </>
  );
}

export default AlbumList;
