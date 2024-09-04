import React from 'react';
import styles from "../styles/AlbumForm.module.css";
import { useValue } from "../photoContext";

const ImageForm = () => {
    const {addImage,imageTitle, setImageTitle,imageURL, setImageURL,updateImage,updateImg} = useValue();

    return (
        <div className={styles.parentContainer}>
            <div className={styles.container}>
                <div className={styles.formGroup}>
                    <input
                        type="text"
                        name="imageTitle"
                        className={styles.formStyle}
                        placeholder="Enter Image Title"
                        id="imageTitle"
                        autoComplete="off"
                        value={imageTitle}
                        onChange={(e) => setImageTitle(e.target.value)}
                    />
                </div>
                <div className={styles.formGroup}>
                    <input
                        type="url"
                        name="imageURL"
                        className={styles.formStyle}
                        placeholder="Enter Image URL"
                        id="imageURL"
                        autoComplete="off"
                        value={imageURL}
                        onChange={(e) => setImageURL(e.target.value)}
                    />
                </div>
                <button className={styles.btn} onClick={updateImage ? updateImg : addImage}>{updateImage ? 'Update' : 'Add Image'}</button>
                <button className={styles.btn} onClick={() => { setImageTitle(''); setImageURL(''); }}>Clear</button>
            </div>
        </div>
    )
}

export default ImageForm