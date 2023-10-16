/*
**************************
CustomCalendar 2.0.2
regDate 2023.10.16
Copyright (c) 2022 nixpluvia

Contact whbear12@gmail.com

Released under the MIT License
**************************
*/

function CustomCalendar(el, option){
    this.cal = {};
    this.cal.$calendar;             //캘린더 요소 element
    this.cal.$header;               //캘린더 헤더 element
    this.cal.$headerBox;            //캘린더 헤더 element
    this.cal.$title;                //캘린더 타이틀 박스 element
    this.cal.$year;                 //캘린더 타이틀 년도표시 element
    this.cal.$month;                //캘린더 타이틀 월 표시 element
    this.cal.$btnMonths;            //캘린더 헤더 버튼 element
    this.cal.$btnMonthPrev;         //캘린더 헤더 이전달 버튼 element
    this.cal.$btnMonthNext;         //캘린더 헤더 다음달 버튼 element
    this.cal.$body;                 //캘린더 표시 영역 element
    this.cal.$table;                //캘린더 테이블 element
    this.cal.$td;                   //캘린더 날짜 td element
    this.cal.$btnDay;               //캘린더 날짜 선택 버튼 element

    this.cal.header;                //캘린더 헤더 클래스 명
    this.cal.headerBox;             //캘린더 헤더 클래스 명
    this.cal.title;                 //캘린더 타이틀 박스 클래스 명
    this.cal.year;                  //캘린더 타이틀 년도표시 클래스 명
    this.cal.month;                 //캘린더 타이틀 월 표시 클래스 명
    this.cal.btnMonths;             //캘린더 헤더 버튼 클래스 명
    this.cal.btnMonthPrev;          //캘린더 헤더 이전달 버튼 클래스 명
    this.cal.btnMonthNext;          //캘린더 헤더 다음달 버튼 클래스 명
    this.cal.body;                  //캘린더 표시 영역 클래스 명
    this.cal.table;                 //캘린더 테이블 클래스 명
    this.cal.btnDay;                //캘린더 날짜 선택 버튼 클래스 명
    this.cal.utils = {};            //===캘린더 utils===
    this.cal.utils.container;       //캘린더 utils 박스 클래스 명
    this.cal.utils.btnFilter;       //캘린더 filter 버튼 클래스 명
    this.cal.type = {};             //===캘린더 타입===
    this.cal.type.event;            //캘린더 이벤트 사용시 클래스 명

    this.attr = {};                 //Data Attribute
    this.attr.cellDate;             //td 날짜 데이터
    this.attr.cellDay;              //td 요일 데이터
    this.attr.event = {};           //===event===
    this.attr.event.id;             //이벤트 아이디
    this.attr.event.title;          //이벤트 제목
    this.attr.event.startDate;      //이벤트 시작일
    this.attr.event.endDate;        //이벤트 종료일
    this.attr.event.rank;           //이벤트 정렬 기준
    this.attr.event.range;          //이벤트 날짜 길이

    this.date = {};
    this.date.today;                //오늘 날짜
    this.date.todayYear;            //오늘 날짜 기준 년도
    this.date.todayMonth;           //오늘 날짜 기준 월
    this.date.todayDate;            //오늘 날짜 기준 날짜
    this.date.todayDay;             //오늘 날짜 기준 요일

    this.date.year;                 //달력 날짜 기준 년도
    this.date.month;                //달력 날짜 기준 월
    this.date.first;                //달력 날짜 첫날
    this.date.firstDay;             //달력 날짜 첫날 요일
    this.date.last;                 //달력 날짜 마지막날
    this.date.lastDate;             //달력 날짜 마지막날 날짜

    this.date.prev;                 //달력 날짜 기준 전 달
    this.date.prevYear;             //달력 날짜 기준 전 달 년도
    this.date.prevMonth;            //달력 날짜 기준 전 달 월
    this.date.prevDate;             //달력 날짜 기준 전 달 일
    this.date.prevDay;              //달력 날짜 기준 전 달 요일
    this.date.next;                 //달력 날짜 기준 다음 달
    this.date.nextYear;             //달력 날짜 기준 다음 달 년도
    this.date.nextMonth;            //달력 날짜 기준 다음 달 월
    this.date.nextDate;             //달력 날짜 기준 다음 달 일
    this.date.nextDay;              //달력 날짜 기준 다음 달 요일

    this.drag = {};                 //===드래그 이벤트===
    this.drag.isPress;              //드래그 시작 여부
    this.drag.startDate;            //선택된 시작일
    this.drag.endDate;              //선택된 종료일
    this.drag.dateRange;            //선택된 이벤트 날짜 배열
    this.drag.dateRangeEl;          //선택된 이벤트 날짜의 td 배열

    this.event = {};                //===캘린더 이벤트===
    this.event.name;                //이벤트 Id 기본 이름
    this.event.data = [];           //이벤트 데이터
    this.event.dataRows = {};       //이벤트 tr 별 데이터 구분
    this.event.items = [];          //이벤트 데이터 항목
    this.event.filter = [];         //이벤트 필터 데이터

    this.pin = {};                  //===캘린더 이벤트 핀===
    this.pin.size;                  //핀 사이즈
    this.pin.maxSize;               //핀 총 사이즈
    this.pin.maxNum;                //핀 생성 갯수
    this.pin.container;             //핀 박스 클래스 명
    this.pin.$container;            //핀 박스 element
    this.pin.pin;                   //핀 클래스 명
    this.pin.title;
    this.pin.typeMore;              //핀 더보기 타입 클래스 명
    this.pin.more;                  //핀 더보기 클래스 명
    this.pin.content;               //핀 컨텐츠 (카테고리, 제목) 클래스 명
    this.pin.extension;             //핀 확장 클래스 명 (다음줄)
    this.pin.category;              //핀 카테고리 클래스 명

    this.pop = {};                  //===캘린더 팝업===
    this.pop.container;             //팝업 박스
    this.pop.head;                  //상단(날짜, 닫기 버튼) 클래스 명
    this.pop.body;                  //컨텐츠 클래스 명
    this.pop.btnClose;              //닫기 버튼 클래스 명
    this.pop.typeDetail;            //형태 (기본) 클래스 명
    this.pop.typeMore;              //형태 (더보기) 클래스 명
    this.pop.list = {};             //---더보기 목록---
    this.pop.list.content;          //더보기 목록 컨텐츠 클래스 명
    this.pop.list.item;             //더보기 목록 클래스명
    this.pop.list.pin;              //더보기 핀 클래스명
    this.pop.detail = {};           //---상세보기---
    this.pop.detail.content;        //상세 컨텐츠 클래스 명
    this.pop.detail.category;       //상세 카테고리 클래스 명
    this.pop.detail.list;           //상세 항목 리스트 클래스 명
    this.pop.detail.item;           //상세 항목 아이템 클래스 명
    this.pop.detail.tit;            //상세 항목 아이템 제목 클래스 명
    this.pop.detail.itemCon;        //상세 항목 아이템 컨텐츠 클래스 명

    this.prompt = {};               //===입력창===
    this.prompt.container;          //입력창 클래스 명
    this.prompt.boxWrap;            //입력창 상자 클래스 명
    this.prompt.title;              //입력창 제목 클래스 명
    this.prompt.content;            //입력창 컨텐츠 클래스 명
    this.prompt.input;              //입력창 컨텐츠 input box 클래스 명
    this.prompt.select;             //입력창 컨텐츠 select box 클래스 명
    this.prompt.radioList;          //입력창 컨텐츠 radio list 클래스 명
    this.prompt.radio;              //입력창 컨텐츠 radio box 클래스 명
    this.prompt.value;              //입력창 컨텐츠 값 전달 form 클래스 명
    this.prompt.btnWrap;            //입력창 컨텐츠 버튼 박스 클래스 명
    this.prompt.btn;                //입력창 컨텐츠 버튼 클래스 명
    this.prompt.submit;             //입력창 컨텐츠 전송 버튼 클래스 명
    this.prompt.cancel;             //입력창 컨텐츠 취소 버튼 클래스 명

    this.filter = {};               //=== 이벤트 필터 ===
    this.filter.container;          //필터 영역 클래스 명
    this.filter.content;            //필터 팝업 클래스 명
    this.filter.header;             //필터 헤더 클래스 명
    this.filter.title;              //필터 헤더 타이틀 클래스 명
    this.filter.body;               //필터 바디 클래스 명
    this.filter.btnClose;           //필터 닫기 버튼 클래스 명
    this.filter.list;               //필터 리스트 클래스 명
    this.filter.item;               //필터 리스트 아이템 클래스 명
    this.filter.itemTitle;          //필터 리스트 타이틀 클래스 명
    this.filter.checkList;          //필터 체크박스 리스트 클래스 명
    this.filter.checkListItem;      //필터 체크박스 리스트 아이템 클래스 명
    this.filter.checkbox;           //필터 체크박스 클래스 명
    this.filter.checkValue;         //필터 체크박스 input 클래스 명
    this.filter.checkboxName;       //필터 체크박스 name 앞 자리 명칭
    this.filter.btnWrap;            //필터 버튼박스 클래스 명
    this.filter.btn;                //필터 버튼 공통 클래스 명
    this.filter.typeSearch;         //필터 검색 버튼 클래스 명
    this.filter.typeReset;          //필터 리셋 버튼 클래스 명

    this.lang = {};                 //===다국어===
    this.lang.category;             //카테고리
    this.lang.title;                //제목
    this.lang.startDate;            //시작일
    this.lang.endDate;              //종료일
    this.lang.close;                //닫기
    this.lang.sun;                  //일
    this.lang.mon;                  //월
    this.lang.tue;                  //화
    this.lang.wed;                  //수
    this.lang.thu;                  //목
    this.lang.fri;                  //금
    this.lang.sat;                  //토
    this.lang.submit;               //확인
    this.lang.cancel;               //취소

    this.state = {};                //===상태===
    this.state.default;             //기본
    this.state.able;                //선택 가능
    this.state.disable;             //선택 불가능
    this.state.hide;                //숨김
    this.state.active;              //활성화됨
    this.state.selected;            //선택됨

    this.options = {};              //===옵션===
    this.options.tableSummary;      //테이블 요약내용
    this.options.dayNames;          //캘린더 요일 이름
    this.options.showsOtherMonth;   //이전 달, 다음 달 날짜 표시 여부
    this.options.showsPast;         //지난 일자 과거처리
    this.options.useDateEvent;      //이벤트 사용 여부
    this.options.useDragRange;      //드래그 사용 여부
    this.options.eventAuth;         //이벤트 사용 권한

    this.icon = {};                 //===아이콘===
    this.icon.filter;               //필터 아이콘

    this.init(el, option);//초기화 실행
    // this.info();
}

