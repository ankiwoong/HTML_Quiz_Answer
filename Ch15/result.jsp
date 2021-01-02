<%@ page contentType="text/plain; charset=utf-8" trimDirectiveWhitespaces="true" %>
<%@ page pageEncoding="utf-8" %>

<%
 request.setCharacterEncoding("utf-8");
 String name = request.getParameter("name");
 
 out.print("텍스트 박스 안의 값은 " + name + " 입니다.");
%