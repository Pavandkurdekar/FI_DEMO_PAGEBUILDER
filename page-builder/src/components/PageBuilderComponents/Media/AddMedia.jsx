import { useRef, useState } from "react";
import axios from "axios";
import { Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import uploadimage from "../../../../src/fileuploadimage.png";
import { ToastContainer } from "react-toastify";
import AllMedia from "./AllMedia";
import { DeleteOutlined } from "@ant-design/icons";
import { Drawer } from "antd";

const AddMedia = () => {
  const [file, setFile] = useState(null);
  const [refreshKey, setRefreshKey] = useState(0);
  const [drawerVisible, setDrawerVisible] = useState(false);

  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef(null);
  const [mediaPreview, setMediaPreview] = useState(null);
  const [data, setData] = useState({});
  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    if (!uploadedFile) return;

    const isVideo = uploadedFile.type.includes("video");
    const isImage = uploadedFile.type.includes("image");

    if (!isImage && !isVideo) {
      toast.error("Only images or videos are allowed!");
      return;
    }

    setFile(uploadedFile);

    // Generate preview for the uploaded media
    const previewURL = URL.createObjectURL(uploadedFile);
    setMediaPreview(previewURL);

    // Log file details to the console
    console.log("Selected file:", uploadedFile.name, uploadedFile);
  };

  const handleSave = async () => {
    if (!file) {
      toast.error("No file selected.");
      return;
    }

    // Only allow image and video files
    if (!file.type.startsWith("image/") && !file.type.startsWith("video/")) {
      toast.error("Only image or video files are allowed!");
      return;
    }

    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await axios.post(
        "/server/page_builder_function/api/media",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      if (response.status === 200) {
        // trigger gallery refresh
        setRefreshKey((k) => k + 1);

        toast.success("File uploaded successfully!");
        const mediaRecord = response.data.data;
        setData(mediaRecord);

        // reset input & preview
        setFile(null);
        setMediaPreview(null);
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
      } else {
        toast.error("Failed to upload the file.");
      }
    } catch (error) {
      toast.error("An error occurred while uploading.");
    } finally {
      setLoading(false);
    }
  };

  const handleRemoveMedia = () => {
    setFile(null);
    setMediaPreview(null);
    // Reset the input file value to allow re-uploading the same file
    document.getElementById("fileInput").value = "";
  };

  return (
    <>
      <ToastContainer />
      <Drawer
        title="Upload Image/Video"
        width={400}
        onClose={() => setDrawerVisible(false)}
        visible={drawerVisible}
        bodyStyle={{ padding: 0 }}
      >
        <div style={styles.backgroundContainer}>
          <div style={styles.cardContainer}>
            <h2 style={styles.title}>Upload Image/Video</h2>
            {/* <p style={styles.subtitle}>JPG, PNG, GIF</p> */}

            <div style={styles.uploadArea}>
              <input
                ref={fileInputRef}
                id="fileInput"
                type="file"
                accept="image/*, video/*"
                onChange={handleFileChange}
                style={styles.fileInput}
              />
              {mediaPreview ? (
                file.type.includes("image") ? (
                  <img
                    src={mediaPreview}
                    alt="Preview"
                    style={styles.mediaPreview}
                  />
                ) : (
                  <video
                    controls
                    src={mediaPreview}
                    style={styles.mediaPreview}
                  ></video>
                )
              ) : (
                <img
                  src={uploadimage} // Replace with the actual path to your image
                  alt="Upload Icon"
                  style={styles.uploadImage}
                />
              )}
            </div>

            <div style={styles.buttonContainer}>
              <Button
                icon={<UploadOutlined />}
                loading={loading}
                disabled={!file}
                onClick={handleSave}
                style={styles.uploadButton}
              >
                Upload
              </Button>

              {mediaPreview && (
                <Button
                  icon={<DeleteOutlined />}
                  danger
                  onClick={handleRemoveMedia}
                  style={styles.removeButton}
                >
                  Remove
                </Button>
              )}
            </div>
          </div>
        </div>
      </Drawer>
      <div
        style={{
          marginTop: "1rem",
          padding: "1rem",
          backgroundColor: "rgb(196 211 251)",
          boxShadow: "0px 4px 15px rgba(39, 59, 174, 0.3)",
          borderRadius: "8px",
        }}
      >
        {/* Header row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "1rem",
          }}
        >
          <h2 style={styles.allMediaHeading}>Media</h2>
          <Button
            icon={<UploadOutlined />}
            onClick={() => setDrawerVisible(true)}
            style={{
              backgroundColor: "#3169be",
              color: "#fff",
              border: "none",
              boxShadow: "0px 2px 8px rgba(0,0,0,0.15)",
              padding: "6px 16px",
            }}
          >
            Add Media
          </Button>
        </div>

        <AllMedia refreshKey={refreshKey} />
      </div>
    </>
  );
};

// Styles
const styles = {
 
  backgroundContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    height: "380px",
    paddingTop: "30px",
    backgroundColor: "rgb(188 214 255)",
    position: "relative",
  },
  cardContainer: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0px 4px 15px rgba(73, 65, 226, 0.3)",
    textAlign: "center",
    width: "350px",
    height: "300px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  title: {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#3169be",
  },
  uploadArea: {
    position: "relative",
    border: "2px dashed #3169be",
    borderRadius: "10px",
    padding: "20px",
    cursor: "pointer",
    marginBottom: "15px",
    height: "150px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  fileInput: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    opacity: 0,
    cursor: "pointer",
  },
  mediaPreview: {
    maxWidth: "100%",
    maxHeight: "120px",
    borderRadius: "10px",
  },
  uploadImage: {
    width: "80px",
    height: "80px",
    objectFit: "contain",
  },
  buttonContainer: {
    display: "flex",
    gap: "10px",
    justifyContent: "center",
    width: "100%",
  },
  uploadButton: {
    backgroundColor: "#3169be",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    padding: "8px 15px",
  },
  removeButton: {
    backgroundColor: "rgb(137 135 135)",
    color: "#fff",
    border: "none",
    padding: "6px 12px",
    borderRadius: "5px",
    cursor: "pointer",
  },

  // Layout wrappers
  page: {
    display: "flex",
    alignItems: "flex-start",
    gap: "2rem",
    padding: "2rem",
    backgroundColor: "#fafafa",
  },
  uploadWrapper: {
    flex: "0 0 360px",
  },

  // Gallery container + heading
  allMediaContainer: {
    marginTop: "2rem",
    padding: "1rem",
  },
  allMediaHeading: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#3169be",
    marginBottom: "1rem",
    textAlign: "left",
  },
};

export default AddMedia;
