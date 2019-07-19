/*       get value textarea           */
var dem = 0;
function change_question() {
    var get_qs = document.getElementById("question_input").value;
    var get_as1 = document.getElementById("traloi1").value;
    var get_as2 = document.getElementById("traloi2").value;
    var get_as3 = document.getElementById("traloi3").value;
    var get_index_as = document.getElementsByName("dapAn");
    var index_as = 0;
    for (var i = 0; i < get_index_as.length; i++) {
        if (get_index_as[i].checked == true) {
            index_as = i;
        }
    }
    var dem_in = 0;

    var section_all = document.createElement("section");
    section_all.setAttribute("id","section"+dem);

    var p = document.createElement("p");
    p.textContent = "Câu hỏi số: " + dem;
    p.style.color = "red";
    section_all.appendChild(p);

    var p = document.createElement("p");
    p.textContent = get_qs;
    p.setAttribute("id", "section"+ dem + "_p" + dem_in);
    dem_in +=1;
    section_all.appendChild(p);

    var p = document.createElement("p");
    p.textContent = get_as1;
    p.setAttribute("id", "section"+ dem + "_p" + dem_in);
    dem_in +=1;
    section_all.appendChild(p);

    var p = document.createElement("p");
    p.textContent = get_as2;
    p.setAttribute("id", "section"+ dem + "_p" + dem_in);
    dem_in +=1;
    section_all.appendChild(p);

    var p = document.createElement("p");
    p.textContent = get_as3;
    p.setAttribute("id", "section"+ dem + "_p" + dem_in);
    dem_in +=1;
    section_all.appendChild(p);

    var p = document.createElement("p");
    p.textContent = "id: " + index_as;
    section_all.appendChild(p);
    document.getElementById("all_create").appendChild(section_all);
    dem +=1;
}

function func_delete(){
    var value_delete = prompt("Nhập câu cần xoá?");
    if (value_delete != null) {
        var temp = document.getElementById("section"+value_delete);
        var ask = confirm("Có chắc xoá chưa bạn!!");
        if (ask) {
            temp.remove();
        }
        else alert("Hành động này đã bị huỷ");
    }
}
document.getElementById("btn_add").addEventListener("click", change_question);
document.getElementById("btn_delete").addEventListener("click", func_delete);
/*check local storga */
// {
//     if (typeof(Storage) != undefined) {
//         alert("ok");
//     }
//     else{
//         alert("not ok");
//     }

// }
