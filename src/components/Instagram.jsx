export default function Instagram() {
  return (
    <section className="insta" id="instagram" aria-labelledby="ig-title">
      <div className="sec-head">
        <h2 className="sec-title" id="ig-title">Instagram</h2>
      </div>
      <div className="igw" id="igw">
        <div className="igw__top">
          <a className="igw__pic" data-ig><img id="igAvatar" alt="" /></a>
          <div className="igw__info">
            <a className="igw__user" data-ig><span id="igUser" /></a>
            <p className="igw__name" id="igName" />
            <p className="igw__stats"><span><b id="igPosts" /> <span data-i18n="ig.posts">publicações</span></span><span><b id="igFollowers" /> <span data-i18n="ig.followers">seguidores</span></span><span><b id="igFollowing" /> <span data-i18n="ig.following">a seguir</span></span></p>
            <p className="igw__bio" id="igBio" />
            <a className="igw__site" id="igSite"><svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M10 14a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1" /><path d="M14 10a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1" /></svg><span /></a>
          </div>
        </div>
        <div className="igw__btns">
          <a className="blue" data-ig data-i18n="ig.follow">Seguir</a>
          <a data-ig><span className="igw__long" data-i18n="ig.message">Enviar mensagem</span><span className="igw__short" data-i18n="ig.messageShort">Mensagem</span></a>
          <a data-ig aria-label="Perfil"><svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><circle cx={9} cy={8} r={4} /><path d="M2 21c0-4 3-6 7-6s7 2 7 6M19 8v6M16 11h6" /></svg></a>
        </div>
        <div className="igw__tabs" id="igTabs">
          <button type="button" className="on" data-t="all"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 3h5v5H3zM9.5 3h5v5h-5zM16 3h5v5h-5zM3 9.5h5v5H3zM9.5 9.5h5v5h-5zM16 9.5h5v5h-5zM3 16h5v5H3zM9.5 16h5v5h-5zM16 16h5v5h-5z" /></svg><span data-i18n="ig.tabPosts">Publicações</span></button>
          <button type="button" data-t="reel"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><rect x={3} y={3} width={18} height={18} rx={4} /><path d="M10 9l5 3-5 3z" fill="currentColor" /></svg>Reels</button>
        </div>
        <div className="igw__scroll"><div className="igw__grid short" id="igGrid" /></div>
        <div className="igw__end"><button className="igw__more" id="igMore" type="button" data-i18n="ig.more">Ver mais publicações</button><a data-ig data-i18n="ig.open">Ver mais no Instagram</a></div>
      </div>
    </section>
  );
}
