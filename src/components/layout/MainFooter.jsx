import classes from './MainFooter.module.css';

function MainFooter(props) {
  return (
    <footer>
      <p>First Name - Last Name</p>
      <p>@Copyright</p>
      {props.children}
    </footer>
  );
}

export default MainFooter;
