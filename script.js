//--------------------------
var debug = false;
console.log("To read debuging notes set debug to true in the console");
//--------------------------

var changed = false;
var alltext = [];
var rows = [];

const date = new Date();
let monthnum = date.getMonth() + 1; //month is off by 1 for some reason this fixes it
let day = date.getDate();
let year = date.getFullYear();
var dobject = year + "-" + monthnum + "-" + (day + 1);
const realdate = new Date(dobject);


var monthfull = realdate.toLocaleString('default', { month: 'long' });

if(debug){console.log(monthfull)};

var fullnum = monthnum + "/" + day;
var fullname = monthfull + " " + day;

var pdffilename = 'daily' + monthnum + "_" + day + ".pdf";
pdffilename = String(pdffilename);

$("#curdate").text(fullnum);

$("#dholder").on('click', function(e) {
    if(debug){console.log("Clicked!!!")};
    if (changed == false) {
        $("#curdate").text(fullname);
        changed = true
    } else {
        $("#curdate").text(fullnum);
        changed = false
    }
    
});

window.addEventListener('click', (event) => {
  if(debug){console.log(event.button)}
  $("#butholder").show()
});



$(document).ready(function () {
    $("#btnSubmit").click(function () {
        $("#butholder").hide()
        const element = document.getElementById('content');
        var opt = {
            filename:     pdffilename,
            image:        { type: 'jpeg', quality: 0.98 },
            jsPDF: {
                unit: 'in',
                format: 'a4',
                orientation: 'landscape'
            }
        };
          
				// Choose the element and save the PDF for your user.
        html2pdf().set(opt).from(element).save();
    });
});


$("#multilineinput").on('keyup', function (e) {
    $("#detailsfield").val($(this).text()); //store content to input[type=hidden]
});

$(".topin").on('click', function(e) {
    let temp = $(this).val();
    if(debug){console.log(temp)}
    $(this).val("")
});