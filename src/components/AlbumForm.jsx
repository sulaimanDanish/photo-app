import React from 'react'
import styles from "../styles/AlbumForm.module.css";
import { useValue } from "../photoContext";

const AlbumForm = () => {
    const {handleAddAlbum,setAlbumName,albumName} = useValue();
    return (
        <div className={styles.parentContainer}>
            <div className={styles.container}>
                <div className={styles.formGroup}>
                    <input type="name" name="name" className={styles.formStyle} placeholder="Enter Name" id="name" autoComplete="off"
                    value={albumName} onChange={(e)=>setAlbumName(e.target.value)} />
                </div>
                <button className={styles.btn} onClick={()=>handleAddAlbum({name:albumName,images:[]})}>Add</button>
                <button className={styles.btn} onClick={()=>setAlbumName("")}>Clear</button>
            </div>
        </div>
    )
}

export default AlbumForm