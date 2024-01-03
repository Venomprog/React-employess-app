import './app-filter.css'

const AppFilter = (props) => {
  const buttnsData = [
    {name: 'all', label: 'Все сотрудники', colored: false},
    {name: 'rise', label: 'Сотрудники на повышение', colored: false},
    {name: 'moreThen1000', label: 'З/П больше 1000$', colored: true},
  ];

  const buttons = buttnsData.map(({name, label, colored}) => {
    const active = props.filter === name;
    const clazz = active ? 'btn-light' : 'btn-outline-light';
    const style = colored ? {color: 'red'} : null;
    return(
      <button 
          className={`btn ${clazz}`}
          key={name}
          type="button"
          onClick={() => props.onFilterSelect(name)}
          style={style}
          >
          {label}
      </button>
    )
  })

    return (
      <div className="btn-group">
        {buttons}
      </div>
    )
}

export default AppFilter;