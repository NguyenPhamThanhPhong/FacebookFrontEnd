import { Button } from "react-bootstrap";
import DeleteIcon from '@mui/icons-material/Delete';
const Itemchat = (props) => {
  const containerStyle = {
    width: "100%",
  };

  const innerContainerStyle = {
    display: "flex",
    justifyContent: props.float === "right" ? "flex-end" : "flex-start",
  };

  const messageStyle = {
    maxWidth: `45%`,
    borderRadius: "20px",
    backgroundColor: props.float === "right" ? "var(--background-chat)" : "var(--background-navbar)",
    color: "white",
    padding: "10px",
    margin: "0 10px",
    overflowWrap: "break-word",
  };

  const buttonStyle = {
    margin: "0 10px",
    color:'white',
    cursor:'pointer',
    
  };

  return (
    <div style={containerStyle}>
      <div style={innerContainerStyle}>
        {props.float === "right" && (
          <div style={{display:'flex',alignItems:'center'}}>
            <DeleteIcon onClick={() => {
              console.log('xóa')
            }} style={buttonStyle} />
          </div>
        )}
        <div style={messageStyle}>
          <p style={{ margin: "0 10px" }}>{props.text}</p>
        </div>
      </div>
    </div>
  );
};

export default Itemchat;
