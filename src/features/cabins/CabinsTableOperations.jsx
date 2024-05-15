import Filter from "../../ui/Filter";
import TableOperations from "../../ui/TableOperations";
import SortBy from "../../ui/SortBy";
export default function CabinsTableOperations() {
  return (
    <TableOperations>
      <Filter
        searchPeramsSetter="discount"
        options={[
          { value: "all", label: "All" },
          { value: "with-discount", label: "With Discount" },
          { value: "no-discount", label: "No Discount" },
        ]}
      />
      <SortBy
        options={[
          { value: "name-asc", label: "Sort by name (A-Z)" },
          { value: "name-desc", label: "Sort by name (Z-A)" },
          { value: "regularPrice-asc", label: "Sort by price low" },
          { value: "regularPrice-desc", label: "Sort by price high" },
          { value: "maxCapacity-asc", label: "Sort by capacity low" },
          { value: "maxCapacity-desc", label: "Sort by capacity high" },
        ]}
      />
    </TableOperations>
  );
}
