/*
**************************
CustomCalendar 1.1.
regDate 2023.01.11
Copyright (c) 2022 nixpluvia

Contact whbear12@gmail.com

Released under the MIT License
**************************
*/

function CustomCalendar(el, option){
    this.cal = {};
    this.cal.$calendar;      //캘린더 요소
    this.cal.$header;        //캘린더 헤더
    this.cal.$title;         //캘린더 타이틀 박스
    this.cal.$year;          //캘린더 타이틀 년도표시
    this.cal.$month;         //캘린더 타이틀 월 표시
    this.cal.$btnMonths;     //캘린더 헤더 버튼
    this.cal.$btnMonthPrev;  //캘린더 헤더 이전달 버튼
    this.cal.$btnMonthNext;  //캘린더 헤더 다음달 버튼
    this.cal.$body;       //캘린더 표시 영역
    this.cal.$table;         //캘린더 테이블
    this.cal.$td;            //캘린더 날짜 td
    this.cal.$btnDay;        //캘린더 날짜 선택 버튼

    this.cal.header;         //캘린더 헤더
    this.cal.title;          //캘린더 타이틀 박스
    this.cal.year;           //캘린더 타이틀 년도표시
    this.cal.month;          //캘린더 타이틀 월 표시
    this.cal.btnMonths;      //캘린더 헤더 버튼
    this.cal.btnMonthPrev;   //캘린더 헤더 이전달 버튼
    this.cal.btnMonthNext;   //캘린더 헤더 다음달 버튼
    this.cal.body;        //캘린더 표시 영역
    this.cal.table;          //캘린더 테이블
    this.cal.btnDay;         //캘린더 날짜 선택 버튼

    this.data = {};
    this.data.cellDate;
    this.data.cellDay;
    this.data.event = {};
    this.data.event.id;
    this.data.event.title;
    this.data.event.startDate;
    this.data.event.endDate;
    this.data.event.count;
    this.data.event.rank;
    this.data.event.range;

    this.date = {};
    this.date.today;         //오늘 날짜
    this.date.todayYear;     //오늘 날짜 기준 년도
    this.date.todayMonth;    //오늘 날짜 기준 월
    this.date.todayDate;     //오늘 날짜 기준 날짜
    this.date.todayDay;      //오늘 날짜 기준 요일

    this.date.year;          //달력 날짜 기준 년도
    this.date.month;         //달력 날짜 기준 월
    this.date.first;         //달력 날짜 첫날
    this.date.firstDay;      //달력 날짜 첫날 요일
    this.date.last;          //달력 날짜 마지막날
    this.date.lastDate;      //달력 날짜 마지막날 날짜

    this.date.prev;           //달력 날짜 기준 전 달
    this.date.prevYear;       //달력 날짜 기준 전 달 년도
    this.date.prevMonth;      //달력 날짜 기준 전 달 월
    this.date.prevDate;       //달력 날짜 기준 전 달 일
    this.date.prevDay;        //달력 날짜 기준 전 달 요일
    this.date.next;           //달력 날짜 기준 다음 달
    this.date.nextYear;       //달력 날짜 기준 다음 달 년도
    this.date.nextMonth;      //달력 날짜 기준 다음 달 월
    this.date.nextDate;       //달력 날짜 기준 다음 달 일
    this.date.nextDay;        //달력 날짜 기준 다음 달 요일

    this.drag = {};
    this.drag.isPress;
    this.drag.startEl;
    this.drag.nowEl;
    this.drag.endEl;
    this.drag.startDate;
    this.drag.endDate;
    this.drag.startIndex;
    this.drag.endIndex;
    this.drag.dateRange;
    this.drag.dateRangeEl;

    this.event = {};
    this.event.name;
    this.event.data = [];
    this.event.dataRows = {};
    this.event.pin = {};
    this.event.pin.size;
    this.event.pin.maxNum;
    this.event.pin.maxSize;
    this.event.pin.container;
    this.event.pin.$container;
    this.event.pin.pin;
    this.event.pin.content;
    this.event.pin.space;
    this.event.pin.extension;

    this.options = {};
    this.options.tableSummary;      //테이블 요약내용
    this.options.dayNames;          //캘린더 요일 이름
    this.options.showsOtherMonth;   //이전 달, 다음 달 날짜 표시 여부
    this.options.showsPast;         //지난 일자 과거처리
    this.options.useDragRange;
    this.options.useDateEvent;
    
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
        this.cal.title = 'cal-title';
        this.cal.year = 'cal-year';
        this.cal.month = 'cal-month';
        this.cal.btnMonths = 'btn-nav';
        this.cal.btnMonthPrev = 'prev';
        this.cal.btnMonthNext = 'next';
        this.cal.body = 'cal-body';
        this.cal.table = 'calendar';
        this.cal.btnDay = 'btn-day';

        this.data.cellDate = 'data-date';
        this.data.cellDay = 'data-day';
        this.data.event.id = 'data-event-id';
        this.data.event.title = 'data-event-title';
        this.data.event.startDate = 'data-event-start';
        this.data.event.endDate = 'data-event-end';
        this.data.event.count = 'data-event-count';
        this.data.event.rank = 'data-event-rank';

        this.event.name = 'ce_';
        this.event.pin.size = 20;
        this.event.pin.maxNum = 4;
        this.event.pin.pin = 'cal-pin';
        this.event.pin.content = 'cal-pin-con';
        this.event.pin.category = 'cal-pin-cateorgy';

        this.options.tableSummary = '';
        this.options.dayNames = ['일','월','화','수','목','금','토'];
        this.options.showsOtherMonth = false;
        this.options.useDragRange = false;
        this.options.useDateEvent = false;
    } else {
        option.cal = option.cal == undefined ? this.cal : option.cal;
        this.cal.header = option.cal.header == undefined ? 'cal-header' : option.cal.header;
        this.cal.title = option.cal.title == undefined ? 'cal-title' : option.cal.title;
        this.cal.year = option.cal.year == undefined ? 'cal-year' : option.cal.year;
        this.cal.month = option.cal.month == undefined ? 'cal-month' : option.cal.month;
        this.cal.btnMonths = option.cal.btnMonths == undefined ? 'btn-cal' : option.cal.btnMonths;
        this.cal.btnMonthPrev = option.cal.bonthPrev == undefined ? 'prev' : option.cal.btnMonthPrev;
        this.cal.btnMonthNext = option.cal.bonthNext == undefined ? 'next' : option.cal.btnMonthNext;
        this.cal.body = option.cal.body == undefined ? 'cal-body' : option.cal.body;
        this.cal.table = option.cal.table == undefined ? 'calendar' : option.cal.table;
        this.cal.btnDay = option.cal.btnDay == undefined ? 'btn-day' : option.cal.btnDay;


        option.data = option.data == undefined ? this.data : option.data;
        this.data.cellDate = option.data.cellDate == undefined ? 'data-date' : option.data.cellDate;
        this.data.cellDay = option.data.cellDay == undefined ? 'data-day' : option.data.cellDay;

        option.data.event = option.data.event == undefined ? this.data.event : option.data.event;
        this.data.event.id = option.data.event.id == undefined ? 'data-event-id' : option.data.event.id;
        this.data.event.title = option.data.event.title == undefined ? 'data-event-title' : option.data.event.title;
        this.data.event.startDate = option.data.event.startDate == undefined ? 'data-event-start' : option.data.event.startDate;
        this.data.event.endDate = option.data.event.endDate == undefined ? 'data-event-end' : option.data.event.endDate;
        this.data.event.count = option.data.event.count == undefined ? 'data-event-count' : option.data.event.count;
        this.data.event.rank = option.data.event.rank == undefined ? 'data-event-rank' : option.data.event.rank;
        this.data.event.range = option.data.event.range == undefined ? 'data-event-range' : option.data.event.range;


        option.event = option.event == undefined ? this.event : option.event;
        this.event.name = option.event.name == undefined ? 'ce_' : option.event.name;
        option.event.pin = option.event.pin == undefined ? this.event.pin : option.event.pin;
        this.event.pin.size = option.event.pin.size == undefined ? 20 : option.event.pin.size;
        this.event.pin.maxNum = option.event.pin.maxNum == undefined ? 4 : option.event.pin.maxNum;
        this.event.pin.container = option.event.pin.container == undefined ? 'cal-event-container' : option.event.pin.container;
        this.event.pin.pin = option.event.pin.pin == undefined ? 'cal-pin' : option.event.pin.pin;
        this.event.pin.content = option.event.pin.content == undefined ? 'cal-pin-con' : option.event.pin.content;
        this.event.pin.space = option.event.pin.space == undefined ? 'cal-space' : option.event.pin.space;
        this.event.pin.extension = option.event.pin.extension == undefined ? 'cal-extension' : option.event.pin.extension;


        option.options = option.options == undefined ? this.options : option.options;
        this.options.tableSummary = option.options.tableSummary == undefined ? '' : option.options.tableSummary;
        this.options.dayNames = option.options.dayNames == undefined ? ['일','월','화','수','목','금','토'] : option.options.dayNames;
        this.options.showsOtherMonth = option.options.showsOtherMonth == undefined ? false : option.options.showsOtherMonth;
        this.options.useDragRange = option.options.useDragRange == undefined ? false : option.options.useDragRange;
        this.options.useDateEvent = option.options.useDateEvent == undefined ? false : option.options.useDateEvent;
    }

    this.initDate(); //날짜 데이터 설정
    this.renderLayout(); //레이아웃 생성
    this.initElements(); //레이아웃 element 지정
    this.renderDate(); //날짜 데이터 입력
    this.onChangeMonth();//캘린더 전환 이벤트 설정

    this.options.useDragRange === true ? this.onDragRange() : ''; //드래그 이벤트 사용여부
    // this.options.useDateEvent === true ? this.onDragRange() : ''; //드래그 이벤트 사용여부
}

