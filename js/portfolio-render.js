// 카테고리 페이지의 #portfolio-grid 안에 PORTFOLIO_DATA의 영상을
// 카드 형태로 렌더링합니다. (js/portfolio-data.js 보다 뒤에 로드되어야 함)
(function () {
  const container = document.getElementById('portfolio-grid');
  if (!container) return;

  const category = container.dataset.category;
  const items = (window.PORTFOLIO_DATA && window.PORTFOLIO_DATA[category]) || [];

  if (items.length === 0) {
    container.innerHTML = `
      <p class="col-span-full text-center text-brand-ink/50 py-24">
        아직 등록된 영상이 없습니다. 곧 업데이트될 예정입니다.
      </p>`;
    return;
  }

  container.innerHTML = items
    .map((item) => {
      const posterAttr = item.poster ? ` poster="${item.poster}"` : '';
      const caption = item.title
        ? `<div>
             <h3 class="font-heading font-bold text-brand-dark">${item.title}</h3>
             ${item.description ? `<p class="text-sm text-brand-ink/60 mt-1">${item.description}</p>` : ''}
           </div>`
        : '';

      return `
        <div class="reveal flex flex-col gap-3">
          <div class="portfolio-video-card relative aspect-[4/3] rounded-xl overflow-hidden border-2 border-brand-green bg-brand-dark">
            <video
              class="absolute inset-0 w-full h-full object-cover"
              src="${item.video}"${posterAttr}
              autoplay
              muted
              loop
              playsinline
              preload="metadata"
            ></video>
          </div>
          ${caption}
        </div>`;
    })
    .join('');

  container.querySelectorAll('.reveal').forEach((el) => {
    if (window.revealObserver) {
      window.revealObserver.observe(el);
    } else {
      el.classList.add('is-visible');
    }
  });
})();
