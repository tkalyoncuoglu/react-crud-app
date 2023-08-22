import { useState } from "react";

const EditModal = ({editingItem,setShowEdit,updateItem}) => {

  const [title, setTitle] = useState(editingItem.title);

  return (
    <div className="delete-modal">
      <div className="modal-inner">
        <h5>Kitap ismini düzenle</h5>
        <input value={title}
         className="form-control shadow" type="text"
         // elemanın düzenlenmiş ismini
         // app'js ' deki state'e gönderme
         onChange={(e)=> setTitle(e.target.value)} />
        <div className="d-flex justify-content-between mt-3">
            <button onClick={()=> setShowEdit(false)}
             className="btn btn-warning">Vazgeç</button>
            <button onClick={()=> {
              editingItem.title = title;
              editingItem.date = new Date();
              updateItem()}}
             className="btn btn-success">Kaydet</button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