//캘린더 정보
CustomCalendar.prototype.info = function(){
    console.log('------------------');
}

//캘린더 초기화
CustomCalendar.prototype.init = function(el, option){
    this.cal.$calendar = $(el);//캘린더 요소 초기화
    if (option == undefined) {
        this.cal.header = 'cal-header';
        this.cal.headerBox = 'cal-header-box';
        this.cal.title = 'cal-title';
        this.cal.year = 'cal-year';
        this.cal.month = 'cal-month';
        this.cal.btnMonths = 'btn-cal';
        this.cal.btnMonthPrev = 'prev';
        this.cal.btnMonthNext = 'next';
        this.cal.body = 'cal-body';
        this.cal.table = 'calendar';
        this.cal.btnDay = 'btn-day';
        this.cal.utils.container = 'cal-utils';
        this.cal.utils.$btnFilter = 'btn-filter';
        this.cal.type.event = 'type-event';

        this.attr.cellDate = 'data-date';
        this.attr.cellDay = 'data-day';
        this.attr.event.id = 'data-event-id';
        this.attr.event.title = 'data-event-title';
        this.attr.event.startDate = 'data-event-start';
        this.attr.event.endDate = 'data-event-end';
        this.attr.event.rank = 'data-event-rank';
        this.attr.event.range = 'data-event-range';

        this.event.name = 'ce_';
        
        this.pin.size = 22;
        this.pin.maxNum = 4;
        this.pin.pin = 'cal-pin';
        this.pin.title = 'con-title';
        this.pin.typeMore = 'type-more';
        this.pin.more = 'cal-pin-more';
        this.pin.content = 'cal-pin-con';
        this.pin.extension = 'cal-extension';
        this.pin.category = 'con-category';
        
        this.pop.container = 'cal-pop';
        this.pop.head = 'cal-pop-head';
        this.pop.body = 'cal-pop-body';
        this.pop.btnClose = 'cal-pop-close';
        this.pop.typeDetail = 'detail';
        this.pop.typeMore = 'more';
        this.pop.list.content = 'cal-pop-list';
        this.pop.list.item = 'cal-pop-list-item';
        this.pop.list.pin = 'cal-pop-list-pin';
        this.pop.detail.content = 'cal-pop-detail';
        this.pop.detail.category = 'e-category';
        this.pop.detail.list = 'detail-list';
        this.pop.detail.item = 'detail-item';
        this.pop.detail.tit = 'item-tit';
        this.pop.detail.itemCon = 'item-con';

        this.prompt.container = 'cal-prompt';
        this.prompt.boxWrap = 'prompt-box';
        this.prompt.title = 'tit';
        this.prompt.content = 'content';
        this.prompt.input = 'cnf-intxt';
        this.prompt.select = 'cnf-sel';
        this.prompt.radioList = 'cnf-radio-list';
        this.prompt.radio = 'cnf-radio';
        this.prompt.value = 'cnf-value';
        this.prompt.btnWrap = 'btn-wrap';
        this.prompt.btn = 'cnf-btn';
        this.prompt.submit = 'submit';
        this.prompt.cancel = 'cancel';


        this.filter.container = 'cal-filter';
        this.filter.content = 'flt-box';
        this.filter.header = 'flt-header';
        this.filter.title = 'flt-title';
        this.filter.btnClose = 'btn-flt-close';
        this.filter.body = 'flt-body';
        this.filter.list = 'flt-list';
        this.filter.item = 'flt-item';
        this.filter.itemTitle = 'flt-item-tit';
        this.filter.checkList = 'flt-ck-list';
        this.filter.checkListItem = 'flt-ck-item';
        this.filter.checkbox = 'flt-ck';
        this.filter.checkValue = 'flt-ck-val';
        this.filter.checkboxName = 'flt_';
        this.filter.btnWrap = 'flt-btn-wrap';
        this.filter.btn = 'btn-flt';
        this.filter.typeSearch = 'type-search';
        this.filter.typeReset = 'type-reset';
        

        this.lang.category = '카테고리';
        this.lang.title = '제목';
        this.lang.startDate = '시작일';
        this.lang.endDate = '종료일';
        this.lang.close = '닫기';
        this.lang.more = '더보기';
        this.lang.sun = '일';
        this.lang.mon = '월';
        this.lang.tue = '화';
        this.lang.wed = '수';
        this.lang.thu = '목';
        this.lang.fri = '금';
        this.lang.sat = '토';
        this.lang.submit = '확인';
        this.lang.cancel = '취소';
        this.lang.search = '검색';
        this.lang.reset = '초기화';

        this.state.default = 'default';
        this.state.able = 'able';
        this.state.disable = 'disable';
        this.state.hide = 'hide';
        this.state.active = 'act';
        this.state.selected = 'selected';

        this.options.tableSummary = '';
        this.options.dayNames = [this.lang.sun, this.lang.mon, this.lang.tue, this.lang.wed, this.lang.thu, this.lang.fri, this.lang.sat];
        this.options.showsOtherMonth = false;
        this.options.useDateEvent = false;
        this.options.useDragRange = false;
        this.options.useEventPop = true;
        this.options.eventAuth = true;
    } else {
        option.cal = option.cal == undefined ? this.cal : option.cal;
        this.cal.header = option.cal.header == undefined ? 'cal-header' : option.cal.header;
        this.cal.headerBox = option.cal.headerBox == undefined ? 'cal-header-box' : option.cal.headerBox;
        this.cal.title = option.cal.title == undefined ? 'cal-title' : option.cal.title;
        this.cal.year = option.cal.year == undefined ? 'cal-year' : option.cal.year;
        this.cal.month = option.cal.month == undefined ? 'cal-month' : option.cal.month;
        this.cal.btnMonths = option.cal.btnMonths == undefined ? 'btn-cal' : option.cal.btnMonths;
        this.cal.btnMonthPrev = option.cal.bonthPrev == undefined ? 'prev' : option.cal.btnMonthPrev;
        this.cal.btnMonthNext = option.cal.bonthNext == undefined ? 'next' : option.cal.btnMonthNext;
        this.cal.body = option.cal.body == undefined ? 'cal-body' : option.cal.body;
        this.cal.table = option.cal.table == undefined ? 'calendar' : option.cal.table;
        this.cal.btnDay = option.cal.btnDay == undefined ? 'btn-day' : option.cal.btnDay;

        option.cal.utils = option.cal.utils == undefined ? this.cal.utils : option.cal.utils;
        this.cal.utils.container = option.cal.utils.container == undefined ? 'cal-utils' : option.cal.utils.container;
        this.cal.utils.btnFilter = option.cal.utils.btnFilter == undefined ? 'btn-filter' : option.cal.utils.btnFilter;
        
        option.cal.type = option.cal.type == undefined ? this.cal.type : option.cal.type;
        this.cal.type.event = option.cal.type.event == undefined ? 'type-event' : option.cal.type.event;

        
        option.attr = option.attr == undefined ? this.attr : option.attr;
        this.attr.cellDate = option.attr.cellDate == undefined ? 'data-date' : option.attr.cellDate;
        this.attr.cellDay = option.attr.cellDay == undefined ? 'data-day' : option.attr.cellDay;

        option.attr.event = option.attr.event == undefined ? this.attr.event : option.attr.event;
        this.attr.event.id = option.attr.event.id == undefined ? 'data-event-id' : option.attr.event.id;
        this.attr.event.title = option.attr.event.title == undefined ? 'data-event-title' : option.attr.event.title;
        this.attr.event.startDate = option.attr.event.startDate == undefined ? 'data-event-start' : option.attr.event.startDate;
        this.attr.event.endDate = option.attr.event.endDate == undefined ? 'data-event-end' : option.attr.event.endDate;
        this.attr.event.rank = option.attr.event.rank == undefined ? 'data-event-rank' : option.attr.event.rank;
        this.attr.event.range = option.attr.event.range == undefined ? 'data-event-range' : option.attr.event.range;


        option.event = option.event == undefined ? this.event : option.event;
        this.event.name = option.event.name == undefined ? 'ce_' : option.event.name;
        this.event.items = option.event.items == undefined ? this.event.items : option.event.items;


        option.pin = option.pin == undefined ? this.pin : option.pin;
        this.pin.size = option.pin.size == undefined ? 22 : option.pin.size;
        this.pin.maxNum = option.pin.maxNum == undefined ? 4 : option.pin.maxNum;
        this.pin.container = option.pin.container == undefined ? 'cal-event-container' : option.pin.container;
        this.pin.pin = option.pin.pin == undefined ? 'cal-pin' : option.pin.pin;
        this.pin.extension = option.pin.extension == undefined ? 'cal-extension' : option.pin.extension;
        this.pin.typeMore = option.pin.typeMore == undefined ? 'type-more' : option.pin.typeMore;
        this.pin.more = option.pin.more == undefined ? 'cal-pin-more' : option.pin.more;
        this.pin.content = option.pin.content == undefined ? 'cal-pin-con' : option.pin.content;
        this.pin.title = option.pin.title == undefined ? 'con-title' : option.pin.title;
        this.pin.category = option.pin.category == undefined ? 'con-category' : option.pin.category;


        option.pop = option.pop == undefined ? this.pop : option.pop;
        this.pop.container = option.pop.container == undefined ? 'cal-pop' : option.pop.container;
        this.pop.head = option.pop.head == undefined ? 'cal-pop-head' : option.pop.head;
        this.pop.body = option.pop.body == undefined ? 'cal-pop-body' : option.pop.body;
        this.pop.btnClose = option.pop.btnClose == undefined ? 'cal-pop-close' : option.pop.btnClose;
        this.pop.typeMore = option.pop.typeMore == undefined ? 'more' : option.pop.typeMore;
        this.pop.typeDetail = option.pop.typeDetail == undefined ? 'detail' : option.pop.typeDetail;

        option.pop.list = option.pop.list == undefined ? this.pop.list : option.pop.list;
        this.pop.list.content = option.pop.list.content == undefined ? 'cal-pop-list' : option.pop.list.content;
        this.pop.list.item = option.pop.list.item == undefined ? 'cal-pop-list-item' : option.pop.list.item;
        this.pop.list.pin = option.pop.list.pin == undefined ? 'cal-pop-list-pin' : option.pop.list.pin;
        
        option.pop.detail = option.pop.detail == undefined ? this.pop.detail : option.pop.detail;
        this.pop.detail.content = option.pop.detail.content == undefined ? 'cal-pop-detail' : option.pop.detail.content;
        this.pop.detail.category = option.pop.detail.category == undefined ? 'e-category' : option.pop.detail.category;
        this.pop.detail.list = option.pop.detail.list == undefined ? 'detail-list' : option.pop.detail.list;
        this.pop.detail.item = option.pop.detail.item == undefined ? 'detail-item' : option.pop.detail.item;
        this.pop.detail.tit = option.pop.detail.tit == undefined ? 'item-tit' : option.pop.detail.tit;
        this.pop.detail.itemCon = option.pop.detail.itemCon == undefined ? 'item-con' : option.pop.detail.itemCon;


        option.prompt = option.prompt == undefined ? this.prompt : option.prompt;
        this.prompt.container = option.prompt.container == undefined ? 'cal-prompt' : option.prompt.container;
        this.prompt.boxWrap = option.prompt.boxWrap == undefined ? 'prompt-box' : option.prompt.boxWrap;
        this.prompt.title = option.prompt.title == undefined ? 'tit' : option.prompt.title;
        this.prompt.content = option.prompt.content == undefined ? 'content' : option.prompt.content;
        this.prompt.input = option.prompt.input == undefined ? 'cnf-intxt' : option.prompt.input;
        this.prompt.select = option.prompt.select == undefined ? 'cnf-sel' : option.prompt.select;
        this.prompt.radioList = option.prompt.radioList == undefined ? 'cnf-radio-list' : option.prompt.radioList;
        this.prompt.radio = option.prompt.radio == undefined ? 'cnf-radio' : option.prompt.radio;
        this.prompt.value = option.prompt.value == undefined ? 'cnf-value' : option.prompt.value;
        this.prompt.btnWrap = option.prompt.btnWrap == undefined ? 'btn-wrap' : option.prompt.btnWrap;
        this.prompt.btn = option.prompt.btn == undefined ? 'cnf-btn' : option.prompt.btn;
        this.prompt.submit = option.prompt.submit == undefined ? 'submit' : option.prompt.submit;
        this.prompt.cancel = option.prompt.cancel == undefined ? 'cancel' : option.prompt.cancel;


        option.filter = option.filter == undefined ? this.filter : option.filter;
        this.filter.container = option.filter.container == undefined ? 'cal-filter' : option.filter.container;
        this.filter.content = option.filter.content == undefined ? 'flt-box' : option.filter.content;
        this.filter.header = option.filter.header == undefined ? 'flt-header' : option.filter.header;
        this.filter.title = option.filter.title == undefined ? 'flt-title' : option.filter.title;
        this.filter.btnClose = option.filter.btnClose == undefined ? 'btn-flt-close' : option.filter.btnClose;
        this.filter.body = option.filter.body == undefined ? 'flt-body' : option.filter.body;
        this.filter.list = option.filter.list == undefined ? 'flt-list' : option.filter.list;
        this.filter.item = option.filter.item == undefined ? 'flt-item' : option.filter.item;
        this.filter.itemTitle = option.filter.itemTitle == undefined ? 'flt-item-tit' : option.filter.itemTitle;
        this.filter.checkList = option.filter.checkList == undefined ? 'flt-ck-list' : option.filter.checkList;
        this.filter.checkListItem = option.filter.checkListItem == undefined ? 'flt-ck-item' : option.filter.checkListItem;
        this.filter.checkbox = option.filter.checkbox == undefined ? 'flt-ck' : option.filter.checkbox;
        this.filter.checkValue = option.filter.checkValue == undefined ? 'flt-ck-val' : option.filter.checkValue;
        this.filter.checkboxName = option.filter.checkboxName == undefined ? 'flt_' : option.filter.checkboxName;
        this.filter.btnWrap = option.filter.btnWrap == undefined ? 'flt-btn-wrap' : option.filter.btnWrap;
        this.filter.btn = option.filter.btn == undefined ? 'btn-flt' : option.filter.btn;
        this.filter.typeSearch = option.filter.typeSearch == undefined ? 'type-search' : option.filter.typeSearch;
        this.filter.typeReset = option.filter.typeReset == undefined ? 'type-reset' : option.filter.typeReset;


        option.lang = option.lang == undefined ? this.lang : option.lang;
        this.lang.category = option.lang.category == undefined ? '카테고리' : option.lang.category;
        this.lang.title = option.lang.title == undefined ? '제목' : option.lang.title;
        this.lang.startDate = option.lang.startDate == undefined ? '시작일' : option.lang.startDate;
        this.lang.endDate = option.lang.endDate == undefined ? '종료일' : option.lang.endDate;
        this.lang.close = option.lang.close == undefined ? '닫기' : option.lang.close;
        this.lang.more = option.lang.more == undefined ? '더보기' : option.lang.more;
        this.lang.sun = option.lang.sun == undefined ? '일' : option.lang.sun;
        this.lang.mon = option.lang.mon == undefined ? '월' : option.lang.mon;
        this.lang.tue = option.lang.tue == undefined ? '화' : option.lang.tue;
        this.lang.wed = option.lang.wed == undefined ? '수' : option.lang.wed;
        this.lang.thu = option.lang.thu == undefined ? '목' : option.lang.thu;
        this.lang.fri = option.lang.fri == undefined ? '금' : option.lang.fri;
        this.lang.sat = option.lang.sat == undefined ? '토' : option.lang.sat;
        this.lang.submit = option.lang.submit == undefined ? '확인' : option.lang.submit;
        this.lang.cancel = option.lang.cancel == undefined ? '취소' : option.lang.cancel;
        this.lang.search = option.lang.search == undefined ? '검색' : option.lang.search;
        this.lang.reset = option.lang.reset == undefined ? '초기화' : option.lang.reset;


        option.state = option.state == undefined ? this.state : option.state;
        this.state.able = option.state.able == undefined ? 'able' : option.state.able;
        this.state.disable = option.state.disable == undefined ? 'disable' : option.state.disable;
        this.state.hide = option.state.hide == undefined ? 'hide' : option.state.hide;
        this.state.active = option.state.active == undefined ? 'act' : option.state.active;
        this.state.selected = option.state.selected == undefined ? 'selected' : option.state.selected;


        option.options = option.options == undefined ? this.options : option.options;
        this.options.tableSummary = option.options.tableSummary == undefined ? '' : option.options.tableSummary;
        this.options.dayNames = option.options.dayNames == undefined ? ['일','월','화','수','목','금','토'] : option.options.dayNames;
        this.options.showsOtherMonth = option.options.showsOtherMonth == undefined ? false : option.options.showsOtherMonth;
        this.options.useDateEvent = option.options.useDateEvent == undefined ? false : option.options.useDateEvent;
        this.options.useDragRange = option.options.useDragRange == undefined ? false : option.options.useDragRange;
        this.options.useEventPop = option.options.useEventPop == undefined ? true : option.options.useEventPop;
        this.options.eventAuth = option.options.eventAuth == undefined ? true : option.options.eventAuth;


        option.icon = option.icon == undefined ? this.icon : option.icon;
        this.icon.filter = option.icon.filter == undefined ? '<i-filter class="i i-filter"></i-filter>' : option.icon.filter;
    }

    this.initDate(); //날짜 데이터 설정
    this.renderLayout(); //레이아웃 생성
    this.initElements(); //레이아웃 element 지정
    this.renderDate(); //날짜 데이터 입력
    this.onChangeMonth();//캘린더 전환 이벤트 설정

    this.setDateEventInit();
}


