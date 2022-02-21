// import logo from './logo.svg';
import Logout from './components/Logout';
// import Header from './components/Header/Header';
// import Profile from './components/Profile';
import Login from './components/Login';
// import PersonalInf from './components/PersonalInf';
import './App.scss';
import './scss/logout.scss';
import './scss/overview.scss';
import './scss/manage.scss';
import './scss/loan.scss';
import './scss/documentform.scss';
import './scss/contactus.scss';
import './scss/header.scss';
import './scss/card.scss';
import './scss/footer.scss';
import NavBar from './components/NavBar';
// import Card from './components/Card';



function App() {
  return (
    <div className="App">
      <Logout/>
      <NavBar/>
      {/* <Header/> */}
      {/* <Profile/> */}
      {/* <Card/> */}
      <Login/>
      {/* <PersonalInf/> */}

    </div>
  );
}

export default App;