//날짜 데이터 설정
CustomCalendar.prototype.initDate = function(){
    this.date.today = new Date();//오늘 날짜 (달력의 첫 기준)
    this.date.todayYear = this.date.today.getFullYear();//오늘 날짜 기준 년도
    this.date.todayMonth = this.date.today.getMonth()+1;//오늘 날짜 기준 월
    this.date.todayMonth = this.date.todayMonth < 10 ? "0" + this.date.todayMonth : '';
    this.date.todayDate = this.date.today.getDate();//오늘 날짜 기준 날짜
    this.date.todayDay = this.date.today.getDay();//오늘 날짜 기준 요일

    this.date.year = this.date.today.getFullYear();//설정된 날짜 기준 년도
    this.date.month = this.date.today.getMonth()+1;//설정된 날짜 기준 월
    this.date.month = this.date.month < 10 ? "0"+this.date.month : '';

    this.date.first = new Date(this.date.year, this.date.month-1,1);//설정된 날짜 첫날
    this.date.firstDay = this.date.first.getDay();//설정된 날짜 첫날
    this.date.last = new Date(this.date.year, this.date.month,0);//설정된 날짜 마지막날
    this.date.lastDate = this.date.last.getDate();

    if (this.options.showsOtherMonth === true) {
        this.date.prev = new Date(this.date.year, this.date.month-1,0);
        this.date.prevYear = this.date.prev.getFullYear();
        this.date.prevMonth = this.date.prev.getMonth()+1;
        this.date.prevMonth = this.date.prevMonth < 10 ? "0" + this.date.prevMonth : '';
        this.date.prevDate = this.date.prev.getDate();
        this.date.prevDay = this.date.prev.getDay();

        this.date.next = new Date(this.date.year, this.date.month,1);
        this.date.nextYear = this.date.next.getFullYear();
        this.date.nextMonth = this.date.next.getMonth()+1;
        this.date.nextMonth = this.date.nextMonth < 10 ? "0" + this.date.nextMonth : '';
        this.date.nextDate = this.date.next.getDate();
        this.date.nextDay = this.date.next.getDay();
    }
}

