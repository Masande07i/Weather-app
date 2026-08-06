import { FaSearch } from 'react-icons/fa';
import style from './Search.module.css';
import { useState, useEffect } from 'react';

export interface SearchProps {
  searchQuery: string;
  onSearch: (finalValue: string) => void;
}

export const Search: React.FC<SearchProps> = ({ searchQuery, onSearch }) => {
  const [localInput, setLocalInput] = useState(searchQuery);


  useEffect(() => {
    setLocalInput(searchQuery);
  }, [searchQuery]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); 
    if (localInput.trim()) {
      onSearch(localInput.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className={style.searchContainer}>
      <div className={style.inputContainer}>
        <FaSearch className={style.icon} />
        <input
          type="text"
          className={style.input}
          placeholder="Search location and press Enter"
          value={localInput}
          onChange={(e) => setLocalInput(e.target.value)}
        />
       
        <button type="submit" style={{ display: 'none' }} />
      </div>
    </form>
  );
};
