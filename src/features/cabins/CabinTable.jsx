/*eslint-disable no-unused-vars*/
/*eslint-disable react/prop-types*/

import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";
import useCabinQuery from "./useCabinQuery";
import { Table } from "../../ui/Table";
import Menus from "../../ui/Menus";
import { useSearchParams } from "react-router-dom";
import Empty from "../../ui/Empty";

export default function CabinTable() {
  const { cabins, isLoading } = useCabinQuery();
  const [searchPerams] = useSearchParams();

  if (isLoading) return <Spinner />;

  if (!cabins.length) return <Empty resourceName="cabins" />;

  const filter = searchPerams.get("discount") || "all";

  const sort = searchPerams.get("sortBy") || "name-asc";
  const [field, direction] = sort.split("-");
  const modifier = direction === "asc" ? 1 : -1;

  let filteredItems;
  if (filter === "all") filteredItems = cabins;
  if (filter === "no-discount")
    filteredItems = cabins.filter((cabin) => cabin.discount <= 0);
  if (filter === "with-discount")
    filteredItems = cabins.filter((cabin) => cabin.discount > 0);

  const sortedItems = filteredItems.sort((a, b) => {
    return (a[field] - b[field]) * modifier;
  });

  return (
    <Menus>
      <Table columns=".6fr 1.8fr 2.2fr 1fr 1fr 1fr">
        <Table.Header>
          <div></div>
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </Table.Header>
        <Table.Body
          data={sortedItems}
          render={(cabin) => <CabinRow cabin={cabin} key={cabin.id} />}
        />
      </Table>
    </Menus>
  );
}
