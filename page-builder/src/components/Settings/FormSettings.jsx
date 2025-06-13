import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Toast } from 'primereact/toast';
import { Switch } from 'antd';
import { Modal } from 'antd';
import axios from 'axios';
import { PropagateLoader } from 'react-spinners';

const Settings = () => {
  const [pages, setPages] = useState([]);
  const [metadataMap, setMetadataMap] = useState({});
  const [toggleStatuses, setToggleStatuses] = useState({});
  const [captchaStatuses, setCaptchaStatuses] = useState({});
  const [loading, setLoading] = useState(true);
  const [globalFilter, setGlobalFilter] = useState(null);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [currentToggle, setCurrentToggle] = useState({ pageId: null, checked: false });
  const toast = React.useRef(null);

  const fetchPageMetadata = async (rowId) => {
    try {
      //console.log(`Fetching fresh metadata for page ID: ${rowId}`);
      const response = await axios.get(`/server/page_builder_function/metadata/${rowId}`);
      const fetchedData = response.data.data[0]?.stepformdata;
      if (fetchedData) {
        //console.log(`Fetched metadata for page ID: ${rowId}`, JSON.parse(fetchedData));
        return JSON.parse(fetchedData);
      }
      return [];
    } catch (error) {
      console.error("Error fetching metadata:", error);
    }
    return [];
  };

  useEffect(() => {
    const fetchPages = async () => {
      setLoading(true);
      try {
        //console.log("Fetching all published pages...");
        const response = await axios.get('/server/page_builder_function/pages');
        if (response.data.success) {
          const publishedPages = response.data.data.filter(page => page.Status === 'Published');
          const metadataPromises = publishedPages.map(page => fetchPageMetadata(page.ROWID));
          const metadataResults = await Promise.all(metadataPromises);

          setPages(publishedPages);

          const metadataMap = publishedPages.reduce((acc, page, index) => {
            acc[page.ROWID] = metadataResults[index];
            return acc;
          }, {});
          setMetadataMap(metadataMap);

          const initialStatuses = metadataResults.reduce((acc, metadata, index) => {
            const otpField = metadata.find(field => field.otpValidation !== undefined);
            if (otpField) {
              acc[publishedPages[index].ROWID] = otpField.otpValidation === 'yes';
            }
            return acc;
          }, {});
          setToggleStatuses(initialStatuses);

          const initialCaptchaStatuses = metadataResults.reduce((acc, metadata, index) => {
            const captchaField = metadata.find(field => field.captchaValidation !== undefined);
            if (captchaField) {
              acc[publishedPages[index].ROWID] = captchaField.captchaValidation === 'yes';
            }
            return acc;
          }, {});
          setCaptchaStatuses(initialCaptchaStatuses);

          //console.log("Fetched and set initial page data.");
        }
      } catch (error) {
        console.error("Error fetching pages data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPages();
  }, []);

  const showNotification = (status, pageName, noStepForm = false) => {
    if (toast.current) {
      toast.current.show({
        severity: 'info',
        summary: noStepForm ? 'No Step Form' : 'Validation Updated',
        detail: noStepForm
          ? `There is no step form in this page (${pageName}).`
          : `Validation set to ${status ? 'enabled' : 'disabled'} for ${pageName}.`,
        life: 3000,
      });
    }
  };

  const updateValidation = async (pageId, checked, validationType) => {
    setConfirmLoading(true);
    try {
      //console.log(`Fetching fresh metadata for update on ${validationType}...`);
      const metadata = await fetchPageMetadata(pageId);
      const selectedPage = pages.find(page => page.ROWID === pageId);

      //console.log(`Before ${validationType} validation update - Metadata:`, JSON.stringify(metadata));

      if (metadata.length === 0 || !metadata.some(field => field[validationType] !== undefined)) {
        showNotification(checked, selectedPage.PageName, true);
        return;
      }

      const updatedMetadata = metadata.map(field => ({
        ...field,
        [validationType]: field[validationType] ? (checked ? 'yes' : 'no') : field[validationType]
      }));

      //console.log(`After ${validationType} validation update - Metadata:`, JSON.stringify(updatedMetadata));

      await axios.put(`/server/page_builder_function/update/page/${pageId}`, {
        stepformdata: JSON.stringify(updatedMetadata)
      });

      showNotification(checked, selectedPage.PageName);

      if (validationType === 'otpValidation') {
        setToggleStatuses(prev => ({ ...prev, [pageId]: checked }));
      } else if (validationType === 'captchaValidation') {
        setCaptchaStatuses(prev => ({ ...prev, [pageId]: checked }));
      }
    } catch (error) {
      console.error(`Error updating ${validationType} validation status:`, error);
    } finally {
      setConfirmLoading(false);
    }
  };

  const handleToggleChange = (pageId, checked) => {
    setCurrentToggle({ pageId, checked });
    Modal.confirm({
      title: 'Are you sure?',
      content: `Are you sure you want to set OTP validation to ${checked ? 'enabled' : 'disabled'} for this page?`,
      okText: 'Yes',
      cancelText: 'No',
      onOk: () => updateValidation(pageId, checked, 'otpValidation'),
      onCancel: () => {
        setToggleStatuses(prev => ({ ...prev, [pageId]: !checked }));
      },
    });
  };

  const handleCaptchaToggle = (pageId, checked) => {
    setCurrentToggle({ pageId, checked });
    Modal.confirm({
      title: 'Are you sure?',
      content: `Are you sure you want to set Captcha validation to ${checked ? 'enabled' : 'disabled'} for this page?`,
      okText: 'Yes',
      cancelText: 'No',
      onOk: () => updateValidation(pageId, checked, 'captchaValidation'),
      onCancel: () => {
        setCaptchaStatuses(prev => ({ ...prev, [pageId]: !checked }));
      },
    });
  };

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <PropagateLoader color="#3169BE" size={15} />
      </div>
    );
  }

  return (
    <div>
      <Toast ref={toast} />
     {/* ✅ Top Bar: Heading on Left, Search on Right */}
<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
  <h2 style={{ margin: 0, color: "#333" }}>
    Form Settings
  </h2>
  <div className="p-inputgroup" style={{ width: "250px" }}>
    <InputText
      placeholder="Search by Page Name or Created By"
      onInput={(e) => setGlobalFilter(e.target.value)}
    />
  </div>
</div>

      <DataTable
        value={pages}
        paginator
        rows={10}
        globalFilter={globalFilter}
        responsiveLayout="scroll"
        dataKey="ROWID"
      >
        <Column field="PageName" header="Page Name" sortable />
        <Column field="CreatedBy" header="Created By" sortable />
        <Column field="CREATEDTIME" header="Created Time" sortable />
        <Column
          header="OTP Validation"
          body={(rowData) => {
            const metadata = metadataMap[rowData.ROWID];
            const otpFieldExists = metadata?.some(field => field.otpValidation !== undefined);
            console.log("Metadata = ", metadata)
            if (!otpFieldExists) {
              console.log(`Page ID: ${rowData.ROWID} (${rowData.PageName}) - OTP Validation Not Applicable`);
          }

            return otpFieldExists ? (
              <Switch
                checked={toggleStatuses[rowData.ROWID]}
                onChange={(checked) => handleToggleChange(rowData.ROWID, checked)}
                loading={confirmLoading && currentToggle.pageId === rowData.ROWID}
              />
            ) : (
              <span style={{fontSize:"12px"}} className="text-red-500">Not Applicable</span>
            );
          }}
        />
        <Column
          header="Captcha Validation"
          body={(rowData) => {
            const metadata = metadataMap[rowData.ROWID];
            const captchaFieldExists = metadata?.some(field => field.captchaValidation !== undefined);

            return captchaFieldExists ? (
              <Switch
                checked={captchaStatuses[rowData.ROWID]}
                onChange={(checked) => handleCaptchaToggle(rowData.ROWID, checked)}
                loading={confirmLoading && currentToggle.pageId === rowData.ROWID}
              />
            ) : (
              <span className="text-red-500">Not Applicable</span>
            );
          }}
        />
      </DataTable>
    </div>
  );
};

export default Settings;
