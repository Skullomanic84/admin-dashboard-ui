import React, { useState } from 'react'
import './UserList.css'
import { DataGrid } from '@material-ui/data-grid'
import { DeleteOutline } from '@material-ui/icons'
import { userRow } from '../../dummyData'
import { Link } from 'react-router-dom'

function User() {

    const [data, setData] = useState(userRow);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'user',
          headerName: 'User',
          width: 200,
          renderCell: (params)=> {
              return (
                  <div className='users'>
                      <img src= {params.row.avatar} alt='' className='userImg' />
                      {params.row.username}
                  </div>
              )
          }
        },
        {
          field: 'email',
          headerName: 'Email',
          width: 250,
        },
        {
          field: 'status',
          headerName: 'Status',
          width: 130,
        },
        {
          field: 'transaction',
          headerName: 'Transaction',
          width: 160,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 160,
            renderCell: (params) => {
                return (
                    <> 
                    <Link to= {'/user/'+params.row.id}>
                        <button className="userListEdit">Edit</button>
                    </Link>
                        <DeleteOutline 
                        className="userListDelete" 
                        onClick={() => handleDelete(params.row.id) }/>
                    </>
                    
                )
            }
          },
      ]; 

     
    return (
        <div className="userlist" >
             <DataGrid
                rows={data}
                columns={columns}
                pageSize={9}
                rowsPerPageOptions={[9]}
                checkboxSelection
                disableSelectionOnClick
             />
        </div>
    )
}

export default User
