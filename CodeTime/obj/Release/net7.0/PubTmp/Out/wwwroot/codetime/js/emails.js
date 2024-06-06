$("#emails").on("submit",function(e){
     setLoading("#sendemail",true)
     e.preventDefault();
     $.ajax({
         data:{
             email:$("#email").val()
         },
         url:"/emails",
         type:"POST",
         error:function(){
     setLoading("#sendemail",false)
 
             Notification("Error")
         },
         success  :function() {
     setLoading("#sendemail",false)
 
     Notification("ایمیل شما با موفقیت ثبت شد","success")
         }
     })
 })