
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import Button from '@mui/material/Button';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import '../assets/css/nav.css';
import TextField from '@mui/material/TextField';

const Nav = () => {
  return (
    <div className='nav-container'>
          <div className="search-container">
          <TextField id="outlined-basic" label="Searcg Products" variant="outlined" />
             <SearchTwoToneIcon className='search-icon'></SearchTwoToneIcon>
          </div>

        <div className='logo-container'>
            <h3>ForeEVer FasHion</h3>
        </div>

        <div className='rest-container'>
        <Button variant="contained">Register</Button>
        <Button variant="contained">Login</Button>
        <Badge badgeContent={4} color="primary">
      <ShoppingCartIcon />
    </Badge>
        </div>
    </div>
  )
}

export default Nav