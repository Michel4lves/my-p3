import './InputText.css'

export default function InputTextArea({ text, name, type, s50s100,  colorBorderSet }) {
    return (
        <div className={`${'inputBox'} ${s50s100}`}>
            <textarea type={type} required id={name} name={name} autoComplete='false' className={`${"imput-txa"} ${"contact"} ${colorBorderSet}`}></textarea>
            <span className='placeholder'>{text}</span>
        </div>
    )
}