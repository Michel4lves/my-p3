import './ContactForm.css'
import InputText from '../inputs/InputText'
import InputTextArea from '../inputs/InputTextArea'
import GlassButton from '../buttons/GlassButton'
import { useState } from 'react'

export default function ContactForm() {

    const [title, setTitle] = useState('Enviar')

    function submit(e) {
        // e.preventDefault()
        setTitle('Obrigado!')
        setTimeout(() => {
            setTitle('Enviar')
        }, 2000)
    }


    return (
        <div className={`${"contactForm"} ${"color-bdr-2"}`}>
                <h2>Mande sua mensagem:</h2>
                <form className="form" name="form" action="https://formsubmit.co/michelsantosa@gmail.com" method="POST" onSubmit={submit}>
                    {/* submit configuration */}
                    <input type="hidden" name="_next" value="https://michel4lves.github.io/Thanks_Page/"></input>
                    <input type="hidden" name="_captcha" value="false"></input>
                    <input type="hidden" name="_template" value="table"></input>
                    {/* End of submit configuration */}
                    <InputText type="text" text="Nome" name="first-name" s50s100="s50" />
                    <InputText type="email" text="Email" name="email" s50s100="s50" />
                    <InputText type="text" text="Assunto" name="subject" s50s100="s100" />
                    <InputTextArea type="textarea" text="Escreva sua mensagem aqui..." name="message" s50s100="s100" />
                    <GlassButton title={title} activeClass='send' type="submit"/>
                </form>
        </div>
    )
}