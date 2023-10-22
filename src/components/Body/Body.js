import {useEffect, useState} from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { pdfjs } from 'react-pdf';

import FileDropper from '../FileDropper/FileDropper'
import store from '../../utils/store'
import PdfEditor from '../PdfEditor/PdfEditor'
import { useDispatch } from 'react-redux';
import { addPages } from '../../utils/fileSlice';
import Spinner from '../Spinner/Spinner';


pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url,
  ).toString();

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Body = () => {
    const file = useSelector(store=>store.file.file);
    const deletepages = useSelector(store=>store.file.pagesToDelete);
    console.log(deletepages)
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        const renderPages = async () => {
          const pdf = await pdfjs.getDocument(URL.createObjectURL(file)).promise;
    
          const pagesArray = [];
          for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber++) {
            const page = await pdf.getPage(pageNumber);
            const viewport = page.getViewport({ scale: 0.3 });
            const canvas = document.createElement('canvas');
            const canvasContext = canvas.getContext('2d');
            canvas.height = viewport.height;
            canvas.width = viewport.width;
    
            const renderContext = {
              canvasContext,
              viewport,
            };
    
            await page.render(renderContext).promise;
            const imageData = canvas.toDataURL('image/png');
    
            pagesArray.push({imageData, pageNumber});
          }
    
          dispatch(addPages(pagesArray));
          setIsLoading(false);
        };
    
        if (file) {
          renderPages();
        }
      }, [file]);
  return (
    <div className='mt-24 flex items-center p-6 flex-col'>
    {file===null ? <FileDropper setIsLoading={setIsLoading}/> : (isLoading? <Spinner/> : <PdfEditor/>)}
    </div>
  )
}

export default Body