/* eslint-disable react/prop-types*/
import { useSearchParams } from "react-router-dom";
import Select from "./Select";

export default function SortBy({ options }) {
  const [searchPerams, setSearchPerams] = useSearchParams();
  const sortBy = searchPerams.get("sortBy") || "";
  function handleChange(e) {
    searchPerams.set("sortBy", e.target.value);
    setSearchPerams(searchPerams);
  }
  return (
    <Select onChange={handleChange} options={options} value={sortBy}>
      SortBy
    </Select>
  );
}
