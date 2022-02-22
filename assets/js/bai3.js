$(document).ready(function(){
    $("button").click(function(){
    
      let ip = $("input[name=studentName]").val().trim().length;
      if( ip == 0) {
          $("#errMsg").text("Bạn không được để trống !");
      }
      else if(ip > 30) {
          $("#errMsg").text(" Bạn không được nhập dài hơn 30 ký tự");
      }
      else {
          $("#errMsg").text("");
          $("ul").append(`<li>${$("input[name=studentName]").val().trim()}</li>`);
          $("input[name=studentName]").val("");
          let ulListStudents = $(".list-students").css("border","solid 1px #ccc");
      }
      
    });
});