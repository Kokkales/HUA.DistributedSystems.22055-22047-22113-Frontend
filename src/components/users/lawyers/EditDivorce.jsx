import Card from '../../ui/Card';
import Overlay from '../../ui/Overlay';
import { useNavigate } from 'react-router-dom';
import classes from './EditDivorce.module.css';
import DivorceLayout from '../../layout/DivorceLayout';
import CreateDivorce from './CreateDivorce';

function EditDivorce(props) {
  const isShown = props.isshown;
  const navigate = useNavigate();
  console.log('edit is here');
  //EXIT BUTTON
  function exitHandlerForEdit(event) {
    console.log('exit button clicked');
    event.preventDefault();
    //POST changes
    if (isShown) {
      console.log('closed the divorce');
    }
    props.formState(isShown);
    navigate({ pathname: '/lawyer/workspace' });
  }

  return (
    <Overlay>
      <Card>
        <div className={classes.editDivorceForm}>
          <CreateDivorce
            isEditType={true}
            onClick={exitHandlerForEdit}
          ></CreateDivorce>
        </div>
      </Card>
    </Overlay>
    // <Overlay>
    //   <Card>
    //     <DivorceLayout>
    //       <div className={classes.editDivorceForm}>
    //         <section className={classes.header}>
    //           <div onClick={exitHandler}></div>
    //         </section>
    //         <section className={classes.involvedParties}></section>
    //         <section className={classes.contractDetails}></section>
    //         <section className={classes.options}></section>
    //       </div>
    //     </DivorceLayout>
    //   </Card>
    // </Overlay>
  );
}

export default EditDivorce;
