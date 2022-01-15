<html>
    <head>
        <script language="javascript">
            //document.domain = "localhost:3000";
            function goPopup(){
            var pop = window.open("/popup/jusoPopup.jsp","pop","width=570,height=420, scrollbars=yes, resizable=yes");
            }
            function jusoCallBack(roadFullAddr,roadAddrPart1,addrDetail,roadAddrPart2,engAddr, jibunAddr, zipNo, rnMgtSn, detBdNmList, bdNm){
            document.form.roadFullAddr.value = roadFullAddr; document.form.roadAddrPart1.value = roadAddrPart1; document.form.roadAddrPart2.value = roadAddrPart2; documentform.addrDetail.value = addrDetail; document.form.zipNo.value = zipNo;
            }
        </script>
    </head>
    <body>
        <form name="form" id="form" method="post">
            <input type="button" onClick="goPopup();" value="팝업"/>도로명주소 전체(포맷)
            <input type="text" id="roadFullAddr" name="roadFullAddr" />
            <br> 도로명주소<input type="text" id="roadAddrPart1" name="roadAddrPart1" />
            <br> 고객입력 상세주소<input type="text" id="addrDetail" name="addrDetail" />
            <br> 참고주소<input type="text" id="roadAddrPart2" name="roadAddrPart2" />
            <br> 우편번호<input type="text" id="zipNo" name="zipNo" />
        </form>
    </body>
</html>