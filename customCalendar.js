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
    this.$calendar = null;//캘린더 요소
    this.calHeader = null;//캘린더 헤더
    this.calTitle = null;//캘린더 타이틀 박스
    this.calYear = null;//캘린더 타이틀 년도표시
    this.calMonth = null;//캘린더 타이틀 월 표시
    this.calBtnMonths = null;//캘린더 헤더 버튼
    this.calBtnMonthPrev = null;//캘린더 헤더 이전달 버튼
    this.calBtnMonthNext = null;//캘린더 헤더 다음달 버튼
    this.calContent = null;//캘린더 표시 영역
    this.calTable = null;//캘린더 테이블
    this.calBtnDay = null;//캘린더 날짜 선택 버튼

    this.$calHeader = null;//캘린더 헤더
    this.$calTitle = null;//캘린더 타이틀 박스
    this.$calYear = null;//캘린더 타이틀 년도표시
    this.$calMonth = null;//캘린더 타이틀 월 표시
    this.$calBtnMonths = null;//캘린더 헤더 버튼
    this.$calBtnMonthPrev = null;//캘린더 헤더 이전달 버튼
    this.$calBtnMonthNext = null;//캘린더 헤더 다음달 버튼
    this.$calContent = null;//캘린더 표시 영역
    this.$calTable = null;//캘린더 테이블
    this.$calTd = null;//캘린더 날짜 td
    this.$calBtnDay = null;//캘린더 날짜 선택 버튼

    this.today = null;//오늘 날짜
    this.year = null;//설정된 날짜 기준 년도
    this.month = null;//설정된 날짜 기준 월
    this.todayYear = null;//오늘 날짜 기준 년도
    this.todayMonth = null;//오늘 날짜 기준 월
    this.todayDate = null;//오늘 날짜 기준 날짜
    this.todayDay = null;//오늘 날짜 기준 요일
    this.firstDay = null;//설정된 달 첫날
    this.firstDayWeek = null;//설정된 달 첫날 요일
    this.lastDay = null;//설정된 달 마지막날
    this.lastDayDate = null;//설정된 달 마지막날 요일
    this.dayCount = null;//날짜 생성을 위한 카운트
    
    this.init(el, option);//초기화 실행
    this.drawLayout();
    this.elementsInit();
    this.drawDays();
    this.eventChangeMonth();
    // this.info();
}
CustomCalendar.prototype.info = function(){
    console.log('$calendar 캘린더 요소');
    console.log(this.$calendar);//캘린더 요소
    console.log('calHeader 캘린더 헤더');
    console.log(this.calHeader);//캘린더 헤더
    console.log('calTitle 캘린더 타이틀 박스');
    console.log(this.calTitle);//캘린더 타이틀 박스
    console.log('calYear 캘린더 타이틀 년도표시');
    console.log(this.calYear);//캘린더 타이틀 년도표시
    console.log('calMonth 캘린더 타이틀 월 표시');
    console.log(this.calMonth);//캘린더 타이틀 월 표시
    console.log('calBtnMonths 캘린더 헤더 버튼');
    console.log(this.calBtnMonths);//캘린더 헤더 버튼
    console.log('calBtnMonthPrev 캘린더 헤더 이전달 버튼');
    console.log(this.calBtnMonthPrev);//캘린더 헤더 이전달 버튼
    console.log('calBtnMonthNext 캘린더 헤더 다음달 버튼');
    console.log(this.calBtnMonthNext);//캘린더 헤더 다음달 버튼
    console.log('calContent 캘린더 표시 영역');
    console.log(this.calContent);//캘린더 표시 영역
    console.log('calTable 캘린더 테이블');
    console.log(this.calTable);//캘린더 테이블
    console.log('calBtnDay 캘린더 날짜 선택 버튼');
    console.log(this.calBtnDay);//캘린더 날짜 선택 버튼

    console.log('$calHeader 캘린더 헤더')
    console.log(this.$calHeader);//캘린더 헤더
    console.log('$calTitle 캘린더 타이틀 박스')
    console.log(this.$calTitle);//캘린더 타이틀 박스
    console.log('$calYear 캘린더 타이틀 년도표시')
    console.log(this.$calYear);//캘린더 타이틀 년도표시
    console.log('$calMonth 캘린더 타이틀 월 표시')
    console.log(this.$calMonth);//캘린더 타이틀 월 표시
    console.log('$calBtnMonths 캘린더 헤더 버튼')
    console.log(this.$calBtnMonths);//캘린더 헤더 버튼
    console.log('$calBtnMonthPrev 캘린더 헤더 이전달 버튼')
    console.log(this.$calBtnMonthPrev);//캘린더 헤더 이전달 버튼
    console.log('$calBtnMonthNext 캘린더 헤더 다음달 버튼')
    console.log(this.$calBtnMonthNext);//캘린더 헤더 다음달 버튼
    console.log('$calContent 캘린더 표시 영역')
    console.log(this.$calContent);//캘린더 표시 영역
    console.log('$calTable 캘린더 테이블')
    console.log(this.$calTable);//캘린더 테이블
    console.log('$calTd 캘린더 날짜 td')
    console.log(this.$calTd);//캘린더 날짜 td
    console.log('$calBtnDay 캘린더 날짜 선택 버튼')
    console.log(this.$calBtnDay);//캘린더 날짜 선택 버튼

    console.log('today 오늘 날짜');
    console.log(this.today);//오늘 날짜
    console.log('year 설정된 날짜 기준 년도');
    console.log(this.year);//설정된 날짜 기준 년도
    console.log('month 설정된 날짜 기준 월');
    console.log(this.month);//설정된 날짜 기준 월
    console.log('todayYear 오늘 날짜 기준 년도');
    console.log(this.todayYear);//오늘 날짜 기준 년도
    console.log('todayMonth 오늘 날짜 기준 월');
    console.log(this.todayMonth);//오늘 날짜 기준 월
    console.log('todayDate 오늘 날짜 기준 일');
    console.log(this.todayDate);//오늘 날짜 기준 일
    console.log('todayday 오늘 날짜 기준 요일');
    console.log(this.todayday);//오늘 날짜 기준 요일
    console.log('firstDay 설정된 달 첫날');
    console.log(this.firstDay);//설정된 달 첫날
    console.log('firstDayWeek 설정된 달 첫날 요일');
    console.log(this.firstDayWeek);//설정된 달 첫날 요일
    console.log('lastDay 설정된 달 마지막날');
    console.log(this.lastDay);//설정된 달 마지막날
    console.log('lastDayDate 설정된 달 마지막날 요일');
    console.log(this.lastDayDate);//설정된 달 마지막날 요일
    console.log('dayCount 날짜 생성을 위한 카운트');
    console.log(this.dayCount);//날짜 생성을 위한 카운트
}
CustomCalendar.prototype.init = function(el, option){
    //캘린더 초기화
    this.$calendar = $(el);//캘린더 요소 초기화
    if (option == undefined) {
        this.calHeader = 'cal-header';
        this.calTitle = 'cal-title';
        this.calYear = 'cal_year';
        this.calMonth = 'cal_month';
        this.calBtnMonths = 'btn-cal';
        this.calBtnMonthPrev = 'prev';
        this.calBtnMonthNext = 'next';
        this.calContent = 'calendar-box';
        this.calTable = 'calendar';
        this.calBtnDay = 'btn-day';
    } else {
        option.calHeader == undefined ? this.calHeader = 'cal-header' : this.calHeader = option.calHeader;
        option.calTitle == undefined ? this.calTitle = 'cal-title' : this.calTitle = option.calTitle;
        option.calYear == undefined ? this.calYear = 'cal_year' : this.calYear = option.calYear;
        option.calMonth == undefined ? this.calMonth = 'cal_month' : this.calMonth = option.calMonth;
        option.calBtnMonths == undefined ? this.calBtnMonths = 'btn-cal' : this.calBtnMonths = option.calBtnMonths;
        option.calBtnPrevMonth == undefined ? this.calBtnMonthPrev = 'prev' : this.calBtnMonthPrev = option.calBtnPrevMonth;
        option.calBtnNextMonth == undefined ? this.calBtnMonthNext = 'next' : this.calBtnMonthNext = option.calBtnNextMonth;
        option.calContent == undefined ? this.calContent = 'calendar-box' : this.calContent = option.calContent;
        option.calTable == undefined ? this.calTable = 'calendar' : this.calTable = option.calTable;
        option.calBtnDay == undefined ? this.calBtnDay = 'btn-day' : this.calBtnDay = option.calBtnDay;
    }

    this.initDays();
}
CustomCalendar.prototype.initDays = function(){
    this.today = new Date();//오늘 날짜
    this.year = this.today.getFullYear();//설정된 날짜 기준 년도
    this.month = this.today.getMonth()+1;//설정된 날짜 기준 월
    this.todayYear = this.today.getFullYear();//오늘 날짜 기준 년도
    this.todayMonth = this.today.getMonth()+1;//오늘 날짜 기준 월
    if(this.todayMonth < 10){this.todayMonth = "0"+this.todayMonth;}
    this.todayDate = this.today.getDate();//오늘 날짜 기준 날짜
    this.todayDay = this.today.getDay();//오늘 날짜 기준 요일
    if(this.month < 10){this.month = "0"+this.month;}
    this.firstDay = new Date(this.year, this.month-1,1);//이번달 첫날
    this.lastDay = new Date(this.year, this.month,0);//이번달 마지막날
    this.firstDayWeek = this.firstDay.getDay();
    this.lastDayDate = this.lastDay.getDate();
    this.dayCount = 0;//날짜 생성을 위한 카운트
}

