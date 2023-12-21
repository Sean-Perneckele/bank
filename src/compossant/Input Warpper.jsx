import '../designs/css/main.css'

function inputWrapper ({fore, titre, type, id}) {
    return (
        <div className="input-wrapper">
        <label for={fore}>{titre}</label>
        <input type={type} id={id} />
      </div>
    )
}

export default inputWrapper