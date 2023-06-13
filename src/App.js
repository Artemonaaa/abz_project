import { useState } from "react";

import Header from "./component/Header/Header";
import Button from "./component/Button/Button";
import UserList from "./component/UserList/UserList";
import RegistrationForm from "./component/RegistrationForm/RegistrationForm";

import "./App.scss";

function App() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <>
      <Header />
      <main>
        <section className="main-title">
          <div className="main-image">
            <div className="main-image-caption">
              <h1>
                Test assignment for front-end developer
              </h1>
              <p>
                What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.
              </p>
              <Button title="Sign up"/>
            </div>  
          </div>
        </section>
        <section className="main-getruqeust container">
          <h1 style={{marginBottom: '50px'}}>Working with GET request</h1>
          <div className="user-list">
            <UserList currentPage={currentPage} countUsers="6" />
          </div>
          <Button title="Show more" onClick={() => setCurrentPage(prev => prev + 1)} />
        </section>
        <section className="main-postruqeust container">
          <h1 className="main-postruqeust-title">Working with Post request</h1>
          <RegistrationForm />
        </section> 
      </main>
    </>
  );  
}

export default App;