/**
 * 캘린더 날짜 데이터 설정
 * @return ;
 */
CustomCalendar.prototype.initDate = function(){
    this.date.today = new Date();//오늘 날짜 (달력의 첫 기준)
    this.date.todayYear = this.date.today.getFullYear();//오늘 날짜 기준 년도
    this.date.todayMonth = this.date.today.getMonth()+1;//오늘 날짜 기준 월
    this.date.todayMonth = this.date.todayMonth < 10 ? "0" + this.date.todayMonth : this.date.todayMonth;
    this.date.todayDate = this.date.today.getDate();//오늘 날짜 기준 날짜
    this.date.todayDay = this.date.today.getDay();//오늘 날짜 기준 요일

    this.date.year = this.date.today.getFullYear();//설정된 날짜 기준 년도
    this.date.month = this.date.today.getMonth()+1;//설정된 날짜 기준 월
    this.date.month = this.date.month < 10 ? "0"+this.date.month : this.date.month;

    this.date.first = new Date(this.date.year, this.date.month-1,1);//설정된 날짜 첫날
    this.date.firstDay = this.date.first.getDay();//설정된 날짜 첫날
    this.date.last = new Date(this.date.year, this.date.month,0);//설정된 날짜 마지막날
    this.date.lastDate = this.date.last.getDate();

    if (this.options.showsOtherMonth === true) {
        this.date.prev = new Date(this.date.year, this.date.month-1,0);
        this.date.prevYear = this.date.prev.getFullYear();
        this.date.prevMonth = this.date.prev.getMonth()+1;
        this.date.prevMonth = this.date.prevMonth < 10 ? "0" + this.date.prevMonth : this.date.prevMonth;
        this.date.prevDate = this.date.prev.getDate();
        this.date.prevDay = this.date.prev.getDay();

        this.date.next = new Date(this.date.year, this.date.month,1);
        this.date.nextYear = this.date.next.getFullYear();
        this.date.nextMonth = this.date.next.getMonth()+1;
        this.date.nextMonth = this.date.nextMonth < 10 ? "0" + this.date.nextMonth : this.date.nextMonth;
        this.date.nextDate = this.date.next.getDate();
        this.date.nextDay = this.date.next.getDay();
    }
}


/**
 * 캘린더 레이아웃 생성
 * @return ;
 */
