import React from 'react';
import Translate from 'react-translate-component';
import  StudentsService from '../StudentsService';
import TablePagination from '@material-ui/core/TablePagination';
import { makeStyles } from '@material-ui/core/styles';
import { TablePaginationActions } from './PaginationActions';

const useStyles = makeStyles({

    root: {
        width: '100%',
        height: 420,
        boxShadow: "none"
    },
    container: {
        maxHeight: 475
    },
    table: {
        
    }
});

const Tables = ({status}) => {

    let rows = () =>  StudentsService.filter(student => student.Status === {status});

    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    
    return (

        <div className="table-borderless justify-content-center mt-3">
            <div className={classes.root}>
                <table className="table table-borderless-xl table-hover">
                    <thead className="">
                        <tr>
                            <Translate content="TableName" component="th" />
                            <Translate content="TableStatus" component="th"/>
                            <Translate content="TableMajor" component="th"/>
                        </tr>
                    </thead>
                    <tbody>
                        <StudentsService status={status} />
                    </tbody>
                </table>
            </div>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                className="pt-5"
                colSpan={3}
                ActionsComponent={TablePaginationActions}
            />
        </div>
    );
}

export default Tables;