import React from 'react'
import Dropzone from 'react-dropzone'
import PdfFileImage from '../../assets/pdfFileIcon.png'
import { useDispatch } from 'react-redux';
import { addfile } from '../../utils/fileSlice';



const FileDropper = ({setIsLoading}) => {
    const dispatch = useDispatch();
    const onFileChange = (acceptedFiles) => {
        setIsLoading(true)
        const selectedFile = acceptedFiles[0];
        dispatch(addfile(selectedFile));
      };
  return (
    <div className='flex flex-col items-center w-full'>
    <div className='text-3xl text-secondary font-bold mb-4'>Upload File</div>
    <div className="border-4 border-dashed border-bor p-6 cursor-pointer bg-primary mx-auto max-w-md flex justify-center items-center">
    <Dropzone onDrop={onFileChange} >
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()} className='flex items-center flex-col gap-y-3 '>
            <input {...getInputProps()} />
            <img src={PdfFileImage} alt='file-icon' className='animate-bounce'/>
            <p className='text-secondary'>Drag & drop a PDF file here, or click to select one</p>
          </div>
        )}
      </Dropzone>
      </div>
      </div>
  )
}

export default FileDropper