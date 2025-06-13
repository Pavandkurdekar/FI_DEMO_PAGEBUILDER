import React, { useState, useEffect } from "react";
import { FilterMatchMode } from "primereact/api";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { PropagateLoader } from "react-spinners";
import Papa from "papaparse";
import * as XLSX from "xlsx";
import Swal from "sweetalert2";
import { Paginator } from "primereact/paginator";
import { useSelector, useDispatch } from "react-redux";
import { pincodeActions } from "../../store/pincodeSlice";
import { Checkbox } from "primereact/checkbox";
//import { InputText } from 'primereact/inputtext';

export default function PinCodes() {
  const dispatch = useDispatch();
  const {
    data: pincodes,
    nextToken,
    hasMore,
  } = useSelector((state) => state.pincodes);

  const [loading, setLoading] = useState(false);
  const [modalLoading, setModalLoading] = useState(false);
  const [importedData, setImportedData] = useState([]);
  const [showPreviewDialog, setShowPreviewDialog] = useState(false);
  const [selectedPincodes, setSelectedPincodes] = useState([]);
  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    area_name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    pincode: { value: null, matchMode: FilterMatchMode.EQUALS },
  });
  const [globalFilterValue, setGlobalFilterValue] = useState("");
  const [editDialogVisible, setEditDialogVisible] = useState(false);
  const [currentEditData, setCurrentEditData] = useState(null);
  const [pincodes1, setPincodes] = useState([]);

  // Add the following states
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(10); // Default rows per page

  useEffect(() => {
    fetchInitialPincodes();
  }, []);

  const fetchInitialPincodes = async () => {
    setLoading(true);
    try {
      const response = await fetch("/server/page_builder_function/pincode");
      const data = await response.json();

      if (data.success) {
        dispatch(
          pincodeActions.setPincodes({
            data: data.data || [],
            nextToken: data.pagination.next_token || null,
            hasMore: data.pagination.more_records || false,
          })
        );
      } else {
        Swal.fire("Info", "No pincodes found.", "info");
      }
    } catch (error) {
      Swal.fire("Error", "Error fetching pincodes.", "error");
    } finally {
      setLoading(false);
    }
  };

  const fetchMorePincodes = async () => {
    if (!hasMore || !nextToken) return;

    setLoading(true);
    try {
      const response = await fetch(
        `/server/page_builder_function/pincode?token=${nextToken}`
      );
      const data = await response.json();

      if (data.success) {
        dispatch(
          pincodeActions.addPincodes({
            data: data.data || [],
            nextToken: data.pagination.next_token || null,
            hasMore: data.pagination.more_records || false,
          })
        );
      } else {
        Swal.fire("Info", "No more pincodes to fetch.", "info");
      }
    } catch (error) {
      Swal.fire("Error", "Error fetching more pincodes.", "error");
    } finally {
      setLoading(false);
    }
  };

  const onPageChange = (event) => {
    const newPage = event.page;
    const lastPage = Math.ceil((pincodes.length + (hasMore ? 1 : 0)) / rows);

    setFirst(event.first);
    setRows(event.rows);

    if (newPage + 1 === lastPage) {
      fetchMorePincodes();
    }
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const fileExtension = file.name.split(".").pop().toLowerCase();
    if (fileExtension === "csv") {
      parseCSVFile(file);
    } else if (["xls", "xlsx"].includes(fileExtension)) {
      parseExcelFile(file);
    } else {
      Swal.fire("Error", "Please upload a valid CSV or Excel file.", "error");
    }
    // Reset file input to allow uploading the same file again
    event.target.value = null;
  };

  const parseCSVFile = (file) => {
    Papa.parse(file, {
      header: true,
      complete: (result) => {
        setImportedData(result.data.slice(0, 200));
        setShowPreviewDialog(true);
      },
      error: () => {
        Swal.fire("Error", "Error parsing CSV file.", "error");
      },
    });
  };

  const parseExcelFile = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const binaryStr = e.target.result;
      const workbook = XLSX.read(binaryStr, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(sheet);
      setImportedData(jsonData.slice(0, 200));
      setShowPreviewDialog(true);
    };
    reader.readAsBinaryString(file);
  };

  const validateImportedData = () => {
    const invalidRows = importedData.filter(
      (row) =>
        !row.area_name ||
        !row.pincode ||
        !row.city ||
        !row.state ||
        !row.country
    );
    if (invalidRows.length > 0) {
      Swal.fire(
        "Validation Error",
        "Please fill all fields in all rows before uploading.",
        "error"
      );
      return false;
    }
    return true;
  };

  const processImportedData = async () => {
    if (!validateImportedData()) return;

    setModalLoading(true);
    try {
      const response = await fetch("/server/page_builder_function/pincode", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(importedData),
      });
      if (response.ok) {
        Swal.fire("Success", "Data uploaded successfully!", "success");
        fetchInitialPincodes();
        setShowPreviewDialog(false);
      } else {
        Swal.fire("Error", "Failed to upload data.", "error");
      }
    } catch (error) {
      Swal.fire("Error", "Error uploading data.", "error");
    } finally {
      setModalLoading(false);
    }
  };

  const addRow = () => {
    setImportedData((prev) => [
      ...prev,
      { area_name: "", pincode: "", city: "", state: "", country: "" },
    ]);
  };

  const removeRow = (index) => {
    setImportedData((prev) => prev.filter((_, i) => i !== index));
  };

  const handleEdit = (rowData) => {
    setCurrentEditData(rowData);
    setEditDialogVisible(true);
  };

  const saveEditedPincode = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `/server/page_builder_function/pincode/${currentEditData.ROWID}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(currentEditData),
        }
      );
      if (response.ok) {
        Swal.fire("Success", "Pincode updated successfully!", "success");
        fetchInitialPincodes();
        setEditDialogVisible(false);
      } else {
        Swal.fire("Error", "Failed to update pincode.", "error");
      }
    } catch (error) {
      Swal.fire("Error", "Error updating pincode.", "error");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (selectedPincodes.length === 0) {
      Swal.fire("Warning", "No pincodes selected for deletion.", "warning");
      return;
    }

    //console.log("Selected Pincode Lenght", selectedPincodes);

    const batchSize = 200; // Process in batches
    const batches = [];
    for (let i = 0; i < selectedPincodes.length; i += batchSize) {
      batches.push(selectedPincodes.slice(i, i + batchSize));
    }

    Swal.fire({
      title: "Are you sure?",
      text: `You are about to delete ${selectedPincodes.length} pincodes.`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, Delete",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#d33",
    }).then(async (result) => {
      if (result.isConfirmed) {
        setLoading(true);

        let allDeleted = true;
        let RowidforRedux = [];
        // const rowIds = []
        for (const [index, batch] of batches.entries()) {
          try {
            const rowIds = batch.map((pincode) => pincode.ROWID);
            // console.log("ROWIDS = ", rowIds)
            RowidforRedux = rowIds;

            const response = await fetch(
              "/server/page_builder_function/pincode",
              {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ rowIds }),
              }
            );

            if (!response.ok) {
              Swal.fire("Error", `Error deleting batch ${index + 1}.`, "error");
              allDeleted = false;
              break;
            }

            // Remove deleted rows from the local state
            setPincodes((prev) =>
              prev.filter((pincode) => !rowIds.includes(pincode.ROWID))
            );
          } catch (error) {
            Swal.fire("Error", `Error deleting batch ${index + 1}.`, "error");
            allDeleted = false;
            break;
          }
        }

        if (allDeleted) {
          //  console.log("ROWIDS = ", RowidforRedux);

          dispatch(pincodeActions.deletePincodes(RowidforRedux));

          Swal.fire(
            "Success",
            `${selectedPincodes.length} pincodes deleted successfully!`,
            "success"
          );
          setSelectedPincodes([]); // Clear selection
        }

        setLoading(false);
      }
    });
  };

  const onGlobalFilterChange = (e) => {
    const value = e.target.value;
    setGlobalFilterValue(value);
    setFilters((prevFilters) => ({
      ...prevFilters,
      global: { value, matchMode: FilterMatchMode.CONTAINS },
    }));
  };

  const renderHeader = () => (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "10px",
      }}
    >
      {/* Import CSV/Excel Button */}
      <Button
        label="Import CSV/Excel"
        icon="pi pi-upload"
        className="p-button-primary"
        onClick={() => document.getElementById("file-input").click()}
        style={{ backgroundColor: "#ae275f", borderColor: "#ae275f" }}
      />
      <input
        type="file"
        accept=".csv, .xls, .xlsx"
        id="file-input"
        style={{ display: "none" }}
        onChange={handleFileUpload}
      />

      {/* Right-side flex container to align the search box and trash button */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px", // Add some space between the search box and trash button
        }}
      >
        {/* Search box */}
        <InputText
          value={globalFilterValue}
          onChange={onGlobalFilterChange}
          placeholder="Keyword Search"
        />

        {/* Trash Button (Visible only when something is selected) */}
        {selectedPincodes.length > 0 && (
          <Button
            icon="pi pi-trash"
            className="p-button-danger"
            onClick={handleDelete}
          />
        )}
      </div>
    </div>
  );

  const header = renderHeader();

  return (
    <div style={{ padding: "20px", position: "relative" }}>
      {loading && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(255, 255, 255, 0.7)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <PropagateLoader color="#3169be" size={15} />
        </div>
      )}

      {editDialogVisible && (
        <Dialog
          header="Edit Pincode"
          visible={editDialogVisible}
          style={{ width: "400px" }}
          modal
          onHide={() => setEditDialogVisible(false)}
          footer={
            <div>
              <Button
                label="Save"
                icon="pi pi-check"
                className="p-button-success"
                onClick={saveEditedPincode}
              />
              <Button
                label="Cancel"
                icon="pi pi-times"
                className="p-button-secondary"
                onClick={() => setEditDialogVisible(false)}
              />
            </div>
          }
        >
          <div className="p-fluid">
            <div className="p-field">
              <label htmlFor="area_name">Area Name</label>
              <InputText
                id="area_name"
                value={currentEditData?.area_name || ""}
                onChange={(e) =>
                  setCurrentEditData({
                    ...currentEditData,
                    area_name: e.target.value,
                  })
                }
              />
            </div>
            <div className="p-field">
              <label htmlFor="pincode">Pincode</label>
              <InputText
                id="pincode"
                value={currentEditData?.pincode || ""}
                onChange={(e) =>
                  setCurrentEditData({
                    ...currentEditData,
                    pincode: e.target.value,
                  })
                }
              />
            </div>
            <div className="p-field">
              <label htmlFor="city">City</label>
              <InputText
                id="city"
                value={currentEditData?.city || ""}
                onChange={(e) =>
                  setCurrentEditData({
                    ...currentEditData,
                    city: e.target.value,
                  })
                }
              />
            </div>
            <div className="p-field">
              <label htmlFor="state">State</label>
              <InputText
                id="state"
                value={currentEditData?.state || ""}
                onChange={(e) =>
                  setCurrentEditData({
                    ...currentEditData,
                    state: e.target.value,
                  })
                }
              />
            </div>
            <div className="p-field">
              <label htmlFor="country">Country</label>
              <InputText
                id="country"
                value={currentEditData?.country || ""}
                onChange={(e) =>
                  setCurrentEditData({
                    ...currentEditData,
                    country: e.target.value,
                  })
                }
              />
            </div>
          </div>
        </Dialog>
      )}

      {showPreviewDialog && (
        <Dialog
          header="Preview Imported Data"
          visible={showPreviewDialog}
          style={{ width: "70vw" }}
          modal
          onHide={() => setShowPreviewDialog(false)}
          footer={
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <Button
                  label="Upload Data"
                  icon="pi pi-check"
                  className="p-button-success"
                  onClick={processImportedData}
                  disabled={modalLoading}
                />
                <Button
                  label="Cancel"
                  icon="pi pi-times"
                  className="p-button-secondary"
                  onClick={() => setShowPreviewDialog(false)}
                  style={{ marginLeft: "10px" }}
                />
              </div>
            </div>
          }
        >
          {modalLoading ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "200px",
              }}
            >
              <PropagateLoader color="#AE275F" size={15} />
            </div>
          ) : (
            <DataTable
              value={importedData}
              paginator
              rows={5}
              editable
              dataKey="pincode"
            >
              <Column
                field="area_name"
                header="Area Name"
                editor={(options) => (
                  <InputText
                    value={options.value}
                    onChange={(e) =>
                      (options.rowData.area_name = e.target.value)
                    }
                  />
                )}
              />
              <Column
                field="pincode"
                header="Pincode"
                editor={(options) => (
                  <InputText
                    value={options.value}
                    onChange={(e) => (options.rowData.pincode = e.target.value)}
                  />
                )}
              />
              <Column
                field="city"
                header="City"
                editor={(options) => (
                  <InputText
                    value={options.value}
                    onChange={(e) => (options.rowData.city = e.target.value)}
                  />
                )}
              />
              <Column
                field="state"
                header="State"
                editor={(options) => (
                  <InputText
                    value={options.value}
                    onChange={(e) => (options.rowData.state = e.target.value)}
                  />
                )}
              />
              <Column
                field="country"
                header="Country"
                editor={(options) => (
                  <InputText
                    value={options.value}
                    onChange={(e) => (options.rowData.country = e.target.value)}
                  />
                )}
              />
              <Column
                body={(_, { rowIndex }) => (
                  <Button
                    icon="pi pi-trash"
                    className="p-button-danger p-button-sm"
                    onClick={() => removeRow(rowIndex)}
                  />
                )}
                header="Actions"
              />
            </DataTable>
          )}
        </Dialog>
      )}

      <DataTable
        value={pincodes.slice(first, first + rows)}
        rows={rows}
        dataKey="ROWID"
        filters={filters}
        filterDisplay="row"
        globalFilterFields={[
          "area_name",
          "pincode",
          "city",
          "state",
          "country",
        ]}
        header={header}
        emptyMessage="No Record found."
        style={{ opacity: loading ? 0.5 : 1 }}
        paginator={false}
      >
        <Column
          header={
            <Checkbox
              checked={selectedPincodes.length === pincodes.length}
              onChange={(e) => {
                if (e.checked) {
                  setSelectedPincodes([...pincodes]);
                } else {
                  setSelectedPincodes([]);
                }
              }}
            />
          }
          body={(rowData) => (
            <Checkbox
              checked={selectedPincodes.some((p) => p.ROWID === rowData.ROWID)}
              onChange={(e) => {
                const isChecked = e.checked;
                setSelectedPincodes((prev) => {
                  if (isChecked) {
                    return [...prev, rowData];
                  } else {
                    return prev.filter((p) => p.ROWID !== rowData.ROWID);
                  }
                });
              }}
            />
          )}
          style={{ width: "3rem" }}
        />

        {/* Keep the rest of your columns as they were */}
        <Column
          field="area_name"
          header="Area Name"
          style={{ minWidth: "12rem" }}
        />
        <Column field="pincode" header="Pincode" style={{ minWidth: "8rem" }} />
        <Column field="city" header="City" style={{ minWidth: "10rem" }} />
        <Column field="state" header="State" style={{ minWidth: "10rem" }} />
        <Column
          field="country"
          header="Country"
          style={{ minWidth: "10rem" }}
        />
        <Column
          body={(rowData) => (
            <Button
              icon="pi pi-pencil"
              className="p-button-outlined p-button-sm p-button-info"
              style={{ fontSize: "0.8rem" }}
              onClick={() => handleEdit(rowData)}
            />
          )}
          header="Actions"
        />
      </DataTable>
      <Paginator
        first={first}
        rows={rows}
        totalRecords={pincodes.length + (hasMore ? 1 : 0)}
        onPageChange={onPageChange}
        rowsPerPageOptions={[5, 10, 20, 50]}
        // template="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink"
        //rowsPerPageOptions={[5, 10, 20, 50]}
      />
    </div>
  );
}