CustomCalendar.prototype.drawLayout = function(){
    //레이아웃 틀 만들기

    var drawLayout = '';
    //header 그리기
    drawLayout += '<div class="'+ this.calHeader +'">'
    drawLayout += '<button type="button" class="'+ this.calBtnMonths +' '+ this.calBtnMonthPrev +'"></button>'
    drawLayout += '<strong class="'+ this.calTitle +'">'
    drawLayout += '<span class="'+ this.calYear +'"></span>'
    drawLayout += '<span>.</span>'
    drawLayout += '<span class="'+ this.calMonth +'"></span>'
    drawLayout += '</strong>'
    drawLayout += '<button type="button" class="'+ this.calBtnMonths +' '+ this.calBtnMonthNext +'"></button>'
    drawLayout += '</div>'

    //달력 레이아웃 그리기
    drawLayout += '<div class="'+ this.calContent +'">'
    drawLayout+='<table class="'+ this.calTable +'">';
    drawLayout+='<tr><th>일</th><th>월</th><th>화</th><th>수</th><th>목</th><th>금</th><th>토</th></tr>';
    for(var i=0;i<6;i++){
        drawLayout+='<tr>';
        for(var j=0;j<7;j++){
            drawLayout+='<td>';
            drawLayout+='<a href="#" class="'+ this.calBtnDay +'"></a>';
            drawLayout+='</td>';
        }
        drawLayout+='</tr>';
    }
    drawLayout+='</table>';
    drawLayout += '</div>'
    this.$calendar.html(drawLayout);
}