//레이아웃 생성
CustomCalendar.prototype.renderLayout = function(){
    var layout = '';
    //header 그리기
    layout += '<div class="'+ this.cal.header +'">';
    layout += '<button type="button" class="'+ this.cal.btnMonths +' '+ this.cal.btnMonthPrev +'"></button>';
    layout += '<strong class="'+ this.cal.title +'">';
    layout += '<span class="'+ this.cal.year +'"></span>';
    layout += '<span>.</span>';
    layout += '<span class="'+ this.cal.month +'"></span>';
    layout += '</strong>';
    layout += '<button type="button" class="'+ this.cal.btnMonths +' '+ this.cal.btnMonthNext +'"></button>';
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
            for(var j=0; j<7; j++){
                layout += '<td>';
                layout += '<a href="#" class="'+ this.cal.btnDay +'"></a>';
                layout += '</td>';
            }
            layout += '</tr>';
        }
    } else {
        for(var i=0; i<6; i++){
            layout += '<tr>';
            for(var j=0; j<7; j++){
                layout += '<td>';
                layout += '<a href="#" class="'+ this.cal.btnDay +'"></a>';
                layout += '<div class="'+ this.event.pin.container +'">';
                layout += '</div>';
                layout += '</td>';
            }
            layout += '</tr>';
        }
    }
    layout += '</tbody>';
    layout += '</table>';
    layout += '</div>';

    //레이아웃 생성
    this.cal.$calendar.html(layout);
}

