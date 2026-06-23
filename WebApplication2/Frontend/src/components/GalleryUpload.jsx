import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Image, Upload } from 'antd';
// import public from "D:\Projects\Event Mgt Project\public";


const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
const GalleryUploadPage = () => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const uploadingImg = {
    uid: '-2',
    name: 'upl',
    status: 'done',
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  };

  const [fileList, setFileList] = useState([
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      name:"laklkas"
    },
    {
      uid: '-2',
      name: 'image.png',
      status: 'done',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzGPBoxnTAMZSHnr8rVc6C1XdQ57boULlbrg&s',
    },
    {
      uid: '-3',
      name: 'image.png',
      status: 'done',

      url: 'https://cdn.pixabay.com/photo/2016/11/22/21/26/notebook-1850613_640.jpg',
    },
    // {
    //   uid: '-4',
    //   name: 'image.png',
    //   status: 'done',
    //   url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjrGrjCIUfZiCyARidrHsPdcNqF4o8DlxR0Q&s',
    // },
   
  ]);
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
  };
  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
  const uploadButton = (
    <button
      style={{
        border: 0,
        background: 'none',
      }}
      type="button"
    >
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
      <div  class="upload-detail">
                          File size: Up to 5MB</div>
                        <div class="upload-detail">Optimal dimensions: 600x280px</div>
                        <div class="upload-detail">Supported file types: JPG, JPEG, PNG, GIF, WEBP</div>
    </button>
  );
  return (
    <>
      <Upload
        action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
        listType="picture-card"
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
      >
        {fileList.length >= 8 ? null : uploadButton}
      </Upload>
      {previewImage && 
      <div id='box-upload'>
        <Image
          wrapperStyle={{display:'none',}}
          preview={{
               visible: previewOpen,
            onVisibleChange: (visible) => setPreviewOpen(visible),
            afterOpenChange: (visible) => !visible && setPreviewImage(''),
          }}
          src={previewImage}
        //   src={fileList.url}
        />
        </div>
      }
    </>
  );
};
export default GalleryUploadPage;