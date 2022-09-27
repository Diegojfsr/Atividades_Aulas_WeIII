var bthd = document.querySelector("#hd2");
bthd.addEventListener("click", function(){
    var spanhd = document.querySelector("#hd");
    spanhd.innerHTML = '<br><br><label>HD</label><br><label>';
    spanhd.innerHTML += '<input type="radio" name="hd" value="1tb" class="hd">HD 1TB</label><br>';
    spanhd.innerHTML += '<label><input type="radio" name="hd" value="480gb" class="hd">';
    spanhd.innerHTML += 'HD SSD 480GB</label><br>';
    this.setAttribute("disabled", "true");
});