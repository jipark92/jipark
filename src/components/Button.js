export default function Button(props) {
    return (
        <div className="btn-box">
            <button className="action-btn">{props.btnText}</button>
        </div>
    )
}