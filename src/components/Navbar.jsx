import React from "react";

const Navbar = () =>{
    return(
        <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 20px', backgroundColor: '#070F2B', color: 'white' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <h3 style={{ margin: 0 }}>CodeArena</h3>
        </div>
        <div>
          <ul style={{ display: 'flex', margin: 0, padding: 0, alignItems: 'center' }}>
            <li style={{ margin: '0 10px' }}><button>Home</button></li>
            <li style={{ margin: '0 10px' }}><button>Practice</button></li>
            <li style={{ margin: '0 10px' }}><button>Contest</button></li>
            <li style={{ margin: '0 10px' }}><button >Sign Up</button></li>
            <li style={{ margin: '0 10px' }}><button>Login</button></li>
          </ul>
        </div>
      </nav>
    )
}
export default Navbar;