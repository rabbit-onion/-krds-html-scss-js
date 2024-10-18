//

// .all-menu를 클릭했을 때
$('.all-menu').click(function () {
  // #nav-all에게 .active 클래스를 추가
  $('#nav-all').addClass('active');
});

// #nav-all 아래의 .close를 클릭했을 때
$('#nav-all .close').click(function () {
  // #nav-all 의 .active 클래스를 제거
  $('#nav-all').removeClass('active');
});

// #gnb에 hover했을 때
$('#gnb')
  .mouseenter(function () {
    // #header에 .active 클래스 추가
    $('#header').addClass('active');
  })
  .mouseleave(function () {
    // #header에 .active 클래스 제거
    $('#header').removeClass('active');
  });

// .lang 클릭했을 때
$('.lang').click(function () {
  // .lang__list 에 .blind 클래스 토글
  $('.lang__list').toggleClass('blind');
});