//레이아웃 element 지정
CustomCalendar.prototype.initElements = function(){
    this.cal.$header = this.cal.$calendar.find('> .'+this.cal.header);//캘린더 헤더
    this.cal.$title = this.cal.$header.find('> .'+this.cal.title);//캘린더 타이틀 박스
    this.cal.$year = this.cal.$title.find('> .'+this.cal.year);//캘린더 타이틀 년도표시
    this.cal.$month = this.cal.$title.find('> .'+this.cal.month);//캘린더 타이틀 월 표시
    this.cal.$btnMonths = this.cal.$header.find('> .'+this.cal.btnMonths);//캘린더 헤더 버튼
    this.cal.$btnMonthPrev = this.cal.$header.find('> .'+this.cal.btnMonths+'.'+this.cal.btnMonthPrev);//캘린더 헤더 이전달 버튼
    this.cal.$btnMonthNext = this.cal.$header.find('> .'+this.cal.btnMonths+'.'+this.cal.btnMonthNext);//캘린더 헤더 다음달 버튼

    this.cal.$body = this.cal.$calendar.find('> .' + this.cal.body);//캘린더 표시 영역
    this.cal.$table = this.cal.$body.find('> .'+ this.cal.table);//캘린더 테이블
    this.cal.$td = this.cal.$table.find('tr > td');//캘린더 날짜 td
    this.cal.$btnDay = this.cal.$table.find('.'+this.cal.btnDay);//캘린더 날짜 선택 버튼
    if(this.options.useDateEvent === true) {
        this.event.pin.$container = this.cal.$td.find('> .' + this.event.pin.container);
        this.event.pin.maxSize = this.event.pin.size * 5;
        this.event.pin.$container.css('height', this.event.pin.maxSize + 'px');
    }
}

