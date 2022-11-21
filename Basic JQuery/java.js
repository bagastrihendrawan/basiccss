$(document).ready(function (){
    $("#btnAlert").click(function (){
        event.preventDefault();
        $("#divAlert").removeClass("d-none");
        window.scrollTo(0, 0);
        const nama = $("#inputNama").val();
        $("#alertText").html("Terima kasih!" + " " + nama + "," + " " + "Link sudah dapat dilihat di Email anda.");
    });

    $("#btnClose").click(function (){
        $("#divAlert").addClass("d-none");
    });

    $("buttonClose").click(function(){
        $("#alert").addClass("d-none");
    })
    
    $("#cangkir").click(function(){
        window.scrollTo(0, 0);
        const bangku = $("#cangkir").attr("src");
        $("#bangku").attr("src",bangku);
        $("#bangku").css("widht", "450px");
    })
    $("#saman").click(function(){
        window.scrollTo(0, 0);
        const saman = $("#saman").attr("src");
        $("#bangku").attr("src",saman);
        $("#bangku").css("widht", "450px");
    })
    $("#lino").click(function(){
        window.scrollTo(0, 0);
        const lino = $("#lino").attr("src");
        $("#bangku").attr("src",lino);
        $("#bangku").css("widht", "450px");
    })
    $("#syail").click(function(){
        window.scrollTo(0, 0);
        const syail = $("#syail").attr("src");
        $("#bangku").attr("src",syail);
        $("#bangku").css("widht", "450px");
    })

   $("#supmit").click(function(e){
    e.preventDefault();
    // console.log("sdsd")
    $("#alert").removeClass("d-none");
    $("#formid").addClass("d-none");
    const jeneng = $("#firstname").val();
    const last = $("#lastname").val();
    // const mail = $("#email").val();

    $("#alerttextt").html("Terima Kasih" + " " + jeneng + " " + last + " " + "Telah order di web kami.");
    $("#kedua").html( mail );
    


   })

});




