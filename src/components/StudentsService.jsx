import React from 'react';
import {connect} from 'react-redux';
import PersonIcon from '@material-ui/icons/Person';


const StudentsService  = ({studentList, status})=>{
    if(Object.keys(studentList).length>0)
    {
        return studentList.filter(student => student.Status.includes(status)).map((student)=>{
            return(
                <tr key={Math.random()} className="table">  
                    <td><PersonIcon color="primary"/>  {student.Name}</td>
                    <td>{student.Status}</td>
                    <td>{student.Major}</td>
                </tr>
            );
        })
    }
}

const mapStateToProps = state => ({
    studentList: state.students.studentList
})

export default connect(mapStateToProps)(StudentsService);