CustomCalendar.prototype.renderLayout = function(){
    var layout = '';
    //header 그리기
    layout += '<div class="'+ this.cal.header +'">';
    layout += '<div class="'+ this.cal.headerBox +'">';
    layout += '<button type="button" class="'+ this.cal.btnMonths +' '+ this.cal.btnMonthPrev +'"></button>';
    layout += '<strong class="'+ this.cal.title +'">';
    layout += '<span class="'+ this.cal.year +'"></span>';
    layout += '<span>.</span>';
    layout += '<span class="'+ this.cal.month +'"></span>';
    layout += '</strong>';
    layout += '<button type="button" class="'+ this.cal.btnMonths +' '+ this.cal.btnMonthNext +'"></button>';
    layout += '</div>';
    if (this.options.useDateEvent && this.event.items.length > 0) {
        layout += '<div class="'+ this.cal.utils.container +'">';
        layout += '<button class="'+ this.cal.utils.btnFilter +'" type="button">';
        layout += this.icon.filter;
        layout += '</button>';
        layout += '</div>';
    }
    layout += '</div>';

    //달력 레이아웃 그리기
    layout += '<div class="'+ this.cal.body +'">';
    layout += '<table class="'+ this.cal.table +'" summary="'+ this.date.year + '년' + this.date.month + '월' + this.options.tableSummary +'">';
    layout += '<thead>';
    layout += '<tr>';
    for(var i=0; i<7; i++){
        layout += '<th>'+ this.options.dayNames[i] +'</th>';
    }
    layout += '</tr>';
    layout += '</thead>';
    layout += '<tbody>';
    if (this.options.useDateEvent != true) {
        for(var i=0; i<6; i++){
            layout += '<tr>';
            if (this.options.eventAuth) {
                for(var j=0; j<7; j++){
                    layout += '<td>';
                    layout += '<a href="#" class="'+ this.cal.btnDay +'"></a>';
                    layout += '</td>';
                }
            } else {
                for(var j=0; j<7; j++){
                    layout += '<td>';
                    layout += '<span class="'+ this.cal.btnDay +'"></span>';
                    layout += '</td>';
                }
            }
            layout += '</tr>';
        }
    } else {
        for(var i=0; i<6; i++){
            layout += '<tr>';
            for(var j=0; j<7; j++){
                layout += '<td>';
                if (this.options.eventAuth) {
                    layout += '<a href="#" class="'+ this.cal.btnDay +'"></a>';
                } else {
                    layout += '<span class="'+ this.cal.btnDay +'"></span>';
                }
                layout += '<div class="'+ this.pin.container +'">';
                layout += '</div>';
                layout += '</td>';
            }
            layout += '</tr>';
        }
    }
    layout += '</tbody>';
    layout += '</table>';
    if (this.options.useDateEvent && this.event.items.length > 0) {
        layout += this.renderFilter();
    }
    layout += '</div>';

    //레이아웃 생성
    this.options.useDateEvent === true ? this.cal.$calendar.addClass(this.cal.type.event) : ''; //이벤트 사용여부
    this.cal.$calendar.html(layout);
}


/**
 * 캘린더 레이아웃 제이쿼리 element 설정
 * @return ;
 */
CustomCalendar.prototype.initElements = function(){
    this.cal.$header = this.cal.$calendar.find('> .'+this.cal.header);//캘린더 헤더
    this.cal.$headerBox = this.cal.$header.find('> .'+this.cal.headerBox);//캘린더 헤더
    this.cal.$title = this.cal.$headerBox.find('> .'+this.cal.title);//캘린더 타이틀 박스
    this.cal.$year = this.cal.$title.find('> .'+this.cal.year);//캘린더 타이틀 년도표시
    this.cal.$month = this.cal.$title.find('> .'+this.cal.month);//캘린더 타이틀 월 표시
    this.cal.$btnMonths = this.cal.$headerBox.find('> .'+this.cal.btnMonths);//캘린더 헤더 버튼
    this.cal.$btnMonthPrev = this.cal.$headerBox.find('> .'+this.cal.btnMonths+'.'+this.cal.btnMonthPrev);//캘린더 헤더 이전달 버튼
    this.cal.$btnMonthNext = this.cal.$headerBox.find('> .'+this.cal.btnMonths+'.'+this.cal.btnMonthNext);//캘린더 헤더 다음달 버튼

    this.cal.$body = this.cal.$calendar.find('> .' + this.cal.body);//캘린더 표시 영역
    this.cal.$table = this.cal.$body.find('> .'+ this.cal.table);//캘린더 테이블
    this.cal.$td = this.cal.$table.find('tr > td');//캘린더 날짜 td
    this.cal.$btnDay = this.cal.$table.find('.'+this.cal.btnDay);//캘린더 날짜 선택 버튼
    if(this.options.useDateEvent === true) {
        this.pin.$container = this.cal.$td.find('> .' + this.pin.container);
        this.pin.maxSize = this.pin.size * 5;
        this.pin.$container.css('height', this.pin.maxSize + 'px');
    }
}


/**
 * 캘린더 날짜 태그 생성
 * @return ;
 */
CustomCalendar.prototype.renderDate = function(){
    var ins = this;
    var dateCount = 1;//날짜 생성을 위한 카운트
    var dateDay = this.date.firstDay;//요일
    function setDate(i){
        ins.cal.$btnDay.eq(i).text(dateCount);
        dateCount = dateCount < 10 ? '0' + dateCount : dateCount;
        ins.cal.$td.eq(i).attr(ins.attr.cellDate, ins.date.year + '-' + ins.date.month + '-' + dateCount);
        dateDay = dateDay > 6 ? 0 : dateDay;
        ins.cal.$td.eq(i).attr(ins.attr.cellDay, dateDay);

        dateCount++;
        dateDay++;
    }
    //달력 header 변경
    this.cal.$year.text(this.date.year);
    this.cal.$month.text(this.date.month);

    
    var status = ins.state.default;
    if (ins.date.year < ins.date.todayYear) {
        status = ins.state.disable;
    } else if (ins.date.year == ins.date.todayYear){
        if (ins.date.month < ins.date.todayMonth){
            status = ins.state.disable;
        } else if (ins.date.month == ins.date.todayMonth){
            status = 'check';
        }
    }

    //이번달 날짜 입력 (이번달 시작 요일 ~ 이번달 마지막 날짜)
    if (status == 'check') {
        for(var i = this.date.firstDay; i < this.date.firstDay + this.date.lastDate; i++){
            setDate(i);
            i < ins.date.firstDay + ins.date.todayDate - 1 ? ins.cal.$td.eq(i).addClass(ins.state.disable) : '';
        }
    } else if (status == ins.state.disable){
        for(var i = this.date.firstDay; i < this.date.firstDay + this.date.lastDate; i++){
            setDate(i);
            ins.cal.$td.eq(i).addClass(ins.state.disable);
        }
    } else {
        for(var i = this.date.firstDay; i < this.date.firstDay + this.date.lastDate; i++){
            setDate(i);
        }
    }

    
    if (this.options.showsOtherMonth === false) {
        for(var i = 0; i < this.date.firstDay; i++){ //이전 달 날짜 버튼 삭제
            this.cal.$btnDay.eq(i).addClass(ins.state.hide);
        }
        for(var i = this.date.firstDay + this.date.lastDate; i < 42; i++){ //다음달 날짜 버튼 삭제
            this.cal.$btnDay.eq(i).addClass(ins.state.hide);
        }
    } else {
        var prevDateCount = this.date.prevDate - this.date.firstDay + 1;
        for(var i = 0; i < this.date.firstDay; i++){ //이전 달 날짜 버튼 삭제
            this.cal.$td.eq(i).addClass(ins.state.disable);
            this.cal.$td.eq(i).attr(ins.attr.cellDate, this.date.prevYear + '-' + this.date.prevMonth + '-' + prevDateCount);
            this.cal.$btnDay.eq(i).text(prevDateCount);
            ++prevDateCount;
        }
        var nextDateCount = 1;
        for(var i = this.date.firstDay + this.date.lastDate; i < 42; i++){ //다음달 날짜 버튼 삭제
            this.cal.$td.eq(i).addClass(ins.state.disable);
            this.cal.$td.eq(i).attr(ins.attr.cellDate, this.date.nextYear + '-' + this.date.nextMonth + '-' + nextDateCount);
            this.cal.$btnDay.eq(i).text(nextDateCount);
            nextDateCount = nextDateCount < 10 ? '0' + nextDateCount : nextDateCount;
            ++nextDateCount;
        }
    }

    ins.renderCustomData();
    if (ins.options.useDateEvent) {
        ins.options.useEventPop ? ins.initEventData() : '';
    }
}

/**
 * 캘린더 날짜 데이터 갱신
 * @return ;
 */
CustomCalendar.prototype.getNewDate = function(){
    //날짜 초기화
    this.cal.$td.removeClass(this.state.able);
    this.cal.$td.removeClass(this.state.disable);
    this.cal.$td.attr(this.attr.cellDate,'');
    this.cal.$td.attr(this.attr.cellDay,'');
    this.cal.$btnDay.text('');
    this.cal.$btnDay.removeClass(this.state.hide);
    this.cal.$btnDay.removeClass(this.state.active);

    //날짜 재설정
    this.date.first = new Date(this.date.year, this.date.month-1,1);
    this.date.last = new Date(this.date.year, this.date.month,0);
    this.date.firstDay = this.date.first.getDay();
    this.date.lastDate = this.date.last.getDate();

    if (this.showsOtherMonth === true) {
        this.date.prev = new Date(this.date.year, this.date.month-2,0);
        this.date.prevYear = this.date.prev.getFullYear();
        this.date.prevMonth = this.date.prev.getMonth()+1;
        this.date.prevMonth = this.date.prevMonth < 10 ? "0" + this.date.prevMonth : this.date.prevMonth;
        this.date.prevDate = this.date.prev.getDate();
        this.date.prevDay = this.date.prev.getDay();
    
        this.date.next = new Date(this.date.year, this.date.month,1);
        this.date.nextYear = this.date.next.getFullYear();
        this.date.nextMonth = this.date.next.getMonth()+1;
        this.date.nextMonth = this.date.nextMonth < 10 ? "0" + this.date.nextMonth : this.date.nextMonth;
        this.date.nextDate = this.date.next.getDate();
        this.date.nextDay = this.date.next.getDay();
    }
    //달력 날짜 재생성
    this.renderDate();
}


/**
 * 캘린더 날짜 데이터 지정 갱신
 * @param {String} 'YYYY-MM-DD' 형식으로 된 날짜
 * @return ;
 */
CustomCalendar.prototype.setNewDate = function(date){
    var newDate = date.split('-');
    this.date.year = newDate[0];
    this.date.month = newDate[1];

    //달력 날짜 갱신
    this.getNewDate();
};


/**
 * 캘린더 커스텀 데이터 셋팅
 * @param {String} 'YYYY-MM-DD' 형식으로 된 날짜
 * @return ;
 */
CustomCalendar.prototype.renderCustomData = function(){
    var ins = this;
    if (typeof ins.setCustomData == 'function') {
        ins.setCustomData(ins);
    }
};
CustomCalendar.prototype.setCustomData;




/*============================================================================================
    @기본 이벤트
============================================================================================*/
//캘린더 다음달, 이전달 전환 이벤트
CustomCalendar.prototype.onChangeMonth = function(){
    var ins = this;
    this.cal.$btnMonths.on('click', function(){
        var $this = $(this);//이벤트 발생 요소
        if ($this.hasClass(ins.cal.btnMonthPrev)) {
            ins.date.month--;
            if(ins.date.month<=0){
                ins.date.month=12;
                ins.date.year--;
            }
            ins.date.month = (ins.date.month < 10) ? "0" + ins.date.month : ins.date.month;
        } else {
            ins.date.month++;
            if(ins.date.month>12){
                ins.date.month=1;
                ins.date.year++;
            }
            ins.date.month = (ins.date.month < 10) ? "0" + ins.date.month : ins.date.month;
        }
        ins.getNewDate();
    });
}

