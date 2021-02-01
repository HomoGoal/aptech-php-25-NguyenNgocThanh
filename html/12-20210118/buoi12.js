var thanhThanh = {
    ten: "thanh",
    ho: "nguyenngoc",
    tuoi: 26,
    id: "123",
    fullname: function () {
        return this.ten + " " + this.ho;
    }
};
document.getElementById("chu").innerHTML = thanhThanh.fullname() + thanhThanh.ten + "hgrsojgoisfjdgorfjgierhighngliuhgliubdhblgidfhh gfi";

$(document).ready(function () {
    $("#bien").click(function () {
        $("p").hide();
    });
    $("#hien").click(function () {
        $("p").show();
    });
    $("#dau").click(function () {
        $("p").hide(500);
    });
    $("#ralai").click(function () {
        $("p").toggle();
    });
    $("#fadeIn").click(function () {
        $("p").fadeIn();
    });
    $("#fadeOut").click(function () {
        $("p").fadeOut();
    });
    $("#fadeToggle").click(function () {
        $("#hop").fadeToggle();
    })
    $("#fadeTo").click(function () {
        $("#hop").fadeTo("", 0.5);
    });
    $("#slideUp").click(function () {
        $("p").slideUp();
        $("#hop").slideUp();
    });
    $("#slideDown").click(function () {
        $("p").slideDown();
        $("#hop").slideDown();
    });
    $("#bienMot").click(function () {
        $("#hop").animate({
            left: '250px'
        });
    });
    $("#bienHai").click(function () {
        $("#hop").animate({
            left: '250px',
            width: '150px',
            height: '150px'
        });
    });
    $("#bienBa").click(function () {
        $("#hop").animate({
            left: '250px',
            width: '+=150px',
            height: '+=150px'
        });
    });
    $("#fadeOut").click(function () {
        $("p").fadeOut();
    });
    $("#tat").click(function () {
        var a = $("#anh").attr("src");
        console.log(a);
        if (a ==  "https://www.w3schools.com/js/pic_bulbon.gif") {
            console.log('on');
            $("#anh").attr("src", "https://www.w3schools.com/js/pic_bulboff.gif");
        } else {
            console.log('off');
            $("#anh").attr("src", "https://www.w3schools.com/js/pic_bulbon.gif");
        }
    });
});