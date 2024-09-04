import React from "react";
import styles from "../styles/ImageList.module.css";
import { useValue } from "../photoContext";
import ImageForm from "./ImageForm";

function ImageList() {
  const { toggleAlbum, handleAddImages, toggleAddImages, images,editImage,deleteImage } = useValue();

  return (
    <>
      <div className={styles.navigation}>
        <div className={styles.backButton}>
          <button onClick={toggleAlbum}>Back</button>
        </div>
        <div className={styles.addButton}>
          <button onClick={handleAddImages}>{toggleAddImages ? "Cancel" : "+Images"}</button>
        </div>
      </div>
      {toggleAddImages && <ImageForm />}
      <div className={styles.imageContainer}>
        <ul className={styles.imageGrid}>
          {images.map((item, index) => (
            <li key={index}>
              <div>
                <a href="" className={styles.imageWrapper}>
                  <figure className={styles.figures}>
                    <img className={styles.images} src={item.url} />
                    <figcaption className={styles.figcaptions}>
                      {item.title}
                      <button onClick={()=>editImage(index)}>Edit</button>
                      <button onClick={()=>deleteImage(index)}>Delete</button>
                      </figcaption>
                  </figure>
                </a>
              </div>

            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ImageList;
