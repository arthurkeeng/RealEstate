import { deleteObject } from "firebase/storage";
import { v4 } from "uuid";

export const filterCategories = (list, category = null) => {
  if (category === null) {
    return list;
  }
  return list.filter((item) => {
    return item.category === category;
  });
};

export const uploadImage = (
  e,
  storage,
  getDownloadURL,
  uploadBytes,
  setImageUpload,
  setFormData,
  imageUpload,
  formData,
  ref
) => {
  setImageUpload(e.target.files[0]);
  const imageRef = ref(storage, `image/${imageUpload.name + v4()}`);
  uploadBytes(imageRef, imageUpload).then(() => {
    alert("image uploaded successfully..");
  });
  getDownloadURL(imageRef).then((url) => {
    // setUrl(url);
    setFormData({ ...formData, image: url });
  });
};

export const deleteImage = (ref, getStorage, url, deleteObject) => {
  const deleteRef = ref(getStorage(), url);
  deleteObject(deleteRef)
    .then(() => alert("deleted successfully"))
    .catch((err) => {
      alert("something happened");
    });

  // const imageRef = ref(storage, url);
  // deleteObject(imageRef)
  //   .then(() => {
  //     alert("image has been deleted");
  //   })
  //   .catch((err) => {
  //     alert("image was not deleted");
  //   });
};
