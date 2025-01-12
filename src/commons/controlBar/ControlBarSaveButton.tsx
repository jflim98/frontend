import { Intent } from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';

import ControlButton from '../ControlButton';

type ControlBarSaveButtonProps = DispatchProps & StateProps;

type DispatchProps = {
  onClickSave?(): any;
};

type StateProps = {
  key: string;
  hasUnsavedChanges?: boolean;
};

export function ControlButtonSaveButton(props: ControlBarSaveButtonProps) {
  const saveButtonOpts = props.hasUnsavedChanges ? { intent: Intent.WARNING, minimal: false } : {};

  return (
    <ControlButton
      label="Save"
      icon={IconNames.FLOPPY_DISK}
      onClick={props.onClickSave}
      options={saveButtonOpts}
    />
  );
}
