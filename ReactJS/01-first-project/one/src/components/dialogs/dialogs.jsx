import React from 'react';
import Styles from './dialogs.module.css';
import DialogPrevue from './DialogPrevue/DialogPrevue';

const Dialogs = React.memo( (props) => {

  let dialogsElements = props.dialogsData.map( (d) => {
    return (
      <DialogPrevue
        key={'dialog with user - ' + d.dialogInfo.dialogWithUserId}
        id={d.dialogInfo.dialogWithUserId}
        ava={d.dialogInfo.dialogWithUserAva}
        name={d.dialogInfo.dialogWithUserName}
        lastMsg={d.messages[d.messages.length - 1]}
        authUserId={props.authUserId}
        deleteDialog={props.deleteDialog}
        positionInArray={d.dialogInfo.dialogPositionInArr}
      />
    );
  })

  return (

    <div className={Styles.dialogs}>

      {dialogsElements}

    </div>
  )
})

export default Dialogs;
