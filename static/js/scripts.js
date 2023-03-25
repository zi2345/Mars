$(document).ready(function () {
    show_order();
});
function show_order() {
  $.ajax({
    type: "GET",
    url: "/mars",
    data: {},
    success: function (response) {
      $("#order-box").empty();
      let rows = response["orders"];
      for (let i = 0; i < rows.length; i++) {
        let name = rows[i]["name"];
        let address = rows[i]["address"];
        let size = rows[i]["size"];
        let temp_html = `
          <tr>
              <td>${name}</td>
              <td>${address}</td>
              <td>${size}</td>
          </tr>
                  `;
        $("#order-box").append(temp_html);
      }
    },
  });
}
function save_order() {
  let name = $("#name").val();
  let address = $("#address").val();
  let size = $("#size").val();
  $.ajax({
    type: "POST",
    url: "/mars",
    data: {
      name_give: name,
      address_give: address,
      size_give: size,
    },
    success: function (response) {
      alert(response["msg"]);
      window.location.reload();
    },
  });
}