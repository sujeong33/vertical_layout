// 페이지 로드 이벤트
window.addEventListener('load', () => {
  // 배치할 요소를 감싸고 있는 부모 요소명
  const grid = new Isotope('section', {
    // 배치할 요소    
    itemSelector: 'article', // 배치할 요소
    columMidth: 'article', // 너빗값을 구할 요소명
    transitionDuration: '0.5s' // 화면 재배치 시 요소가 움직이는 시간
  });

  // 클릭한 모든 버튼 변수에 저장
  const btns = document.querySelectorAll('main ul li');
  // 버튼의 개수만큼 반복
  for ( let el of btns ) {

    // 각 버튼에 클릭 이벤트 연결
    el.addEventListener('click', (e) => {
      // 기본 기능 비활성
      e.preventDefault();

      // 변수 sort에 클릭한 대상의 자식인 a 요소의 href 속성값 저장
      const sort = e.currentTarget.querySelector('a').getAttribute('href');
      console.log(sort);

      // grid에 결과값으로 재정렬 기능 연결
      grid.arrange({
        // 옵션값으로 sort 변수 값 지정
        filter : sort
      })
    });
  }

  
});

