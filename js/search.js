function loaded(){
      let filterCities = document.querySelectorAll('.filter_city li');
      let filterCityChilds = document.querySelectorAll('.filter_city_child');
      
      // 이벤트: 데스크탑에서 아래로 스크롤하면 헤더 색 변경
      document.onscroll = () => {
            if (window.innerWidth > 1024){
                  if (document.documentElement.scrollTop >= 100){
                        document.querySelector('.top_header_bg').setAttribute('style', 'background-color: white; box-shadow: 0px 3px 3px lightgray;')
                        document.querySelector('.top_header>#logo>img').setAttribute('src', '../../../image/logo.svg')
                        document.querySelectorAll('.top_header span').forEach(it => it.setAttribute('style', 'color: black;'))
                  }
                  if (document.documentElement.scrollTop == 0){
                        document.querySelector('.top_header_bg').setAttribute('style', 'background-color: none; box-shadow: none;')
                        document.querySelector('.top_header>#logo>img').setAttribute('src', '../../../image/logo_white.svg')
                        document.querySelectorAll('.top_header span').forEach(it => it.setAttribute('style', 'color: white;'))
                  }
            }
      }
      // 이벤트: 데스크탑에서 필터에 커서 올리면 필터목록 펼치기
      document.querySelector('.filter_label').onmouseover = () => {
            if (window.innerWidth > 1024){
                  document.querySelector('.filter_box').setAttribute('style', 'display: block;');
            }
      };
      // 이벤트: 모바일에서 필터 누르면 필터목록 펼치기
      document.querySelector('.filter_label').onclick = () => {
            if (window.innerWidth <= 1024){
                  document.querySelector('.filter_box').setAttribute('style', 'display: block;');
            }
      };
      // 이벤트: 모바일 필터 캔슬버튼 누르면 필터목록 닫기
      document.querySelector('.sub_header #btn_cancel').onclick = () => {
            document.querySelector('.filter_box').setAttribute('style', 'display: none;');
      };
      // 이벤트: 지역 필터에 마우스 올리면 세부지역 목록 표시
      for (let i=0; i<filterCities.length; i++){
            filterCities[i].onmouseover = () => {
                  for (let j=0; j<filterCityChilds.length; j++){
                        filterCityChilds[j].setAttribute('style', 'display: none;');
                  }
                  filterCityChilds[i].setAttribute('style', 'display: block;');
            };
      }
      // 이벤트: 햄버거버튼 클릭시 드로워 열기
      document.querySelector('.top_header #btn_more').onclick = () => {
            document.querySelector('#header_drawer').setAttribute('style', 'display: flex;');
      };
      // 이벤트: X버튼 클릭시 드로워 닫기
      document.querySelector('#header_drawer #btn_drawer_close').onclick = () => {
            document.querySelector('#header_drawer').setAttribute('style', 'display: none');
      };
      // 이벤트: 드로워 내부 서브메뉴 열기
      document.querySelector('#header_drawer #drawer_product').onclick = () => {
            document.querySelector('#header_drawer #drawer_product>ul').setAttribute('style', 'display: block')
      };
      document.querySelector('#header_drawer #drawer_more').onclick = () => {
            document.querySelector('#header_drawer #drawer_more>ul').setAttribute('style', 'display: block')
      };

      // 이벤트: 위로 버튼 누르면 부드럽게 스크롤
      document.querySelector('.btn_go_top').onclick = () => {
            if(window.pageYOffset > 0 ){
                  window.scrollTo({top:0, behavior:"smooth"});
            }
      };
}