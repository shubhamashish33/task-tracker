import Button from "./Button";

const Header = ({ onAdd, showAdd }) => {
  return (
    <header className="header">
      <h1>Task Tracker</h1>
      <Button onClick={onAdd} color="black" text={showAdd ? 'Close' : 'Add'} />
    </header>
  );
};

export default Header;
