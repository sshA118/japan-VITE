import '../../../pages/Catalog/Catalog.css'
import PropTypes  from 'prop-types';
const Sorting = ({ onSort }) => {
  const sortOptions = [
    { value: "default", label: "По умолчанию" },
    { value: "count&order=desc", label: "Популярное" },
    { value: "count&order=ask", label: "Не популярное" },
  ];

  return (
    <div className="filter" id={"filter"}>
      <button className="drop" id={"drop"}>
        Сортировка
      </button>
      <div className="filter__box" id={"filter__box"}>
        <div className="filter__list" id={"filter__list"}>
          {sortOptions.map((option, index) => (
            <a
              key={index}
              className='filter__list__category'
              id={"filter__list__category"}
              onClick={(e) => {
                e.preventDefault();
                onSort(option.value);
                 document.querySelectorAll(".filter__list__category").forEach((el) => {
                     el.classList.remove("checked");
                   });
                 e.target.classList.add("checked");
              }}
            >
              {option.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
Sorting.propTypes = {
  onSort: PropTypes.func.isRequired,
};

export default Sorting;