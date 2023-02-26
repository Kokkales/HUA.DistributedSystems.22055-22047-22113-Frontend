import Card from '../../ui/Card';
import Overlay from '../../ui/Overlay';
import { useNavigate } from 'react-router-dom';
import classes from './EditDivorce.module.css';
import DivorceLayout from '../../layout/DivorceLayout';
import CreateDivorce from './CreateDivorce';

function EditDivorce(props) {
  const isShown = false;
  const navigate = useNavigate();
  console.log('Divorce ID on  EDIT DIVORCE: ' + props.divorceId);
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
    // navigate({ pathname: '/lawyer/workspace' });
  }

  return (
    <Overlay>
      <Card>
        <div className={classes.editDivorceForm}>
          {props.type == 'draft' && (
            <CreateDivorce
              divorceId={props.divorceId}
              type={props.type}
              isEditType={true}
              onClick={exitHandlerForEdit}
              isDisabled={false}
              saved={true}
            ></CreateDivorce>
          )}
          {props.type == 'pending' && (
            <CreateDivorce
              type={props.type}
              divorceId={props.divorceId}
              isEditType={true}
              onClick={exitHandlerForEdit}
              draftOptions={false}
              isDisabled={true}
              saved={true}
            ></CreateDivorce>
          )}
        </div>
      </Card>
    </Overlay>
  );
}

export default EditDivorce;
