export default function Contact() {
  return (
    <section className="contact" id="contactos" aria-labelledby="contact-title">
      <div className="contact__lead">
        <h2 className="sec-title" id="contact-title" data-i18n="nav.contact">Contactos</h2>
        <p className="contact__note" data-i18n="contact.note">Eventos, consultoria, imprensa ou outro assunto: escreva-nos. A resposta chega por email.</p>
        <ul className="contact__social">
          <li><a href="https://www.instagram.com/chef_castrosilvamiguel/" target="_blank" rel="noopener">Instagram</a></li>
        </ul>
      </div>
      <form className="cform" id="cform" noValidate>
        <label className="field"><span data-i18n="q3.name">Nome</span><input name="nome" autoComplete="name" required /></label>
        <div className="cform__two">
          <label className="field"><span>Email</span><input name="email" type="email" autoComplete="email" required /></label>
          <label className="field"><span data-i18n="cf.phone">Telefone (opcional)</span><input name="telefone" type="tel" autoComplete="tel" /></label>
        </div>
        <label className="field"><span data-i18n="cf.msg">Mensagem</span><textarea name="mensagem" rows={5} required defaultValue={""} /></label>
        <label className="check"><input type="checkbox" name="rgpd" required /><span data-i18n="q3.rgpd">Li a <a href="privacidade.html" target="_blank">política de privacidade</a> e aceito que os meus dados sejam usados apenas para responder a esta mensagem.</span></label>
        <div className="cform__send"><button type="submit" className="btn" data-i18n="cf.send">Enviar mensagem</button></div>
        <div className="quiz__done" hidden>
          <p className="quiz__thanks" data-i18n="q.thanks">Obrigado. <em>Até já.</em></p>
          <p data-i18n="cf.thanksNote">A mensagem chegou. Respondemos em breve.</p>
        </div>
      </form>
    </section>
  );
}
