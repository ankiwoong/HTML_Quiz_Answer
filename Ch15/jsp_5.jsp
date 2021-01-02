<!DOCTYPE html>
<html lang="kr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JSP Quiz 4</title>
    <style>
        div {
            background-color: yellow;
            margin: 5px;
        }
    </style>
</head>

<body>
    <% for (int i=1; i<=10; i++) { out.print("<div>");

        int a = 0;

        for (int j=1; j<=i; j++) { if (j !=1){ out.print(" + ");
       };
		 out.print(j + " * " + j + "");
       a += j * j;
       
      };
      out.print("=" + a);
      out.print(" </div>");
            }
            %>
</body>

</html>