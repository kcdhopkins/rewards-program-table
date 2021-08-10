import {TableCell, TableHead, TableRow } from '@material-ui/core'

const headerData = [
    "Name",
    "Date Created",
    "Transaction Amount",
    "1 Point Reward",
    "2 Point Reward",
    "Total Reward Points"
]

const TableHeader = ()=>{
   
    return( 
        <TableHead>
            <TableRow>
                <TableCell />
                {headerData.map( (name, index) => <TableCell key={`index-${index}`}>{name}</TableCell> )}
            </TableRow>
        </TableHead>
    )
}

export default TableHeader