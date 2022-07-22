import { useEffect, useState } from "react";

function Search({cb = Function.prototype}) {
  const [value, setValue] = useState('');

  useEffect(() => {
    cb(value);
  // eslint-disable-next-line
  }, [value])


  return (
      <div className="row">
        <div className="input-field col s12">
          <input 
          type="search"
          id="search-field"
          placeholder="Search..."
          onChange={(e) => setValue(e.target.value)}
          value={value}
          />
        </div>
      </div>
  )
}

export { Search };