//날짜 데이터 입력
CustomCalendar.prototype.renderDate = function(){
    var ins = this;
    var dateCount = 1;//날짜 생성을 위한 카운트
    var dateDay = this.date.firstDay;//요일
    function setDate(i){
        ins.cal.$btnDay.eq(i).text(dateCount);
        dateCount = dateCount < 10 ? '0' + dateCount : dateCount;
        ins.cal.$td.eq(i).attr(ins.data.cellDate, ins.date.year + '-' + ins.date.month + '-' + dateCount);
        dateDay = dateDay > 6 ? 0 : dateDay;
        ins.cal.$td.eq(i).attr(ins.data.cellDay, dateDay);

        dateCount++;
        dateDay++;
    }
    //달력 header 변경
    this.cal.$year.text(this.date.year);
    this.cal.$month.text(this.date.month);

    
    var status = 'default';
    if (ins.date.year < ins.date.todayYear) {
        status = 'disable';
    } else if (ins.date.year == ins.date.todayYear){
        if (ins.date.month < ins.date.todayMonth){
            status = 'disable';
        } else if (ins.date.month == ins.date.todayMonth){
            status = 'check';
        }
    }

    //이번달 날짜 입력 (이번달 시작 요일 ~ 이번달 마지막 날짜)
    if (status == 'check') {
        for(var i = this.date.firstDay; i < this.date.firstDay + this.date.lastDate; i++){
            setDate(i);
            i < ins.date.firstDay + ins.date.todayDate - 1 ? ins.cal.$td.eq(i).addClass('disable') : '';
        }
    } else if (status == 'disable'){
        for(var i = this.date.firstDay; i < this.date.firstDay + this.date.lastDate; i++){
            setDate(i);
            ins.cal.$td.eq(i).addClass('disable');
        }
    } else {
        for(var i = this.date.firstDay; i < this.date.firstDay + this.date.lastDate; i++){
            setDate(i);
        }
    }

    
    if (this.options.showsOtherMonth === false) {
        for(var i = 0; i < this.date.firstDay; i++){ //이전 달 날짜 버튼 삭제
            this.cal.$btnDay.eq(i).addClass('hide');
        }
        for(var i = this.date.firstDay + this.date.lastDate; i < 42; i++){ //다음달 날짜 버튼 삭제
            this.cal.$btnDay.eq(i).addClass('hide');
        }
    } else {
        var prevDateCount = this.date.prevDate - this.date.firstDay + 1;
        for(var i = 0; i < this.date.firstDay; i++){ //이전 달 날짜 버튼 삭제
            this.cal.$td.eq(i).addClass('disable');
            this.cal.$td.eq(i).attr(ins.data.cellDate, this.date.prevYear + '-' + this.date.prevMonth + '-' + prevDateCount);
            this.cal.$btnDay.eq(i).text(prevDateCount);
            ++prevDateCount;
        }
        var nextDateCount = 1;
        for(var i = this.date.firstDay + this.date.lastDate; i < 42; i++){ //다음달 날짜 버튼 삭제
            this.cal.$td.eq(i).addClass('disable');
            this.cal.$td.eq(i).attr(ins.data.cellDate, this.date.nextYear + '-' + this.date.nextMonth + '-' + nextDateCount);
            this.cal.$btnDay.eq(i).text(nextDateCount);
            nextDateCount = nextDateCount < 10 ? '0' + nextDateCount : nextDateCount;
            ++nextDateCount;
        }
    }
}

