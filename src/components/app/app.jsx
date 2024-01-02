import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css'


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: [
        {name: "John C.", salary: 800, increase: true, rise: true, id: 1},
        {name: "Alex M.", salary: 3000, increase: false, rise: false, id: 2},
        {name: "Egor C.", salary: 15000, increase: true, rise: false, id: 3},
      ],
      term: '',
      filter: 'all'
    }
    this.maxId = 4;
  }

  deleteItem = (id) => {
    this.setState(({data}) => {

      return {
        data: data.filter(item => item.id !== id) //фильтруем дата, по каждому эл-му если айди не равен айди, который удаляем, то добавляет в массив
      }

    })
  }

  

  addItem = (name, salary) => {
      const user = {
        name,
        salary,
        increase: false,
        rise: false,
        id: this.maxId++
      }

      this.setState(({data}) => {
        let newArr = [...data, user];
        return {
          data: newArr
        }
      })
  }

  onToggleProp = (id, prop) => {
    this.setState(({data}) => ({
      data: data.map(item => {
        if (item.id === id){
          return{...item, [prop]: !item[prop]} //Берём весь объект и меняем св-во на противоположное и затем возвращаем его
        }
        return item //если это не нужный айди, то айтем просто возвращается
      })
    }))
  }

  searchEmp = (items, term) => {
    if (term.length === 0){
      return items;
    }

    return items.filter(item => {
      return item.name.indexOf(term) > -1  // Если мы не найдём кусочек строки то просто не выполнится 
    })
  }

  onUpdateSearch = (term) => {
    this.setState({term});
  }

  filterPost = (items, filter) => {
    switch (filter){
      case 'rise':
          return items.filter(item => item.rise);
      case 'moreThen1000':
          return items.filter(item => item.salary > 1000);
      default:
        return items
    }
  }


  onFilterSelect = (filter) => {
    this.setState({filter});
  }



  render(){
    const {data, term, filter} = this.state;
    const employees = this.state.data.length;
    const increased = this.state.data.filter(item => item.increase).length;
    const visibleData = this.filterPost(this.searchEmp(data, term), filter);
  
    return(
      <div className="app">
        <AppInfo
        employees={employees}
        increased={increased}
        />
  
        <div className="search-panel">
          <SearchPanel
          onUpdateSearch={this.onUpdateSearch}
          />
          <AppFilter
          filter={filter}
          onFilterSelect={this.onFilterSelect}/>
        </div>
  
        <EmployeesList 
        data={visibleData}
        onDelete={this.deleteItem}
        onToggleProp={this.onToggleProp}
        />
  
        <EmployeesAddForm
        onAdd={this.addItem}/>
  
      </div>
    )
  }
}

export default App;