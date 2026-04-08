 function addEmployee() {
    let name = document.getElementById("name").value;
    let basic = parseFloat(document.getElementById("basic").value);
    let hra = parseFloat(document.getElementById("hra").value);
    let da = parseFloat(document.getElementById("da").value);

    if (name === "" || isNaN(basic) || isNaN(hra) || isNaN(da)) {
      alert("Please fill all fields correctly");
      return;
    }

    let total = basic + hra + da;

    let row = `<tr>
      <td>${name}</td>
      <td>${basic}</td>
      <td>${hra}</td>
      <td>${da}</td>
      <td>${total}</td>
      <td><button class="delete-btn" onclick="deleteRow(this)">Delete</button></td>
    </tr>`;

    document.getElementById("tableBody").innerHTML += row;

    document.getElementById("name").value = "";
    document.getElementById("basic").value = "";
    document.getElementById("hra").value = "";
    document.getElementById("da").value = "";
  }

  function deleteRow(btn) {
    btn.parentElement.parentElement.remove();
  }