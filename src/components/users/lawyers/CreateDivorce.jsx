import Card from '../../ui/Card';
import PrimaryButton from '../../ui/PrimaryButton';
import Richtext from '../../ui/RichText';
import SecondaryButton from '../../ui/SecondaryButton';
import TextField from '../../ui/TextField';
import classes from './CreateDivorce.module.css';
import RichText from '../../ui/RichText';

function CreateDivorce(props) {
  return (
    <div className={classes.createDivorce}>
      <section className={classes.addMembers}>
        <div className={classes.addInvolvedTitle}>
          <h1>Involved Parties</h1>
        </div>
        <div className={classes.spouseOneCard}>
          <Card>
            <div className={classes.involvedCard}>
              <div className={classes.cardTitle}>
                <h2>Spouse One</h2>
              </div>
              <div className={classes.taxTextField}>
                <TextField
                  labelHtmlFor="taxNumber"
                  labelText="Tax Number"
                  inputType="text"
                  inputPlaceholder="e.g 123456"
                />
              </div>
              {/* <div className={classes.cardFindButton}>
                <PrimaryButton name="Find" />
              </div> */}
              <div className={classes.taxTextField}>
                {/* <TextField
                  labelHtmlFor="email"
                  labelText="Email"
                  inputType="email"
                  inputPlaceholder="e.g 123456"
                />
              </div>
              <div className={classes.cardFindButton}>
                <PrimaryButton name="Send" />
              </div> */}
                <p>User Found</p>
              </div>
            </div>
          </Card>
        </div>
        <div className={classes.spouseTwoCard}>
          <Card>
            <div className={classes.involvedCard}>
              <div className={classes.cardTitle}>
                <h2>Spouse Two</h2>
              </div>
              <div className={classes.taxTextField}>
                <TextField
                  labelHtmlFor="taxNumber"
                  labelText="Tax Number"
                  inputType="text"
                  inputPlaceholder="e.g 123456"
                />
              </div>
              {/* <div className={classes.cardFindButton}>
                <PrimaryButton name="Find" />
              </div> */}
              <div className={classes.taxTextField}>
                <TextField
                  labelHtmlFor="email"
                  labelText="Email"
                  inputType="email"
                  inputPlaceholder="e.g 123456"
                />
              </div>
              <div className={classes.cardFindButton}>
                <PrimaryButton name="Send" />
              </div>

              <div className={classes.cardContent}></div>
            </div>
          </Card>
        </div>
        <div className={classes.lawyerTwoCard}>
          <Card>
            <div className={classes.involvedCard}>
              <div className={classes.cardTitle}>
                <h2>Second Lawyer</h2>
              </div>
              <div className={classes.taxTextField}>
                <TextField
                  labelHtmlFor="taxNumber"
                  labelText="Tax Number"
                  inputType="text"
                  inputPlaceholder="e.g 123456"
                />
              </div>
              {/* <div className={classes.cardFindButton}>
                <PrimaryButton name="Find" />
              </div> */}
              <div className={classes.taxTextField}>
                <TextField
                  labelHtmlFor="email"
                  labelText="Email"
                  inputType="email"
                  inputPlaceholder="e.g 123456"
                />
              </div>
              <div className={classes.cardFindButton}>
                <PrimaryButton name="Send" />
              </div>

              <div className={classes.cardContent}></div>
            </div>
          </Card>
        </div>
        <div className={classes.notaryCard}>
          <Card>
            <div className={classes.involvedCard}>
              <div className={classes.cardTitle}>
                <h2>Notary</h2>
              </div>
              <div className={classes.taxTextField}>
                <TextField
                  labelHtmlFor="taxNumber"
                  labelText="Tax Number"
                  inputType="text"
                  inputPlaceholder="e.g 123456"
                />
              </div>
              {/* <div className={classes.cardFindButton}>
                <PrimaryButton name="Find" />
              </div> */}
              <div className={classes.taxTextField}>
                <TextField
                  labelHtmlFor="email"
                  labelText="Email"
                  inputType="email"
                  inputPlaceholder="e.g 123456"
                />
              </div>
              <div className={classes.cardFindButton}>
                <PrimaryButton name="Send" />
              </div>

              <div className={classes.cardContent}></div>
            </div>
          </Card>
        </div>
      </section>
      <section className={classes.addDetails}>
        <div className={classes.contractDetailsTitle}>
          <h1>Contract Details</h1>
        </div>
        <div classname={classes.details}>
          <RichText />
        </div>
        <div className={classes.options}>
          <div className={classes.draftButton}>
            <PrimaryButton name="Draft" />
          </div>
          <div className={classes.createButton}>
            <PrimaryButton name="Create" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default CreateDivorce;
<section className={classes.addMembers}></section>;
