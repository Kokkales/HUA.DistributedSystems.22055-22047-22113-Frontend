import classes from './MainFooter.module.css';

function MainFooter(props) {
  return (
    <footer>
      <div className={classes.fullName}>
        <p>Team 44</p>
      </div>
      <div className={classes.copyright}>
        <p>@Copyright</p>
      </div>
    </footer>
  );
}

export default MainFooter;
