$("#validateUser").click( function() {
    var email = $('#email').val();
    console.log($("#validateUser"));

    // check contain 'Poly'
    console.log(email.split());
    var emailArray = email.includes("poly");
    console.log(emailArray);

    // check format email
    let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let isEmail = pattern.test(email);

    let icon = $(".box-error").append(`
        <ion-icon name="warning-outline" class="icon-warn"></ion-icon><span id="errMsg"></span>
    `);
    
    // validate form
    if (email == "") { 
        $('#errMsg').text("Bạn không được để trống!");
        return false;
    } 
    else if (email.length < 4) {
        $('#errMsg').text("Bạn không được nhập ít hơn 4 ký tự!");
        return false;
    } 
    else if (email.length > 30) {
        $('#errMsg').text("Bạn không được nhập lớn hơn 30 ký tự!");
        return false;
    } 
    else if (emailArray == false) {
        $('#errMsg').text("Tên đăng nhập phải chứa ký tự 'poly'");
        return false;
    } 
    else if (isEmail == false) {
        $('#errMsg').text("Bạn nhập email không đúng định dạng");
    } else {
        var myEmail = $("#myEmail").css("display","flex");
        var boxForm = $("#boxForm").css("display","none");
        myEmail.html(`<h1>${email}</h1><div class="box-checkmark-email"><ion-icon class="checkmark-email" name="checkmark-outline"></ion-icon></div>`)
    }
})  

// add icon warning
var isErrMsg = $('#errMsg').val('123');
console.log(`isErrMsg = ${isErrMsg}`);
if (isErrMsg === '123') {
    let icon = $(".box-error").append(`
    <ion-icon name="warning-outline"></ion-icon><span style="color: red;" id="errMsg"></span>
    `);

}
