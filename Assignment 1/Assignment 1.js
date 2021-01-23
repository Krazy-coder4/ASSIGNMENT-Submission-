                                                                            

    alert(' Here Is My Assignment! - Dev ')               // QUESTION 1
    
    console.log(1 +  "2" + "2");      //  This will output:  "122" 
   
    // The code outputs the text "122" to the console, demonstrating a concatenation of two strings and an integer.

    console.log(1 + +"2" + "2");          //  This will output:  "32"
 
   // The code outputs the text "32" to the console, + operand in front of a string converts it to number. So here +"2" will become 2 and then 1 + 2 which will be 3, and concatenates with "2" to give "32"

    console.log(1 +  -"1" + "2");          //  This will output:  "02"
 
   // The code outputs the text "02" to the console, - operand in front of a string converts it to number. So here -"1" will become -1 and then 1 - 1 which will be 0, and concatenates with "2" to give "02"

    console.log(+"1" +  "1" + "2");          //  This will output:  "112"
 
   // The code outputs the text "112" to the console, demonstrating a concatenation of three strings.

    console.log( "A" - "B" + "2");          //  This will output:  "NaN2"
  
   // The output will be "NaN2" as in JavaScript if you are trying to use any operator ecxept "+" on string, it will display "NaN" . So "A"-"B" will be "NaN" and concatenate (+) 2 will produce "NaN2".
 
    console.log( "A" - "B" + 2);          //  This will output:  NaN
			
   // The output will be "NaN" as in JavaScript if you are trying to use any operator ecxept "+" on string, it will display "NaN". So "A"-"B" will be "NaN" and will not concatenate 2.



	var marks=95;

	if(marks>90)
	{
	    console.log("AA");
	}
	else if(marks>80 && marks<=90)
	{
	    console.log("AB");
	}
	else if(marks>70 && marks<=80)
	{
	    console.log("BB");
	}
	else if(marks>60 && marks<=70)
	{
	    console.log("BC");
	}
	else if(marks>50 && marks<=60)
	{
	    console.log("CC");
	}
	else if(marks>40 && marks<=50)
	{
	    console.log("CD");
	}
	else if(marks>30 && marks<=40)
	{
	    console.log("DD");
	}
	else
	{
	    console.log("FF");
	}



