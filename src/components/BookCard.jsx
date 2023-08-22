// prop'un obje olarak geldiğini ve
// içinde data olduğunu bildiğimizden
// prop'u dağıtıp direk data'ya erişiyoruz.

const BookCard = ({ data, setDeleteId, setShowDelete, handleRead, setShowEdit, setEditingItem }) => {
  return (
    <div className="d-flex justify-content-between align-items-center mt-5 border shadow rounded p-3">
      <div>
        {/* isRead değeri true ise üzerini çizer */}
        <h5 className={data.isRead ? "text-decoration-line-through" : ""}>
          {data.title}
        </h5>
        <p>{new Date(data.date).toLocaleString()}</p>
      </div>
      <div className="btn-group">
        <button onClick={() => {setDeleteId(data.id); setShowDelete(true);}} className="btn btn-danger">
          Sil
        </button>
        <button
          onClick={() => {setEditingItem(data); setShowEdit(true);}}
          className="btn btn-primary">
          Düzenle
        </button>
        <button onClick={() => handleRead(data)} className="btn btn-success">
          {data.isRead ? "Okundu" : "Okunmadı"}
        </button>
      </div>
    </div>
  );
};

export default BookCard;