//날짜 갱신
CustomCalendar.prototype.getNewDate = function(){
    //날짜 초기화
    this.cal.$td.removeClass('able');
    this.cal.$td.removeClass('disable');
    this.cal.$td.attr(this.data.cellDate,'');
    this.cal.$td.attr(this.data.cellDay,'');
    this.cal.$btnDay.text('');
    this.cal.$btnDay.removeClass('hide');
    this.cal.$btnDay.removeClass('act');

    //날짜 재설정
    this.date.first = new Date(this.date.year, this.date.month-1,1);
    this.date.last = new Date(this.date.year, this.date.month,0);
    this.date.firstDay = this.date.first.getDay();
    this.date.lastDate = this.date.last.getDate();

    if (this.showsOtherMonth === true) {
        this.date.prev = new Date(this.date.year, this.date.month-2,0);
        this.date.prevYear = this.date.prev.getFullYear();
        this.date.prevMonth = this.date.prev.getMonth()+1;
        this.date.prevMonth = this.date.prevMonth < 10 ? "0" + this.date.prevMonth : '';
        this.date.prevDate = this.date.prev.getDate();
        this.date.prevDay = this.date.prev.getDay();
    
        this.date.next = new Date(this.date.year, this.date.month,1);
        this.date.nextYear = this.date.next.getFullYear();
        this.date.nextMonth = this.date.next.getMonth()+1;
        this.date.nextMonth = this.date.nextMonth < 10 ? "0" + this.date.nextMonth : '';
        this.date.nextDate = this.date.next.getDate();
        this.date.nextDay = this.date.next.getDay();
    }
    //달력 날짜 재생성
    this.renderDate();
}

//날짜 갱신 (수동)
CustomCalendar.prototype.setNewDate = function(date){
    var newDate = date.split('-');
    this.date.year = newDate[0];
    this.date.month = newDate[1];

    //달력 날짜 갱신
    this.getNewDate();
};

//달력 데이터 셋팅 이벤트
CustomCalendar.prototype.getCalendarData = function(){
    var calendar = this;
    this.setCalendarData(calendar);
};
CustomCalendar.prototype.setCalendarData = function(){
};

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
            var $el = $(this);
            customEvent(ins, $el);
        });
    }
}

//다음달 클릭 이벤트
CustomCalendar.prototype.btnNextClick = function(customEvent){
    var ins = this;
    if (typeof customEvent == 'function') {
        this.cal.$btnMonthNext.on('click', function(){
            var $el = $(this);
            customEvent(ins, $el);
        });
    }
}

//날짜 버튼 클릭 이벤트
CustomCalendar.prototype.btnDayClick = function(customEvent){
    var ins = this;
    if (typeof customEvent == 'function') {
        this.cal.$btnDay.on('click', function(e){
            e.preventDefault();
            var $el = $(this);
            customEvent(ins, $el);
        });
    }
}

//날짜 값이 일치하는 td의 index 찾기
CustomCalendar.prototype.findTdIndex = function(date){
    var ins = this;
    var returnValue;
    this.cal.$td.each(function(index, el){
        if (date == el.getAttribute(ins.data.cellDate)) {
            returnValue = index;
            return false;
        }
    });
    return returnValue;
}

//현재 선택된 날짜들의 배열
CustomCalendar.prototype.findDateRange = function(){
    var ins = this;
    var returnArray = [];
    var elArray = [];
    this.cal.$td.each(function(index, el){
        if (el.classList.contains('selected')) {
            returnArray.push(el.getAttribute(ins.data.cellDate));
            elArray.push(el);
        }
    });
    ins.drag.dateRangeEl = elArray;
    return returnArray;
}

//현재 선택된 날짜들 리셋
CustomCalendar.prototype.resetSelected = function(){
    var ins = this;
    this.cal.$td.each(function(index, el){
        if (el.classList.contains('selected')) {
            el.classList.remove('selected');
        }
    });
}


