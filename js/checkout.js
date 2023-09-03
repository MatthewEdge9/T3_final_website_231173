$(document).ready(function() {
    $("#remove-all-button").click(function() {
      $("#purchase-table").empty();
    });
  
    $("#purchase-button").click(function() {
      $("#success-message").show();
    });
  
    function removeRow() {
      $(this).closest("tr").remove();
    }
  
    $("#purchase-table").on("click", ".remove-button", removeRow);
  
    function addRow(data) {
      for (var i = 0; i < data.length; i++) {
        var tripCode = data[i].tripCode;
        var quantity = data[i].quantity;
        var totalCost = data[i].totalCost;
  
        var newRow = `
          <tr>
            <td>${tripCode}</td>
            <td>${quantity}</td>
            <td>${totalCost}</td>
            <td><button class="remove-button">Remove</button></td>
          </tr>
        `;
        $("#purchase-table").append(newRow);
      }
    }
  
    // Example usage with local data
    var localData = [
      { tripCode: "TDC", quantity: 2, totalCost: "$40000" },
      { tripCode: "CRV", quantity: 1, totalCost: "$15000" }
    ];
  
    addRow(localData)
  });