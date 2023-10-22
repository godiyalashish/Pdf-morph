import {useState} from 'react'
import { pushPageToDelete, removePageToDelete } from '../../utils/fileSlice';
import { useDispatch } from 'react-redux';


const PdfPage = ({page, pageNo }) => {
    
const [isSelected, setIsSelected] = useState(false);
const dispatch = useDispatch();
const handleSelect= (pageno) => {
    if(isSelected){
        dispatch(removePageToDelete(pageno))
    }
    else{
         dispatch(pushPageToDelete(pageno))
        }
    setIsSelected(prevState=>!prevState);
}
  return (
    <div className={'bg-white p-2 pt-4 border-bor border-2 flex flex-col justify-center items-center cursor-move' + (isSelected ? ' border-secondary border-4' : '')}
    onClick={()=>handleSelect(pageNo-1)}>
        <img src={page} alt="page"/>
        <p className='text-sm font-bold text-secondary pt-1'>{pageNo}</p>
    </div>
  )
}

export default PdfPage