<%@ page contentType="text/html; charset=utf-8" language="java" %>
    <!DOCTYPE html>
    <html lang="kr">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>JSP Quiz 3</title>
    </head>

    <body>
        <% String[] array={"사과","포도","오렌지","감"}; %>

            <% int i=0; for(i=0; i<array.length; i++) { out.print("배열 요소: " + array[i] + " <br />");
            }
            %>
    </body>

    </html>