//이전달 클릭 이벤트
CustomCalendar.prototype.btnPrevClick = function(customEvent){
    var ins = this;
    if (typeof customEvent == 'function') {
        this.cal.$btnMonthPrev.on('click', function(){
            customEvent(ins, this);
        });
    }
}

//다음달 클릭 이벤트
CustomCalendar.prototype.btnNextClick = function(customEvent){
    var ins = this;
    if (typeof customEvent == 'function') {
        this.cal.$btnMonthNext.on('click', function(){
            customEvent(ins, this);
        });
    }
}

//날짜 버튼 클릭 이벤트
CustomCalendar.prototype.btnDayClick = function(customEvent){
    var ins = this;
    if (typeof customEvent == 'function') {
        this.cal.$btnDay.on('click', function(e){
            e.preventDefault();
            customEvent(ins, this);
        });
    }
}




/*============================================================================================
    @Date Event
============================================================================================*/
/*-------------------------------------------------------------------
    @Date Event > 공통
-------------------------------------------------------------------*/
/**
 * Date Event 태그 초기화
 * @param {Boolean} isInit 초기화 사용시
 * @return {Number} index 반환
 */
CustomCalendar.prototype.resetDateEvent = function(isInit){
    var ins = this;
    isInit != undefined && isInit === true ? ins.event.dataRows = {} : '';
    this.pin.$container.each(function(i, el){
        while (el.firstChild) { 
            el.removeChild(el.firstChild);
        }
    });
}


/**
 * 날짜 값이 일치하는 td의 index 찾기
 * @param {String} date 'YYYY-MM-DD' 형식으로 된 날짜
 * @return {Number} index 반환
 */
CustomCalendar.prototype.findTdIndex = function(date){
    var ins = this;
    var returnValue;
    this.cal.$td.each(function(index, el){
        if (date == el.getAttribute(ins.attr.cellDate)) {
            returnValue = index;
            return false;
        }
    });
    return returnValue;
}


/**
 * 두 날짜간 차이 비교
 * @param {String} d1 'YYYY-MM-DD' 형식으로 된 날짜
 * @param {String} d2 'YYYY-MM-DD' 형식으로 된 날짜
 * @return {Number} index 반환
 */
CustomCalendar.prototype.getDateDiff = function(d1, d2){
    var date1 = new Date(d1);
    var date2 = new Date(d2);
    var diffDate = date1.getTime() - date2.getTime();
    return Math.abs(diffDate / (1000 * 60 * 60 * 24));
}


/**
 * 이벤트 기간 데이터 생성
 * @param {Object} val 이벤트 데이터
 * @param {String} val.startDate 'YYYY-MM-DD' 형식으로 된 날짜
 * @return {Array} 이벤트 기간 배열
 */
CustomCalendar.prototype.getDateRange = function(val){
    var diff = this.getDateDiff(val.startDate, val.endDate);
    var dates = [];
    for (var i = 1; i <= diff; i++) {
        var nowDate = new Date(val.startDate);
        nowDate.setDate(nowDate.getDate() + i);
        var year = nowDate.getFullYear();
        var month = nowDate.getMonth() + 1;
        month = month < 10 ? '0' + month : month;
        var date = nowDate.getDate();
        date = date < 10 ? '0' + date : date;
        dates.push(year +'-'+ month +'-'+ date);
    }
    dates.unshift(val.startDate);
    return dates;
}


/**
 * 이벤트 데이터 날짜 순서로 정렬 (기준 startDate)
 * @param {Array} arr 이벤트 데이터 배열
 * @param {Object} arr[x] 이벤트 데이터 객체
 * @param {String} arr[x].StatDate 이벤트 시작일
 * @param {Number} arr[x].totalRange 이벤트 날짜의 길이
 * @return {Array} StartDate로 정렬된 배열
 */
CustomCalendar.prototype.sortStartDate = function(arr){
    arr.sort(function(a, b){
        if (a.startDate > b.startDate) {
            return 1;
        } else if (a.startDate < b.startDate) {
            return  -1;
        } else {
            if (a.totalRange > b.totalRange) {
                return -1;
            } else if (a.totalRange < b.totalRange) {
                return 1;
            } else {
                return 0;
            }
        }
    });
    return arr;
}


/**
 * 선택된 날짜들의 배열
 * @return {Array} String 날짜 데이터들의 배열
 */
CustomCalendar.prototype.findDateRange = function(){
    var ins = this;
    var returnArray = [];
    var elArray = [];
    this.cal.$td.each(function(index, el){
        if (el.classList.contains(ins.state.selected)) {
            returnArray.push(el.getAttribute(ins.attr.cellDate));
            elArray.push(el);
        }
    });
    ins.drag.dateRangeEl = elArray;
    return returnArray;
}


/**
 * 선택된 날짜들 초기화
 * @return ;
 */
CustomCalendar.prototype.resetSelected = function(){
    var ins = this;
    this.cal.$td.each(function(index, el){
        if (el.classList.contains(ins.state.selected)) {
            el.classList.remove(ins.state.selected);
        }
    });
}


/**
 * 이벤트 데이터 출력
 * @return {Array} 이벤트 데이터 배열;
 */
CustomCalendar.prototype.getData = function(){
    return this.event.data;
}


/**
 * prompt 기본값 생성 및 옵션값 추가
 * @return {Array} 이벤트 데이터 배열;
 */
CustomCalendar.prototype.setPrompts = function(){
    var prompts = [{
        title: '제목',
        key: 'title',
        type: 'default',
        prompt: '제목을 입력해주세요.',
    }];
    prompts = prompts.concat(this.event.items);
    this.event.items = prompts;
}


/*-------------------------------------------------------------------
    @Date Event > 초기화
-------------------------------------------------------------------*/
/**
 * 캘린더 이벤트 관련 셋팅 함수
 * @return ;
 */
CustomCalendar.prototype.setDateEventInit = function(){
    //이벤트 사용 여부
    if (this.options.useDateEvent) {
        this.setFilterEvents();

        //prompt 설정
        this.setPrompts();

        //날짜 드래그 이벤트
        if (this.options.useDragRange && this.options.eventAuth) {//드래그 사용
            this.onDragRange();
        } else {//클릭 사용
            //날짜 하나만 클릭하는 이벤트 (예정)
        }
        
        //이벤트 팝업 옵션 사용 여부
        if (this.options.useEventPop) {
            this.setEventPop();
        }
    }
}

//이벤트 데이터 셋팅
CustomCalendar.prototype.initEventData = function(){
    if (typeof(this.setEventData) == "function") {
        this.resetDateEvent(true);
        var value = this.setEventData();
        if (Array.isArray(value)) {
            //이벤트 일치 여부
            if (this.refactorEventData(value)){
                this.setDateEventSort();
                this.renderDateEventPin(this.event.dataRows);
            }
        }
    }
}
CustomCalendar.prototype.setEventData;

//이벤트 데이터 출력
CustomCalendar.prototype.getEventData = function(){
    var returnValue = [];
    calendar.event.data.forEach(function(val, idx){
        var value = {
            content : val.content,
            startDate : val.startDate,
            endDate : val.endDate,
            state : val.state
        }
        returnValue.push(value);
    });
    return returnValue;
}

/**
 * 이벤트 데이터 생성
 * @param {JSON} data JSON형식의 이벤트 데이터
 * @param {String} data[x].title 타이틀
 * @param {String} data[x].startDate 시작일
 * @param {String} data[x].endDate 종료일
 * @param {String} data[x].state 상태
 * @return ;
 */
CustomCalendar.prototype.refactorEventData = function(data){
    var ins = this;
    var hasEventData = false;
    var eventData = [];
    var eventRowData = [];
    data.forEach(function(val, i){
        var dateRange = ins.getDateRange(val);
        val.dateRange = dateRange;
        val.totalRange = dateRange.length;
    });
    ins.sortStartDate(data);
    this.event.data = data;

    data.forEach(function(val, i){
        val.id = ins.event.name + i;
        var elArray = [];
        var hasDate = false;
        ins.cal.$td.each(function(index, el){
            if (val.dateRange.indexOf(el.getAttribute(ins.attr.cellDate)) != -1) {
                hasDate = true;
                elArray.push(el);
            }
        });

        if (!hasDate) return false;
        hasEventData = true;
        
        var trs = [];
        var tds = [];
        //데이터 생성
        elArray.forEach(function(el, index){
            var $td = $(el);
            var $tr = $td.closest('tr');
            var isNowClone = true;
            if (trs.length >= 1) {
                if (trs[trs.length-1][0] == $tr[0]) {
                    tds[tds.length-1].range++;
                    return;
                }
            } else {
                isNowClone = false;
            }
    
            trs.push($tr);
            tds.push({
                el : $td,
                range: 1,
                isClone: isNowClone,
                row: $tr.index()
            });
        });

        //row별 데이터 할당
        tds.forEach(function(value){
            var rowKey = 'row_' + value.row;
            ins.event.dataRows[rowKey] == undefined ? ins.event.dataRows[rowKey] = [] : '';

            value.id = ins.event.name + i;
            value.rank = 0;
            value.content = val.content;
            value.totalRange = val.totalRange;
            value.startDate = val.startDate;
            value.endDate = val.endDate;
            value.dateRange = val.dateRange;
            value.dateRangeEl = elArray;
            value.isSorted = false;
            value.state = ins.state.able;
            ins.event.dataRows[rowKey].push(value);
        });
    });

    return hasEventData;
}


/**
 * 이벤트 우선순위 정렬
 * @return ;
 */
