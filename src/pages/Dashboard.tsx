import React from 'react'

const isLogin: boolean = true;
function Dashboard() {
  return (
    <div>
      {isLogin ? (
        <div>This is dashboard page</div>
      ) : (
        <div>Please login to access the dashboard</div>
        
      )}
    </div>
  )
}

export default Dashboard