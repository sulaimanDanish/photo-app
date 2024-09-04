import { useContext, useState, createContext, useEffect } from "react";
import { collection, doc, setDoc, getDocs, onSnapshot, updateDoc, arrayUnion, deleteDoc } from "firebase/firestore";
import { db } from "./firebaseInit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PhotoContext = createContext();

const useValue = () => {
    const value = useContext(PhotoContext);
    return value;
}

const PhotoProvider = ({ children }) => {
    const [toggleAdd, setToggleAdd] = useState(false);
    const [albums, setAlbums] = useState([]);
    const [albumName, setAlbumName] = useState("");
    const [toggleImages, setToggleImages] = useState(true);
    const [toggleAddImages, setToggleAddImages] = useState(false);
    const [imageTitle, setImageTitle] = useState('');
    const [imageURL, setImageURL] = useState('');
    const [albumID, setAlbumID] = useState('');
    const [images, setImages] = useState([]);


    useEffect(() => {
        async function fetchData() {
            const query = await getDocs(collection(db, "albums"));
            const folder = query.docs.map((doc) => {
                return {
                    id: doc.id,
                    ...doc.data()
                }
            });
            setAlbums(folder);
        }

        fetchData();

    }, [])

    const handleAdd = () => {
        setToggleAdd(!toggleAdd);
        if (toggleAddImages == true) {
            setToggleAddImages(!toggleAddImages);
        }
        if (toggleImages == false) {
            setToggleImages(!toggleImages);
        }
    }

    const handleAddAlbum = async (obj) => {
        setAlbums([...albums, obj]);
        const AlbumRef = doc(collection(db, "albums"));
        await setDoc(AlbumRef, obj);
        setAlbumName("");
        toast.success("Album added!");
    }

    const handleDelete = async (id) => {
        await deleteDoc(doc(db, "albums", id));

        const newArray = albums.filter((album, i) => album.id != id);
        setAlbums(newArray);
    }

    const toggleAlbum = (id) => {
        if (toggleImages) {
            setAlbumID(id);
            const item = albums.find((album, i) => album.id === id);
            setImages(item.images);
        }
        setToggleImages(!toggleImages);
        if (toggleAddImages == true) {
            setToggleAddImages(!toggleAddImages);
        }
    }

    const handleAddImages = () => {
        setToggleAddImages(!toggleAddImages);
        if (toggleAdd == true) {
            setToggleAdd(!toggleAdd);
        }
    }

    const addImage = async () => {
        const newImage = { title: imageTitle, url: imageURL };
        setImageTitle('');
        setImageURL('');
        setToggleAddImages(!toggleAddImages);
        const docRef = doc(db, "albums", albumID);
        await updateDoc(docRef, {
            images: arrayUnion(newImage)
        });
        await onSnapshot(doc(db, "albums", albumID), (doc) => {
            const data = doc.data();
            setImages(data.images);
            const index = albums.findIndex((album, i) => album.id === albumID);
            if (index) {
                const mapped = albums.map((item, i) => {
                    if (index === i) {
                        item.images = data.images;
                    }
                    return item
                })
                setAlbums(mapped);
            }

        });

    }

    const editImage = (i) => {

    }

    const deleteImage = (i) => {
        const obj = albums[albumID].images[i];
        console.log(obj);
    }

    return (
        <PhotoContext.Provider value={{ toggleAdd, handleAdd, handleAddAlbum, images, albums, albumName, setAlbumName, handleDelete, toggleAlbum, toggleImages, toggleAddImages, handleAddImages, addImage, imageTitle, setImageTitle, imageURL, setImageURL,deleteImage,editImage }}>
            {children}
        </PhotoContext.Provider>
    )
}

export { useValue };
export default PhotoProvider;