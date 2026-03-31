

let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
letqrText = document.getElementById("qrText");



function generateQR(){
    qrImage.src = "https://quickchart.io/qr?text=abc123&caption=TextBelowQr&captionFontFamily=mono&captionFontSize=20" + qrText.value;

}