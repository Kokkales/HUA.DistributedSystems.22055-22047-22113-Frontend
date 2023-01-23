import Card from '../../ui/Card';
import PrimaryButton from '../../ui/PrimaryButton';
import SecondaryButton from '../../ui/SecondaryButton';
import TextField from '../../ui/TextField';
import classes from './CreateDivorce.module.css';

function CreateDivorce(props) {
  return (
    <div className={classes.content}>
      <section className={classes.involved}>
        <h1 className={classes.subTitles}>Involved Parties</h1>
        <Card>
          <div className={classes.spouseOne}>
            <h2>Spouse one</h2>
            <TextField
              labelHtmlFor="taxNumber"
              labelText="Tax Number"
              inputType="text"
              inputPlaceholder=" something@xxxx.xxx"
            ></TextField>
            <div className={classes.userControl}>
              <p>Katerina Konstantinidi</p>
              <PrimaryButton name="Find" />
            </div>
          </div>
        </Card>
        <Card>
          <div className={classes.spouseTwo}>
            <h2>Spouse two</h2>
            <TextField
              labelHtmlFor="taxNumber"
              labelText="Tax Number"
              inputType="text"
              inputPlaceholder=" something@xxxx.xxx"
            ></TextField>
            <TextField
              labelHtmlFor="email"
              labelText="Email"
              inputType="email"
              inputPlaceholder=" something@xxxx.xxx"
            ></TextField>
          </div>
        </Card>
        <Card>
          <div className={classes.lawyerTwo}>
            <h2>Lawyer Two</h2>
            <TextField
              labelHtmlFor="taxNumber"
              labelText="Tax Number"
              inputType="text"
              inputPlaceholder=" something@xxxx.xxx"
            ></TextField>
            <TextField
              labelHtmlFor="email"
              labelText="Email"
              inputType="email"
              inputPlaceholder=" something@xxxx.xxx"
            ></TextField>
          </div>
        </Card>
        <Card>
          <div className={classes.notary}>
            <h2>Notary</h2>
            <TextField
              labelHtmlFor="taxNumber"
              labelText="Tax Number"
              inputType="text"
              inputPlaceholder=" something@xxxx.xxx"
            ></TextField>
            <TextField
              labelHtmlFor="email"
              labelText="Email"
              inputType="email"
              inputPlaceholder=" something@xxxx.xxx"
            ></TextField>
          </div>
        </Card>
      </section>
      <section className={classes.contractDetails}>
        <h1 className={classes.subTitles}>Contract Details</h1>
        <input type="text"></input>
      </section>
      <section className={classes.options}>
        <SecondaryButton name="Draft" />
        <PrimaryButton name="Create" />
      </section>
    </div>
  );
}

export default CreateDivorce;
