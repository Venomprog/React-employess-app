import './app.css'
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

function WhoAmI (props) {
  return (
    <div>
      <h1>My name is {props.name}, surname - {props.surname}</h1>
      <a href={props.link}>My profile</a>
    </div>
  )
}

function App() {
  return(
    <div className="app">
      <AppInfo/>

      <div className="search-panel">
        <SearchPanel/>
        <AppFilter/>
      </div>

      <EmployeesList/>

      <EmployeesAddForm/>
      <div className="test">
        <WhoAmI name="John" surname="Smith" link="facebook.com"/>
        <WhoAmI name="Alex" surname="Shepard" link="vk.com"/>
      </div>
    </div>
  )
}

export default App;