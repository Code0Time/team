
function Send() {
    $.ajax({
        type: "POST",
        url: "/home/savemail",
        contentType: false,
        processData: false,
        data: { mail:$("#mail").val() },
        success: function (data) {
            if (data == true) {
                Notification("ایمیل شما با موفقیت ثبت شد", "success")
            }
            else {
                Notification("مشکلی پیش امده لطفا دوباره سعی کنید", "Error")
            }
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert(xhr.status);
            alert(thrownError);
        }
    });
}