//날짜 드래그 선택 이벤트
CustomCalendar.prototype.onDragRange = function(){
    var ins = this;
    ins.drag.isPress = false; //현재 마우스 상태

    //달력 영역을 벗어나면 이벤트 해제
    ins.cal.$body.on('mouseleave', function(){
        if (ins.drag.isPress != false) {
            ins.cal.$td.off('mousemove');
            ins.cal.$td.off('touchmove');
            ins.cal.$td.off('mouseup');
            ins.cal.$td.off('touchend');
            ins.cal.$td.removeClass('selected');
        }
    });

    //드래그 시작 이벤트
    ins.cal.$td.on('mousedown touchstart', function(e){
        e.preventDefault();
        var $el = $(this);
        var pass = false;
        var passTargetList = [ins.cal.btnDay, ins.event.pin.container]
        passTargetList.forEach(function(val, i){
            if (e.target.classList.contains(val)) {
                pass = true;
                return false;
            }
        });
        var startDate = $el.attr(ins.data.cellDate);
        if ($el.hasClass('disable') == true || startDate == undefined || startDate == '') return false; //선택 불가 요소 이벤트 방지
        if (!pass) return; //하위 요소로 이벤트는 전달

        ins.drag.isPress = true;
        ins.drag.startEl = e.currentTarget;
        ins.drag.nowEl = e.currentTarget;
        ins.drag.nowEl.classList.add('selected');
        ins.drag.startIndex = ins.findTdIndex(startDate);

        //드래그 이동 이벤트 등록
        ins.cal.$td.on('mousemove touchmove', function(e){
            e.preventDefault();
            var nowTarget;
            var nowIndex;
            var nowLocation = nowLocation = e.type == 'touchmove' ? e.touches[0] : e;
            var isFound = false;
            nowTarget = document.elementsFromPoint(nowLocation.clientX, nowLocation.clientY);
            for (var i = 0; i < nowTarget.length; i++) {
                if (nowTarget[i].tagName === 'TD') {
                    nowTarget = nowTarget[i];
                    isFound = true;
                    break;
                }
            }
            if (!isFound) return false;
            nowIndex = nowTarget.getAttribute(ins.data.cellDate);

            if (ins.drag.nowEl != nowTarget) { //이전 target과 다를 경우
                if (!nowTarget.classList.contains('disable') && nowIndex != undefined && nowIndex != null && nowIndex != '') { //선택불가 요소가 아닐 경우
                    ins.drag.nowEl = nowTarget;
                    ins.drag.endIndex = ins.findTdIndex(nowIndex);
                    ins.cal.$td.removeClass('selected');

                    if (ins.drag.startIndex <= ins.drag.endIndex) {
                        //기준일 보다 이후 날짜 일 경우
                        for (var i = ins.drag.startIndex; i <= ins.drag.endIndex; i++) {
                            ins.cal.$td[i].classList.add('selected');
                        }
                    } else {
                        //기준일 보다 이전 날짜 일 경우
                        for (var i = ins.drag.endIndex; i <= ins.drag.startIndex; i++) {
                            ins.cal.$td[i].classList.add('selected');
                        }
                    }
                    
                }
            }
        });

        //드래그 종료 이벤트 등록
        ins.cal.$td.on('mouseup touchend', function(e){
            e.preventDefault();
            ins.drag.isPress = false;
            e.type == 'mouseup' ? ins.cal.$td.off('mousemove') : ins.cal.$td.off('touchmove');
            ins.drag.dateRange = ins.findDateRange();
            ins.drag.startDate = ins.drag.dateRange[0];
            ins.drag.endDate = ins.drag.dateRange[ins.drag.dateRange.length - 1];

            if (typeof ins.onCustomDragEnd == 'function') { //커스텀 콜백함수
                ins.onCustomDragEnd();
            } else { //기본
                ins.onDragEnd();
            }
            e.type == 'mouseup' ? ins.cal.$td.off('mouseup') : ins.cal.$td.off('touchend');
        });
    });

    ins.onClickPin();
}

//드래그 종료 콜백
CustomCalendar.prototype.onDragEnd = function(){
    var ins = this;
    this.resetSelected();
    if (this.options.useDateEvent) {
        if (typeof this.renderCustomDateEvent == 'function') {
            this.renderCustomDateEvent();
        } else {
            this.renderDateEvent();
        }
    }
}
CustomCalendar.prototype.onCustomDragEnd;

//날짜 이벤트 생성
CustomCalendar.prototype.renderDateEvent = function(){
    var ins = this;
    var title = prompt('타이틀을 입력해주세요.');
    if (title == null) return false;
    
    ins.setDateEventData(title);
    ins.setDateEventSort();
    ins.renderDateEventPin();
}
CustomCalendar.prototype.renderCustomDateEvent;

