import SearchSVG from "media/searchSVG";

export const Input = ({ value, onChange }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search me..."
        value={value}
        onChange={onChange}
      />
      <button>
        <SearchSVG></SearchSVG>
      </button>
    </div>
  );
};
