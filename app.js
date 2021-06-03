
alert('welcome to student site')

var x = prompt("“What star rating would you give, 1-5?")

while (true){
if (x <1 )
{
  alert('you enter a un accepted value') 
   var x = prompt ('renter star rating you would to give ,1-5') 
 document.write('<img src="https://www.open.edu/openlearn/sites/www.open.edu.openlearn/files/ole_images/become_a_student_inline.jpg" height="100px" width= "100px" />')
}
else if (x <= 5 )
{
document.write('<img src="https://www.open.edu/openlearn/sites/www.open.edu.openlearn/files/ole_images/become_a_student_inline.jpg" height="100px" width= "100px" />')
break ;
}



  else if (x >5 ){ 
     alert('you enter a un accepted value') 
  x = prompt ('renter star rating you would to give ,1-5')

document.write('<img src="https://www.open.edu/openlearn/sites/www.open.edu.openlearn/files/ole_images/become_a_student_inline.jpg" height="100px" width= "100px" />')

  } 


}



alert('thank you to visit')