CustomCalendar.prototype.elementsInit = function(){
    this.$calHeader = this.$calendar.find('> .'+this.calHeader);//캘린더 헤더
    this.$calTitle = this.$calHeader.find('> .'+this.calTitle);//캘린더 타이틀 박스
    this.$calYear = this.$calTitle.find('> .'+this.calYear);//캘린더 타이틀 년도표시
    this.$calMonth = this.$calTitle.find('> .'+this.calMonth);//캘린더 타이틀 월 표시
    this.$calBtnMonths = this.$calHeader.find('> .'+this.calBtnMonths);//캘린더 헤더 버튼
    this.$calBtnMonthPrev = this.$calHeader.find('> .'+this.calBtnMonths+'.'+this.calBtnMonthPrev);//캘린더 헤더 이전달 버튼
    this.$calBtnMonthNext = this.$calHeader.find('> .'+this.calBtnMonths+'.'+this.calBtnMonthNext);//캘린더 헤더 다음달 버튼
    this.$calContent = this.$calendar.find('> .' + this.calContent);//캘린더 표시 영역
    this.$calTable = this.$calContent.find('> .'+ this.calTable);//캘린더 테이블
    this.$calTd = this.$calTable.find('tr > td');//캘린더 날짜 td
    this.$calBtnDay = this.$calTable.find('.'+this.calBtnDay);//캘린더 날짜 선택 버튼
}


