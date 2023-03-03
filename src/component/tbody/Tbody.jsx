import TableRow from '../TableRow/TableRow';
const Tbody = (props) => {
  return (
    <tbody>
      {props.items.map((item, index) => {
        return <TableRow key={item.id} number={index + 1} item={item} />;
      })}
    </tbody>
  );
};

export default Tbody;
