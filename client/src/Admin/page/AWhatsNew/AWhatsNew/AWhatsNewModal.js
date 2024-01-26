import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from "@mui/material";
import {Upload} from "antd";
import { API_URL } from "../../../../config/contansts";
import axios from "axios";
// import axios from "axios";

const AWhatsNewModal = ({props}) => {
  const { thumbnail_img_url, content_img_url} = props.editedData;
  const [imageUrl, setImageUrl] = useState("");
  const [contentImageUrl, setContentImageUrl] = useState("");

  const onChangeImage = (info) => {
    // 파일이 업로드 중일 때
    console.log("new", info.file);
    if (info.file.status === "uploading") {
      console.log("업로드중");
      return;
    }
    // 파일이 업로드 완료 되었을 때
    if (info.file.status === "done") {
      console.log("성공");
      const response = info.file.response;
      const imageUrl = response.imageUrl;
      // 받은 이미지경로를 imageUrl에 넣어줌
      setImageUrl(imageUrl);
    }
  };

  const onChangeContentImage = (info) => {
    // 파일이 업로드 중일 때
    console.log("new", info.file);
    if (info.file.status === "uploading") {
      console.log("업로드중");
      return;
    }
    // 파일이 업로드 완료 되었을 때
    if (info.file.status === "done") {
      console.log("성공");
      const response = info.file.response;
      const imageUrl = response.imageUrl;
      // 받은 이미지경로를 imageUrl에 넣어줌
      setContentImageUrl(imageUrl);
    }
  };

  const handleUpdate = () => {
      const updatedData = { ...props.editedData };
      updatedData['thumbnail_img_url'] = imageUrl ? imageUrl : thumbnail_img_url;
      updatedData['content_img_url'] = contentImageUrl ? contentImageUrl : content_img_url;
      console.log(updatedData);
      axios
        .patch(`${API_URL}/api/whats-new/${props.selectedItem.id}`, updatedData)
        .then((response) => {
          console.log('Update:', response.data);
          props.setAxiosResult((prevResult) => {
            const updatedResult = prevResult.map((item) =>
              item.id === props.selectedItem.id ? updatedData : item
            );
            return updatedResult;
          });
          props.setOpenModal(false);
        })
        .catch((error) => {
          console.error('error:', error);
        });
        setImageUrl("");
        setContentImageUrl("");
    }

    const handleCreate = () => {
      const { id, read_count, created_at, ...dataWithoutId } = props.editedData;
      dataWithoutId['thumbnail_img_url'] = imageUrl;
      dataWithoutId['content_img_url'] = contentImageUrl;
      console.log(dataWithoutId);
      // const { id, ...dataWithoutId } = props.editedData;
      // const newData = { ...dataWithoutId };
  
      if (imageUrl && contentImageUrl && dataWithoutId.title && dataWithoutId.seq) {
        axios
        .post(`${API_URL}/api/whats-new`, dataWithoutId)
        .then((response) => {
          console.log('Create:', response.data);
          props.setAxiosResult((prevResult) => [...prevResult, response.data]);
          props.setOpenModal(false);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
        setImageUrl("");
        setContentImageUrl("");
      }else{
        alert("전부 입력");
      }
    };

  // console.log(props.editedData);
  return(
    <Dialog open={props.openModal} onClose={props.handleModalClose}>
      <DialogTitle>{props.selectedItem ? "수정" : "추가하기"}</DialogTitle>
      <DialogContent>
        {props.selectedItem && (
          <TextField
            label="ID"
            name="id"
            value={props.editedData.id}
            onChange={props.handleInputChange}
            fullWidth
            margin="normal"
            disabled
          />
        )}
        <TextField
          label="Subcategory_id"
          name="sub_category_id"
          value={props.editedData.sub_category_id}
          onChange={props.handleInputChange}
          fullWidth
          margin="normal"
          disabled
        />
        <TextField
          label="Title"
          name="title"
          value={props.editedData.title}
          onChange={props.handleInputChange}
          fullWidth
          margin="normal"
        />
        <Upload
          name="image"
          action={`${API_URL}/api/image`}
          listType="picture"
          showUploadList={false}
          onChange={onChangeImage}
        >
          {imageUrl ? (
            <p>업로드된 이미지: {imageUrl}</p>
            ) : (
            <div id="upload-img-placeholder">
              <i className="fa-regular fa-file-image"></i>
              <br />
              <span>클릭하거나 드래그하여 업로드하세요.</span>
            </div>
          )}
        </Upload>
        <Upload
          name="image"
          action={`${API_URL}/api/image`}
          listType="picture"
          showUploadList={false}
          onChange={onChangeContentImage}
        >
          {contentImageUrl ? (
            <p>업로드된 이미지: {contentImageUrl}</p>
            ) : (
            <div id="upload-img-placeholder">
              <i className="fa-regular fa-file-image"></i>
              <br />
              <span>클릭하거나 드래그하여 업로드하세요.</span>
            </div>
          )}
        </Upload>
        <TextField
          label="순서"
          name="seq"
          value={props.editedData.seq}
          onChange={props.handleInputChange}
          fullWidth
          margin="normal"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => {
          setImageUrl("");
          setContentImageUrl("");
          props.handleModalClose();
        }}>
          취소
        </Button>
        <Button onClick={props.selectedItem ? handleUpdate : handleCreate} color="primary">
          {props.selectedItem ? "수정" : "등록"}
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default AWhatsNewModal;