CustomCalendar.prototype.drawDays = function(){
    this.dayCount = 0;
    var dateDay = this.firstDayWeek;
    this.$calYear.text(this.year);
    this.$calMonth.text(this.month);

    //이번달 날짜 입력
    for(var i=this.firstDayWeek; i<this.firstDayWeek+this.lastDayDate; i++){
        var dayCount = ++this.dayCount;
        this.$calBtnDay.eq(i).text(dayCount);
        
        dayCount < 10 ? dayCount = '0' + dayCount : dayCount = dayCount;
        this.$calBtnDay.eq(i).attr("data-date",this.year+'-'+this.month+'-'+dayCount);
        
        dateDay > 6 ? dateDay = 0 : dateDay = dateDay;
        this.$calBtnDay.eq(i).attr("data-day", dateDay);
        dateDay++;
    }
    
    //전달, 다음달 날짜칸 삭제
    for(var i=0; i<this.firstDayWeek; i++){
        this.$calBtnDay.eq(i).addClass('disable');
    }
    for(var i=this.firstDayWeek+this.lastDayDate; i<42; i++){
        this.$calBtnDay.eq(i).addClass('disable');
    }

    this.getCalendarData();
}

//날짜 갱신
CustomCalendar.prototype.getNewDate = function(){
    for(var i=0;i<42;i++){
        this.$calBtnDay.eq(i).text('');
        this.$calBtnDay.eq(i).removeClass('disable');
        this.$calBtnDay.eq(i).attr('data-date','');
    }

    //날짜 초기화
    this.dayCount=0;
    this.firstDay = new Date(this.year,this.month-1,1);
    this.lastDay = new Date(this.year,this.month,0);
    this.firstDayWeek = this.firstDay.getDay();
    this.lastDayDate = this.lastDay.getDate();
    //달력 날짜 재생성
    this.drawDays();
}

//날짜 갱신 (수동)
CustomCalendar.prototype.setNewDate = function(date){
    var newDate = date.split('-');
    this.year = newDate[0];
    this.month = newDate[1];

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

//달력 다음달, 이전달 날짜 전환 이벤트
CustomCalendar.prototype.eventChangeMonth = function(){
    var calendar = this;
    this.$calBtnMonths.on('click', function(){
        var $this = $(this);//이벤트 발생 요소
        if ($this.hasClass(calendar.calBtnMonthPrev)) {
            calendar.month--;
            if(calendar.month<=0){
                calendar.month=12;
                calendar.year--;
            }
            if(calendar.month<10){
                calendar.month=String("0"+calendar.month);
            }
        } else {
            calendar.month++;
            if(calendar.month>12){
                calendar.month=1;
                calendar.year++;
            }
            if(calendar.month<10){
                calendar.month=String("0"+calendar.month);
            }
        }
        calendar.getNewDate();
    });
}
//달력 이전달 클릭 이벤트
CustomCalendar.prototype.btnPrevClick = function(customEvent){
    var calendar = this;
    this.$calBtnMonthPrev.on('click', function(){
        var $el = $(this);
        customEvent(calendar, $el);
    });
}
//달력 다음달 클릭 이벤트
CustomCalendar.prototype.btnNextClick = function(customEvent){
    var calendar = this;
    this.$calBtnMonthNext.on('click', function(){
        var $el = $(this);
        customEvent(calendar, $el);
    });
}

//날짜 버튼 클릭 이벤트
CustomCalendar.prototype.btnDayClick = function(customEvent){
    var calendar = this;
    this.$calBtnDay.on('click', function(e){
        e.preventDefault();
        var $el = $(this);
        customEvent(calendar, $el);
    });
}