import Card from './Card';
import classes from './ErrorNotification.module.css';

function ErrorNotification(props) {
  return (
    <Card>
      <div>
        <p>this is an error</p>
      </div>
    </Card>
  );
}

export default ErrorNotification;