CustomCalendar.prototype.setDateEventData = function(title){
    var ins = this;
    var eventId = this.event.name + this.event.data.length;
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

    this.event.data.push({
        'id' : eventId,
        'startDate' : this.drag.startDate,
        'endDate' : this.drag.endDate,
        'dateRange' : this.drag.dateRange,
        'totalRange': this.drag.dateRange.length,
    });
    
    tds.forEach(function(value){
        var rowKey = 'row_' + value.row;
        if (ins.event.dataRows[rowKey] == undefined) {
            ins.event.dataRows[rowKey] = [];
        }
        value.id = eventId,
        value.rank = 0,
        value.title = title,
        value.totalRange = ins.drag.dateRange.length,
        value.startDate = ins.drag.startDate,
        value.endDate = ins.drag.endDate,
        value.dateRange = ins.drag.dateRange,
        value.dateRangeEl = ins.drag.dateRangeEl,
        value.isSorted = false,
        ins.event.dataRows[rowKey].push(value);
    });
}


CustomCalendar.prototype.setDateEventSort = function(){
    var ins = this;
    for (var key in ins.event.dataRows) {
        // ins.event.dataRows[key] : tr기준 구분
        var value = ins.event.dataRows[key];
        var common = [];

        //날짜 순서로 정렬
        value.sort(function(a, b){
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

        //이벤트 중복 날짜 찾기
        value.forEach(function(val, i){
            if (i == 0) return;
            var filterArray = val.dateRange.filter(function(x) {
                if (value[i-1].dateRange.indexOf(x) !== -1 && common.indexOf(x) == -1) {
                    return true;
                }
                return false;
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
};

CustomCalendar.prototype.renderDateEventPin = function(){
    var ins = this;
    this.event.pin.$container.each(function(i, el){
        // $(el).empty();
        while (el.firstChild) { 
            el.removeChild(el.firstChild);
        }
    });
    
    for (var key in ins.event.dataRows) {
        var value = ins.event.dataRows[key];
        value.forEach(function(val, index){
            var $td = val.el;
            var $container = $td.find('.'+ins.event.pin.container);
            var html = '';
            var top = (val.rank * ins.event.pin.size) + 'px';
            var width = parseInt(val.range) * 100;
            var border = parseInt(val.range) - 1;
            var size = 'calc('+ width + '% + ' + border +'px)';
            var pinClass = val.isClone == true ? ins.event.pin.pin + ' ' + ins.event.pin.extension : ins.event.pin.pin;
            if (val.rank < ins.event.pin.maxNum) {
                html += '<div class="'+ pinClass +'" ';
                html += 'style="top: '+ top +'; width: '+ size +';"';
                html += ins.data.event.id +'="'+ val.id +'" ';
                html += ins.data.event.range +'="'+ val.range +'" ';
                html += 'data-clone="'+ val.isClone +'" >';
                // html += ins.data.event.title +'="'+ val.title +'" ';
                // html += ins.data.event.startDate +'="'+ val.startDate +'" ';
                // html += ins.data.event.endDate +'="'+ val.endDate +'">';
                html += '<div class="'+ ins.event.pin.content +'" >';
                html += val.title;
                html += '</div></div>';
            } else {
                if ($container.find('.more').length < 1){
                    html += '<div class="'+ pinClass +'" ';
                    html += 'style="top: '+ top +'; width: '+ size +';">';
                    html += '<div class="more" >';
                    html += '더보기';
                    html += '</div></div>';
                }
            }
            
            $container.append(html);
        });
    }
};

CustomCalendar.prototype.onClickPin = function(){
    var ins = this;
    this.cal.$body.on('mousedown touchstart', '.'+ins.event.pin.content, function(e){
        e.preventDefault();
        console.log('asdasdsd');
    });
}