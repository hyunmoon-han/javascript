#### 20210817(화)
HTML<->Server 통신
-<form method =post/get action=서버프로그램>
    <input type=text/hidden/radio/checkbox>
    <select>
    <textarea>
    <input type=submit/reset>
</form>  < - 전제 화면 refresh

javascrip<->Server 통신:                                        text < JSON < XML
AJAX(Asychronous Javascript And Xml)     XML->HTML확장판  데이터를 보낼떄 xml,text(String),json으로 보낼수 있음
JSON(JavaScript Object Noatation) 객체표기법 
-전체화면 refresh가 필요없음(주고받는 데이터가 감소)
  
동기식(Synchronous):데이터를 보내고 응답기다림 // 비동기식(Asynchronous):데이터를 보내고 기다림x,client가 콜백등록하고 응답오면 콜백을 실행시킴.
- .is(":checked/visible/hidden/disabled")
- .index();
- $('td').height(); 마진 포함    $('td').innerheight();텍스트만
- inNan(); notnumbeer->정수 아니면 true 맞으면 false  //$.isNumeric() 숫자면 true
- attr(type,text):type 을 text로 없으면 생성  removeattr(type) : 삭제
- k=$("name").attr(type): type 을 찾아줌

#### 20210816(월)test08
-선택자     :   -id선택자:       #
                -class선택자:    .
                -태그선택자:     ''   $('body'),$('form')-$('form:eq(1)')
- name      : $(input[name=?]).val('an') -중복시 :$('input[name=?]:eq(1)').val('an')
$('input[name=?]#?//.?').val('an') 도 사용 가능
-prop  -변형 ->prop('type','text')
-  정규표현식:[]-> or,또는 
            :*  ->0개 이상의 문자
            :.  ->한개의 문자.
            :{} ->반봇횟수
            :^  ->~로 시작한는
            :$  ->~로 끝나는 
the  The  -> 대소문자 구분없이   "[Tt]he"<- 정규표현식  []은 or
a로 시작하는 모든 단어 : "a*"->at,a,anthoer
"a." ->at,an,am
"a.{3}"  -> any,amy,ami,and

close 가깝다.
closest가장 가까운
k=$("#a").closest('table').prop('id')

append  prepend 기준 태그의 안쪽 앞뒤에 추가
after   before <- 기준태그의 바깥 앞뒤에 추가
.empty()  -> 비움
.hasClass()  포함 여부 -$('table')hasclass('redColor');->true /false
gt(greater than  ~보다 큰)
lt(Less than ~보다 작은)

#### 202010813(금)test07
n=1;
x=n++; ->n값을 x에 넣고나서,n값을 증가시킨다.
x=++n;  -> n값을 증갓시키고 x에 저장

#### 20210812(목) test04참조,test05
<input type=text/hidden/numer/date/datetime/money/textarea...>  =>.val();
<select>,<textarea>=val();
<input type=radio/checkbox>  =>.is(":checked")=>true/false
값 화면에 추가 :.text(문자열 그대로 표시)//.html(문자열을 hhtml태그로 인식/화면에 그리기)
- 뛰어쓰기:&nbsp;
- 기본 선택:checked//seleted


#### 20210811(수)test03
- 콜백 : 실행을 등록해 놓고 맞으면 웹브라우저가 실행
- <form action="서브프로그램" method="post/get">
    <input>....
    <input type=submit/reset> =방와쇠(데이터를 서버에 전달)/입력태그를 비움.
  </from>\
  이벤트(event):on
    blur:focus가 떠났을 떄
    focus:마우스 왼쪽버튼이 눌려서 focus가 들어왔을떄.
    click:마우스 왼쪽 버튼이 클릭됐을 때
    dlbclick:마우스 왼쪽버튼이 더블 클릭 됐을 때
    change:html tag안의 값이변경 됐을떄 
    
