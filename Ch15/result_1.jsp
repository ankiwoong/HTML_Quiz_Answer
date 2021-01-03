<%@ page contentType="text/plain; charset=utf-8" trimDirectiveWhitespaces="true" %>
    <%@ page pageEncoding="utf-8" %>

        <% String a="0" ; String b="0" ; int result=0; String calc; calc=request.getParameter("calc"); if( calc !="" ) {
            a=request.getParameter("a"); b=request.getParameter("b"); switch ( Integer.parseInt(calc) ){ case 1 :
            result=Integer.parseInt(a) + Integer.parseInt(b); break; case 2 : result=Integer.parseInt(a) *
            Integer.parseInt(b); break; case 3 : result=Integer.parseInt(a) / Integer.parseInt(b); break; } }
            out.print("연산의 결과는 " + result +" 입니다."); %>