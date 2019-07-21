/*       get value textarea           */

function change_question() {
    var get_qs = document.getElementById("question_input").value;
    var get_as1 = document.getElementById("traloi1").value;
    var get_as2 = document.getElementById("traloi2").value;
    var get_as3 = document.getElementById("traloi3").value;
    var get_as4 = document.getElementById("traloi4").value;
    var get_index_as = document.getElementsByName("dapAn");
    var index_as = 0;
    for (var i = 0; i < get_index_as.length; i++) {
        if (get_index_as[i].checked == true) {
            index_as = i;
        }
    }

    // get so cau hoi da duoc add
    var get_no_question = document.getElementById("current_number_question");
    get_no_question.innerHTML = dem;

    // add vao section new question

    var dem_in = 0;

    var section_all = document.createElement("section");
    section_all.setAttribute("id", "section" + dem);

    var p = document.createElement("p");
    p.textContent = "Câu hỏi số: " + dem;
    p.style.color = "red";
    section_all.appendChild(p);

    var p = document.createElement("p");
    p.textContent = get_qs;
    p.setAttribute("id", "section" + dem + "_p" + dem_in);
    dem_in += 1;
    section_all.appendChild(p);

    var p = document.createElement("p");
    p.textContent = get_as1;
    p.setAttribute("id", "section" + dem + "_p" + dem_in);
    dem_in += 1;
    section_all.appendChild(p);

    var p = document.createElement("p");
    p.textContent = get_as2;
    p.setAttribute("id", "section" + dem + "_p" + dem_in);
    dem_in += 1;
    section_all.appendChild(p);

    var p = document.createElement("p");
    p.textContent = get_as3;
    p.setAttribute("id", "section" + dem + "_p" + dem_in);
    dem_in += 1;
    section_all.appendChild(p);

    var p = document.createElement("p");
    p.textContent = get_as4;
    p.setAttribute("id", "section" + dem + "_p" + dem_in);
    dem_in += 1;
    section_all.appendChild(p);

    var p = document.createElement("p");
    p.textContent = "id: " + index_as;
    p.setAttribute("id", "section" + dem + "_id" + dem_in)
    section_all.appendChild(p);
    document.getElementById("all_create").appendChild(section_all);
    dem += 1;

    // xoa du lieu cu

    document.getElementById("question_input").value = "";
    document.getElementById("traloi1").value = "";
    document.getElementById("traloi2").value = "";
    document.getElementById("traloi3").value = "";
    document.getElementById("traloi4").value = "";
    document.getElementById("dapAn1").checked = true;
}


// ham clear all
 function clear() {
    document.getElementById("question_input").value = "";
    document.getElementById("traloi1").value = "";
    document.getElementById("traloi2").value = "";
    document.getElementById("traloi3").value = "";
    document.getElementById("traloi4").value = "";
    document.getElementById("dapAn1").checked = true;     
 }

// ham delete neu lam sai

function func_delete() {
    var value_delete = prompt("Nhập câu cần xoá?");
    if (value_delete != null) {
        var temp = document.getElementById("section" + value_delete);
        var ask = confirm("Có chắc xoá chưa bạn!!");
        if (ask) {
            var temp_list_delete = document.createElement("p");
            temp_list_delete.setAttribute("id", "pdelete_" + li_delete);
            temp_list_delete.innerText = value_delete;
            document.getElementById("list_delete").appendChild(temp_list_delete);
            temp.remove();
            li_delete += 1;
        }
        else alert("Hành động này đã bị huỷ");
    }
}

//function cho duyet radio
function func_index_radio() {
    var get_index_as = document.getElementsByName("dapAn");
    var index_as = 0;
    for (var i = 0; i < get_index_as.length; i++) {
        if (get_index_as[i].checked == true) {
            index_as = i;
        }
    }
    return index_as;
}


//function cho thuoc tinh edit

function func_edit() {
    var temp_get_no_edit = prompt("Nhập vào câu muốn edit: ");
    if (temp_get_no_edit != null && temp_get_no_edit != ""){
        var number_qs_edit = Number(temp_get_no_edit);
        if (!(isNaN(number_qs_edit))){
            
            document.getElementById("btn_edit1").style.display = "block";
            
            bien_edit = number_qs_edit;
            
            //cau hoi
            var value_qs = document.getElementById("section" + number_qs_edit + "_p0");
            document.getElementById("question_input").value = value_qs.textContent;
        
            //tra loi
        
            var value_as1 = document.getElementById("section" + number_qs_edit + "_p1");
            document.getElementById("traloi1").value = value_as1.textContent;
        
            var value_as2 = document.getElementById("section" + number_qs_edit + "_p2");
            document.getElementById("traloi2").value = value_as2.textContent;
        
            var value_as3 = document.getElementById("section" + number_qs_edit + "_p3");
            document.getElementById("traloi3").value = value_as3.textContent;
        
            var value_as4 = document.getElementById("section" + number_qs_edit + "_p4");
            document.getElementById("traloi4").value = value_as4.textContent;
        
            var value_id = document.getElementById("section" + number_qs_edit + "_id5").textContent;
            var temp = value_id.slice(4, 5);
            if (temp == "0") {
                temp = "dapAn1";
            }
            else if (temp == "1") {
                temp = "dapAn2";
            }
            else if (temp == "2") {
                temp = "dapAn3";
            }
            else temp = "dapAn4";
            alert(temp);
            document.getElementById(temp).checked = true;       
        
        }
    }
}

function func_submit_edit() {
    if (confirm("Bạn xác nhận chỉnh sửa câu hỏi?")) {
        //cau hoi
        var value_qs = document.getElementById("section" + bien_edit + "_p0");
        value_qs.textContent = document.getElementById("question_input").value;

        //tra loi

        var value_as1 = document.getElementById("section" + bien_edit + "_p1");
        value_as1.textContent = document.getElementById("traloi1").value;

        var value_as2 = document.getElementById("section" + bien_edit + "_p2");
        value_as2.textContent = document.getElementById("traloi2").value;

        var value_as3 = document.getElementById("section" + bien_edit + "_p3");
        value_as3.textContent = document.getElementById("traloi3").value;

        var value_as4 = document.getElementById("section" + bien_edit + "_p4");
        value_as4.textContent = document.getElementById("traloi4").value;

        var value_as5 = document.getElementById("section" + bien_edit + "_id5");
        value_as5.textContent = "id: " + func_index_radio();

        document.getElementById("btn_edit1").style.display = "none";
        clear();
    }
}

// tao even cho cac buttom
document.getElementById("btn_add").addEventListener("click", change_question);
document.getElementById("btn_delete").addEventListener("click", func_delete);
document.getElementById("btn_edit").addEventListener("click", func_edit);
document.getElementById("btn_edit1").addEventListener("click", func_submit_edit);


//xu li ban dau

var dem = 0;

var what_do = confirm("Bạn mới làm hay đã làm rồi? (Bấm Cancel nếu bạn mới làm!)");
if (what_do == true) {
    do {
        var no_before = prompt("Số câu đã làm là: ");
        if (no_before != null) {
            dem = Number(no_before) + 1;
        }
        if (no_before == "") {
            dem = 0;
        }
    } while (no_before == null)

}

// list delete need adđ again

var li_delete = 0;

//tao gia tri cho edit
var bien_edit;