CustomCalendar.prototype.setDateEventSort = function(data){
    var ins = this;
    var isReturn = false;
    var dataRows = ins.event.dataRows;
    if (data != undefined) {
        isReturn = true;
        dataRows = data;
    }

    for (var key in dataRows) {
        // dataRows[key] : tr기준 구분
        var value = dataRows[key];
        var common = [];

        //날짜 순서로 정렬
        ins.sortStartDate(value);

        //이벤트 중복 날짜 찾기
        value.forEach(function(val, i){
            if (i == 0) return;
            var filterArray = val.dateRange.filter(function(x) {
                if (value[i-1].dateRange.indexOf(x) !== -1 && common.indexOf(x) == -1) {
                    return 1;
                }
                return -1;
            });
            common = common.concat(filterArray);
        });

        // === 중복 날짜가 있을 경우 ===
        if (common.length < 1) continue;

        //중복 이벤트 찾기
        var clashEvents = [];
        value.forEach(function(val, i){
            var hasClash = false;
            val.isSorted = false; //정렬 초기화
            common.forEach(function(x){
                val.dateRange.indexOf(x) !== -1 ? hasClash = true : '';
            });
            hasClash == true ? clashEvents.push(val) : '';
        });

        //중복 이벤트 순위 정렬
        clashEvents.forEach(function(val, i){
            var rank = 0;
            clashEvents.forEach(function(v, idx){
                //동일 요소가 아닌 경우
                if (val.id != v.id) {
                    //중복 날짜를 보유한 경우
                    if ((v.startDate <= val.startDate && v.endDate >= val.startDate) || (v.startDate <= val.endDate && v.endDate >= val.endDate)) {
                        //val 이번 주 && v 이번 주 || val 이전 주 && v 이전 주
                        if (val.isClone == false && v.isClone == false || val.isClone == true && v.isClone == true) {
                            //시작 날짜가 늦을 경우
                            if (val.startDate > v.startDate) {
                                rank++; //순위 하락
                            } else if (val.startDate == v.startDate) { //시작 날짜가 동일할 경우
                                if(val.totalRange < v.totalRange) { //길이가 더 짧을 경우
                                    rank++; //순위 하락
                                } else if (val.totalRange == v.totalRange){ //길이가 같을 경우
                                    if (val.id > v.id){ //이벤트 등록 순
                                        rank++; //순위 하락
                                    }
                                }
                            }
                        } else if (val.isClone == false && v.isClone == true) { //val 이번 주 && v 이전 주
                            rank++; //순위 하락
                        }
                    }
                }
            });
            val.rank = rank; //순위 적용
        });

        
        clashEvents.forEach(function(val, i){
            var nowRanks = []; //겹치는 요소의 rank 배열
            var sortedRanks = []; //정렬된 요소의 rank 배열
            var overflow = []; //이전 일자 이벤트의 배열
            clashEvents.forEach(function(v, idx){
                //동일 요소가 아닌 경우
                if (val.id != v.id) {
                    //중복 날짜를 보유한 경우
                    if (v.startDate <= val.startDate && v.endDate >= val.startDate) {
                        if (val.startDate > v.startDate) { //이전 일자 이벤트
                            overflow.push(v.rank);
                        }
                        if (v.isSorted == true) { //이미 정렬된 요소
                            sortedRanks.push(v.rank);
                        }
                        nowRanks.push(v.rank);
                    }
                } else {
                    nowRanks.push(v.rank);
                }
            });
            var isClashed = false;
            var count = nowRanks.length-1;
            var overflowCount = overflow.length; //이전 일자 갯수
            // var overflowMin = overflowCount != 0 ? Math.min.apply(null, overflow) : 0; //이전 일자 최소 값
            var limit = nowRanks.length-1;
            while (count >= 0 && isClashed == false) {
                if (nowRanks.indexOf(count) == -1) {
                    isClashed = true;
                }
                count--;
            }
            
            //rank 중복시 rank가 비어있는 공백 현상 여부
            if (isClashed) {
                // console.log('------');
                // console.log('rank', val.rank);
                // console.log('title', val.title);
                // console.log('nowRanks', nowRanks);
                // console.log('overflow', overflow);
                // console.log('overflowCount', overflowCount);
                // console.log('limit', limit);
                clashEvents.forEach(function(v, idx){
                    //동일 요소가 아니고 정렬되지 않은 경우
                    if (val.id != v.id && isClashed) {
                        //중복 날짜를 보유한 경우
                        if ((v.startDate <= val.startDate && v.endDate >= val.startDate) || (v.startDate <= val.endDate && v.endDate >= val.endDate)) {
                            var flag = true;
                            val.rank = val.rank - overflowCount;
                            for (var index = val.rank; index <= limit; index++) { //등록된 이벤트 의 갯수
                                //이전 날짜와 겹치지 않고 이미 정렬되지 않았고,
                                if (overflow.indexOf(index) == -1 && sortedRanks.indexOf(index) == -1 && flag == true) {
                                    val.rank = index;
                                    flag = false;
                                }
                            }
                            isClashed = false;
                            val.isSorted = true;
                        }
                    }
                });
            }
        });
    }

    if (isReturn) {
        return dataRows;
    }
};


/**
 * 이벤트 PIN 생성
 * @return ;
 */
CustomCalendar.prototype.renderDateEventPin = function(data){
    var ins = this;
    ins.resetDateEvent();
    var dataRows = ins.event.dataRows;
    if (data != undefined) {
        isReturn = true;
        dataRows = data;
    }
    for (var key in dataRows) {
        var value = dataRows[key];
        value.forEach(function(val, i){
            var $td = val.el;
            var $container = $td.find('.'+ins.pin.container);
            if (val.rank >= ins.pin.maxNum && $container.find('.'+ins.pin.typeMore).length > 0) return false;

            var top = (val.rank * ins.pin.size) + 'px';
            var width = parseInt(val.range) * 100;
            var border = parseInt(val.range) - 1;
            var size = 'calc('+ width + '% + ' + border +'px)';
            var pinClass = val.isClone == true ? ins.pin.pin + ' ' + ins.pin.extension : ins.pin.pin;
            
            var html = '';
            if (val.rank < ins.pin.maxNum) {
                // 이벤트 PIN
                html += '<button class="'+ pinClass +'" ';
                html += 'style="top: '+ top +'; width: '+ size +';"';
                html += ins.attr.event.id +'="'+ val.id +'" ';
                html += ins.attr.event.range +'="'+ val.range +'" ';
                html += 'data-clone="'+ val.isClone +'" ';
                html += ins.attr.event.startDate +'="'+ val.startDate +'" >';
                html += '<div class="'+ ins.pin.content +'" >';
                if (val.content.category) {
                    html += '<div class="'+ ins.pin.category +'">';
                    html += val.content.category;
                    html += '</div>';    
                }
                html += '<div class="'+ ins.pin.title +'">';
                html += val.content.title;
                html += '</div></div>';
                html += '</button>';
                
                $container.append(html);
            } else {
                //더보기 PIN
                pinClass += ' ' + ins.pin.typeMore;

                html += '<button class="'+ pinClass +'" ';
                html += 'style="top: '+ top +';" >';
                html += '<div class="'+ ins.pin.more +'">'+ ins.lang.more +'</div>';
                html += '</button>';
                
                val.dateRangeEl.forEach(function(el){
                    var $td = $(el);
                    var $container = $td.find('.'+ins.pin.container);
                    $container.append(html);
                });
            }
        });
    }
};




/*-------------------------------------------------------------------
    @Date Event > 드래그 이벤트
-------------------------------------------------------------------*/
/**
 * 캘린더 드래그 이벤트를 실행 시키고 pin 생성 함수
 * @return ;
 */
CustomCalendar.prototype.onDragRange = function(){
    var ins = this;
    ins.drag.isPress = false; //현재 마우스 상태

    //달력 영역을 벗어나면 이벤트 해제
    ins.cal.$body.on('mouseleave', function(){
        if (ins.drag.isPress != false) {
            ins.cal.$td.off('mousemove touchmove mouseup touchend');
            ins.cal.$td.removeClass(ins.state.selected);
        }
    });

    //시작 이벤트
    ins.cal.$td.on('mousedown touchstart', function(e){
        e.preventDefault();
        var $el = $(this);
        var pass = false;
        var passTargetList = [ins.cal.btnDay, ins.pin.container]
        passTargetList.forEach(function(val, i){
            if (e.target.classList.contains(val)) {
                pass = true;
                return false;
            }
        });
        var startDate = $el.attr(ins.attr.cellDate);
        if (!pass) return; //하위 요소로 이벤트는 전달
        if ($el.hasClass(ins.state.disable) == true || startDate == undefined || startDate == '') return false; //선택 불가 요소 이벤트 방지

        ins.drag.isPress = true;
        var startEl = e.currentTarget;
        startEl.classList.add(ins.state.selected);
        var startIndex = ins.findTdIndex(startDate); //시작일 td index
        var endIndex; //종료일 td index

        //이동 이벤트 등록
        ins.cal.$td.on('mousemove touchmove', function(e){
            e.preventDefault();
            var isFound = false;
            var nowLocation = e.type == 'touchmove' ? e.touches[0] : e;
            var nowEl = document.elementsFromPoint(nowLocation.clientX, nowLocation.clientY);
            for (var i = 0; i < nowEl.length; i++) {
                if (nowEl[i].tagName === 'TD') {
                    nowEl = nowEl[i];
                    isFound = true;
                    break;
                }
            }
            if (!isFound) return false;

            var nowIndex = nowEl.getAttribute(ins.attr.cellDate);
            if (startEl != nowEl) { //이전 target과 다를 경우
                if (!nowEl.classList.contains(ins.state.disable) && nowIndex != undefined && nowIndex != null && nowIndex != '') { //선택불가 요소가 아닐 경우
                    startEl = nowEl;
                    endIndex = ins.findTdIndex(nowIndex);
                    ins.cal.$td.removeClass(ins.state.selected);

                    if (startIndex <= endIndex) {
                        //기준일 보다 이후 날짜 일 경우
                        for (var i = startIndex; i <= endIndex; i++) {
                            ins.cal.$td[i].classList.add(ins.state.selected);
                        }
                    } else {
                        //기준일 보다 이전 날짜 일 경우
                        for (var i = endIndex; i <= startIndex; i++) {
                            ins.cal.$td[i].classList.add(ins.state.selected);
                        }
                    }
                    
                }
            }
        });

        //종료 이벤트 등록
        ins.cal.$td.on('mouseup touchend', function(e){
            e.preventDefault();
            ins.cal.$td.off('mousemove touchmove mouseup touchend');
            ins.drag.isPress = false;
            ins.drag.dateRange = ins.findDateRange();
            ins.drag.startDate = ins.drag.dateRange[0];
            ins.drag.endDate = ins.drag.dateRange[ins.drag.dateRange.length - 1];

            ins.onDragEnd();
        });
    });
}


/**
 * 캘린더 드래그 이벤트 콜백
 * @return ;
 */
