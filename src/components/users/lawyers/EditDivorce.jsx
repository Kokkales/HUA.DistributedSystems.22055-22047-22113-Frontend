import Card from '../../ui/Card';
import Overlay from '../../ui/Overlay';
import { useNavigate } from 'react-router-dom';
import classes from './EditDivorce.module.css';
import DivorceLayout from '../../layout/DivorceLayout';

function EditDivorce(props) {
  const isShown = props.isshown;
  const navigate = useNavigate();
  console.log('edit is here');
  //EXIT BUTTON
  function exitHandler(event) {
    console.log('exit button clicked');
    event.preventDefault();
    //POST changes
    if (isShown) {
      console.log('closed the divorce');
    }
    props.formState(isShown);
    navigate({ pathname: '/lawyer/workspace' });
  }
  //SAVE BUTTON
  function saveDivorceHandler(event) {
    console.log('save button clicked');
    event.preventDefault();
  }

  //CREATE BUTTON
  function createDivorceHandler(event) {
    console.log('create button clicked');
    event.preventDefault();
  }

  return (
    <Overlay>
      <Card>
        <DivorceLayout>
          <div className={classes.editDivorceForm}>
            <section className={classes.header}>
              <div onClick={exitHandler}></div>
            </section>
            <section className={classes.involvedParties}></section>
            <section className={classes.contractDetails}></section>
            <section className={classes.options}></section>
          </div>
        </DivorceLayout>
      </Card>
    </Overlay>
  );
}

export default EditDivorce;
