function openCity(evt, cityName) {
     // Declare all variables
     var i, tabcontent, tablinks;
   
     // Get all elements with class="tabcontent" and hide them
     tabcontent = document.getElementsByClassName("tabcontent");
     for (i = 0; i < tabcontent.length; i++) {
       tabcontent[i].style.display = "none";
     }
   
     // Get all elements with class="tablinks" and remove the class "active"
     tablinks = document.getElementsByClassName("tablinks");
     for (i = 0; i < tablinks.length; i++) {
       tablinks[i].className = tablinks[i].className.replace("active", "");
     }
   
     // Show the current tab, and add an "active" class to the link that opened the tab
     document.getElementById(cityName).style.display = "block" ;
     evt.currentTarget.className += " active";
   }
   
   var x, i, j, l, ll, selElmnt, a, b, c;
   /*look for any elements with the class "custom-select":*/
   x = document.getElementsByClassName("custom-select");
   l = x.length;
   for (i = 0; i < l; i++) {
   selElmnt = x[i].getElementsByTagName("select")[0];
   ll = selElmnt.length;
   /*for each element, create a new DIV that will act as the selected item:*/
   a = document.createElement("DIV");
   a.setAttribute("class", "select-selected");
   a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
   x[i].appendChild(a);
   /*for each element, create a new DIV that will contain the option list:*/
   b = document.createElement("DIV");
   b.setAttribute("class", "select-items select-hide");
   for (j = 1; j < ll; j++) {
     /*for each option in the original select element,
     create a new DIV that will act as an option item:*/
     c = document.createElement("DIV");
     c.innerHTML = selElmnt.options[j].innerHTML;
     c.addEventListener("click", function(e) {
         /*when an item is clicked, update the original select box,
         and the selected item:*/
         var y, i, k, s, h, sl, yl;
         s = this.parentNode.parentNode.getElementsByTagName("select")[0];
         sl = s.length;
         h = this.parentNode.previousSibling;
         for (i = 0; i < sl; i++) {
           if (s.options[i].innerHTML == this.innerHTML) {
             s.selectedIndex = i;
             h.innerHTML = this.innerHTML;
             y = this.parentNode.getElementsByClassName("same-as-selected");
             yl = y.length;
             for (k = 0; k < yl; k++) {
               y[k].removeAttribute("class");
             }
             this.setAttribute("class", "same-as-selected");
             break;
           }
         }
         h.click();
     });
     b.appendChild(c);
   }
   x[i].appendChild(b);
   a.addEventListener("click", function(e) {
       /*when the select box is clicked, close any other select boxes,
       and open/close the current select box:*/
       e.stopPropagation();
       closeAllSelect(this);
       this.nextSibling.classList.toggle("select-hide");
       this.classList.toggle("select-arrow-active");
     });
   }
   function closeAllSelect(elmnt) {
   /*a function that will close all select boxes in the document,
   except the current select box:*/
   var x, y, i, xl, yl, arrNo = [];
   x = document.getElementsByClassName("select-items");
   y = document.getElementsByClassName("select-selected");
   xl = x.length;
   yl = y.length;
   for (i = 0; i < yl; i++) {
     if (elmnt == y[i]) {
       arrNo.push(i)
     } else {
       y[i].classList.remove("select-arrow-active");
     }
   }
   for (i = 0; i < xl; i++) {
     if (arrNo.indexOf(i)) {
       x[i].classList.add("select-hide");
     }
   }
   }
   /*if the user clicks anywhere outside the select box,
   then close all select boxes:*/
   document.addEventListener("click", closeAllSelect);
   
   $(document).ready(function() {
   var isMenuOpened = false ;
   $(".menu-icon").click(function(){
       if (isMenuOpened) { 
           // close it
            $(".menu-icon").removeClass ("active"); 
            $("body").removeClass("open-menu");
       }
       else { 
           // open it
           $(".menu-icon").addClass ("active"); 
           $("body").addClass("open-menu");
       }
       isMenuOpened = ! isMenuOpened;
   });
   });
   
   $(document).ready(function() {
   $(".sliderbox").owlCarousel({
     'items': 1,
     'rtl': true,
   
   });
   });
   
   
   
   
   let LastChildren = {}
   function setLoading(id,state){
    if (! state){
     $(id).html(`${LastChildren[id]}`)
     $(id).removeAttr("disbaled")
    }else {
     LastChildren[id] = $(id).html()
     $(id).html(`<img src='/images/loading.svg'/>`)
     $(id).attr("disbaled","ads")
   
    }
    return true
   }
   
   let NumberID = 0
   
   function Notification(msg,type,time){
     type=type||"error"
     time=time||5000
     let Icon = '<i class="fa-regular fa-badge-check"></i>';
     NumberID++
     let Alertid = NumberID
     if (type=='error'){
       Icon='<i class="fa-regular fa-circle-exclamation"></i>'
     }
     $("#alertList").append(`
     <div id='alert_${Alertid}' class="alert_notification type_${type}">
     ${Icon}
     <p>${msg}</p>
   </div>`)
   anime({
     targets: `#alert_${Alertid}`,
     margin: "5px 10px",
     duration: 750,
     easing: 'spring(1, 70, 100, 10)',
   })
   setTimeout(() => {
     anime({
       targets: `#alert_${Alertid}`,
       margin: "20px 10px",
       duration: 750,
       easing: 'spring(1, 70, 100, 10)',
     })
     setTimeout(() => {
       $(`#alert_${Alertid}`).fadeOut().daly("slow")
     }, 100);
   }, time);
   }