CustomCalendar.prototype.onDragEnd = function(){
    var ins = this;
    this.resetSelected();
    if (typeof ins.onCustomDragEnd == 'function') { //커스텀 콜백함수
        ins.onCustomDragEnd();
    }

    var eventContent = {};
    //promise 실행 함수 배열 생성
    const promises = ins.event.items.map(val=>{
        return () => {
            return ins.popPrompt(val.prompt, {
                key: val.key,
                type: val.type,
                options: val.options,
            }).then(result => {
                eventContent[result.key] = result.value;
            })
        }
    });

    //초기값 redeuce의 promise.resolve를 실행
    promises.reduce((promiseChain, nowPromise) => {
        return promiseChain.then(() => {
            return nowPromise();
        });
    }, Promise.resolve()).then((result) =>{
        ins.setDateEventData(eventContent);
        ins.setDateEventSort();
        ins.renderDateEventPin(ins.event.dataRows);
    }).catch(function(err){
        // console.log(err);
    });
}
CustomCalendar.prototype.onCustomDragEnd;


/**
 * 드래그 이벤트 데이터 셋팅
 * @param {Object} eventValue 이벤트 관련 데이터;
 * @return ;
 */
CustomCalendar.prototype.setDateEventData = function(eventValue){
    var ins = this;
    var eventId = this.event.name + this.event.data.length;

    //클론 확인 && row별 데이터 생성
    var trs = [];
    var tds = [];
    this.drag.dateRangeEl.forEach(function(el, index){
        var $td = $(el);
        var $tr = $td.closest('tr');
        var isNowClone = true;
        if (trs.length >= 1) {
            if (trs[trs.length-1][0] == $tr[0]) {
                tds[tds.length-1].range++;
                return;
            }
        } else {
            isNowClone = false;
        }

        trs.push($tr);
        tds.push({
            el : $td,
            range: 1,
            isClone: isNowClone,
            row: $tr.index()
        });
    });

    //이벤트 데이터 등록
    var data = {
        'id' : eventId,
        'startDate' : this.drag.startDate,
        'endDate' : this.drag.endDate,
        'dateRange' : this.drag.dateRange,
        'totalRange': this.drag.dateRange.length,
        'content': eventValue,
        'state' : ins.state.able
    };
    this.event.data.push(data);
    
    //row별 데이터 할당
    tds.forEach(function(value){
        var rowKey = 'row_' + value.row;
        ins.event.dataRows[rowKey] == undefined ? ins.event.dataRows[rowKey] = [] : '';

        value.id = eventId;
        value.rank = 0;
        value.content = eventValue;
        value.totalRange = ins.drag.dateRange.length;
        value.startDate = ins.drag.startDate;
        value.endDate = ins.drag.endDate;
        value.dateRange = ins.drag.dateRange;
        value.dateRangeEl = ins.drag.dateRangeEl;
        value.isSorted = false;
        value.state = ins.state.able;
        ins.event.dataRows[rowKey].push(value);
    });
}




/*============================================================================================
    @Popup
============================================================================================*/
/*-------------------------------------------------------------------
    @Popup > prompt
-------------------------------------------------------------------*/
/**
 * prompt 팝업
 * @param {String} title 타이틀 
 * @param {String} type confirm의 형식 (default, category, select)
 * @param {Array} options (select형식 사용일 경우 options 배열값)
 * @return ;
 */
CustomCalendar.prototype.popPrompt = function(prompt, option){
    var ins = this;
    var types = ['default', 'category', 'select', 'radio'];
    if (prompt == undefined || option == undefined) return false;
    option.type = option.type == undefined ? 'default' : option.type;
    if (types.indexOf(option.type) == -1 || (option.type == 'select' && option.options == undefined)) return false;
    this.renderPopPrompt(prompt, option);

    var $container = $('.'+ins.prompt.container);
    var $boxWrap = $('.'+ins.prompt.boxWrap)
    var $btn = $('.'+ins.prompt.btn);
    var $val = $('.'+ins.prompt.value);
    $val.focus();
    $boxWrap.on('click', function(e){
        e.stopPropagation();
    });

    //결과값
    return new Promise(function(resolve, reject){
        //button click
        $btn.on('click', function(e){
            var $el = $(this);
            var data = {};
            if ($el.hasClass('submit')) {
                data.key = option.key;
                if (option.type == 'radio') {
                    $val = $('.'+ins.prompt.value+':checked');
                    if ($val.length < 1) {
                        reject('취소');
                    }
                    data.value = $val.val();
                }else {
                    data.value = $val.val();
                }
                resolve(data);
            } else {
                reject('취소');
            }
            $el.off('click');
            $container.remove();
        });

        //background
        $container.on('click', function(e){
            reject('취소');
            $btn.off('click');
            $container.remove();
        });

        //enter, esc keydown
        $val.on('keydown', function(e){
            var $el = $(this);
            var data = {};
            var isSubmit;
            var key = e.key || e.keyCode;
            isSubmit = key === 'Enter' || key === 13 ? true : isSubmit;
            isSubmit = key === 'Escape' || key === 27 ? false : isSubmit;
            if (isSubmit != undefined) {
                if (isSubmit) {
                    data.key = option.key;
                    data.value = $el.val();
                    resolve(data);
                } else {
                    reject('취소');
                }
                $el.off('keydown');
                $container.remove();
            }
        });
    });
}

CustomCalendar.prototype.renderPopPrompt = function(prompt, option){
    var ins = this;
    var html = '';
    html += '<div class="'+ this.prompt.container +'">';
    html += '    <div class="'+ this.prompt.boxWrap +'">';
    html += '        <strong class="'+ this.prompt.title +'">'+ prompt +'</strong>';
    html += '        <div class="'+ this.prompt.content +'">';
    if (option.type == 'default') {//input text
        html += '<input type="text" class="'+ this.prompt.input + ' ' + this.prompt.value +'">';
    } else if (option.type == 'radio'){//input radio
        html += '<ul class="'+ this.prompt.radioList +'">';
        option.options.forEach(function(val, i){
            html += '<li><label class="'+ ins.prompt.radio +'"><input type="radio" class="'+ ins.prompt.value +'" name="'+ ins.prompt.value +'" value="'+ val +'"><span>'+ val +'</span></label></li>';
        });
        html += '</ul>'
    } else {//select box
        html += '<div class="'+ this.prompt.select +'">';
        html += '   <select class="'+ this.prompt.value +'">';
        option.options.forEach(function(val, i){
            html += '<option value="'+ val +'">'+ val +'</option>';
        });
        html += '</select></div>'
    }
    html += '        </div>';
    html += '        <div class="'+ this.prompt.btnWrap +'">';
    html += '            <button class="'+ this.prompt.btn +' '+ this.prompt.submit +'" type="button">'+ this.lang.submit +'</button>';
    html += '            <button class="'+ this.prompt.btn +' '+ this.prompt.cancel +'" type="button">'+ this.lang.cancel +'</button>';
    html += '        </div>';
    html += '    </div>';
    html += '</div>';
    this.cal.$calendar.append(html);
}

/*-------------------------------------------------------------------
    @Popup > Date Event
-------------------------------------------------------------------*/
/**
 * 팝업 이벤트 등록
 * @return ;
 */
CustomCalendar.prototype.setEventPop = function(){
    var ins = this;

    //이벤트 핀
    this.cal.$body.on('mousedown touchstart keydown', '.'+ins.pin.pin, function(e){
        if (e.type == 'keydown') {
            var key = false;
            key = e.key === 'Enter' || e.keyCode === 13 ? true : key;
            key = e.key === 'Space' || e.keyCode === 32 ? true : key;
            if (!key) return;
        }
        e.preventDefault();
        var td = this.closest('td');
        var option = {};
        option.td = td;
        if (this.classList.contains(ins.pin.typeMore)) {
            //더보기 버튼
            option.type = ins.pop.typeMore;
            option.data = [];
            var nowDate = td.getAttribute(ins.attr.cellDate);
            ins.event.data.forEach(function(val, idx){
                if (val.dateRange.indexOf(nowDate) != -1) {
                    option.data.push(val);
                }
            });
        } else {
            //일정 버튼
            option.type = ins.pop.typeDetail;
            var eventId = this.getAttribute(ins.attr.event.id);
            ins.event.data.forEach(function(val, i){
                if (val.id == eventId) {
                    option.data = val;
                    return false;
                }
            });
        }
        
        ins.renderEventPop(e, option);
    });

    //팝업 닫기 버튼
    this.cal.$body.on('mousedown touchstart keydown', '.'+ins.pop.btnClose, function(e){
        if (e.type == 'keydown') {
            var key = false;
            key = e.key === 'Enter' || e.keyCode === 13 ? true : key;
            key = e.key === 'Space' || e.keyCode === 32 ? true : key;
            if (!key) return;
        }
        this.closest('.'+ins.pop.container).remove();
    });

    //더보기 팝업 속 이벤트 핀
    this.cal.$body.on('mousedown touchstart', '.'+ins.pop.list.pin, function(e){
        //일정 버튼
        var td = this.closest('td');
        var option = {};
        option.td = td;
        option.type = ins.pop.typeDetail;
        var eventId = this.getAttribute(ins.attr.event.id);
        ins.event.data.forEach(function(val, i){
            if (val.id == eventId) {
                option.data = val;
                return false;
            }
        });
        ins.renderEventPop(e, option);
    });
}


CustomCalendar.prototype.renderEventPop = function(event, option){
    var ins = this;
    //이전 팝업 삭제
    var popup = this.cal.$calendar.find('.'+ins.pop.container);
    popup.length > 0 ? popup.remove() : '';
    
    //target
    var targetTd;
    if (event.type != 'keydown' && option.type != ins.pop.typeMore) {
        var isFound = false;
        var nowLocation = nowLocation = event.type == 'touchstart' ? event.touches[0] : event;
        targetTd = document.elementsFromPoint(nowLocation.clientX, nowLocation.clientY);
        for (var i = 0; i < targetTd.length; i++) {
            if (targetTd[i].tagName === 'TD') {
                targetTd = targetTd[i];
                isFound = true;
                break;
            }
        }
    } else {
        targetTd = option.td;
    }
    
    //좌표 계산
    var tg = targetTd;
    var tdIndex = 0;
    while (tg.previousSibling!= null) {
        tg = tg.previousSibling;
        tg.nodeName != '#text' ? tdIndex++ : '';
    }
    var x = 'left: ';
    if (tdIndex >= 4) {
        x = 'right: ';
        tdIndex = Math.abs(tdIndex - 6);
    }
    x += ((100 / 7) * tdIndex) + '%';
    var y = 'top: '+ targetTd.offsetTop +'px;';

    //html 생성
    var date = targetTd.getAttribute(ins.attr.cellDate);
    var html = '<div class="'+ ins.pop.container +'" ';
    html += 'style="' + y +' '+ x +'">';
    html += '<div class="'+ ins.pop.head +'">';
    html += '<strong class="tit">'+ date +'</strong>';
    html += '<button class="'+ ins.pop.btnClose +'"><span>'+ ins.lang.close +'</span></button>';
    html += '</div>';
    html += '<div class="'+ ins.pop.body +'">';
    html += option.type != ins.pop.typeMore ? ins.setPopDetailHtml(option) : ins.setPopMoreHtml(option);
    html += '</div></div>';

    targetTd.insertAdjacentHTML('beforeend', html);
    $('.'+ins.pop.container+' .'+ins.pop.btnClose).focus();
}


