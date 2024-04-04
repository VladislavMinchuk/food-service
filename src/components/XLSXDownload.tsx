import * as XLSX from 'xlsx-js-style';
import { Button } from '@chakra-ui/react'

export type XLSXDownloadProps = {
  data: Object[],
  titel: string
}

const XLSXDownload = ({ titel, data }: XLSXDownloadProps) => {
  const downloadHandler = () => {
    const wscols = [
      { wch: 25 },
      { wch: 10 },
      { wch: 10 },
    ];
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(data);
    
    ws['!cols'] = wscols;
    
    for (const key in ws) {
      if (Object.prototype.hasOwnProperty.call(ws, key)) {
        const element = ws[key];
        const cellAdress = XLSX.utils.decode_cell(key);
        
        if(element.t) element.s = {
          // styling for all cells
          font: {
            name: 'arial',
          },
          alignment: {
            wrapText: '1',
          },
          border: {
            right: {
              style: 'thin',
              color: '000000',
            },
            left: {
              style: 'thin',
              color: '000000',
            },
            bottom: {
              style: 'thin',
              color: '000000',
            },
            top: {
              style: 'thin',
              color: '000000',
            },
          },
        };
        
        
        if (cellAdress.c > 0 && cellAdress.r > 0) {
          element.s.alignment.vertical = 'center';
          element.s.alignment.horizontal = 'center';
        }
      }
    }
    
    XLSX.utils.book_append_sheet(wb, ws);
    XLSX.writeFile(wb, 'Report.xlsx', { type: 'file', cellStyles: true });
  };
  
  return (
    <>
      <Button type='button' colorScheme='blue' onClick={downloadHandler}>{ titel }</Button>
    </>
  );
};

export default XLSXDownload;
