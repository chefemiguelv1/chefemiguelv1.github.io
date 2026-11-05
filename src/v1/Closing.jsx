import { useState } from 'react';
import { IG_FEED as F } from '../data/instagram.js';
import { HOUSES } from '../data/houses.js';
import { INSTAGRAM } from '../data/content.js';

const out = { target: '_blank', rel: 'noopener' };
const n = (x) => x.toLocaleString('pt-PT');
const ICONS = {
  reel: <svg viewBox="0 0 24 24" fill="#fff"><path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm6 6v6l5-3z" /></svg>,
  album: <svg viewBox="0 0 24 24" fill="#fff"><path d="M8 2h13a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zM3 7h2v12h12v2H4a1 1 0 0 1-1-1z" /></svg>
};

// Instagram profile, as in the app; every click opens Instagram.
export function Instagram() {
  const [tab, setTab] = useState('all');
  const [all, setAll] = useState(false);
  const profile = 'https://www.instagram.com/' + F.username + '/';
  const items = F.items.filter((p) => tab === 'all' || p.type === tab);
  return (
    <section className="insta" id="instagram">
      <div className="head"><div><p className="label">Instagram</p><h2 className="title">Acompanhe a <em>cozinha</em></h2></div></div>
      <div className="igw">
        <div className="igw__top">
          <a className="igw__pic" href={profile} {...out}><img src={F.avatar} alt="" /></a>
          <div className="igw__info">
            <a className="igw__user" href={profile} {...out}><span>{F.username}</span></a>
            <p className="igw__name">{F.name}</p>
            <p className="igw__stats"><span><b>{n(F.posts)}</b> publicações</span><span><b>{n(F.followers)}</b> seguidores</span><span><b>{n(F.following)}</b> a seguir</span></p>
            <p className="igw__bio">{F.bio}</p>
            <a className="igw__site" href={'https://' + F.site} {...out}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 14a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1" /><path d="M14 10a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1" /></svg><span>{F.site}</span>
            </a>
          </div>
        </div>
        <div className="igw__btns">
          <a className="blue" href={profile} {...out}>Seguir</a>
          <a href={profile} {...out}><span className="igw__long">Enviar mensagem</span><span className="igw__short">Mensagem</span></a>
          <a href={profile} {...out} aria-label="Perfil"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="8" r="4" /><path d="M2 21c0-4 3-6 7-6s7 2 7 6M19 8v6M16 11h6" /></svg></a>
        </div>
        <div className="igw__tabs">
          <button type="button" className={tab === 'all' ? 'on' : ''} onClick={() => setTab('all')}><svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 3h5v5H3zM9.5 3h5v5h-5zM16 3h5v5h-5zM3 9.5h5v5H3zM9.5 9.5h5v5h-5zM16 9.5h5v5h-5zM3 16h5v5H3zM9.5 16h5v5h-5zM16 16h5v5h-5z" /></svg>Publicações</button>
          <button type="button" className={tab === 'reel' ? 'on' : ''} onClick={() => setTab('reel')}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="4" /><path d="M10 9l5 3-5 3z" fill="currentColor" /></svg>Reels</button>
        </div>
        <div className="igw__scroll">
          <div className={'igw__grid' + (all ? '' : ' short')}>
            {items.map((p) => (
              <a key={p.img} href={p.url || profile} {...out} aria-label={p.alt + ', ver no Instagram'}>
                <img src={p.img} alt="" loading="lazy" />{p.badge !== false && ICONS[p.type]}
              </a>
            ))}
          </div>
        </div>
        <div className="igw__end">
          {!all && <button className="igw__more" type="button" onClick={() => setAll(true)}>Ver mais publicações</button>}
          <a href={profile} {...out}>Ver mais no Instagram</a>
        </div>
      </div>
    </section>
  );
}

// Simple form, no request types (as agreed in the meeting). Not sent anywhere yet.
export function Contact() {
  const [sent, setSent] = useState(false);
  const submit = (e) => {
    e.preventDefault();
    if (!e.currentTarget.checkValidity()) { e.currentTarget.reportValidity(); return; }
    setSent(true); e.currentTarget.reset();
  };
  return (
    <section className="contact" id="contactos">
      <div>
        <p className="label">Contactos</p>
        <h2 className="title">Vamos pôr<br />a <em>mesa</em>?</h2>
        <p className="contact__note">Eventos, consultoria, imprensa ou outro assunto: deixe uma mensagem. A resposta chega por email.</p>
        <p className="contact__social">
          <a href={INSTAGRAM} {...out}><svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4.2" /><circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none" /></svg>Instagram</a>
        </p>
      </div>
      <form onSubmit={submit} noValidate>
        <label className="field flabel">Nome<input type="text" name="nome" placeholder="O seu nome" required /></label>
        <label className="field flabel">Email<input type="email" name="email" placeholder="nome@exemplo.pt" required /></label>
        <label className="field flabel">Telefone (opcional)<input type="tel" name="telefone" placeholder="+351" /></label>
        <label className="field flabel">Mensagem<textarea name="mensagem" rows="4" placeholder="Conte-nos o que tem em mente" required /></label>
        <label className="consent"><input type="checkbox" name="rgpd" required /><span>Li a <a href="privacidade.html" target="_blank">política de privacidade</a> e aceito que os meus dados sejam usados apenas para responder a esta mensagem.</span></label>
        <button className="send" type="submit">Enviar</button>
        {sent && <p className="sent">Obrigado. Respondemos em breve.</p>}
      </form>
    </section>
  );
}

// Footer organised like Noma's: columns on the right, MA Webs on top.
export function Footer() {
  const now = HOUSES.filter((h) => h.group === 'now');
  return (
    <footer className="sitefoot">
      <div className="sitefoot__badge">
        <a className="etiqueta-mawebs" href="https://mawebs.com" {...out} aria-label="Site feito pela MA Webs, mawebs.com">
          <span className="etiqueta-mawebs__nome">MA WEBS</span><span className="etiqueta-mawebs__local">FEITO À MÃO EM MAFRA</span>
        </a>
      </div>
      <div className="sitefoot__side">
        <a className="sitefoot__up" href="#top" aria-label="Voltar ao topo"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20V4M5 11l7-7 7 7" /></svg></a>
        <a className="sitefoot__word" href="#top">Miguel Castro e Silva</a>
      </div>
      <div className="sitefoot__cols">
        <div><h4>Contactos</h4><p>Miguel Castro e Silva</p><p>Cozinheiro e consultor</p><a href="#contactos">Enviar mensagem</a></div>
        <div><h4>Restaurantes</h4>{now.map((h) => <a key={h.id} href={h.link} {...out}>{h.name}</a>)}</div>
        <div><h4>O Chef</h4><a href="#chef">Biografia</a><a href="#percurso">Percurso</a><a href="#livros">Livros</a><a href="#imprensa">Imprensa</a><a href="#galeria">Galeria</a></div>
        <div><h4>Informação legal</h4><a href="privacidade.html">Política de privacidade</a><a href="cookies.html">Política de cookies</a><a href="termos.html">Termos de utilização</a><a href="termos.html#litigios">Resolução de litígios</a><a href="https://www.livroreclamacoes.pt" {...out}>Livro de Reclamações</a></div>
        <div><h4>Seguir</h4><a href={INSTAGRAM} {...out}>Instagram</a></div>
      </div>
      <p className="sitefoot__copy">© 2026 Miguel Castro e Silva. Todos os direitos reservados.</p>
    </footer>
  );
}
