import React from 'react'
import { Button, Input, Menu } from 'antd'
import {Link, useNavigate} from 'react-router-dom'
import { SearchOutlined } from '@ant-design/icons';

const Navbar = () => {
    var navigate = useNavigate(); 
    var searchValue;
    const items = [
        {label:(
          <Link to='/'>Home</Link>
        ) },
        // {label:(
        //   <Link to='/forgotPass'>Forgot Password</Link>
        // ) },
        {label:(
          <Link to='/login'>Login</Link>
        ) },
        {label:(
          <Link to='/signup'>Sign Up</Link>
        ) },
        {label:(
          <>
          <Input onChange={getSearchValue} placeholder='seach'/>
          <SearchOutlined onClick={searchKeyword} />
          </>
        ) },
        // {icon: (
        //   <>
        //     <Link to="/checkOut"><Button>Check Out</Button></Link>
        //   </>
        // ) },
        {icon: (
          <>
            <Link to="/cart"><Button>Add To Cart</Button></Link>
          </>
        ) }
    ]
    function getSearchValue(event){
      searchValue = event.target.value;
    }
    function searchKeyword(){
      console.log("search value = ",searchValue);
      var url = "/search?q="+searchValue;
      navigate(url)
    }

  return (
    <div>
        <Menu mode="horizontal" items={items} />
    </div>
  )
}

export default Navbar