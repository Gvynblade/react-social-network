import React from 'react';
import Styles from './dialogs.module.css';
import DialogsItem from './dialogs-item/dialogs-item';

const Dialogs = (props) => {

  let dialogsElements = props.dialogsData.map( (d) => {
    return (
      <DialogsItem
        key={'dialog with user - ' + d.prev.id}
        id={d.prev.id}
        ava={d.prev.ava}
        name={d.prev.name}
        date={d.prev.date}
        lastMsg={d.prev.lastMsg}
        dialogarr={d.dialogarr}
        addMessage={props.addDialog}
      />
    );
  })

  return (

    <div className={Styles.dialogs}>

      {dialogsElements}

    </div>
  )
}

export default Dialogs;
