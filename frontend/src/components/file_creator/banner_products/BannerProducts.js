import React, { useState } from 'react'
import axios from "axios"
import { toast  } from 'react-toastify';
import "./BannerProducts.css"

const BannerProducts = () => {
  const [fileName, setFileName] = useState("")
  const [fileText, setFileText] = useState("")
  const [fileImage, setFileImage] = useState("")
  const [type, setType] = useState("bannerBooks")

  const sendFile = (e) => {
    e.preventDefault();
    if(!fileName || !fileText || !fileImage ){
      return toast.error("Please fill all inputs!")
      // return toast.warning("Please fill all inputs!")
    
    }
    axios
      .post(`http://localhost:9000/create/products`, {
        fileName: fileName,
        fileText: fileText,
        fileImage: fileImage,
        type: type
      }).then((createdFile) => console.log(createdFile))
      .catch((err) => console.log(err))
    setFileName("")
    setFileImage("")
    setType("")
    return toast.success("This product successfully added!")

  }
  return (
    <div className='ProductsAdmin'>
      <form onSubmit={sendFile}>
        <input onChange={(e) => setFileName(e.target.value)} value={fileName} type="text" placeholder='File Name' />
        <input onChange={(e) => setFileText(e.target.value)} value={fileText} type="text" placeholder='File Text' />
        <input onChange={(e) => setFileImage(e.target.value)} value={fileImage} type="text" placeholder='File Image' />

        <label htmlFor="type">
          <select value={type} onChange={(e) => setType(e.target.value)} id="type">
            <option value="bannerProducts">bannerBooks</option>

          </select>
        </label>
        <button type='submit'>Send</button>
      </form>
    </div>
  )
}

export default BannerProducts