//우클릭 이벤트
const contextMenu = document.getElementById('contextMenu');
const ctxMenu = document.getElementById('context_menu');
//우클릭 시 메뉴박스 보이게
contextMenu.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    // 노출 및 위치 설정
    ctxMenu.style.display = 'block';
    ctxMenu.style.background = '#ccc';
    ctxMenu.style.width = '180px';
    ctxMenu.style.top = e.pageY+'px';
    ctxMenu.style.left = e.pageX+'px';
});
//어디든 클릭 시 메뉴박스 안보이게(대상을 window/document 둘중 하나로 하면 됌)
document.addEventListener('click', () => ctxMenu.style.display = 'none');