/**
 * 이벤트 상세보기 팝업 HTML 구조 생성
 *
 * @param {Object} option 이벤트 옵션
 * @param {Object} option.td 이벤트 target td 요소
 * @param {Object} option.type 이벤트 타입
 * @param {Object} option.data 해당 이벤트 데이터
 * @return {String} html 구조 텍스트 반환
 */
CustomCalendar.prototype.setPopDetailHtml = function(option){
    var ins = this;
    var html = '';
    html += '<div class="'+ ins.pop.detail.content +'">';
    html += '<ul class="'+ ins.pop.detail.list +'">';
    if (option.data.content.category) {
        html += '<li class="'+ ins.pop.detail.item +'">';
        html += '<strong class="'+ ins.pop.detail.tit +'">'+ ins.lang.category +'</strong>';
        html += '<div class="'+ ins.pop.detail.itemCon +'">';
        html += '<div class="'+ ins.pop.detail.category +'">';
        html += '<span>'+ option.data.content.category +'</span>';
        html += '</div>';
        html += '</div>';
        html += '</li>';
    }
    for(var val in option.data.content) {
        console.log(val);
        var title;
        this.event.items.forEach(function(v){
            console.log(v);
            if (val == v.key) {
                title = v.title;
            }
        })
        if (val == 'category') continue;
        html += '<li class="'+ ins.pop.detail.item +'">';
        html += '<strong class="'+ ins.pop.detail.tit +'">'+ title +'</strong>';
        html += '<div class="'+ ins.pop.detail.itemCon +'">'+ option.data.content[val] +'</div>';
        html += '</li>';
    }
    html += '<li class="'+ ins.pop.detail.item +'">';
    html += '<strong class="'+ ins.pop.detail.tit +'">'+ ins.lang.startDate +'</strong>';
    html += '<div class="'+ ins.pop.detail.itemCon +'">'+ option.data.startDate +'</div>';
    html += '</li>';
    html += '<li class="'+ ins.pop.detail.item +'">';
    html += '<strong class="'+ ins.pop.detail.tit +'">'+ ins.lang.endDate +'</strong>';
    html += '<div class="'+ ins.pop.detail.itemCon +'">'+ option.data.endDate +'</div>';
    html += '</li>';
    html += '</ul>';
    html += '</div>';
    return html;
}


/**
 * 이벤트 더보기 팝업 HTML 구조 생성
 *
 * @param {Object} option 이벤트 옵션
 * @param {Object} option.td 이벤트 target td 요소
 * @param {Object} option.type 이벤트 타입
 * @param {Object} option.data 해당 날짜 이벤트 데이터 리스트
 * @return {String} html 구조 텍스트 반환
 */
CustomCalendar.prototype.setPopMoreHtml = function(option){
    var ins = this;
    var html = '';
    html += '<ul class="'+ ins.pop.list.content +'">';
    option.data.forEach(function(val, i){
        html += '<li class="'+ ins.pop.list.item +'">';
        html += '<button type="button" class="'+ ins.pop.list.pin +'" ';
        html += ins.attr.event.id + '="' + val.id + '"';
        html += ins.attr.event.startDate +'="'+ val.startDate +'" >';
        html += val.content.title;
        html += '</button>';
        html += '</li>';
    });
    html += '</ul>';
    return html;
}



/*============================================================================================
    @filter
============================================================================================*/
//날짜 버튼 클릭 이벤트
CustomCalendar.prototype.setFilterEvents = function(){
    var ins = this;
    var $filter = $('.'+ins.filter.container);
    var $btnOpen = $('.'+ins.cal.utils.btnFilter);
    var $btnClose = $('.'+ins.filter.btnClose);
    var $btnSearch = $('.'+ins.filter.btn+'.'+ins.filter.typeSearch);
    var $btnReset = $('.'+ins.filter.btn+'.'+ins.filter.typeReset);
    $btnOpen.on('click', function(e){
        $filter.addClass(ins.state.active);
    });

    $btnClose.on('click', function(e){
        $filter.removeClass(ins.state.active);
    });

    $btnSearch.on('click', function(e){
        ins.event.filter = []; //초기화
        //필터 선택 항목
        ins.event.items.forEach(function(val){
            var checkboxs = document.querySelectorAll('[name="'+ ins.filter.checkboxName + val.key +'"]');
            var data = {
                key : val.key,
                value : [],
            };
            checkboxs.forEach(function(el, index){
                el.checked === true ? data.value.push(el.value) : '';
            });
            ins.event.filter.push(data);
        });

        //필터 해당 데이터 설정
        var dataRows = Object.assign({}, ins.event.dataRows);
        Object.keys(dataRows).forEach(function(value, index){
            var row = [];
            dataRows[value].forEach(function(val, i){
                var hasItems = false;
                //필터 값 일치 여부 체크
                ins.event.filter.forEach(function(v){
                    if (val.content[v.key] != undefined) {
                        v.value.forEach(function(filterVal){
                            if (val.content[v.key] == filterVal) {
                                hasItems = true;
                            }
                        });
                    }
                });
                hasItems ? row.push(val): '';
            });
            dataRows[value] = row;
        });

        //이벤트 핀 생성
        dataRows = ins.setDateEventSort(dataRows);
        ins.renderDateEventPin(dataRows);
    });

    $btnReset.on('click', function(e){
        var checkboxs = document.querySelectorAll('.'+ins.filter.checkValue);
        checkboxs.forEach(function(el){
            el.checked = false;
        });
        
        //이벤트 핀 생성
        dataRows = ins.setDateEventSort();
        ins.renderDateEventPin();
    });
}


/**
 * 필터 레이어 팝업 HTML 생성
 *
 * @param {Object} this.event.items 설정된 카테고리 항목
 * @return {String} html 구조 텍스트 반환
 */
CustomCalendar.prototype.renderFilter = function(){
    var ins = this;
    var html = '';
    html += '<div class="'+ ins.filter.container +'">';
    html += '<div class="'+ ins.filter.content +'">';
    html += '<div class="'+ ins.filter.header +'">';
    html += '<strong class="'+ ins.filter.title +'">FILTER</strong>'
    html += '<button class="'+ ins.filter.btnClose +'" type="button"><span>닫기</span></button>'
    html += '</div>';
    html += '<div class="'+ ins.filter.body +'">';
    html += '<ul class="'+ ins.filter.list +'">';
    ins.event.items.forEach(function(value, index){
        html += '<li class="'+ ins.filter.item +'">';
        html += '<strong class="'+ ins.filter.itemTitle +'">'+ value.title +'</strong>';
        html += '<ul class="'+ ins.filter.checkList +'">';
        value.options.forEach(function(val, i){
            html += '<li class="'+ ins.filter.checkListItem +'">';
            html += '<label class="'+ ins.filter.checkbox +'"><input class="'+ ins.filter.checkValue +'" type="checkbox" name="'+ ins.filter.checkboxName + value.key +'" value="'+ val +'"><span>'+ val +'</span></label>';
            html += '</li>';
        });
        html += '</ul>';
        html += '</li>';
    });
    html += '</ul>';
    
    html += '<div class="'+ ins.filter.btnWrap +'">';
    html += '<button class="'+ ins.filter.btn +' '+ ins.filter.typeSearch +'" type="button"><span>'+ ins.lang.search +'</span></button>';
    html += '<button class="'+ ins.filter.btn +' '+ ins.filter.typeReset +'" type="button"><span>'+ ins.lang.reset +'</span></button>';
    html += '</div></div></div></div>';
    return html;
}



// 아이콘
class filterIcon extends HTMLElement {
    connectedCallback() {
        let newIcon = document.createElement('svg');
        this.appendChild(newIcon);
        this.innerHTML = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">'
        + '<path class="p1" d="M24.6,23.5c-0.7-3.3-3.6-5.8-7.1-5.8s-6.4,2.5-7.1,5.8H1.5C0.7,23.5,0,24.2,0,25v0c0,0.8,0.7,1.5,1.5,1.5h8.9'
        + 'c0.7,3.3,3.6,5.8,7.1,5.8s6.4-2.5,7.1-5.8h23.9c0.8,0,1.5-0.7,1.5-1.5v0c0-0.8-0.7-1.5-1.5-1.5H24.6z M17.5,29.2'
        + 'c-2.3,0-4.2-1.9-4.2-4.2s1.9-4.2,4.2-4.2s4.2,1.9,4.2,4.2S19.8,29.2,17.5,29.2z"/>'
        + '<path class="p1" d="M39.5,41.2c-0.7-3.3-3.6-5.8-7.1-5.8c-3.5,0-6.4,2.5-7.1,5.8H1.5c-0.8,0-1.5,0.7-1.5,1.5l0,0c0,0.8,0.7,1.5,1.5,1.5h23.8'
        + 'c0.7,3.3,3.6,5.8,7.1,5.8c3.5,0,6.4-2.5,7.1-5.8h9c0.8,0,1.5-0.7,1.5-1.5l0,0c0-0.8-0.7-1.5-1.5-1.5H39.5z M33.6,46.8'
        + 'c-3.2,0.9-6.1-2-5.3-5.3c0.4-1.4,1.5-2.6,2.9-2.9c3.2-0.9,6.1,2,5.3,5.3C36.2,45.3,35,46.5,33.6,46.8z"/>'
        + '<path class="p1" d="M39.5,5.8C38.8,2.5,35.9,0,32.4,0c-3.5,0-6.4,2.5-7.1,5.8H1.5C0.7,5.8,0,6.4,0,7.2v0c0,0.8,0.7,1.5,1.5,1.5h23.8'
        + 'c0.7,3.3,3.6,5.8,7.1,5.8c3.5,0,6.4-2.5,7.1-5.8h9c0.8,0,1.5-0.7,1.5-1.5v0c0-0.8-0.7-1.5-1.5-1.5H39.5z M33.6,11.3'
        + 'c-3.2,0.9-6.1-2-5.3-5.3c0.4-1.4,1.5-2.6,2.9-2.9c3.2-0.9,6.1,2,5.3,5.3C36.2,9.8,35,11,33.6,11.3z"/>'
        + '</svg>';
    }
}
customElements.define('i-filter', filterIcon);