-lable태그:for 속성을 사용하여 다른 요소와 결합할 수 있으며, 이때 <label> 요소의 for 속성값은 결합하고자 하는 요소의 id 속성값과 같아야. 요소를 결합하고자 하는 요소 내부에 위치시키면 for 속성을 사용하지 않더라도 해당 요소와 결합시킬 수 있습니다.텍스트를 클릭할 경우 <label> 요소와 연결된 요소를 곧바로 선택할 수 있어 사용자의 편의성을 높일 수 있습니다.
  - fadein(1000)/show() 서서히 나타남.fadein은 시간정살수있음//바로사라짐
  - fadeout(1000)/hide() 시간으로 사라짐//바로사라짐
  $(document).ready(function(){
      이거는 페이지가 준비되고 바로 실행 (초기값 줄수있음)
  })
  .on("액션","id","function")

  -style .변수 {}->   $().addclass('변수')  ->remeveclass()써

  

#### 20210810(화) -test02
- 자바 스크립트 배열 선언: var ar=[10];//var ar=new Array(10);  =길이가 10인 배열선언. 
자바 ArrayList와 비슷(추가 /삭제 수정이 자유롭다.)

1.추가:push() -> 인덱스 마지막에 추가-자바의 add()와 동일
-배열 출력:ar[index]
2. 수정 :ar[index]=값
3. 삭제: -3가지: -첫 인덱스 값 삭제: shift(); -리턴값으로 사용가능
                -delete a[index];
                -마지막 인덱스 값 삭제:k=a.pop(); - 리턴값으로 삭제한 값을 받음.          

- getElementsByName 은 배열로 호출 [] 인덱스값을 넣어줘야함.

- input 태크- 스트링으로 입력됨.

- setTimeout// clearTimeout(특정시간후 취소할떄사용.)
(일정 시간후에 1회 실행/취소) :
function getResult(){
    setTimeout(showText,3000);
}
function showText(){
    document.getElementsByName('point')[0].value="3초가 지났습니다."
}

- setInterval // clearlnterval
(일정 시간 간격으로 실행/취소)
timer=setInterval(showText,2000);//clearInterval(timer)
-자바스크립트 객체: vs배열은 순서가 있지만 자바스크립트는 순서가 의미가 없다.
선언-var obj={};->빈객체선언 ,객체는 k-v로 이루어짐(json(제이슨)포맷(형식).)
추가:obj['key']='v';  -v에는 함수도 사용가능 ->{key:funciont(){},함수()}
wkqktm

####
자바스크립트
특징  - 배열이 java- ArrayList와 많이 비슷.
     - 문법이 자바와 많이 비슷 .
     - 타입 선언이 없다.  타입 이 유연하게 바뀜.

1. 변수선언: 반드시 할 필요가 없다.
- ex) i=0;  -> var i=0;  ->let i=0;
 상수 :const k=1.23;
 
 2.  연산자 : 자바와 동일(사용법, 문법)!
 - a+b+c+d 중 하나라도 문자열이면 연결연산자 사용됨.

 &&절대경로:Root로부터의 경로명
-/Program File/Realtec

   상대경로:다른 폴더로 부터의 경로명(현재 내 폴더가 기준이 됨.)
   구분 : .(현재 폴더), ..(상위 폴더)

  -  interactive(상호작용)//사람<=> 컴퓨터
  1.alert(); 메서지 확인
  2.consloe.log();  콘솔창에 나옴 프로그램이 멈추지않고 메서지 나옴.
  3.confirm();y/n -> 결과 값을 받아서 사용가능(true/false)
    -k=confirm("종류하시겠습니까?");
    if(k==true){
        alert("종류합니다.");
    }else{
        alert("예전으로 돌아갑니다.");
    }


  4.prompt();사용자의 입력 데이터를 받아들임
        k=prompt("이름을 입력하세요.","문");
        alert(k);
        document.write(k);

        k=prompt("이름:");
        if(k==""){
            alert("다시.");
            
        }else{
            alert("너의 이름은:"+k);

추가.자바스크립트는 타입 구분없어서 문자열 비교시 k==""/k=='' 문자열,숫자 비교 타입 없음 
if(){
    let i=0;   ->let 으로 구분하면 사용 법위가 지정됨.  let않붙이고 선언하면 전역변수:범위에 속하지 않음.
}i=4


- 함수(function)

선언: function a(b,c){ -반환값 타입선언 없음. 매개변수도 타입 없이.
    return- 있으면 반환값 있는 함수/
            없으면 반환값 없는 함수.-> 없는 함수도 함수 중간에 return(호출했던부위로 돌아감)사용 가능 .단,반환값은 없음.           
}



