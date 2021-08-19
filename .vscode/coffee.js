
<script>
    let name;
    let price;
    let sum;
    var mobile;
    let mt = 0;
    let ee;
    let name2 = '';
    let sum2 = '';
    let ee2 = '';
    let su = 0;
    $(document)
        //클릭
        .on('click', '#tbl1 tr', function () {
            oo = $(this);
            oo.each(function () {
                name = $(this).find('td:eq(0)').text();
                price = $(this).find('td:eq(1)').text();
            })
            $('#inputEmail4').val(name);
            $('#inputPassword9').val(price);
            $('#inputPassword6').val('');
            return false;
        })
        //합계금액표시  
        .on('blur', '#inputPassword6', function () {
            sum = $(this).val();
            $('#inputPassword8').val(price * sum);
            return false;
        })
        //추가     
        .on('click', '#add', function () {
            aa = $(this);
            ee = $('#inputPassword8').val();
            ++mt;
            //$("#tbl2 tr:eq("+mt+")").find('td:eq(2)').text(ee);
            $("#tbl2 tr:eq(" + mt + ")").find('td:eq(0)').text(name);
            $("#tbl2 tr:eq(" + mt + ")").find('td:eq(1)').text(sum);
            $("#tbl2 tr:eq(" + mt + ")").find('td:eq(2)').text(ee);
            return false;
        })
        //주문
        .on('click', '#order', function () {
            mobile = prompt('모바일 번호를 입력하세요.');
            $('#inputEmail42').val(mobile);
            return false;
        })
        //삭제버튼
        .on('click', '#cancle', function () {
            $('#inputEmail42').val('');
            $('#order').trigger('click');
            return false;
        })
        .on('click', '#tbl2 tr', function () {
            //테이블 클릭시 이름수량 금액 값 이동
            name2 = $(this).find('td:eq(0)').text();
            sum2 = $(this).find('td:eq(1)').text();
            ee2 = $(this).find('td:eq(2)').text();
            //console.log(name2,sum2,ee2);
            $("#inputEmail4").val(name2);
            $("#inputPassword6").val(sum2);
            $("#inputPassword8").val(ee2);
            //메뉴 금액 표시
            $('#tbl1 tr').each(function () {
                zz = $(this).find('td:eq(0)').text();
                xx = $('#inputEmail4').val();
                pp = $(this).find('td:eq(1)').text();
                if (zz == xx) {
                    $("#inputPassword9").val(pp);
                }
            })
            return false;
        })
        //주문삭제
        .on('click', '#delete', function () {
            tt=confirm('정말로 삭제 하시겠습니까?');
            if(tt==true){
                $('#tbl2 tr').each(function () {
                qqq = $("#inputEmail4").val();
                www = $(this).find('td:eq(0)').text();
                    if (qqq == www) {
                        $(this).find('td:eq(0)').text('');
                        $(this).find('td:eq(1)').text('');
                        $(this).find('td:eq(2)').text('');
                    }
                })
            }
            return false;
        })
        //매출현황 처리
        .on('click', '#good', function () {
            console.log(mt);
            for (i = 1; i <= mt; i++) {
                aaa = $("#tbl2 tr:eq(" + i + ")").find('td:eq(0)').text();
                bbb = $("#tbl2 tr:eq(" + i + ")").find('td:eq(1)').text();
                ccc = $("#tbl2 tr:eq(" + i + ")").find('td:eq(2)').text();
                ddd = $('#inputEmail42').val();
                $("#tbl3 tr:eq(" + i + ")").find('td:eq(0)').text(ddd);
                $("#tbl3 tr:eq(" + i + ")").find('td:eq(1)').text(aaa);
                $("#tbl3 tr:eq(" + i + ")").find('td:eq(2)').text(bbb);
                $("#tbl3 tr:eq(" + i + ")").find('td:eq(3)').text(ccc);
            }
        })
</script>
