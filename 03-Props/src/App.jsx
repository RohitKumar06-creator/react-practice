import React from "react";
import Card from "./components/Card";

const App = () => {
  return (
    <div className="parent">

      <Card user="Alice" age={25} img="https://plus.unsplash.com/premium_photo-1749746282512-c798f061dd52?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <Card user="Bob" age={30} img="https://images.unsplash.com/photo-1777216092678-ab3cac218f80?q=80&w=1299&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <Card user="Charlie" age={35} img="https://images.unsplash.com/photo-1778452419724-1f605dc17c46?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
    </div>
  );
};

export default App;