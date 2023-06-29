
import "./view.css";

const View = ({handleCheck,
  handleSave,
  handleDelete,
  handleDoubleClick,
  handleFix,
  text,
  value,
  select,
  setText,
  list,
  setList,
  selectedValue
})=> {
  
  //debugger
 
  return (


    <li key={value.id}>
      {selectedValue === value ? (
        <>
          <input
            className="checkbox"
            type="checkbox"
            checked={value.isComplete}
            onChange={() => handleCheck(value.id)}
          />
          <div
            className={value.isComplete ? "completed" : ""}
            onDoubleClick={() => handleDoubleClick(value)}
          >
            {value.content}
          </div>
          <button className="contain-but" onClick={() => handleFix(value)}>
            Sửa
          </button>
          <button className="contain-but" onClick={() => handleDelete(value)}>
            Xoá
          </button>
        </>
      ) : (
        <>
          <input
            className="checkbox"
            type="checkbox"
            checked={value.isComplete}
            onChange={() => handleCheck(value.id)}
          />
          <div
            className={value.isComplete ? "completed" : ""}
            onDoubleClick={() => handleDoubleClick(value)}
          >
            {value.content}
          </div>
          <button className="contain-but" onClick={() => handleFix(value)}>
            Sửa
          </button>
          <button className="contain-but" onClick={() => handleDelete(value)}>
            Xoá
          </button>
        </>
      )}
    </li>
  );
};
export default View;
